/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.patternfly.snippet;

import java.io.IOException;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.nio.file.FileVisitResult;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.SimpleFileVisitor;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

class SnippetValidationTest {

    private static final String[] SOURCE_MODULES = {
            "core", "components", "layouts", "icons", "tokens", "charts",
            "extensions/codeeditor", "extensions/finder"
    };

    private static final Pattern SNIPPET_START = Pattern.compile("\\{@snippet\\s*:");
    private static final Pattern IMPORT_STATIC_WILDCARD = Pattern.compile(
            "import\\s+static\\s+([\\w.]+)\\.\\*\\s*;");
    private static final Pattern IMPORT_STATIC_NAMED = Pattern.compile(
            "import\\s+static\\s+([\\w.]+)\\.([\\w]+)\\s*;");
    private static final Pattern IMPORT_CLASS = Pattern.compile(
            "import\\s+([\\w.]+)\\s*;");
    private static final Pattern FIELD_ACCESS = Pattern.compile(
            "(?:^|[=(,\\s])([a-z]\\w*)\\.");
    private static final Pattern METHOD_CALL = Pattern.compile(
            "(?:^|[=(,\\s])([a-z]\\w*)\\s*\\(");

    private static final Set<String> JAVA_KEYWORDS = Set.of(
            "if", "else", "for", "while", "do", "switch", "case", "break", "continue",
            "return", "new", "this", "super", "null", "true", "false", "var",
            "int", "long", "double", "float", "boolean", "char", "byte", "short", "void");

    @Test
    void validateSnippetImports() throws IOException {
        Path projectRoot = Paths.get(System.getProperty("project.root", ".."));
        List<String> errors = new ArrayList<>();

        for (String module : SOURCE_MODULES) {
            Path sourceDir = projectRoot.resolve(module).resolve("src/main/java");
            if (!Files.isDirectory(sourceDir)) {
                continue;
            }
            findJavaFiles(sourceDir).forEach(file -> validateFile(file, errors));
        }

        assertTrue(errors.isEmpty(),
                "Snippet validation errors:\n" + String.join("\n", errors));
    }

    private void validateFile(Path file, List<String> errors) {
        try {
            String content = Files.readString(file);
            List<Snippet> snippets = extractSnippets(content, file);
            for (Snippet snippet : snippets) {
                validateSnippet(snippet, errors);
            }
        } catch (IOException e) {
            errors.add(file + ": Failed to read file: " + e.getMessage());
        }
    }

    private void validateSnippet(Snippet snippet, List<String> errors) {
        Set<String> knownMembers = new HashSet<>();

        // Validate wildcard static imports and collect members
        Matcher wildcardMatcher = IMPORT_STATIC_WILDCARD.matcher(snippet.code);
        while (wildcardMatcher.find()) {
            String className = wildcardMatcher.group(1);
            Class<?> clazz = resolveClass(className);
            if (clazz != null) {
                collectMembers(clazz, knownMembers);
            } else {
                errors.add(snippet.location() + ": Class not found in wildcard import: " + className);
            }
        }

        // Validate named static imports and collect members
        Matcher namedMatcher = IMPORT_STATIC_NAMED.matcher(snippet.code);
        while (namedMatcher.find()) {
            String className = namedMatcher.group(1);
            String memberName = namedMatcher.group(2);
            Class<?> clazz = resolveClass(className);
            if (clazz != null) {
                if (!hasMember(clazz, memberName)) {
                    errors.add(snippet.location() + ": Member '" + memberName
                            + "' not found in " + className);
                }
                knownMembers.add(memberName);
            } else {
                errors.add(snippet.location() + ": Class not found in static import: " + className);
            }
        }

        // Validate regular class imports (non-static)
        Matcher classMatcher = IMPORT_CLASS.matcher(snippet.code);
        while (classMatcher.find()) {
            String className = classMatcher.group(1);
            if (className.startsWith("java.") || className.startsWith("javax.")) {
                continue;
            }
            if (resolveClass(className) == null) {
                errors.add(snippet.location() + ": Class not found: " + className);
            }
        }

        // Validate identifiers used with field access (e.g., colorBlue10.var)
        if (!knownMembers.isEmpty()) {
            validateFieldAccess(snippet, knownMembers, errors);
        }
    }

    private void validateFieldAccess(Snippet snippet, Set<String> knownMembers, List<String> errors) {
        Set<String> localVars = collectLocalVariables(snippet.code);

        for (String line : snippet.code.split("\n")) {
            String trimmed = line.trim();
            if (trimmed.isEmpty() || trimmed.startsWith("import ") || trimmed.startsWith("//")) {
                continue;
            }

            // Strip string literals to avoid false positives
            String withoutStrings = trimmed.replaceAll("\"[^\"]*\"", "\"\"");

            // Check identifiers used with '.' (field access) — these must be
            // static fields or enum constants, so they should exist in known members.
            // Skip local variables and common pseudo-code identifiers.
            Matcher fieldMatcher = FIELD_ACCESS.matcher(withoutStrings);
            while (fieldMatcher.find()) {
                String identifier = fieldMatcher.group(1);
                if (JAVA_KEYWORDS.contains(identifier) || knownMembers.contains(identifier)
                        || localVars.contains(identifier)) {
                    continue;
                }
                errors.add(snippet.location() + ": Identifier '" + identifier
                        + "' not found in any imported class. Similar: "
                        + findSimilar(identifier, knownMembers));
            }

            // Check identifiers used with '(' (method call) — only flag if
            // the identifier is a snake_case variant of a known member
            Matcher callMatcher = METHOD_CALL.matcher(withoutStrings);
            while (callMatcher.find()) {
                String identifier = callMatcher.group(1);
                if (JAVA_KEYWORDS.contains(identifier) || knownMembers.contains(identifier)
                        || localVars.contains(identifier)) {
                    continue;
                }
                String camelCase = snakeToCamel(identifier);
                if (!camelCase.equals(identifier) && knownMembers.contains(camelCase)) {
                    errors.add(snippet.location() + ": Identifier '" + identifier
                            + "' not found. Did you mean: " + camelCase + "?");
                }
            }
        }
    }

    private Set<String> collectLocalVariables(String code) {
        Set<String> vars = new HashSet<>();

        // Match variable declarations: "Type name =" or "var name ="
        Pattern varDecl = Pattern.compile(
                "(?:^|\\s)(?:[A-Z]\\w+(?:<[^>]+>)?|var)\\s+([a-z]\\w*)\\s*[=;,)]", Pattern.MULTILINE);
        Matcher matcher = varDecl.matcher(code);
        while (matcher.find()) {
            vars.add(matcher.group(1));
        }

        // Match lambda parameters: "(name, name2) ->" or "name ->"
        Pattern lambdaParams = Pattern.compile(
                "(?:\\(([a-z]\\w*(?:\\s*,\\s*[a-z]\\w*)*)\\)|([a-z]\\w*))\\s*->");
        Matcher lambdaMatcher = lambdaParams.matcher(code);
        while (lambdaMatcher.find()) {
            String group = lambdaMatcher.group(1) != null ? lambdaMatcher.group(1) : lambdaMatcher.group(2);
            for (String param : group.split("\\s*,\\s*")) {
                vars.add(param.trim());
            }
        }

        // Common pseudo-code identifiers used in snippets (browser APIs, etc.)
        vars.addAll(Set.of("console", "window", "document"));
        return vars;
    }

    private String snakeToCamel(String snake) {
        StringBuilder sb = new StringBuilder();
        boolean capitalizeNext = false;
        for (int i = 0; i < snake.length(); i++) {
            char c = snake.charAt(i);
            if (c == '_') {
                capitalizeNext = true;
            } else if (capitalizeNext) {
                sb.append(Character.toUpperCase(c));
                capitalizeNext = false;
            } else {
                sb.append(c);
            }
        }
        return sb.toString();
    }

    private String findSimilar(String identifier, Set<String> knownMembers) {
        // Check snake_case → camelCase conversion first
        String camelCase = snakeToCamel(identifier);
        if (knownMembers.contains(camelCase)) {
            return camelCase;
        }
        // Find members with a similar prefix
        String prefix = identifier.length() > 5 ? identifier.substring(0, 5) : identifier;
        List<String> similar = new ArrayList<>();
        for (String member : knownMembers) {
            if (member.toLowerCase().startsWith(prefix.toLowerCase()) && similar.size() < 3) {
                similar.add(member);
            }
        }
        return similar.isEmpty() ? "(no similar names found)" : String.join(", ", similar);
    }

    // ------------------------------------------------------ reflection helpers

    private Class<?> resolveClass(String className) {
        try {
            return Class.forName(className);
        } catch (ClassNotFoundException e) {
            // Try nested class: replace last '.' with '$' (e.g., IconSets.fas → IconSets$fas)
            int lastDot = className.lastIndexOf('.');
            if (lastDot > 0) {
                String nested = className.substring(0, lastDot) + "$" + className.substring(lastDot + 1);
                try {
                    return Class.forName(nested);
                } catch (ClassNotFoundException ignored) {
                }
            }
            return null;
        }
    }

    private void collectMembers(Class<?> clazz, Set<String> members) {
        for (Field f : clazz.getFields()) {
            members.add(f.getName());
        }
        for (Method m : clazz.getMethods()) {
            members.add(m.getName());
        }
        if (clazz.isEnum()) {
            for (Object c : clazz.getEnumConstants()) {
                members.add(((Enum<?>) c).name());
            }
        }
    }

    private boolean hasMember(Class<?> clazz, String name) {
        for (Field f : clazz.getFields()) {
            if (f.getName().equals(name)) {
                return true;
            }
        }
        for (Method m : clazz.getMethods()) {
            if (m.getName().equals(name)) {
                return true;
            }
        }
        if (clazz.isEnum()) {
            for (Object c : clazz.getEnumConstants()) {
                if (((Enum<?>) c).name().equals(name)) {
                    return true;
                }
            }
        }
        return false;
    }

    // ------------------------------------------------------ snippet extraction

    private List<Snippet> extractSnippets(String content, Path file) {
        List<Snippet> snippets = new ArrayList<>();
        int lineNumber = 1;
        int pos = 0;

        while (pos < content.length()) {
            Matcher startMatcher = SNIPPET_START.matcher(content);
            if (!startMatcher.find(pos)) {
                break;
            }

            int snippetStart = startMatcher.end();
            lineNumber += countNewlines(content, pos, startMatcher.start());

            int depth = 1;
            int i = snippetStart;
            while (i < content.length() && depth > 0) {
                char c = content.charAt(i);
                if (c == '{') {
                    depth++;
                } else if (c == '}') {
                    depth--;
                }
                i++;
            }

            if (depth == 0) {
                String snippetCode = content.substring(snippetStart, i - 1);
                snippetCode = stripJavadocPrefix(snippetCode);
                snippets.add(new Snippet(file, lineNumber, snippetCode));
            }

            pos = i;
        }

        return snippets;
    }

    private String stripJavadocPrefix(String code) {
        StringBuilder sb = new StringBuilder();
        for (String line : code.split("\n")) {
            String stripped = line.replaceFirst("^\\s*\\*\\s?", "");
            sb.append(stripped).append("\n");
        }
        return sb.toString();
    }

    private int countNewlines(String content, int from, int to) {
        int count = 0;
        for (int i = from; i < to && i < content.length(); i++) {
            if (content.charAt(i) == '\n') {
                count++;
            }
        }
        return count;
    }

    private List<Path> findJavaFiles(Path dir) throws IOException {
        List<Path> files = new ArrayList<>();
        Files.walkFileTree(dir, new SimpleFileVisitor<>() {
            @Override
            public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) {
                if (file.toString().endsWith(".java")) {
                    files.add(file);
                }
                return FileVisitResult.CONTINUE;
            }
        });
        return files;
    }

    private record Snippet(Path file, int line, String code) {
        String location() {
            return file.getFileName() + ":" + line;
        }
    }
}

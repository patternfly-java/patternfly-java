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
/// usr/bin/env jbang "$0" "$@" ; exit $?
//JAVA 24
//JAVAC_OPTIONS --enable-preview -source 24
//JAVA_OPTIONS --enable-preview

static class SourceSpec {

    final String globSuffix;
    final Path relativeDir;

    SourceSpec(String globSuffix, Path relativeDir) {
        this.globSuffix = globSuffix;
        this.relativeDir = relativeDir;
    }
}

static final String PACKAGE_NAME = "org.patternfly.showcase";
static final String CLASS_NAME = "Code";
static final String TARGET = "src/main/java";
static final String START_COMMENT = "// @code-start:";
static final String END_COMMENT = "// @code-end:";

static final List<SourceSpec> SOURCES = Arrays.asList(
        new SourceSpec("*Component.java", Paths.get("src/main/java/org/patternfly/showcase/component")),
        new SourceSpec("*Layout.java", Paths.get("src/main/java/org/patternfly/showcase/layout"))
);

void main(String... args) throws IOException {
    if (args.length == 0 || args[0] == null || args[0].isEmpty()) {
        System.err.println("Missing base directory!");
        System.exit(1);
    }
    Path base = Paths.get(args[0]).toAbsolutePath().normalize();

    Path targetPath = base.resolve(TARGET).resolve(PACKAGE_NAME.replace('.', '/'));
    Files.createDirectories(targetPath);
    File javaSource = targetPath.resolve(CLASS_NAME + ".java").toFile();
    if (javaSource.exists() && !javaSource.delete()) {
        throw new IOException("Unable to delete existing file: " + javaSource);
    }

    StringBuilder out = new StringBuilder();
    startClass(out);
    int counter = processSnippets(base, out);
    endClass(out);
    Files.write(javaSource.toPath(), out.toString().getBytes(StandardCharsets.UTF_8));

    println("Processed " + counter + " code snippets");
}

void startClass(StringBuilder out) {
    out.append("package ").append(PACKAGE_NAME).append(";\n\n")
            .append("import java.util.Map;\n")
            .append("import java.util.HashMap;\n\n")
            .append("import javax.annotation.processing.Generated;\n\n")
            .append("/*\n")
            .append(" * WARNING! This class is generated. Do not modify.\n")
            .append(" */\n")
            .append("@Generated(\"code.java\")\n")
            .append("public final class ").append(CLASS_NAME).append(" {\n\n")
            .append("   private static final Map<String, String> snippets = new HashMap<>();\n\n")
            .append("   static {");
}

int processSnippets(Path base, StringBuilder out) throws IOException {
    int counter = 0;
    for (SourceSpec spec : SOURCES) {
        Path dir = base.resolve(spec.relativeDir);
        if (!Files.isDirectory(dir)) {
            continue;
        }
        final Predicate<String> nameMatches = globPredicate(spec.globSuffix);
        List<Path> files = new ArrayList<>();
        try (Stream<Path> stream = Files.list(dir)) {
            stream.filter(p -> Files.isRegularFile(p) && nameMatches.test(p.getFileName().toString()))
                    .forEach(files::add);
        }
        files.sort(java.util.Comparator.naturalOrder());
        for (Path p : files) {
            counter += extractFromFile(p, out);
        }
    }
    return counter;
}

int extractFromFile(Path file, StringBuilder out) throws IOException {
    String name = "";
    boolean collectCode = false;
    int leadingWhitespace = 0;
    List<String> code = new ArrayList<>();
    int counter = 0;

    try (BufferedReader reader = new BufferedReader(
            new InputStreamReader(new FileInputStream(file.toFile()), StandardCharsets.UTF_8))) {
        String line;
        while ((line = reader.readLine()) != null) {
            if (line.contains(START_COMMENT)) {
                leadingWhitespace = line.indexOf(START_COMMENT);
                name = line.substring(line.indexOf(START_COMMENT) + START_COMMENT.length());
                collectCode = true;
            } else if (collectCode) {
                if (line.contains(END_COMMENT + name)) {
                    addSnippet(out, name, code);
                    counter++;
                    // reset
                    name = "";
                    collectCode = false;
                    leadingWhitespace = 0;
                    code.clear();
                } else {
                    if (line.length() < leadingWhitespace) {
                        code.add(line);
                    } else {
                        code.add(line.substring(leadingWhitespace));
                    }
                }
            }
        }
    }
    return counter;
}

void addSnippet(StringBuilder out, String name, List<String> code) {
    out.append("\n        snippets.put(\"")
            .append(escapeJava(name))
            .append("\", \"")
            .append(escapeJava(String.join("\n", code)))
            .append("\");");
}

void endClass(StringBuilder out) {
    out.append("\n    }\n\n")
            .append("    public static String code(String name) {\n")
            .append("       return snippets.getOrDefault(name, \"n/a\");\n")
            .append("    }\n")
            .append("}\n");
}

String escapeJava(String in) {
    if (in == null) {return "";}
    StringBuilder sb = new StringBuilder(in.length());
    for (int i = 0; i < in.length(); i++) {
        char c = in.charAt(i);
        switch (c) {
            case '"':
                sb.append("\\\"");
                break;
            case '\\':
                sb.append("\\\\");
                break;
            case '\r':
                sb.append("\\r");
                break;
            case '\n':
                sb.append("\\n");
                break;
            case '\t':
                sb.append("\\t");
                break;
            default:
                sb.append(c);
        }
    }
    return sb.toString();
}

Predicate<String> globPredicate(String globSuffix) {
    // globSuffix like "*Component.java" -> endsWith("Component.java")
    if (globSuffix.startsWith("*")) {
        String suffix = globSuffix.substring(1);
        return name -> name.endsWith(suffix);
    }
    return name -> name.equals(globSuffix);
}

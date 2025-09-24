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

import com.vladsch.flexmark.html.HtmlRenderer;
import com.vladsch.flexmark.parser.Parser;
import com.vladsch.flexmark.util.ast.Node;
import com.vladsch.flexmark.util.data.MutableDataSet;

static final String PACKAGE_NAME = "org.patternfly.showcase";
static final String CLASS_NAME = "Documentation";
static final String TARGET = "src/main/java";

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
    int counter = processDocuments(base, out);
    endClass(out);
    Files.write(javaSource.toPath(), out.toString().getBytes(StandardCharsets.UTF_8));

    println("Processed " + counter + " documents");
}

void startClass(StringBuilder out) {
    out.append("package ").append(PACKAGE_NAME).append(";\n\n")
            .append("import java.util.Map;\n")
            .append("import java.util.HashMap;\n\n")
            .append("import javax.annotation.processing.Generated;\n\n")
            .append("/*\n")
            .append(" * WARNING! This class is generated. Do not modify.\n")
            .append(" */\n")
            .append("@Generated(\"doc.java\")\n")
            .append("public final class ").append(CLASS_NAME).append(" {\n\n")
            .append("    private static final Map<String, String> documents = new HashMap<>();\n\n")
            .append("    static {");
}

int processDocuments(Path base, StringBuilder out) throws IOException {
    int counter = 0;
    Path docDir = base.resolve("src/doc");
    if (!Files.isDirectory(docDir)) {
        return 0;
    }
    List<Path> files = new ArrayList<>();
    try (Stream<Path> stream = Files.list(docDir)) {
        stream.filter(p -> Files.isRegularFile(p) && p.getFileName().toString().endsWith(".md")).forEach(files::add);
    }
    files.sort(java.util.Comparator.naturalOrder());
    for (Path file : files) {
        String name = file.getFileName().toString();
        String nameNoExt = name.endsWith(".md") ? name.substring(0, name.length() - 3) : name;
        String markdown = Files.readString(file, StandardCharsets.UTF_8);
        String html = markdownToHtm(markdown);
        out.append("\n        documents.put(\"")
                .append(escapeJava(nameNoExt))
                .append("\", \"")
                .append(escapeJava(stripBody(html)))
                .append("\");");
        println("Processed " + name);
        counter++;
    }
    return counter;
}

void endClass(StringBuilder out) {
    out.append("\n    }\n\n")
            .append("    public static String doc(String name) {\n")
            .append("       return documents.getOrDefault(name, \"n/a\");\n")
            .append("    }\n")
            .append("}\n");
}

String markdownToHtm(String markdown) {
    if (markdown == null) {
        return "";
    }
    MutableDataSet options = new MutableDataSet();
    Parser parser = Parser.builder(options).build();
    HtmlRenderer renderer = HtmlRenderer.builder(options).build();
    Node document = parser.parse(markdown);
    String html = renderer.render(document);
    return html;
}

String inlineCode(String s) {
    StringBuilder out = new StringBuilder();
    boolean code = false;
    for (int i = 0; i < s.length(); i++) {
        char c = s.charAt(i);
        if (c == '`') {
            out.append(code ? "</code>" : "<code>");
            code = !code;
        } else {
            out.append(c);
        }
    }
    if (code) { // unbalanced backtick
        out.append("</code>");
    }
    return out.toString();
}

String stripBody(String html) {
    if (html == null) {return "";}
    // If the produced HTML happens to include <body>...</body>, remove it. Our minimal converter doesn't add it, but keep behavior.
    String lower = html.toLowerCase(Locale.ROOT);
    int start = lower.indexOf("<body>");
    int end = lower.lastIndexOf("</body>");
    if (start >= 0 && end >= 0 && end >= start + 6) {
        return html.substring(start + 6, end);
    }
    return html;
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


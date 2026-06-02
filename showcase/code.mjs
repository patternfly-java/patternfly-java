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
import { mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PACKAGE_NAME = "org.patternfly.showcase";
const CLASS_NAME = "Code";
const TARGET = "src/main/java";
const START_COMMENT = "// @code-start:";
const END_COMMENT = "// @code-end:";

const SOURCES = [
    { globSuffix: "*Component.java", relativeDir: "src/main/java/org/patternfly/showcase/component" },
    { globSuffix: "*Extension.java", relativeDir: "src/main/java/org/patternfly/showcase/extension" },
    { globSuffix: "*Layout.java", relativeDir: "src/main/java/org/patternfly/showcase/layout" },
    { globSuffix: "*Chart.java", relativeDir: "src/main/java/org/patternfly/showcase/chart" },
];

const args = process.argv.slice(2);
if (args.length === 0 || !args[0]) {
    console.error("Missing base directory!");
    process.exit(1);
}

const base = args[0];
const targetPath = join(base, TARGET, ...PACKAGE_NAME.split("."));
mkdirSync(targetPath, { recursive: true });

function escapeJava(str) {
    if (!str) return "";
    let sb = "";
    for (const c of str) {
        switch (c) {
            case '"': sb += '\\"'; break;
            case "\\": sb += "\\\\"; break;
            case "\r": sb += "\\r"; break;
            case "\n": sb += "\\n"; break;
            case "\t": sb += "\\t"; break;
            default: sb += c;
        }
    }
    return sb;
}

function matchesGlob(name, globSuffix) {
    if (globSuffix.startsWith("*")) {
        return name.endsWith(globSuffix.substring(1));
    }
    return name === globSuffix;
}

function extractFromFile(filePath) {
    const content = readFileSync(filePath, "utf-8");
    const lines = content.split("\n");
    const snippets = [];
    let name = "";
    let collectCode = false;
    let leadingWhitespace = 0;
    let code = [];

    for (const line of lines) {
        if (line.includes(START_COMMENT)) {
            leadingWhitespace = line.indexOf(START_COMMENT);
            name = line.substring(line.indexOf(START_COMMENT) + START_COMMENT.length);
            collectCode = true;
        } else if (collectCode) {
            if (line.includes(END_COMMENT + name)) {
                snippets.push({ name, code: [...code] });
                name = "";
                collectCode = false;
                leadingWhitespace = 0;
                code = [];
            } else {
                code.push(line.length < leadingWhitespace ? line : line.substring(leadingWhitespace));
            }
        }
    }
    return snippets;
}

let out = "";
out += `package ${PACKAGE_NAME};\n\n`;
out += "import java.util.Map;\n";
out += "import java.util.HashMap;\n\n";
out += "import javax.annotation.processing.Generated;\n\n";
out += "/*\n";
out += " * WARNING! This class is generated. Do not modify.\n";
out += " */\n";
out += '@Generated("code.mjs")\n';
out += `public final class ${CLASS_NAME} {\n\n`;
out += "   private static final Map<String, String> snippets = new HashMap<>();\n\n";
out += "   static {";

let counter = 0;
for (const spec of SOURCES) {
    const dir = join(base, spec.relativeDir);
    let files;
    try {
        files = readdirSync(dir)
            .filter(f => statSync(join(dir, f)).isFile() && matchesGlob(f, spec.globSuffix))
            .sort();
    } catch {
        continue;
    }
    for (const file of files) {
        const snippets = extractFromFile(join(dir, file));
        for (const { name, code } of snippets) {
            out += `\n        snippets.put("${escapeJava(name)}", "${escapeJava(code.join("\n"))}");`;
            counter++;
        }
    }
}

out += "\n    }\n\n";
out += `    public static String code(String name) {\n`;
out += '       return snippets.getOrDefault(name, "n/a");\n';
out += "    }\n";
out += "}\n";

writeFileSync(join(targetPath, `${CLASS_NAME}.java`), out, "utf-8");
console.log(`Processed ${counter} code snippets`);

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
///usr/bin/env jbang "$0" "$@" ; exit $?
//JAVA 24+
//PREVIEW

void main(String... args) throws IOException {
    if (args.length != 3) {
        println("Wrong number of arguments: Provided " + args.length + ", required 3");
        println("Use version.java <basedir> <patternfly.java.version> <patternfly-version>");
        System.exit(1);
    }

    String basedir = args[0];
    String patternFlyJavaVersion = args[1];
    String patternFlyVersion = args[2];
    int dot = patternFlyVersion.indexOf('.');
    String patternFlyMajor = "v" + (dot >= 0 ? patternFlyVersion.substring(0, dot) : patternFlyVersion);

    String packageName = "org.patternfly.core";
    String className = "Version";
    String target = "src/main/java";
    Path targetPath = Path.of(basedir, target, packageName.replace('.', '/'));
    Files.createDirectories(targetPath);
    Path javaSource = targetPath.resolve(className + ".java");
    Files.deleteIfExists(javaSource);

    String content = String.join("\n",
            "package " + packageName + ";",
            "",
            "import javax.annotation.processing.Generated;",
            "",
            "/*",
            " * WARNING! This class is generated. Do not modify.",
            " */",
            "@Generated(\"version.java\")",
            "public interface " + className + " {",
            "",
            "    String PATTERN_FLY_JAVA_VERSION = \"" + patternFlyJavaVersion + "\";",
            "    String PATTERN_FLY_VERSION = \"" + patternFlyVersion + "\";",
            "    String PATTERN_FLY_MAJOR_VERSION = \"" + patternFlyMajor + "\";",
            "}",
            "");

    Files.writeString(javaSource, content, StandardCharsets.UTF_8, StandardOpenOption.CREATE, StandardOpenOption.TRUNCATE_EXISTING);
    println("Generated Version.java using " + patternFlyJavaVersion + ", " + patternFlyVersion + ", " + patternFlyMajor);
}

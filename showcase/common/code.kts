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
import java.io.File
import kotlin.io.path.*

// ------------------------------------------------------ init

require(args.isNotEmpty()) {
    System.err.println("Missing base directory!")
    System.exit(1)
}

// ------------------------------------------------------ constants

val packageName = "org.patternfly.showcase"
val className = "Code"
val target = "target/generated-sources/code"
val startComment = "// @code-start:"
val endComment = "// @code-end:"
val sourcePaths = mapOf(
        "*Component.java" to Path(args[0], "src/main/java/org/patternfly/showcase/component"),
        "*Layout.java" to Path(args[0], "src/main/java/org/patternfly/showcase/layout")
)
val targetPath = Path(args[0], "${target}/${packageName.replace('.', '/')}")

// ------------------------------------------------------ main

var name = ""
var collectCode = false
var leadingWhitespace = 0
val code = mutableListOf<String>()
var counter = 0

targetPath.createDirectories()
val javaSource = File(targetPath.toFile(), "${className}.java")
if (javaSource.exists()) {
    javaSource.delete()
}

startClass()
processSnippets()
endClass()

println("Processed $counter code snippets")

// ------------------------------------------------------ functions and classes

fun startClass() {
    javaSource.appendText("""
        |package $packageName;
        |
        |import java.util.Map;
        |import java.util.HashMap;
        |
        |public final class $className {
        |
        |   private static final Map<String, String> snippets = new HashMap<>();
        |
        |   static {
    """.trimMargin())
}

fun processSnippets() {
    for ((suffix, sourcePath) in sourcePaths) {
        sourcePath.forEachDirectoryEntry(suffix) { file ->
            if (!file.isDirectory() && file.isReadable()) {
                file.forEachLine { line ->
                    if (line.contains(startComment)) {
                        leadingWhitespace = line.indexOf(startComment)
                        name = line.substringAfter(startComment)
                        collectCode = true
                    } else {
                        if (collectCode) {
                            if (line.contains(endComment + name)) {
                                CodeBlock(name, code).addSnippet()
                                counter++
                                reset()
                            } else {
                                code.add(if (line.length < leadingWhitespace) line else line.substring(leadingWhitespace))
                            }
                        }
                    }
                }
            }
        }
    }
}

fun reset() {
    name = ""
    collectCode = false
    leadingWhitespace = 0
    code.clear()
}

fun endClass() {
    javaSource.appendText("""
        |
        |    }
        |
        |    public static String code(String name) {
        |       return snippets.getOrDefault(name, "n/a");
        |    }
        |}
    """.trimMargin())
}

data class CodeBlock(val name: String, val code: List<String>)

fun CodeBlock.addSnippet() {
    javaSource.appendText("""
        |
        |        snippets.put("${name}", "${code.joinToString("\\n").escapeJava()}");
    """.trimMargin())
}

fun String.escapeJava() = this.replace("\"", "\\\"")

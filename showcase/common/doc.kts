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
import java.util.Base64

import kotlin.io.path.*

import org.apache.commons.text.StringEscapeUtils
import org.intellij.markdown.flavours.gfm.GFMFlavourDescriptor
import org.intellij.markdown.html.HtmlGenerator
import org.intellij.markdown.parser.MarkdownParser
import org.jetbrains.kotlin.maven.ExecuteKotlinScriptMojo

// ------------------------------------------------------ init

val mojo = ExecuteKotlinScriptMojo.INSTANCE
require(args.isNotEmpty()) {
    mojo.getLog().error("Missing base directory!")
    System.exit(1)
}

// ------------------------------------------------------ constants

val packageName = "org.patternfly.showcase"
val className = "Documentation"
val target = "src/main/java"
val targetPath = Path(args[0], "$target/${packageName.replace('.', '/')}")
val docPath = Path(args[0], "src/doc")
val flavour = GFMFlavourDescriptor()
val parser = MarkdownParser(flavour)
var documents = 0

// ------------------------------------------------------ main

targetPath.createDirectories()
val javaSource = File(targetPath.toFile(), "$className.java")
if (javaSource.exists()) {
    javaSource.delete()
}

startClass()
processDocuments()
endClass()

mojo.getLog().info("Processed $documents documents")

// ------------------------------------------------------ functions and classes

fun startClass() {
    javaSource.appendText("""
        |package $packageName;
        |
        |import java.util.Map;
        |import java.util.HashMap;
        |
        |import javax.annotation.processing.Generated;
        |
        |/*
        | * WARNING! This class is generated. Do not modify.
        | */
        |@Generated("doc.kts")
        |public final class $className {
        |
        |    private static final Map<String, String> documents = new HashMap<>();
        |
        |    static {
        """.trimMargin())
}

fun processDocuments() {
    docPath.forEachDirectoryEntry("*.md") { file ->
        if (!file.isDirectory() && file.isReadable()) {
            val doc = file.readText()
            val parsedTree = parser.buildMarkdownTreeFromString(doc)
            val html = HtmlGenerator(doc, parsedTree, flavour).generateHtml()
            javaSource.appendText("""
                |
                |        documents.put("${file.nameWithoutExtension}", "${html.escapeJava().stripBody()}");
                """.trimMargin())
        }
        mojo.getLog().info("Processed ${file.name}")
        documents++
    }
}

fun endClass() {
    javaSource.appendText("""
        |
        |    }
        |
        |    public static String doc(String name) {
        |       return documents.getOrDefault(name, "n/a");
        |    }
        |}
        """.trimMargin())
}

fun String.escapeJava() = StringEscapeUtils.escapeJava(this)

fun String.stripBody() = this.removePrefix("<body>").removeSuffix("</body>")

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

import kotlin.io.path.Path
import kotlin.io.path.createDirectories

import org.jetbrains.kotlin.maven.ExecuteKotlinScriptMojo

// ------------------------------------------------------ init

val mojo = ExecuteKotlinScriptMojo.INSTANCE
require(args.isNotEmpty()) {
    mojo.getLog().error("Missing base directory!")
    System.exit(1)
}

// ------------------------------------------------------ constants

val packageName = "org.patternfly.showcase"
val className = "ResourceBundle"
val target = "src/main/java"
val resources = listOf(
        Resource("avatarDark", File(args[0], "src/bundle/avatar-dark.svg"), true),
        Resource("avatarLight", File(args[0], "src/bundle/avatar-light.svg"), true),
        Resource("pfLogo", File(args[0], "src/bundle/pf-logo.svg"), false),
        Resource("components", File(args[0], "src/bundle/components.json"), false),
        Resource("layouts", File(args[0], "src/bundle/layouts.json"), false),
        Resource("rhcp", File(args[0], "src/bundle/rhcp.json"), false),
        Resource("servers", File(args[0], "src/bundle/servers.json"), false),
        // TODO String too long!
//        Resource("users", File(args[0], "src/bundle/users.json")),
)
val targetPath = Path(args[0], "$target/${packageName.replace('.', '/')}")

// ------------------------------------------------------ main

targetPath.createDirectories()
val javaSource = File(targetPath.toFile(), "$className.java")
if (javaSource.exists()) {
    javaSource.delete()
}

startClass()
processResources()
endClass()

mojo.getLog().info("Processed ${resources.size} resources")

// ------------------------------------------------------ functions and classes

fun startClass() {
    javaSource.appendText("""
    |package $packageName;
    |
    |import javax.annotation.processing.Generated;
    |
    |/*
    | * WARNING! This class is generated. Do not modify.
    | */
    |@Generated("bundle.kts")
    |public final class $className {
    |
    """.trimMargin())
}

fun processResources() {
    resources.forEach {
        javaSource.appendText("""
        |    ${it.code()}
        |
        """.trimMargin())
        mojo.getLog().info("Processed ${it.name}")
    }
}

fun endClass() {
    javaSource.appendText("\n}")
}

data class Resource(val name: String, val file: File, val encode: Boolean)

fun Resource.code() = buildString {
    append("public static final String $name = \"")
    if (encode) {
        append(Base64.getEncoder().encodeToString(file.readText().toByteArray()))
    } else {
        append(file.readLines().joinToString("\\n").escapeJava())
    }
    append("\";")
}

fun String.escapeJava() = this.replace("\"", "\\\"")

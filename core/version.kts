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

import kotlin.io.path.Path
import kotlin.io.path.createDirectories

import org.jetbrains.kotlin.maven.ExecuteKotlinScriptMojo

// ------------------------------------------------------ init

val mojo = ExecuteKotlinScriptMojo.INSTANCE
require(args.size == 3) {
    mojo.getLog().error("Wrong number of arguments: Provided ${args.size}, required 3")
    mojo.getLog().error("Use version.kts <basedir> <patternfly.java.version> <patternfly-version>")
    System.exit(1)
}

// ------------------------------------------------------ constants

val packageName = "org.patternfly.core"
val className = "Version"
val target = "src/main/java"
val targetPath = Path(args[0], "$target/${packageName.replace('.', '/')}")
val patternFlyJavaVersion = args[1]
val patternFlyVersion = args[2]
val patternFlyMajor = "v${patternFlyVersion.substringBefore('.')}"

// ------------------------------------------------------ main

targetPath.createDirectories()
val javaSource = File(targetPath.toFile(), "$className.java")
if (javaSource.exists()) {
    javaSource.delete()
}

javaSource.appendText("""
    |package $packageName;
    |
    |import javax.annotation.processing.Generated;
    |
    |/*
    | * WARNING! This class is generated. Do not modify.
    | */
    |@Generated("version.kts")
    |public interface $className {
    |
    |    String PATTERN_FLY_JAVA_VERSION = "$patternFlyJavaVersion";
    |    String PATTERN_FLY_VERSION = "$patternFlyVersion";
    |    String PATTERN_FLY_MAJOR_VERSION = "$patternFlyMajor";
    |}
    """.trimMargin())

mojo.getLog().info("Generated Version.java using $patternFlyJavaVersion, $patternFlyVersion, $patternFlyMajor")

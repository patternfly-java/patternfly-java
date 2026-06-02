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
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const args = process.argv.slice(2);
if (args.length !== 3) {
    console.error(`Wrong number of arguments: Provided ${args.length}, required 3`);
    console.error("Use version.mjs <basedir> <patternfly.java.version> <patternfly-version>");
    process.exit(1);
}

const [basedir, patternFlyJavaVersion, patternFlyVersion] = args;
const dot = patternFlyVersion.indexOf(".");
const patternFlyMajor = "v" + (dot >= 0 ? patternFlyVersion.substring(0, dot) : patternFlyVersion);

const packageName = "org.patternfly.core";
const className = "Version";
const target = "src/main/java";
const targetPath = join(basedir, target, ...packageName.split("."));
mkdirSync(targetPath, { recursive: true });

const content = `package ${packageName};

import javax.annotation.processing.Generated;

/*
 * WARNING! This class is generated. Do not modify.
 */
@Generated("version.mjs")
public interface ${className} {

    String PATTERN_FLY_JAVA_VERSION = "${patternFlyJavaVersion}";
    String PATTERN_FLY_VERSION = "${patternFlyVersion}";
    String PATTERN_FLY_MAJOR_VERSION = "${patternFlyMajor}";
}
`;

writeFileSync(join(targetPath, `${className}.java`), content, "utf-8");
console.log(`Generated Version.java using ${patternFlyJavaVersion}, ${patternFlyVersion}, ${patternFlyMajor}`);

///
///  Copyright 2023 Red Hat
///
///  Licensed under the Apache License, Version 2.0 (the "License");
///  you may not use this file except in compliance with the License.
///  You may obtain a copy of the License at
///
///      https://www.apache.org/licenses/LICENSE-2.0
///
///  Unless required by applicable law or agreed to in writing, software
///  distributed under the License is distributed on an "AS IS" BASIS,
///  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
///  See the License for the specific language governing permissions and
///  limitations under the License.
///

// @ts-ignore
import {writeFile} from 'node:fs/promises';
import camelCase from 'camelcase';
import * as TOKENS from "@patternfly/react-tokens";

// ------------------------------------------------------ constants

const keywords: string[] = ["clone", "import", "package", "private"];
const root: string = "../main/java";
const path: string = "org/patternfly/token";
const package_: string = path.replaceAll('/', '.');

// ------------------------------------------------------ tokens

interface Token {
    name: string;
    value: string;
    var: string;
}

const generateTokens = (entries: [string, Token][]) => `package ${package_};

import javax.annotation.processing.Generated;

/**
 * PatternFly CSS variable tokens.
 *
 * @see <a href="https://www.patternfly.org/tokens/about-tokens">https://www.patternfly.org/tokens/about-tokens</a>
 * @see <a href="https://www.patternfly.org/tokens/all-patternfly-tokens">https://www.patternfly.org/tokens/all-patternfly-tokens</a>
 */
@Generated("generate.ts")
@SuppressWarnings("SpellCheckingInspection")
// WARNING: This class is generated. Do not modify.
public enum Token {
    ${entries.map(([javaName, token]) => generateConstant(javaName, token)).join('\n    ')};

    /** The CSS custom property name starting with <code>--pf-t</code> */
    public final String name;
    /** The default value for the custom property. */
    public final String value;
    /** The property name wrapped in <code>var()</code>. */
    public final String var;

    Token(String name, String value, String var) {
        this.name = name;
        this.value = value;
        this.var = var;
    }
}
`;

const generateConstant = (javaName: string, token: Token) =>
    `${javaName}("${token.name}", "${token.value}", "${token.var}"),`;

const failSafeName = (value: string) => keywords.includes(value) ? value + "_" : value

// ------------------------------------------------------ main

let tokens: [string, Token][] = Object.keys(TOKENS)
    .filter(key => key.startsWith("t_"))
    .map(key => {
        let javaName = failSafeName(camelCase(key.substring(2)));
        // @ts-ignore
        let safeValue = (TOKENS[key].value).toString()
            .replace(/\n/g, "\\n")
            .replace(/"/g, '\\"');
        // @ts-ignore
        let token: Token = {name: TOKENS[key].name, value: safeValue, var: TOKENS[key].var};
        return [javaName, token];
    });

const dir = new URL(`${root}/${path}/`, import.meta.url);
await writeFile(new URL(`./Token.java`, dir), generateTokens(tokens), 'utf8');
console.info(`Generated code for ${tokens.length} tokens`);

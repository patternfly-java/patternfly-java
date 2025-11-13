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
package org.patternfly.componentgroup.theme;

import org.patternfly.style.Classes;

import elemental2.dom.Element;

import static org.jboss.elemento.svg.SVG.path;
import static org.jboss.elemento.svg.SVG.svg;
import static org.patternfly.token.Token.globalIconColorRegular;

enum Color implements SystemValue {

    SYSTEM("system", "System", "Follow system preference",
            "M23.94 16a1 1 0 0 1-.992-.876 6.957 6.957 0 0 0-6.069-6.062 1 1 0 1 1 .242-1.985 8.953 8.953 0 0 1 7.812 7.8A.999.999 0 0 1 23.94 16ZM16 5a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1Zm0 27a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1ZM4 17H1a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm27 0h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2ZM5.394 27.606a1 1 0 0 1-.707-1.707l2.12-2.12a1 1 0 1 1 1.415 1.413L6.1 27.313a.997.997 0 0 1-.707.293ZM24.485 8.515a1 1 0 0 1-.707-1.707L25.9 4.686a1 1 0 1 1 1.415 1.415l-2.122 2.12a.997.997 0 0 1-.707.294Zm-16.97 0a.997.997 0 0 1-.707-.293L4.686 6.1a1 1 0 1 1 1.415-1.415l2.12 2.122a1 1 0 0 1-.706 1.707Zm19.091 19.091a.997.997 0 0 1-.707-.293l-2.12-2.12a1 1 0 1 1 1.413-1.415l2.122 2.121a1 1 0 0 1-.707 1.707ZM16 24.875c-4.894 0-8.875-3.981-8.875-8.875a8.879 8.879 0 0 1 5.227-8.088.876.876 0 0 1 1.153 1.163 6.945 6.945 0 0 0-.63 2.925A7.133 7.133 0 0 0 20 19.125a6.948 6.948 0 0 0 2.925-.63.876.876 0 0 1 1.163 1.154A8.88 8.88 0 0 1 16 24.875Zm-4.785-14.153A7.135 7.135 0 0 0 8.875 16 7.133 7.133 0 0 0 16 23.125a7.13 7.13 0 0 0 5.278-2.34c-.419.06-.845.09-1.278.09-4.894 0-8.875-3.981-8.875-8.875 0-.433.03-.86.09-1.278Z") {
        @Override
        public boolean systemValue() {
            return true;
        }
    },
    LIGHT("light", "Light", "Always use light mode",
            "M16 25c-4.963 0-9-4.038-9-9s4.037-9 9-9 9 4.038 9 9-4.037 9-9 9Zm0-16c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7Zm0-4a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1Zm0 27a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1ZM4 17H1a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm27 0h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2ZM5.394 27.606a1 1 0 0 1-.707-1.707l2.12-2.12a1 1 0 1 1 1.415 1.413L6.1 27.313a.997.997 0 0 1-.707.293ZM24.485 8.515a1 1 0 0 1-.707-1.707L25.9 4.686a1 1 0 1 1 1.415 1.415l-2.122 2.12a.997.997 0 0 1-.707.294Zm-16.97 0a.997.997 0 0 1-.707-.293L4.686 6.1a1 1 0 1 1 1.415-1.415l2.12 2.122a1 1 0 0 1-.706 1.707Zm19.091 19.091a.997.997 0 0 1-.707-.293l-2.12-2.12a1 1 0 1 1 1.413-1.415l2.122 2.121a1 1 0 0 1-.707 1.707Z"),
    DARK("dark", "Dark", "Always use light mode",
            "M16.457 30C8.485 30 2 23.515 2 15.543c0-5.93 3.715-11.345 9.243-13.476a.999.999 0 0 1 1.289 1.3 12.185 12.185 0 0 0-.843 4.487c0 6.869 5.588 12.457 12.457 12.457 1.56 0 3.07-.284 4.487-.844a.998.998 0 0 1 1.3 1.29C27.802 26.285 22.387 30 16.456 30ZM9.992 4.904C6.338 7.134 4 11.177 4 15.544 4 22.412 9.588 28 16.457 28c4.367 0 8.41-2.338 10.639-5.992a14.39 14.39 0 0 1-2.95.302c-7.971 0-14.457-6.485-14.457-14.456 0-1.003.102-1.989.303-2.95Z");

    static Color fromIdentifier(String identifier) {
        if (SYSTEM.identifier.equals(identifier)) {
            return SYSTEM;
        } else if (LIGHT.identifier.equals(identifier)) {
            return LIGHT;
        } else if (DARK.identifier.equals(identifier)) {
            return DARK;
        } else {
            return SYSTEM;
        }
    }

    final String identifier;
    final String text;
    final String description;
    // from https://github.com/patternfly/patternfly-org/blob/main/packages/documentation-framework/components/themeSelector/themeSelector.js
    final String path;

    Color(String identifier, String text, String description, String path) {
        this.identifier = identifier;
        this.text = text;
        this.description = description;
        this.path = path;
    }

    String identifier() {
        return identifier;
    }

    Element icon() {
        return svg()
                .css(Classes.svg)
                .attr("viewBox", "0 0 32 32")
                .attr("fill", globalIconColorRegular.var)
                .add(path().attr("d", path))
                .element();
    }
}

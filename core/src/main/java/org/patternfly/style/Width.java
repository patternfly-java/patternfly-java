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
package org.patternfly.style;

public enum Width implements TypedModifier {

    width10("width-10"),

    width15("width-15"),

    width20("width-20"),

    width25("width-25"),

    width30("width-30"),

    width35("width-35"),

    width40("width-40"),

    width45("width-45"),

    width50("width-50"),

    width60("width-60"),

    width70("width-70"),

    width80("width-80"),

    width90("width-90"),

    width100("width-100"),
    ;

    private final String value;
    private final String modifier;

    Width(String value) {
        this.value = value;
        this.modifier = Classes.modifier(value);
    }

    @Override
    public String value() {
        return value;
    }

    @Override
    public String modifier() {
        return modifier;
    }
}

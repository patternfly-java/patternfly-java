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
package org.patternfly.layout;

public enum LayoutType {

    Bullseye("be", "PF6/Layout/Bullseye"),

    Flex("fx", "PF6/Layout/Flex"),

    Gallery("gy", "PF6/Layout/Gallery"),

    Grid("gr", "PF6/Layout/Grid"),

    Level("lv", "PF6/Layout/Level"),

    Split("sp", "PF6/Layout/Split"),

    Stack("st", "PF6/Layout/Stack"),
    ;

    public final String id;
    public final String layoutName;

    LayoutType(String id, String layoutName) {
        this.id = id;
        this.layoutName = layoutName;
    }
}

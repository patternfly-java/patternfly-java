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
package org.patternfly.component.pagination;

public enum PageSize {

    _10("10-per-page", 10, "10 per page"),
    _20("20-per-page", 20, "20 per page"),
    _50("50-per-page", 50, "50 per page"),
    _100("100-per-page", 100, "100 per page"),
    ;

    public final String identifier;
    public final int value;
    public final String text;

    PageSize(String identifier, int value, String text) {
        this.identifier = identifier;
        this.value = value;
        this.text = text;
    }
}

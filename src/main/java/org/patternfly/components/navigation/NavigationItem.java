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
package org.patternfly.components.navigation;

import java.util.Objects;

public class NavigationItem {

    public static final NavigationItem SEPARATOR = new NavigationItem("org.patternfly.navigationItem.separator",
            "NavigationItem");

    public final String id;
    public String title;
    public String href;

    public NavigationItem(String id, String title) {
        this(id, title, null);
    }

    public NavigationItem(String id, String title, String href) {
        this.id = id;
        this.title = title;
        this.href = href;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof NavigationItem)) {
            return false;
        }
        NavigationItem that = (NavigationItem) o;
        return id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return title;
    }
}
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
package org.patternfly.showcase.model;

import java.util.Arrays;
import java.util.List;

import elemental2.core.JsDate;

public class Repository {

    public static final List<String> keys = Arrays.asList("Repository", "Branches", "Pull requests", "Workspaces",
            "Last commit");

    public String name;
    public int branches;
    public int pullRequests;
    public int workspaces;
    public JsDate lastCommit;
    public String extraData;
}

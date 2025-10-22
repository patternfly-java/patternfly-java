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

import org.jboss.elemento.Id;
import org.patternfly.core.Tuple;

import elemental2.core.JsDate;

import static org.patternfly.core.Tuple.tuple;

public class Repository {

    public static final List<Tuple<String, String>> columns = Arrays.asList(
            tuple(Id.build("Repository"), "Repository"),
            tuple(Id.build("Branches"), "Branches"),
            tuple(Id.build("Pull requests"), "Pull requests"),
            tuple(Id.build("Workspaces"), "Workspaces"),
            tuple(Id.build("Last commit"), "Last commit"));

    public String id;
    public String name;
    public int branches;
    public int pullRequests;
    public int workspaces;
    public JsDate lastCommit;
    public String extraData;
    public List<Repository> children;
}

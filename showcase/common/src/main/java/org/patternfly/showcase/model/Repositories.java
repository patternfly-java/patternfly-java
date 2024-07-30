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

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.jboss.elemento.Id;
import org.patternfly.showcase.LoremIpsum;

import elemental2.core.JsDate;

public class Repositories {

    private static final double ONE_MONTH = 2629746000.0;
    private static final double ONE_WEEK = 604800000.0;
    private static final double ONE_DAY = 86400000.0;
    private static final double[] DELTAS = {ONE_MONTH, ONE_WEEK, ONE_DAY};

    public static List<Repository> repositories(int number) {
        List<Repository> repositories = new ArrayList<>();
        for (int i = 0; i < number; i++) {
            Repository repository = new Repository();
            repository.id = Id.uuid();
            repository.name = LoremIpsum.word() + "/" + LoremIpsum.word();
            repository.branches = 1 + new Random().nextInt(10);
            repository.pullRequests = 5 + new Random().nextInt(50);
            repository.workspaces = 1 + new Random().nextInt(5);
            double start = JsDate.now() - DELTAS[new Random().nextInt(DELTAS.length)];
            repository.lastCommit = new JsDate(start + Math.random() * (JsDate.now() - start));
            repository.extraData = LoremIpsum.paragraphs(10);
            repositories.add(repository);
        }
        return repositories;
    }
}

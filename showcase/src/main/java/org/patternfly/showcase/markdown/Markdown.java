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
package org.patternfly.showcase.markdown;

import java.util.HashMap;
import java.util.Map;

import elemental2.dom.Response;
import elemental2.promise.Promise;
import jsinterop.base.Js;

import static elemental2.dom.DomGlobal.fetch;

public final class Markdown {

    private static final Map<String, MarkdownData> cache = new HashMap<>();

    public static Promise<MarkdownData> load(String id) {
        if (cache.containsKey(id)) {
            return Promise.resolve(cache.get(id));
        }
        return fetch("/markdown/" + id + ".json")
                .then(Response::json)
                .then(json -> {
                    MarkdownData data = Js.cast(json);
                    cache.put(id, data);
                    return Promise.resolve(data);
                });
    }

    private Markdown() {
    }
}

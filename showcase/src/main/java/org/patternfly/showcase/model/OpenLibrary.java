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

import org.jboss.elemento.Id;
import org.patternfly.component.menu.MenuItem;

import elemental2.dom.Response;
import elemental2.promise.Promise;
import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

import static elemental2.dom.DomGlobal.fetch;
import static org.patternfly.component.menu.MenuItem.menuItem;

/**
 * Fetches data from <a href="https://openlibrary.org">openlibrary.org</a> and returns menu items for typeahead demos.
 */
public final class OpenLibrary {

    @JsMethod(namespace = JsPackage.GLOBAL)
    private static native String encodeURIComponent(String s);

    @JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "Object")
    static class SearchResponse {

        Doc[] docs;
    }

    @JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "Object")
    static class Doc {

        String title;
        String[] author_name;
        double first_publish_year;
    }

    private static final int MIN_QUERY_LENGTH = 3;
    private static final int RESULT_LIMIT = 50;

    public static Promise<Iterable<MenuItem>> searchBooks(String query) {
        String normalizedQuery = query == null ? "" : query.replace('/', ' ').trim();
        if (normalizedQuery.length() < MIN_QUERY_LENGTH) {
            List<MenuItem> empty = new ArrayList<>();
            return Promise.resolve((Iterable<MenuItem>) empty);
        }
        return fetch("https://openlibrary.org/search.json?q=" + encodeURIComponent(normalizedQuery) + "&limit=" + RESULT_LIMIT)
                .then(Response::json)
                .then(json -> {
                    SearchResponse response = Js.cast(json);
                    List<MenuItem> items = new ArrayList<>();
                    if (response.docs != null) {
                        for (Doc d : response.docs) {
                            String author = d.author_name != null && d.author_name.length > 0
                                    ? d.author_name[0] : "";
                            String description = author;
                            if (d.first_publish_year > 0) {
                                description += " (" + (int) d.first_publish_year + ")";
                            }
                            items.add(menuItem(Id.unique("book"), d.title)
                                    .description(description));
                        }
                    }
                    return Promise.resolve(items);
                });
    }
}

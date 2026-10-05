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
 * Fetches data from <a href="https://dummyjson.com">dummyjson.com</a> and returns menu items for typeahead demos.
 */
public final class DummyJson {

    @JsMethod(namespace = JsPackage.GLOBAL)
    private static native String encodeURIComponent(String s);

    @JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "Object")
    static class Category {

        String slug;
        String name;
        String url;
    }

    @JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "Object")
    static class ProductResponse {

        Product[] products;
    }

    @JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "Object")
    static class Product {

        double id;
        String title;
        String category;
        String description;
    }

    @JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "Object")
    static class UserSearchResponse {

        DummyJsonUser[] users;
    }

    @JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "Object")
    static class DummyJsonUser {

        double id;
        String firstName;
        String lastName;
        String email;
    }

    public static Promise<Iterable<MenuItem>> searchCategories() {
        return fetch("https://dummyjson.com/products/categories")
                .then(Response::json)
                .then(json -> {
                    Category[] categories = Js.uncheckedCast(json);
                    List<MenuItem> items = new ArrayList<>();
                    for (Category c : categories) {
                        items.add(menuItem(Id.build("category", c.slug), c.name)
                                .description(c.slug));
                    }
                    return Promise.resolve(items);
                });
    }

    public static Promise<Iterable<MenuItem>> searchProductsByCategory(String category) {
        if (category == null || category.isEmpty()) {
            List<MenuItem> empty = new ArrayList<>();
            return Promise.resolve((Iterable<MenuItem>) empty);
        }
        return fetch("https://dummyjson.com/products/category/" + encodeURIComponent(category))
                .then(Response::json)
                .then(json -> {
                    ProductResponse response = Js.cast(json);
                    List<MenuItem> items = new ArrayList<>();
                    if (response.products != null) {
                        for (Product p : response.products) {
                            items.add(menuItem(Id.build("product", String.valueOf((int) p.id)), p.title)
                                    .description(p.category));
                        }
                    }
                    return Promise.resolve(items);
                });
    }

    public static Promise<Iterable<MenuItem>> searchProducts(String query) {
        return fetch("https://dummyjson.com/products/search?q=" + encodeURIComponent(query) + "&limit=10")
                .then(Response::json)
                .then(json -> {
                    ProductResponse response = Js.cast(json);
                    List<MenuItem> items = new ArrayList<>();
                    for (Product p : response.products) {
                        items.add(menuItem(Id.build("product", String.valueOf((int) p.id)), p.title)
                                .description(p.description));
                    }
                    return Promise.resolve(items);
                });
    }

    public static Promise<Iterable<MenuItem>> searchUsers(String query) {
        return fetch("https://dummyjson.com/users/search?q=" + encodeURIComponent(query) + "&limit=10")
                .then(Response::json)
                .then(json -> {
                    UserSearchResponse response = Js.cast(json);
                    List<MenuItem> items = new ArrayList<>();
                    for (DummyJsonUser u : response.users) {
                        String name = u.firstName + " " + u.lastName;
                        items.add(menuItem(Id.build("user", String.valueOf((int) u.id)), name)
                                .description(u.email));
                    }
                    return Promise.resolve(items);
                });
    }
}

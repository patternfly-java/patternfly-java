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
package org.patternfly.showcase;

import org.jboss.elemento.router.LoadData;
import org.jboss.elemento.router.Place;
import org.jboss.elemento.router.PlaceManager;
import org.jboss.elemento.router.Places;
import org.patternfly.component.navigation.NavigationItem;

import elemental2.dom.Response;
import elemental2.promise.Promise;
import jsinterop.base.Js;

import static elemental2.dom.DomGlobal.fetch;
import static org.jboss.elemento.router.Place.place;

import static org.patternfly.component.navigation.ExpandableNavigationGroup.expandableNavigationGroup;
import static org.patternfly.component.navigation.NavigationItem.navigationItem;

public final class MarkdownManifest {

    // ------------------------------------------------------ factory

    public static Promise<MarkdownManifest> load() {
        return fetch("/markdown/manifest.json")
                .then(Response::json)
                .then(json -> {
                    ManifestItem[] items = Js.cast(json);
                    return Promise.resolve(new MarkdownManifest(items));
                });
    }

    // ------------------------------------------------------ instance

    private final ManifestItem[] items;

    private MarkdownManifest(ManifestItem[] items) {
        this.items = items;
    }

    // ------------------------------------------------------ places

    public Places places() {
        Places allPlaces = Places.places();
        addPlaces(allPlaces, items);
        return allPlaces;
    }

    private void addPlaces(Places places, ManifestItem[] items) {
        for (ManifestItem item : items) {
            if ("page".equals(item.type)) {
                String markdownId = item.id;
                places.add(
                        place(item.route).title(item.title).loader(markdownLoader(markdownId)),
                        MarkdownPage::new);
            } else if ("group".equals(item.type)) {
                if (item.hasContent) {
                    String contentId = item.contentId;
                    places.add(
                            place(item.route).title(item.title).loader(markdownLoader(contentId)),
                            MarkdownPage::new);
                }
                if (item.children != null) {
                    addPlaces(places, item.children);
                }
            }
        }
    }

    @SuppressWarnings("unchecked")
    private static LoadData<MarkdownData> markdownLoader(String markdownId) {
        return (place, parameter) -> Markdown.load(markdownId);
    }

    // ------------------------------------------------------ navigation

    public NavigationItem navItem(PlaceManager pm, String route) {
        Place place = pm.place(route);
        return navigationItem(place.route, place.title, place.route);
    }

    public org.patternfly.component.navigation.ExpandableNavigationGroup navGroup(PlaceManager pm, String groupId) {
        ManifestItem group = findGroup(groupId);
        if (group == null) {
            throw new IllegalArgumentException("No manifest group found for id: " + groupId);
        }
        org.patternfly.component.navigation.ExpandableNavigationGroup navGroup =
                expandableNavigationGroup(group.id, group.title);
        if (group.children != null) {
            for (ManifestItem child : group.children) {
                if ("page".equals(child.type)) {
                    Place place = pm.place(child.route);
                    navGroup.addItem(navigationItem(place.route, place.title, place.route));
                } else if ("group".equals(child.type)) {
                    navGroup.addGroup(navGroup(pm, child.id));
                }
            }
        }
        return navGroup;
    }

    private ManifestItem findGroup(String groupId) {
        return findGroup(items, groupId);
    }

    private ManifestItem findGroup(ManifestItem[] items, String groupId) {
        for (ManifestItem item : items) {
            if ("group".equals(item.type) && groupId.equals(item.id)) {
                return item;
            }
            if ("group".equals(item.type) && item.children != null) {
                ManifestItem found = findGroup(item.children, groupId);
                if (found != null) {
                    return found;
                }
            }
        }
        return null;
    }
}

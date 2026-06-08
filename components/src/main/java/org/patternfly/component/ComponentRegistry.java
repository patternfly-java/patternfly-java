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
package org.patternfly.component;

import java.util.HashMap;
import java.util.Map;

import org.jboss.elemento.TypedBuilder;

import elemental2.dom.HTMLElement;

/**
 * Public, type-keyed singleton registry for PatternFly components that exist at most once per page. Use this class
 * to register and look up global components such as {@link org.patternfly.component.page.Page},
 * {@link org.patternfly.component.page.Masthead}, or {@link org.patternfly.component.notification.NotificationDrawerList}.
 * <p>
 * This is distinct from {@link ComponentStore}, which is an internal, package-private store for wiring parent-child
 * relationships via DOM traversal and supports multiple instances of the same {@link ComponentType}.
 * <p>
 * Registration is done by calling {@link #registerComponent(ComponentType, BaseComponent)} or
 * {@link #registerSubComponent(ComponentType, String, SubComponent)}. Lookup is done by calling
 * {@link #lookupComponent(ComponentType)} and {@link #lookupSubComponent(ComponentType, String)}.
 * When a registered component is removed from the DOM, call {@link #unregisterComponent(ComponentType)} or
 * {@link #unregisterSubComponent(ComponentType, String)} to prevent stale references.
 */
public class ComponentRegistry {

    // ------------------------------------------------------ factory

    private static ComponentRegistry instance;

    public static ComponentRegistry componentRegistry() {
        if (instance == null) {
            instance = new ComponentRegistry();
        }
        return instance;
    }

    // ------------------------------------------------------ instance

    private final Map<ComponentType, BaseComponent<?, ?>> components;
    private final Map<String, SubComponent<?, ?>> subComponents;

    ComponentRegistry() {
        components = new HashMap<>();
        subComponents = new HashMap<>();
    }

    // ------------------------------------------------------ api

    public void registerComponent(ComponentType type, BaseComponent<?, ?> component) {
        components.put(type, component);
    }

    public void registerSubComponent(ComponentType type, String name, SubComponent<?, ?> subComponent) {
        subComponents.put(subComponentKey(type, name), subComponent);
    }

    public void unregisterComponent(ComponentType type) {
        components.remove(type);
    }

    public void unregisterSubComponent(ComponentType type, String name) {
        subComponents.remove(subComponentKey(type, name));
    }

    @SuppressWarnings("unchecked")
    public <C extends BaseComponent<E, B>, E extends HTMLElement, B extends TypedBuilder<E, B>> C lookupComponent(
            ComponentType type) {
        return (C) components.get(type);
    }

    @SuppressWarnings("unchecked")
    public <C extends SubComponent<E, B>, E extends HTMLElement, B extends TypedBuilder<E, B>> C lookupSubComponent(
            ComponentType type, String name) {
        return (C) subComponents.get(subComponentKey(type, name));
    }

    // ------------------------------------------------------ internal

    private String subComponentKey(ComponentType componentType, String name) {
        return componentType.id + name;
    }
}

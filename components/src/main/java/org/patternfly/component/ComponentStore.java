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
import java.util.function.Function;

import org.jboss.elemento.By;
import org.jboss.elemento.TypedBuilder;
import org.jboss.elemento.logger.Logger;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.closest;
import static org.jboss.elemento.Elements.onDetach;
import static org.jboss.elemento.Id.uuid;
import static org.jboss.elemento.logger.Level.DEBUG;

/**
 * The component store is an internal store for PatternFly (sub)components. It is used to share references between components
 * and their subcomponents. (Sub)components can store a reference to themselves using {@link #storeComponent(BaseComponent)}
 * resp. {@link #storeSubComponent(SubComponent)} and subcomponents can look up their parent component using
 * #lookupComponent(ComponentType, HTMLElement, boolean).
 */
final class ComponentStore {

    private static final Logger logger = Logger.getLogger(ComponentStore.class.getName());
    private static final String KEY_PREFIX = "pfcs"; // PatternFly component store
    private static final Map<String, BaseComponent<?, ?>> components = new HashMap<>();
    private static final Map<String, ComponentDelegate<?, ?>> componentDelegates = new HashMap<>();
    private static final Map<String, SubComponent<?, ?>> subComponents = new HashMap<>();

    // ------------------------------------------------------ store

    static <E extends HTMLElement, B extends TypedBuilder<E, B>> void storeComponent(BaseComponent<E, B> component) {
        String uuid = uuid();
        components.put(uuid, component);
        component.element().dataset.set(key(component.componentType()), uuid);
        onDetach(component.element(), __ -> remove(uuid, "component", components::remove));
        if (logger.isEnabled(DEBUG)) {
            logger.debug("Store component %s as %s on %o%s", component.componentType().componentName, uuid,
                    component.element(), count());
        }
    }

    static <E extends HTMLElement, B extends TypedBuilder<E, B>> void storeComponentDelegate(
            ComponentDelegate<E, B> component) {
        if (component.delegate == null) {
            logger.error("Unable to store component delegate %s. Delegate is null!", component.componentType().componentName);
        } else {
            String uuid = uuid();
            componentDelegates.put(uuid, component);
            component.element().dataset.set(key(component.componentType()), uuid);
            onDetach(component.element(), __ -> remove(uuid, "component delegate", componentDelegates::remove));
            if (logger.isEnabled(DEBUG)) {
                logger.debug("Store component delegate %s as %s on %o%s", component.componentType().componentName, uuid,
                        component.element(), count());
            }
        }
    }

    static <E extends HTMLElement, B extends TypedBuilder<E, B>> void storeSubComponent(SubComponent<E, B> subComponent) {
        String uuid = uuid();
        subComponents.put(uuid, subComponent);
        subComponent.element().dataset.set(key(subComponent.componentType, subComponent.name), uuid);
        onDetach(subComponent.element(), mr -> remove(uuid, "sub component", subComponents::remove));
        if (logger.isEnabled(DEBUG)) {
            logger.debug("Store subcomponent %s/%s as %s on %o%s", subComponent.componentType.componentName, subComponent.name,
                    uuid, subComponent.element(), count());
        }
    }

    // ------------------------------------------------------ lookup

    @SuppressWarnings("unchecked")
    static <C extends BaseComponent<E, B>, E extends HTMLElement, B extends TypedBuilder<E, B>> C lookupComponent(
            ComponentType componentType, HTMLElement element, boolean lenient) {
        return lookup(componentType, null, key(componentType), element, lenient, "component",
                key -> (C) components.get(key));
    }

    @SuppressWarnings("unchecked")
    static <C extends ComponentDelegate<E, B>, E extends HTMLElement, B extends TypedBuilder<E, B>> C lookupComponentDelegate(
            ComponentType componentType, HTMLElement element, boolean lenient) {
        return lookup(componentType, null, key(componentType), element, lenient, "component delegate",
                key -> (C) componentDelegates.get(key));
    }

    @SuppressWarnings("unchecked")
    static <S extends SubComponent<E, B>, E extends HTMLElement, B extends TypedBuilder<E, B>> S lookupSubComponent(
            ComponentType componentType, String name, HTMLElement element, boolean lenient) {
        return lookup(componentType, name, key(componentType, name), element, lenient, "sub component",
                key -> (S) subComponents.get(key));
    }

    // ------------------------------------------------------ internal

    private static String key(ComponentType componentType) {
        return KEY_PREFIX + componentType.id;
    }

    private static String key(ComponentType componentType, String name) {
        return KEY_PREFIX + componentType.id + name;
    }

    private static <T> T lookup(ComponentType componentType, String name, String key, HTMLElement element, boolean lenient,
            String type, Function<String, T> lookupFn) {
        T value = null;
        By selector = By.data(key);
        HTMLElement closest = closest(element, selector);
        if (closest != null) {
            String uuid = closest.dataset.get(key);
            if (uuid != null) {
                try {
                    value = lookupFn.apply(uuid);
                } catch (Exception e) {
                    if (!lenient) {
                        String target = name == null ? componentType.componentName : componentType.componentName + "/" + name;
                        logger.error("Cannot cast %s %o to %s", type, closest, target, name);
                    }
                }
            } else {
                if (!lenient) {
                    logger.error("No UUID found on %s element %o", element, closest);
                }
            }
        } else {
            if (!lenient) {
                logger.error("Unable to find element of %s %o using %s", type, element, selector);
            }
        }
        return value;
    }

    private static <T> void remove(String uuid, String type, Function<String, T> removeFn) {
        T value = removeFn.apply(uuid);
        if (value != null) {
            if (logger.isEnabled(DEBUG)) {
                logger.debug("Remove %s for %s%s", type, uuid, count());
            }
        } else {
            logger.error("Unable to remove %s for %s", type, uuid);
        }
    }

    private static String count() {
        return " (c:" + components.size() + "|cd:" + componentDelegates.size() + "|sc:" + subComponents.size() + ")";
    }
}

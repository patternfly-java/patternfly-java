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

import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.TypedBuilder;
import org.patternfly.core.Logger;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.closest;
import static org.jboss.elemento.Elements.onDetach;
import static org.patternfly.component.UUID.uuid;

final class ComponentStore {

    private static final String COMPONENT_KEY_PREFIX = "pfc"; // PatternFly component
    private static final String SUB_COMPONENT_KEY_PREFIX = "pfs"; // PatternFly subcomponent
    private static final String CATEGORY = "ComponentStore";
    private static final Map<String, BaseComponent<?, ?>> components = new HashMap<>();
    private static final Map<String, BaseSubComponent<?, ?>> subComponents = new HashMap<>();

    // ------------------------------------------------------ store

    static <E extends HTMLElement, B extends TypedBuilder<E, B>> void storeComponent(BaseComponent<E, B> component) {
        String uuid = uuid();
        components.put(uuid, component);
        component.element().dataset.set(componentKey(component.componentType()), uuid);
        onDetach(component.element(), __ -> remove(uuid));
        Logger.debug(CATEGORY, "Store component " + component.componentType().componentName + " as " + uuid +
                " on " + Elements.toString(component.element()) + count());
    }

    static <E extends HTMLElement, B extends TypedBuilder<E, B>> void storeSubComponent(
            BaseSubComponent<E, B> subComponent) {
        String uuid = uuid();
        subComponents.put(uuid, subComponent);
        subComponent.element().dataset.set(subComponentKey(subComponent.componentType(), subComponent.name()), uuid);
        onDetach(subComponent.element(), mr -> remove(uuid));
        Logger.debug(CATEGORY, "Store subcomponent " + subComponent.componentType().componentName + "/"
                + subComponent.name() + " as " + uuid + " on " + Elements.toString(subComponent.element()) + count());
    }

    // ------------------------------------------------------ lookup

    @SuppressWarnings("unchecked")
    static <C extends BaseComponent<E, B>, E extends HTMLElement, B extends TypedBuilder<E, B>> C lookupComponent(
            ComponentType componentType, HTMLElement element, boolean lenient) {
        C component = null;
        String key = componentKey(componentType);
        By selector = By.data(key);
        HTMLElement closest = closest(element, selector);
        if (closest != null) {
            String uuid = closest.dataset.get(key);
            if (uuid != null) {
                try {
                    component = (C) components.get(uuid);
                } catch (ClassCastException e) {
                    if (!lenient) {
                        Logger.undefined(CATEGORY, closest, "Cannot cast component to " + componentType.componentName);
                    }
                }
            } else {
                if (!lenient) {
                    Logger.undefined(CATEGORY, closest, "No UUID found on component element");
                }
            }
        } else {
            if (!lenient) {
                Logger.undefined(CATEGORY, element, "Unable to find element of component using " + selector);
            }
        }
        return component;
    }

    @SuppressWarnings("unchecked")
    static <S extends BaseSubComponent<E, B>, E extends HTMLElement, B extends TypedBuilder<E, B>> S lookupSubComponent(
            ComponentType componentType, String name, HTMLElement element, boolean lenient) {
        S subComponent = null;
        String key = subComponentKey(componentType, name);
        By selector = By.data(key);
        HTMLElement closest = closest(element, selector);
        if (closest != null) {
            String uuid = closest.dataset.get(key);
            if (uuid != null) {
                try {
                    subComponent = (S) subComponents.get(uuid);
                } catch (Exception e) {
                    if (!lenient) {
                        Logger.undefined(CATEGORY, closest,
                                "Cannot cast subcomponent to " + componentType.componentName + "/" + name);
                    }
                }
            } else {
                if (!lenient) {
                    Logger.undefined(CATEGORY, closest, "No UUID found on subcomponent element");
                }
            }
        } else {
            if (!lenient) {
                Logger.undefined(CATEGORY, element, "Unable to find element of subcomponent using " + selector);
            }
        }
        return subComponent;
    }

    // ------------------------------------------------------ internal

    private static String componentKey(ComponentType componentType) {
        return COMPONENT_KEY_PREFIX + componentType.id;
    }

    private static String subComponentKey(ComponentType componentType, String name) {
        return SUB_COMPONENT_KEY_PREFIX + componentType.id + name;
    }

    private static void remove(String uuid) {
        BaseComponent<?, ?> c = components.remove(uuid);
        BaseSubComponent<?, ?> s = subComponents.remove(uuid);
        if (c != null) {
            Logger.debug(CATEGORY, "Remove component for " + uuid + count());
        } else if (s != null) {
            Logger.debug(CATEGORY, "Remove subcomponent for " + uuid + count());
        } else {
            Logger.undefined(CATEGORY, null, "Unable to remove (sub)component for " + uuid);
        }
    }

    private static String count() {
        return " (" + components.size() + "/" + subComponents.size() + ")";
    }
}

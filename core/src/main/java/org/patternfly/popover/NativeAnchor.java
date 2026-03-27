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
package org.patternfly.popover;

import java.util.function.Supplier;

import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.patternfly.popper.Placement;

import elemental2.dom.HTMLElement;

import static elemental2.dom.DomGlobal.document;

/**
 * Shared anchor positioning logic for components based on the native popover API and CSS anchor positioning. Manages trigger
 * resolution, CSS anchor setup/teardown, and placement CSS class toggling.
 *
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/API/Popover_API">https://developer.mozilla.org/en-US/docs/Web/API/Popover_API</a>
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning">https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning</a>
 */
public class NativeAnchor {

    private final String id;
    private int distance;
    private final HTMLElement positioned;
    private Supplier<HTMLElement> triggerSupplier;
    private HTMLElement trigger;

    public NativeAnchor(String id, int distance, HTMLElement positioned, Supplier<HTMLElement> triggerSupplier) {
        this.id = id;
        this.distance = distance;
        this.positioned = positioned;
        this.triggerSupplier = triggerSupplier;
    }

    // ------------------------------------------------------ trigger

    public void trigger(String selector) {
        this.triggerSupplier = () -> Elements.querySelector(document.body, By.selector(selector));
    }

    public void trigger(By selector) {
        this.triggerSupplier = () -> Elements.querySelector(document.body, selector);
    }

    public void trigger(HTMLElement element) {
        this.triggerSupplier = () -> element;
    }

    public void trigger(Supplier<HTMLElement> supplier) {
        this.triggerSupplier = supplier;
    }

    // ------------------------------------------------------ lifecycle

    /** Resolves the trigger and sets up CSS anchor positioning. Returns the resolved trigger element or {@code null}. */
    public HTMLElement attach() {
        if (triggerSupplier != null) {
            trigger = triggerSupplier.get();
            if (trigger != null) {
                String anchorName = "--" + id;
                trigger.style.setProperty("anchor-name", anchorName);
                positioned.style.setProperty("position-anchor", anchorName);
                positioned.style.setProperty("margin", distance + "px");
            }
        }
        return trigger;
    }

    /** Removes anchor positioning styles and clears the trigger reference. */
    public void detach() {
        if (trigger != null) {
            trigger.style.removeProperty("anchor-name");
            trigger = null;
        }
    }

    // ------------------------------------------------------ placement

    /** Removes all placement modifier CSS classes and applies the given placement. */
    public void applyPlacement(Placement placement) {
        for (String mod : Placement.modifiers) {
            positioned.classList.remove(mod);
        }
        if (placement.modifier != null && !placement.modifier.isEmpty()) {
            positioned.classList.add(placement.modifier);
        }
    }

    // ------------------------------------------------------ access

    public HTMLElement trigger() {
        return trigger;
    }

    public boolean hasTriggerSupplier() {
        return triggerSupplier != null;
    }

    public int distance() {
        return distance;
    }

    public void distance(int distance) {
        this.distance = distance;
    }
}
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
package org.patternfly.position;

import java.util.function.Supplier;

import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.logger.Logger;
import org.patternfly.popper.Placement;
import org.patternfly.style.Classes;
import elemental2.dom.DOMRect;
import elemental2.dom.HTMLElement;

import static elemental2.dom.DomGlobal.document;
import static elemental2.dom.DomGlobal.window;
import static org.patternfly.popper.Placement.auto;
import static org.patternfly.popper.Placement.bottom;
import static org.patternfly.popper.Placement.left;
import static org.patternfly.popper.Placement.right;
import static org.patternfly.popper.Placement.top;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.TypedModifier.swap;

/**
 * Shared anchor positioning logic for components based on the native popover API and CSS anchor positioning. Manages trigger
 * resolution, CSS anchor setup/teardown, and placement CSS class toggling.
 *
 * @see <a
 * href="https://developer.mozilla.org/en-US/docs/Web/API/Popover_API">https://developer.mozilla.org/en-US/docs/Web/API/Popover_API</a>
 * @see <a
 * href="https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning">https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning</a>
 */
public class AnchorPositioning {

    private static final Logger logger = Logger.getLogger(AnchorPositioning.class.getName());
    private final String id;
    private final HTMLElement popover;
    private final boolean cssPositioning;
    private Supplier<HTMLElement> triggerSupplier;
    private HTMLElement trigger;
    private int distance;

    public AnchorPositioning(String id, HTMLElement popover, Supplier<HTMLElement> triggerSupplier, int distance,
            boolean cssPositioning) {
        this.id = id;
        this.popover = popover;
        this.triggerSupplier = triggerSupplier;
        this.distance = distance;
        this.cssPositioning = cssPositioning;
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
                popover.style.setProperty("position-anchor", anchorName);
                popover.style.setProperty("margin", distance + "px");
                if (cssPositioning) {
                    popover.classList.add(modifier(Classes.cssPositioning));
                }
            }
        }
        return trigger;
    }

    /** Removes anchor positioning styles and clears the trigger reference. */
    public void detach() {
        if (trigger != null) {
            trigger.style.removeProperty("anchor-name");
            popover.classList.remove(modifier(Classes.cssPositioning));
            trigger = null;
        }
    }

    // ------------------------------------------------------ placement

    /** Removes all placement modifier CSS classes and applies the given placement. */
    public void applyPlacement(Placement placement) {
        swap(null, popover, placement, Placement.values());
    }

    /**
     * Applies the best placement for the popover element based on the provided preferred placement and available space around
     * the trigger element.
     *
     * @param preferred The preferred placement of the element.
     */
    public void applyBestPlacement(Placement preferred) {
        applyPlacement(bestPlacement(preferred));
    }

    /**
     * Determines the best placement for an element based on the preferred placement and available space around the trigger
     * element.
     * <p>
     * The placement is chosen by considering the available space in all directions, honoring the preferred placement if
     * sufficient space is available, or applying fallback rules to determine the optimal placement.
     *
     * @param preferred The preferred placement of the element. If {@code auto}, the method calculates the best placement based
     *                  on the space around the trigger element.
     * @return The optimal {@link Placement} for the element considering the preferred placement and the available space.
     */
    private Placement bestPlacement(Placement preferred) {
        DOMRect triggerRect = trigger.getBoundingClientRect();
        DOMRect positionedRect = popover.getBoundingClientRect();
        double above = triggerRect.top;
        double below = window.innerHeight - triggerRect.bottom;
        double toLeft = triggerRect.left;
        double toRight = window.innerWidth - triggerRect.right;

        // Check which directions have enough space for the tooltip
        boolean topFits = above >= positionedRect.height + distance;
        boolean bottomFits = below >= positionedRect.height + distance;
        boolean leftFits = toLeft >= positionedRect.width / 3 + distance;
        boolean rightFits = toRight >= positionedRect.width / 3 + distance;

        Placement placement;
        // Honor explicit preference if it fits
        if (preferred != auto) {
            if (preferred == top && topFits) {placement = top;} else if (preferred == bottom && bottomFits) {
                placement = bottom;
            } else if (preferred == left && leftFits) {placement = left;} else if (preferred == right && rightFits) {
                placement = right;
            } else {placement = null;}
        } else {
            placement = null;
        }

        if (placement == null) {
            // Otherwise apply these rules:
            // - prefer top, but only if the trigger is not near a horizontal edge
            // - prefer horizontal when the trigger is near a horizontal edge
            // - top wins over bottom when both horizontal directions fit
            // - last resort: pick the side with the most space
            if (topFits && leftFits && rightFits) {placement = top;} else if (rightFits && !leftFits) {
                placement = right;
            } else if (leftFits && !rightFits) {placement = left;} else if (topFits) {placement = top;} else if (bottomFits) {
                placement = bottom;
            } else {placement = toRight >= toLeft ? right : left;}
        }

        logger.debug("Best placement for %s: preferred=%s, calculated=%s", id, preferred.name(), placement.name());
        return placement;
    }

    // ------------------------------------------------------ access

    public boolean cssPositioning() {
        return cssPositioning;
    }

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

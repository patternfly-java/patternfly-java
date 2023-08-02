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
package org.patternfly.components;

import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Stream;

import org.jboss.elemento.HtmlContent;
import org.patternfly.resources.CSS;
import org.patternfly.resources.Constants;

import elemental2.dom.HTMLElement;

import static java.lang.Math.abs;
import static org.jboss.elemento.Elements.insertBefore;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.Elements.stream;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.Constants.chipGroup;

/**
 * PatternFly chip group component.
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/chipgroup">https://www.patternfly.org/v4/documentation/core/components/chipgroup</a>
 */
public class ChipGroup extends BaseComponent<HTMLElement, ChipGroup> implements HtmlContent<HTMLElement, ChipGroup> {

    // ------------------------------------------------------ factory methods

    public static ChipGroup chipGroup() {
        return new ChipGroup();
    }

    public static ChipGroup chipGroup(int max) {
        return new ChipGroup(max);
    }

    // ------------------------------------------------------ instance

    private final int max;
    private boolean expanded;
    private Chip overflow;

    protected ChipGroup() {
        this(-1);
    }

    protected ChipGroup(int max) {
        super(ul().css(component(chipGroup)).element(), "ChipGroup");

        this.max = max > 1 ? max : -1; // assert max > 1
        this.expanded = false;

        if (constrained()) {
            overflow = Chip.overflow("").cloneAsLi().onClose(this::toggle);
            element.appendChild(overflow.element()); // do not use add(overflow)!
            setVisible(overflow.element(), false);
        }
    }

    @Override
    public ChipGroup that() {
        return this;
    }

    // ------------------------------------------------------ public API

    public ChipGroup add(Chip chip) {
        Chip liChip = chip.cloneAsLi();

        if (constrained()) {
            liChip.onClose(this::redraw); // redraw after chip has been removed
            setVisible(liChip.element(), false);
            insertBefore(liChip.element(), overflow.element());
            redraw();
        } else {
            element.appendChild(liChip.element());
        }
        return this;
    }

    // ------------------------------------------------------ internals

    private void redraw() {
        AtomicInteger index = new AtomicInteger(0);
        chips().forEach(e -> setVisible(e, expanded || index.getAndIncrement() < max));

        int space = max - chipsCount();
        overflow.text(expanded ? "Show Less" : abs(space) + " more");
        setVisible(overflow.element(), space < 0);
        if (expanded && space >= 0) {
            expanded = false;
        }
    }

    private void toggle() {
        expanded = !expanded;
        redraw();
    }

    private int chipsCount() {
        return (int) chips().count();
    }

    private Stream<HTMLElement> chips() {
        return stream(element).filter(e -> e.classList.contains(component(Constants.chip))
                && !e.classList.contains(CSS.modifier(Constants.overflow)));
    }

    private boolean constrained() {
        return max != -1;
    }
}

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
package org.patternfly.component.table;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.Elements;
import org.jboss.elemento.Id;
import org.patternfly.component.ComponentType;
import org.patternfly.component.tooltip.TooltipToggle;

import elemental2.dom.MutationRecord;

import static org.jboss.elemento.Elements.span;
import static org.patternfly.core.Attributes.tabindex;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.screenReader;
import static org.patternfly.style.Classes.table;
import static org.patternfly.style.Classes.th;

public class Th extends Cell<Th> implements Attachable {

    // ------------------------------------------------------ factory

    /**
     * Factory method to create a new instance of this component.
     */
    public static Th th() {
        return new Th(Id.unique(ComponentType.Table.id, "th"));
    }

    public static Th th(String identifier) {
        return new Th(identifier);
    }

    // ------------------------------------------------------ instance

    static final String SUB_COMPONENT_NAME = "th";
    private final TooltipToggle tooltipToggle;

    Th(String identifier) {
        super(SUB_COMPONENT_NAME, identifier, Elements.th().css(component(table, th))
                .apply(th -> th.scope = "col")
                .attr(tabindex, -1)
                .element());
        tooltipToggle = new TooltipToggle(element());
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        tooltipToggle.eval(tt -> element().tabIndex = 0, tt -> element().tabIndex = -1);
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        tooltipToggle.stop();
    }

    // ------------------------------------------------------ builder

    public Th screenReader(String text) {
        return add(span().css(screenReader).textContent(text));
    }

    @Override
    public Th that() {
        return this;
    }
}

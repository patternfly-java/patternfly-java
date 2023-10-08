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
package org.patternfly.core;

import java.util.function.Consumer;

import org.gwtproject.event.shared.HandlerRegistration;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLElement;
import elemental2.dom.Node;

import static elemental2.dom.DomGlobal.document;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.core.Attributes.hidden;
import static org.patternfly.layout.Classes.modifier;

/** Reusable class for components which have a collapsible / expandable UI element */
public class CollapseExpand {

    public Consumer<Boolean> onToggle;
    private HandlerRegistration closeHandler;

    public void expand(HTMLElement root, HTMLElement button, HTMLElement menu) {
        if (!expanded(root)) {
            closeHandler = bind(document, click, e -> {
                boolean clickInside = root.contains((Node) e.target);
                if (!clickInside) {
                    collapse(root, button, menu);
                }
            });
            root.classList.add(modifier(Classes.expanded));
            button.setAttribute(Aria.expanded, true);
            menu.removeAttribute(hidden);
            setVisible(menu, true);
            if (onToggle != null) {
                onToggle.accept(true);
            }
        } else {
            collapse(root, button, menu);
        }
    }

    public void collapse(HTMLElement root, HTMLElement button, HTMLElement menu) {
        if (expanded(root)) {
            root.classList.remove(modifier(Classes.expanded));
            button.setAttribute(Aria.expanded, false);
            menu.hidden = true;
            setVisible(menu, false);
            closeHandler.removeHandler();
            if (onToggle != null) {
                onToggle.accept(false);
            }
        }
    }

    public boolean expanded(HTMLElement root) {
        return root.classList.contains(modifier(Classes.expanded));
    }
}

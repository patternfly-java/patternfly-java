package org.patternfly.components;

import java.util.function.Consumer;

import elemental2.dom.HTMLElement;
import elemental2.dom.Node;
import org.gwtproject.event.shared.HandlerRegistration;

import static elemental2.dom.DomGlobal.document;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.expanded;
import static org.patternfly.resources.Constants.false_;
import static org.patternfly.resources.Constants.hidden;
import static org.patternfly.resources.Constants.true_;

/** Reusable class for components which have a collapsible / expandable UI element */
class CollapseExpandHandler {

    Consumer<Boolean> onToggle;
    private HandlerRegistration closeHandler;

    void expand(HTMLElement root, HTMLElement button, HTMLElement menu) {
        if (!expanded(root)) {
            closeHandler = bind(document, click, e -> {
                boolean clickInside = root.contains((Node) e.target);
                if (!clickInside) {
                    collapse(root, button, menu);
                }
            });
            root.classList.add(modifier(expanded));
            button.setAttribute("aria-expanded", true_);
            menu.removeAttribute(hidden);
            setVisible(menu, true);
            if (onToggle != null) {
                onToggle.accept(true);
            }
        } else {
            collapse(root, button, menu);
        }
    }

    void collapse(HTMLElement root, HTMLElement button, HTMLElement menu) {
        if (expanded(root)) {
            root.classList.remove(modifier(expanded));
            button.setAttribute("aria-expanded", false_);
            menu.hidden = true;
            setVisible(menu, false);
            closeHandler.removeHandler();
            if (onToggle != null) {
                onToggle.accept(false);
            }
        }
    }

    boolean expanded(HTMLElement root) {
        return root.classList.contains(modifier(expanded));
    }
}

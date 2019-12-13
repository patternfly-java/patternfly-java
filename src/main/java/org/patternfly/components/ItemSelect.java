package org.patternfly.components;

import java.util.ArrayList;
import java.util.List;
import java.util.function.BiConsumer;
import java.util.function.Function;

import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import org.gwtproject.event.shared.HandlerRegistration;
import org.gwtproject.event.shared.HandlerRegistrations;
import org.jboss.gwt.elemento.core.By;

import static org.jboss.gwt.elemento.core.Elements.find;
import static org.jboss.gwt.elemento.core.Elements.findAll;
import static org.jboss.gwt.elemento.core.EventType.bind;
import static org.jboss.gwt.elemento.core.EventType.click;

/** Reusable class for data components w/ select checkboxes. */
class ItemSelect {

    private final HTMLElement root;
    private HandlerRegistration selectItemHandler;

    ItemSelect(HTMLElement root) {
        this.root = root;
    }

    void bindSelectHandler(By selector, Function<HTMLInputElement, String> closestId,
            BiConsumer<String, Boolean> selection) {
        List<HandlerRegistration> handler = new ArrayList<>();
        for (HTMLElement e : findAll(root, selector)) {
            handler.add(bind(e, click, evt -> {
                HTMLInputElement checkbox = (HTMLInputElement) e;
                String id = closestId.apply(checkbox);
                if (id != null) {
                    selection.accept(id, checkbox.checked);
                }
            }));
        }

        if (!handler.isEmpty()) {
            selectItemHandler = HandlerRegistrations.compose(handler.toArray(new HandlerRegistration[0]));
        }
    }

    void removeSelectHandler() {
        if (selectItemHandler != null) {
            selectItemHandler.removeHandler();
            selectItemHandler = null;
        }
    }

    void updateSelection(By selector, boolean selected) {
        HTMLInputElement checkbox = find(root, selector);
        if (checkbox != null) {
            checkbox.checked = selected;
        }
    }
}

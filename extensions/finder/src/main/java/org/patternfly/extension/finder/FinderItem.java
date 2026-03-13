package org.patternfly.extension.finder;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.jboss.elemento.ElementTextDelegate;
import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.ComponentIcon;
import org.patternfly.component.Expandable;
import org.patternfly.component.HasIdentifier;
import org.patternfly.core.Aria;
import org.patternfly.core.ComponentContext;
import org.patternfly.core.Dataset;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.style.Classes;
import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.insertAfter;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Role.treeitem;
import static org.patternfly.core.Aria.expanded;
import static org.patternfly.core.Aria.selected;
import static org.patternfly.extension.finder.FinderClasses.finder;
import static org.patternfly.extension.finder.FinderClasses.folder;
import static org.patternfly.extension.finder.FinderClasses.pin;
import static org.patternfly.extension.finder.FinderItemDescription.finderItemDescription;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.content;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Modifiers.toggleModifier;

public class FinderItem extends FinderSubComponent<HTMLElement, FinderItem> implements
        ComponentContext<HTMLElement, FinderItem>,
        ComponentIcon<HTMLElement, FinderItem>,
        ElementTextDelegate<HTMLElement, FinderItem>,
        Expandable<HTMLElement, FinderItem>,
        HasIdentifier<HTMLElement, FinderItem> {

    // ------------------------------------------------------ factory

    public static FinderItem finderItem(String identifier) {
        return new FinderItem(identifier);
    }

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "fi";
    private final String identifier;
    private final Map<String, Object> data;
    private final List<ToggleHandler<FinderItem>> toggleHandler;
    private final HTMLContainerBuilder<HTMLElement> ic; // icon container
    private final HTMLContainerBuilder<HTMLElement> cc; // content container
    private final HTMLContainerBuilder<HTMLElement> tc; // text container

    FinderItem(String identifier) {
        super(SUB_COMPONENT_NAME, li().css(component(finder, item))
                .apply(li -> li.tabIndex = 0)
                .aria(selected, false)
                .data(Dataset.identifier, identifier)
                .role(treeitem)
                .element());
        this.identifier = identifier;
        this.data = new HashMap<>();
        this.toggleHandler = new ArrayList<>();

        add(div().css(component(finder, item, Classes.row))
                .add(ic = span().css(component(finder, item, icon)))
                .add(cc = span().css(component(finder, item, content))
                        .add(tc = span().css(component(finder, item, Classes.text))))
                .add(button().css(component(finder, item, pin)))
                .add(span().css(component(finder, item, folder, icon))));
    }

    @Override
    public Element textDelegate() {
        return tc.element();
    }

    // ------------------------------------------------------ add

    public FinderItem addDescription(String description) {
        return add(finderItemDescription().text(description));
    }

    public FinderItem addDescription(FinderItemDescription description) {
        return add(description);
    }

    // override to ensure internal wiring
    public FinderItem add(FinderItemDescription description) {
        cc.add(description.element());
        return this;
    }

    public FinderItem addActions(FinderItemActions actions) {
        return add(actions);
    }

    public FinderItem add(FinderItemActions actions) {
        insertAfter(actions.element(), cc.element());
        return this;
    }

    // ------------------------------------------------------ builder

    /** Same as {@linkplain #folder(boolean) folder(true)} */
    public FinderItem folder() {
        return folder(true);
    }

    /** Adds/removes {@linkplain Classes#modifier(String) modifier(folder)} */
    public FinderItem folder(boolean folder) {
        aria(expanded, false);
        return toggleModifier(this, element(), FinderClasses.folder, folder);
    }

    @Override
    public FinderItem icon(Element icon) {
        removeIcon();
        ic.add(icon);
        return this;
    }

    @Override
    public FinderItem removeIcon() {
        removeChildrenFrom(ic);
        return this;
    }

    @Override
    public <T> FinderItem store(String key, T value) {
        data.put(key, value);
        return this;
    }

    @Override
    public FinderItem that() {
        return this;
    }

    // ------------------------------------------------------ events

    public FinderItem onToggle(ToggleHandler<FinderItem> toggleHandler) {
        this.toggleHandler.add(toggleHandler);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public String identifier() {
        return identifier;
    }

    @Override
    public boolean has(String key) {
        return data.containsKey(key);
    }

    @SuppressWarnings("unchecked")
    public <T> T get(String key) {
        if (data.containsKey(key)) {
            return (T) data.get(key);
        }
        return null;
    }

    @Override
    public void collapse(boolean fireEvent) {
        if (expanded()) {
            Expandable.collapse(element(), element(), null);
            if (fireEvent) {
                toggleHandler.forEach(th -> th.onToggle(new Event(""), this, false));
            }
        }
    }

    @Override
    public void expand(boolean fireEvent) {
        if (!expanded()) {
            Expandable.expand(element(), element(), null);
            if (fireEvent) {
                toggleHandler.forEach(th -> th.onToggle(new Event(""), this, true));
            }
        }
    }

    // ------------------------------------------------------ internal

    void markSelected(boolean selected) {
        aria(Aria.selected, selected);
        classList().toggle(modifier(Classes.selected), selected);
    }
}

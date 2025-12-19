package org.patternfly.component.wizard;

import java.util.HashMap;
import java.util.Map;

import org.jboss.elemento.ElementTextDelegate;
import org.jboss.elemento.HTMLContainerBuilder;
import org.patternfly.component.ComponentIcon;
import org.patternfly.component.HasIdentifier;
import org.patternfly.component.ValidationStatus;
import org.patternfly.core.ComponentContext;
import org.patternfly.style.Classes;
import org.patternfly.style.Modifiers;
import elemental2.dom.Element;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertBefore;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.core.Aria.current;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.link;
import static org.patternfly.style.Classes.main;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.nav;
import static org.patternfly.style.Classes.screenReader;
import static org.patternfly.style.Classes.wizard;

public class WizardNavItem extends WizardSubComponent<HTMLElement, WizardNavItem> implements
        ComponentContext<HTMLElement, WizardNavItem>,
        ComponentIcon<HTMLElement, WizardNavItem>,
        Modifiers.Disabled<HTMLElement, WizardNavItem>,
        HasIdentifier<HTMLElement, WizardNavItem>,
        ElementTextDelegate<HTMLElement, WizardNavItem> {

    // ------------------------------------------------------ factory
    // No factory methods here! New nav items are only allowed to be created from internal methods in Wizard

    // ------------------------------------------------------ instance

    public static final String SUB_COMPONENT_NAME = "wzni";
    private final String identifier;
    private final Map<String, Object> data;
    private final HTMLElement textElement;
    private HTMLElement screenReaderElement;
    private HTMLElement iconContainer;
    final HTMLContainerBuilder<HTMLButtonElement> button;

    WizardNavItem(String identifier, String title) {
        super(SUB_COMPONENT_NAME, li().css(component(wizard, nav, item)).element());
        this.identifier = identifier;
        this.data = new HashMap<>();

        add(button = button().css(component(wizard, nav, link))
                .aria(current, "false")
                .on(click, event -> {
                    Wizard wizard = lookupComponent();
                    wizard.select(identifier);
                })
                .add(textElement = span().css(component(wizard, nav, link, main))
                        .text(title)
                        .element()));
    }

    @Override
    public Element textDelegate() {
        return textElement;
    }

    // ------------------------------------------------------ builder

    @Override
    public WizardNavItem disabled(boolean disabled) {
        button.element().disabled = disabled;
        button.css(modifier(Classes.disabled));
        return this;
    }

    @Override
    public WizardNavItem icon(Element icon) {
        if (iconContainer == null) {
            insertBefore(iconContainer = span().css(component(wizard, nav, link, Classes.status, Classes.icon)).element(),
                    textElement);
        }
        removeChildrenFrom(iconContainer);
        iconContainer.appendChild(icon);
        return this;
    }

    @Override
    public WizardNavItem removeIcon() {
        return this;
    }

    @Override
    public <T> WizardNavItem store(String key, T value) {
        data.put(key, value);
        return this;
    }

    @Override
    public WizardNavItem that() {
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public boolean isDisabled() {
        return button.element().disabled;
    }

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

    // ------------------------------------------------------ internal

    void status(ValidationStatus status) {
        if (status == null) {
            removeIcon();
            failSafeRemoveFromParent(screenReaderElement);
            screenReaderElement = null;
            iconContainer = null;
        } else {
            icon(status.icon.get());
            insertFirst(button.element(), screenReaderElement = span().css(screenReader)
                    .text(status.status.value())
                    .element());
        }
    }
}

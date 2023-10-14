package org.patternfly.core;

import org.jboss.elemento.IsElement;
import org.jboss.elemento.TypedBuilder;
import org.patternfly.layout.Classes;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

import static org.patternfly.layout.Classes.modifier;

/**
 * Contains methods and default implementations for components that are expandable.
 */
public interface Expandable<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>,
        IsElement<E> {

    // ------------------------------------------------------ static helper methods

    static void collapse(HTMLElement root, HTMLElement toggle, HTMLElement menu) {
        if (expanded(root)) {
            root.classList.remove(modifier(Classes.expanded));
            if (toggle != null) {
                toggle.setAttribute(Aria.expanded, false);
            }
            if (menu != null) {
                menu.hidden = true;
            }
        }
    }

    static void expand(HTMLElement root, HTMLElement toggle, HTMLElement menu) {
        if (!expanded(root)) {
            root.classList.add(modifier(Classes.expanded));
            if (toggle != null) {
                toggle.setAttribute(Aria.expanded, true);
            }
            if (menu != null) {
                menu.hidden = false;
            }
        }
    }

    static boolean expanded(Element root) {
        return root != null && root.classList.contains(modifier(Classes.expanded));
    }

    // ------------------------------------------------------ interface methods

    /**
     * Same as {@linkplain #toggle(boolean) toggle(true)}
     */
    default void toggle() {
        toggle(true);
    }

    /**
     * Calls {@link #collapse(boolean)}, if {@link #expanded()} is {@code true}, {@link #expand(boolean)} otherwise.
     */
    default void toggle(boolean fireEvent) {
        if (expanded()) {
            collapse(fireEvent);
        } else {
            expand(fireEvent);
        }
    }

    /**
     * Same as {@linkplain #collapse(boolean) collapse(true)}
     */
    default void collapse() {
        collapse(true);
    }

    void collapse(boolean fireEvent);

    /**
     * Same as {@linkplain #expand(boolean) expand(true)}
     */
    default void expand() {
        expand(true);
    }

    void expand(boolean fireEvent);

    /**
     * @return {@code true} if the elements class list has the modifier {@link org.patternfly.layout.Classes#expanded},
     *         {@code false} otherwise.
     */
    default boolean expanded() {
        return expanded(element());
    }
}

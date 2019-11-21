package org.patternfly.client.components;

import elemental2.dom.HTMLElement;
import org.jboss.gwt.elemento.core.builder.HtmlContent;
import org.patternfly.client.resources.Constants;

import static org.jboss.gwt.elemento.core.Elements.span;
import static org.patternfly.client.resources.CSS.component;
import static org.patternfly.client.resources.CSS.modifier;
import static org.patternfly.client.resources.Constants.badge;
import static org.patternfly.client.resources.Constants.read;
import static org.patternfly.client.resources.Constants.unread;

/**
 * = PatternFly Badge Component
 * <p>
 * A https://www.patternfly.org/v4/documentation/core/components/badge[badge] is used to annotate other information like
 * a label or an object name. Badges are typically used to reflect a count, e.g. number of object, number of events,
 * number of unread, etc.
 * <p>
 * == Usage
 * <p>
 * [source,java] -- // Creates an unread badge of 5 Badge unread = new Badge(5);
 * <p>
 * // Creates a read badge of 2 Badge read = new Badge(2, true);
 * <p>
 * // Creates an unread badge of 3, marks it as read and modifies the count. Badge badge = new Badge(3);
 * badge.read().count(7); --
 *
 * @see https://www.patternfly.org/v4/documentation/core/components/badge
 */
public class Badge extends BaseComponent<HTMLElement, Badge>
        implements HtmlContent<HTMLElement, Badge> {

    // ------------------------------------------------------ factory methods

    public static Badge read(int count) {
        return new Badge(String.valueOf(count), true);
    }

    public static Badge read(String text) {
        return new Badge(text, true);
    }

    public static Badge unread(int count) {
        return new Badge(String.valueOf(count), false);
    }

    public static Badge unread(String text) {
        return new Badge(text, false);
    }

    // ------------------------------------------------------ badge instance

    Badge(int count) {
        this(String.valueOf(count));
    }

    Badge(String text) {
        super(span().css(component(badge)).textContent(text).element(), "Badge");
    }

    Badge(String text, boolean read) {
        super(span().css(component(badge), read ? modifier(Constants.read) : modifier(unread))
                .textContent(text).element(), "Badge");
    }

    @Override
    public Badge that() {
        return this;
    }

    // ------------------------------------------------------ public API

    /**
     * Marks the badge as read.
     */
    public Badge read() {
        element.classList.remove(modifier(unread));
        element.classList.add(modifier(read));
        return this;
    }

    /**
     * Marks the badge as unread.
     */
    public Badge unread() {
        element.classList.remove(modifier(read));
        element.classList.add(modifier(unread));
        return this;
    }

    /**
     * Modifies the count of this badge.
     */
    public Badge count(int count) {
        return text(String.valueOf(count));
    }

    /**
     * Modifies the text of this badge.
     */
    public Badge text(String text) {
        element.textContent = text;
        return this;
    }
}

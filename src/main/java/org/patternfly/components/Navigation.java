package org.patternfly.components;

import java.util.HashMap;
import java.util.Map;
import java.util.function.BiConsumer;
import java.util.function.Function;

import elemental2.dom.HTMLAnchorElement;
import elemental2.dom.HTMLElement;
import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.HtmlContent;
import org.jboss.elemento.HtmlContentBuilder;
import org.jboss.elemento.Id;
import org.patternfly.core.SelectHandler;
import org.patternfly.resources.Constants;

import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.nav;
import static org.jboss.elemento.Elements.section;
import static org.jboss.elemento.Elements.*;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.CSS.fas;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.button;
import static org.patternfly.resources.Constants.label;
import static org.patternfly.resources.Constants.nav;
import static org.patternfly.resources.Constants.section;
import static org.patternfly.resources.Constants.toggle;
import static org.patternfly.resources.Constants.*;
import static org.patternfly.resources.Dataset.*;

/**
 * PatternFly nav component.
 * <p>
 * Identifiers for items need to be unique across groups!
 *
 * @see <a href= "https://www.patternfly.org/v4/documentation/core/components/nav">https://www.patternfly.org/v4/documentation/core/components/nav</a>
 */
// TODO Use static inner class Group instead of add(String group, NavigationItem item)
public class Navigation extends BaseComponent<HTMLElement, Navigation>
        implements HtmlContent<HTMLElement, Navigation> {

    // ------------------------------------------------------ factory methods

    public static Navigation horizontal() {
        return new Navigation(Orientation.HORIZONTAL, false, true, false);
    }

    public static Navigation tertiary() {
        return new Navigation(Orientation.HORIZONTAL, false, false, true);
    }

    public static Navigation vertical(boolean expandable) {
        return new Navigation(Orientation.VERTICAL, expandable, true, false);
    }

    public static Group group() {
        return new Group();
    }

    // ------------------------------------------------------ navigation instance

    private static final String A_TAG = "a";
    private final Orientation orientation;
    private final boolean expandable;
    private final Map<String, NavigationItem> items;
    private final ItemDisplay<HTMLAnchorElement, NavigationItem> itemDisplay;
    private SelectHandler<NavigationItem> onSelect;
    private HTMLElement ul;
    private HTMLElement lastGroup;

    protected Navigation(Orientation orientation, boolean expandable, boolean global, boolean tertiary) {
        super(nav().css(component(nav)).aria(label, global ? "Global" : "Local").element(), "Navigation");
        this.orientation = orientation;
        this.expandable = expandable;
        this.items = new HashMap<>();
        this.itemDisplay = new ItemDisplay<>();

        if (orientation == Orientation.HORIZONTAL) {
            add(button().css(component(nav, scroll, button))
                    .aria(label, "Scroll left")
                    .on(click, e -> scrollLeft())
                    .add(i().css(fas("angle-left")).aria(hidden, true_)));
            if (tertiary) {
                add(ul = ul().css(component(nav, Constants.tertiary, list)).element());
            } else {
                add(ul = ul().css(component(nav, Constants.horizontal, list)).element());
            }
            add(button().css(component(nav, scroll, button))
                    .aria(label, "Scroll right")
                    .on(click, e -> scrollRight())
                    .add(i().css(fas("angle-right")).aria(hidden, true_)));

        } else {
            add(ul = ul().css(component(nav, list)).element());
        }
    }

    @Override
    public Navigation that() {
        return this;
    }

    // ------------------------------------------------------ public API

    public Navigation add(Iterable<NavigationItem> items) {
        for (NavigationItem item : items) {
            add(item);
        }
        return this;
    }

    public Navigation add(NavigationItem[] items) {
        for (NavigationItem item : items) {
            add(item);
        }
        return this;
    }

    public Navigation add(NavigationItem item) {
        addInternal(ul, null, item);
        return this;
    }

    public Navigation add(String group, NavigationItem item) {
        String groupId = groupId(group);
        lastGroup = Elements.find(element, By.element("ul").and(By.data(navGroup, groupId)));
        if (lastGroup == null) {
            lastGroup = ul().css(component(nav, simple, list))
                    .data(navGroup, groupId).element();
            String labelId = Id.unique(nav, Constants.group, label);
            if (expandable) {
                ul.appendChild(li().css(component(nav, Constants.item), modifier(Constants.expandable))
                        .data(navGroupExpandable, groupId)
                        .add(a().css(component(nav, link))
                                .id(labelId)
                                .data(navGroupLink, groupId)
                                .textContent(group)
                                .on(click, e -> toggleGroup(groupId))
                                .add(span().css(component(nav, toggle))
                                        .add(i().css(fas(angleRight))
                                                .aria(hidden, true_))))
                        .add(section().css(component(nav, subnav))
                                .hidden(true)
                                .aria(labelledBy, labelId)
                                .data(navGroupSection, groupId)
                                .add(lastGroup)).element());

            } else { // grouped
                add(section().css(component(nav, section))
                        .aria(labelledBy, labelId)
                        .add(h(2, group).css(component(nav, section, title))
                                .id(labelId)
                                .textContent(group))
                        .add(lastGroup).element());
            }
        }
        addInternal(lastGroup, group, item);
        return this;
    }

    public void select(String itemId) {
        select(items.get(itemId), true);
    }

    public void select(String itemId, boolean fireEvent) {
        select(items.get(itemId), fireEvent);
    }

    public void select(NavigationItem item) {
        select(item, true);
    }

    public void select(NavigationItem item, boolean fireEvent) {
        if (item != null) {
            String itemId = item.getId();
            for (HTMLElement e : Elements.findAll(element, By.element(A_TAG).and(By.data(navItem)))) {
                String value = e.dataset.get(navItem);
                if (itemId.equals(value)) {
                    e.classList.add(modifier(current));
                    e.setAttribute("aria-current", page);
                    e.scrollIntoView(false);
                    if (fireEvent && onSelect != null) {
                        onSelect.onSelect(item);
                    }
                } else {
                    e.classList.remove(modifier(current));
                    e.removeAttribute("aria-current");
                }
            }
            if (expandable) {
                HTMLElement a = Elements.find(element, By.element(A_TAG).and(By.data(navItem, itemId)));
                if (a != null) {
                    String groupId = a.dataset.get(navGroup);
                    if (groupId != null) {
                        for (HTMLElement e : Elements.findAll(element,
                                By.element("li").and(By.data(navGroupExpandable)))) {
                            if (groupId.equals(e.dataset.get(navGroupExpandable))) {
                                e.classList.add(modifier(current));
                                expand(groupId);
                            } else {
                                e.classList.remove(modifier(current));
                            }
                        }
                    }
                }
            }
        }
    }

    public NavigationItem getItem(String id) {
        return items.get(id);
    }

    public Navigation identifier(Function<NavigationItem, String> identifier) {
        itemDisplay.identifier = identifier;
        return this;
    }

    public Navigation asString(Function<NavigationItem, String> asString) {
        itemDisplay.asString = asString;
        return this;
    }

    public Navigation display(BiConsumer<HtmlContentBuilder<HTMLAnchorElement>, NavigationItem> display) {
        itemDisplay.display = display;
        return this;
    }

    // ------------------------------------------------------ modifiers

    public Navigation simple() {
        if (orientation == Orientation.VERTICAL) {
            ul.classList.remove(component(nav, list));
            ul.classList.add(component(nav, simple, list));
        }
        return this;
    }

    // ------------------------------------------------------ events

    public Navigation onSelect(SelectHandler<NavigationItem> onSelect) {
        this.onSelect = onSelect;
        return this;
    }

    private void addInternal(HTMLElement ul, String group, NavigationItem item) {
        items.put(item.getId(), item);
        if (NavigationItem.SEPARATOR.equals(item) && orientation == Orientation.VERTICAL) {
            HTMLElement element = (expandable) ? lastGroup : ul;
            if (element != null) {
                element.appendChild(li().css(divider).attr(role, separator).element());
            }
        } else {
            HtmlContentBuilder<HTMLAnchorElement> a = a().css(component(nav, link))
                    .on(click, e -> {
                        ((HTMLElement) e.currentTarget).scrollIntoView(true);
                        if (onSelect != null) {
                            onSelect.onSelect(item);
                        }
                    })
                    .data(navItem, item.getId());
            if (item.getHref() != null) {
                a.attr("href", item.getHref());
            }
            itemDisplay.display.accept(a, item);
            if (group != null) {
                a.data(navGroup, groupId(group));
            }
            ul.appendChild(li().css(component(nav, Constants.item)).add(a).element());
            if (orientation == Orientation.HORIZONTAL) {
                // TODO add / remove "pf-m-start pf-m-end" to root element
            }
        }
    }

    // ------------------------------------------------------ internals

    private void toggleGroup(String groupId) {
        HTMLElement li = Elements.find(element, By.element("li").and(By.data(navGroupExpandable, groupId)));
        HTMLElement a = Elements.find(element, By.element(A_TAG).and(By.data(navGroupLink)));
        HTMLElement section = Elements.find(element, By.element("section").and(By.data(navGroupSection, groupId)));
        if (li != null && a != null && section != null) {
            if (li.classList.contains(modifier(expanded))) {
                // collapse
                li.classList.remove(modifier(expanded));
                a.setAttribute("aria-expanded", false_);
                section.hidden = true;

            } else {
                // expand
                li.classList.add(modifier(expanded));
                a.setAttribute("aria-expanded", true_);
                section.removeAttribute(hidden);
            }
        }
    }

    private void expand(String groupId) {
        HTMLElement li = Elements.find(element, By.element("li").and(By.data(navGroupExpandable, groupId)));
        HTMLElement a = Elements.find(element, By.element(A_TAG).and(By.data(navGroupLink)));
        HTMLElement section = Elements.find(element, By.element("section").and(By.data(navGroupSection, groupId)));
        if (li != null && a != null && section != null) {
            li.classList.add(modifier(expanded));
            a.setAttribute("aria-expanded", true_);
            section.removeAttribute(hidden);
        }
    }

    private String groupId(String group) {
        return Id.build(group);
    }

    private void scrollLeft() {
        // TODO add / remove "pf-m-start pf-m-end" to root element
    }

    private void scrollRight() {
        // TODO add / remove "pf-m-start pf-m-end" to root element
    }

    // ------------------------------------------------------ inner classes

    public static class Group extends BaseComponent<HTMLElement, Group>
            implements HtmlContent<HTMLElement, Group> {

        protected Group() {
            super(section().element(), "NavigationGroup");
        }

        @Override
        public Group that() {
            return this;
        }
    }

    private enum Orientation {
        HORIZONTAL, VERTICAL
    }
}

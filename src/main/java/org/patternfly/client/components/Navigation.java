package org.patternfly.client.components;

import java.util.HashMap;
import java.util.Map;
import java.util.function.BiConsumer;
import java.util.function.Function;

import elemental2.dom.HTMLAnchorElement;
import elemental2.dom.HTMLElement;
import org.jboss.gwt.elemento.core.By;
import org.jboss.gwt.elemento.core.builder.HtmlContent;
import org.jboss.gwt.elemento.core.builder.HtmlContentBuilder;
import org.patternfly.client.core.SelectHandler;
import org.patternfly.client.resources.Constants;

import static org.jboss.gwt.elemento.core.Elements.button;
import static org.jboss.gwt.elemento.core.Elements.nav;
import static org.jboss.gwt.elemento.core.Elements.section;
import static org.jboss.gwt.elemento.core.Elements.*;
import static org.jboss.gwt.elemento.core.EventType.click;
import static org.patternfly.client.resources.CSS.component;
import static org.patternfly.client.resources.CSS.fas;
import static org.patternfly.client.resources.CSS.modifier;
import static org.patternfly.client.resources.Constants.button;
import static org.patternfly.client.resources.Constants.label;
import static org.patternfly.client.resources.Constants.nav;
import static org.patternfly.client.resources.Constants.section;
import static org.patternfly.client.resources.Constants.toggle;
import static org.patternfly.client.resources.Constants.*;
import static org.patternfly.client.resources.Dataset.*;

/**
 * PatternFly nav component.
 * <p>
 * Identifiers for items need to be unique across groups!
 *
 * @see <a href= "https://www.patternfly.org/v4/documentation/core/components/nav">https://www.patternfly.org/v4/documentation/core/components/nav</a>
 */
public class Navigation extends BaseComponent<HTMLElement, Navigation>
        implements HtmlContent<HTMLElement, Navigation> {

    // ------------------------------------------------------ factory methods

    public static Navigation simple() {
        return new Navigation(true, false, false, false, false);
    }

    public static Navigation grouped() {
        return new Navigation(true, false, false, true, false);
    }

    public static Navigation expandable() {
        return new Navigation(true, false, false, true, true);
    }

    public static Navigation horizontal() {
        return new Navigation(true, true, false, false, false);
    }

    public static Navigation tertiary() {
        return new Navigation(false, true, true, false, false);
    }

    // ------------------------------------------------------ navigation instance

    private static final String A_TAG = "a";
    private final boolean horizontal;
    private final boolean tertiary;
    private final boolean grouped;
    private final boolean expandable;
    private final Map<String, NavigationItem> items;
    private final ItemDisplay<HTMLAnchorElement, NavigationItem> itemDisplay;
    private SelectHandler<NavigationItem> onSelect;

    private HTMLElement ul;
    private HTMLElement lastGroup;

    Navigation(boolean global, boolean horizontal, boolean tertiary, boolean grouped, boolean expandable) {
        super(nav().css(component(nav)).aria(label, global ? "Global" : "Local").element(), "Navigation");
        this.horizontal = horizontal;
        this.tertiary = tertiary;
        this.grouped = grouped;
        this.expandable = expandable;
        this.items = new HashMap<>();
        this.itemDisplay = new ItemDisplay<>();

        if (horizontal || tertiary) {
            add(button().css(component(nav, scroll, button))
                    .aria(label, "Scroll left")
                    .on(click, e -> scrollLeft())
                    .add(i().css(fas("angle-left")).aria(hidden, true_)));

            if (tertiary) { // tertiary (and horizontal)
                add(ul = ul().css(component(nav, Constants.tertiary, list)).element());

            } else { // horizontal (and not tertiary)
                add(ul = ul().css(component(nav, Constants.horizontal, list)).element());
            }
            add(button().css(component(nav, scroll, button))
                    .aria(label, "Scroll right")
                    .on(click, e -> scrollRight())
                    .add(i().css(fas("angle-right")).aria(hidden, true_)));

        } else {
            if (grouped) {
                if (expandable) { // expandable (and grouped)
                    add(ul = ul().css(component(nav, list)).element());
                } // nothing to do for grouped

            } else { // simple
                add(ul = ul().css(component(nav, simple, list)).element());
            }
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
        lastGroup = find(element, By.element("ul").and(By.data(navGroup, groupId)));
        if (lastGroup == null) {
            lastGroup = ul().css(component(nav, simple, list))
                    .data(navGroup, groupId).element();
            String labelId = uniqueId(nav, Constants.group, label);
            if (expandable) {
                ul.appendChild(li().css(component(nav, Constants.item), modifier(Constants.expandable))
                        .data(navGroupExpandable, groupId)
                        .add(a("#").css(component(nav, link))
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

    public void setCurrent(NavigationItem item) {
        setCurrent(item.getId());
    }

    public void setCurrent(String itemId) {
        for (HTMLElement e : findAll(element, By.element(A_TAG).and(By.data(navItem)))) {
            String value = e.dataset.get(navItem);
            if (itemId.equals(value)) {
                e.classList.add(modifier(current));
                e.setAttribute("aria-current", page);
                e.scrollIntoView();
            } else {
                e.classList.remove(modifier(current));
                e.removeAttribute("aria-current");
            }
        }
        if (expandable) {
            HTMLElement a = find(element, By.element(A_TAG).and(By.data(navItem, itemId)));
            if (a != null) {
                String groupId = a.dataset.get(navGroup);
                if (groupId != null) {
                    for (HTMLElement e : findAll(element, By.element("li").and(By.data(navGroupExpandable)))) {
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

    public NavigationItem getItem(String id) {
        return items.get(id);
    }

    public Navigation identifier(Function<NavigationItem, String> identifier) {
        itemDisplay.identifier = identifier;
        return this;
    }

    public Navigation display(BiConsumer<HtmlContentBuilder<HTMLAnchorElement>, NavigationItem> display) {
        itemDisplay.display = display;
        return this;
    }

    // ------------------------------------------------------ events

    public Navigation onSelect(SelectHandler<NavigationItem> onSelect) {
        this.onSelect = onSelect;
        return this;
    }

    // ------------------------------------------------------ internals

    private void addInternal(HTMLElement ul, String group, NavigationItem item) {
        items.put(item.getId(), item);
        if (NavigationItem.SEPARATOR.equals(item) && (!horizontal && !tertiary)) {
            HTMLElement element = (grouped || expandable) ? lastGroup : ul;
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
            if (horizontal || tertiary) {
                // TODO add / remove "pf-m-start pf-m-end" to root element
            }
        }
    }

    private void toggleGroup(String groupId) {
        HTMLElement li = find(element, By.element("li").and(By.data(navGroupExpandable, groupId)));
        HTMLElement a = find(element, By.element(A_TAG).and(By.data(navGroupLink)));
        HTMLElement section = find(element, By.element("section").and(By.data(navGroupSection, groupId)));
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
        HTMLElement li = find(element, By.element("li").and(By.data(navGroupExpandable, groupId)));
        HTMLElement a = find(element, By.element(A_TAG).and(By.data(navGroupLink)));
        HTMLElement section = find(element, By.element("section").and(By.data(navGroupSection, groupId)));
        if (li != null && a != null && section != null) {
            li.classList.add(modifier(expanded));
            a.setAttribute("aria-expanded", true_);
            section.removeAttribute(hidden);
        }
    }

    private String groupId(String group) {
        return buildId(group);
    }

    private void scrollLeft() {
        // TODO add / remove "pf-m-start pf-m-end" to root element
    }

    private void scrollRight() {
        // TODO add / remove "pf-m-start pf-m-end" to root element
    }
}

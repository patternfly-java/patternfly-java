package org.patternfly.components.menu;

import java.util.ArrayList;
import java.util.List;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.By;
import org.patternfly.components.BaseComponent;
import org.patternfly.components.ComponentType;
import org.patternfly.core.Aria;
import org.patternfly.core.MultiSelectHandler;
import org.patternfly.core.SelectHandler;
import org.patternfly.core.SelectionMode;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static java.util.stream.Collectors.toList;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.patternfly.components.menu.MenuFooter.menuFooter;
import static org.patternfly.components.menu.MenuHeader.menuHeader;
import static org.patternfly.components.menu.MenuType.standalone;
import static org.patternfly.core.SelectionMode.none;
import static org.patternfly.core.SelectionMode.single;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.flyout;
import static org.patternfly.layout.Classes.icon;
import static org.patternfly.layout.Classes.item;
import static org.patternfly.layout.Classes.menu;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.plain;
import static org.patternfly.layout.Classes.scrollable;
import static org.patternfly.layout.Classes.select;

/**
 * A menu is a list of options or actions that users can choose from. It can be used in a variety of contexts whenever
 * the user needs to choose between multiple values, options, or actions. A menu is most often paired with a
 * {@link MenuToggle} as its trigger, but can also be used inline or can be attached to other interactable elements to
 * toggle it open and close.
 * <p>
 * {@snippet class = MenuDemo region = menu}
 *
 * @see <a href="https://www.patternfly.org/components/menu/html">https://www.patternfly.org/components/menu/html</a>
 */
public class Menu extends BaseComponent<HTMLDivElement, Menu> implements Attachable {

    // ------------------------------------------------------ factory methods

    public static Menu menu() {
        return new Menu(standalone, none);
    }

    public static Menu menu(SelectionMode selectionMode) {
        return new Menu(standalone, selectionMode);
    }

    // ------------------------------------------------------ instance

    private static final By MENU_ITEMS = By.classname(component(menu, item));
    private static final By SELECT_ICONS = By.classname(component(menu, item, select, icon));

    final MenuType menuType;
    final SelectionMode selectionMode;
    SelectHandler<MenuItem> selectHandler;
    MultiSelectHandler<MenuItem> multiSelectHandler;
    private MenuContent content;

    Menu(MenuType menuType, SelectionMode selectionMode) {
        super(div().css(component(menu)).element(), ComponentType.Menu);
        this.menuType = menuType;
        this.selectionMode = selectionMode;
        Attachable.register(this, this);
    }

    @Override
    public Menu that() {
        return this;
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        if (content != null) {
            content.passMenu(this);
        }
    }

    // ------------------------------------------------------ add methods

    /**
     * Shortcut for {@code addHeader(menuHeader(text))}
     */
    public Menu addHeader(String text) {
        return addHeader(menuHeader(text));
    }

    public Menu addHeader(MenuHeader header) {
        return add(header);
    }

    public Menu addContent(MenuContent content) {
        return add(this.content = content);
    }

    /**
     * Shortcut for {@code addFooter(menuFooter(text))}
     */
    public Menu addFooter(String text) {
        return addFooter(menuFooter(text));
    }

    public Menu addFooter(MenuFooter footer) {
        return add(footer);
    }

    // ------------------------------------------------------ events

    public Menu onSingleSelect(SelectHandler<MenuItem> selectHandler) {
        this.selectHandler = selectHandler;
        return this;
    }

    public Menu onMultiSelect(MultiSelectHandler<MenuItem> selectHandler) {
        this.multiSelectHandler = selectHandler;
        return this;
    }

    // ------------------------------------------------------ select

    public void select(String itemId) {
        select(findItem(itemId), true);
    }

    public void select(String itemId, boolean fireEvent) {
        select(findItem(itemId), fireEvent);
    }

    public void select(MenuItem item) {
        select(item, true);
    }

    public void select(MenuItem item, boolean fireEvent) {
        if (item != null) {
            if (selectionMode == none || selectionMode == single) {
                unselectAllItems();
            }
            item.select(selectionMode);
            if (fireEvent) {
                if (selectHandler != null) {
                    selectHandler.onSelect(item);
                }
                if (multiSelectHandler != null) {
                    List<MenuItem> selection = items()
                            .stream()
                            .filter(itm -> itm.isSelected(selectionMode))
                            .collect(toList());
                    multiSelectHandler.onSelect(selection);
                }
            }
        }
    }

    private void unselectAllItems() {
        if (selectionMode == none) {
            for (HTMLElement element : findAll(MENU_ITEMS)) {
                element.setAttribute(Aria.current, false);
            }
        } else if (selectionMode == single) {
            for (HTMLElement element : findAll(MENU_ITEMS)) {
                element.setAttribute(Aria.selected, false);
                element.classList.remove(modifier(Classes.selected));
            }
            for (HTMLElement element : findAll(SELECT_ICONS)) {
                failSafeRemoveFromParent(element);
            }
        }
    }

    // ------------------------------------------------------ modifiers

    public Menu flyout() {
        return css(modifier(flyout));
    }

    public Menu plain() {
        return css(modifier(plain));
    }

    public Menu scrollable() {
        return css(modifier(scrollable));
    }

    /** Sets the {@code --pf-v5-c-menu__content--MaxHeight} variable to the specified value */
    public Menu height(String height) {
        return style("--pf-v5-c-menu__content--MaxHeight:" + height);
    }

    // ------------------------------------------------------ internals

    MenuItem findItem(String id) {
        MenuItem menuItem = null;
        if (content != null) {
            for (MenuGroup group : content.groups) {
                if (group.list != null) {
                    menuItem = group.list.items.get(id);
                }
            }
            if (menuItem == null) {
                if (content.list != null) {
                    menuItem = content.list.items.get(id);
                }
            }
        }
        return menuItem;
    }

    List<MenuItem> items() {
        List<MenuItem> items = new ArrayList<>();
        if (content != null) {
            for (MenuGroup group : content.groups) {
                if (group.list != null) {
                    items.addAll(group.list.items.values());
                }
            }
            if (content.list != null) {
                items.addAll(content.list.items.values());
            }
        }
        return items;
    }
}

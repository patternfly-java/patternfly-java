package org.patternfly.components.menu;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.Id;
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

import static elemental2.dom.DomGlobal.console;
import static java.util.stream.Collectors.toList;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.patternfly.components.menu.MenuFooter.menuFooter;
import static org.patternfly.components.menu.MenuHeader.menuHeader;
import static org.patternfly.components.menu.MenuType.standalone;
import static org.patternfly.core.Dataset.menuInstance;
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

    private static final Map<String, Menu> MENUS = new HashMap<>();
    private static final By MENU_ITEMS = By.classname(component(menu, item));
    private static final By SELECT_ICONS = By.classname(component(menu, item, select, icon));

    static Menu findMenu(HTMLElement element) {
        Menu menu = null;
        HTMLElement menuElement = Elements.closest(element,
                By.classname(component(Classes.menu)).and(By.data(menuInstance)));
        if (menuElement != null) {
            String id = menuElement.dataset.get(menuInstance);
            if (id != null) {
                menu = MENUS.get(id);
                if (menu == null) {
                    console.error("Unable to find menu instance for id '" + id + "'");
                }
            } else {
                console.error("Unable to find menu instance: No instance id found on menu element");
            }
        } else {
            console.error("Unable to find menu instance from nested element '" + element.tagName + "'");
        }
        return menu;
    }

    private final String id;
    final MenuType menuType;
    final SelectionMode selectionMode;
    final Map<String, MenuItem> items;
    SelectHandler<MenuItem> selectHandler;
    MultiSelectHandler<MenuItem> multiSelectHandler;

    Menu(MenuType menuType, SelectionMode selectionMode) {
        super(div().css(component(menu)).element(), ComponentType.Menu);
        this.menuType = menuType;
        this.selectionMode = selectionMode;
        this.items = new HashMap<>();

        // Please keep this order!
        id = Id.unique("menu");
        data(menuInstance, id);
        Attachable.register(this, this);
    }

    @Override
    public Menu that() {
        return this;
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        MENUS.put(id, this);
        console.debug("Attach menu '" + id + "'. Total number of menus: " + MENUS.size());
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        MENUS.remove(id);
        console.debug("Detach menu '" + id + "'. Total number of menus: " + MENUS.size());
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
        return add(content);
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

    public Menu onSelect(SelectHandler<MenuItem> selectHandler) {
        this.selectHandler = selectHandler;
        return this;
    }

    public Menu onSelect(MultiSelectHandler<MenuItem> selectHandler) {
        this.multiSelectHandler = selectHandler;
        return this;
    }

    // ------------------------------------------------------ select

    public void select(String itemId) {
        select(items.get(itemId), true);
    }

    public void select(String itemId, boolean fireEvent) {
        select(items.get(itemId), fireEvent);
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
                    List<MenuItem> selection = items.values()
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
}

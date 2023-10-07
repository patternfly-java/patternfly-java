/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.patternfly.component;

import java.util.ArrayList;
import java.util.List;

import org.gwtproject.event.shared.HandlerRegistration;
import org.gwtproject.event.shared.HandlerRegistrations;
import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.patternfly.dataprovider.DataProvider;
import org.patternfly.dataprovider.Display;
import org.patternfly.dataprovider.PageInfo;
import org.patternfly.dataprovider.SelectionInfo;
import org.patternfly.dataprovider.SortInfo;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLIElement;
import elemental2.dom.HTMLUListElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.section;
import static org.jboss.elemento.Elements.ul;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.InputType.checkbox;
import static org.patternfly.component.Icon.icon;
import static org.patternfly.core.Dataset.dataListItem;
import static org.patternfly.layout.Classes.cell;
import static org.patternfly.layout.Classes.check;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.controls;
import static org.patternfly.layout.Classes.dataList;
import static org.patternfly.layout.Classes.expandableContent;
import static org.patternfly.layout.Classes.item;
import static org.patternfly.layout.Classes.itemAction;
import static org.patternfly.layout.Classes.itemContent;
import static org.patternfly.layout.Classes.itemControl;
import static org.patternfly.layout.Classes.itemRow;
import static org.patternfly.layout.Classes.labelledBy;
import static org.patternfly.layout.Classes.list;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.toggle;
import static org.patternfly.layout.PredefinedIcon.angleRight;

/**
 * PatternFly data list.
 *
 * <p>
 * The data list does not manage data by itself. Use a {@link DataProvider} and add the data list as a display to the data
 * provider:
 * </p>
 *
 * <pre>
 * DataProvider dataProvider = ...;
 * DataList list = ...;
 *
 * dataProvider.addDisplay(list);
 * dataProvider.update(...);
 * </pre>
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/datalist">https://www.patternfly.org/v4/documentation/core/components/datalist</a>
 */
@Deprecated
public class DataList<T> extends BaseComponent<HTMLUListElement, DataList<T>>
        implements Display<T> {

    // ------------------------------------------------------ factory methods

    public static <T> DataList<T> dataList(DataProvider<T> dataProvider, Display<T> display) {
        return new DataList<>(dataProvider, display);
    }

    public static Item item() {
        return new Item();
    }

    public static ItemRow itemRow() {
        return new ItemRow();
    }

    public static ItemControl itemControl() {
        return new ItemControl();
    }

    public static ItemContent itemContent() {
        return new ItemContent();
    }

    public static ItemAction itemAction() {
        return new ItemAction();
    }

    public static ItemCell itemCell() {
        return new ItemCell();
    }

    public static ExpandableContent expandableContent() {
        return new ExpandableContent();
    }

    public static ExpandableBody expandableBody() {
        return new ExpandableBody();
    }

    // ------------------------------------------------------ instance

    private static final String ARIA = "aria-";
    private static final By TOGGLE_SELECTOR = By.classname(component(dataList, toggle)).child(By.element("button"));
    private static final By SELECT_ITEM_SELECTOR = By.classname(component(dataList, check))
            .child(By.element("input").and(By.attribute("type", "checkbox")));
    private static final By EXPANDABLE_CONTENT_SELECTOR = By.classname(component(dataList, expandableContent));

    private final DataProvider<T> dataProvider;
    private final Display<T> display;
    private final ItemSelect itemSelect;
    private HandlerRegistration expandHandler;

    protected DataList(DataProvider<T> dataProvider, Display<T> display) {
        super(ul().css(component(dataList)).attr("role", list).element(), "DataList");
        this.dataProvider = dataProvider;
        this.display = display;
        this.itemSelect = new ItemSelect(element());
    }

    @Override
    public DataList<T> that() {
        return this;
    }

    // ------------------------------------------------------ display API

    @Override
    public void showItems(Iterable<T> items, PageInfo pageInfo) {
        itemSelect.removeSelectHandler();
        removeExpandHandler();
        removeChildrenFrom(element());

        for (T item : items) {
            String id = dataProvider.getId(item);
            HTMLContainerBuilder<HTMLLIElement> li = li().css(component(dataList, Classes.item)).data(dataListItem, id)
                    .aria(labelledBy, id);
            display.render(li, dataProvider, item);
            add(li);
        }

        itemSelect.bindSelectHandler(SELECT_ITEM_SELECTOR, checkbox -> {
            HTMLElement itemElement = Elements.closest(checkbox, By.data(dataListItem));
            if (itemElement != null) {
                return itemElement.dataset.get(dataListItem);
            }
            return null;
        }, (id, selected) -> {
            T item = dataProvider.getItem(id);
            if (item != null) {
                dataProvider.select(item, selected);
            }
        });
        bindExpandHandler();
    }

    @Override
    public void updateSelection(SelectionInfo<T> selectionInfo) {
        for (T item : dataProvider.getVisibleItems()) {
            String id = dataProvider.getId(item);
            itemSelect.updateSelection(By.data(dataListItem, id).desc(SELECT_ITEM_SELECTOR),
                    selectionInfo.isSelected(item));
        }
    }

    @Override
    public void updateSortInfo(SortInfo<T> sortInfo) {
        // nothing to do
    }

    // ------------------------------------------------------ internals

    private void bindExpandHandler() {
        List<HandlerRegistration> handler = new ArrayList<>();
        for (HTMLElement htmlElement : Elements.findAll(element(), TOGGLE_SELECTOR)) {
            HTMLElement itemElement = Elements.closest(htmlElement, By.classname(component(dataList, item)));
            if (itemElement != null) {
                HTMLElement contentElement = Elements.find(itemElement, EXPANDABLE_CONTENT_SELECTOR);
                if (contentElement != null) {
                    String itemId = itemElement.dataset.get(dataListItem);
                    if (itemId != null) {
                        String buttonId = Id.build(itemId, toggle);
                        String contentId = Id.build(itemId, expandableContent);
                        htmlElement.id = buttonId;
                        htmlElement.setAttribute(ARIA + labelledBy, itemId + " " + buttonId);
                        htmlElement.setAttribute(ARIA + "expanded", false);
                        htmlElement.setAttribute(ARIA + controls, contentId);
                        contentElement.id = contentId;
                        contentElement.hidden = true;
                        contentElement.setAttribute(ARIA + "label", "Details");

                        handler.add(bind(htmlElement, click, evt -> {
                            if (itemElement.classList.contains(modifier("expanded"))) {
                                // collapse
                                itemElement.classList.remove(modifier("expanded"));
                                htmlElement.setAttribute(ARIA + "expanded", false);
                                contentElement.hidden = true;
                            } else {
                                // expand
                                itemElement.classList.add(modifier("expanded"));
                                htmlElement.setAttribute(ARIA + "expanded", true);
                                contentElement.removeAttribute("hidden");
                            }
                        }));
                    }
                }
            }
        }
        if (!handler.isEmpty()) {
            expandHandler = HandlerRegistrations.compose(handler.toArray(new HandlerRegistration[0]));
        }
    }

    private void removeExpandHandler() {
        if (expandHandler != null) {
            expandHandler.removeHandler();
            expandHandler = null;
        }
    }

    // ------------------------------------------------------ inner classes

    @Deprecated
    public interface Display<T> {

        void render(HTMLContainerBuilder<HTMLLIElement> li, DataProvider<T> dataProvider, T item);
    }

    @Deprecated
    public static class Item extends SubComponent<HTMLLIElement, Item> {

        protected Item() {
            super(li().css(component(dataList, item)).element());
        }

        @Override
        public Item that() {
            return this;
        }
    }

    @Deprecated
    public static class ItemRow extends SubComponent<HTMLDivElement, ItemRow> {

        protected ItemRow() {
            super(div().css(component(dataList, itemRow)).element());
        }

        @Override
        public ItemRow that() {
            return this;
        }
    }

    @Deprecated
    public static class ItemControl extends SubComponent<HTMLDivElement, ItemControl> {

        protected ItemControl() {
            super(div().css(component(dataList, itemControl)).element());
        }

        /** Adds a checkbox to select the current item. */
        public ItemControl checkbox() {
            return add(div().css(component(dataList, check)).add(input(checkbox)));
        }

        /** Adds an expandable icon. */
        public ItemControl expandable() {
            Icon icon = icon(angleRight.className + " " + component(dataList, toggle, "icon"));
            return (add(div().css(component(dataList, toggle)).add(Button.icon(icon, "Toggle details"))));
        }

        @Override
        public ItemControl that() {
            return this;
        }
    }

    @Deprecated
    public static class ItemContent extends SubComponent<HTMLDivElement, ItemContent> {

        protected ItemContent() {
            super(div().css(component(dataList, itemContent)).element());
        }

        @Override
        public ItemContent that() {
            return this;
        }
    }

    @Deprecated
    public static class ItemAction extends SubComponent<HTMLDivElement, ItemAction> {

        protected ItemAction() {
            super(div().css(component(dataList, itemAction)).element());
        }

        @Override
        public ItemAction that() {
            return this;
        }
    }

    @Deprecated
    public static class ItemCell extends SubComponent<HTMLDivElement, ItemCell> {

        protected ItemCell() {
            super(div().css(component(dataList, cell)).element());
        }

        @Override
        public ItemCell that() {
            return this;
        }
    }

    @Deprecated
    public static class ExpandableContent extends SubComponent<HTMLElement, ExpandableContent> {

        protected ExpandableContent() {
            super(section().css(component(dataList, expandableContent)).element());
        }

        @Override
        public ExpandableContent that() {
            return this;
        }
    }

    @Deprecated
    public static class ExpandableBody extends SubComponent<HTMLDivElement, ExpandableBody> {

        protected ExpandableBody() {
            super(div().css(component(dataList, expandableContent, "body")).element());
        }

        @Override
        public ExpandableBody that() {
            return this;
        }
    }
}

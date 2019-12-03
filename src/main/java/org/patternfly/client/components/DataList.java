package org.patternfly.client.components;

import java.util.ArrayList;
import java.util.List;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLIElement;
import elemental2.dom.HTMLUListElement;
import org.gwtproject.event.shared.HandlerRegistration;
import org.gwtproject.event.shared.HandlerRegistrations;
import org.jboss.gwt.elemento.core.By;
import org.jboss.gwt.elemento.core.builder.ElementBuilder;
import org.jboss.gwt.elemento.core.builder.HtmlContent;
import org.jboss.gwt.elemento.core.builder.HtmlContentBuilder;
import org.patternfly.client.dataprovider.DataProvider;
import org.patternfly.client.dataprovider.Display;
import org.patternfly.client.dataprovider.PageInfo;
import org.patternfly.client.dataprovider.SelectionInfo;
import org.patternfly.client.dataprovider.SortInfo;
import org.patternfly.client.resources.Constants;

import static org.jboss.gwt.elemento.core.Elements.input;
import static org.jboss.gwt.elemento.core.Elements.section;
import static org.jboss.gwt.elemento.core.Elements.*;
import static org.jboss.gwt.elemento.core.EventType.bind;
import static org.jboss.gwt.elemento.core.EventType.click;
import static org.jboss.gwt.elemento.core.InputType.checkbox;
import static org.patternfly.client.components.Icon.icon;
import static org.patternfly.client.resources.CSS.component;
import static org.patternfly.client.resources.CSS.fas;
import static org.patternfly.client.resources.CSS.modifier;
import static org.patternfly.client.resources.Constants.body;
import static org.patternfly.client.resources.Constants.label;
import static org.patternfly.client.resources.Constants.toggle;
import static org.patternfly.client.resources.Constants.*;
import static org.patternfly.client.resources.Dataset.dataListItem;

/**
 * PatternFly data list.
 *
 * <p>
 * The data list does not manage data by itself. Use a {@link DataProvider} and add the data list as a display to the
 * data provider:
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
 * @see <a href= "https://www.patternfly.org/v4/documentation/core/components/datalist">https://www.patternfly.org/v4/documentation/core/components/datalist</a>
 */
public class DataList<T> extends BaseComponent<HTMLUListElement, DataList<T>>
        implements HtmlContent<HTMLUListElement, DataList<T>>, Display<T> {

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

    DataList(DataProvider<T> dataProvider, Display<T> display) {
        super(ul().css(component(dataList)).attr(role, list).element(), "DataList");
        this.dataProvider = dataProvider;
        this.display = display;
        this.itemSelect = new ItemSelect(element);
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
        removeChildrenFrom(element);

        for (T item : items) {
            String id = dataProvider.getId(item);
            HtmlContentBuilder<HTMLLIElement> li = li().css(component(dataList, Constants.item))
                    .data(dataListItem, id)
                    .aria(labelledBy, id);
            display.render(li, dataProvider, item);
            add(li);
        }

        itemSelect.bindSelectHandler(SELECT_ITEM_SELECTOR,
                checkbox -> {
                    HTMLElement itemElement = closest(checkbox, By.data(dataListItem));
                    if (itemElement != null) {
                        return itemElement.dataset.get(dataListItem);
                    }
                    return null;
                },
                (id, selected) -> {
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
        for (HTMLElement htmlElement : findAll(element, TOGGLE_SELECTOR)) {
            HTMLElement itemElement = closest(htmlElement, By.classname(component(dataList, item)));
            if (itemElement != null) {
                HTMLElement contentElement = find(itemElement, EXPANDABLE_CONTENT_SELECTOR);
                if (contentElement != null) {
                    String itemId = itemElement.dataset.get(dataListItem);
                    if (itemId != null) {
                        String buttonId = buildId(itemId, toggle);
                        String contentId = buildId(itemId, expandableContent);
                        htmlElement.id = buttonId;
                        htmlElement.setAttribute(ARIA + labelledBy, itemId + " " + buttonId);
                        htmlElement.setAttribute(ARIA + expanded, false_);
                        htmlElement.setAttribute(ARIA + controls, contentId);
                        contentElement.id = contentId;
                        contentElement.hidden = true;
                        contentElement.setAttribute(ARIA + label, "Details");

                        handler.add(bind(htmlElement, click, evt -> {
                            if (itemElement.classList.contains(modifier(expanded))) {
                                // collapse
                                itemElement.classList.remove(modifier(expanded));
                                htmlElement.setAttribute(ARIA + expanded, false_);
                                contentElement.hidden = true;
                            } else {
                                // expand
                                itemElement.classList.add(modifier(expanded));
                                htmlElement.setAttribute(ARIA + expanded, true_);
                                contentElement.removeAttribute(hidden);
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

    public interface Display<T> {

        void render(HtmlContentBuilder<HTMLLIElement> li, DataProvider<T> dataProvider, T item);
    }

    public static class Item extends ElementBuilder<HTMLLIElement, Item>
            implements HtmlContent<HTMLLIElement, Item> {

        private Item() {
            super(li().css(component(dataList, item)).element());
        }

        @Override
        public Item that() {
            return this;
        }
    }

    public static class ItemRow extends ElementBuilder<HTMLDivElement, ItemRow>
            implements HtmlContent<HTMLDivElement, ItemRow> {

        private ItemRow() {
            super(div().css(component(dataList, itemRow)).element());
        }

        @Override
        public ItemRow that() {
            return this;
        }
    }

    public static class ItemControl extends ElementBuilder<HTMLDivElement, ItemControl>
            implements HtmlContent<HTMLDivElement, ItemControl> {

        private ItemControl() {
            super(div().css(component(dataList, itemControl)).element());
        }

        /** Adds a checkbox to select the current item. */
        public ItemControl checkbox() {
            return add(div().css(component(dataList, check)).add(input(checkbox)));
        }

        /** Adds an expandable icon. */
        public ItemControl expandable() {
            Icon icon = icon(fas(angleRight) + " " + component(dataList, toggle, Constants.icon));
            return (add(div().css(component(dataList, toggle)).add(Button.icon(icon, "Toggle details"))));
        }

        @Override
        public ItemControl that() {
            return this;
        }
    }

    public static class ItemContent extends ElementBuilder<HTMLDivElement, ItemContent>
            implements HtmlContent<HTMLDivElement, ItemContent> {

        private ItemContent() {
            super(div().css(component(dataList, itemContent)).element());
        }

        @Override
        public ItemContent that() {
            return this;
        }
    }

    public static class ItemAction extends ElementBuilder<HTMLDivElement, ItemAction>
            implements HtmlContent<HTMLDivElement, ItemAction> {

        private ItemAction() {
            super(div().css(component(dataList, itemAction)).element());
        }

        @Override
        public ItemAction that() {
            return this;
        }
    }

    public static class ItemCell extends ElementBuilder<HTMLDivElement, ItemCell>
            implements HtmlContent<HTMLDivElement, ItemCell> {

        private ItemCell() {
            super(div().css(component(dataList, cell)).element());
        }

        @Override
        public ItemCell that() {
            return this;
        }
    }

    public static class ExpandableContent extends ElementBuilder<HTMLElement, ExpandableContent>
            implements HtmlContent<HTMLElement, ExpandableContent> {

        private ExpandableContent() {
            super(section().css(component(dataList, expandableContent)).element());
        }

        @Override
        public ExpandableContent that() {
            return this;
        }
    }

    public static class ExpandableBody extends ElementBuilder<HTMLDivElement, ExpandableBody>
            implements HtmlContent<HTMLDivElement, ExpandableBody> {

        private ExpandableBody() {
            super(div().css(component(dataList, expandableContent, body)).element());
        }

        @Override
        public ExpandableBody that() {
            return this;
        }
    }
}

package org.patternfly.components;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.HtmlContent;
import org.patternfly.dataprovider.DataProvider;
import org.patternfly.dataprovider.Display;
import org.patternfly.dataprovider.PageInfo;
import org.patternfly.dataprovider.SelectionInfo;
import org.patternfly.dataprovider.SortInfo;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.patternfly.components.Card.card;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.CSS.layout;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.actions;
import static org.patternfly.resources.Constants.card;
import static org.patternfly.resources.Constants.gallery;
import static org.patternfly.resources.Constants.gutter;
import static org.patternfly.resources.Constants.head;
import static org.patternfly.resources.Dataset.cardViewItem;

/**
 * PatternFly card view.
 *
 * <p>
 * The card view does not manage data by itself. Use a {@link DataProvider} and add the card view as a display to the
 * data provider:
 * </p>
 *
 * <pre>
 * DataProvider dataProvider = ...;
 * CardView cardView = ...;
 *
 * dataProvider.addDisplay(cardView);
 * dataProvider.update(...);
 * </pre>
 *
 * @see <a href= "https://www.patternfly.org/v4/documentation/core/demos/cardview">https://www.patternfly.org/v4/documentation/core/demos/cardview</a>
 */
public class CardView<T> extends BaseComponent<HTMLDivElement, CardView<T>>
        implements HtmlContent<HTMLDivElement, CardView<T>>, Display<T> {

    // ------------------------------------------------------ cactory methods

    public interface Display<T> {

        void render(Card card, DataProvider<T> dataProvider, T item);
    }

    // ------------------------------------------------------ instance
    private static final By SELECT_ITEM_SELECTOR = By.classname(component(card, head))
            .desc(By.classname(component(card, actions)))
            .desc(By.element("input").and(By.attribute("type", "checkbox")));

    public static <T> CardView<T> cardView(DataProvider<T> dataProvider, Display<T> display) {
        return new CardView<>(dataProvider, display);
    }
    private final DataProvider<T> dataProvider;
    private final Display<T> display;
    private final ItemSelect itemSelect;
    private boolean compact;
    private boolean hoverable;

    CardView(DataProvider<T> dataProvider, Display<T> display) {
        super(div().css(layout(gallery), modifier(gutter)).element(), "CardView");
        this.dataProvider = dataProvider;
        this.display = display;
        this.itemSelect = new ItemSelect(element);
    }

    // ------------------------------------------------------ display API

    @Override
    public CardView<T> that() {
        return this;
    }

    @Override
    public void showItems(Iterable<T> items, PageInfo pageInfo) {
        itemSelect.removeSelectHandler();
        removeChildrenFrom(element);

        for (T item : items) {
            String id = dataProvider.getId(item);
            Card card = card().data(cardViewItem, id);
            if (compact) {
                card.compact();
            }
            if (hoverable) {
                card.hoverable();
            }
            display.render(card, dataProvider, item);
            add(card);
        }

        itemSelect.bindSelectHandler(SELECT_ITEM_SELECTOR,
                checkbox -> {
                    HTMLElement itemElement = Elements.closest(checkbox, By.data(cardViewItem));
                    if (itemElement != null) {
                        return itemElement.dataset.get(cardViewItem);
                    }
                    return null;
                },
                (id, selected) -> {
                    T item = dataProvider.getItem(id);
                    if (item != null) {
                        dataProvider.select(item, selected);
                    }
                });
    }

    @Override
    public void updateSelection(SelectionInfo<T> selectionInfo) {
        for (T item : dataProvider.getVisibleItems()) {
            String id = dataProvider.getId(item);
            By selector = By.data(cardViewItem, id).desc(SELECT_ITEM_SELECTOR);
            itemSelect.updateSelection(selector, selectionInfo.isSelected(item));
        }
    }

    // ------------------------------------------------------ modifiers

    @Override
    public void updateSortInfo(SortInfo<T> sortInfo) {
        // nothing to do
    }

    public CardView<T> compact() {
        this.compact = true;
        return this;
    }

    // ------------------------------------------------------ inner classes

    public CardView<T> hoverable() {
        this.hoverable = true;
        return this;
    }
}

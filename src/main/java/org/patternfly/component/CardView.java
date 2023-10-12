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

import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.patternfly.dataprovider.DataProvider;
import org.patternfly.dataprovider.Display;
import org.patternfly.dataprovider.PageInfo;
import org.patternfly.dataprovider.SelectionInfo;
import org.patternfly.dataprovider.SortInfo;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.patternfly.component.Card.card;
import static org.patternfly.core.Dataset.cardViewItem;
import static org.patternfly.layout.Classes.actions;
import static org.patternfly.layout.Classes.card;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.gallery;
import static org.patternfly.layout.Classes.gutter;
import static org.patternfly.layout.Classes.head;
import static org.patternfly.layout.Classes.layout;
import static org.patternfly.layout.Classes.modifier;

/**
 * PatternFly card view.
 *
 * <p>
 * The card view does not manage data by itself. Use a {@link DataProvider} and add the card view as a display to the data
 * provider:
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
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/demos/cardview">https://www.patternfly.org/v4/documentation/core/demos/cardview</a>
 */
@Deprecated
public class CardView<T> extends BaseComponent<HTMLDivElement, CardView<T>>
        implements Display<T> {

    // ------------------------------------------------------ cactory methods

    public static <T> CardView<T> cardView(DataProvider<T> dataProvider, Display<T> display) {
        return new CardView<>(dataProvider, display);
    }

    // ------------------------------------------------------ instance

    private static final By SELECT_ITEM_SELECTOR = By.classname(component(card, head))
            .desc(By.classname(component(card, actions)))
            .desc(By.element("input").and(By.attribute("type", "checkbox")));

    private final DataProvider<T> dataProvider;
    private final Display<T> display;
    private final ItemSelect itemSelect;
    private boolean compact;
    private boolean hoverable;

    protected CardView(DataProvider<T> dataProvider, Display<T> display) {
        super(div().css(layout(gallery), modifier(gutter)).element(), "CardView");
        this.dataProvider = dataProvider;
        this.display = display;
        this.itemSelect = new ItemSelect(element());
    }

    @Override
    public CardView<T> that() {
        return this;
    }

    // ------------------------------------------------------ display API

    @Override
    public void showItems(Iterable<T> items, PageInfo pageInfo) {
        itemSelect.removeSelectHandler();
        removeChildrenFrom(element());

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

        itemSelect.bindSelectHandler(SELECT_ITEM_SELECTOR, checkbox -> {
            HTMLElement itemElement = Elements.closest(checkbox, By.data(cardViewItem));
            if (itemElement != null) {
                return itemElement.dataset.get(cardViewItem);
            }
            return null;
        }, (id, selected) -> {
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

    @Override
    public void updateSortInfo(SortInfo<T> sortInfo) {
        // nothing to do
    }

    // ------------------------------------------------------ builder

    public CardView<T> compact() {
        this.compact = true;
        return this;
    }

    public CardView<T> hoverable() {
        this.hoverable = true;
        return this;
    }

    // ------------------------------------------------------ inner classes

    @Deprecated
    public interface Display<T> {

        void render(Card card, DataProvider<T> dataProvider, T item);
    }
}

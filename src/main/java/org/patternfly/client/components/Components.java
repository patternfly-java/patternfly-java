package org.patternfly.client.components;

import org.patternfly.client.dataprovider.DataProvider;
import org.patternfly.client.resources.CSS.Size;
import org.patternfly.client.resources.Theme;

/**
 * Factory methods for simple components w/o own factory methods.
 */
public final class Components {

    public static Avatar avatar(String src, String alt) {
        return new Avatar(src, alt);
    }

    public static Brand brand(String src) {
        return new Brand(src);
    }

    public static Card card() {
        return new Card();
    }

    public static <T> CardView<T> cardView(DataProvider<T> dataProvider, CardView.Display<T> display) {
        return new CardView<>(dataProvider, display);
    }

    public static ChipGroup chipGroup() {
        return new ChipGroup();
    }

    public static ChipGroup chipGroup(int max) {
        return new ChipGroup(max);
    }

    public static ChipGroupToolbar chipGroupToolbar() {
        return new ChipGroupToolbar();
    }

    public static Content content() {
        return new Content();
    }

    public static <T> ContextSelector<T> contextSelector(String text) {
        return new ContextSelector<>(text);
    }

    public static <T> DataList<T> dataList(DataProvider<T> dataProvider, DataList.Display<T> display) {
        return new DataList<>(dataProvider, display);
    }

    public static <T> DataTable<T> dataTable(DataProvider<T> dataProvider) {
        return new DataTable<>(dataProvider, null);
    }

    public static <T> DataTable<T> dataTable(DataProvider<T> dataProvider, String caption) {
        return new DataTable<>(dataProvider, caption);
    }

    public static Expandable expandable() {
        return new Expandable("Show more", "Show less");
    }

    public static Form form() {
        return new Form();
    }

    public static Icon icon(String iconClass) {
        return new Icon(iconClass);
    }

    public static InputGroup inputGroup() {
        return new InputGroup();
    }

    public static Label label(String text) {
        return new Label(text);
    }

    public static Label label(String text, boolean compact) {
        return new Label(text, compact);
    }

    public static PageSection pageSection() {
        return new PageSection();
    }

    public static PageSidebar pageSidebar(Navigation navigation) {
        return new PageSidebar(navigation);
    }

    public static PageSidebar pageSidebar(Navigation navigation, Theme theme) {
        return new PageSidebar(navigation, theme);
    }

    public static Pagination pagination() {
        return new Pagination();
    }

    public static Spinner spinner() {
        return new Spinner(null);
    }

    public static Spinner spinner(Size size) {
        return new Spinner(size);
    }

    public static Title title(int level, String text, Size size) {
        return new Title(level, text, size);
    }

    public static <T> Toolbar<T> toolbar() {
        return new Toolbar<>(null);
    }

    public static <T> Toolbar<T> toolbar(DataProvider<T> dataProvider) {
        return new Toolbar<>(dataProvider);
    }

    private Components() {
    }
}

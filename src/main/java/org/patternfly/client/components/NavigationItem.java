package org.patternfly.client.components;

import java.util.Objects;

public class NavigationItem {

    public static final NavigationItem SEPARATOR = new NavigationItem("org.patternfly.navigationItem.separator",
            "NavigationItem");

    private final String id;
    private String title;
    private String href;

    public NavigationItem(String id, String title) {
        this(id, title, null);
    }

    public NavigationItem(String id, String title, String href) {
        this.id = id;
        this.title = title;
        this.href = href;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof NavigationItem)) {
            return false;
        }
        NavigationItem that = (NavigationItem) o;
        return id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return getTitle();
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getHref() {
        return href;
    }

    public void setHref(String href) {
        this.href = href;
    }
}

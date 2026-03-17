package org.patternfly.extension.finder;

@FunctionalInterface
public interface PreviewHandler {

    void onPreview(FinderItem item, FinderPreview preview);
}

package org.patternfly.component.tree;

public enum TreeViewType {

    /**
     * The default modifier combines the expansion and selection behaviors, meaning a parent node will be selected and
     * toggled.
     */
    default_,

    /**
     * This modifier will separate the expansion and selection behaviors, allowing a parent node to be selected or deselected
     * without toggling its expansion.
     */
    selectableItems,

    /**
     * This modifier will add checkboxes to each tree view item allowing multiple items to be selected.
     */
    checkboxes
}

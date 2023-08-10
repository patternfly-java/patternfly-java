package org.patternfly.layout;

public interface Icons {

    String angleDoubleLeft = "angle-double-left";
    String angleDoubleRight = "angle-double-right";
    String angleDown = "angle-down";
    String angleLeft = "angle-left";
    String angleRight = "angle-right";
    String arrowsAltV = "arrows-alt-v";
    String bars = "bars";
    String bell = "bell";
    String caretDown = "caret-down";
    String check = "check";
    String checkCircle = "check-circle";
    String ellipsisV = "ellipsis-v";
    String exclamationCircle = "exclamation-circle";
    String exclamationTriangle = "exclamation-triangle";
    String infoCircle = "info-circle";
    String longArrowAltDown = "long-arrow-alt-down";
    String longArrowAltUp = "long-arrow-alt-up";
    String search = "search";
    String sortAmountDown = "sort-amount-down";
    String times = "times";
    String timesCircle = "times-circle";

    /**
     * Builds a FontAwesome icons class.
     *
     * @param name the name of the FontAwesome icon <strong>w/o</strong> any prefix.
     */
    static String fas(String name) {
        return "fas fa-" + name;
    }

    String filter = "filter";
}

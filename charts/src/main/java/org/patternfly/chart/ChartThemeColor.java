package org.patternfly.chart;

public enum ChartThemeColor {

    blue("blue"),
    teal("teal"),
    default_("blue"),
    yellow("yellow"),
    gray("gray"),
    green("green"),
    multi("multi"),
    multiOrdered("multi-ordered"),
    multiUnordered("multi-unordered"),
    orange("orange"),
    purple("purple"),
    skeleton("skeleton");

    public final String color;

    ChartThemeColor(String color) {
        this.color = color;
    }
}

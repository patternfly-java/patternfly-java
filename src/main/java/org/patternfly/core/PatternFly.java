package org.patternfly.core;

public interface PatternFly {

    enum Strategy {
        APPEND_REMOVE,
        SHOW_HIDE
    }
    // TODO Use in components
    Strategy STRATEGY = Strategy.SHOW_HIDE;
}

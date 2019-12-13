package org.patternfly.core;

public interface PatternFly {

    // TODO Use in components
    Strategy STRATEGY = Strategy.SHOW_HIDE;


    enum Strategy {
        APPEND_REMOVE,
        SHOW_HIDE
    }
}

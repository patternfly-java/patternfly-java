package org.patternfly.component.truncate;

import org.patternfly.style.Classes;

public enum TruncatePosition {

    start(Classes.end),

    middle(""),

    end(Classes.start);

    final String suffix;

    TruncatePosition(String suffix) {
        this.suffix = suffix;
    }
}

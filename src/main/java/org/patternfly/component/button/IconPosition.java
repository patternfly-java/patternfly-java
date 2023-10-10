package org.patternfly.component.button;

import org.patternfly.layout.Classes;

import static org.patternfly.layout.Classes.modifier;

public enum IconPosition {

    start(modifier(Classes.start)),

    end(modifier(Classes.end));

    final String modifier;

    IconPosition(String modifier) {this.modifier = modifier;}
}

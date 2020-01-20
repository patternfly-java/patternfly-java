package org.patternfly.components;

import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.bottom;
import static org.patternfly.resources.Constants.left;
import static org.patternfly.resources.Constants.right;
import static org.patternfly.resources.Constants.top;

/** Position used by {@link Popover} and {@link Tooltip}. */
enum Position {
    AUTO(""), TOP(modifier(top)), RIGHT(modifier(right)), BOTTOM(modifier(bottom)), LEFT(modifier(left));

    final String modifier;

    Position(String modifier) {this.modifier = modifier;}
}

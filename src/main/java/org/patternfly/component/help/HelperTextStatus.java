package org.patternfly.component.help;

import org.patternfly.layout.Classes;
import org.patternfly.layout.PredefinedIcon;

import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.PredefinedIcon.checkCircle;
import static org.patternfly.layout.PredefinedIcon.exclamationCircle;
import static org.patternfly.layout.PredefinedIcon.exclamationTriangle;
import static org.patternfly.layout.PredefinedIcon.minus;

public enum HelperTextStatus {

    default_("", minus),

    indeterminate(modifier(Classes.indeterminate), minus),

    warning(modifier(Classes.warning), exclamationTriangle),

    success(modifier(Classes.success), checkCircle),

    error(modifier(Classes.error), exclamationCircle),

    ;

    final String modifier;
    final PredefinedIcon icon;

    HelperTextStatus(String modifier, PredefinedIcon icon) {
        this.modifier = modifier;
        this.icon = icon;
    }
}

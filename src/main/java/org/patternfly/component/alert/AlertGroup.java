/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.patternfly.component.alert;

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.layout.Classes;

import elemental2.dom.Element;
import elemental2.dom.HTMLUListElement;

import static org.jboss.elemento.Elements.body;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.component.alert.Alert.NO_TIMEOUT;
import static org.patternfly.core.Aria.atomic;
import static org.patternfly.core.Aria.live;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.layout.Classes.alertGroup;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.inline;
import static org.patternfly.layout.Classes.modifier;

/**
 * An alert group stacks and positions 2 or more alerts in a live region, either in a layer over the main content of a page or
 * inline with the page content. Alert groups should always rank alerts by age, stacking new alerts on top of old ones as they
 * surface.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/alert/html#alert-group-examples">https://www.patternfly.org/components/alert/html#alert-group-examples</a>
 */
public class AlertGroup extends BaseComponent<HTMLUListElement, AlertGroup> {

    // ------------------------------------------------------ factory

    private static AlertGroup toast;

    /**
     * Creates a new alert group of the given type without timeout.
     * <p>
     * If the type is {@link AlertGroupType#toast} the alert group is added to the body or if it already has been added the
     * existing alert group is returned (singleton pattern).
     */
    public static AlertGroup alertGroup(AlertGroupType type) {
        return alertGroup(type, NO_TIMEOUT);
    }

    /**
     * Creates a new alert group of the given type and timeout.
     * <p>
     * If the type is {@link AlertGroupType#toast} the alert group is added to the body or if it already has been added the
     * existing alert group is returned (singleton pattern).
     */
    public static AlertGroup alertGroup(AlertGroupType type, int timeout) {
        if (type == AlertGroupType.toast) {
            if (toast == null) {
                toast = new AlertGroup(type, timeout);
                body().add(div().add(toast));
            }
            return toast;
        } else {
            return new AlertGroup(type, timeout);
        }
    }

    // ------------------------------------------------------ instance

    private final AlertGroupType type;
    private final int timeout;

    AlertGroup(AlertGroupType type, int timeout) {
        super(ul().css(component(alertGroup))
                .attr(role, "list")
                .element(), ComponentType.AlertGroup);
        this.type = type;
        this.timeout = timeout;

        if (type == AlertGroupType.dynamic || type == AlertGroupType.toast) {
            aria(live, "polite");
            aria(atomic, false);
            if (type == AlertGroupType.toast) {
                css(modifier(Classes.toast));
            }
        }
    }

    // ------------------------------------------------------ add

    public AlertGroup addAlert(Alert alert) {
        return add(alert);
    }

    // override to assure internal wiring
    public AlertGroup add(Alert alert) {
        alert.passComponent(this);
        if (type == AlertGroupType.toast) {
            if (timeout != NO_TIMEOUT && alert.timeout == NO_TIMEOUT) {
                alert.timeout(timeout);
            }
            if (alert.closeHandler == null) {
                alert.closable();
            }
            insertFirst(element(), li().add(alert));
        } else {
            if (type == AlertGroupType.staticInline) {
                if (!alert.element().classList.contains(modifier(inline))) {
                    alert.inline();
                }
            }
            add(li().add(alert));
        }
        return this;
    }

    @Override
    public AlertGroup that() {
        return this;
    }

    // ------------------------------------------------------ internal

    void closeAlert(Alert alert) {
        if (alert != null) {
            Element element = alert.element().parentElement;
            if (element != null) {
                failSafeRemoveFromParent(element);
            } else {
                failSafeRemoveFromParent(alert);
            }
        }
    }
}

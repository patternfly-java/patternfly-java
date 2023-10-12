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

import java.util.HashMap;
import java.util.Map;

import org.jboss.elemento.Attachable;
import org.jboss.elemento.Id;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.UnderDevelopment;
import org.patternfly.core.Dataset;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLLIElement;
import elemental2.dom.HTMLUListElement;
import elemental2.dom.MutationRecord;

import static elemental2.dom.DomGlobal.clearTimeout;
import static elemental2.dom.DomGlobal.setTimeout;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.ul;
import static org.jboss.elemento.EventType.mouseout;
import static org.jboss.elemento.EventType.mouseover;
import static org.patternfly.layout.Classes.alertGroup;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.modifier;

/**
 * PatternFly alert group component.
 *
 * @see <a href=
 *      "https://www.patternfly.org/v4/documentation/core/components/alertgroup">https://www.patternfly.org/v4/documentation/core/components/alertgroup</a>
 */
@UnderDevelopment
public class AlertGroup extends BaseComponent<HTMLUListElement, AlertGroup> implements Attachable {

    // ------------------------------------------------------ factory

    private static final double DEFAULT_TIMEOUT = 8000; // ms
    private static AlertGroup toast;

    public static AlertGroup toast() {
        if (toast == null) {
            toast = new AlertGroup(DEFAULT_TIMEOUT);
            toast.element().classList.add(modifier(Classes.toast));
        }
        return toast;
    }

    public static AlertGroup embedded() {
        return new AlertGroup(0);
    }

    // ------------------------------------------------------ instance

    private final double timeout;
    private final Map<String, Alert> alerts;
    private final Map<String, Double> messageIds;

    AlertGroup(double timeout) {
        super(ul().css(component(alertGroup)).element(), "AlertGroup");
        this.timeout = timeout;
        this.alerts = new HashMap<>();
        this.messageIds = new HashMap<>();
    }

    @Override
    public void attach(MutationRecord mutationRecord) {

    }

    // ------------------------------------------------------ add

    public AlertGroup addAlert(Alert alert) {
        return add(alert);
    }

    public AlertGroup add(Alert alert) {
        if (timeout > 100) {
            String id = Id.unique();
            // TODO Find an alternative
            // alert.onClose((e, a) -> stopMessageTimeout(id, alert));

            startMessageTimeout(id, alert);
            alert.on(mouseover, e -> stopMessageTimeout(id, alert));
            alert.on(mouseout, e -> startMessageTimeout(id, alert));
        }

        HTMLLIElement item = li().css(component(alertGroup, Classes.item)).add(alert).element();
        if (this == toast && !alert.hasClose()) {
            alert.closable();
            insertFirst(element(), item);
        } else {
            add(item);
        }
        return this;
    }

    @Override
    public AlertGroup that() {
        return this;
    }

    // ------------------------------------------------------ internal

    private void startMessageTimeout(String id, Alert alert) {
        double timeoutHandle = setTimeout((o) -> remove(id), timeout);
        alerts.put(id, alert);
        messageIds.put(id, timeoutHandle);
    }

    private void stopMessageTimeout(String id, Alert alert) {
        if (messageIds.containsKey(id)) {
            clearTimeout(messageIds.get(id));
            alerts.remove(id);
            messageIds.remove(id);
        }
    }

    private void remove(String id) {
        Alert alert = alerts.get(id);
        failSafeRemoveFromParent(alert); // TODO Remove alert group item, not alert!
        Double timeoutHandle = messageIds.remove(id);
        if (timeoutHandle != null) {
            clearTimeout(timeoutHandle);
        }
    }
}

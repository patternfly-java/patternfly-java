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

import java.util.ArrayList;
import java.util.List;

import org.patternfly.component.ComponentReference;
import org.patternfly.component.SubComponent;
import org.patternfly.component.button.Button;
import org.patternfly.handler.ActionHandler;
import org.patternfly.layout.Classes;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.EventType.click;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.layout.Classes.actionGroup;
import static org.patternfly.layout.Classes.component;

public class AlertActionGroup extends SubComponent<HTMLDivElement, AlertActionGroup> implements ComponentReference<Alert> {

    // ------------------------------------------------------ factory

    public static AlertActionGroup alertActionGroup() {
        return new AlertActionGroup();
    }

    // ------------------------------------------------------ instance

    private final List<ButtonActionHandlerTuple> tuples;
    private Alert alert;

    AlertActionGroup() {
        super(div().css(component(Classes.alert, actionGroup)).element());
        this.tuples = new ArrayList<>();
    }

    @Override
    public void passComponent(Alert alert) {
        this.alert = alert;
        for (ButtonActionHandlerTuple tuple : tuples) {
            tuple.button.on(click, e -> tuple.handler.onAction(e, alert));
        }
    }

    @Override
    public Alert mainComponent() {
        return alert;
    }

    // ------------------------------------------------------ add

    public AlertActionGroup addAction(String action) {
        return addAction(button(action).inline().link(), null);
    }

    public AlertActionGroup addAction(String action, ActionHandler<Alert> handler) {
        return addAction(button(action).inline().link(), handler);
    }

    public AlertActionGroup addAction(Button action) {
        return addAction(action, null);
    }

    public AlertActionGroup addAction(Button action, ActionHandler<Alert> handler) {
        if (handler != null) {
            tuples.add(new ButtonActionHandlerTuple(action, handler));
        }
        return add(action);
    }

    // ------------------------------------------------------ builder

    @Override
    public AlertActionGroup that() {
        return this;
    }

    // ------------------------------------------------------ internal

    private static class ButtonActionHandlerTuple {
        final Button button;
        final ActionHandler<Alert> handler;

        ButtonActionHandlerTuple(Button button, ActionHandler<Alert> handler) {
            this.button = button;
            this.handler = handler;
        }
    }
}

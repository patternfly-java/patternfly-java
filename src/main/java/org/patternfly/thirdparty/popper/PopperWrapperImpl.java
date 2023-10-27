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
package org.patternfly.thirdparty.popper;

import java.util.List;

import org.gwtproject.event.shared.HandlerRegistration;
import org.patternfly.handler.Callback;

import elemental2.core.JsArray;
import elemental2.dom.CSSProperties.OpacityUnionType;
import elemental2.promise.Promise;

import static elemental2.dom.DomGlobal.clearTimeout;
import static elemental2.dom.DomGlobal.setTimeout;
import static org.jboss.elemento.Elements.setVisible;

/**
 * Wrapper around {@link Popper}
 */
public class PopperWrapperImpl implements PopperWrapper {

    private final Popper popper;
    private final List<HandlerRegistration> handlerRegistrations;
    private final int animationDuration;
    private final int entryDelay;
    private final int exitDelay;
    private double transitionTimer, exitTimer, entryTimer;

    PopperWrapperImpl(Popper popper, List<HandlerRegistration> handlerRegistrations,
            int animationDuration, int entryDelay, int exitDelay) {
        this.popper = popper;
        this.handlerRegistrations = handlerRegistrations;
        this.animationDuration = animationDuration;
        this.entryDelay = entryDelay;
        this.exitDelay = exitDelay;
    }

    @Override
    public Promise<State> update() {
        return popper.update();
    }

    @Override
    public void show(Callback visible) {
        if (animationDuration != UNDEFINED) {
            clearTimeout(transitionTimer);
        }
        if (exitDelay != UNDEFINED) {
            clearTimeout(exitTimer);
        }
        if (entryDelay == UNDEFINED) {
            internalShow(visible);
        } else {
            entryTimer = setTimeout(__ -> internalShow(visible), entryDelay);
        }
    }

    @Override
    public void hide(Callback hidden) {
        if (entryDelay != UNDEFINED) {
            clearTimeout(entryTimer);
        }
        if (exitDelay == UNDEFINED) {
            if (animationDuration == UNDEFINED) {
                internalHide(hidden);
            } else {
                popper.state.elements.popper.style.opacity = OpacityUnionType.of(0);
                transitionTimer = setTimeout(__ -> internalHide(hidden), animationDuration);
            }
        } else {
            exitTimer = setTimeout(t0 -> {
                if (animationDuration == UNDEFINED) {
                    internalHide(hidden);
                } else {
                    transitionTimer = setTimeout(t1 -> internalHide(hidden), animationDuration);
                }
            }, exitDelay);
        }
    }

    @Override
    public void cleanup() {
        for (HandlerRegistration handlerRegistration : handlerRegistrations) {
            handlerRegistration.removeHandler();
        }
        popper.destroy();
    }

    private void internalShow(Callback visible) {
        setVisible(popper.state.elements.popper, true);
        toggleEvenListeners(true);
        popper.update().then(__ -> {
            if (animationDuration != UNDEFINED) {
                popper.state.elements.popper.style.opacity = OpacityUnionType.of(1);
            }
            if (visible != null) {
                visible.call();
            }
            return null;
        });
    }

    private void internalHide(Callback hidden) {
        setVisible(popper.state.elements.popper, false);
        toggleEvenListeners(false);
        if (hidden != null) {
            hidden.call();
        }
    }

    private void toggleEvenListeners(boolean onOff) {
        popper.setOptions(existingOptions -> {
            JsArray<Modifier> updatedModifiers = new JsArray<>();
            for (int i = 0; i < existingOptions.modifiers.length; i++) {
                Modifier modifier = existingOptions.modifiers.getAt(i);
                if (modifier.name.equals("eventListeners")) {
                    modifier.enabled = onOff;
                }
                updatedModifiers.push(modifier);
            }
            Options updateOptions = new Options();
            updateOptions.placement = existingOptions.placement;
            updateOptions.strategy = existingOptions.strategy;
            updateOptions.onFirstUpdate = existingOptions.onFirstUpdate;
            updateOptions.modifiers = updatedModifiers;
            return updateOptions;
        });
    }
}

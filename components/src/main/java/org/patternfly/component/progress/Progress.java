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
package org.patternfly.component.progress;

import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.Id;
import org.patternfly.component.BaseComponentFlat;
import org.patternfly.component.ComponentType;
import org.patternfly.component.HasValue;
import org.patternfly.component.ValidationStatus;
import org.patternfly.component.help.HelperText;
import org.patternfly.core.Aria;
import org.patternfly.core.ObservableValue;
import org.patternfly.handler.ChangeHandler;
import org.patternfly.style.Classes;
import org.patternfly.style.Size;
import org.patternfly.style.Status;

import elemental2.dom.Event;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.jboss.elemento.Elements.insertFirst;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.component.progress.MeasureLocation.inside;
import static org.patternfly.component.progress.MeasureLocation.outside;
import static org.patternfly.component.progress.MeasureLocation.top;
import static org.patternfly.component.tooltip.Tooltip.tooltip;
import static org.patternfly.core.Aria.hidden;
import static org.patternfly.core.Aria.labelledBy;
import static org.patternfly.core.Aria.valueMax;
import static org.patternfly.core.Aria.valueMin;
import static org.patternfly.core.Aria.valueNow;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Numbers.percentage;
import static org.patternfly.core.ObservableValue.ov;
import static org.patternfly.core.Roles.progressbar;
import static org.patternfly.core.Validation.verifyEnum;
import static org.patternfly.icon.IconSets.fas.checkCircle;
import static org.patternfly.icon.IconSets.fas.exclamationTriangle;
import static org.patternfly.icon.IconSets.fas.timesCircle;
import static org.patternfly.style.Classes.bar;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.description;
import static org.patternfly.style.Classes.icon;
import static org.patternfly.style.Classes.indicator;
import static org.patternfly.style.Classes.measure;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.progress;
import static org.patternfly.style.Classes.singleline;
import static org.patternfly.style.Classes.truncate;
import static org.patternfly.style.Size.lg;
import static org.patternfly.style.Size.md;
import static org.patternfly.style.Size.sm;
import static org.patternfly.style.Status.danger;
import static org.patternfly.style.Status.info;
import static org.patternfly.style.Status.success;
import static org.patternfly.style.Status.warning;

/**
 * A progress bar informs users about the completion status of an ongoing process or task.
 *
 * @see <a href= "https://www.patternfly.org/components/progress">https://www.patternfly.org/components/progress</a>
 */
public class Progress extends BaseComponentFlat<HTMLElement, Progress> implements HasValue<Integer> {

    // ------------------------------------------------------ factory

    public static Progress progress() {
        return new Progress();
    }

    // ------------------------------------------------------ instance

    private final ObservableValue<Integer> value;
    private final HTMLElement measureElement;
    private final HTMLContainerBuilder<HTMLDivElement> statusElement;
    private final HTMLContainerBuilder<HTMLDivElement> indicatorElement;
    private final HTMLContainerBuilder<HTMLDivElement> progressbarElement;

    private int min;
    private int max;
    private int step;
    private Status status;
    private ProgressLabel label;
    private HelperText helperText;
    private HTMLElement titleElement;
    private HTMLElement iconContainer;
    private MeasureLocation measureLocation;
    private ChangeHandler<Progress, Integer> changeHandler;

    Progress() {
        super(ComponentType.Progress, div().css(component(progress), modifier(singleline)).element());
        this.value = ov(0).subscribe(this::onValueChanged);
        this.label = (min, max, step, value) -> value + "%";

        // these elements are mandatory
        this.statusElement = div().css(component(progress, Classes.status))
                .aria(hidden, true);
        element().appendChild(statusElement.element());
        this.progressbarElement = div().css(component(progress, bar))
                .attr(role, progressbar)
                .add(indicatorElement = div().css(component(progress, indicator)));
        element().appendChild(progressbarElement.element());

        // these element is added/removed based on the measure location
        this.measureElement = span().css(component(progress, measure)).element();

        range(0, 100, 1);
        measureLocation(top);
        value.publish();
    }

    // ------------------------------------------------------ add

    public Progress addHelperText(HelperText helperText) {
        return add(helperText);
    }

    // override to assure internal wiring
    public Progress add(HelperText helperText) {
        if (this.helperText != null) {
            this.helperText.element().replaceWith(helperText.element());
        } else {
            element().appendChild(div().css(component(progress, Classes.helperText))
                    .add(helperText)
                    .element());
        }
        this.helperText = helperText;
        return this;
    }

    // ------------------------------------------------------ builder

    public Progress min(int min) {
        this.min = min;
        progressbarElement.aria(valueMin, min);
        return this;
    }

    public Progress max(int max) {
        this.max = max;
        progressbarElement.aria(valueMax, max);
        return this;
    }

    public Progress step(int step) {
        this.step = step;
        return this;
    }

    public Progress range(int min, int max) {
        return range(min, max, 1);
    }

    public Progress range(int min, int max, int step) {
        this.min(min);
        this.max(max);
        this.step(step);
        return this;
    }

    public Progress label(ProgressLabel label) {
        this.label = label;
        return this;
    }

    public Progress measureLocation(MeasureLocation location) {
        this.measureLocation = location;
        failSafeRemoveFromParent(measureElement);
        classList().remove(outside.modifier, inside.modifier);

        if (location == inside || location == outside) {
            classList().add(location.modifier);
            if (location == inside) {
                css(lg.modifier());
            }
        }
        if (location == top || location == outside) {
            statusElement.add(measureElement);
        } else if (location == inside) {
            indicatorElement.add(measureElement);
        }
        return this;
    }

    public Progress size(Size size) {
        if (verifyEnum(element(), "size", size, sm, md, lg)) {
            css(size.modifier());
        }
        return this;
    }

    public Progress status(Status status) {
        if (verifyEnum(element(), "status", status, info, danger, success, warning)) {
            if (this.status != null) {
                classList().remove(this.status.modifier);
            }
            if (status != info) {
                css(status.modifier);
            }
            removeChildrenFrom(iconContainer);
            switch (status) {
                case danger:
                    failSafeIconContainer().appendChild(timesCircle().element());
                    if (helperText != null) {
                        helperText.firstItem().status(ValidationStatus.error);
                    }
                    break;
                case warning:
                    failSafeIconContainer().appendChild(exclamationTriangle().element());
                    if (helperText != null) {
                        helperText.firstItem().status(ValidationStatus.warning);
                    }
                    break;
                case success:
                    failSafeIconContainer().appendChild(checkCircle().element());
                    if (helperText != null) {
                        helperText.firstItem().status(ValidationStatus.success);
                    }
                    break;
                case info:
                case custom:
                    break;
            }
            this.status = status;
        }
        return this;
    }

    public Progress title(String title) {
        failSafeTitleElement().textContent = title;
        return this;
    }

    public Progress truncate() {
        if (titleElement != null && !titleElement.classList.contains(modifier(truncate))) {
            titleElement.classList.add(modifier(truncate));
            element().appendChild(tooltip(titleElement, titleElement.textContent).element());
        }
        return this;
    }

    public Progress value(int value) {
        this.value.set(value);
        return this;
    }

    @Override
    public Progress that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public Progress ariaLabel(String label) {
        progressbarElement.aria(Aria.label, label);
        return this;
    }

    public Progress ariaLabeledBy(String labeledBy) {
        progressbarElement.aria(labelledBy, labeledBy);
        return this;
    }

    // ------------------------------------------------------ events

    /**
     * Sets the change handler for the progress component.
     *
     * @param changeHandler The change handler to be set.
     * @return The progress component.
     */
    public Progress onChange(ChangeHandler<Progress, Integer> changeHandler) {
        this.changeHandler = changeHandler;
        return this;
    }
    // ------------------------------------------------------ api

    /**
     * Decreases the value of the progress component by the step value. If the new value is less than the minimum value, the
     * minimum value is used instead.
     */
    public void decrease() {
        int newValue = Math.max(min, value.get() - step);
        value(newValue);
    }

    /**
     * Increases the value of the progress component by the step value. If the new value is greater than the maximum value, the
     * maximum value is used instead.
     */
    public void increase() {
        int newValue = Math.min(max, value.get() + step);
        value(newValue);
    }

    /**
     * Retrieves the minimum value of the progress component.
     *
     * @return The minimum value of the progress component.
     */
    public int min() {
        return min;
    }

    /**
     * Retrieves the maximum value of the progress component.
     *
     * @return The maximum value of the progress component.
     */
    public int max() {
        return max;
    }

    /**
     * Retrieves the current step value of the progress component.
     *
     * @return The current step value of the progress component.
     */
    public int step() {
        return step;
    }

    /**
     * Retrieves the range of values for the progress component.
     *
     * @return An array containing the minimum, maximum, and step values of the Progress component.
     */
    public int[] range() {
        return new int[]{min, max, step};
    }

    @Override
    public Integer value() {
        return this.value.get();
    }

    // ------------------------------------------------------ internal

    private void onValueChanged(int current, int previous) {
        measureElement.textContent = label.label(min, max, step, current);
        progressbarElement.aria(valueNow, current);
        indicatorElement.style("width", percentage(current, min, max) + "%");
        if (changeHandler != null && current != previous) {
            changeHandler.onChange(new Event(""), this, value.get());
        }
    }

    private HTMLElement failSafeTitleElement() {
        if (titleElement == null) {
            classList().remove(modifier(singleline));
            String id = Id.unique(componentType().id, "description");
            insertFirst(element(), titleElement = div().css(component(progress, description))
                    .id(id)
                    .aria(hidden, true)
                    .element());
            progressbarElement.aria(labelledBy, id);
        }
        return titleElement;
    }

    private HTMLElement failSafeIconContainer() {
        if (iconContainer == null) {
            statusElement.add(iconContainer = span().css(component(progress, Classes.status, icon)).element());
        }
        return iconContainer;
    }
}

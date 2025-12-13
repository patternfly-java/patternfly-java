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
package org.patternfly.chart;

import java.util.function.Function;

import org.jboss.elemento.ElementAttributeMethods;
import org.jboss.elemento.ElementClassListMethods;
import org.jboss.elemento.ElementConsumerMethods;
import org.jboss.elemento.ElementContainerMethods;
import org.jboss.elemento.ElementEventMethods;
import org.jboss.elemento.ElementIdMethods;
import org.jboss.elemento.ElementQueryMethods;
import org.jboss.elemento.HTMLElementAttributeMethods;
import org.jboss.elemento.HTMLElementDataMethods;
import org.jboss.elemento.HTMLElementStyleMethods;
import org.jboss.elemento.HTMLElementVisibilityMethods;
import org.jboss.elemento.TypedBuilder;

import elemental2.core.JsArray;
import jsinterop.base.Js;

import static java.util.Objects.requireNonNull;

public abstract class BaseChart<E extends ChartElement, B extends TypedBuilder<E, B>> implements
        Chart,
        ElementAttributeMethods<E, B>,
        ElementClassListMethods<E, B>,
        ElementConsumerMethods<E, B>,
        ElementContainerMethods<E, B>,
        ElementEventMethods<E, B>,
        ElementIdMethods<E, B>,
        ElementQueryMethods<E>,
        HTMLElementAttributeMethods<E, B>,
        HTMLElementDataMethods<E, B>,
        HTMLElementStyleMethods<E, B>,
        HTMLElementVisibilityMethods<E, B> {

    // ------------------------------------------------------ instance

    private final ChartType chartType;
    private final E element;

    protected BaseChart(ChartType chartType, E element) {
        this.chartType = requireNonNull(chartType, "chart type required");
        this.element = Js.uncheckedCast(requireNonNull(element, "element required"));
        Ouia.component(element, chartType);
    }

    @Override
    public ChartType chartType() {
        return chartType;
    }

    @Override
    public E element() {
        return element;
    }

    // ------------------------------------------------------ builder

    public B height(int height) {
        element().height = height;
        return that();
    }

    public B labels(Function<Data, String> labels) {
        // There's a lot more in 'data', but we just want the 'datum' property
        element().labels = (data -> labels.apply(Js.cast(data.asPropertyMap().get("datum"))));
        return that();
    }

    public B legendData(String... legend) {
        if (legend != null) {
            JsArray<LegendData> array = new JsArray<>();
            for (String l : legend) {
                LegendData ld = new LegendData();
                ld = new LegendData();
                ld.name = l;
                array.push(ld);
            }
            element().legendData = array;
        }
        return that();
    }

    public B legendData(LegendData... legend) {
        if (legend != null) {
            JsArray<LegendData> array = new JsArray<>();
            array.push(legend);
            element().legendData = array;
        }
        return that();
    }

    public B legendOrientation(LegendOrientation orientation) {
        element().legendOrientation = orientation.name().toLowerCase();
        return that();
    }

    public B legendPosition(LegendPosition position) {
        element().legendPosition = position.name().toLowerCase();
        return that();
    }

    public B padding(Padding padding) {
        element().padding = padding;
        return that();
    }

    public B subTitle(String subTitle) {
        element().subTitle = subTitle;
        return that();
    }

    public B subTitlePosition(SubTitlePosition position) {
        element().subTitlePosition = position.name().toLowerCase();
        return that();
    }

    public B themeColor(ChartThemeColor themeColor) {
        element().themeColor = themeColor.color;
        return that();
    }

    public B title(String title) {
        element().title = title;
        return that();
    }

    public B width(int width) {
        element().width = width;
        return that();
    }

    // ------------------------------------------------------ aria

    public B ariaTitle(String ariaTitle) {
        element().setAttribute("aria-title", ariaTitle);
        return that();
    }

    public B ariaDesc(String ariaDesc) {
        element().setAttribute("aria-desc", ariaDesc);
        return that();
    }
}

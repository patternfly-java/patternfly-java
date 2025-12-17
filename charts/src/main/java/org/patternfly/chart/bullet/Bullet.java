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
package org.patternfly.chart.bullet;

import java.util.function.Function;

import org.patternfly.chart.BaseChart;
import org.patternfly.chart.ChartType;
import org.patternfly.chart.LegendData;

import elemental2.core.JsArray;
import jsinterop.base.Js;

import static org.jboss.elemento.Elements.createHtmlElement;

public class Bullet extends BaseChart<BulletElement, Bullet> {

    // ------------------------------------------------------ factory

    public static Bullet bullet() {
        return new Bullet();
    }

    // ------------------------------------------------------ instance

    Bullet() {
        super(ChartType.Bullet, Js.uncheckedCast(createHtmlElement("pfj-chart-bullet", BulletElement.class)));
    }

    // ------------------------------------------------------ builder

    public Bullet comparativeErrorMeasureData(BulletData... data) {
        element().comparativeErrorMeasureData = bulletData(data);
        return that();
    }

    public Bullet comparativeErrorMeasureLegendData(String... data) {
        element().comparativeErrorMeasureLegendData = legendDataArray(data);
        return that();
    }

    public Bullet comparativeErrorMeasureLegendData(LegendData... data) {
        element().comparativeErrorMeasureLegendData = legendDataArray(data);
        return that();
    }

    public Bullet comparativeWarningMeasureData(BulletData... data) {
        element().comparativeWarningMeasureData = bulletData(data);
        return that();
    }

    public Bullet comparativeWarningMeasureLegendData(String... data) {
        element().comparativeWarningMeasureLegendData = legendDataArray(data);
        return that();
    }

    public Bullet comparativeWarningMeasureLegendData(LegendData... data) {
        element().comparativeWarningMeasureLegendData = legendDataArray(data);
        return that();
    }

    public Bullet primaryDotMeasureData(BulletData... data) {
        element().primaryDotMeasureData = bulletData(data);
        return that();
    }

    public Bullet primaryDotMeasureLegendData(String... data) {
        element().primaryDotMeasureLegendData = legendDataArray(data);
        return that();
    }

    public Bullet primaryDotMeasureLegendData(LegendData... data) {
        element().primaryDotMeasureLegendData = legendDataArray(data);
        return that();
    }

    public Bullet primarySegmentedMeasureData(BulletData... data) {
        element().primarySegmentedMeasureData = bulletData(data);
        return that();
    }

    public Bullet primarySegmentedMeasureLegendData(String... data) {
        element().primarySegmentedMeasureLegendData = legendDataArray(data);
        return that();
    }

    public Bullet primarySegmentedMeasureLegendData(LegendData... data) {
        element().primarySegmentedMeasureLegendData = legendDataArray(data);
        return that();
    }

    public Bullet qualitativeRangeData(BulletData... data) {
        element().qualitativeRangeData = bulletData(data);
        return that();
    }

    public Bullet qualitativeRangeLegendData(String... data) {
        element().qualitativeRangeLegendData = legendDataArray(data);
        return that();
    }

    public Bullet qualitativeRangeLegendData(LegendData... data) {
        element().qualitativeRangeLegendData = legendDataArray(data);
        return that();
    }

    public Bullet bulletLabels(Function<BulletData, String> labels) {
        // There's a lot more in 'data', but we just want the 'datum' property
        element().labels = (data -> labels.apply(Js.cast(data.asPropertyMap().get("datum"))));
        return that();
    }

    public Bullet invert() {
        element().setAttribute("invert", true);
        return this;
    }

    public Bullet maxDomain(double maxDomain) {
        element().setAttribute("max-domain", maxDomain);
        return this;
    }

    @Override
    public Bullet that() {
        return this;
    }

    // ------------------------------------------------------ internal

    private JsArray<BulletData> bulletData(BulletData... data) {
        JsArray<BulletData> array = new JsArray<>();
        if (data != null) {
            array.push(data);
        }
        return array;
    }
}

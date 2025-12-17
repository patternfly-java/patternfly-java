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
package org.patternfly.showcase.chart;

import org.jboss.elemento.router.Route;
import org.patternfly.chart.bullet.Bullet;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.chart.bullet.Bullet.bullet;
import static org.patternfly.chart.bullet.BulletData.bulletData;
import static org.patternfly.showcase.ApiDoc.Type.chart;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.charts;

@Route(value = "/charts/bullet", title = "Bullet")
public class BulletChart extends SnippetPage {

    public BulletChart() {
        super(charts.get("bullet"));

        startExamples();
        addSnippet(new Snippet("bullet-basic", "Basic",
                code("bullet-basic"), () ->
                // @code-start:bullet-basic
                div().style("height: 150px; width: 600px;")
                        .add(bullet()
                                .ariaTitle("Bullet chart example")
                                .ariaDesc("Storage capacity")
                                .comparativeWarningMeasureData(bulletData("Warning", 88))
                                .primarySegmentedMeasureData(bulletData("Measure", 60))
                                .qualitativeRangeData(bulletData("Range", 50), bulletData("Range", 75))
                                .bulletLabels(data -> data.name + ": " + data.y)
                                .maxDomain(100)
                                .height(150)
                                .width(600)
                        )
                        .element()
                // @code-end:bullet-basic
        ));

        addSnippet(new Snippet("bullet-spm", "Segmented primary measure",
                code("bullet-spm"), () ->
                // @code-start:bullet-spm
                div().style("height: 200px; width: 600px;")
                        .add(bullet()
                                .ariaTitle("Bullet chart example")
                                .ariaDesc("Storage capacity")
                                .comparativeWarningMeasureData(bulletData("Warning", 88))
                                .comparativeWarningMeasureLegendData("Warning")
                                .primarySegmentedMeasureData(bulletData("Measure", 25), bulletData("Measure", 60))
                                .primarySegmentedMeasureLegendData("Measure 1", "Measure 2")
                                .qualitativeRangeData(bulletData("Range", 50), bulletData("Range", 75))
                                .qualitativeRangeLegendData("Range 1", "Range 2")
                                .bulletLabels(data -> data.name + ": " + data.y)
                                .maxDomain(100)
                                .height(200)
                                .width(600)
                        )
                        .element()
                // @code-end:bullet-spm
        ));

        startApiDocs(Bullet.class);
        addApiDoc(Bullet.class, chart);
    }
}

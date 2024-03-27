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
package org.patternfly.showcase.component;

import org.jboss.elemento.router.Route;
import org.patternfly.component.brand.Brand;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.img;
import static org.patternfly.component.brand.Brand.brand;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoint.md;
import static org.patternfly.style.Breakpoint.sm;
import static org.patternfly.style.Breakpoints.breakpoints;

@Route(value = "/components/brand", title = "Brand")
public class BrandComponent extends SnippetPage {

    public BrandComponent() {
        super(components.get("brand"));

        startExamples();
        addSnippet(new Snippet("brand-basic", "Basic",
                code("brand-basic"), () ->
                // @code-start:brand-basic
                div()
                        .add(brand("https://www.patternfly.org/assets/images/pf_logo.svg", "PatternFly logo"))
                        .element()
                // @code-end:brand-basic
        ));

        addSnippet(new Snippet("brand-responsive", "Responsive",
                code("brand-responsive"), () ->
                // @code-start:brand-responsive
                div()
                        .add(brand()
                                .widths(breakpoints(default_, "40px", sm, "60px", md, "220px"))
                                .addSource("https://www.patternfly.org/assets/images/pf-c-brand__logo-on-xl.svg",
                                        "(min-width: 1200px)")
                                .addSource("https://www.patternfly.org/assets/images/pf-c-brand__logo-on-lg.svg",
                                        "(min-width: 992px)")
                                .addSource("https://www.patternfly.org/assets/images/pf-c-brand__logo-on-md.svg",
                                        "(min-width: 768px)")
                                .addSource("https://www.patternfly.org/assets/images/pf-c-brand__logo-on-sm.svg",
                                        "(min-width: 576px)")
                                .addSource("https://www.patternfly.org/assets/images/pf-c-brand__logo.svg")
                                .addImg(img("https://www.patternfly.org/assets/images/pf-c-brand__logo-base.jpg")
                                        .apply(i -> i.alt = "PatternFly fallback logo")))
                        .element()
                // @code-end:brand-responsive
        ));

        startApiDocs(Brand.class);
        addApiDoc(Brand.class, component);
    }
}

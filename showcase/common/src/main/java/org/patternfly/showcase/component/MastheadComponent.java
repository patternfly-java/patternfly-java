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
import org.patternfly.component.page.Masthead;
import org.patternfly.component.page.MastheadBrand;
import org.patternfly.component.page.MastheadContent;
import org.patternfly.component.page.MastheadLogo;
import org.patternfly.component.page.MastheadMain;
import org.patternfly.component.page.MastheadToggle;
import org.patternfly.showcase.ResourcesImpl;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;
import org.patternfly.style.Inset;

import static org.gwtproject.safehtml.shared.SafeHtmlUtils.fromSafeConstant;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.page.Display.inline;
import static org.patternfly.component.page.Display.stack;
import static org.patternfly.component.page.Masthead.masthead;
import static org.patternfly.component.page.MastheadBrand.mastheadBrand;
import static org.patternfly.component.page.MastheadContent.mastheadContent;
import static org.patternfly.component.page.MastheadLogo.mastheadLogo;
import static org.patternfly.component.page.MastheadMain.mastheadMain;
import static org.patternfly.component.page.MastheadToggle.mastheadToggle;
import static org.patternfly.layout.flex.Flex.flex;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.style.Breakpoint._2xl;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoint.lg;
import static org.patternfly.style.Breakpoints.breakpoints;
import static org.patternfly.style.Classes.brand;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Variable.componentVar;
import static org.patternfly.style.Variables.Height;

@Route(value = "/components/masthead", title = "Masthead")
public class MastheadComponent extends SnippetPage {

    public MastheadComponent() {
        super(components.get("masthead"));

        startExamples();
        addSnippet(new Snippet("masthead-basic", "Basic",
                code("masthead-basic"), () ->
                // @code-start:masthead-basic
                div()
                        .add(masthead()
                                .addMain(mastheadMain()
                                        .addToggle(mastheadToggle())
                                        .addBrand(mastheadBrand()
                                                .addLogo(mastheadLogo("#")
                                                        .add("Logo"))))
                                .addContent(mastheadContent()
                                        .text("Content")))
                        .element()
                // @code-end:masthead-basic
        ));

        addSnippet(new Snippet("masthead-mixed-content", "Basic with mixed content",
                code("masthead-mixed-content"), () ->
                // @code-start:masthead-mixed-content
                div()
                        .add(masthead()
                                .addMain(mastheadMain()
                                        .addToggle(mastheadToggle())
                                        .addBrand(mastheadBrand()
                                                .addLogo(mastheadLogo("#")
                                                        .add("Logo"))))
                                .addContent(mastheadContent()
                                        .add(flex()
                                                .add(span().text("Content"))
                                                .add(button("Primary").primary())
                                                .add(button("Secondary").secondary())
                                                .add(button("Tertiary").tertiary()))))
                        .element()
                // @code-end:masthead-mixed-content
        ));

        addSnippet(new Snippet("masthead-inline", "Display inline",
                code("masthead-inline"), () ->
                // @code-start:masthead-inline
                div()
                        .add(masthead().display(breakpoints(default_, inline))
                                .addMain(mastheadMain()
                                        .addToggle(mastheadToggle())
                                        .addBrand(mastheadBrand()
                                                .addLogo(mastheadLogo("#")
                                                        .add("Logo"))))
                                .addContent(mastheadContent()
                                        .text("Content")))
                        .element()
                // @code-end:masthead-inline
        ));

        addSnippet(new Snippet("masthead-stack", "Display stack",
                code("masthead-stack"), () ->
                // @code-start:masthead-stack
                div()
                        .add(masthead().display(breakpoints(default_, stack))
                                .addMain(mastheadMain()
                                        .addToggle(mastheadToggle())
                                        .addBrand(mastheadBrand()
                                                .addLogo(mastheadLogo("#")
                                                        .add("Logo"))))
                                .addContent(mastheadContent()
                                        .text("Content")))
                        .element()
                // @code-end:masthead-stack
        ));

        addSnippet(new Snippet("masthead-responsive", "Display stack, display inline responsive",
                code("masthead-responsive"), () ->
                // @code-start:masthead-responsive
                div()
                        .add(masthead().display(breakpoints(
                                        default_, inline,
                                        lg, stack,
                                        _2xl, inline))
                                .addMain(mastheadMain()
                                        .addToggle(mastheadToggle())
                                        .addBrand(mastheadBrand()
                                                .addLogo(mastheadLogo("#")
                                                        .add("Logo"))))
                                .addContent(mastheadContent()
                                        .text("Content")))
                        .element()
                // @code-end:masthead-responsive
        ));

        addSnippet(new Snippet("masthead-light", "Light variant",
                code("masthead-light"), () ->
                // @code-start:masthead-light
                div()
                        .add(masthead()
                                .addMain(mastheadMain()
                                        .addToggle(mastheadToggle())
                                        .addBrand(mastheadBrand()
                                                .addLogo(mastheadLogo("#")
                                                        .add("Logo"))))
                                .addContent(mastheadContent()
                                        .text("Content")))
                        .element()
                // @code-end:masthead-light
        ));

        addSnippet(new Snippet("masthead-light-200", "Light 200 variant",
                code("masthead-light-200"), () ->
                // @code-start:masthead-light-200
                div()
                        .add(masthead()
                                .addMain(mastheadMain()
                                        .addToggle(mastheadToggle())
                                        .addBrand(mastheadBrand()
                                                .addLogo(mastheadLogo("#")
                                                        .add("Logo"))))
                                .addContent(mastheadContent()
                                        .text("Content")))
                        .element()
                // @code-end:masthead-light-200
        ));

        addSnippet(new Snippet("masthead-inset", "Inset",
                code("masthead-inset"), () ->
                // @code-start:masthead-inset
                div()
                        .add(masthead().inset(breakpoints(default_, Inset.sm))
                                .addMain(mastheadMain()
                                        .addToggle(mastheadToggle())
                                        .addBrand(mastheadBrand()
                                                .addLogo(mastheadLogo("#")
                                                        .add("Logo"))))
                                .addContent(mastheadContent()
                                        .text("Content")))
                        .element()
                // @code-end:masthead-inset
        ));

        addSnippet(new Snippet("masthead-clc", "Custom logo content",
                code("masthead-clc"), () ->
                // @code-start:masthead-clc
                div()
                        .add(masthead()
                                .addMain(mastheadMain()
                                        .addToggle(mastheadToggle())
                                        .addBrand(mastheadBrand()
                                                .addLogo(mastheadLogo("/")
                                                        .html(fromSafeConstant(ResourcesImpl.INSTANCE.pfLogo().getText()))
                                                        .style(componentVar(component(brand), Height).name, "36px"))))
                                .addContent(mastheadContent()
                                        .text("Content")))
                        .element()
                // @code-end:masthead-clc
        ));

        startApiDocs(Masthead.class);
        addApiDoc(Masthead.class, component);
        addApiDoc(MastheadBrand.class, subcomponent);
        addApiDoc(MastheadContent.class, subcomponent);
        addApiDoc(MastheadLogo.class, subcomponent);
        addApiDoc(MastheadMain.class, subcomponent);
        addApiDoc(MastheadToggle.class, subcomponent);
    }
}

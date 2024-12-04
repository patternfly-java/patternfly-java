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
import org.patternfly.component.icon.Icon;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.small;
import static org.jboss.elemento.Elements.strong;
import static org.patternfly.component.form.Checkbox.checkbox;
import static org.patternfly.component.icon.Icon.icon;
import static org.patternfly.component.text.TextContent.textContent;
import static org.patternfly.icon.IconSets.fas.angleDown;
import static org.patternfly.icon.IconSets.fas.angleRight;
import static org.patternfly.icon.IconSets.fas.check;
import static org.patternfly.icon.IconSets.fas.checkCircle;
import static org.patternfly.icon.IconSets.fas.cog;
import static org.patternfly.icon.IconSets.fas.exclamationCircle;
import static org.patternfly.icon.IconSets.fas.exclamationTriangle;
import static org.patternfly.icon.IconSets.fas.infoCircle;
import static org.patternfly.icon.IconSets.fas.longArrowAltDown;
import static org.patternfly.icon.IconSets.fas.plusCircle;
import static org.patternfly.icon.IconSets.patternfly.bell;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.style.Classes.util;
import static org.patternfly.style.Size.lg;
import static org.patternfly.style.Size.md;
import static org.patternfly.style.Size.sm;
import static org.patternfly.style.Size.xl;
import static org.patternfly.style.Status.custom;
import static org.patternfly.style.Status.danger;
import static org.patternfly.style.Status.info;
import static org.patternfly.style.Status.success;
import static org.patternfly.style.Status.warning;

@Route(value = "/components/icon", title = "Icon")
public class IconComponent extends SnippetPage {

    public IconComponent() {
        super(components.get("icon"));

        startExamples();
        addSnippet(new Snippet("icon-basic", "Basic",
                code("icon-basic"), () ->
                // @code-start:icon-basic
                div()
                        .add(icon(longArrowAltDown()))
                        .add(" ")
                        .add(icon(angleRight()))
                        .add(" ")
                        .add(icon(angleDown()))
                        .add(" ")
                        .add(icon(cog()))
                        .element()
                // @code-end:icon-basic
        ));

        addSnippet(new Snippet("icon-sizes", "Sizes",
                code("icon-sizes"), () ->
                // @code-start:icon-sizes
                div()
                        .add(icon(plusCircle()).size(sm))
                        .add(" ")
                        .add(icon(plusCircle()).size(md))
                        .add(" ")
                        .add(icon(plusCircle()).size(lg))
                        .add(" ")
                        .add(icon(plusCircle()).size(xl))
                        .element()
                // @code-end:icon-sizes
        ));

        addSnippet(new Snippet("icon-status-colors", "Status colors",
                "The following example demonstrates the various status variants of an icon. Keep in mind that these icons are displayed out of a typical context, and that you should not rely on color alone to convey status to users.",
                code("icon-status-colors"), () ->
                // @code-start:icon-status-colors
                div()
                        .add(icon(exclamationCircle()).status(danger))
                        .add(" ")
                        .add(icon(exclamationTriangle()).status(warning))
                        .add(" ")
                        .add(icon(check()).status(success))
                        .add(" ")
                        .add(icon(infoCircle()).status(info))
                        .add(" ")
                        .add(icon(bell()).status(custom))
                        .element()
                // @code-end:icon-status-colors
        ));

        addSnippet(new Snippet("icon-container", "Sizing an icon within the icon container",
                "Providing both size and iconSize properties allows the icon container to maintain a consistent size, even if the icon changes in size.",
                code("icon-container"), () ->
                // @code-start:icon-container
                div()
                        .add(icon(plusCircle()).size(xl).iconSize(sm))
                        .add(" ")
                        .add(icon(plusCircle()).size(xl).iconSize(md))
                        .add(" ")
                        .add(icon(plusCircle()).size(xl).iconSize(lg))
                        .add(" ")
                        .add(icon(plusCircle()).size(xl))
                        .element()
                // @code-end:icon-container
        ));

        addSnippet(new Snippet("icon-inline", "Inline",
                code("icon-inline"), () ->
                // @code-start:icon-inline
                div()
                        .add(textContent()
                                .add(h(1)
                                        .add("Heading ")
                                        .add(icon(plusCircle()).inline()))
                                .add(p().text(LoremIpsum.paragraph()))
                                .add(h(2)
                                        .add("Second level ")
                                        .add(icon(plusCircle()).inline()))
                                .add(p()
                                        .add(icon(plusCircle()).inline())
                                        .add(" " + LoremIpsum.paragraphs(2) + " ")
                                        .add(strong()
                                                .add(LoremIpsum.words(2) + " ")
                                                .add(icon(plusCircle()).inline()))
                                        .add(" " + LoremIpsum.words(5))
                                        .add(LoremIpsum.paragraphs(2)))
                                .add(small()
                                        .add("Sometimes you need small text ")
                                        .add(icon(plusCircle()).inline()))
                                .add(div()
                                        .add("Inline with size specified: ")
                                        .add(icon(plusCircle()).size(sm).inline())
                                        .add(" small, ")
                                        .add(icon(plusCircle()).size(md).inline())
                                        .add(" medium, ")
                                        .add(icon(plusCircle()).size(lg).inline())
                                        .add(" large, ")
                                        .add(icon(plusCircle()).size(xl).inline())
                                        .add(" extra large")))
                        .element()
                // @code-end:icon-inline
        ));

        addSnippet(new Snippet("icon-in-progress", "In progress",
                code("icon-in-progress"), () -> {
            // @code-start:icon-in-progress
            Icon icon = icon(checkCircle());
            return div()
                    .add(div().css(util("mb-md"))
                            .add(checkbox("in-progress-cb", "in-progress-cb", "Toggle in progress state")
                                    .onChange((e, c, value) -> icon.progress(value))))
                    .add(icon)
                    .element();
            // @code-end:icon-in-progress
        }));

        addSnippet(new Snippet("icon-in-progress-custom", "Custom in progress icon",
                code("icon-in-progress-custom"), () -> {
            // @code-start:icon-in-progress-custom
            Icon icon = icon(checkCircle());
            return div()
                    .add(div().css(util("mb-md"))
                            .add(checkbox("in-progress-custom-cb", "in-progress-custom-cb", "Toggle in progress state")
                                    .onChange((e, c, value) -> icon.progress(value,
                                            spinner -> spinner.diameter("2em")))))
                    .add(icon)
                    .element();
            // @code-end:icon-in-progress-custom
        }));

        startApiDocs(Icon.class);
        addApiDoc(Icon.class, component);
    }
}

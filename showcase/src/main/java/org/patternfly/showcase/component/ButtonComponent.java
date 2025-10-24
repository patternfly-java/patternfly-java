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
import org.patternfly.component.button.Button;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.IconPosition.end;
import static org.patternfly.component.IconPosition.start;
import static org.patternfly.component.badge.Badge.badge;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.icon.IconSets.fas.arrowRight;
import static org.patternfly.icon.IconSets.fas.bell;
import static org.patternfly.icon.IconSets.fas.copy;
import static org.patternfly.icon.IconSets.fas.externalLinkSquareAlt;
import static org.patternfly.icon.IconSets.fas.plusCircle;
import static org.patternfly.icon.IconSets.fas.times;
import static org.patternfly.icon.IconSets.fas.upload;
import static org.patternfly.layout.flex.Flex.flex;
import static org.patternfly.layout.flex.Gap.sm;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.style.Classes.util;
import static org.patternfly.style.NotificationStatus.attention;
import static org.patternfly.style.NotificationStatus.read;
import static org.patternfly.style.NotificationStatus.unread;

@Route(value = "/components/button", title = "Button")
public class ButtonComponent extends SnippetPage {

    public ButtonComponent() {
        super(components.get("button"));

        startExamples(
                "PatternFly supports several button styling variants to be used in different scenarios as needed. Take a look at the code to see how to apply the different variants.");
        addSnippet(new Snippet("button-variant-examples", "Variant examples",
                code("button-variant-examples"), () ->
                // @code-start:button-variant-examples
                div()
                        .add(flex().columnGap(sm)
                                .add(button("Primary").primary())
                                .add(button().primary().iconAndText(externalLinkSquareAlt(), "Primary with icon", start))
                                .add(button("Secondary").secondary())
                                .add(button("Danger secondary").secondary().danger())
                                .add(button("Tertiary").tertiary())
                                .add(button("Danger").danger())
                                .add(button("Warning").warning()))
                        .add(flex().columnGap(sm).css(util("mt-lg"))
                                .add(button().iconAndText(plusCircle(), "Link").link())
                                .add(button().iconAndText(externalLinkSquareAlt(), "Link", end).link())
                                .add(button("Inline link").inline().link())
                                .add(button("Danger link").link().danger())
                                .add(button().icon(times()).plain()))
                        .add(flex().columnGap(sm).css(util("mt-lg"))
                                .add(button("Control").control())
                                .add(button().icon(copy()).control()))
                        .add(flex().columnGap(sm).css(util("mt-lg"))
                                .add(button().stateful(read).iconAndText(bell(), "Stateful read", start))
                                .add(button().stateful(unread).iconAndText(bell(), "Stateful unread", start))
                                .add(button().stateful(attention).iconAndText(bell(), "Stateful attention", start)))
                        .element()
                // @code-end:button-variant-examples
        ));

        addSnippet(new Snippet("button-disabled", "Disabled buttons",
                code("button-disabled"), () ->
                // @code-start:button-disabled
                div()
                        .add(flex().columnGap(sm)
                                .add(button("Primary disabled").primary().disabled())
                                .add(button("Secondary disabled").secondary().disabled())
                                .add(button("Danger secondary disabled").secondary().danger().disabled())
                                .add(button("Tertiary disabled").tertiary().disabled())
                                .add(button("Danger disabled").danger().disabled())
                                .add(button("Warning disabled").warning().disabled()))
                        .add(flex().columnGap(sm).css(util("mt-lg"))
                                .add(button().iconAndText(plusCircle(), "Link disabled").link().disabled())
                                .add(button("Inline link disabled").inline().link().disabled())
                                .add(button("Danger link disabled").link().danger().disabled())
                                .add(button().icon(times()).plain().disabled()))
                        .add(flex().columnGap(sm).css(util("mt-lg"))
                                .add(button("Control disabled").control().disabled())
                                .add(button().icon(copy()).control().disabled()))
                        .element()
                // @code-end:button-disabled
        ));

        addSnippet(new Snippet("button-small", "Small buttons",
                code("button-small"),
                // @code-start:button-small
                () -> flex().columnGap(sm)
                        .add(button("Primary").primary().small())
                        .add(button("Secondary").secondary().small())
                        .add(button("Danger secondary").secondary().danger().small())
                        .add(button("Tertiary").tertiary().small())
                        .add(button("Danger").danger().small())
                        .add(button("Warning").warning().small())
                        .element()
                // @code-end:button-small
        ));

        addSnippet(new Snippet("button-cta", "Call to action (CTA) buttons",
                code("button-cta"), () ->
                // @code-start:button-cta
                flex().columnGap(sm)
                        .add(button("Call to action").primary().callToAction())
                        .add(button("Call to action").secondary().callToAction())
                        .add(button("Call to action").tertiary().callToAction())
                        .add(button().iconAndText(arrowRight(), "Call to action", end).link().callToAction())
                        .element()
                // @code-end:button-cta
        ));

        addSnippet(new Snippet("button-block-level", "Block level buttons",
                code("button-block-level"), () ->
                // @code-start:button-block-level
                div()
                        .add(button("Block level button").primary().block())
                        .element()
                // @code-end:button-block-level
        ));

        addSnippet(new Snippet("button-progress", "Progress indicators",
                code("button-progress"), () ->
                // @code-start:button-progress
                div()
                        .add(flex().columnGap(sm)
                                .add(button("Click to stop loading").primary().progress(true)
                                        .onClick((event, button) -> {
                                            button.toggleProgress();
                                            if (button.inProgress()) {
                                                button.text("Click to stop loading");
                                            } else {
                                                button.text("Click to start loading");
                                            }
                                        }))
                                .add(button("Click to stop loading").secondary().progress(true)
                                        .onClick((event, button) -> {
                                            button.toggleProgress();
                                            if (button.inProgress()) {
                                                button.text("Click to stop loading");
                                            } else {
                                                button.text("Click to start loading");
                                            }
                                        })))
                        .add(flex().columnGap(sm).css(util("mt-lg"))
                                .add(button().icon(upload()).plain()
                                        .onClick((event, button) -> button.toggleProgress())))
                        .add(flex().columnGap(sm).css(util("mt-lg"))
                                .add(button("Pause loading logs").link().inline().progress(true)
                                        .onClick((event, button) -> {
                                            button.toggleProgress();
                                            if (button.inProgress()) {
                                                button.text("Pause loading logs");
                                            } else {
                                                button.text("Resume loading logs");
                                            }
                                        })))
                        .element()
                // @code-end:button-progress
        ));

        addSnippet(new Snippet("button-block-links", "Links as buttons",
                code("button-block-links"), () ->
                // @code-start:button-block-links
                flex().columnGap(sm)
                        .add(button("Link to docs", "https://www.patternfly.org/", "_blank").primary())
                        .add(button("Secondary link to docs", "https://www.patternfly.org/", "_blank").secondary())
                        .add(button("Tertiary link to docs", "https://www.patternfly.org/", "_blank").tertiary()
                                .disabled())
                        .add(button("Jump to lifecycle in developer contributions",
                                "https://www.patternfly.org/get-started/contribute/developer-contributions#lifecycle").link())
                        .element()
                // @code-end:button-block-links
        ));

        addSnippet(new Snippet("button-count", "Button with count",
                code("button-count"), () ->
                // @code-start:button-count
                div()
                        .add("Unread").add(br())
                        .add(flex().columnGap(sm).css(util("mb-sm"))
                                .add(button("Issues").primary().addBadge(badge(7).unread()))
                                .add(button("Issues").secondary().addBadge(badge(7).unread()))
                                .add(button("Issues").tertiary().addBadge(badge(7).unread()))
                                .add(button("Issues").control().addBadge(badge(7).unread()))
                                .add(button("Issues").link().addBadge(badge(7).unread())))
                        .add("Unread disabled").add(br())
                        .add(flex().columnGap(sm).css(util("mb-sm"))
                                .add(button("Issues").primary().disabled().addBadge(badge(7).unread()))
                                .add(button("Issues").secondary().disabled().addBadge(badge(7).unread()))
                                .add(button("Issues").tertiary().disabled().addBadge(badge(7).unread()))
                                .add(button("Issues").control().disabled().addBadge(badge(7).unread()))
                                .add(button("Issues").link().disabled().addBadge(badge(7).unread())))
                        .add("Read").add(br())
                        .add(flex().columnGap(sm).css(util("mb-sm"))
                                .add(button("Issues").primary().addBadge(badge(10).read()))
                                .add(button("Issues").secondary().addBadge(badge(10).read()))
                                .add(button("Issues").tertiary().addBadge(badge(10).read()))
                                .add(button("Issues").control().addBadge(badge(10).read()))
                                .add(button("Issues").link().addBadge(badge(10).read())))
                        .add("Read disabled").add(br())
                        .add(flex().columnGap(sm)
                                .add(button("Issues").primary().disabled().addBadge(badge(10).read()))
                                .add(button("Issues").secondary().disabled().addBadge(badge(10).read()))
                                .add(button("Issues").tertiary().disabled().addBadge(badge(10).read()))
                                .add(button("Issues").control().disabled().addBadge(badge(10).read()))
                                .add(button("Issues").link().disabled().addBadge(badge(10).read())))
                        .element()
                // @code-end:button-count
        ));

        startApiDocs(Button.class);
        addApiDoc(Button.class, component);
    }
}

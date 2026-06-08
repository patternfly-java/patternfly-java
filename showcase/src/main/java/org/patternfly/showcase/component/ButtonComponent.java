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
import org.patternfly.style.Classes;

import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.component.IconPosition.end;
import static org.patternfly.component.IconPosition.start;
import static org.patternfly.component.badge.Badge.badge;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.icon.IconSets.fas.arrowRight;
import static org.patternfly.icon.IconSets.fas.bell;
import static org.patternfly.icon.IconSets.fas.upload;
import static org.patternfly.icon.IconSets.rhMicrons.close;
import static org.patternfly.icon.IconSets.rhUi.addCircle;
import static org.patternfly.icon.IconSets.rhUi.copy;
import static org.patternfly.icon.IconSets.rhUi.externalLink;
import static org.patternfly.layout.flex.Flex.flex;
import static org.patternfly.layout.flex.Gap.sm;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.style.Classes.modifier;
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
                                .add(button().primary().iconAndText(externalLink(), "Primary with icon", start))
                                .add(button("Secondary").secondary())
                                .add(button("Danger secondary").secondary().danger())
                                .add(button("Tertiary").tertiary())
                                .add(button("Danger").danger())
                                .add(button("Warning").warning()))
                        .add(flex().columnGap(sm).css(util("mt-lg"))
                                .add(button().iconAndText(addCircle(), "Link").link())
                                .add(button().iconAndText(externalLink(), "Link", end).link())
                                .add(button("Inline link").inline().link())
                                .add(button("Danger link").link().danger())
                                .add(button().icon(close()).plain().ariaLabel("Action"))
                                .add(button().iconAndText(close(), "Plain with text", start).plain()))
                        .add(flex().columnGap(sm).css(util("mt-lg"))
                                .add(button("Control").control())
                                .add(button().icon(copy()).control().ariaLabel("Copy")))
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
                                .add(button().iconAndText(addCircle(), "Link disabled").link().disabled())
                                .add(button("Inline link disabled").inline().link().disabled())
                                .add(button("Danger link disabled").link().danger().disabled())
                                .add(button().icon(close()).plain().ariaLabel("Action").disabled()))
                        .add(flex().columnGap(sm).css(util("mt-lg"))
                                .add(button("Control disabled").control().disabled())
                                .add(button().icon(copy()).control().ariaLabel("Copy").disabled()))
                        .element()
                // @code-end:button-disabled
        ));

        addSnippet(new Snippet("button-small", "Small buttons",
                code("button-small"),
                // @code-start:button-small
                () -> div()
                        .add(flex().columnGap(sm)
                                .add(button("Primary").primary().small())
                                .add(button("Secondary").secondary().small())
                                .add(button("Danger secondary").secondary().danger().small())
                                .add(button("Tertiary").tertiary().small())
                                .add(button("Danger").danger().small())
                                .add(button("Warning").warning().small()))
                        .add(flex().columnGap(sm).css(util("mt-lg"))
                                .add(button("Link").link().small())
                                .add(button("Inline link").inline().link().small())
                                .add(button().icon(close()).plain().ariaLabel("Action").small()))
                        .add(flex().columnGap(sm).css(util("mt-lg"))
                                .add(button("Control").control().small())
                                .add(button().icon(copy()).control().ariaLabel("Copy").small()))
                        .element()
                // @code-end:button-small
        ));

        addSnippet(new Snippet("button-cta", "Call to action (CTA) buttons",
                code("button-cta"), () ->
                // @code-start:button-cta
                div()
                        .add(flex().columnGap(sm)
                                .add(button("Call to action").primary().callToAction())
                                .add(button("Call to action").secondary().callToAction())
                                .add(button("Call to action").tertiary().callToAction())
                                .add(button().iconAndText(arrowRight(), "Call to action", end).link()
                                        .callToAction()))
                        .add(flex().columnGap(sm).css(util("mt-lg"))
                                .add(button("Call to action").primary().callToAction().disabled())
                                .add(button("Call to action").secondary().callToAction().disabled())
                                .add(button("Call to action").tertiary().callToAction().disabled())
                                .add(button().iconAndText(arrowRight(), "Call to action", end).link()
                                        .callToAction().disabled()))
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
                                .add(button().icon(upload()).plain().ariaLabel("Upload")
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
                                .disabled().attr("tabindex", "-1"))
                        .add(button("Danger secondary link to docs", "https://www.patternfly.org/", "_blank")
                                .secondary().danger())
                        .add(button("Danger link to docs", "https://www.patternfly.org/", "_blank").link().danger())
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

        addSnippet(new Snippet("button-circle", "Circle buttons",
                code("button-circle"), () ->
                // @code-start:button-circle
                div()
                        .add(flex().columnGap(sm)
                                .add(button().icon(addCircle()).primary().circle().ariaLabel("Add"))
                                .add(button().icon(addCircle()).secondary().circle().ariaLabel("Add"))
                                .add(button().icon(addCircle()).danger().circle().ariaLabel("Add"))
                                .add(button().icon(addCircle()).link().circle().ariaLabel("Add")))
                        .add(flex().columnGap(sm).css(util("mt-lg"))
                                .add(button().primary().circle().progress(true))
                                .add(button().secondary().circle().progress(true))
                                .add(button().danger().circle().progress(true))
                                .add(button().link().circle().progress(true)))
                        .element()
                // @code-end:button-circle
        ));

        addSnippet(new Snippet("button-clicked", "Clicked buttons",
                code("button-clicked"), () ->
                // @code-start:button-clicked
                div()
                        .add(flex().columnGap(sm)
                                .add(button("Primary").primary().clicked())
                                .add(button("Secondary").secondary().clicked())
                                .add(button("Danger secondary").secondary().danger().clicked())
                                .add(button("Tertiary").tertiary().clicked())
                                .add(button("Danger").danger().clicked())
                                .add(button("Warning").warning().clicked()))
                        .add(flex().columnGap(sm).css(util("mt-lg"))
                                .add(button("Link").link().clicked())
                                .add(button("Inline link").inline().link().clicked())
                                .add(button().icon(close()).plain().ariaLabel("Action").clicked()))
                        .add(flex().columnGap(sm).css(util("mt-lg"))
                                .add(button("Control").control().clicked())
                                .add(button().icon(copy()).control().ariaLabel("Copy").clicked()))
                        .element()
                // @code-end:button-clicked
        ));

        addSnippet(new Snippet("button-aria-disabled", "Aria-disabled",
                code("button-aria-disabled"), () ->
                // @code-start:button-aria-disabled
                div()
                        .add(flex().columnGap(sm)
                                .add(button("Primary").primary().ariaDisabled())
                                .add(button("Secondary").secondary().ariaDisabled())
                                .add(button("Tertiary").tertiary().ariaDisabled())
                                .add(button("Danger").danger().ariaDisabled())
                                .add(button("Warning").warning().ariaDisabled()))
                        .add(flex().columnGap(sm).css(util("mt-lg"))
                                .add(button("Link").link().ariaDisabled())
                                .add(button("Inline link").inline().link().ariaDisabled())
                                .add(button().icon(close()).plain().ariaLabel("Action").ariaDisabled()))
                        .add(flex().columnGap(sm).css(util("mt-lg"))
                                .add(button("Control").control().ariaDisabled()))
                        .element()
                // @code-end:button-aria-disabled
        ));

        addSnippet(new Snippet("button-inline-span", "Inline link as span",
                code("button-inline-span"), () ->
                // @code-start:button-inline-span
                div()
                        .add("Lorem ipsum dolor sit amet, consectetur adipiscing elit. ")
                        .add(span().css(Classes.component(Classes.button),
                                        modifier(Classes.inline), modifier(Classes.link))
                                .attr("role", "button")
                                .attr("type", "button")
                                .attr("tabindex", "0")
                                .add(span().css(Classes.component(Classes.button, Classes.text))
                                        .text("This is long button text that needs to be a span so that it will wrap inline with the text around it.")))
                        .add(" Sed hendrerit nisi in cursus maximus.")
                        .element()
                // @code-end:button-inline-span
        ));

        addSnippet(new Snippet("button-types", "Types",
                code("button-types"), () ->
                // @code-start:button-types
                flex().columnGap(sm)
                        .add(button("Submit").primary().attr("type", "submit"))
                        .add(button("Reset").secondary().attr("type", "reset"))
                        .add(button("Default").tertiary().attr("type", "button"))
                        .element()
                // @code-end:button-types
        ));

        addSnippet(new Snippet("button-stateful", "Stateful",
                code("button-stateful"), () ->
                // @code-start:button-stateful
                div()
                        .add("Read").add(br())
                        .add(flex().columnGap(sm).css(util("mb-sm"))
                                .add(button().stateful(read).iconAndText(bell(), "10 items", start))
                                .add(button().stateful(read).clicked()
                                        .iconAndText(bell(), "10 items", start)))
                        .add("Unread").add(br())
                        .add(flex().columnGap(sm).css(util("mb-sm"))
                                .add(button().stateful(unread).iconAndText(bell(), "10 items", start))
                                .add(button().stateful(unread).clicked()
                                        .iconAndText(bell(), "10 items", start)))
                        .add("Attention").add(br())
                        .add(flex().columnGap(sm).css(util("mb-sm"))
                                .add(button().stateful(attention).iconAndText(bell(), "10 items", start))
                                .add(button().stateful(attention).clicked()
                                        .iconAndText(bell(), "10 items", start)))
                        .add("Plain").add(br())
                        .add(flex().columnGap(sm).css(util("mb-sm"))
                                .add(button().stateful(read).plain()
                                        .iconAndText(bell(), "10 items", start))
                                .add(button().stateful(read).plain().clicked()
                                        .iconAndText(bell(), "10 items", start))
                                .add(button().stateful(unread).plain()
                                        .iconAndText(bell(), "10 items", start))
                                .add(button().stateful(unread).plain().clicked()
                                        .iconAndText(bell(), "10 items", start))
                                .add(button().stateful(attention).plain()
                                        .iconAndText(bell(), "10 items", start))
                                .add(button().stateful(attention).plain().clicked()
                                        .iconAndText(bell(), "10 items", start)))
                        .add("Plain with count").add(br())
                        .add(flex().columnGap(sm)
                                .add(button().stateful(read).plain()
                                        .iconAndText(bell(), "10 items", start)
                                        .addBadge(badge(10).read()))
                                .add(button().stateful(read).plain().clicked()
                                        .iconAndText(bell(), "10 items", start)
                                        .addBadge(badge(10).read()))
                                .add(button().stateful(unread).plain()
                                        .iconAndText(bell(), "10 items", start)
                                        .addBadge(badge(10).unread()))
                                .add(button().stateful(unread).plain().clicked()
                                        .iconAndText(bell(), "10 items", start)
                                        .addBadge(badge(10).unread()))
                                .add(button().stateful(attention).plain()
                                        .iconAndText(bell(), "10 items", start)
                                        .addBadge(badge(10).unread()))
                                .add(button().stateful(attention).plain().clicked()
                                        .iconAndText(bell(), "10 items", start)
                                        .addBadge(badge(10).unread())))
                        .element()
                // @code-end:button-stateful
        ));

        addSnippet(new Snippet("button-no-padding", "Plain with no padding",
                code("button-no-padding"), () ->
                // @code-start:button-no-padding
                flex().columnGap(sm)
                        .add(button().icon(close()).plain().ariaLabel("More info").noPadding())
                        .element()
                // @code-end:button-no-padding
        ));

        addSnippet(new Snippet("button-favorite", "Favorite",
                code("button-favorite"), () ->
                // @code-start:button-favorite
                flex().columnGap(sm)
                        .add(button().favorite().ariaLabel("Not starred"))
                        .add(button().favorite().favorited(true).ariaLabel("Starred"))
                        .element()
                // @code-end:button-favorite
        ));

        addSnippet(new Snippet("button-settings", "Settings",
                code("button-settings"), () ->
                // @code-start:button-settings
                flex().columnGap(sm)
                        .add(button().settings().ariaLabel("Settings"))
                        .element()
                // @code-end:button-settings
        ));

        addSnippet(new Snippet("button-hamburger", "Hamburger",
                code("button-hamburger"), () ->
                // @code-start:button-hamburger
                flex().columnGap(sm)
                        .add(button().hamburger().ariaLabel("Menu"))
                        .element()
                // @code-end:button-hamburger
        ));

        startApiDocs(Button.class);
        addApiDoc(Button.class, component);
    }
}

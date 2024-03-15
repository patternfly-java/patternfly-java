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
import org.patternfly.component.banner.Banner;
import org.patternfly.core.Aria;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.banner.Banner.banner;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.icon.IconSets.far.checkCircle;
import static org.patternfly.icon.IconSets.fas.exclamationCircle;
import static org.patternfly.icon.IconSets.fas.exclamationTriangle;
import static org.patternfly.icon.IconSets.fas.infoCircle;
import static org.patternfly.icon.IconSets.patternfly.bell;
import static org.patternfly.layout.flex.Flex.flex;
import static org.patternfly.layout.flex.FlexItem.flexItem;
import static org.patternfly.layout.flex.SpaceItems.sm;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoints.breakpoints;
import static org.patternfly.style.Classes.disabled;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Color.blue;
import static org.patternfly.style.Color.gold;
import static org.patternfly.style.Color.green;
import static org.patternfly.style.Color.red;

@Route(value = "/components/banner", title = "Banner")
public class BannerComponent extends SnippetPage {

    public BannerComponent() {
        super(components.get("banner"));

        startExamples();
        addSnippet(new Snippet("banner-basic", "Basic",
                "Banners can be styled with one of 5 different colors. A basic banner should only be used when the banner color does not represent status or severity.",
                code("banner-basic"), () ->
                // @code-start:banner-basic
                div()
                        .add(banner("Default banner"))
                        .add(br())
                        .add(banner("Blue banner", blue))
                        .add(br())
                        .add(banner("Red banner", red))
                        .add(br())
                        .add(banner("Green banner", green))
                        .add(br())
                        .add(banner("Gold banner", gold))
                        .element()
                // @code-end:banner-basic
        ));

        addSnippet(new Snippet("banner-links", "Banner with links",
                code("banner-links"), () ->
                // @code-start:banner-links
                div()
                        .add(banner()
                                .add("Default banner with a ")
                                .add(a("https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples")
                                        .textContent("link")))
                        .add(br())
                        .add(banner()
                                .add("Default banner with a ")
                                .add(a("#")
                                        .css(modifier(disabled))
                                        .attr(role, "link")
                                        .aria(Aria.disabled, true)
                                        .textContent("disabled link")))
                        .add(br())
                        .add(banner(blue)
                                .add("Blue banner with an ")
                                .add(button("inline link button")
                                        .link().inline()))
                        .add(br())
                        .add(banner(gold)
                                .add("Gold banner with an ")
                                .add(button("inline link button (anchor)",
                                        "https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples")
                                        .link().inline()))
                        .add(br())
                        .add(banner(red)
                                .add("Red banner with a ")
                                .add(button("disabled inline link button")
                                        .link().inline().disabled()))
                        .element()
                // @code-end:banner-links
        ));

        addSnippet(new Snippet("banner-status", "Status",
                "When a banner is used to convey status, it is advised to pass in an icon inside the banner to convey the status in a way besides just color. The screenReader() method should also be passed in to convey the status/severity of the banner to users of certain assistive technologies such as screen readers.",
                code("banner-status"), () ->
                // @code-start:banner-status
                div()
                        .add(banner().screenReader("Default banner")
                                .add(flex().spaceItems(breakpoints(default_, sm))
                                        .addItem(flexItem().add(bell))
                                        .addItem(flexItem().textContent("Default banner"))))
                        .add(br())
                        .add(banner(blue).screenReader("Info banner")
                                .add(flex().spaceItems(breakpoints(default_, sm))
                                        .addItem(flexItem().add(infoCircle))
                                        .addItem(flexItem().textContent("Info banner"))))
                        .add(br())
                        .add(banner(red).screenReader("Danger banner")
                                .add(flex().spaceItems(breakpoints(default_, sm))
                                        .addItem(flexItem().add(exclamationCircle))
                                        .addItem(flexItem().textContent("Danger banner"))))
                        .add(br())
                        .add(banner(green).screenReader("Success banner")
                                .add(flex().spaceItems(breakpoints(default_, sm))
                                        .addItem(flexItem().add(checkCircle))
                                        .addItem(flexItem().textContent("Success banner"))))
                        .add(br())
                        .add(banner(gold).screenReader("Warning banner")
                                .add(flex().spaceItems(breakpoints(default_, sm))
                                        .addItem(flexItem().add(exclamationTriangle))
                                        .addItem(flexItem().textContent("Warning"))))
                        .element()
                // @code-end:banner-status
        ));

        startApiDocs(Banner.class);
        addApiDoc(Banner.class, component);
    }
}

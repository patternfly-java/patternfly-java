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
import static org.patternfly.component.Severity.custom;
import static org.patternfly.component.Severity.danger;
import static org.patternfly.component.Severity.info;
import static org.patternfly.component.Severity.success;
import static org.patternfly.component.Severity.warning;
import static org.patternfly.component.banner.Banner.banner;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.core.Attributes.role;
import static org.patternfly.core.Roles.link;
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
import static org.patternfly.style.Color.green;
import static org.patternfly.style.Color.orange;
import static org.patternfly.style.Color.orangered;
import static org.patternfly.style.Color.purple;
import static org.patternfly.style.Color.red;
import static org.patternfly.style.Color.teal;
import static org.patternfly.style.Color.yellow;

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
                        .add(banner("Red banner", red))
                        .add(br())
                        .add(banner("Red banner", orangered))
                        .add(br())
                        .add(banner("Red banner", orange))
                        .add(br())
                        .add(banner("Red banner", yellow))
                        .add(br())
                        .add(banner("Blue banner", green))
                        .add(br())
                        .add(banner("Blue banner", teal))
                        .add(br())
                        .add(banner("Blue banner", blue))
                        .add(br())
                        .add(banner("Gold banner", purple))
                        .element()
                // @code-end:banner-basic
        ));

        addSnippet(new Snippet("banner-links", "Banner with links",
                code("banner-links"), () ->
                // @code-start:banner-links
                div()
                        .add(banner()
                                .text("Default banner with a ")
                                .add(a("https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples")
                                        .text("link")))
                        .add(br())
                        .add(banner()
                                .text("Default banner with a ")
                                .add(a("#")
                                        .css(modifier(disabled))
                                        .attr(role, link)
                                        .aria(Aria.disabled, true)
                                        .text("disabled link")))
                        .add(br())
                        .add(banner(blue)
                                .text("Blue banner with an ")
                                .add(button("inline link button")
                                        .link().inline()))
                        .add(br())
                        .add(banner(yellow)
                                .text("Gold banner with an ")
                                .add(button("inline link button (anchor)",
                                        "https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples")
                                        .link().inline()))
                        .add(br())
                        .add(banner(red)
                                .text("Red banner with a ")
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
                        .add(banner().status(success.status).screenReader("Success banner")
                                .add(flex().spaceItems(breakpoints(default_, sm))
                                        .addItem(flexItem().add(success.icon.get()))
                                        .addItem(flexItem().text("Success banner"))))
                        .add(br())
                        .add(banner().status(warning.status).screenReader("Warning banner")
                                .add(flex().spaceItems(breakpoints(default_, sm))
                                        .addItem(flexItem().add(warning.icon.get()))
                                        .addItem(flexItem().text("Warning"))))
                        .add(br())
                        .add(banner().status(danger.status).screenReader("Danger banner")
                                .add(flex().spaceItems(breakpoints(default_, sm))
                                        .addItem(flexItem().add(danger.icon.get()))
                                        .addItem(flexItem().text("Danger banner"))))
                        .add(br())
                        .add(banner().status(info.status).screenReader("Info banner")
                                .add(flex().spaceItems(breakpoints(default_, sm))
                                        .addItem(flexItem().add(info.icon.get()))
                                        .addItem(flexItem().text("Info banner"))))
                        .add(br())
                        .add(banner().status(custom.status).screenReader("Custom banner")
                                .add(flex().spaceItems(breakpoints(default_, sm))
                                        .addItem(flexItem().add(custom.icon.get()))
                                        .addItem(flexItem().text("Info banner"))))
                        .element()
                // @code-end:banner-status
        ));

        startApiDocs(Banner.class);
        addApiDoc(Banner.class, component);
    }
}

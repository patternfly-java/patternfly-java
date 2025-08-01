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
import org.patternfly.component.switch_.Switch;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.switch_.Switch.switch_;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/switch", title = "Switch")
public class SwitchComponent extends SnippetPage {

    public SwitchComponent() {
        super(components.get("switch"));

        startExamples();
        addSnippet(new Snippet("switch-basic", "Basic",
                code("switch-basic"), () ->
                // @code-start:switch-basic
                div()
                        .add(switch_("switch-basic-0", "switch-basic-0", true)
                                .label("Togglable option for basic example"))
                        .element()
                // @code-end:switch-basic
        ));

        addSnippet(new Snippet("switch-reversed", "Reversed layout",
                code("switch-reversed"), () ->
                // @code-start:switch-reversed
                div()
                        .add(switch_("switch-reversed-0", "switch-reversed-0", true)
                                .reversed()
                                .label("Togglable option for reversed example"))
                        .element()
                // @code-end:switch-reversed
        ));

        addSnippet(new Snippet("switch-no-label", "Without label",
                code("switch-no-label"), () ->
                // @code-start:switch-no-label
                div()
                        .add(switch_("switch-no-label-0", "switch-no-label-0", true)
                                .checkIcon()
                                .ariaLabel("Togglable option for no visible label example"))
                        .element()
                // @code-end:switch-no-label
        ));

        addSnippet(new Snippet("switch-checked-label", "Checked with label",
                code("switch-checked-label"), () ->
                // @code-start:switch-checked-label
                div()
                        .add(switch_("switch-checked-label-0", "switch-checked-label-0", true)
                                .checkIcon()
                                .label("Togglable option for check icon example"))
                        .element()
                // @code-end:switch-checked-label
        ));

        addSnippet(new Snippet("switch-disabled", "Disabled",
                code("switch-disabled"), () ->
                // @code-start:switch-disabled
                div()
                        .add(switch_("switch-disabled-0", "switch-disabled-0", true)
                                .disabled()
                                .label("Togglable option for disabled checked example"))
                        .add(br())
                        .add(switch_("switch-disabled-1", "switch-disabled-1", false)
                                .disabled()
                                .label("Togglable option for disabled unchecked example"))
                        .add(br())
                        .add(switch_("switch-disabled-2", "switch-disabled-2", true)
                                .disabled()
                                .checkIcon()
                                .ariaLabel("Togglable option for checked with no visible label example"))
                        .add(br())
                        .add(switch_("switch-disabled-3", "switch-disabled-3", false)
                                .disabled()
                                .checkIcon()
                                .ariaLabel("Togglable option for unchecked with no visible label example"))
                        .element()
                // @code-end:switch-disabled
        ));

        startApiDocs(Switch.class);
        addApiDoc(Switch.class, component);
    }
}

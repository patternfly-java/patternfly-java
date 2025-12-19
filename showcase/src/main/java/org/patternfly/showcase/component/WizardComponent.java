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
import org.patternfly.component.wizard.Wizard;
import org.patternfly.component.wizard.WizardStep;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.wizard.Wizard.wizard;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/wizard", title = "Wizard")
public class WizardComponent extends SnippetPage {

    public WizardComponent() {
        super(components.get("wizard"));

        startExamples();
        addSnippet(new Snippet("wizard-basic", "Basic",
                code("wizard-basic"), () ->
                // @code-start:wizard-basic
                div()
                        .add(wizard())
                        .element()
                // @code-end:wizard-basic
        ));

        startApiDocs(Wizard.class);
        addApiDoc(Wizard.class, component);
        addApiDoc(WizardStep.class, subcomponent);
    }
}

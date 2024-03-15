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
import org.patternfly.component.truncate.Truncate;
import org.patternfly.component.truncate.TruncatePosition;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.truncate.Truncate.truncate;
import static org.patternfly.component.truncate.TruncatePosition.middle;
import static org.patternfly.component.truncate.TruncatePosition.start;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.modifier;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/truncate", title = "Truncate")
public class TruncateComponent extends SnippetPage {

    public TruncateComponent() {
        super(components.get("truncate"));

        startExamples();
        addSnippet(new Snippet("truncate-default", "Default",
                code("truncate-default"), () ->
                // @code-start:truncate-default
                div().css("truncate-example-resize")
                        .add(truncate(LoremIpsum.words()))
                        .element()
                // @code-end:truncate-default
        ));

        addSnippet(new Snippet("truncate-middle", "Middle",
                code("truncate-middle"), () ->
                // @code-start:truncate-middle
                div().css("truncate-example-resize")
                        .add(truncate("redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip", middle))
                        .element()
                // @code-end:truncate-middle
        ));

        addSnippet(new Snippet("truncate-start", "Start",
                code("truncate-start"), () ->
                // @code-start:truncate-start
                div().css("truncate-example-resize")
                        .add(truncate(LoremIpsum.words(), start))
                        .element()
                // @code-end:truncate-start
        ));

        startApiDocs(Truncate.class);
        addApiDoc(Truncate.class, component);
        addApiDoc(TruncatePosition.class, modifier);
    }
}

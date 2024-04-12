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
package org.patternfly.showcase;

import org.gwtproject.safehtml.shared.SafeHtmlBuilder;
import org.jboss.elemento.Attachable;
import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.IsElement;
import org.jboss.elemento.router.Page;

import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static java.util.Collections.singletonList;
import static org.jboss.elemento.By.AttributeOperator.STARTS_WITH;
import static org.patternfly.component.page.PageMainSection.pageMainSection;
import static org.patternfly.component.text.TextContent.textContent;
import static org.patternfly.showcase.Documentation.doc;
import static org.patternfly.style.Brightness.light;

public abstract class DocumentationPage implements Page, IsElement<HTMLElement>, Attachable {

    private final HTMLElement root;
    private By apiDocLinks;

    DocumentationPage(String doc) {
        this.root = pageMainSection()
                .background(light)
                .add(textContent().innerHtml(new SafeHtmlBuilder().appendHtmlConstant(doc(doc)).toSafeHtml()))
                .element();
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        // post process API doc links
        apiDocLinks = By.element("a").and(By.attribute("href", STARTS_WITH, "https://patternfly-java.github.io/apidocs/"));
        for (HTMLElement element : Elements.findAll(root, apiDocLinks)) {
            // exclude the links from being handled by the place manager!
            element.setAttribute("target", ApiDoc.API_DOC_TARGET);
        }
        Highlight.highlightAll();
    }

    @Override
    public HTMLElement element() {
        return root;
    }

    @Override
    public Iterable<HTMLElement> elements() {
        return singletonList(root);
    }
}

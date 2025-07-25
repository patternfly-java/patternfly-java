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
import org.jboss.elemento.IsElement;
import org.jboss.elemento.router.LoadedData;
import org.jboss.elemento.router.Page;
import org.jboss.elemento.router.Parameter;
import org.jboss.elemento.router.Place;

import elemental2.dom.HTMLElement;
import elemental2.dom.MutationRecord;

import static java.util.Collections.singletonList;
import static org.jboss.elemento.By.AttributeOperator.STARTS_WITH;
import static org.jboss.elemento.Elements.querySelectorAll;
import static org.patternfly.component.content.Content.content;
import static org.patternfly.component.page.PageMainSection.pageMainSection;
import static org.patternfly.showcase.ApiDoc.API_DOC_BASE;
import static org.patternfly.showcase.ApiDoc.API_DOC_TARGET;
import static org.patternfly.showcase.Documentation.doc;
import static org.patternfly.style.Brightness.light;
import static org.patternfly.style.Classes.component;
import static org.patternfly.style.Classes.title;
import static org.patternfly.style.Size._2xl;
import static org.patternfly.style.Size._4xl;
import static org.patternfly.style.Size.lg;

public abstract class DocumentationPage implements Page, IsElement<HTMLElement>, Attachable {

    private final HTMLElement root;

    DocumentationPage(String doc) {
        this.root = pageMainSection().css("markdown")
                .add(content().html(new SafeHtmlBuilder().appendHtmlConstant(doc(doc)).toSafeHtml()))
                .element();
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        // post process API doc links
        for (HTMLElement element : querySelectorAll(root,
                By.element("a").and(By.attribute("href", STARTS_WITH, API_DOC_BASE)))) {
            // exclude the links from being handled by the place manager!
            element.setAttribute("target", API_DOC_TARGET);
        }
        // adjust headers to match the custom pages
        for (HTMLElement element : querySelectorAll(root, By.element("h1"))) {
            element.classList.add(component(title), _4xl.modifier());
        }
        for (HTMLElement element : querySelectorAll(root, By.element("h2"))) {
            element.classList.add(component(title), _2xl.modifier());
        }
        for (HTMLElement element : querySelectorAll(root, By.element("h3"))) {
            element.classList.add(component(title), lg.modifier());
        }
        Highlight.highlightAll();
    }

    @Override
    public HTMLElement element() {
        return root;
    }

    @Override
    public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
        return singletonList(root);
    }
}

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
package org.patternfly.showcase.markdown;

import org.gwtproject.safehtml.shared.SafeHtmlUtils;
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
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.patternfly.component.content.Content.content;
import static org.patternfly.component.page.PageSection.pageSection;
import static org.patternfly.showcase.ApiDoc.API_DOC_BASE;
import static org.patternfly.showcase.ApiDoc.API_DOC_TARGET;

public class MarkdownPage implements Page, IsElement<HTMLElement>, Attachable {

    private final HTMLElement root;

    MarkdownPage() {
        this.root = pageSection().css("markdown").element();
        Attachable.register(this, this);
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        for (HTMLElement element : querySelectorAll(root,
                By.element("a").and(By.attribute("href", STARTS_WITH, API_DOC_BASE)))) {
            element.setAttribute("target", API_DOC_TARGET);
        }
    }

    @Override
    public HTMLElement element() {
        return root;
    }

    @Override
    public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
        MarkdownData md = data.get();
        removeChildrenFrom(root);
        root.appendChild(
                content().editorial().html(SafeHtmlUtils.fromSafeConstant(md.html)).element());
        return singletonList(root);
    }
}

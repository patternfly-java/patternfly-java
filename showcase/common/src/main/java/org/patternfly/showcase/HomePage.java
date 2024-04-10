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

import org.jboss.elemento.router.Page;
import org.jboss.elemento.router.Route;

import elemental2.dom.HTMLElement;

import static java.util.Collections.singletonList;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.page.PageMainSection.pageMainSection;
import static org.patternfly.component.text.TextContent.textContent;
import static org.patternfly.component.title.Title.title;
import static org.patternfly.style.Brightness.light;

@Route("/")
public class HomePage implements Page {

    @Override
    public Iterable<HTMLElement> elements() {
        return singletonList(pageMainSection()
                .background(light)
                .add(textContent().add(title(1, "PatternFly - Java"))
                        .add(p()
                                .add(a("https://github.com/patternfly-java/patternfly-java", "_blank")
                                        .textContent("PatternFly Java"))
                                .add(" is a Java implementation of ")
                                .add(a("https://www.patternfly.org/", "_blank")
                                        .textContent("PatternFly"))
                                .add(". Its goal is to provide an easy-to-use, elegant, and efficient API to build complex web applications with PatternFly in Java. PatternFly Java integrates with and builds upon Elemento's ")
                                .add(a("https://github.com/hal/elemento", "_blank")
                                        .textContent("builder API"))
                                .add(". It works with both GWT and J2CL.")))
                .element());
    }
}

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
package org.patternfly.components.page;

import org.jboss.elemento.HtmlContent;
import org.patternfly.components.BaseComponent;
import org.patternfly.components.ComponentType;

import elemental2.dom.HTMLDivElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.components.Button.link;
import static org.patternfly.resources.Texts.skipToContent;

/**
 * A skip to content component allows screen reader and keyboard users to bypass navigation rather than tabbing through it.
 *
 * @see <a href=
 *      "https://www.patternfly.org/components/skip-to-content/html">https://www.patternfly.org/components/skip-to-content/html</a>
 */
public class SkipToContent extends BaseComponent<HTMLDivElement, SkipToContent>
        implements HtmlContent<HTMLDivElement, SkipToContent> {

    public static SkipToContent skipToContent(String mainId) {
        return new SkipToContent(mainId);
    }

    SkipToContent(String mainId) {
        super(div().add(link(skipToContent, "#" + mainId).primary()).element(),
                ComponentType.SkipToContent);
    }

    @Override
    public SkipToContent that() {
        return null;
    }
}

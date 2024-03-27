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
import org.patternfly.component.chip.Chip;
import org.patternfly.component.chip.ChipGroup;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.badge.Badge.badge;
import static org.patternfly.component.chip.Chip.chip;
import static org.patternfly.component.chip.ChipGroup.chipGroup;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/chip", title = "Chip")
public class ChipComponent extends SnippetPage {

    public ChipComponent() {
        super(components.get("chip"));

        startExamples();
        addSnippet(new Snippet("chip-variants", "Chip variants",
                "Chips can be removable or read-only. The Overflow chip is a special chip that is used to expand or collapse the content of a chip group.",
                code("chip-variants"), () ->
                // @code-start:chip-variants
                div()
                        .add(chip("Chip 1"))
                        .add(br())
                        .add(br())
                        .add(chip("Really long chip that goes on and on"))
                        .add(br())
                        .add(br())
                        .add(chip("Chip").addBadge(badge(7).read()))
                        .add(br())
                        .add(br())
                        .add(chip("Read-only chip").readonly())
                        .element()
                // @code-end:chip-variants
        ));

        addSnippet(new Snippet("chip-group", "Chip group",
                code("chip-group"), () ->
                // @code-start:chip-group
                div()
                        .add(chipGroup()
                                .addChip(chip("Chip one"))
                                .addChip(chip("Really long chip that goes on and on"))
                                .addChip(chip("Chip three"))
                                .addChip(chip("Chip four"))
                                .addChip(chip("Chip five")))
                        .element()
                // @code-end:chip-group
        ));

        addSnippet(new Snippet("chip-group-category", "Chip group with category",
                code("chip-group-category"), () ->
                // @code-start:chip-group-category
                div()
                        .add(chipGroup("Category one")
                                .addChip(chip("Chip one"))
                                .addChip(chip("Really long chip that goes on and on"))
                                .addChip(chip("Chip three"))
                                .addChip(chip("Chip four"))
                                .addChip(chip("Chip five")))
                        .element()
                // @code-end:chip-group-category
        ));

        addSnippet(new Snippet("chip-group-removable-category", "Chip group with removable category",
                code("chip-group-removable-category"), () ->
                // @code-start:chip-group-removable-category
                div()
                        .add(chipGroup("Category one")
                                .closable()
                                .addChip(chip("Chip one"))
                                .addChip(chip("Chip two"))
                                .addChip(chip("Chip three")))
                        .add(br())
                        .add(br())
                        .add(chipGroup("Category two has a very long name")
                                .closable()
                                .addChip(chip("Chip one"))
                                .addChip(chip("Chip two"))
                                .addChip(chip("Chip three"))
                                .addChip(chip("Chip four")))
                        .element()
                // @code-end:chip-group-removable-category
        ));

        startApiDocs(Chip.class);
        addApiDoc(Chip.class, component);
        addApiDoc(ChipGroup.class, component);
    }
}

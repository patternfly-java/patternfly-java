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
import org.patternfly.component.button.Button;
import org.patternfly.component.togglegroup.ToggleGroup;
import org.patternfly.component.togglegroup.ToggleGroupItem;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static java.util.stream.Collectors.toList;
import static java.util.stream.IntStream.range;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Id.build;
import static org.patternfly.component.SelectionMode.multi;
import static org.patternfly.component.SelectionMode.single;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.togglegroup.ToggleGroup.toggleGroup;
import static org.patternfly.component.togglegroup.ToggleGroupItem.toggleGroupItem;
import static org.patternfly.icon.IconSets.fas.copy;
import static org.patternfly.icon.IconSets.fas.shareSquare;
import static org.patternfly.icon.IconSets.fas.undo;
import static org.patternfly.layout.stack.Stack.stack;
import static org.patternfly.layout.stack.StackItem.stackItem;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/toggle-group", title = "Toggle group")
public class ToggleGroupComponent extends SnippetPage {

    public ToggleGroupComponent() {
        super(components.get("toggle-group"));

        startExamples();
        addSnippet(new Snippet("toggle-group-multiple", "Default with multiple selectable",
                code("toggle-group-multiple"), () -> {
            // @code-start:toggle-group-multiple
            Button disableAll = button("Disable all").primary();
            ToggleGroup toggleGroup = toggleGroup(multi);

            return div()
                    .add(stack().gutter()
                            .addItem(stackItem()
                                    .add(disableAll.onClick((event, button) -> {
                                        toggleGroup.disabled(!toggleGroup.isDisabled());
                                        button.text(toggleGroup.isDisabled() ? "Enable back" : "Disable all");
                                    })))
                            .addItem(stackItem()
                                    .add(toggleGroup
                                            .addItem(toggleGroupItem("toggle-group-multiple-0", "Option 1"))
                                            .addItem(toggleGroupItem("toggle-group-multiple-1", "Option 2"))
                                            .addItem(toggleGroupItem("toggle-group-multiple-2", "Option 3").disabled()))))
                    .element();
            // @code-end:toggle-group-multiple
        }));

        addSnippet(new Snippet("toggle-group-single", "Default with single selectable",
                code("toggle-group-single"), () ->
                // @code-start:toggle-group-single
                div()
                        .add(toggleGroup(single)
                                .addItems(range(1, 4).boxed().collect(toList()), index ->
                                        toggleGroupItem(build("toggle-group-single", String.valueOf(index)),
                                                "Option " + index)))
                        .element()
                // @code-end:toggle-group-single
        ));

        addSnippet(new Snippet("toggle-group-icon", "With icon",
                code("toggle-group-icon"), () ->
                // @code-start:toggle-group-icon
                div()
                        .add(toggleGroup(multi)
                                .addItem(toggleGroupItem("toggle-group-icon-0").icon(copy))
                                .addItem(toggleGroupItem("toggle-group-icon-1").icon(undo))
                                .addItem(toggleGroupItem("toggle-group-icon-2").icon(shareSquare)))
                        .element()
                // @code-end:toggle-group-icon
        ));

        addSnippet(new Snippet("toggle-group-text-icon", "With icon",
                code("toggle-group-text-icon"), () ->
                // @code-start:toggle-group-text-icon
                div()
                        .add(toggleGroup(multi)
                                .addItem(toggleGroupItem("toggle-group-text-icon-0", "Copy").icon(copy))
                                .addItem(toggleGroupItem("toggle-group-text-icon-1", "Undo").icon(undo))
                                .addItem(toggleGroupItem("toggle-group-text-icon-2", "Share").icon(shareSquare)))
                        .element()
                // @code-end:toggle-group-text-icon
        ));

        addSnippet(new Snippet("toggle-group-compact", "Compact variant",
                code("toggle-group-compact"), () ->
                // @code-start:toggle-group-compact
                div()
                        .add(toggleGroup(multi).compact()
                                .addItem(toggleGroupItem("toggle-group-compact-0", "Option 1"))
                                .addItem(toggleGroupItem("toggle-group-compact-1", "Option 2"))
                                .addItem(toggleGroupItem("toggle-group-compact-2", "Option 3").disabled()))
                        .element()
                // @code-end:toggle-group-compact
        ));

        startApiDocs(ToggleGroup.class);
        addApiDoc(ToggleGroup.class, component);
        addApiDoc(ToggleGroupItem.class, subcomponent);
    }
}

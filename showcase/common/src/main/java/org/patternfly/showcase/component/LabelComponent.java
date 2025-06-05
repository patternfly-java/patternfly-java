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

import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.router.Route;
import org.patternfly.component.Severity;
import org.patternfly.component.label.Label;
import org.patternfly.component.label.LabelEditCancelHandler;
import org.patternfly.component.label.LabelEditCompleteHandler;
import org.patternfly.component.label.LabelGroup;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;
import org.patternfly.style.Color;

import elemental2.dom.HTMLDivElement;

import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.strong;
import static org.patternfly.component.label.Label.label;
import static org.patternfly.component.label.LabelGroup.labelGroup;
import static org.patternfly.icon.IconSets.fas.cube;
import static org.patternfly.icon.IconSets.fas.infoCircle;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.handler;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.style.Color.blue;
import static org.patternfly.style.Color.green;
import static org.patternfly.style.Color.orange;
import static org.patternfly.style.Color.purple;
import static org.patternfly.style.Color.red;

@Route(value = "/components/label", title = "Label")
public class LabelComponent extends SnippetPage {

    public LabelComponent() {
        super(components.get("label"));

        startExamples();
        addSnippet(new Snippet("label-filled", "Filled labels",
                code("label-filled"), () -> {
            // @code-start:label-filled
            HTMLContainerBuilder<HTMLDivElement> div = div().id("ws-react-c-label-filled-labels");
            div.add(strong().text("Non-status")).add(br()).add(br());
            for (Color color : Color.values()) {
                String name = color.name().substring(0, 1).toUpperCase() + color.name().substring(1);
                div.add(label(name, color).filled());
                div.add(label(name + " icon", color).filled().icon(cube()));
                div.add(label(name + " removable", color).filled().closable());
                div.add(label(name + " icon removable", color).filled().icon(cube()).closable());
                div.add(label(name + " link", color).filled().href("#"));
                div.add(label(name + " link removable", color).filled().href("#").closable());
                div.add(label(name + " clickable", color).filled().uniqueId()
                        .clickable((e, l) -> console.log("Label " + l.element().id + " clicked")));
                div.add(label(name + " clickable removable", color).filled().uniqueId().closable()
                        .clickable((e, l) -> console.log("Label " + l.element().id + " clicked")));
                div.add(label(name + " label with icon that overflows", color).filled().closable()
                        .textMaxWidth("16ch"));
                div.add(label(name + " link removable (disabled)", color).filled().disabled().href("#").closable());
                div.add(label(name + " clickable removable (disabled)", color).filled().disabled().clickable().closable());
                div.add(br()).add(br());
            }
            div.add(div().style("width", "250px")
                    .add(label("Label that overflows its parent, but has no textMaxWidth on its own")));

            div.add(br()).add(strong().text("Status")).add(br()).add(br());
            for (Severity severity : Severity.values()) {
                String name = severity.status.name().substring(0, 1).toUpperCase() + severity.status.name().substring(1);
                div.add(label(name).status(severity).filled());
                div.add(label(name + " removable").status(severity).filled().closable());
                div.add(label(name + " link").status(severity).filled().href("#"));
                div.add(label(name + " link removable").status(severity).filled().href("#").closable());
                div.add(label(name + " clickable").status(severity).filled().uniqueId()
                        .clickable((e, l) -> console.log("Label " + l.element().id + " clicked")));
                div.add(label(name + " clickable removable").status(severity).filled().uniqueId().closable()
                        .clickable((e, l) -> console.log("Label " + l.element().id + " clicked")));
                div.add(label(name + " label with icon that overflows").status(severity).filled().closable()
                        .textMaxWidth("16ch"));
                div.add(br()).add(br());
            }
            return div.element();
            // @code-end:label-filled
        }));

        addSnippet(new Snippet("label-outlined", "Filled labels",
                code("label-outlined"), () -> {
            // @code-start:label-outlined
            HTMLContainerBuilder<HTMLDivElement> div = div().id("ws-react-c-label-outlined-labels");
            div.add(strong().text("Non-status")).add(br()).add(br());
            for (Color color : Color.values()) {
                String name = color.name().substring(0, 1).toUpperCase() + color.name().substring(1);
                div.add(label(name, color).outline());
                div.add(label(name + " icon", color).outline().icon(cube()));
                div.add(label(name + " removable", color).outline().closable());
                div.add(label(name + " icon removable", color).outline().icon(cube()).closable());
                div.add(label(name + " link", color).outline().href("#"));
                div.add(label(name + " link removable", color).outline().href("#").closable());
                div.add(label(name + " clickable", color).outline().uniqueId()
                        .clickable((e, l) -> console.log("Label " + l.element().id + " clicked")));
                div.add(label(name + " clickable removable", color).outline().uniqueId().closable()
                        .clickable((e, l) -> console.log("Label " + l.element().id + " clicked")));
                div.add(label(name + " label with icon that overflows", color).outline().closable()
                        .textMaxWidth("16ch"));
                div.add(label(name + " link removable (disabled)", color).outline().disabled().href("#").closable());
                div.add(label(name + " clickable removable (disabled)", color).outline().disabled().clickable().closable());
                div.add(br()).add(br());
            }
            div.add(div().style("width", "250px")
                    .add(label("Label that overflows its parent, but has no textMaxWidth on its own")));

            div.add(br()).add(strong().text("Status")).add(br()).add(br());
            for (Severity severity : Severity.values()) {
                String name = severity.status.name().substring(0, 1).toUpperCase() + severity.status.name().substring(1);
                div.add(label(name).status(severity).outline());
                div.add(label(name + " removable").status(severity).outline().closable());
                div.add(label(name + " link").status(severity).outline().href("#"));
                div.add(label(name + " link removable").status(severity).outline().href("#").closable());
                div.add(label(name + " clickable").status(severity).outline().uniqueId()
                        .clickable((e, l) -> console.log("Label " + l.element().id + " clicked")));
                div.add(label(name + " clickable removable").status(severity).outline().uniqueId().closable()
                        .clickable((e, l) -> console.log("Label " + l.element().id + " clicked")));
                div.add(label(name + " label with icon that overflows").status(severity).outline().closable()
                        .textMaxWidth("16ch"));
                div.add(br()).add(br());
            }
            return div.element();
            // @code-end:label-outlined
        }));

        addSnippet(new Snippet("label-compact", "Compact labels",
                code("label-compact"), () ->
                // @code-start:label-compact
                div().id("ws-react-c-label-compact-labels")
                        .add(label("Compact").compact().filled()).add(" ")
                        .add(label("Compact icon").compact().filled().icon(cube())).add(" ")
                        .add(label("Compact removable").compact().filled().closable()).add(" ")
                        .add(label("Compact icon removable").compact().filled().icon(cube()).closable()).add(" ")
                        .add(label("Compact link").compact().filled().href("#")).add(" ")
                        .add(label("Compact link removable").compact().filled().href("#").closable()).add(" ")
                        .add(label("Compact clickable").compact().filled().uniqueId()
                                .clickable((e, l) -> console.log("Label " + l.element().id + " clicked")))
                        .add(" ")
                        .add(label("Compact clickable removable").compact().filled().uniqueId().closable()
                                .clickable((e, l) -> console.log("Label " + l.element().id + " clicked")))
                        .add(" ")
                        .add(label("Compact label with icon that overflows").compact().filled().closable()
                                .textMaxWidth("16ch"))
                        .add(label("Compact link removable (disabled)").compact().filled().disabled().href("#").closable())
                        .add(label("Compact clickable removable (disabled)").compact().filled().disabled().clickable().closable())
                        .add(label("Compact").compact().outline()).add(" ")
                        .add(label("Compact icon").compact().outline().icon(cube())).add(" ")
                        .add(label("Compact removable").compact().outline().closable()).add(" ")
                        .add(label("Compact icon removable").compact().outline().icon(cube()).closable()).add(" ")
                        .add(label("Compact link").compact().outline().href("#")).add(" ")
                        .add(label("Compact link removable").compact().outline().href("#").closable()).add(" ")
                        .add(label("Compact clickable").compact().outline().uniqueId()
                                .clickable((e, l) -> console.log("Label " + l.element().id + " clicked")))
                        .add(" ")
                        .add(label("Compact clickable removable").compact().outline().uniqueId().closable()
                                .clickable((e, l) -> console.log("Label " + l.element().id + " clicked")))
                        .add(" ")
                        .add(label("Compact label with icon that overflows").compact().outline().closable()
                                .textMaxWidth("16ch"))
                        .add(label("Compact link removable (disabled)").compact().outline().disabled().href("#").closable())
                        .add(label("Compact clickable removable (disabled)").compact().outline().disabled().clickable().closable())
                        .element()
                // @code-end:label-compact
        ));

        addSnippet(new Snippet("label-editable", "Editable labels",
                code("label-editable"), () ->
                // @code-start:label-editable
                div()
                        .add(label("Editable label", blue)
                                .editable()
                                .closable())
                        .add(" ")
                        .add(label("Compact editable label")
                                .compact()
                                .editable()
                                .closable())
                        .element()
                // @code-end:label-editable
        ));

        addSnippet(new Snippet("label-group-basic", "Basic label group",
                code("label-group-basic"), () ->
                // @code-start:label-group-basic
                div()
                        .add(labelGroup()
                                .addItem(label("Label 1").icon(infoCircle()))
                                .addItem(label("Label 2", blue).icon(infoCircle()))
                                .addItem(label("Label 3", green).icon(infoCircle())))
                        .element()
                // @code-end:label-group-basic
        ));

        addSnippet(new Snippet("label-group-overflow", "Label group with overflow",
                code("label-group-overflow"), () ->
                // @code-start:label-group-overflow
                div()
                        .add(labelGroup()
                                .addItem(label("Label 1").icon(infoCircle()))
                                .addItem(label("Label 2", blue).icon(infoCircle()))
                                .addItem(label("Label 3", green).icon(infoCircle()))
                                .addItem(label("Label 4", orange).icon(infoCircle()))
                                .addItem(label("Label 5", red).icon(infoCircle()))
                                .addItem(label("Label 6", purple).icon(infoCircle())))
                        .element()
                // @code-end:label-group-overflow
        ));

        addSnippet(new Snippet("label-group-category", "Label group with categories",
                code("label-group-category"), () ->
                // @code-start:label-group-category
                div()
                        .add(labelGroup("Group label")
                                .addItem(label("Label 1").icon(infoCircle()))
                                .addItem(label("Label 2", blue).icon(infoCircle()))
                                .addItem(label("Label 3", green).icon(infoCircle())))
                        .element()
                // @code-end:label-group-category
        ));

        addSnippet(new Snippet("label-group-category-removable", "Label group with removable categories",
                code("label-group-category-removable"), () ->
                // @code-start:label-group-category-removable
                div()
                        .add(labelGroup("Group label").closable()
                                .addItem(label("Label 1").icon(infoCircle()))
                                .addItem(label("Label 2", blue).icon(infoCircle()))
                                .addItem(label("Label 3", green).icon(infoCircle()))
                                .addItem(label("Label 4", orange).icon(infoCircle()))
                                .addItem(label("Label 5", red).icon(infoCircle())))
                        .element()
                // @code-end:label-group-category-removable
        ));

        addSnippet(new Snippet("label-group-vertical", "Vertical label group",
                code("label-group-vertical"), () ->
                // @code-start:label-group-vertical
                div()
                        .add(labelGroup("Group label with a very long name").vertical().closable()
                                .addItem(label("Label 1").icon(infoCircle()))
                                .addItem(label("Label 2", blue).icon(infoCircle()))
                                .addItem(label("Label 3", green).icon(infoCircle()))
                                .addItem(label("Label 4", orange).icon(infoCircle()))
                                .addItem(label("Label 5", red).icon(infoCircle())))
                        .element()
                // @code-end:label-group-vertical
        ));

        addSnippet(new Snippet("label-group-editable", "Editable label group",
                code("label-group-editable"), () ->
                // @code-start:label-group-editable
                div()
                        .add(labelGroup()
                                .addItem(label("Editable label", blue).editable().closable())
                                .addItem(label("Static label", green))
                                .addItem(label("Editable label 2", blue).editable().closable())
                                .addItem(label("Editable label 3", blue).editable().closable()))
                        .element()
                // @code-end:label-group-editable
        ));

        startApiDocs(Label.class);
        addApiDoc(Label.class, component);
        addApiDoc(LabelEditCancelHandler.class, handler);
        addApiDoc(LabelEditCompleteHandler.class, handler);
        addApiDoc(LabelGroup.class, component);
    }
}

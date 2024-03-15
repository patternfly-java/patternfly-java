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
import static org.patternfly.component.label.Label.label;
import static org.patternfly.component.label.LabelGroup.labelGroup;
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
            HTMLContainerBuilder<HTMLDivElement> div = div();
            Color[] values = Color.values();
            for (Color color : values) {
                String name = color.name().substring(0, 1).toUpperCase() + color.name().substring(1);
                div.add(label(name, color)).add(" ");
                div.add(label(name + " icon", color).icon(infoCircle)).add(" ");
                div.add(label(name + " removable", color).closable()).add(" ");
                div.add(label(name + " icon removable", color).icon(infoCircle).closable()).add(" ");
                div.add(label(name + " link", color).href("#")).add(" ");
                div.add(label(name + " link removable", color).href("#").closable()).add(" ");
                div.add(label(name + " clickable", color).uniqueId()
                                .clickable((e, l) -> console.log("Label " + l.element().id + " clicked")))
                        .add(" ");
                div.add(label(name + " clickable removable", color).uniqueId().closable()
                                .clickable((e, l) -> console.log("Label " + l.element().id + " clicked")))
                        .add(" ");
                div.add(label(name + " label with icon that overflows", color).closable()
                        .textMaxWidth("16ch"));
                div.add(br()).add(br());
            }
            div.add(div().style("width", "250px")
                    .add(label("Label that overflows its parent, but has no textMaxWidth on its own")));
            return div.element();
            // @code-end:label-filled
        }));

        addSnippet(new Snippet("label-outline", "Outlined labels",
                code("label-outline"), () -> {
            // @code-start:label-outline
            HTMLContainerBuilder<HTMLDivElement> div = div();
            Color[] values = Color.values();
            for (int i = 0; i < values.length; i++) {
                Color color = values[i];
                String name = color.name().substring(0, 1).toUpperCase() + color.name().substring(1);
                div.add(label(name, color).outline()).add(" ");
                div.add(label(name + " icon", color).outline().icon(infoCircle)).add(" ");
                div.add(label(name + " removable", color).outline().closable()).add(" ");
                div.add(label(name + " icon removable", color).outline().icon(infoCircle).closable()).add(" ");
                div.add(label(name + " link", color).outline().href("#")).add(" ");
                div.add(label(name + " link removable", color).outline().href("#").closable()).add(" ");
                div.add(label(name + " clickable", color).outline().uniqueId()
                                .clickable((e, l) -> console.log("Label " + l.element().id + " clicked")))
                        .add(" ");
                div.add(label(name + " clickable removable", color).outline().uniqueId().closable()
                                .clickable((e, l) -> console.log("Label " + l.element().id + " clicked")))
                        .add(" ");
                div.add(label(name + " label with icon that overflows", color).outline().closable()
                        .textMaxWidth("16ch"));
                if (i < values.length - 1) {
                    div.add(br()).add(br());
                }
            }
            return div.element();
            // @code-end:label-outline
        }));

        addSnippet(new Snippet("label-compact", "Compact labels",
                code("label-compact"), () ->
                // @code-start:label-compact
                div()
                        .add(label("Grey").compact()).add(" ")
                        .add(label("Grey icon").compact().icon(infoCircle)).add(" ")
                        .add(label("Grey removable").compact().closable()).add(" ")
                        .add(label("Grey icon removable").compact().icon(infoCircle).closable()).add(" ")
                        .add(label("Grey link").compact().href("#")).add(" ")
                        .add(label("Grey link removable").compact().href("#").closable()).add(" ")
                        .add(label("Grey clickable").compact().uniqueId()
                                .clickable((e, l) -> console.log("Label " + l.element().id + " clicked")))
                        .add(" ")
                        .add(label("Grey clickable removable").compact().uniqueId().closable()
                                .clickable((e, l) -> console.log("Label " + l.element().id + " clicked")))
                        .add(" ")
                        .add(label("Grey label with icon that overflows").compact().closable()
                                .textMaxWidth("16ch"))
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
                                .addLabel(label("Label 1").icon(infoCircle))
                                .addLabel(label("Label 2", blue).icon(infoCircle))
                                .addLabel(label("Label 3", green).icon(infoCircle)))
                        .element()
                // @code-end:label-group-basic
        ));

        addSnippet(new Snippet("label-group-overflow", "Label group with overflow",
                code("label-group-overflow"), () ->
                // @code-start:label-group-overflow
                div()
                        .add(labelGroup()
                                .addLabel(label("Label 1").icon(infoCircle))
                                .addLabel(label("Label 2", blue).icon(infoCircle))
                                .addLabel(label("Label 3", green).icon(infoCircle))
                                .addLabel(label("Label 4", orange).icon(infoCircle))
                                .addLabel(label("Label 5", red).icon(infoCircle))
                                .addLabel(label("Label 6", purple).icon(infoCircle)))
                        .element()
                // @code-end:label-group-overflow
        ));

        addSnippet(new Snippet("label-group-category", "Label group with categories",
                code("label-group-category"), () ->
                // @code-start:label-group-category
                div()
                        .add(labelGroup("Group label")
                                .addLabel(label("Label 1").icon(infoCircle))
                                .addLabel(label("Label 2", blue).icon(infoCircle))
                                .addLabel(label("Label 3", green).icon(infoCircle)))
                        .element()
                // @code-end:label-group-category
        ));

        addSnippet(new Snippet("label-group-category-removable", "Label group with removable categories",
                code("label-group-category-removable"), () ->
                // @code-start:label-group-category-removable
                div()
                        .add(labelGroup("Group label").closable()
                                .addLabel(label("Label 1").icon(infoCircle))
                                .addLabel(label("Label 2", blue).icon(infoCircle))
                                .addLabel(label("Label 3", green).icon(infoCircle))
                                .addLabel(label("Label 4", orange).icon(infoCircle))
                                .addLabel(label("Label 5", red).icon(infoCircle)))
                        .element()
                // @code-end:label-group-category-removable
        ));

        addSnippet(new Snippet("label-group-vertical", "Vertical label group",
                code("label-group-vertical"), () ->
                // @code-start:label-group-vertical
                div()
                        .add(labelGroup("Group label with a very long name").vertical().closable()
                                .addLabel(label("Label 1").icon(infoCircle))
                                .addLabel(label("Label 2", blue).icon(infoCircle))
                                .addLabel(label("Label 3", green).icon(infoCircle))
                                .addLabel(label("Label 4", orange).icon(infoCircle))
                                .addLabel(label("Label 5", red).icon(infoCircle)))
                        .element()
                // @code-end:label-group-vertical
        ));

        addSnippet(new Snippet("label-group-editable", "Editable label group",
                code("label-group-editable"), () ->
                // @code-start:label-group-editable
                div()
                        .add(labelGroup()
                                .addLabel(label("Editable label", blue).editable().closable())
                                .addLabel(label("Static label", green))
                                .addLabel(label("Editable label 2", blue).editable().closable())
                                .addLabel(label("Editable label 3", blue).editable().closable()))
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

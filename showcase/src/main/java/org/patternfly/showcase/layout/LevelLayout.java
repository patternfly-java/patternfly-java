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
package org.patternfly.showcase.layout;

import org.jboss.elemento.router.Route;
import org.patternfly.layout.level.Level;
import org.patternfly.layout.level.LevelItem;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.layout.level.Level.level;
import static org.patternfly.layout.level.LevelItem.levelItem;
import static org.patternfly.showcase.ApiDoc.Type.layout;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.layouts;

@Route(value = "/layouts/level", title = "Level")
public class LevelLayout extends SnippetPage {

    public LevelLayout() {
        super(layouts.get("level"));

        startExamples();
        addSnippet(new Snippet("level-basic", "Basic",
                code("level-basic"), () ->
                // @code-start:level-basic
                div().css("ws-core-l-level")
                        .add(level()
                                .addItem(levelItem().text("Level item"))
                                .addItem(levelItem().text("Level item"))
                                .addItem(levelItem().text("Level item")))
                        .element()
                // @code-end:level-basic
        ));

        addSnippet(new Snippet("level-gutter", "With gutters",
                code("level-gutter"), () ->
                // @code-start:level-gutter
                div().css("ws-core-l-level")
                        .add(level().gutter()
                                .addItem(levelItem().text("Level item"))
                                .addItem(levelItem().text("Level item"))
                                .addItem(levelItem().text("Level item")))
                        .element()
                // @code-end:level-gutter
        ));

        startApiDocs(Level.class);
        addApiDoc(Level.class, layout);
        addApiDoc(LevelItem.class, layout);
    }
}

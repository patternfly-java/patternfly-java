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
import org.patternfly.component.avatar.Avatar;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.br;
import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.avatar.Avatar.avatar;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.showcase.Data.components;
import static org.patternfly.showcase.Resources.avatarData;
import static org.patternfly.style.Size.lg;
import static org.patternfly.style.Size.md;
import static org.patternfly.style.Size.sm;
import static org.patternfly.style.Size.xl;

@Route(value = "/components/avatar", title = "Avatar")
public class AvatarComponent extends SnippetPage {

    public AvatarComponent() {
        super(components.get("avatar"));

        startExamples();
        addSnippet(new Snippet("avatar-basic", "Basic",
                code("avatar-basic"), () ->
                // @code-start:avatar-basic
                div()
                        .add(avatar(avatarData(), "avatar"))
                        .element()
                // @code-end:avatar-basic
        ));

        addSnippet(new Snippet("avatar-size", "Size variations",
                code("avatar-size"), () ->
                // @code-start:avatar-size
                div()
                        .add("Small").add(br())
                        .add(avatar(avatarData(), "avatar").size(sm))
                        .add(br()).add(br())
                        .add("Medium").add(br())
                        .add(avatar(avatarData(), "avatar").size(md))
                        .add(br()).add(br())
                        .add("Large").add(br())
                        .add(avatar(avatarData(), "avatar").size(lg))
                        .add(br()).add(br())
                        .add("Extra large").add(br())
                        .add(avatar(avatarData(), "avatar").size(xl))
                        .element()
                // @code-end:avatar-size
        ));

        addSnippet(new Snippet("avatar-bordered", "Bordered",
                code("avatar-bordered"), () ->
                // @code-start:avatar-bordered
                div()
                        .add(avatar(avatarData(), "avatar").bordered())
                        .element()
                // @code-end:avatar-bordered
        ));

        startApiDocs(Avatar.class);
        addApiDoc(Avatar.class, component);
    }
}

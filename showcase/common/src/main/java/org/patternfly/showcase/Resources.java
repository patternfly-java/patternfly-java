package org.patternfly.showcase;

import org.kie.j2cl.tools.processors.annotations.GWT3Resource;
import org.kie.j2cl.tools.processors.common.resources.ClientBundle;
import org.kie.j2cl.tools.processors.common.resources.TextResource;

import static elemental2.dom.DomGlobal.btoa;

@GWT3Resource
public interface Resources extends ClientBundle {

    static String avatarData() {
        return "data:image/svg+xml;base64," + btoa(ResourcesImpl.INSTANCE.avatar().getText());
    }

    @Source("avatar.svg")
    TextResource avatar();

    @Source("components.json")
    TextResource components();

    @Source("layouts.json")
    TextResource layouts();

    @Source("pf-logo.svg")
    TextResource pfLogo();

    @Source("rhcp.json")
    TextResource rhcp();

    @Source("servers.json")
    TextResource servers();

    @Source("users.json")
    TextResource users();
}

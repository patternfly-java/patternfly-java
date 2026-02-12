package org.patternfly.componentgroup.servicecard;

import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentIcon;
import org.patternfly.component.ComponentType;
import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;

public class ServiceCard extends BaseComponent<HTMLElement, ServiceCard> implements
        ComponentIcon<HTMLElement, ServiceCard> {

    // ------------------------------------------------------ factory

    public ServiceCard serviceCard() {
        return new ServiceCard();
    }

    // ------------------------------------------------------ instance

    public ServiceCard() {
        super(ComponentType.ServiceCard, div().element());
    }

    // ------------------------------------------------------ builder

    @Override
    public ServiceCard icon(Element icon) {
        return this;
    }

    @Override
    public ServiceCard removeIcon() {
        return this;
    }

    public ServiceCard title(String title) {
        return this;
    }

    public ServiceCard subTitle(String subTitle) {
        return this;
    }

    public ServiceCard description(String description) {
        return this;
    }

    @Override
    public ServiceCard that() {
        return this;
    }
}

package org.patternfly.client.components;

import elemental2.dom.HTMLDivElement;
import org.jboss.gwt.elemento.core.builder.HtmlContent;

import static org.jboss.gwt.elemento.core.Elements.div;
import static org.patternfly.client.resources.CSS.component;
import static org.patternfly.client.resources.Constants.content;

/**
 * PatternFly content component.
 *
 * @see <a href= "https://www.patternfly.org/v4/documentation/react/components/content/">https://www.patternfly.org/v4/documentation/react/components/content</a>
 */
public class Content extends BaseComponent<HTMLDivElement, Content>
        implements HtmlContent<HTMLDivElement, Content> {

    // ------------------------------------------------------ factory methods

    public static Content content() {
        return new Content();
    }

    // ------------------------------------------------------ instance

    Content() {
        super(div().css(component(content)).element(), "Content");
    }

    @Override
    public Content that() {
        return this;
    }
}

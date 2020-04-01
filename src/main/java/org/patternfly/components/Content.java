package org.patternfly.components;

import elemental2.dom.HTMLDivElement;
import org.jboss.elemento.HtmlContent;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.Constants.content;

/**
 * PatternFly content component.
 *
 * @see <a href= "https://www.patternfly.org/v4/documentation/core/components/content/">https://www.patternfly.org/v4/documentation/core/components/content</a>
 */
public class Content extends BaseComponent<HTMLDivElement, Content>
        implements HtmlContent<HTMLDivElement, Content> {

    // ------------------------------------------------------ factory methods

    public static Content content() {
        return new Content();
    }

    // ------------------------------------------------------ instance

    private Content() {
        super(div().css(component(content)).element(), "Content");
    }

    @Override
    public Content that() {
        return this;
    }
}

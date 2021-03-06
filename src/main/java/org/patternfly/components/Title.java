package org.patternfly.components;

import elemental2.dom.HTMLHeadingElement;
import org.jboss.elemento.HtmlContent;
import org.patternfly.resources.CSS.Size;

import static org.jboss.elemento.Elements.h;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.Constants.title;

/**
 * PatternFly title component.
 *
 * @see <a href= "https://www.patternfly.org/v4/documentation/core/components/title">https://www.patternfly.org/v4/documentation/core/components/title</a>
 */
public class Title extends BaseComponent<HTMLHeadingElement, Title>
        implements HtmlContent<HTMLHeadingElement, Title> {

    // ------------------------------------------------------ factory methods

    public static Title title(int level, String text) {
        return new Title(level, text, null);
    }

    public static Title title(int level, String text, Size size) {
        return new Title(level, text, size);
    }

    // ------------------------------------------------------ instance

    protected Title(int level, String text, Size size) {
        super(h(level, text).css(component(title)).element(), "Title");
        if (size != null) {
            css(size.modifier());
        }
    }

    @Override
    public Title that() {
        return this;
    }
}

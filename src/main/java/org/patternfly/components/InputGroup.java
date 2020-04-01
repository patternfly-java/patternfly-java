package org.patternfly.components;

import elemental2.dom.HTMLDivElement;
import org.jboss.elemento.HtmlContent;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.Constants.inputGroup;

/**
 * PatternFly input group component.
 *
 * @see <a href= "https://www.patternfly.org/v4/documentation/core/components/inputgroup/">https://www.patternfly.org/v4/documentation/core/components/inputgroup</a>
 */
public class InputGroup extends BaseComponent<HTMLDivElement, InputGroup>
        implements HtmlContent<HTMLDivElement, InputGroup> {

    // ------------------------------------------------------ factory methods

    public static InputGroup inputGroup() {
        return new InputGroup();
    }

    // ------------------------------------------------------ instance

    InputGroup() {
        super(div().css(component(inputGroup)).element(), "InputGroup");
    }

    @Override
    public InputGroup that() {
        return this;
    }
}

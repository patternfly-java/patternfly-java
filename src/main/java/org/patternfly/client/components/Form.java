package org.patternfly.client.components;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLFormElement;
import org.jboss.gwt.elemento.core.builder.ElementBuilder;
import org.jboss.gwt.elemento.core.builder.HtmlContent;

import static org.jboss.gwt.elemento.core.Elements.div;
import static org.jboss.gwt.elemento.core.Elements.form;
import static org.patternfly.client.resources.CSS.component;
import static org.patternfly.client.resources.Constants.form;
import static org.patternfly.client.resources.Constants.group;

/**
 * PatternFly form component.
 *
 * @see <a href= "https://www.patternfly.org/v4/documentation/core/components/form">https://www.patternfly.org/v4/documentation/core/components/form</a>
 */
public class Form extends BaseComponent<HTMLFormElement, Form>
        implements HtmlContent<HTMLFormElement, Form> {

    // ------------------------------------------------------ factory methods

    public static Form form() {
        return new Form();
    }

    public static Group group() {
        return new Group();
    }

    // ------------------------------------------------------ instance

    Form() {
        super(form().css(component(form)).element(), "Form");
    }

    @Override
    public Form that() {
        return this;
    }

    // ------------------------------------------------------ inner classes

    public static class Group extends ElementBuilder<HTMLDivElement, Group>
            implements HtmlContent<HTMLDivElement, Group> {

        private Group() {
            super(div().css(component(form, group)).element());
        }

        @Override
        public Group that() {
            return this;
        }
    }
}

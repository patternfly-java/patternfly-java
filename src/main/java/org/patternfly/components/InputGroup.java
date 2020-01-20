package org.patternfly.components;

import java.util.function.Consumer;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLInputElement;
import org.gwtproject.event.shared.HandlerRegistration;
import org.jboss.elemento.EventType;
import org.jboss.elemento.HtmlContent;
import org.jboss.elemento.InputBuilder;
import org.jboss.elemento.InputType;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Key.Enter;
import static org.patternfly.components.Button.control;
import static org.patternfly.components.Icon.icon;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.CSS.fas;
import static org.patternfly.resources.Constants.formControl;
import static org.patternfly.resources.Constants.inputGroup;
import static org.patternfly.resources.Constants.title;

/**
 * PatternFly input group component.
 *
 * @see <a href= "https://www.patternfly.org/v4/documentation/react/components/inputgroup/">https://www.patternfly.org/v4/documentation/react/components/inputgroup</a>
 */
public class InputGroup extends BaseComponent<HTMLDivElement, InputGroup>
        implements HtmlContent<HTMLDivElement, InputGroup> {

    // ------------------------------------------------------ factory methods

    public static class Search extends InputGroup {

        private final InputBuilder<HTMLInputElement> input;
        private final Button control;
        private HandlerRegistration searchHandler;
        private HandlerRegistration keyupHandler;

        public Search() {
            this("Search");
        }

        public Search(String placeholder) {
            add(input = input(InputType.search).css(component(formControl))
                    .placeholder(placeholder));
            add(control = control(icon(fas("search")).aria(title, placeholder)));
        }

        public void clear() {
            input.element().value = "";
        }

        public Search onFilter(Consumer<String> onFilter) {
            bind(onFilter, false);
            return this;
        }

        public Search onSearch(Consumer<String> onSearch) {
            bind(onSearch, true);
            return this;
        }

        private void bind(Consumer<String> consumer, boolean onlyOnEnter) {
            if (searchHandler != null) {
                searchHandler.removeHandler();
            }
            if (keyupHandler != null) {
                keyupHandler.removeHandler();
            }

            searchHandler = EventType.bind(input.element(), EventType.search,
                    e -> consumer.accept(((HTMLInputElement) e.currentTarget).value));
            keyupHandler = EventType.bind(input.element(), EventType.keyup, e -> {
                if (onlyOnEnter) {
                    if (Enter.match(e)) {
                        consumer.accept(((HTMLInputElement) e.currentTarget).value);
                    }
                } else {
                    consumer.accept(((HTMLInputElement) e.currentTarget).value);
                }
            });
            control.onClick(() -> consumer.accept(input.element().value));
        }
    }

    // ------------------------------------------------------ instance

    public static InputGroup inputGroup() {
        return new InputGroup();
    }

    InputGroup() {
        super(div().css(component(inputGroup)).element(), "InputGroup");
    }

    // ------------------------------------------------------ inner classes

    @Override
    public InputGroup that() {
        return this;
    }
}

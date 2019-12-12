package org.patternfly.client.components;

import java.util.HashMap;
import java.util.Map;

import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLLIElement;
import elemental2.dom.HTMLUListElement;
import org.jboss.gwt.elemento.core.By;
import org.jboss.gwt.elemento.core.IsElement;
import org.jboss.gwt.elemento.core.builder.HtmlContent;
import org.patternfly.client.resources.Constants;
import org.patternfly.client.resources.Dataset;

import static elemental2.dom.DomGlobal.clearTimeout;
import static elemental2.dom.DomGlobal.setTimeout;
import static org.jboss.gwt.elemento.core.Elements.*;
import static org.jboss.gwt.elemento.core.EventType.mouseout;
import static org.jboss.gwt.elemento.core.EventType.mouseover;
import static org.patternfly.client.resources.CSS.component;
import static org.patternfly.client.resources.CSS.modifier;
import static org.patternfly.client.resources.Constants.alertGroup;
import static org.patternfly.client.resources.Dataset.alert;

/**
 * PatternFly alert group component.
 *
 * @see <a href= "https://www.patternfly.org/v4/documentation/core/components/alertgroup">https://www.patternfly.org/v4/documentation/core/components/alertgroup</a>
 */
public class AlertGroup extends BaseComponent<HTMLUListElement, AlertGroup>
        implements HtmlContent<HTMLUListElement, AlertGroup>, IsElement<HTMLUListElement> {

    // ------------------------------------------------------ factory methods

    private static AlertGroup toast;

    public static AlertGroup toast() {
        if (toast == null) {
            toast = new AlertGroup(DEFAULT_TIMEOUT);
            toast.element.classList.add(modifier(Constants.toast));
        }
        return toast;
    }

    public static AlertGroup embedded() {
        return new AlertGroup(0);
    }

    // ------------------------------------------------------ instance

    private static final double DEFAULT_TIMEOUT = 8000; // ms

    private final double timeout;
    private final Map<String, Double> messageIds;

    AlertGroup(double timeout) {
        super(ul().css(component(alertGroup)).element(), "AlertGroup");
        this.timeout = timeout;
        this.messageIds = new HashMap<>();
    }

    @Override
    public AlertGroup that() {
        return this;
    }

    // ------------------------------------------------------ public API

    public AlertGroup add(Alert alert) {
        if (timeout > 100) {
            String id = uniqueId();
            alert.data(Dataset.alert, id);
            alert.onClose(() -> stopMessageTimeout(id));

            startMessageTimeout(id);
            alert.on(mouseover, e -> stopMessageTimeout(id));
            alert.on(mouseout, e -> startMessageTimeout(id));
        }

        HTMLLIElement item = li().css(component(alertGroup, Constants.item)).add(alert).element();
        if (this == toast && !alert.hasClose()) {
            alert.closable();
            insertFirst(element, item);
        } else {
            add(item);
        }
        return this;
    }

    // ------------------------------------------------------ internals

    private void startMessageTimeout(String id) {
        double timeoutHandle = setTimeout((o) -> remove(id), timeout);
        messageIds.put(id, timeoutHandle);
    }

    private void stopMessageTimeout(String id) {
        if (messageIds.containsKey(id)) {
            clearTimeout(messageIds.get(id));
            messageIds.remove(id);
        }
    }

    private void remove(String id) {
        HTMLElement e = find(element, By.data(alert, id));
        failSafeRemoveFromParent(e);
        Double timeoutHandle = messageIds.remove(id);
        if (timeoutHandle != null) {
            clearTimeout(timeoutHandle);
        }
    }
}

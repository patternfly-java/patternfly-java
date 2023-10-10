package org.patternfly.core;

import java.util.function.Consumer;

import org.jboss.elemento.IsElement;
import org.jboss.elemento.TypedBuilder;
import org.patternfly.component.spinner.Spinner;

import elemental2.dom.Element;

import static org.patternfly.layout.Classes.inProgress;
import static org.patternfly.layout.Classes.modifier;

public interface WithProgress<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>,
        IsElement<E> {

    default B startProgress() {
        if (!isInProgress()) {
            inProgress(true);
        }
        return that();
    }

    default B stopProgress() {
        if (isInProgress()) {
            inProgress(false);
        }
        return that();
    }

    default B toggleProgress() {
        return inProgress(!isInProgress());

    }

    default boolean isInProgress() {
        return element().classList.contains(modifier(inProgress));
    }

    default B inProgress(boolean inProgress) {
        return inProgress(inProgress, "Loading...", null);
    }

    default B inProgress(boolean inProgress, String label) {
        return inProgress(inProgress, label, null);
    }

    default B inProgress(boolean inProgress, Consumer<Spinner> spinnerConsumer) {
        return inProgress(inProgress, "Loading...", spinnerConsumer);
    }

    B inProgress(boolean inProgress, String label, Consumer<Spinner> spinnerConsumer);
}

/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.patternfly.component.notification;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Supplier;

import org.jboss.elemento.Elements;
import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentType;
import org.patternfly.component.Expandable;
import org.patternfly.component.HasObservableValue;
import org.patternfly.component.HasValue;
import org.patternfly.component.button.Button;
import org.patternfly.core.Aria;
import org.patternfly.core.ObservableValue;
import org.patternfly.handler.ChangeHandler;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.handler.ToggleHandler;
import org.patternfly.icon.IconSets;
import org.patternfly.icon.PredefinedIcon;
import org.patternfly.style.NotificationStatus;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;

import static elemental2.dom.DomGlobal.setTimeout;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.handler.ChangeHandler.fireIfChanged;
import static org.patternfly.style.Classes.clicked;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Classes.notify;
import static org.patternfly.style.NotificationStatus.attention;
import static org.patternfly.style.NotificationStatus.read;
import static org.patternfly.style.NotificationStatus.unread;

/**
 * A notification badge is a visual indicator that alerts users about incoming notifications.
 *
 * @see <a href="https://www.patternfly.org/components/notification-badge">PatternFly Notification Badge</a>
 */
public class NotificationBadge extends BaseComponent<HTMLElement, NotificationBadge> implements
        Expandable<HTMLElement, NotificationBadge>,
        HasObservableValue<HTMLElement, NotificationBadge, Integer>,
        HasValue<Integer> {

    // ------------------------------------------------------ factory

    public static NotificationBadge notificationBadge() {
        return notificationBadge(0);
    }

    public static NotificationBadge notificationBadge(int count) {
        return new NotificationBadge(count, button().stateful(read));
    }

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(NotificationBadge.class.getName());
    private static final Map<NotificationStatus, Supplier<PredefinedIcon>> statusIcons = new HashMap<>();

    static {
        statusIcons.put(read, IconSets.patternfly::bell);
        statusIcons.put(unread, IconSets.patternfly::bell);
        statusIcons.put(attention, IconSets.patternfly::attentionBell);
    }

    private final Button button;
    private final List<ToggleHandler<NotificationBadge>> toggleHandler;
    private final List<ChangeHandler<NotificationBadge, Integer>> changeValueHandler;
    private final List<ChangeHandler<NotificationBadge, NotificationStatus>> changeStatusHandler;
    private int value;
    private boolean animated;
    private ObservableValue<Integer> ov;
    private ObservableValue<NotificationStatus> os;
    private NotificationStatus status;

    private NotificationBadge(int count, Button button) {
        super(ComponentType.NotificationBadge, button.element());
        this.button = button;
        this.animated = false;
        this.toggleHandler = new ArrayList<>();
        this.changeValueHandler = new ArrayList<>();
        this.changeStatusHandler = new ArrayList<>();

        count(count, false);
        status(read, false);
        collapse(false);
    }

    // ------------------------------------------------------ builder

    /** Same as {@linkplain #count(int, boolean) count(count, false)} */
    public NotificationBadge count(int count) {
        return count(count, false);
    }

    /** Sets the count of this notification badge. */
    public NotificationBadge count(int count, boolean fireEvent) {
        if (count < 0) {
            logger.warn("Count cannot be negative, ignoring.");
            return this;
        }
        boolean changed = value != count;
        if (changed) {
            internalUpdateValue(count);
            if (fireEvent) {
                changeValueHandler.forEach(handler -> handler.onChange(new Event(""), this, value));
            }
        }
        return this;
    }

    /**
     * Binds an observable value to this component. If you're using an observable value, you must not use {@link #count(int)} or
     * {@link #count(int, boolean)} to set the value. Use {@link ObservableValue#set(Object)} instead.
     */
    @Override
    public NotificationBadge bind(ObservableValue<Integer> ov) {
        this.ov = ov;
        this.ov.subscribe((current, previous) -> {
            internalUpdateValue(current);
            fireIfChanged(this, previous, current, changeValueHandler);
        });
        internalUpdateValue(ov.get());
        return this;
    }

    public NotificationBadge unread() {
        return status(unread, true);
    }

    public NotificationBadge read() {
        return status(read, true);
    }

    public NotificationBadge attention() {
        return status(attention, true);
    }

    /** Same as {@linkplain #status(NotificationStatus, boolean) status(status, false)} */
    public NotificationBadge status(NotificationStatus status) {
        return status(status, false);
    }

    public NotificationBadge status(NotificationStatus status, boolean fireEvent) {
        if (status == null) {
            logger.warn("Notification status cannot be null, ignoring.");
            return this;
        }
        boolean changed = this.status != status;
        if (changed) {
            internalUpdateStatus(this.status, status);
            if (fireEvent) {
                changeStatusHandler.forEach(handler -> handler.onChange(new Event(""), this, status));
            }
        }
        return this;
    }

    /**
     * Binds an observable status to this component. If you're using an observable status, you must not use
     * {@link #status(NotificationStatus)} or {@link #status(NotificationStatus, boolean)} to set the status. Use
     * {@link ObservableValue#set(Object)} instead.
     */
    public NotificationBadge bindStatus(ObservableValue<NotificationStatus> os) {
        this.os = os;
        this.os.subscribe((current, previous) -> {
            internalUpdateStatus(previous, current);
            fireIfChanged(this, previous, current, changeStatusHandler);
        });
        internalUpdateStatus(null, os.get());
        return this;
    }

    @Override
    public NotificationBadge that() {
        return this;
    }

    // ------------------------------------------------------ aria

    public NotificationBadge ariaLabel(String ariaLabel) {
        return aria(Aria.label, ariaLabel);
    }

    // ------------------------------------------------------ events

    /**
     * Defines a change handler that is called when the {@link #value()} of this notification badge changes.
     */
    public NotificationBadge onChangeValue(ChangeHandler<NotificationBadge, Integer> changeHandler) {
        this.changeValueHandler.add(changeHandler);
        return this;
    }

    public NotificationBadge onChangeStatus(ChangeHandler<NotificationBadge, NotificationStatus> changeHandler) {
        this.changeStatusHandler.add(changeHandler);
        return this;
    }

    public NotificationBadge onClick(ComponentHandler<NotificationBadge> actionHandler) {
        button.onClick((e, c) -> actionHandler.handle(e, this));
        return this;
    }

    public NotificationBadge onToggle(ToggleHandler<NotificationBadge> toggleHandler) {
        this.toggleHandler.add(toggleHandler);
        return this;
    }

    // ------------------------------------------------------ api

    @Override
    public void expand(boolean fireEvent) {
        aria(Aria.expanded, true);
        css(modifier(clicked));
        if (fireEvent) {
            toggleHandler.forEach(th -> th.onToggle(new Event(""), this, true));
        }
    }

    @Override
    public void collapse(boolean fireEvent) {
        aria(Aria.expanded, false);
        classList().remove(modifier(clicked));
        if (fireEvent) {
            toggleHandler.forEach(th -> th.onToggle(new Event(""), this, false));
        }
    }

    public void triggerNotification() {
        if (!animated) {
            animated = true;
            css(modifier(notify));
            setTimeout(__ -> {
                classList().remove(modifier(notify));
                animated = false;
            }, 1000);
        }
    }

    public int count() {
        return value();
    }

    @Override
    public boolean expanded() {
        return Boolean.parseBoolean(element().getAttribute(Aria.expanded));
    }

    @Override
    public Integer value() {
        return ov != null ? ov.get() : this.value;
    }

    public NotificationStatus status() {
        return os != null ? os.get() : this.status;
    }

    // ------------------------------------------------------ internal

    private void internalUpdateValue(int current) {
        this.value = current;
        Elements.setVisible(button.textElement(), current > 0);
        button.text((current > 0) ? String.valueOf(current) : "");
    }

    private void internalUpdateStatus(NotificationStatus previous, NotificationStatus current) {
        if (previous != null) {
            classList().remove(previous.modifier());
        }
        this.status = current;
        css(current.modifier());
        if (current == attention) {
            button.icon(statusIcons.get(current).get().element());
        } else {
            button.icon(statusIcons.get(current).get().element());
        }
    }
}


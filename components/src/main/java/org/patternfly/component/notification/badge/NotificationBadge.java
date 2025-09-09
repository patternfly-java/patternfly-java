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
package org.patternfly.component.notification.badge;

import java.util.Objects;

import org.jboss.elemento.logger.Logger;
import org.patternfly.component.BaseComponent;
import org.patternfly.component.ComponentIcon;
import org.patternfly.component.ComponentType;
import org.patternfly.component.button.Button;
import org.patternfly.core.Aria;
import org.patternfly.handler.ComponentHandler;
import org.patternfly.icon.PredefinedIcon;
import org.patternfly.style.Classes;

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;

import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.notification.badge.NotificationBadgeVariant.attention;
import static org.patternfly.component.notification.badge.NotificationBadgeVariant.read;
import static org.patternfly.component.notification.badge.NotificationBadgeVariant.unread;
import static org.patternfly.style.Classes.modifier;

/**
 * A notification badge is a visual indicator that alerts users about incoming notifications.
 * @see <a href="https://www.patternfly.org/components/notification-badge">PatternFly Notification Badge</a>
 */
public class NotificationBadge
        extends BaseComponent<HTMLElement, NotificationBadge> implements ComponentIcon<HTMLElement, NotificationBadge> {

    // ------------------------------------------------------ factory

    public static NotificationBadge notificationBadge() {
        return new NotificationBadge(button().stateful());
    }

    // ------------------------------------------------------ instance state

    private static final Logger logger = Logger.getLogger(NotificationBadge.class.getName());

    private final Button button;
    private int count = 0;
    private boolean expanded = false;
    private NotificationBadgeVariant variant;
    private Element customNormalIcon;
    private Element customAttentionIcon;

    private NotificationBadge(Button button) {
        super(ComponentType.NotificationBadge, button.element());
        this.button = button;
        read();
        ariaExpanded(false);
    }

    @Override
    public NotificationBadge that() {
        return this;
    }

    public boolean expanded() {
        return expanded;
    }

    // ------------------------------------------------------ configuration API

    public NotificationBadge ariaLabel(String ariaLabel) {
        return aria(Aria.label, ariaLabel);
    }

    // ------------------------------------------------------ variants

    public NotificationBadge read() {
        return variant(read);
    }

    public NotificationBadge unread() {
        return variant(unread);
    }

    public NotificationBadge attention() {
        return variant(attention);
    }

    public NotificationBadge variant(NotificationBadgeVariant variant) {
        if (variant == null) {
            logger.warn("Variant cannot be null, ignoring.");
            return this;
        }
        if (this.variant == variant) {
            return this;
        }
        if (this.variant != null) {
            classList().remove(this.variant.modifierClass);
        }
        this.variant = variant;
        css(variant.modifierClass);
        applyVariantIconForCurrentState();
        return this;
    }

    @Override
    public NotificationBadge icon(Element icon) {
        if (icon == null) {
            return removeIcon();
        }
        if (Objects.equals(customNormalIcon, icon)) {
            return this;
        }
        customNormalIcon = icon;
        if (variant != attention) {
            button.icon(icon);
        }
        return this;
    }

    public NotificationBadge attentionIcon(Element icon) {
        if (icon == null) {
            return removeAttentionIcon();
        }
        if (Objects.equals(customAttentionIcon, icon)) {
            return this;
        }
        customAttentionIcon = icon;
        if (variant == attention) {
            button.icon(icon);
        }
        return this;
    }

    public NotificationBadge attentionIcon(PredefinedIcon icon) {
        return attentionIcon(icon != null ? icon.element() : null);
    }

    @Override
    public NotificationBadge removeIcon() {
        if (customNormalIcon == null) {
            return this;
        }
        customNormalIcon = null;
        if (variant != attention) {
            button.removeIcon();
            applyVariantIconForCurrentState();
        }
        return this;
    }

    public NotificationBadge removeAttentionIcon() {
        if (customAttentionIcon == null) {
            return this;
        }
        customAttentionIcon = null;
        if (variant == attention) {
            button.removeIcon();
            applyVariantIconForCurrentState();
        }
        return this;
    }

    public NotificationBadge expand() {
        return expand(true);
    }

    public NotificationBadge expand(boolean expand) {
        if (this.expanded == expand) {
            return this;
        }
        this.expanded = expand;
        ariaExpanded(expand);
        toggle(modifier(Classes.clicked), expand);
        return this;
    }

    public NotificationBadge onClick(ComponentHandler<NotificationBadge> actionHandler) {
        button.onClick((e, c) -> actionHandler.handle(e, this));
        return this;
    }

    public NotificationBadge count(int count) {
        if (count < 0) {
            logger.warn("Count cannot be negative, ignoring.");
            return this;
        }
        if (this.count == count) {
            return this;
        }
        this.count = count;
        updateContent();
        return this;
    }

    // ------------------------------------------------------ internal helpers

    private void updateContent() {
        button.text((count > 0) ? String.valueOf(count) : "");
    }

    private void ariaExpanded(boolean expanded) {
        button.aria(Aria.expanded, expanded);
    }

    private void applyVariantIconForCurrentState() {
        button.icon(
                (variant == attention) ? customAttentionIcon != null ? customAttentionIcon : variant.defaultIcon.get()
                        : customNormalIcon != null ? customNormalIcon : variant.defaultIcon.get());
    }
}


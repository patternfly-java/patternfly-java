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

import java.util.function.Supplier;

import org.patternfly.style.Classes;

import elemental2.dom.Element;

import static org.patternfly.icon.IconSets.patternfly.attentionBell;
import static org.patternfly.icon.IconSets.patternfly.bell;
import static org.patternfly.style.Classes.modifier;

public enum NotificationBadgeVariant {
    read(modifier(Classes.read), () -> bell().element()),
    unread(modifier(Classes.unread), () -> bell().element()),
    attention(modifier(Classes.attention), () -> attentionBell().element());

    public final String modifierClass;
    public final Supplier<Element> defaultIcon;

    NotificationBadgeVariant(String modifierClass, Supplier<Element> defaultIcon) {
        this.modifierClass = modifierClass;
        this.defaultIcon = defaultIcon;
    }
}

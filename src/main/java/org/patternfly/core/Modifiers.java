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
package org.patternfly.core;

import org.jboss.elemento.IsElement;
import org.jboss.elemento.TypedBuilder;
import org.patternfly.layout.Classes;

import elemental2.dom.Element;

import static org.patternfly.layout.Classes.modifier;

public interface Modifiers {

    interface Disabled<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>, IsElement<E> {

        /** Same as {@linkplain #disabled(boolean) disabled(true)} */
        default B disabled() {
            return disabled(true);
        }

        /** Adds/removes {@linkplain Classes#modifier(String) modifier(disabled)} */
        default B disabled(boolean disabled) {
            if (disabled) {
                element().classList.add(modifier(Classes.disabled));
            } else {
                element().classList.remove(modifier(Classes.disabled));
            }
            return that();
        }
    }

    interface Fill<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>, IsElement<E> {

        /** Same as {@linkplain #fill(boolean) fill(true)} */
        default B fill() {
            return fill(true);
        }

        /** Adds/removes {@linkplain Classes#modifier(String) modifier(fill)} */
        default B fill(boolean fill) {
            if (fill) {
                element().classList.add(modifier(Classes.fill));
            } else {
                element().classList.remove(modifier(Classes.fill));
            }
            return that();
        }
    }

    interface Inline<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>, IsElement<E> {

        /** Same as {@linkplain #inline(boolean) inline(true)} */
        default B inline() {
            return inline(true);
        }

        /** Adds/removes {@linkplain Classes#modifier(String) modifier(inline)} */
        default B inline(boolean inline) {
            if (inline) {
                element().classList.add(modifier(Classes.inline));
            } else {
                element().classList.remove(modifier(Classes.inline));
            }
            return that();
        }
    }

    interface Invalid<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>, IsElement<E> {

        /** Same as {@linkplain #invalid(boolean) invalid(true)} */
        default B invalid() {
            return invalid(true);
        }

        /** Adds/removes {@linkplain Classes#modifier(String) modifier(error)} */
        default B invalid(boolean invalid) {
            if (invalid) {
                element().classList.add(modifier(Classes.error));
            } else {
                element().classList.remove(modifier(Classes.error));
            }
            return that();
        }
    }

    interface NoFill<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>, IsElement<E> {

        /** Same as {@linkplain #noFill(boolean) noFill(true)} */
        default B noFill() {
            return noFill(true);
        }

        /** Adds/removes {@linkplain Classes#modifier(String) modifier(noFill)} */
        default B noFill(boolean noFill) {
            if (noFill) {
                element().classList.add(modifier(Classes.noFill));
            } else {
                element().classList.remove(modifier(Classes.noFill));
            }
            return that();
        }
    }

    interface Plain<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>, IsElement<E> {

        /** Same as {@linkplain #plain(boolean) plain(true)} */
        default B plain() {
            return plain(true);
        }

        /** Adds/removes {@linkplain Classes#modifier(String) modifier(plain)} */
        default B plain(boolean plain) {
            if (plain) {
                element().classList.add(modifier(Classes.plain));
            } else {
                element().classList.remove(modifier(Classes.plain));
            }
            return that();
        }
    }

    interface Readonly<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>, IsElement<E> {

        /** Same as {@linkplain #readonly(boolean) readonly(true)} */
        default B readonly() {
            return readonly(true);
        }

        /** Adds/removes {@linkplain Classes#modifier(String) modifier(readonly)} */
        default B readonly(boolean readonly) {
            if (readonly) {
                element().classList.add(modifier(Classes.readonly));
            } else {
                element().classList.remove(modifier(Classes.readonly));
            }
            return that();
        }
    }

    interface Readonly2<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>, IsElement<E> {

        /** Same as {@linkplain #readonly(boolean) readonly(true)} */
        default B readonly() {
            return readonly(true);
        }

        /** Adds/removes {@linkplain Classes#modifier(String) modifier(readOnly)} */
        default B readonly(boolean readonly) {
            if (readonly) {
                element().classList.add(modifier(Classes.readOnly));
            } else {
                element().classList.remove(modifier(Classes.readOnly));
            }
            return that();
        }
    }

    interface Required<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>, IsElement<E> {

        /** Same as {@linkplain #required(boolean) required(true)} */
        default B required() {
            return required(true);
        }

        /** Adds/removes {@linkplain Classes#modifier(String) modifier(required)} */
        default B required(boolean required) {
            if (required) {
                element().classList.add(modifier(Classes.required));
            } else {
                element().classList.remove(modifier(Classes.required));
            }
            return that();
        }
    }
}

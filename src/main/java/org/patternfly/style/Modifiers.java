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
package org.patternfly.style;

import org.jboss.elemento.IsElement;
import org.jboss.elemento.TypedBuilder;

import elemental2.dom.Element;

import static org.patternfly.style.Classes.modifier;

public interface Modifiers {

    interface Compact<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>, IsElement<E> {

        /** Same as {@linkplain #compact(boolean) compact(true)} */
        default B compact() {
            return compact(true);
        }

        /** Adds/removes {@linkplain Classes#modifier(String) modifier(compact)} */
        default B compact(boolean compact) {
            return toggleModifier(that(), element(), Classes.compact, compact);
        }
    }

    interface Disabled<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>, IsElement<E> {

        /** Same as {@linkplain #disabled(boolean) disabled(true)} */
        default B disabled() {
            return disabled(true);
        }

        /** Adds/removes {@linkplain Classes#modifier(String) modifier(disabled)} */
        default B disabled(boolean disabled) {
            return toggleModifier(that(), element(), Classes.disabled, disabled);
        }
    }

    interface Fill<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>, IsElement<E> {

        /** Same as {@linkplain #fill(boolean) fill(true)} */
        default B fill() {
            return fill(true);
        }

        /** Adds/removes {@linkplain Classes#modifier(String) modifier(fill)} */
        default B fill(boolean fill) {
            return toggleModifier(that(), element(), Classes.fill, fill);
        }
    }

    interface FullHeight<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>, IsElement<E> {

        /** Same as {@linkplain #fullHeight(boolean) fullHeight(true)} */
        default B fullHeight() {
            return fullHeight(true);
        }

        /** Adds/removes {@linkplain Classes#modifier(String) modifier(fullHeight)} */
        default B fullHeight(boolean fullHeight) {
            return toggleModifier(that(), element(), Classes.fullHeight, fullHeight);
        }
    }

    interface Gutter<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>, IsElement<E> {

        /** Same as {@linkplain #gutter(boolean) gutter(true)} */
        default B gutter() {
            return gutter(true);
        }

        /** Adds/removes {@linkplain Classes#modifier(String) modifier(gutter)} */
        default B gutter(boolean gutter) {
            return toggleModifier(that(), element(), Classes.gutter, gutter);
        }
    }

    interface Horizontal<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>, IsElement<E> {

        /** Same as {@linkplain #horizontal(boolean) horizontal(true)} */
        default B horizontal() {
            return horizontal(true);
        }

        /** Adds/removes {@linkplain Classes#modifier(String) modifier(horizontal)} */
        default B horizontal(boolean horizontal) {
            return toggleModifier(that(), element(), Classes.horizontal, horizontal);
        }
    }

    interface Inline<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>, IsElement<E> {

        /** Same as {@linkplain #inline(boolean) inline(true)} */
        default B inline() {
            return inline(true);
        }

        /** Adds/removes {@linkplain Classes#modifier(String) modifier(inline)} */
        default B inline(boolean inline) {
            return toggleModifier(that(), element(), Classes.inline, inline);
        }
    }

    interface Invalid<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>, IsElement<E> {

        /** Same as {@linkplain #invalid(boolean) invalid(true)} */
        default B invalid() {
            return invalid(true);
        }

        /** Adds/removes {@linkplain Classes#modifier(String) modifier(error)} */
        default B invalid(boolean invalid) {
            return toggleModifier(that(), element(), Classes.error, invalid);
        }
    }

    interface NoFill<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>, IsElement<E> {

        /** Same as {@linkplain #noFill(boolean) noFill(true)} */
        default B noFill() {
            return noFill(true);
        }

        /** Adds/removes {@linkplain Classes#modifier(String) modifier(noFill)} */
        default B noFill(boolean noFill) {
            return toggleModifier(that(), element(), Classes.noFill, noFill);
        }
    }

    interface NoPadding<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>, IsElement<E> {

        /** Same as {@linkplain #noPadding(boolean) noPadding(true)} */
        default B noPadding() {
            return noPadding(true);
        }

        /** Adds/removes {@linkplain Classes#modifier(String) modifier(noPadding)} */
        default B noPadding(boolean noPadding) {
            return toggleModifier(that(), element(), Classes.noPadding, noPadding);
        }
    }

    interface Plain<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>, IsElement<E> {

        /** Same as {@linkplain #plain(boolean) plain(true)} */
        default B plain() {
            return plain(true);
        }

        /** Adds/removes {@linkplain Classes#modifier(String) modifier(plain)} */
        default B plain(boolean plain) {
            return toggleModifier(that(), element(), Classes.plain, plain);
        }
    }

    interface Readonly<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>, IsElement<E> {

        /** Same as {@linkplain #readonly(boolean) readonly(true)} */
        default B readonly() {
            return readonly(true);
        }

        /** Adds/removes {@linkplain Classes#modifier(String) modifier(readonly)} */
        default B readonly(boolean readonly) {
            return toggleModifier(that(), element(), Classes.readonly, readonly);
        }
    }

    interface Readonly2<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>, IsElement<E> {

        /** Same as {@linkplain #readonly(boolean) readonly(true)} */
        default B readonly() {
            return readonly(true);
        }

        /** Adds/removes {@linkplain Classes#modifier(String) modifier(readOnly)} */
        default B readonly(boolean readonly) {
            return toggleModifier(that(), element(), Classes.readOnly, readonly);
        }
    }

    interface Required<E extends Element, B extends TypedBuilder<E, B>> extends TypedBuilder<E, B>, IsElement<E> {

        /** Same as {@linkplain #required(boolean) required(true)} */
        default B required() {
            return required(true);
        }

        /** Adds/removes {@linkplain Classes#modifier(String) modifier(required)} */
        default B required(boolean required) {
            return toggleModifier(that(), element(), Classes.required, required);
        }
    }

    static <E extends Element, B extends TypedBuilder<E, B>> B toggleModifier(B builder, E element,
            String modifier, boolean flag) {
        if (flag) {
            element.classList.add(modifier(modifier));
        } else {
            element.classList.remove(modifier(modifier));
        }
        return builder;
    }
}

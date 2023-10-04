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

public interface Modifiers {

    interface Disabled<T> {

        /** Same as {@linkplain #disabled(boolean) disabled(true)} */
        default T disabled() {
            return disabled(true);
        }

        T disabled(boolean disabled);
    }

    interface Invalid<T> {

        /** Same as {@linkplain #invalid(boolean) invalid(true)} */
        default T invalid() {
            return invalid(true);
        }

        T invalid(boolean disabled);
    }

    interface Plain<T> {

        /** Same as {@linkplain #plain(boolean) plain(true)} */
        default T plain() {
            return plain(true);
        }

        T plain(boolean disabled);
    }

    interface Readonly<T> {

        /** Same as {@linkplain #readonly(boolean) readonly(true)} */
        default T readonly() {
            return readonly(true);
        }

        T readonly(boolean disabled);
    }

    interface Required<T> {

        /** Same as {@linkplain #required(boolean) required(true)} */
        default T required() {
            return required(true);
        }

        T required(boolean disabled);
    }
}

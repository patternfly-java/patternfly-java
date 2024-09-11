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
package org.patternfly.filter;

/**
 * Represents the logical operators used for combining multiple {@link FilterAttribute}s of a {@link Filter}.
 * <p>
 * This enum is used to determine whether all conditions must be met ('AND') or at least one condition must be met ('OR') when
 * filtering objects.
 */
public enum FilterOperator {

    /**
     * Logical operator used to combine multiple filter attributes, requiring all conditions to be met for the filter to pass.
     */
    AND,

    /**
     * Logical operator used to combine multiple filter attributes, requiring at least one condition to be met for the filter to
     * pass.
     */
    OR
}

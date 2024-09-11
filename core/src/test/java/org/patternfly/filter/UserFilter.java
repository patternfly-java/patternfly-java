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

import java.time.LocalDate;
import java.util.List;

class UserFilter extends Filter<User> {

    static final String MATCH = "match";
    static final String GENDER = "gender";
    static final String OVER_18 = "over-18";
    static final String COUNTRIES = "countries";
    static final String REGISTERED_AFTER = "registered-after";

    UserFilter(FilterOperator operator) {
        super(operator);
        add(new FilterAttribute<>(MATCH, User::match));
        add(new FilterAttribute<User, String>(GENDER, (user, gender) -> user.gender.equals(gender)));
        add(new FilterAttribute<User, Boolean>(OVER_18, (user, over18) -> over18 == user.dob.age >= 18));
        add(new FilterAttribute<User, List<String>>(COUNTRIES, (user, countries) -> countries.contains(user.nat)));
        add(new FilterAttribute<User, LocalDate>(REGISTERED_AFTER, (user, date) -> user.registered.localDate().isAfter(date)));
    }
}

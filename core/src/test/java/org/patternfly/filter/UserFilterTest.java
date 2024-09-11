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

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.patternfly.filter.FilterOperator.AND;
import static org.patternfly.filter.User.users;
import static org.patternfly.filter.UserFilter.COUNTRIES;
import static org.patternfly.filter.UserFilter.GENDER;
import static org.patternfly.filter.UserFilter.MATCH;
import static org.patternfly.filter.UserFilter.OVER_18;
import static org.patternfly.filter.UserFilter.REGISTERED_AFTER;

class UserFilterTest {

    @Test
    void filter() {
        List<String> countries = List.of("DE", "FI", "GB");
        LocalDate year2k = LocalDate.of(2000, 1, 1);

        UserFilter filter = new UserFilter(AND);
        filter.set(MATCH, "h");
        filter.set(GENDER, "female");
        filter.set(OVER_18, true);
        filter.set(COUNTRIES, countries);
        filter.set(REGISTERED_AFTER, year2k);

        List<User> filtered = filter.filter(users());
        assertEquals(4, filtered.size());
        for (User user : filtered) {
            assertTrue(user.match("h"), user + " does not match 'h'");
            assertEquals("female", user.gender, user + " is not female");
            assertTrue(user.dob.age >= 18, user + " is not over 18");
            assertTrue(countries.contains(user.nat), user + " is not from " + countries);
            assertTrue(user.registered.localDate().isAfter(year2k), user + " is not registered after " + year2k);
        }
    }
}

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

import java.util.List;

import org.patternfly.filter.Filter;
import org.patternfly.filter.FilterAttribute;
import org.patternfly.filter.FilterOperator;

import static java.util.Arrays.asList;

@SuppressWarnings({"Convert2Diamond", "unused"})
public class FilterDemo {

    public void filterDemo() {
        // @start region = filter
        Filter<String> filter = new Filter<>(FilterOperator.AND);
        filter.add(new FilterAttribute<String, String>("startsWith", String::startsWith));
        filter.add(new FilterAttribute<String, String>("contains", String::contains));
        filter.add(new FilterAttribute<String, String>("endsWith", String::endsWith));
        filter.add(new FilterAttribute<String, Boolean>("lowercase",
                (string, lowercase) -> lowercase == string.toLowerCase().equals(string)));

        filter.set("startsWith", "f");
        filter.set("contains", "o");
        filter.set("endsWith", "o");
        filter.set("lowercase", true);
        List<String> filtered = filter.filter(asList("foo", "fOo", "FoO", "bar")); // [foo]
        // @end region = filter
    }
}

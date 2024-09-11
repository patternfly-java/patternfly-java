import java.util.List;

import org.patternfly.filter.Filter;
import org.patternfly.filter.FilterAttribute;
import org.patternfly.filter.FilterOperator;

import static java.util.Arrays.asList;

@SuppressWarnings("Convert2Diamond")
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

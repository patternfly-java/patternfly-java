package org.patternfly.showcase.model;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import org.patternfly.showcase.ResourceBundle;

import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

import static elemental2.core.Global.JSON;

public class Discography {

    public static JsPropertyMap<Record> data;

    static {
        data = Js.cast(JSON.parse(ResourceBundle.rhcp));
    }

    public static List<Record> records(Predicate<Record> predicate) {
        List<Record> records = new ArrayList<>();
        data.forEach(title -> {
            Record record = data.get(title);
            if (predicate.test(record)) {
                records.add(record);
            }
        });
        return records;
    }
}

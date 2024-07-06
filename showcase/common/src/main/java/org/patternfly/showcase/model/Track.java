package org.patternfly.showcase.model;

import java.util.List;

import elemental2.core.JsArray;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

import static java.util.Collections.emptyList;

@JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "Object")
public class Track {

    public int track;
    public String title;
    public JsArray<String> writer;
    public String length;

    @JsOverlay
    public final List<String> writer() {
        return writer == null ? emptyList() : writer.asList();
    }
}

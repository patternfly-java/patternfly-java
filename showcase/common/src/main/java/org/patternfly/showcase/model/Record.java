package org.patternfly.showcase.model;

import elemental2.core.JsArray;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "Object")
public class Record {

    public String title;
    public String released;
    public int year;
    public String url;
    public String cover;
    public JsArray<Track> tracks;
}

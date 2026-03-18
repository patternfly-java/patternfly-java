package org.patternfly.showcase.model;

import elemental2.core.JsArray;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "Object")
public class File {

    public String id;
    public String name;
    public String description;
    public String icon;
    public JsPropertyMap<String> meta;
    public JsArray<File> children;
}

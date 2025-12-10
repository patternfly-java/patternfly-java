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
package org.patternfly.showcase.chart;

import org.gwtproject.safehtml.shared.SafeHtml;
import org.gwtproject.safehtml.shared.SafeHtmlUtils;

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

import static org.patternfly.showcase.ApiDoc.API_DOC_BASE;

@JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "Object")
public class Chart {

    public String name;
    public String title;
    public String summary;
    public String route;
    public String clazz;

    @JsOverlay
    public final boolean implemented() {
        return clazz != null && route != null;
    }

    @JsOverlay
    public final SafeHtml summary() {
        return SafeHtmlUtils.fromTrustedString(summary);
    }

    @JsOverlay
    public final String apiDoc() {
        return API_DOC_BASE + clazz.replace('.', '/') + ".html";
    }

    @JsOverlay
    public final String designGuidelines() {
        return "https://www.patternfly.org/charts/" + name + "-chart/design-guidelines";
    }
}

/*
 * Copyright © 2023 Treblereel
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

package org.treblereel.j2cl.processors.common.injectors;

import elemental2.core.Reflect;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLDocument;
import elemental2.dom.HTMLScriptElement;
import elemental2.dom.Window;
import jsinterop.annotations.JsFunction;

public class ScriptInjector {

  private final HTMLScriptElement scriptElement;
  public Window window = DomGlobal.window;

  private ScriptInjector(HTMLScriptElement scriptElement) {
    this.scriptElement = scriptElement;
  }

  public static ScriptInjector fromString(String contents) {
    HTMLScriptElement element = createElement(null, null);
    element.text = contents;
    return new ScriptInjector(element);
  }

  private static HTMLScriptElement createElement(Callback onResolve, Callback onReject) {
    HTMLScriptElement script = (HTMLScriptElement) DomGlobal.document.createElement("script");
    if (onResolve != null) {
      script.addEventListener("load", (e) -> onResolve.accept(script));
    }
    if (onReject != null) {
      script.addEventListener("error", (e) -> onReject.accept(script));
    }
    script.type = "text/javascript";
    return script;
  }

  public static ScriptInjector fromUrl(String url) {
    return fromUrl(url, null, null);
  }

  public static ScriptInjector fromUrl(String url, Callback onResolve, Callback onReject) {
    HTMLScriptElement element = createElement(onResolve, onReject);
    element.src = url;
    return new ScriptInjector(element);
  }

  public static ScriptInjector fromUrl(String url, Callback onResolve) {
    return fromUrl(url, onResolve, null);
  }

  public ScriptInjector setWindow(Window window) {
    this.window = window;
    return this;
  }

  public void inject() {
    ((HTMLDocument) Reflect.get(window, "document")).head.appendChild(scriptElement);
  }

  @JsFunction
  @FunctionalInterface
  public interface Callback {
    void accept(HTMLScriptElement script);
  }
}

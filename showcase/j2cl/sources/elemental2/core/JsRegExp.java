/*
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package elemental2.core;

import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, name = "RegExp", namespace = JsPackage.GLOBAL)
public class JsRegExp {
  public static String $1;
  public static String $2;
  public static String $3;
  public static String $4;
  public static String $5;
  public static String $6;
  public static String $7;
  public static String $8;
  public static String $9;
  public static String input;
  public static String lastMatch;
  public static String lastParen;
  public static String leftContext;
  public static String rightContext;
  public boolean dotAll;
  public String flags;
  public boolean global;
  public boolean ignoreCase;
  public int lastIndex;
  public boolean multiline;
  public String source;
  public boolean sticky;
  public boolean unicode;

  public JsRegExp() {}

  public JsRegExp(Object pattern, Object flags) {}

  public JsRegExp(Object pattern) {}

  @Deprecated
  public native void compile(String pattern, Object flags);

  @Deprecated
  public native void compile(String pattern);

  public native RegExpResult exec(String str);

  public native boolean test(String str);

  @JsMethod(name = "toString")
  public native String toString_();
}

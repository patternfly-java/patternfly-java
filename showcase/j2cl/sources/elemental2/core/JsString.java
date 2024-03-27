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

import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, name = "String", namespace = JsPackage.GLOBAL)
public class JsString implements JsIterable<String> {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface LocaleCompareLocalesUnionType {
    @JsOverlay
    static JsString.LocaleCompareLocalesUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default JsArray<String> asJsArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isJsArray() {
      return (Object) this instanceof JsArray;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface MatchAllRegexpUnionType {
    @JsOverlay
    static JsString.MatchAllRegexpUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default JsRegExp asJsRegExp() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isJsRegExp() {
      return (Object) this instanceof JsRegExp;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsFunction
  public interface ReplaceAllReplacementFn {
    Object onInvoke(String p0, Object... p1);
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ReplaceAllReplacementUnionType {
    @JsOverlay
    static JsString.ReplaceAllReplacementUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default JsString.ReplaceAllReplacementFn asReplaceAllReplacementFn() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isReplaceAllReplacementFn() {
      return (Object) this instanceof JsString.ReplaceAllReplacementFn;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ReplaceAllSearchValueUnionType {
    @JsOverlay
    static JsString.ReplaceAllSearchValueUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default JsRegExp asJsRegExp() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isJsRegExp() {
      return (Object) this instanceof JsRegExp;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ReplacePatternUnionType {
    @JsOverlay
    static JsString.ReplacePatternUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default JsRegExp asJsRegExp() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isJsRegExp() {
      return (Object) this instanceof JsRegExp;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsFunction
  public interface ReplaceReplacementFn {
    Object onInvoke(String p0, Object... p1);
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ReplaceReplacementUnionType {
    @JsOverlay
    static JsString.ReplaceReplacementUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default JsString.ReplaceReplacementFn asReplaceReplacementFn() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isReplaceReplacementFn() {
      return (Object) this instanceof JsString.ReplaceReplacementFn;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface SearchPatternUnionType {
    @JsOverlay
    static JsString.SearchPatternUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default JsRegExp asJsRegExp() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isJsRegExp() {
      return (Object) this instanceof JsRegExp;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ToLocaleLowerCaseLocalesUnionType {
    @JsOverlay
    static JsString.ToLocaleLowerCaseLocalesUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default JsArray<String> asJsArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isJsArray() {
      return (Object) this instanceof JsArray;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ToLocaleUpperCaseLocalesUnionType {
    @JsOverlay
    static JsString.ToLocaleUpperCaseLocalesUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default JsArray<String> asJsArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isJsArray() {
      return (Object) this instanceof JsArray;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  public static native String fromCharCode(int... var_args);

  public static native String fromCodePoint(int codePoint, int... var_args);

  public static native String raw(ITemplateArray template, Object... var_args);

  public int length;

  public JsString() {}

  public JsString(Object str) {}

  public native String anchor();

  public native String at(int index);

  public native String big();

  public native String blink();

  public native String bold();

  public native String charAt(int index);

  public native int charCodeAt();

  public native int charCodeAt(int index);

  public native int codePointAt(int index);

  public native String concat(Object... var_args);

  public native boolean endsWith(String searchString, int position);

  public native boolean endsWith(String searchString);

  public native String fixed();

  public native String fontcolor(String color);

  public native String fontsize(int size);

  public native boolean includes(String searchString, int position);

  public native boolean includes(String searchString);

  public native int indexOf(String searchValue, int fromIndex);

  public native int indexOf(String searchValue);

  public native String italics();

  public native int lastIndexOf(String searchValue, int fromIndex);

  public native int lastIndexOf(String searchValue);

  public native String link(String hrefAttribute);

  @JsOverlay
  public final int localeCompare(String compareString, JsArray<String> locales, JsObject options) {
    return localeCompare(
        compareString, Js.<JsString.LocaleCompareLocalesUnionType>uncheckedCast(locales), options);
  }

  @JsOverlay
  public final int localeCompare(String compareString, JsArray<String> locales, Object options) {
    return localeCompare(compareString, locales, Js.<JsObject>uncheckedCast(options));
  }

  @JsOverlay
  public final int localeCompare(String compareString, JsArray<String> locales) {
    return localeCompare(
        compareString, Js.<JsString.LocaleCompareLocalesUnionType>uncheckedCast(locales));
  }

  public native int localeCompare(
      String compareString, JsString.LocaleCompareLocalesUnionType locales, JsObject options);

  @JsOverlay
  public final int localeCompare(
      String compareString, JsString.LocaleCompareLocalesUnionType locales, Object options) {
    return localeCompare(compareString, locales, Js.<JsObject>uncheckedCast(options));
  }

  public native int localeCompare(
      String compareString, JsString.LocaleCompareLocalesUnionType locales);

  @JsOverlay
  public final int localeCompare(String compareString, String locales, JsObject options) {
    return localeCompare(
        compareString, Js.<JsString.LocaleCompareLocalesUnionType>uncheckedCast(locales), options);
  }

  @JsOverlay
  public final int localeCompare(String compareString, String[] locales, JsObject options) {
    return localeCompare(compareString, Js.<JsArray<String>>uncheckedCast(locales), options);
  }

  @JsOverlay
  public final int localeCompare(String compareString, String locales, Object options) {
    return localeCompare(compareString, locales, Js.<JsObject>uncheckedCast(options));
  }

  @JsOverlay
  public final int localeCompare(String compareString, String[] locales, Object options) {
    return localeCompare(compareString, locales, Js.<JsObject>uncheckedCast(options));
  }

  @JsOverlay
  public final int localeCompare(String compareString, String locales) {
    return localeCompare(
        compareString, Js.<JsString.LocaleCompareLocalesUnionType>uncheckedCast(locales));
  }

  @JsOverlay
  public final int localeCompare(String compareString, String[] locales) {
    return localeCompare(compareString, Js.<JsArray<String>>uncheckedCast(locales));
  }

  public native int localeCompare(String compareString);

  public native JsArray<String> match(Object regexp);

  @JsOverlay
  public final JsIteratorIterable<RegExpResult> matchAll(JsRegExp regexp) {
    return matchAll(Js.<JsString.MatchAllRegexpUnionType>uncheckedCast(regexp));
  }

  public native JsIteratorIterable<RegExpResult> matchAll(JsString.MatchAllRegexpUnionType regexp);

  @JsOverlay
  public final JsIteratorIterable<RegExpResult> matchAll(String regexp) {
    return matchAll(Js.<JsString.MatchAllRegexpUnionType>uncheckedCast(regexp));
  }

  public native String normalize();

  public native String normalize(String form);

  public native String padEnd(int targetLength, String padString);

  public native String padEnd(int targetLength);

  public native String padStart(int targetLength, String padString);

  public native String padStart(int targetLength);

  public native String quote();

  public native String repeat(int count);

  @JsOverlay
  public final String replace(JsRegExp pattern, JsString.ReplaceReplacementFn replacement) {
    return replace(
        Js.<JsString.ReplacePatternUnionType>uncheckedCast(pattern),
        Js.<JsString.ReplaceReplacementUnionType>uncheckedCast(replacement));
  }

  @JsOverlay
  public final String replace(JsRegExp pattern, JsString.ReplaceReplacementUnionType replacement) {
    return replace(Js.<JsString.ReplacePatternUnionType>uncheckedCast(pattern), replacement);
  }

  @JsOverlay
  public final String replace(JsRegExp pattern, String replacement) {
    return replace(
        Js.<JsString.ReplacePatternUnionType>uncheckedCast(pattern),
        Js.<JsString.ReplaceReplacementUnionType>uncheckedCast(replacement));
  }

  @JsOverlay
  public final String replace(
      JsString.ReplacePatternUnionType pattern, JsString.ReplaceReplacementFn replacement) {
    return replace(pattern, Js.<JsString.ReplaceReplacementUnionType>uncheckedCast(replacement));
  }

  public native String replace(
      JsString.ReplacePatternUnionType pattern, JsString.ReplaceReplacementUnionType replacement);

  @JsOverlay
  public final String replace(JsString.ReplacePatternUnionType pattern, String replacement) {
    return replace(pattern, Js.<JsString.ReplaceReplacementUnionType>uncheckedCast(replacement));
  }

  @JsOverlay
  public final String replace(String pattern, JsString.ReplaceReplacementFn replacement) {
    return replace(
        Js.<JsString.ReplacePatternUnionType>uncheckedCast(pattern),
        Js.<JsString.ReplaceReplacementUnionType>uncheckedCast(replacement));
  }

  @JsOverlay
  public final String replace(String pattern, JsString.ReplaceReplacementUnionType replacement) {
    return replace(Js.<JsString.ReplacePatternUnionType>uncheckedCast(pattern), replacement);
  }

  @JsOverlay
  public final String replace(String pattern, String replacement) {
    return replace(
        Js.<JsString.ReplacePatternUnionType>uncheckedCast(pattern),
        Js.<JsString.ReplaceReplacementUnionType>uncheckedCast(replacement));
  }

  @JsOverlay
  public final String replaceAll(
      JsRegExp searchValue, JsString.ReplaceAllReplacementFn replacement) {
    return replaceAll(
        Js.<JsString.ReplaceAllSearchValueUnionType>uncheckedCast(searchValue),
        Js.<JsString.ReplaceAllReplacementUnionType>uncheckedCast(replacement));
  }

  @JsOverlay
  public final String replaceAll(
      JsRegExp searchValue, JsString.ReplaceAllReplacementUnionType replacement) {
    return replaceAll(
        Js.<JsString.ReplaceAllSearchValueUnionType>uncheckedCast(searchValue), replacement);
  }

  @JsOverlay
  public final String replaceAll(JsRegExp searchValue, String replacement) {
    return replaceAll(
        Js.<JsString.ReplaceAllSearchValueUnionType>uncheckedCast(searchValue),
        Js.<JsString.ReplaceAllReplacementUnionType>uncheckedCast(replacement));
  }

  @JsOverlay
  public final String replaceAll(
      JsString.ReplaceAllSearchValueUnionType searchValue,
      JsString.ReplaceAllReplacementFn replacement) {
    return replaceAll(
        searchValue, Js.<JsString.ReplaceAllReplacementUnionType>uncheckedCast(replacement));
  }

  public native String replaceAll(
      JsString.ReplaceAllSearchValueUnionType searchValue,
      JsString.ReplaceAllReplacementUnionType replacement);

  @JsOverlay
  public final String replaceAll(
      JsString.ReplaceAllSearchValueUnionType searchValue, String replacement) {
    return replaceAll(
        searchValue, Js.<JsString.ReplaceAllReplacementUnionType>uncheckedCast(replacement));
  }

  @JsOverlay
  public final String replaceAll(String searchValue, JsString.ReplaceAllReplacementFn replacement) {
    return replaceAll(
        Js.<JsString.ReplaceAllSearchValueUnionType>uncheckedCast(searchValue),
        Js.<JsString.ReplaceAllReplacementUnionType>uncheckedCast(replacement));
  }

  @JsOverlay
  public final String replaceAll(
      String searchValue, JsString.ReplaceAllReplacementUnionType replacement) {
    return replaceAll(
        Js.<JsString.ReplaceAllSearchValueUnionType>uncheckedCast(searchValue), replacement);
  }

  @JsOverlay
  public final String replaceAll(String searchValue, String replacement) {
    return replaceAll(
        Js.<JsString.ReplaceAllSearchValueUnionType>uncheckedCast(searchValue),
        Js.<JsString.ReplaceAllReplacementUnionType>uncheckedCast(replacement));
  }

  @JsOverlay
  public final int search(JsRegExp pattern) {
    return search(Js.<JsString.SearchPatternUnionType>uncheckedCast(pattern));
  }

  public native int search(JsString.SearchPatternUnionType pattern);

  @JsOverlay
  public final int search(String pattern) {
    return search(Js.<JsString.SearchPatternUnionType>uncheckedCast(pattern));
  }

  public native String slice(int begin, int end);

  public native String slice(int begin);

  public native String small();

  public native JsArray<String> split();

  public native JsArray<String> split(Object separator, int limit);

  public native JsArray<String> split(Object separator);

  public native boolean startsWith(String searchString, int position);

  public native boolean startsWith(String searchString);

  public native String strike();

  public native String sub();

  public native String substr(int start, int length);

  public native String substr(int start);

  public native String substring(int start, int end);

  public native String substring(int start);

  public native String sup();

  public native String toLocaleLowerCase();

  @JsOverlay
  public final String toLocaleLowerCase(JsArray<String> locales) {
    return toLocaleLowerCase(Js.<JsString.ToLocaleLowerCaseLocalesUnionType>uncheckedCast(locales));
  }

  @JsOverlay
  public final String toLocaleLowerCase(String locales) {
    return toLocaleLowerCase(Js.<JsString.ToLocaleLowerCaseLocalesUnionType>uncheckedCast(locales));
  }

  @JsOverlay
  public final String toLocaleLowerCase(String[] locales) {
    return toLocaleLowerCase(Js.<JsArray<String>>uncheckedCast(locales));
  }

  public native String toLocaleLowerCase(JsString.ToLocaleLowerCaseLocalesUnionType locales);

  public native String toLocaleUpperCase();

  @JsOverlay
  public final String toLocaleUpperCase(JsArray<String> locales) {
    return toLocaleUpperCase(Js.<JsString.ToLocaleUpperCaseLocalesUnionType>uncheckedCast(locales));
  }

  @JsOverlay
  public final String toLocaleUpperCase(String locales) {
    return toLocaleUpperCase(Js.<JsString.ToLocaleUpperCaseLocalesUnionType>uncheckedCast(locales));
  }

  @JsOverlay
  public final String toLocaleUpperCase(String[] locales) {
    return toLocaleUpperCase(Js.<JsArray<String>>uncheckedCast(locales));
  }

  public native String toLocaleUpperCase(JsString.ToLocaleUpperCaseLocalesUnionType locales);

  public native String toLowerCase();

  public native String toSource();

  @JsMethod(name = "toString")
  public native String toString_();

  public native String toUpperCase();

  public native String trim();

  public native String trimEnd();

  public native String trimLeft();

  public native String trimRight();

  public native String trimStart();

  public native String valueOf();
}

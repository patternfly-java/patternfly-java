goog.module('javaemul.internal.ValueType');

goog.require('goog.reflect');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.util.Arrays');
goog.require('java.util.StringJoiner');
goog.require('javaemul.internal.Constructor');
goog.require('javaemul.internal.Constructor.$Overlay');
goog.require('javaemul.internal.JsUtils');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Objects');

const ValueType = goog.require('javaemul.internal.ValueType$impl');
exports = ValueType;

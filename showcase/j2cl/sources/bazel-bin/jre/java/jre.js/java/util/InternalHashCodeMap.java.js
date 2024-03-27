goog.module('java.util.InternalHashCodeMap');

goog.require('java.lang.Iterable');
goog.require('java.lang.Object');
goog.require('java.util.AbstractHashMap');
goog.require('java.util.AbstractMap.SimpleEntry');
goog.require('java.util.InternalHashCodeMap.$1');
goog.require('java.util.InternalJsMap.$Overlay');
goog.require('java.util.Iterator');
goog.require('java.util.Map.Entry');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('javaemul.internal.ArrayHelper');
goog.require('javaemul.internal.JsUtils');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');

const InternalHashCodeMap = goog.require('java.util.InternalHashCodeMap$impl');
exports = InternalHashCodeMap;

goog.module('java.util.InternalStringMap');

goog.require('java.lang.Iterable');
goog.require('java.lang.Object');
goog.require('java.util.AbstractHashMap');
goog.require('java.util.InternalJsMap.$Overlay');
goog.require('java.util.InternalJsMap.IteratorEntry.$Overlay');
goog.require('java.util.InternalStringMap.$1');
goog.require('java.util.InternalStringMap.$2');
goog.require('java.util.Iterator');
goog.require('java.util.Map.Entry');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('javaemul.internal.JsUtils');
goog.require('nativebootstrap.Util');

const InternalStringMap = goog.require('java.util.InternalStringMap$impl');
exports = InternalStringMap;

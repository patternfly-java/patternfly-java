goog.module('java.util.AbstractHashMap');

goog.require('java.lang.Iterable');
goog.require('java.lang.String');
goog.require('java.util.AbstractHashMap.EntrySet');
goog.require('java.util.AbstractMap');
goog.require('java.util.InternalHashCodeMap');
goog.require('java.util.InternalStringMap');
goog.require('java.util.Map');
goog.require('java.util.Map.Entry');
goog.require('java.util.Set');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('javaemul.internal.JsUtils');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const AbstractHashMap = goog.require('java.util.AbstractHashMap$impl');
exports = AbstractHashMap;

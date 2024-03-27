goog.module('java.util.AbstractMap');

goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.AbstractMap.$1');
goog.require('java.util.AbstractMap.$2');
goog.require('java.util.AbstractMap.SimpleEntry');
goog.require('java.util.Collection');
goog.require('java.util.Collections');
goog.require('java.util.Map');
goog.require('java.util.Map.Entry');
goog.require('java.util.Objects');
goog.require('java.util.Set');
goog.require('java.util.StringJoiner');
goog.require('java.util.function.BiConsumer');
goog.require('java.util.function.BiFunction');
goog.require('java.util.function.Function');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const AbstractMap = goog.require('java.util.AbstractMap$impl');
exports = AbstractMap;

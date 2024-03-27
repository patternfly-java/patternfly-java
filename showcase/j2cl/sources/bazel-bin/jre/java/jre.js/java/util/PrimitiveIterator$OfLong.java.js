goog.module('java.util.PrimitiveIterator.OfLong');

goog.require('java.lang.Long');
goog.require('java.util.Iterator');
goog.require('java.util.PrimitiveIterator');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.LongConsumer');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const OfLong = goog.require('java.util.PrimitiveIterator.OfLong$impl');
exports = OfLong;

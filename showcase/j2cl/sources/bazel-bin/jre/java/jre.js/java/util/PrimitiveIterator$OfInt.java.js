goog.module('java.util.PrimitiveIterator.OfInt');

goog.require('java.lang.Integer');
goog.require('java.util.Iterator');
goog.require('java.util.PrimitiveIterator');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.IntConsumer');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const OfInt = goog.require('java.util.PrimitiveIterator.OfInt$impl');
exports = OfInt;

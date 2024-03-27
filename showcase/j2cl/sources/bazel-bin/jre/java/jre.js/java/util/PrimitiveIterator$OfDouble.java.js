goog.module('java.util.PrimitiveIterator.OfDouble');

goog.require('java.util.Iterator');
goog.require('java.util.PrimitiveIterator');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.DoubleConsumer');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const OfDouble = goog.require('java.util.PrimitiveIterator.OfDouble$impl');
exports = OfDouble;

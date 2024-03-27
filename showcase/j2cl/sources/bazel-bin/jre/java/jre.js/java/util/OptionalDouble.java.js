goog.module('java.util.OptionalDouble');

goog.require('java.lang.Double');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.lang.Throwable');
goog.require('java.util.function.DoubleConsumer');
goog.require('java.util.function.DoubleSupplier');
goog.require('java.util.function.Supplier');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const OptionalDouble = goog.require('java.util.OptionalDouble$impl');
exports = OptionalDouble;

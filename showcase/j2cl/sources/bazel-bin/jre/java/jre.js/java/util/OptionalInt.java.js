goog.module('java.util.OptionalInt');

goog.require('java.lang.Integer');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.lang.Throwable');
goog.require('java.util.function.IntConsumer');
goog.require('java.util.function.IntSupplier');
goog.require('java.util.function.Supplier');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const OptionalInt = goog.require('java.util.OptionalInt$impl');
exports = OptionalInt;

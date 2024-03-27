goog.module('java.util.OptionalLong');

goog.require('java.lang.Long');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.lang.Throwable');
goog.require('java.util.function.LongConsumer');
goog.require('java.util.function.LongSupplier');
goog.require('java.util.function.Supplier');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const OptionalLong = goog.require('java.util.OptionalLong$impl');
exports = OptionalLong;

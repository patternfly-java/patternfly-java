goog.module('java.util.function.Predicate');

goog.require('java.util.Objects');
goog.require('java.util.function.Predicate.$LambdaAdaptor');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Objects');

const Predicate = goog.require('java.util.function.Predicate$impl');
exports = Predicate;

goog.module('java.util.stream.Collector');

goog.require('java.util.Set');
goog.require('java.util.function.BiConsumer');
goog.require('java.util.function.BinaryOperator');
goog.require('java.util.function.Function');
goog.require('java.util.function.Supplier');
goog.require('java.util.stream.Collector.Characteristics');
goog.require('java.util.stream.CollectorImpl');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');

const Collector = goog.require('java.util.stream.Collector$impl');
exports = Collector;

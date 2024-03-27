goog.module('java.util.stream.CollectorImpl');

goog.require('java.lang.Object');
goog.require('java.util.Collections');
goog.require('java.util.Set');
goog.require('java.util.function.BiConsumer');
goog.require('java.util.function.BinaryOperator');
goog.require('java.util.function.Function');
goog.require('java.util.function.Supplier');
goog.require('java.util.stream.Collector');
goog.require('java.util.stream.Collector.Characteristics');
goog.require('nativebootstrap.Util');

const CollectorImpl = goog.require('java.util.stream.CollectorImpl$impl');
exports = CollectorImpl;

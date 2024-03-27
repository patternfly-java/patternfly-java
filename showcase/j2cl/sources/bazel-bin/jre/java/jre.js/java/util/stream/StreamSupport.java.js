goog.module('java.util.stream.StreamSupport');

goog.require('java.lang.Object');
goog.require('java.util.Spliterator');
goog.require('java.util.Spliterator.OfDouble');
goog.require('java.util.Spliterator.OfInt');
goog.require('java.util.Spliterator.OfLong');
goog.require('java.util.function.Function');
goog.require('java.util.function.Supplier');
goog.require('java.util.stream.DoubleStream');
goog.require('java.util.stream.DoubleStreamImpl');
goog.require('java.util.stream.IntStream');
goog.require('java.util.stream.IntStreamImpl');
goog.require('java.util.stream.LongStream');
goog.require('java.util.stream.LongStreamImpl');
goog.require('java.util.stream.Stream');
goog.require('java.util.stream.StreamImpl');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const StreamSupport = goog.require('java.util.stream.StreamSupport$impl');
exports = StreamSupport;

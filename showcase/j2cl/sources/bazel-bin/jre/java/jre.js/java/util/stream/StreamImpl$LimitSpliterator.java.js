goog.module('java.util.stream.StreamImpl.LimitSpliterator');

goog.require('java.lang.Long');
goog.require('java.lang.Math');
goog.require('java.util.Comparator');
goog.require('java.util.Spliterator');
goog.require('java.util.Spliterators.AbstractSpliterator');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.LongUtils');
goog.require('vmbootstrap.Primitives');

const LimitSpliterator = goog.require('java.util.stream.StreamImpl.LimitSpliterator$impl');
exports = LimitSpliterator;

goog.module('java.lang.CharSequence');

goog.require('java.lang.CharSequence.$1');
goog.require('java.lang.HasCharSequenceTypeMarker.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.Spliterator');
goog.require('java.util.Spliterators');
goog.require('java.util.function.Supplier');
goog.require('java.util.stream.IntStream');
goog.require('java.util.stream.StreamSupport');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.CharSequences');
goog.require('vmbootstrap.Primitives');

const CharSequence = goog.require('java.lang.CharSequence$impl');
exports = CharSequence;

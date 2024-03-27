goog.module('java.util.Spliterators.EmptySpliterator');

goog.require('java.lang.Object');
goog.require('java.util.Comparator');
goog.require('java.util.Spliterator');
goog.require('java.util.Spliterator.OfDouble');
goog.require('java.util.Spliterator.OfInt');
goog.require('java.util.Spliterator.OfLong');
goog.require('java.util.Spliterators.EmptySpliterator.OfDouble');
goog.require('java.util.Spliterators.EmptySpliterator.OfInt');
goog.require('java.util.Spliterators.EmptySpliterator.OfLong');
goog.require('java.util.Spliterators.EmptySpliterator.OfRef');
goog.require('java.util.function.Consumer');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');

const EmptySpliterator = goog.require('java.util.Spliterators.EmptySpliterator$impl');
exports = EmptySpliterator;

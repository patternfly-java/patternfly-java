goog.module('java.util.Spliterators.IteratorSpliterator');

goog.require('java.lang.Long');
goog.require('java.lang.Object');
goog.require('java.util.Collection');
goog.require('java.util.Comparator');
goog.require('java.util.Iterator');
goog.require('java.util.Spliterator');
goog.require('java.util.Spliterators');
goog.require('java.util.function.Consumer');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Primitives');

const IteratorSpliterator = goog.require('java.util.Spliterators.IteratorSpliterator$impl');
exports = IteratorSpliterator;

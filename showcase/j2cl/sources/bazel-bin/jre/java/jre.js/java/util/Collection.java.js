goog.module('java.util.Collection');

goog.require('java.lang.Iterable');
goog.require('java.util.Spliterator');
goog.require('java.util.Spliterators');
goog.require('java.util.function.Predicate');
goog.require('java.util.stream.Stream');
goog.require('java.util.stream.StreamSupport');
goog.require('javaemul.internal.CollectionHelper');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');

const Collection = goog.require('java.util.Collection$impl');
exports = Collection;

goog.module('java.util.AbstractCollection');

goog.require('java.lang.Iterable');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.Collection');
goog.require('java.util.Iterator');
goog.require('java.util.Objects');
goog.require('java.util.Spliterator');
goog.require('java.util.StringJoiner');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.Predicate');
goog.require('java.util.stream.Stream');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Exceptions');

const AbstractCollection = goog.require('java.util.AbstractCollection$impl');
exports = AbstractCollection;

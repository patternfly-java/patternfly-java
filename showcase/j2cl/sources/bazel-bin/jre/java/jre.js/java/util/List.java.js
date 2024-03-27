goog.module('java.util.List');

goog.require('java.util.Arrays');
goog.require('java.util.Collection');
goog.require('java.util.Comparator');
goog.require('java.util.ListIterator');
goog.require('java.util.Spliterator');
goog.require('java.util.Spliterators');
goog.require('java.util.function.UnaryOperator');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');

const List = goog.require('java.util.List$impl');
exports = List;

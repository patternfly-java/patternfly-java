goog.module('java.util.Collections.UnmodifiableSortedSet');

goog.require('java.util.Collections.UnmodifiableSet');
goog.require('java.util.Comparator');
goog.require('java.util.SortedSet');
goog.require('java.util.Spliterator');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Objects');

const UnmodifiableSortedSet = goog.require('java.util.Collections.UnmodifiableSortedSet$impl');
exports = UnmodifiableSortedSet;

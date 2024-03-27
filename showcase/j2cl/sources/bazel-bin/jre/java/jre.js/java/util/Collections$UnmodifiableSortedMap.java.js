goog.module('java.util.Collections.UnmodifiableSortedMap');

goog.require('java.util.Collections.UnmodifiableMap');
goog.require('java.util.Comparator');
goog.require('java.util.Map');
goog.require('java.util.SortedMap');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Objects');

const UnmodifiableSortedMap = goog.require('java.util.Collections.UnmodifiableSortedMap$impl');
exports = UnmodifiableSortedMap;

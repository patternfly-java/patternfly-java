goog.module('java.util.Collections.UnmodifiableList');

goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.Collection');
goog.require('java.util.Collections.UnmodifiableCollection');
goog.require('java.util.Collections.UnmodifiableListIterator');
goog.require('java.util.Comparator');
goog.require('java.util.List');
goog.require('java.util.ListIterator');
goog.require('java.util.Spliterator');
goog.require('java.util.function.UnaryOperator');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Objects');

const UnmodifiableList = goog.require('java.util.Collections.UnmodifiableList$impl');
exports = UnmodifiableList;

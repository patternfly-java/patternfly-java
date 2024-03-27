goog.module('java.util.Spliterator');

goog.require('java.lang.IllegalStateException');
goog.require('java.util.Comparator');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.LongUtils');

const Spliterator = goog.require('java.util.Spliterator$impl');
exports = Spliterator;

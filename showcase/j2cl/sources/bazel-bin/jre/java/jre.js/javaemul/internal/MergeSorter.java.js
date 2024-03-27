goog.module('javaemul.internal.MergeSorter');

goog.require('java.lang.Object');
goog.require('java.util.Comparator');
goog.require('javaemul.internal.ArrayHelper');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');

const MergeSorter = goog.require('javaemul.internal.MergeSorter$impl');
exports = MergeSorter;

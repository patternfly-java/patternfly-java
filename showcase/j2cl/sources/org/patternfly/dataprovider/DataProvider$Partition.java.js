goog.module('org.patternfly.dataprovider.DataProvider.Partition');

goog.require('java.lang.ArithmeticException');
goog.require('java.lang.IndexOutOfBoundsException');
goog.require('java.lang.Integer');
goog.require('java.util.AbstractList');
goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Primitives');

const Partition = goog.require('org.patternfly.dataprovider.DataProvider.Partition$impl');
exports = Partition;

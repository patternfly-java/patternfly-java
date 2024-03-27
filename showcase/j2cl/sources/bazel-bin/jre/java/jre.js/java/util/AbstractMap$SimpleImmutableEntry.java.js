goog.module('java.util.AbstractMap.SimpleImmutableEntry');

goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.AbstractMap.AbstractEntry');
goog.require('java.util.Map.Entry');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Exceptions');

const SimpleImmutableEntry = goog.require('java.util.AbstractMap.SimpleImmutableEntry$impl');
exports = SimpleImmutableEntry;

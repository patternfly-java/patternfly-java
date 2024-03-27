goog.module('java.lang.Long.BoxedValues');

goog.require('java.lang.Long');
goog.require('java.lang.Object');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Primitives');

const BoxedValues = goog.require('java.lang.Long.BoxedValues$impl');
exports = BoxedValues;

goog.module('java.util.Random');

goog.require('java.lang.Object');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.LongUtils');
goog.require('vmbootstrap.Primitives');
goog.require('vmbootstrap.primitives.$double');

const Random = goog.require('java.util.Random$impl');
exports = Random;

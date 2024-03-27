goog.module('java.util.concurrent.atomic.AtomicInteger');

goog.require('java.io.Serializable');
goog.require('java.lang.Integer');
goog.require('java.lang.Number');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Primitives');

const AtomicInteger = goog.require('java.util.concurrent.atomic.AtomicInteger$impl');
exports = AtomicInteger;

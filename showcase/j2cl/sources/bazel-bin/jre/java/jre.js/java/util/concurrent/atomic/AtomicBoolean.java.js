goog.module('java.util.concurrent.atomic.AtomicBoolean');

goog.require('java.io.Serializable');
goog.require('java.lang.Boolean');
goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');

const AtomicBoolean = goog.require('java.util.concurrent.atomic.AtomicBoolean$impl');
exports = AtomicBoolean;

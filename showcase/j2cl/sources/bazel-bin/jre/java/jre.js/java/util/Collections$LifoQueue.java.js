goog.module('java.util.Collections.LifoQueue');

goog.require('java.io.Serializable');
goog.require('java.util.AbstractQueue');
goog.require('java.util.Deque');
goog.require('java.util.Iterator');
goog.require('nativebootstrap.Util');

const LifoQueue = goog.require('java.util.Collections.LifoQueue$impl');
exports = LifoQueue;

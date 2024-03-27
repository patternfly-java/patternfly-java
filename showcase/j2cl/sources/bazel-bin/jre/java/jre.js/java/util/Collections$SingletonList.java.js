goog.module('java.util.Collections.SingletonList');

goog.require('java.io.Serializable');
goog.require('java.util.AbstractList');
goog.require('java.util.Objects');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');

const SingletonList = goog.require('java.util.Collections.SingletonList$impl');
exports = SingletonList;

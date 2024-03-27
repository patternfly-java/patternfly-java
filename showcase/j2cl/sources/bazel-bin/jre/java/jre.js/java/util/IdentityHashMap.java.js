goog.module('java.util.IdentityHashMap');

goog.require('java.io.Serializable');
goog.require('java.lang.Cloneable');
goog.require('java.lang.System');
goog.require('java.util.AbstractHashMap');
goog.require('java.util.Map');
goog.require('java.util.Map.Entry');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const IdentityHashMap = goog.require('java.util.IdentityHashMap$impl');
exports = IdentityHashMap;

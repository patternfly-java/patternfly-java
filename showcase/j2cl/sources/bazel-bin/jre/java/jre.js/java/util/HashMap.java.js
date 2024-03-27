goog.module('java.util.HashMap');

goog.require('java.io.Serializable');
goog.require('java.lang.Cloneable');
goog.require('java.util.AbstractHashMap');
goog.require('java.util.Map');
goog.require('java.util.Objects');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Objects');

const HashMap = goog.require('java.util.HashMap$impl');
exports = HashMap;

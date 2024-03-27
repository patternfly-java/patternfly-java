goog.module('java.util.HashSet');

goog.require('java.io.Serializable');
goog.require('java.lang.Cloneable');
goog.require('java.util.AbstractSet');
goog.require('java.util.Collection');
goog.require('java.util.HashMap');
goog.require('java.util.Iterator');
goog.require('java.util.Set');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');

const HashSet = goog.require('java.util.HashSet$impl');
exports = HashSet;

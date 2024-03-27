goog.module('java.util.Collections.SetFromMap');

goog.require('java.io.Serializable');
goog.require('java.lang.Boolean');
goog.require('java.util.AbstractSet');
goog.require('java.util.Iterator');
goog.require('java.util.Map');
goog.require('java.util.Set');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Objects');

const SetFromMap = goog.require('java.util.Collections.SetFromMap$impl');
exports = SetFromMap;

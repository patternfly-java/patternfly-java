goog.module('java.lang.Cloneable');

goog.require('java.lang.HasCloneableTypeMarker.$Overlay');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');

const Cloneable = goog.require('java.lang.Cloneable$impl');
exports = Cloneable;

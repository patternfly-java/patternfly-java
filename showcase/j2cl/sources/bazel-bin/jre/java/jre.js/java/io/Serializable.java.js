goog.module('java.io.Serializable');

goog.require('java.io.HasSerializableTypeMarker.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');

const Serializable = goog.require('java.io.Serializable$impl');
exports = Serializable;

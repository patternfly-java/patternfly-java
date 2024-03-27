goog.module('elemental2.dom.MediaDevices.$Overlay');

goog.require('elemental2.core.JsArray.$Overlay');
goog.require('elemental2.dom.MediaDeviceInfo.$Overlay');
goog.require('elemental2.dom.MediaStream.$Overlay');
goog.require('elemental2.dom.MediaTrackSupportedConstraints.$Overlay');
goog.require('elemental2.promise.Promise.$Overlay');

const $Overlay = goog.require('elemental2.dom.MediaDevices.$Overlay$impl');
/** @nodts */
exports = $Overlay;

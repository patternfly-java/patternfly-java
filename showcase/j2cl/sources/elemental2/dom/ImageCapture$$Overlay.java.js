goog.module('elemental2.dom.ImageCapture.$Overlay');

goog.require('elemental2.dom.Blob.$Overlay');
goog.require('elemental2.dom.ImageBitmap.$Overlay');
goog.require('elemental2.dom.MediaStreamTrack.$Overlay');
goog.require('elemental2.dom.PhotoCapabilities.$Overlay');
goog.require('elemental2.promise.Promise.$Overlay');
goog.require('nativebootstrap.Util');

const $Overlay = goog.require('elemental2.dom.ImageCapture.$Overlay$impl');
/** @nodts */
exports = $Overlay;

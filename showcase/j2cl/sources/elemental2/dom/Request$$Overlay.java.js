goog.module('elemental2.dom.Request.$Overlay');

goog.require('elemental2.core.ArrayBuffer.$Overlay');
goog.require('elemental2.dom.Blob.$Overlay');
goog.require('elemental2.dom.FormData.$Overlay');
goog.require('elemental2.dom.Headers.$Overlay');
goog.require('elemental2.promise.Promise.$Overlay');
goog.require('nativebootstrap.Util');

const $Overlay = goog.require('elemental2.dom.Request.$Overlay$impl');
/** @nodts */
exports = $Overlay;

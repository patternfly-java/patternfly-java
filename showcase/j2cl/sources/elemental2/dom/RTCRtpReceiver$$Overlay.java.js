goog.module('elemental2.dom.RTCRtpReceiver.$Overlay');

goog.require('elemental2.core.JsArray.$Overlay');
goog.require('elemental2.dom.MediaStreamTrack.$Overlay');
goog.require('elemental2.dom.RTCDtlsTransport.$Overlay');
goog.require('elemental2.dom.RTCRtpCapabilities.$Overlay');
goog.require('elemental2.dom.RTCRtpContributingSource.$Overlay');
goog.require('elemental2.dom.RTCRtpReceiveParameters.$Overlay');
goog.require('elemental2.dom.RTCStatsReport.$Overlay');
goog.require('elemental2.promise.Promise.$Overlay');
goog.require('nativebootstrap.Util');

const $Overlay = goog.require('elemental2.dom.RTCRtpReceiver.$Overlay$impl');
/** @nodts */
exports = $Overlay;

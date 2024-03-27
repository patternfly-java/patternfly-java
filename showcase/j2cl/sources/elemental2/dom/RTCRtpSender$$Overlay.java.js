goog.module('elemental2.dom.RTCRtpSender.$Overlay');

goog.require('elemental2.dom.MediaStreamTrack.$Overlay');
goog.require('elemental2.dom.RTCDTMFSender.$Overlay');
goog.require('elemental2.dom.RTCDtlsTransport.$Overlay');
goog.require('elemental2.dom.RTCRtpCapabilities.$Overlay');
goog.require('elemental2.dom.RTCRtpSendParameters.$Overlay');
goog.require('elemental2.dom.RTCStatsReport.$Overlay');
goog.require('elemental2.promise.Promise.$Overlay');
goog.require('nativebootstrap.Util');

const $Overlay = goog.require('elemental2.dom.RTCRtpSender.$Overlay$impl');
/** @nodts */
exports = $Overlay;

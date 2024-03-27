goog.module('elemental2.dom.RTCPeerConnection.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @return {Promise<RTCCertificate>} */
 static m_generateCertificate__java_lang_Object__elemental2_promise_Promise(/** * */ keygenAlgorithm) {
  $Overlay.$clinit();
  return RTCPeerConnection.generateCertificate(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(keygenAlgorithm)));
 }
 /** @final @nodts */
 static m_addStream__$devirt__elemental2_dom_RTCPeerConnection__elemental2_dom_MediaStream__java_lang_Object__void(/** !RTCPeerConnection */ $thisArg, /** MediaStream */ stream, /** * */ constraints) {
  $Overlay.$clinit();
  $thisArg.addStream(stream, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(constraints)));
 }
 /** @final @nodts @return {RTCRtpTransceiver} */
 static m_addTransceiver__$devirt__elemental2_dom_RTCPeerConnection__elemental2_dom_MediaStreamTrack__elemental2_dom_RTCRtpTransceiverInit__elemental2_dom_RTCRtpTransceiver(/** !RTCPeerConnection */ $thisArg, /** MediaStreamTrack */ trackOrKind, /** RTCRtpTransceiverInit */ init) {
  $Overlay.$clinit();
  return $thisArg.addTransceiver(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(trackOrKind)), init);
 }
 /** @final @nodts @return {RTCRtpTransceiver} */
 static m_addTransceiver__$devirt__elemental2_dom_RTCPeerConnection__elemental2_dom_MediaStreamTrack__elemental2_dom_RTCRtpTransceiver(/** !RTCPeerConnection */ $thisArg, /** MediaStreamTrack */ trackOrKind) {
  $Overlay.$clinit();
  return $thisArg.addTransceiver(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(trackOrKind)));
 }
 /** @final @nodts @return {RTCRtpTransceiver} */
 static m_addTransceiver__$devirt__elemental2_dom_RTCPeerConnection__java_lang_String__elemental2_dom_RTCRtpTransceiverInit__elemental2_dom_RTCRtpTransceiver(/** !RTCPeerConnection */ $thisArg, /** ?string */ trackOrKind, /** RTCRtpTransceiverInit */ init) {
  $Overlay.$clinit();
  return $thisArg.addTransceiver(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(trackOrKind)), init);
 }
 /** @final @nodts @return {RTCRtpTransceiver} */
 static m_addTransceiver__$devirt__elemental2_dom_RTCPeerConnection__java_lang_String__elemental2_dom_RTCRtpTransceiver(/** !RTCPeerConnection */ $thisArg, /** ?string */ trackOrKind) {
  $Overlay.$clinit();
  return $thisArg.addTransceiver(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(trackOrKind)));
 }
 /** @final @nodts @return {Promise<RTCSessionDescription>} */
 static m_createAnswer__$devirt__elemental2_dom_RTCPeerConnection__java_lang_Object__elemental2_dom_RTCPeerConnectionErrorCallback__java_lang_Object__elemental2_promise_Promise(/** !RTCPeerConnection */ $thisArg, /** * */ successCallbackOrConstraints, /** ?function(?string):* */ errorCallback, /** * */ constraints) {
  $Overlay.$clinit();
  return $thisArg.createAnswer(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(successCallbackOrConstraints)), errorCallback, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(constraints)));
 }
 /** @final @nodts @return {Promise<RTCSessionDescription>} */
 static m_createAnswer__$devirt__elemental2_dom_RTCPeerConnection__java_lang_Object__elemental2_dom_RTCPeerConnectionErrorCallback__elemental2_promise_Promise(/** !RTCPeerConnection */ $thisArg, /** * */ successCallbackOrConstraints, /** ?function(?string):* */ errorCallback) {
  $Overlay.$clinit();
  return $thisArg.createAnswer(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(successCallbackOrConstraints)), errorCallback);
 }
 /** @final @nodts @return {Promise<RTCSessionDescription>} */
 static m_createAnswer__$devirt__elemental2_dom_RTCPeerConnection__java_lang_Object__elemental2_promise_Promise(/** !RTCPeerConnection */ $thisArg, /** * */ successCallbackOrConstraints) {
  $Overlay.$clinit();
  return $thisArg.createAnswer(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(successCallbackOrConstraints)));
 }
 /** @final @nodts @return {RTCDataChannel} */
 static m_createDataChannel__$devirt__elemental2_dom_RTCPeerConnection__java_lang_String__elemental2_dom_RTCDataChannelInitDictionary___elemental2_dom_RTCDataChannel(/** !RTCPeerConnection */ $thisArg, /** ?string */ label, /** RTCDataChannelInitDictionary_ */ dataChannelDict) {
  $Overlay.$clinit();
  return $thisArg.createDataChannel(label, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(dataChannelDict)));
 }
 /** @final @nodts @return {RTCDataChannel} */
 static m_createDataChannel__$devirt__elemental2_dom_RTCPeerConnection__java_lang_String__elemental2_dom_RTCDataChannelInitRecord___elemental2_dom_RTCDataChannel(/** !RTCPeerConnection */ $thisArg, /** ?string */ label, /** RTCDataChannelInitRecord_ */ dataChannelDict) {
  $Overlay.$clinit();
  return $thisArg.createDataChannel(label, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(dataChannelDict)));
 }
 /** @final @nodts @return {Promise<RTCSessionDescription>} */
 static m_createOffer__$devirt__elemental2_dom_RTCPeerConnection__java_lang_Object__elemental2_dom_RTCPeerConnectionErrorCallback__java_lang_Object__elemental2_promise_Promise(/** !RTCPeerConnection */ $thisArg, /** * */ successCallbackOrConstraintsOrOfferOptions, /** ?function(?string):* */ errorCallback, /** * */ constraints) {
  $Overlay.$clinit();
  return $thisArg.createOffer(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(successCallbackOrConstraintsOrOfferOptions)), errorCallback, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(constraints)));
 }
 /** @final @nodts @return {Promise<RTCSessionDescription>} */
 static m_createOffer__$devirt__elemental2_dom_RTCPeerConnection__java_lang_Object__elemental2_dom_RTCPeerConnectionErrorCallback__elemental2_promise_Promise(/** !RTCPeerConnection */ $thisArg, /** * */ successCallbackOrConstraintsOrOfferOptions, /** ?function(?string):* */ errorCallback) {
  $Overlay.$clinit();
  return $thisArg.createOffer(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(successCallbackOrConstraintsOrOfferOptions)), errorCallback);
 }
 /** @final @nodts @return {Promise<RTCSessionDescription>} */
 static m_createOffer__$devirt__elemental2_dom_RTCPeerConnection__java_lang_Object__elemental2_promise_Promise(/** !RTCPeerConnection */ $thisArg, /** * */ successCallbackOrConstraintsOrOfferOptions) {
  $Overlay.$clinit();
  return $thisArg.createOffer(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(successCallbackOrConstraintsOrOfferOptions)));
 }
 /** @final @nodts */
 static m_updateIce__$devirt__elemental2_dom_RTCPeerConnection__elemental2_dom_RTCConfiguration__java_lang_Object__void(/** !RTCPeerConnection */ $thisArg, /** RTCConfiguration */ configuration, /** * */ constraints) {
  $Overlay.$clinit();
  $thisArg.updateIce(configuration, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(constraints)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RTCPeerConnection;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'RTCPeerConnection');

exports = $Overlay;

//# sourceMappingURL=RTCPeerConnection$$Overlay.js.map

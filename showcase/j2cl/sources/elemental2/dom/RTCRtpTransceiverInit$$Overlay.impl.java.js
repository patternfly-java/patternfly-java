goog.module('elemental2.dom.RTCRtpTransceiverInit.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {RTCRtpTransceiverInit} */
 static m_create__elemental2_dom_RTCRtpTransceiverInit() {
  $Overlay.$clinit();
  return /**@type {RTCRtpTransceiverInit}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {Object<string, *>}*/ (JsPropertyMap_$Overlay.m_of__jsinterop_base_JsPropertyMap())));
 }
 /** @nodts */
 static m_setSendEncodings__$devirt__elemental2_dom_RTCRtpTransceiverInit__arrayOf_elemental2_dom_RTCRtpEncodingParameters__void(/** !RTCRtpTransceiverInit */ $thisArg, /** Array<RTCRtpEncodingParameters> */ sendEncodings) {
  $Overlay.$clinit();
  $thisArg.sendEncodings = /**@type {Array<RTCRtpEncodingParameters>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sendEncodings));
 }
 /** @nodts */
 static m_setStreams__$devirt__elemental2_dom_RTCRtpTransceiverInit__arrayOf_elemental2_dom_MediaStream__void(/** !RTCRtpTransceiverInit */ $thisArg, /** Array<MediaStream> */ streams) {
  $Overlay.$clinit();
  $thisArg.streams = /**@type {Array<MediaStream>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(streams));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=RTCRtpTransceiverInit$$Overlay.js.map

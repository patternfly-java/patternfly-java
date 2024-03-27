goog.module('elemental2.dom.RTCRtpSendParameters.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {RTCRtpSendParameters} */
 static m_create__elemental2_dom_RTCRtpSendParameters() {
  $Overlay.$clinit();
  return /**@type {RTCRtpSendParameters}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {Object<string, *>}*/ (JsPropertyMap_$Overlay.m_of__jsinterop_base_JsPropertyMap())));
 }
 /** @nodts */
 static m_setEncodings__$devirt__elemental2_dom_RTCRtpSendParameters__arrayOf_elemental2_dom_RTCRtpEncodingParameters__void(/** !RTCRtpSendParameters */ $thisArg, /** Array<RTCRtpEncodingParameters> */ encodings) {
  $Overlay.$clinit();
  $thisArg.encodings = /**@type {Array<RTCRtpEncodingParameters>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(encodings));
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

//# sourceMappingURL=RTCRtpSendParameters$$Overlay.js.map

goog.module('elemental2.dom.RTCRtpParameters.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {RTCRtpParameters} */
 static m_create__elemental2_dom_RTCRtpParameters() {
  $Overlay.$clinit();
  return /**@type {RTCRtpParameters}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {Object<string, *>}*/ (JsPropertyMap_$Overlay.m_of__jsinterop_base_JsPropertyMap())));
 }
 /** @nodts */
 static m_setCodecs__$devirt__elemental2_dom_RTCRtpParameters__arrayOf_elemental2_dom_RTCRtpCodecParameters__void(/** !RTCRtpParameters */ $thisArg, /** Array<RTCRtpCodecParameters> */ codecs) {
  $Overlay.$clinit();
  $thisArg.codecs = /**@type {Array<RTCRtpCodecParameters>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(codecs));
 }
 /** @nodts */
 static m_setHeaderExtensions__$devirt__elemental2_dom_RTCRtpParameters__arrayOf_elemental2_dom_RTCRtpHeaderExtensionParameters__void(/** !RTCRtpParameters */ $thisArg, /** Array<RTCRtpHeaderExtensionParameters> */ headerExtensions) {
  $Overlay.$clinit();
  $thisArg.headerExtensions = /**@type {Array<RTCRtpHeaderExtensionParameters>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(headerExtensions));
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

//# sourceMappingURL=RTCRtpParameters$$Overlay.js.map

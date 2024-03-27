goog.module('elemental2.dom.RTCRtpCapabilities.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {RTCRtpCapabilities} */
 static m_create__elemental2_dom_RTCRtpCapabilities() {
  $Overlay.$clinit();
  return /**@type {RTCRtpCapabilities}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {Object<string, *>}*/ (JsPropertyMap_$Overlay.m_of__jsinterop_base_JsPropertyMap())));
 }
 /** @nodts */
 static m_setCodecs__$devirt__elemental2_dom_RTCRtpCapabilities__arrayOf_elemental2_dom_RTCRtpCodecCapability__void(/** !RTCRtpCapabilities */ $thisArg, /** Array<RTCRtpCodecCapability> */ codecs) {
  $Overlay.$clinit();
  $thisArg.codecs = /**@type {Array<RTCRtpCodecCapability>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(codecs));
 }
 /** @nodts */
 static m_setHeaderExtensions__$devirt__elemental2_dom_RTCRtpCapabilities__arrayOf_elemental2_dom_RTCRtpHeaderExtensionCapability__void(/** !RTCRtpCapabilities */ $thisArg, /** Array<RTCRtpHeaderExtensionCapability> */ headerExtensions) {
  $Overlay.$clinit();
  $thisArg.headerExtensions = /**@type {Array<RTCRtpHeaderExtensionCapability>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(headerExtensions));
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

//# sourceMappingURL=RTCRtpCapabilities$$Overlay.js.map

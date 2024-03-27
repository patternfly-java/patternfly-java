goog.module('elemental2.dom.RTCConfiguration.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {RTCConfiguration} */
 static m_create__elemental2_dom_RTCConfiguration() {
  $Overlay.$clinit();
  return /**@type {RTCConfiguration}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {Object<string, *>}*/ (JsPropertyMap_$Overlay.m_of__jsinterop_base_JsPropertyMap())));
 }
 /** @nodts */
 static m_setCertificates__$devirt__elemental2_dom_RTCConfiguration__arrayOf_elemental2_dom_RTCCertificate__void(/** !RTCConfiguration */ $thisArg, /** Array<RTCCertificate> */ certificates) {
  $Overlay.$clinit();
  $thisArg.certificates = /**@type {Array<RTCCertificate>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(certificates));
 }
 /** @nodts */
 static m_setIceServers__$devirt__elemental2_dom_RTCConfiguration__arrayOf_elemental2_dom_RTCConfiguration_GetIceServersArrayUnionType__void(/** !RTCConfiguration */ $thisArg, /** Array<?> */ iceServers) {
  $Overlay.$clinit();
  $thisArg.iceServers = /**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(iceServers));
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

//# sourceMappingURL=RTCConfiguration$$Overlay.js.map

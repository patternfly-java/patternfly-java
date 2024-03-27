goog.module('elemental2.dom.RTCRtpTransceiver.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {*} */
 static m_setCodecPreferences__$devirt__elemental2_dom_RTCRtpTransceiver__arrayOf_elemental2_dom_RTCRtpCodecCapability__java_lang_Object(/** !RTCRtpTransceiver */ $thisArg, /** Array<RTCRtpCodecCapability> */ codecs) {
  $Overlay.$clinit();
  return $thisArg.setCodecPreferences(/**@type {Array<RTCRtpCodecCapability>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(codecs)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=RTCRtpTransceiver$$Overlay.js.map

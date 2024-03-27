goog.module('elemental2.dom.RTCInboundRtpStreamStats.GetEstimatedPlayoutTimestampUnionType.$Overlay$impl');

let JsDate_$Overlay = goog.forwardDeclare('elemental2.core.JsDate.$Overlay$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_RTCInboundRtpStreamStats_GetEstimatedPlayoutTimestampUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {number} */
 static m_asDouble__$devirt__elemental2_dom_RTCInboundRtpStreamStats_GetEstimatedPlayoutTimestampUnionType__double(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asDouble__java_lang_Object__double($thisArg);
 }
 /** @nodts @return {Date} */
 static m_asJsDate__$devirt__elemental2_dom_RTCInboundRtpStreamStats_GetEstimatedPlayoutTimestampUnionType__elemental2_core_JsDate(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Date}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), JsDate_$Overlay));
 }
 /** @nodts @return {boolean} */
 static m_isDouble__$devirt__elemental2_dom_RTCInboundRtpStreamStats_GetEstimatedPlayoutTimestampUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Double.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isJsDate__$devirt__elemental2_dom_RTCInboundRtpStreamStats_GetEstimatedPlayoutTimestampUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return JsDate_$Overlay.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  JsDate_$Overlay = goog.module.get('elemental2.core.JsDate.$Overlay$impl');
  Double = goog.module.get('java.lang.Double$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=RTCInboundRtpStreamStats$GetEstimatedPlayoutTimestampUnionType$$Overlay.js.map

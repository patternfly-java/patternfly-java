goog.module('elemental2.dom.RTCPeerConnection.GetStatsUnionType.$Overlay$impl');

let Promise_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_RTCPeerConnection_GetStatsUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {Promise<RTCStatsReport>} */
 static m_asPromise__$devirt__elemental2_dom_RTCPeerConnection_GetStatsUnionType__elemental2_promise_Promise(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Promise<RTCStatsReport>}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), Promise_$Overlay));
 }
 /** @nodts @return {RTCStatsReport} */
 static m_asRTCStatsReport__$devirt__elemental2_dom_RTCPeerConnection_GetStatsUnionType__elemental2_dom_RTCStatsReport(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {RTCStatsReport}*/ (Js.m_cast__java_lang_Object__java_lang_Object($thisArg));
 }
 /** @nodts @return {boolean} */
 static m_isPromise__$devirt__elemental2_dom_RTCPeerConnection_GetStatsUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Promise_$Overlay.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Promise_$Overlay = goog.module.get('elemental2.promise.Promise.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=RTCPeerConnection$GetStatsUnionType$$Overlay.js.map

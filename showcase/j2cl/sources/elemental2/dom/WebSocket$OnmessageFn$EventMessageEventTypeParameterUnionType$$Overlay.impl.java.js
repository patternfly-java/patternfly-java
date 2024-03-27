goog.module('elemental2.dom.WebSocket.OnmessageFn.EventMessageEventTypeParameterUnionType.$Overlay$impl');

let ArrayBuffer_$Overlay = goog.forwardDeclare('elemental2.core.ArrayBuffer.$Overlay$impl');
let Blob_$Overlay = goog.forwardDeclare('elemental2.dom.Blob.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_WebSocket_OnmessageFn_EventMessageEventTypeParameterUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {ArrayBuffer} */
 static m_asArrayBuffer__$devirt__elemental2_dom_WebSocket_OnmessageFn_EventMessageEventTypeParameterUnionType__elemental2_core_ArrayBuffer(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {ArrayBuffer}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), ArrayBuffer_$Overlay));
 }
 /** @nodts @return {Blob} */
 static m_asBlob__$devirt__elemental2_dom_WebSocket_OnmessageFn_EventMessageEventTypeParameterUnionType__elemental2_dom_Blob(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Blob}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), Blob_$Overlay));
 }
 /** @nodts @return {?string} */
 static m_asString__$devirt__elemental2_dom_WebSocket_OnmessageFn_EventMessageEventTypeParameterUnionType__java_lang_String(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asString__java_lang_Object__java_lang_String($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isArrayBuffer__$devirt__elemental2_dom_WebSocket_OnmessageFn_EventMessageEventTypeParameterUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return ArrayBuffer_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isBlob__$devirt__elemental2_dom_WebSocket_OnmessageFn_EventMessageEventTypeParameterUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Blob_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isString__$devirt__elemental2_dom_WebSocket_OnmessageFn_EventMessageEventTypeParameterUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return j_l_String.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  ArrayBuffer_$Overlay = goog.module.get('elemental2.core.ArrayBuffer.$Overlay$impl');
  Blob_$Overlay = goog.module.get('elemental2.dom.Blob.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=WebSocket$OnmessageFn$EventMessageEventTypeParameterUnionType$$Overlay.js.map

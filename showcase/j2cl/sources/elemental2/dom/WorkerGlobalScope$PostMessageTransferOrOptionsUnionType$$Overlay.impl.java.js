goog.module('elemental2.dom.WorkerGlobalScope.PostMessageTransferOrOptionsUnionType.$Overlay$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_WorkerGlobalScope_PostMessageTransferOrOptionsUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {Array<Transferable>} */
 static m_asJsArray__$devirt__elemental2_dom_WorkerGlobalScope_PostMessageTransferOrOptionsUnionType__elemental2_core_JsArray(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Array<Transferable>}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), JsArray_$Overlay));
 }
 /** @nodts @return {StructuredSerializeOptions} */
 static m_asStructuredSerializeOptions__$devirt__elemental2_dom_WorkerGlobalScope_PostMessageTransferOrOptionsUnionType__elemental2_dom_StructuredSerializeOptions(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {StructuredSerializeOptions}*/ (Js.m_cast__java_lang_Object__java_lang_Object($thisArg));
 }
 /** @nodts @return {boolean} */
 static m_isJsArray__$devirt__elemental2_dom_WorkerGlobalScope_PostMessageTransferOrOptionsUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return JsArray_$Overlay.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  JsArray_$Overlay = goog.module.get('elemental2.core.JsArray.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=WorkerGlobalScope$PostMessageTransferOrOptionsUnionType$$Overlay.js.map

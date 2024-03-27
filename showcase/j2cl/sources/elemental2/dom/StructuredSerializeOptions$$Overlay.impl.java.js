goog.module('elemental2.dom.StructuredSerializeOptions.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {StructuredSerializeOptions} */
 static m_create__elemental2_dom_StructuredSerializeOptions() {
  $Overlay.$clinit();
  return /**@type {StructuredSerializeOptions}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {Object<string, *>}*/ (JsPropertyMap_$Overlay.m_of__jsinterop_base_JsPropertyMap())));
 }
 /** @nodts */
 static m_setTransfer__$devirt__elemental2_dom_StructuredSerializeOptions__arrayOf_elemental2_core_Transferable__void(/** !StructuredSerializeOptions */ $thisArg, /** Array<Transferable> */ transfer) {
  $Overlay.$clinit();
  $thisArg.transfer = /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(transfer));
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

//# sourceMappingURL=StructuredSerializeOptions$$Overlay.js.map

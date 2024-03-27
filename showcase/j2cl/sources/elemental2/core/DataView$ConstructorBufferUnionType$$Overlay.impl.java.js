goog.module('elemental2.core.DataView.ConstructorBufferUnionType.$Overlay$impl');

let ArrayBuffer_$Overlay = goog.forwardDeclare('elemental2.core.ArrayBuffer.$Overlay$impl');
let SharedArrayBuffer_$Overlay = goog.forwardDeclare('elemental2.core.SharedArrayBuffer.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_core_DataView_ConstructorBufferUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {ArrayBuffer} */
 static m_asArrayBuffer__$devirt__elemental2_core_DataView_ConstructorBufferUnionType__elemental2_core_ArrayBuffer(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {ArrayBuffer}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), ArrayBuffer_$Overlay));
 }
 /** @nodts @return {SharedArrayBuffer} */
 static m_asSharedArrayBuffer__$devirt__elemental2_core_DataView_ConstructorBufferUnionType__elemental2_core_SharedArrayBuffer(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {SharedArrayBuffer}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), SharedArrayBuffer_$Overlay));
 }
 /** @nodts @return {boolean} */
 static m_isArrayBuffer__$devirt__elemental2_core_DataView_ConstructorBufferUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return ArrayBuffer_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isSharedArrayBuffer__$devirt__elemental2_core_DataView_ConstructorBufferUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return SharedArrayBuffer_$Overlay.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  ArrayBuffer_$Overlay = goog.module.get('elemental2.core.ArrayBuffer.$Overlay$impl');
  SharedArrayBuffer_$Overlay = goog.module.get('elemental2.core.SharedArrayBuffer.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=DataView$ConstructorBufferUnionType$$Overlay.js.map

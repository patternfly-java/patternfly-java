goog.module('elemental2.core.BigUint64Array.ConstructorLengthOrArrayOrBufferUnionType.$Overlay$impl');

let ArrayBuffer_$Overlay = goog.forwardDeclare('elemental2.core.ArrayBuffer.$Overlay$impl');
let ArrayBufferView_$Overlay = goog.forwardDeclare('elemental2.core.ArrayBufferView.$Overlay$impl');
let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let SharedArrayBuffer_$Overlay = goog.forwardDeclare('elemental2.core.SharedArrayBuffer.$Overlay$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_core_BigUint64Array_ConstructorLengthOrArrayOrBufferUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {ArrayBuffer} */
 static m_asArrayBuffer__$devirt__elemental2_core_BigUint64Array_ConstructorLengthOrArrayOrBufferUnionType__elemental2_core_ArrayBuffer(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {ArrayBuffer}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), ArrayBuffer_$Overlay));
 }
 /** @nodts @return {ArrayBufferView} */
 static m_asArrayBufferView__$devirt__elemental2_core_BigUint64Array_ConstructorLengthOrArrayOrBufferUnionType__elemental2_core_ArrayBufferView(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {ArrayBufferView}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), ArrayBufferView_$Overlay));
 }
 /** @nodts @return {number} */
 static m_asDouble__$devirt__elemental2_core_BigUint64Array_ConstructorLengthOrArrayOrBufferUnionType__double(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asDouble__java_lang_Object__double($thisArg);
 }
 /** @nodts @return {Array<bigint>} */
 static m_asJsArray__$devirt__elemental2_core_BigUint64Array_ConstructorLengthOrArrayOrBufferUnionType__elemental2_core_JsArray(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Array<bigint>}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), JsArray_$Overlay));
 }
 /** @nodts @return {SharedArrayBuffer} */
 static m_asSharedArrayBuffer__$devirt__elemental2_core_BigUint64Array_ConstructorLengthOrArrayOrBufferUnionType__elemental2_core_SharedArrayBuffer(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {SharedArrayBuffer}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), SharedArrayBuffer_$Overlay));
 }
 /** @nodts @return {boolean} */
 static m_isArrayBuffer__$devirt__elemental2_core_BigUint64Array_ConstructorLengthOrArrayOrBufferUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return ArrayBuffer_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isArrayBufferView__$devirt__elemental2_core_BigUint64Array_ConstructorLengthOrArrayOrBufferUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return ArrayBufferView_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isDouble__$devirt__elemental2_core_BigUint64Array_ConstructorLengthOrArrayOrBufferUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Double.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isJsArray__$devirt__elemental2_core_BigUint64Array_ConstructorLengthOrArrayOrBufferUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return JsArray_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isSharedArrayBuffer__$devirt__elemental2_core_BigUint64Array_ConstructorLengthOrArrayOrBufferUnionType__boolean(/** ? */ $thisArg) {
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
  ArrayBufferView_$Overlay = goog.module.get('elemental2.core.ArrayBufferView.$Overlay$impl');
  JsArray_$Overlay = goog.module.get('elemental2.core.JsArray.$Overlay$impl');
  SharedArrayBuffer_$Overlay = goog.module.get('elemental2.core.SharedArrayBuffer.$Overlay$impl');
  Double = goog.module.get('java.lang.Double$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=BigUint64Array$ConstructorLengthOrArrayOrBufferUnionType$$Overlay.js.map

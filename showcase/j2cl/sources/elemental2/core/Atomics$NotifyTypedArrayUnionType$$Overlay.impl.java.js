goog.module('elemental2.core.Atomics.NotifyTypedArrayUnionType.$Overlay$impl');

let BigInt64Array_$Overlay = goog.forwardDeclare('elemental2.core.BigInt64Array.$Overlay$impl');
let Int32Array_$Overlay = goog.forwardDeclare('elemental2.core.Int32Array.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_core_Atomics_NotifyTypedArrayUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {BigInt64Array} */
 static m_asBigInt64Array__$devirt__elemental2_core_Atomics_NotifyTypedArrayUnionType__elemental2_core_BigInt64Array(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {BigInt64Array}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), BigInt64Array_$Overlay));
 }
 /** @nodts @return {Int32Array} */
 static m_asInt32Array__$devirt__elemental2_core_Atomics_NotifyTypedArrayUnionType__elemental2_core_Int32Array(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Int32Array}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), Int32Array_$Overlay));
 }
 /** @nodts @return {boolean} */
 static m_isBigInt64Array__$devirt__elemental2_core_Atomics_NotifyTypedArrayUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return BigInt64Array_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isInt32Array__$devirt__elemental2_core_Atomics_NotifyTypedArrayUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Int32Array_$Overlay.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  BigInt64Array_$Overlay = goog.module.get('elemental2.core.BigInt64Array.$Overlay$impl');
  Int32Array_$Overlay = goog.module.get('elemental2.core.Int32Array.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=Atomics$NotifyTypedArrayUnionType$$Overlay.js.map

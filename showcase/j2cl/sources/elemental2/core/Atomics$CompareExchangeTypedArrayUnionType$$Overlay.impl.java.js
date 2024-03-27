goog.module('elemental2.core.Atomics.CompareExchangeTypedArrayUnionType.$Overlay$impl');

let BigInt64Array_$Overlay = goog.forwardDeclare('elemental2.core.BigInt64Array.$Overlay$impl');
let BigUint64Array_$Overlay = goog.forwardDeclare('elemental2.core.BigUint64Array.$Overlay$impl');
let Int16Array_$Overlay = goog.forwardDeclare('elemental2.core.Int16Array.$Overlay$impl');
let Int32Array_$Overlay = goog.forwardDeclare('elemental2.core.Int32Array.$Overlay$impl');
let Int8Array_$Overlay = goog.forwardDeclare('elemental2.core.Int8Array.$Overlay$impl');
let Uint16Array_$Overlay = goog.forwardDeclare('elemental2.core.Uint16Array.$Overlay$impl');
let Uint32Array_$Overlay = goog.forwardDeclare('elemental2.core.Uint32Array.$Overlay$impl');
let Uint8Array_$Overlay = goog.forwardDeclare('elemental2.core.Uint8Array.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_core_Atomics_CompareExchangeTypedArrayUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {BigInt64Array} */
 static m_asBigInt64Array__$devirt__elemental2_core_Atomics_CompareExchangeTypedArrayUnionType__elemental2_core_BigInt64Array(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {BigInt64Array}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), BigInt64Array_$Overlay));
 }
 /** @nodts @return {BigUint64Array} */
 static m_asBigUint64Array__$devirt__elemental2_core_Atomics_CompareExchangeTypedArrayUnionType__elemental2_core_BigUint64Array(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {BigUint64Array}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), BigUint64Array_$Overlay));
 }
 /** @nodts @return {Int16Array} */
 static m_asInt16Array__$devirt__elemental2_core_Atomics_CompareExchangeTypedArrayUnionType__elemental2_core_Int16Array(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Int16Array}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), Int16Array_$Overlay));
 }
 /** @nodts @return {Int32Array} */
 static m_asInt32Array__$devirt__elemental2_core_Atomics_CompareExchangeTypedArrayUnionType__elemental2_core_Int32Array(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Int32Array}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), Int32Array_$Overlay));
 }
 /** @nodts @return {Int8Array} */
 static m_asInt8Array__$devirt__elemental2_core_Atomics_CompareExchangeTypedArrayUnionType__elemental2_core_Int8Array(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Int8Array}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), Int8Array_$Overlay));
 }
 /** @nodts @return {Uint16Array} */
 static m_asUint16Array__$devirt__elemental2_core_Atomics_CompareExchangeTypedArrayUnionType__elemental2_core_Uint16Array(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Uint16Array}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), Uint16Array_$Overlay));
 }
 /** @nodts @return {Uint32Array} */
 static m_asUint32Array__$devirt__elemental2_core_Atomics_CompareExchangeTypedArrayUnionType__elemental2_core_Uint32Array(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Uint32Array}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), Uint32Array_$Overlay));
 }
 /** @nodts @return {Uint8Array} */
 static m_asUint8Array__$devirt__elemental2_core_Atomics_CompareExchangeTypedArrayUnionType__elemental2_core_Uint8Array(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Uint8Array}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), Uint8Array_$Overlay));
 }
 /** @nodts @return {boolean} */
 static m_isBigInt64Array__$devirt__elemental2_core_Atomics_CompareExchangeTypedArrayUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return BigInt64Array_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isBigUint64Array__$devirt__elemental2_core_Atomics_CompareExchangeTypedArrayUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return BigUint64Array_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isInt16Array__$devirt__elemental2_core_Atomics_CompareExchangeTypedArrayUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Int16Array_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isInt32Array__$devirt__elemental2_core_Atomics_CompareExchangeTypedArrayUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Int32Array_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isInt8Array__$devirt__elemental2_core_Atomics_CompareExchangeTypedArrayUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Int8Array_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isUint16Array__$devirt__elemental2_core_Atomics_CompareExchangeTypedArrayUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Uint16Array_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isUint32Array__$devirt__elemental2_core_Atomics_CompareExchangeTypedArrayUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Uint32Array_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isUint8Array__$devirt__elemental2_core_Atomics_CompareExchangeTypedArrayUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Uint8Array_$Overlay.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  BigInt64Array_$Overlay = goog.module.get('elemental2.core.BigInt64Array.$Overlay$impl');
  BigUint64Array_$Overlay = goog.module.get('elemental2.core.BigUint64Array.$Overlay$impl');
  Int16Array_$Overlay = goog.module.get('elemental2.core.Int16Array.$Overlay$impl');
  Int32Array_$Overlay = goog.module.get('elemental2.core.Int32Array.$Overlay$impl');
  Int8Array_$Overlay = goog.module.get('elemental2.core.Int8Array.$Overlay$impl');
  Uint16Array_$Overlay = goog.module.get('elemental2.core.Uint16Array.$Overlay$impl');
  Uint32Array_$Overlay = goog.module.get('elemental2.core.Uint32Array.$Overlay$impl');
  Uint8Array_$Overlay = goog.module.get('elemental2.core.Uint8Array.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=Atomics$CompareExchangeTypedArrayUnionType$$Overlay.js.map

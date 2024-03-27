goog.module('elemental2.core.BigUint64Array.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @template S @return {BigUint64Array} */
 static m_from__jsinterop_base_JsArrayLike__elemental2_core_BigUint64Array_FromMapFn__java_lang_Object__elemental2_core_BigUint64Array(/** IArrayLike<bigint> */ source, /** ?function(*, number):bigint */ mapFn, /** S */ thisArg) {
  $Overlay.$clinit();
  return BigUint64Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)), mapFn, thisArg);
 }
 /** @final @nodts @return {BigUint64Array} */
 static m_from__jsinterop_base_JsArrayLike__elemental2_core_BigUint64Array_FromMapFn__elemental2_core_BigUint64Array(/** IArrayLike<bigint> */ source, /** ?function(*, number):bigint */ mapFn) {
  $Overlay.$clinit();
  return BigUint64Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)), mapFn);
 }
 /** @final @nodts @return {BigUint64Array} */
 static m_from__jsinterop_base_JsArrayLike__elemental2_core_BigUint64Array(/** IArrayLike<bigint> */ source) {
  $Overlay.$clinit();
  return BigUint64Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)));
 }
 /** @final @nodts @template S @return {BigUint64Array} */
 static m_from__arrayOf_jsinterop_base_JsBigint__elemental2_core_BigUint64Array_FromMapFn__java_lang_Object__elemental2_core_BigUint64Array(/** Array<bigint> */ source, /** ?function(*, number):bigint */ mapFn, /** S */ thisArg) {
  $Overlay.$clinit();
  return $Overlay.m_from__jsinterop_base_JsArrayLike__elemental2_core_BigUint64Array_FromMapFn__java_lang_Object__elemental2_core_BigUint64Array(/**@type {IArrayLike<bigint>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)), mapFn, thisArg);
 }
 /** @final @nodts @return {BigUint64Array} */
 static m_from__arrayOf_jsinterop_base_JsBigint__elemental2_core_BigUint64Array_FromMapFn__elemental2_core_BigUint64Array(/** Array<bigint> */ source, /** ?function(*, number):bigint */ mapFn) {
  $Overlay.$clinit();
  return $Overlay.m_from__jsinterop_base_JsArrayLike__elemental2_core_BigUint64Array_FromMapFn__elemental2_core_BigUint64Array(/**@type {IArrayLike<bigint>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)), mapFn);
 }
 /** @final @nodts @return {BigUint64Array} */
 static m_from__arrayOf_jsinterop_base_JsBigint__elemental2_core_BigUint64Array(/** Array<bigint> */ source) {
  $Overlay.$clinit();
  return $Overlay.m_from__jsinterop_base_JsArrayLike__elemental2_core_BigUint64Array(/**@type {IArrayLike<bigint>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)));
 }
 /** @final @nodts @template S @return {BigUint64Array} */
 static m_from__elemental2_core_JsIterable__elemental2_core_BigUint64Array_FromMapFn__java_lang_Object__elemental2_core_BigUint64Array(/** Iterable<bigint> */ source, /** ?function(*, number):bigint */ mapFn, /** S */ thisArg) {
  $Overlay.$clinit();
  return BigUint64Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)), mapFn, thisArg);
 }
 /** @final @nodts @return {BigUint64Array} */
 static m_from__elemental2_core_JsIterable__elemental2_core_BigUint64Array_FromMapFn__elemental2_core_BigUint64Array(/** Iterable<bigint> */ source, /** ?function(*, number):bigint */ mapFn) {
  $Overlay.$clinit();
  return BigUint64Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)), mapFn);
 }
 /** @final @nodts @return {BigUint64Array} */
 static m_from__elemental2_core_JsIterable__elemental2_core_BigUint64Array(/** Iterable<bigint> */ source) {
  $Overlay.$clinit();
  return BigUint64Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)));
 }
 /** @final @nodts @template S @return {BigUint64Array} */
 static m_from__java_lang_String__elemental2_core_BigUint64Array_FromMapFn__java_lang_Object__elemental2_core_BigUint64Array(/** ?string */ source, /** ?function(*, number):bigint */ mapFn, /** S */ thisArg) {
  $Overlay.$clinit();
  return BigUint64Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)), mapFn, thisArg);
 }
 /** @final @nodts @return {BigUint64Array} */
 static m_from__java_lang_String__elemental2_core_BigUint64Array_FromMapFn__elemental2_core_BigUint64Array(/** ?string */ source, /** ?function(*, number):bigint */ mapFn) {
  $Overlay.$clinit();
  return BigUint64Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)), mapFn);
 }
 /** @final @nodts @return {BigUint64Array} */
 static m_from__java_lang_String__elemental2_core_BigUint64Array(/** ?string */ source) {
  $Overlay.$clinit();
  return BigUint64Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)));
 }
 /** @nodts @return {number} */
 static get f_BYTES_PER_ELEMENT__elemental2_core_BigUint64Array_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_BYTES_PER_ELEMENT__elemental2_core_BigUint64Array_$Overlay);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_BYTES_PER_ELEMENT__elemental2_core_BigUint64Array_$Overlay = BigUint64Array.BYTES_PER_ELEMENT;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BigUint64Array;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
/**@private {number} @nodts*/
$Overlay.$static_BYTES_PER_ELEMENT__elemental2_core_BigUint64Array_$Overlay = 0;
$Util.$setClassMetadata($Overlay, 'BigUint64Array');

exports = $Overlay;

//# sourceMappingURL=BigUint64Array$$Overlay.js.map

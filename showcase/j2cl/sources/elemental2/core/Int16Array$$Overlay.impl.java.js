goog.module('elemental2.core.Int16Array.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @template S @return {Int16Array} */
 static m_from__jsinterop_base_JsArrayLike__elemental2_core_Int16Array_FromMapFn__java_lang_Object__elemental2_core_Int16Array(/** IArrayLike<?number> */ source, /** ?function(*, number):number */ mapFn, /** S */ thisArg) {
  $Overlay.$clinit();
  return Int16Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)), mapFn, thisArg);
 }
 /** @final @nodts @return {Int16Array} */
 static m_from__jsinterop_base_JsArrayLike__elemental2_core_Int16Array_FromMapFn__elemental2_core_Int16Array(/** IArrayLike<?number> */ source, /** ?function(*, number):number */ mapFn) {
  $Overlay.$clinit();
  return Int16Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)), mapFn);
 }
 /** @final @nodts @return {Int16Array} */
 static m_from__jsinterop_base_JsArrayLike__elemental2_core_Int16Array(/** IArrayLike<?number> */ source) {
  $Overlay.$clinit();
  return Int16Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)));
 }
 /** @final @nodts @template S @return {Int16Array} */
 static m_from__elemental2_core_JsIterable__elemental2_core_Int16Array_FromMapFn__java_lang_Object__elemental2_core_Int16Array(/** Iterable<?number> */ source, /** ?function(*, number):number */ mapFn, /** S */ thisArg) {
  $Overlay.$clinit();
  return Int16Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)), mapFn, thisArg);
 }
 /** @final @nodts @return {Int16Array} */
 static m_from__elemental2_core_JsIterable__elemental2_core_Int16Array_FromMapFn__elemental2_core_Int16Array(/** Iterable<?number> */ source, /** ?function(*, number):number */ mapFn) {
  $Overlay.$clinit();
  return Int16Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)), mapFn);
 }
 /** @final @nodts @return {Int16Array} */
 static m_from__elemental2_core_JsIterable__elemental2_core_Int16Array(/** Iterable<?number> */ source) {
  $Overlay.$clinit();
  return Int16Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)));
 }
 /** @final @nodts @template S @return {Int16Array} */
 static m_from__java_lang_String__elemental2_core_Int16Array_FromMapFn__java_lang_Object__elemental2_core_Int16Array(/** ?string */ source, /** ?function(*, number):number */ mapFn, /** S */ thisArg) {
  $Overlay.$clinit();
  return Int16Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)), mapFn, thisArg);
 }
 /** @final @nodts @return {Int16Array} */
 static m_from__java_lang_String__elemental2_core_Int16Array_FromMapFn__elemental2_core_Int16Array(/** ?string */ source, /** ?function(*, number):number */ mapFn) {
  $Overlay.$clinit();
  return Int16Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)), mapFn);
 }
 /** @final @nodts @return {Int16Array} */
 static m_from__java_lang_String__elemental2_core_Int16Array(/** ?string */ source) {
  $Overlay.$clinit();
  return Int16Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)));
 }
 /** @final @nodts @template S @return {Int16Array} */
 static m_from__arrayOf_double__elemental2_core_Int16Array_FromMapFn__java_lang_Object__elemental2_core_Int16Array(/** Array<number> */ source, /** ?function(*, number):number */ mapFn, /** S */ thisArg) {
  $Overlay.$clinit();
  return $Overlay.m_from__jsinterop_base_JsArrayLike__elemental2_core_Int16Array_FromMapFn__java_lang_Object__elemental2_core_Int16Array(/**@type {IArrayLike<?number>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)), mapFn, thisArg);
 }
 /** @final @nodts @return {Int16Array} */
 static m_from__arrayOf_double__elemental2_core_Int16Array_FromMapFn__elemental2_core_Int16Array(/** Array<number> */ source, /** ?function(*, number):number */ mapFn) {
  $Overlay.$clinit();
  return $Overlay.m_from__jsinterop_base_JsArrayLike__elemental2_core_Int16Array_FromMapFn__elemental2_core_Int16Array(/**@type {IArrayLike<?number>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)), mapFn);
 }
 /** @final @nodts @return {Int16Array} */
 static m_from__arrayOf_double__elemental2_core_Int16Array(/** Array<number> */ source) {
  $Overlay.$clinit();
  return $Overlay.m_from__jsinterop_base_JsArrayLike__elemental2_core_Int16Array(/**@type {IArrayLike<?number>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)));
 }
 /** @nodts @return {number} */
 static get f_BYTES_PER_ELEMENT__elemental2_core_Int16Array_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_BYTES_PER_ELEMENT__elemental2_core_Int16Array_$Overlay);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_BYTES_PER_ELEMENT__elemental2_core_Int16Array_$Overlay = Int16Array.BYTES_PER_ELEMENT;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Int16Array;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
/**@private {number} @nodts*/
$Overlay.$static_BYTES_PER_ELEMENT__elemental2_core_Int16Array_$Overlay = 0;
$Util.$setClassMetadata($Overlay, 'Int16Array');

exports = $Overlay;

//# sourceMappingURL=Int16Array$$Overlay.js.map

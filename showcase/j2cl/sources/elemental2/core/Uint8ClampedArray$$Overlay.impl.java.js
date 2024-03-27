goog.module('elemental2.core.Uint8ClampedArray.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @template S @return {Uint8ClampedArray} */
 static m_from__jsinterop_base_JsArrayLike__elemental2_core_Uint8ClampedArray_FromMapFn__java_lang_Object__elemental2_core_Uint8ClampedArray(/** IArrayLike<?number> */ source, /** ?function(*, number):number */ mapFn, /** S */ thisArg) {
  $Overlay.$clinit();
  return Uint8ClampedArray.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)), mapFn, thisArg);
 }
 /** @final @nodts @return {Uint8ClampedArray} */
 static m_from__jsinterop_base_JsArrayLike__elemental2_core_Uint8ClampedArray_FromMapFn__elemental2_core_Uint8ClampedArray(/** IArrayLike<?number> */ source, /** ?function(*, number):number */ mapFn) {
  $Overlay.$clinit();
  return Uint8ClampedArray.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)), mapFn);
 }
 /** @final @nodts @return {Uint8ClampedArray} */
 static m_from__jsinterop_base_JsArrayLike__elemental2_core_Uint8ClampedArray(/** IArrayLike<?number> */ source) {
  $Overlay.$clinit();
  return Uint8ClampedArray.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)));
 }
 /** @final @nodts @template S @return {Uint8ClampedArray} */
 static m_from__elemental2_core_JsIterable__elemental2_core_Uint8ClampedArray_FromMapFn__java_lang_Object__elemental2_core_Uint8ClampedArray(/** Iterable<?number> */ source, /** ?function(*, number):number */ mapFn, /** S */ thisArg) {
  $Overlay.$clinit();
  return Uint8ClampedArray.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)), mapFn, thisArg);
 }
 /** @final @nodts @return {Uint8ClampedArray} */
 static m_from__elemental2_core_JsIterable__elemental2_core_Uint8ClampedArray_FromMapFn__elemental2_core_Uint8ClampedArray(/** Iterable<?number> */ source, /** ?function(*, number):number */ mapFn) {
  $Overlay.$clinit();
  return Uint8ClampedArray.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)), mapFn);
 }
 /** @final @nodts @return {Uint8ClampedArray} */
 static m_from__elemental2_core_JsIterable__elemental2_core_Uint8ClampedArray(/** Iterable<?number> */ source) {
  $Overlay.$clinit();
  return Uint8ClampedArray.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)));
 }
 /** @final @nodts @template S @return {Uint8ClampedArray} */
 static m_from__java_lang_String__elemental2_core_Uint8ClampedArray_FromMapFn__java_lang_Object__elemental2_core_Uint8ClampedArray(/** ?string */ source, /** ?function(*, number):number */ mapFn, /** S */ thisArg) {
  $Overlay.$clinit();
  return Uint8ClampedArray.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)), mapFn, thisArg);
 }
 /** @final @nodts @return {Uint8ClampedArray} */
 static m_from__java_lang_String__elemental2_core_Uint8ClampedArray_FromMapFn__elemental2_core_Uint8ClampedArray(/** ?string */ source, /** ?function(*, number):number */ mapFn) {
  $Overlay.$clinit();
  return Uint8ClampedArray.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)), mapFn);
 }
 /** @final @nodts @return {Uint8ClampedArray} */
 static m_from__java_lang_String__elemental2_core_Uint8ClampedArray(/** ?string */ source) {
  $Overlay.$clinit();
  return Uint8ClampedArray.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)));
 }
 /** @final @nodts @template S @return {Uint8ClampedArray} */
 static m_from__arrayOf_double__elemental2_core_Uint8ClampedArray_FromMapFn__java_lang_Object__elemental2_core_Uint8ClampedArray(/** Array<number> */ source, /** ?function(*, number):number */ mapFn, /** S */ thisArg) {
  $Overlay.$clinit();
  return $Overlay.m_from__jsinterop_base_JsArrayLike__elemental2_core_Uint8ClampedArray_FromMapFn__java_lang_Object__elemental2_core_Uint8ClampedArray(/**@type {IArrayLike<?number>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)), mapFn, thisArg);
 }
 /** @final @nodts @return {Uint8ClampedArray} */
 static m_from__arrayOf_double__elemental2_core_Uint8ClampedArray_FromMapFn__elemental2_core_Uint8ClampedArray(/** Array<number> */ source, /** ?function(*, number):number */ mapFn) {
  $Overlay.$clinit();
  return $Overlay.m_from__jsinterop_base_JsArrayLike__elemental2_core_Uint8ClampedArray_FromMapFn__elemental2_core_Uint8ClampedArray(/**@type {IArrayLike<?number>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)), mapFn);
 }
 /** @final @nodts @return {Uint8ClampedArray} */
 static m_from__arrayOf_double__elemental2_core_Uint8ClampedArray(/** Array<number> */ source) {
  $Overlay.$clinit();
  return $Overlay.m_from__jsinterop_base_JsArrayLike__elemental2_core_Uint8ClampedArray(/**@type {IArrayLike<?number>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(source)));
 }
 /** @nodts @return {number} */
 static get f_BYTES_PER_ELEMENT__elemental2_core_Uint8ClampedArray_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_BYTES_PER_ELEMENT__elemental2_core_Uint8ClampedArray_$Overlay);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_BYTES_PER_ELEMENT__elemental2_core_Uint8ClampedArray_$Overlay = Uint8ClampedArray.BYTES_PER_ELEMENT;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Uint8ClampedArray;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
/**@private {number} @nodts*/
$Overlay.$static_BYTES_PER_ELEMENT__elemental2_core_Uint8ClampedArray_$Overlay = 0;
$Util.$setClassMetadata($Overlay, 'Uint8ClampedArray');

exports = $Overlay;

//# sourceMappingURL=Uint8ClampedArray$$Overlay.js.map

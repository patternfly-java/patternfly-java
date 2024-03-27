goog.module('elemental2.core.JsArray.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ArrayStamper = goog.forwardDeclare('javaemul.internal.ArrayStamper$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @template T @return {Array<T>} */
 static m_asJsArray__arrayOf_java_lang_Object__elemental2_core_JsArray(/** Array<T> */ array) {
  $Overlay.$clinit();
  return /**@type {Array<T>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(array));
 }
 /** @final @nodts @template T, S, R @return {Array<R>} */
 static m_from__jsinterop_base_JsArrayLike__elemental2_core_JsArray_FromMapFn__java_lang_Object__elemental2_core_JsArray(/** IArrayLike<T> */ arrayLike, /** ?function(?, number):? */ mapFn, /** S */ this_) {
  $Overlay.$clinit();
  return /**@type {Array<R>}*/ (Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(arrayLike)), mapFn, this_));
 }
 /** @final @nodts @template T, R @return {Array<R>} */
 static m_from__jsinterop_base_JsArrayLike__elemental2_core_JsArray_FromMapFn__elemental2_core_JsArray(/** IArrayLike<T> */ arrayLike, /** ?function(?, number):? */ mapFn) {
  $Overlay.$clinit();
  return /**@type {Array<R>}*/ (Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(arrayLike)), mapFn));
 }
 /** @final @nodts @template T, R @return {Array<R>} */
 static m_from__jsinterop_base_JsArrayLike__elemental2_core_JsArray(/** IArrayLike<T> */ arrayLike) {
  $Overlay.$clinit();
  return /**@type {Array<R>}*/ (Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(arrayLike))));
 }
 /** @final @nodts @template T, S, R @return {Array<R>} */
 static m_from__elemental2_core_JsIterable__elemental2_core_JsArray_FromMapFn__java_lang_Object__elemental2_core_JsArray(/** Iterable<T> */ arrayLike, /** ?function(?, number):? */ mapFn, /** S */ this_) {
  $Overlay.$clinit();
  return /**@type {Array<R>}*/ (Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(arrayLike)), mapFn, this_));
 }
 /** @final @nodts @template T, R @return {Array<R>} */
 static m_from__elemental2_core_JsIterable__elemental2_core_JsArray_FromMapFn__elemental2_core_JsArray(/** Iterable<T> */ arrayLike, /** ?function(?, number):? */ mapFn) {
  $Overlay.$clinit();
  return /**@type {Array<R>}*/ (Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(arrayLike)), mapFn));
 }
 /** @final @nodts @template T, R @return {Array<R>} */
 static m_from__elemental2_core_JsIterable__elemental2_core_JsArray(/** Iterable<T> */ arrayLike) {
  $Overlay.$clinit();
  return /**@type {Array<R>}*/ (Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(arrayLike))));
 }
 /** @final @nodts @template T, S, R @return {Array<R>} */
 static m_from__java_lang_String__elemental2_core_JsArray_FromMapFn__java_lang_Object__elemental2_core_JsArray(/** ?string */ arrayLike, /** ?function(?, number):? */ mapFn, /** S */ this_) {
  $Overlay.$clinit();
  return /**@type {Array<R>}*/ (Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(arrayLike)), mapFn, this_));
 }
 /** @final @nodts @template T, R @return {Array<R>} */
 static m_from__java_lang_String__elemental2_core_JsArray_FromMapFn__elemental2_core_JsArray(/** ?string */ arrayLike, /** ?function(?, number):? */ mapFn) {
  $Overlay.$clinit();
  return /**@type {Array<R>}*/ (Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(arrayLike)), mapFn));
 }
 /** @final @nodts @template T, R @return {Array<R>} */
 static m_from__java_lang_String__elemental2_core_JsArray(/** ?string */ arrayLike) {
  $Overlay.$clinit();
  return /**@type {Array<R>}*/ (Array.from(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(arrayLike))));
 }
 /** @final @nodts @template T, S, R @return {Array<R>} */
 static m_from__arrayOf_java_lang_Object__elemental2_core_JsArray_FromMapFn__java_lang_Object__elemental2_core_JsArray(/** Array<T> */ arrayLike, /** ?function(?, number):? */ mapFn, /** S */ this_) {
  $Overlay.$clinit();
  return /**@type {Array<R>}*/ ($Overlay.m_from__jsinterop_base_JsArrayLike__elemental2_core_JsArray_FromMapFn__java_lang_Object__elemental2_core_JsArray(/**@type {IArrayLike<T>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(arrayLike)), mapFn, this_));
 }
 /** @final @nodts @template T, R @return {Array<R>} */
 static m_from__arrayOf_java_lang_Object__elemental2_core_JsArray_FromMapFn__elemental2_core_JsArray(/** Array<T> */ arrayLike, /** ?function(?, number):? */ mapFn) {
  $Overlay.$clinit();
  return /**@type {Array<R>}*/ ($Overlay.m_from__jsinterop_base_JsArrayLike__elemental2_core_JsArray_FromMapFn__elemental2_core_JsArray(/**@type {IArrayLike<T>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(arrayLike)), mapFn));
 }
 /** @final @nodts @template T, R @return {Array<R>} */
 static m_from__arrayOf_java_lang_Object__elemental2_core_JsArray(/** Array<T> */ arrayLike) {
  $Overlay.$clinit();
  return /**@type {Array<R>}*/ ($Overlay.m_from__jsinterop_base_JsArrayLike__elemental2_core_JsArray(/**@type {IArrayLike<T>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(arrayLike))));
 }
 /** @final @nodts @template T @return {Array<T>} */
 static m_asArray__$devirt__elemental2_core_JsArray__arrayOf_java_lang_Object__arrayOf_java_lang_Object(/** !Array<T> */ $thisArg, /** Array<T> */ reference) {
  $Overlay.$clinit();
  return ArrayStamper.m_stampJavaTypeInfo__java_lang_Object__arrayOf_java_lang_Object__arrayOf_java_lang_Object($thisArg, reference);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Array;
 }
 
 /** @nodts */
 static $loadModules() {
  ArrayStamper = goog.module.get('javaemul.internal.ArrayStamper$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'Array');

exports = $Overlay;

//# sourceMappingURL=JsArray$$Overlay.js.map

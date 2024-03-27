goog.module('elemental2.core.TypedArray.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts */
 static m_set__$devirt__elemental2_core_TypedArray__elemental2_core_ArrayBufferView__int__void(/** !TypedArray */ $thisArg, /** ArrayBufferView */ array, /** number */ offset) {
  $Overlay.$clinit();
  $thisArg.set(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(array)), offset);
 }
 /** @final @nodts */
 static m_set__$devirt__elemental2_core_TypedArray__elemental2_core_ArrayBufferView__void(/** !TypedArray */ $thisArg, /** ArrayBufferView */ array) {
  $Overlay.$clinit();
  $thisArg.set(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(array)));
 }
 /** @final @nodts */
 static m_set__$devirt__elemental2_core_TypedArray__elemental2_core_JsArray__int__void(/** !TypedArray */ $thisArg, /** Array<?number> */ array, /** number */ offset) {
  $Overlay.$clinit();
  $thisArg.set(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(array)), offset);
 }
 /** @final @nodts */
 static m_set__$devirt__elemental2_core_TypedArray__elemental2_core_JsArray__void(/** !TypedArray */ $thisArg, /** Array<?number> */ array) {
  $Overlay.$clinit();
  $thisArg.set(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(array)));
 }
 /** @final @nodts */
 static m_set__$devirt__elemental2_core_TypedArray__arrayOf_double__int__void(/** !TypedArray */ $thisArg, /** Array<number> */ array, /** number */ offset) {
  $Overlay.$clinit();
  $Overlay.m_set__$devirt__elemental2_core_TypedArray__elemental2_core_JsArray__int__void($thisArg, /**@type {Array<?number>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(array)), offset);
 }
 /** @final @nodts */
 static m_set__$devirt__elemental2_core_TypedArray__arrayOf_double__void(/** !TypedArray */ $thisArg, /** Array<number> */ array) {
  $Overlay.$clinit();
  $Overlay.m_set__$devirt__elemental2_core_TypedArray__elemental2_core_JsArray__void($thisArg, /**@type {Array<?number>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(array)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TypedArray;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'TypedArray');

exports = $Overlay;

//# sourceMappingURL=TypedArray$$Overlay.js.map

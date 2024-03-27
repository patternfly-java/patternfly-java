goog.module('elemental2.core.JsWeakMap.ConstructorIterableUnionType.$Overlay$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_core_JsWeakMap_ConstructorIterableUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @template KEY, VALUE @return {Array<Array<?>>} */
 static m_asJsArray__$devirt__elemental2_core_JsWeakMap_ConstructorIterableUnionType__elemental2_core_JsArray(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Array<Array<?>>}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), JsArray_$Overlay));
 }
 /** @nodts @template KEY, VALUE @return {Iterable<Array<?>>} */
 static m_asJsIterable__$devirt__elemental2_core_JsWeakMap_ConstructorIterableUnionType__elemental2_core_JsIterable(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Iterable<Array<?>>}*/ (Js.m_cast__java_lang_Object__java_lang_Object($thisArg));
 }
 /** @nodts @template KEY, VALUE @return {boolean} */
 static m_isJsArray__$devirt__elemental2_core_JsWeakMap_ConstructorIterableUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return JsArray_$Overlay.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  JsArray_$Overlay = goog.module.get('elemental2.core.JsArray.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=JsWeakMap$ConstructorIterableUnionType$$Overlay.js.map

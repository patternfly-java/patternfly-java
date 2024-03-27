goog.module('elemental2.core.JsWeakSet.ConstructorIterableUnionType.$Overlay$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_core_JsWeakSet_ConstructorIterableUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @template VALUE @return {Array<VALUE>} */
 static m_asJsArray__$devirt__elemental2_core_JsWeakSet_ConstructorIterableUnionType__elemental2_core_JsArray(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Array<VALUE>}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), JsArray_$Overlay));
 }
 /** @nodts @template VALUE @return {Iterable<VALUE>} */
 static m_asJsIterable__$devirt__elemental2_core_JsWeakSet_ConstructorIterableUnionType__elemental2_core_JsIterable(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Iterable<VALUE>}*/ (Js.m_cast__java_lang_Object__java_lang_Object($thisArg));
 }
 /** @nodts @template VALUE @return {boolean} */
 static m_isJsArray__$devirt__elemental2_core_JsWeakSet_ConstructorIterableUnionType__boolean(/** ? */ $thisArg) {
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

//# sourceMappingURL=JsWeakSet$ConstructorIterableUnionType$$Overlay.js.map

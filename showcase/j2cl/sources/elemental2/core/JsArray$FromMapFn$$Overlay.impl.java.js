goog.module('elemental2.core.JsArray.FromMapFn.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts @template T, R @return {R} */
 static m_onInvoke__$devirt__elemental2_core_JsArray_FromMapFn__java_lang_String__int__java_lang_Object(/** function(?, number):R */ $thisArg, /** ?string */ p0, /** number */ p1) {
  $Overlay.$clinit();
  return $thisArg(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(p0)), p1);
 }
 /** @nodts @template T, R @return {R} */
 static m_onInvoke__$devirt__elemental2_core_JsArray_FromMapFn__java_lang_Object__int__java_lang_Object(/** function(?, number):R */ $thisArg, /** T */ p0, /** number */ p1) {
  $Overlay.$clinit();
  return $thisArg(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(p0)), p1);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=JsArray$FromMapFn$$Overlay.js.map

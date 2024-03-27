goog.module('elemental2.core.ReadonlyArray.FindPredicateFn.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts @template T @return {boolean} */
 static m_onInvoke__$devirt__elemental2_core_ReadonlyArray_FindPredicateFn__java_lang_Object__double__arrayOf_java_lang_Object__boolean(/** function(T, number, Array<T>):boolean */ $thisArg, /** T */ p0, /** number */ p1, /** Array<T> */ p2) {
  $Overlay.$clinit();
  return $thisArg(p0, p1, /**@type {Array<T>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(p2)));
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

//# sourceMappingURL=ReadonlyArray$FindPredicateFn$$Overlay.js.map

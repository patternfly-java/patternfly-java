goog.module('elemental2.core.TypedArray.ReduceRightCallbackFn.P0UnionType.$Overlay$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_core_TypedArray_ReduceRightCallbackFn_P0UnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @template INIT, RET @return {number} */
 static m_asDouble__$devirt__elemental2_core_TypedArray_ReduceRightCallbackFn_P0UnionType__double(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asDouble__java_lang_Object__double($thisArg);
 }
 /** @nodts @template INIT, RET @return {INIT} */
 static m_asINIT__$devirt__elemental2_core_TypedArray_ReduceRightCallbackFn_P0UnionType__java_lang_Object(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_cast__java_lang_Object__java_lang_Object($thisArg);
 }
 /** @nodts @template INIT, RET @return {RET} */
 static m_asRET__$devirt__elemental2_core_TypedArray_ReduceRightCallbackFn_P0UnionType__java_lang_Object(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_cast__java_lang_Object__java_lang_Object($thisArg);
 }
 /** @nodts @template INIT, RET @return {boolean} */
 static m_isDouble__$devirt__elemental2_core_TypedArray_ReduceRightCallbackFn_P0UnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Double.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=TypedArray$ReduceRightCallbackFn$P0UnionType$$Overlay.js.map

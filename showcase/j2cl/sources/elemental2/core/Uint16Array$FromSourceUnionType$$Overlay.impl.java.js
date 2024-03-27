goog.module('elemental2.core.Uint16Array.FromSourceUnionType.$Overlay$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_core_Uint16Array_FromSourceUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {IArrayLike<?number>} */
 static m_asJsArrayLike__$devirt__elemental2_core_Uint16Array_FromSourceUnionType__jsinterop_base_JsArrayLike(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {IArrayLike<?number>}*/ (Js.m_cast__java_lang_Object__java_lang_Object($thisArg));
 }
 /** @nodts @return {Iterable<?number>} */
 static m_asJsIterable__$devirt__elemental2_core_Uint16Array_FromSourceUnionType__elemental2_core_JsIterable(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Iterable<?number>}*/ (Js.m_cast__java_lang_Object__java_lang_Object($thisArg));
 }
 /** @nodts @return {?string} */
 static m_asString__$devirt__elemental2_core_Uint16Array_FromSourceUnionType__java_lang_String(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asString__java_lang_Object__java_lang_String($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isString__$devirt__elemental2_core_Uint16Array_FromSourceUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return j_l_String.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=Uint16Array$FromSourceUnionType$$Overlay.js.map

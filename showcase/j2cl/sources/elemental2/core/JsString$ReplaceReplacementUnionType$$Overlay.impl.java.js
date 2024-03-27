goog.module('elemental2.core.JsString.ReplaceReplacementUnionType.$Overlay$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $JavaScriptFunction = goog.forwardDeclare('vmbootstrap.JavaScriptFunction$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_core_JsString_ReplaceReplacementUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {?function(?string, ...*):*} */
 static m_asReplaceReplacementFn__$devirt__elemental2_core_JsString_ReplaceReplacementUnionType__elemental2_core_JsString_ReplaceReplacementFn(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {?function(?string, ...*):*}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), $JavaScriptFunction));
 }
 /** @nodts @return {?string} */
 static m_asString__$devirt__elemental2_core_JsString_ReplaceReplacementUnionType__java_lang_String(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asString__java_lang_Object__java_lang_String($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isReplaceReplacementFn__$devirt__elemental2_core_JsString_ReplaceReplacementUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return $JavaScriptFunction.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isString__$devirt__elemental2_core_JsString_ReplaceReplacementUnionType__boolean(/** ? */ $thisArg) {
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
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $JavaScriptFunction = goog.module.get('vmbootstrap.JavaScriptFunction$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=JsString$ReplaceReplacementUnionType$$Overlay.js.map

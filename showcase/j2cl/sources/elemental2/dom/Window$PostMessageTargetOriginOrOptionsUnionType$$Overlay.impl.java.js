goog.module('elemental2.dom.Window.PostMessageTargetOriginOrOptionsUnionType.$Overlay$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_Window_PostMessageTargetOriginOrOptionsUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {?string} */
 static m_asString__$devirt__elemental2_dom_Window_PostMessageTargetOriginOrOptionsUnionType__java_lang_String(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asString__java_lang_Object__java_lang_String($thisArg);
 }
 /** @nodts @return {WindowPostMessageOptions} */
 static m_asWindowPostMessageOptions__$devirt__elemental2_dom_Window_PostMessageTargetOriginOrOptionsUnionType__elemental2_dom_WindowPostMessageOptions(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {WindowPostMessageOptions}*/ (Js.m_cast__java_lang_Object__java_lang_Object($thisArg));
 }
 /** @nodts @return {boolean} */
 static m_isString__$devirt__elemental2_dom_Window_PostMessageTargetOriginOrOptionsUnionType__boolean(/** ? */ $thisArg) {
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

//# sourceMappingURL=Window$PostMessageTargetOriginOrOptionsUnionType$$Overlay.js.map

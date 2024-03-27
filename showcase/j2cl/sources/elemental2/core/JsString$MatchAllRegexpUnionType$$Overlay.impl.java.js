goog.module('elemental2.core.JsString.MatchAllRegexpUnionType.$Overlay$impl');

let JsRegExp_$Overlay = goog.forwardDeclare('elemental2.core.JsRegExp.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_core_JsString_MatchAllRegexpUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {RegExp} */
 static m_asJsRegExp__$devirt__elemental2_core_JsString_MatchAllRegexpUnionType__elemental2_core_JsRegExp(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {RegExp}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), JsRegExp_$Overlay));
 }
 /** @nodts @return {?string} */
 static m_asString__$devirt__elemental2_core_JsString_MatchAllRegexpUnionType__java_lang_String(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asString__java_lang_Object__java_lang_String($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isJsRegExp__$devirt__elemental2_core_JsString_MatchAllRegexpUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return JsRegExp_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isString__$devirt__elemental2_core_JsString_MatchAllRegexpUnionType__boolean(/** ? */ $thisArg) {
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
  JsRegExp_$Overlay = goog.module.get('elemental2.core.JsRegExp.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=JsString$MatchAllRegexpUnionType$$Overlay.js.map

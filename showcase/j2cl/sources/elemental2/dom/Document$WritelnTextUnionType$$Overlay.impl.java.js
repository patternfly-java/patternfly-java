goog.module('elemental2.dom.Document.WritelnTextUnionType.$Overlay$impl');

let TrustedHTML_$Overlay = goog.forwardDeclare('elemental2.dom.TrustedHTML.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_Document_WritelnTextUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {?string} */
 static m_asString__$devirt__elemental2_dom_Document_WritelnTextUnionType__java_lang_String(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asString__java_lang_Object__java_lang_String($thisArg);
 }
 /** @nodts @return {TrustedHTML} */
 static m_asTrustedHTML__$devirt__elemental2_dom_Document_WritelnTextUnionType__elemental2_dom_TrustedHTML(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {TrustedHTML}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), TrustedHTML_$Overlay));
 }
 /** @nodts @return {boolean} */
 static m_isString__$devirt__elemental2_dom_Document_WritelnTextUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return j_l_String.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isTrustedHTML__$devirt__elemental2_dom_Document_WritelnTextUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return TrustedHTML_$Overlay.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  TrustedHTML_$Overlay = goog.module.get('elemental2.dom.TrustedHTML.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=Document$WritelnTextUnionType$$Overlay.js.map

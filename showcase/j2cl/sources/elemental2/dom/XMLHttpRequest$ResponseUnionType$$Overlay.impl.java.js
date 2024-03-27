goog.module('elemental2.dom.XMLHttpRequest.ResponseUnionType.$Overlay$impl');

let JsObject_$Overlay = goog.forwardDeclare('elemental2.core.JsObject.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_XMLHttpRequest_ResponseUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {Object} */
 static m_asJsObject__$devirt__elemental2_dom_XMLHttpRequest_ResponseUnionType__elemental2_core_JsObject(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), JsObject_$Overlay));
 }
 /** @nodts @return {?string} */
 static m_asString__$devirt__elemental2_dom_XMLHttpRequest_ResponseUnionType__java_lang_String(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asString__java_lang_Object__java_lang_String($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isJsObject__$devirt__elemental2_dom_XMLHttpRequest_ResponseUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return JsObject_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isString__$devirt__elemental2_dom_XMLHttpRequest_ResponseUnionType__boolean(/** ? */ $thisArg) {
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
  JsObject_$Overlay = goog.module.get('elemental2.core.JsObject.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=XMLHttpRequest$ResponseUnionType$$Overlay.js.map

goog.module('elemental2.dom.DomGlobal.FetchInputUnionType.$Overlay$impl');

let Request_$Overlay = goog.forwardDeclare('elemental2.dom.Request.$Overlay$impl');
let URL_$Overlay = goog.forwardDeclare('elemental2.dom.URL.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_DomGlobal_FetchInputUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {Request} */
 static m_asRequest__$devirt__elemental2_dom_DomGlobal_FetchInputUnionType__elemental2_dom_Request(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Request}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), Request_$Overlay));
 }
 /** @nodts @return {?string} */
 static m_asString__$devirt__elemental2_dom_DomGlobal_FetchInputUnionType__java_lang_String(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asString__java_lang_Object__java_lang_String($thisArg);
 }
 /** @nodts @return {URL} */
 static m_asURL__$devirt__elemental2_dom_DomGlobal_FetchInputUnionType__elemental2_dom_URL(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {URL}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), URL_$Overlay));
 }
 /** @nodts @return {boolean} */
 static m_isRequest__$devirt__elemental2_dom_DomGlobal_FetchInputUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Request_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isString__$devirt__elemental2_dom_DomGlobal_FetchInputUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return j_l_String.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isURL__$devirt__elemental2_dom_DomGlobal_FetchInputUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return URL_$Overlay.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Request_$Overlay = goog.module.get('elemental2.dom.Request.$Overlay$impl');
  URL_$Overlay = goog.module.get('elemental2.dom.URL.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=DomGlobal$FetchInputUnionType$$Overlay.js.map

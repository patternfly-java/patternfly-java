goog.module('elemental2.dom.FormData.GetAllArrayUnionType.$Overlay$impl');

let File_$Overlay = goog.forwardDeclare('elemental2.dom.File.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_FormData_GetAllArrayUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {File} */
 static m_asFile__$devirt__elemental2_dom_FormData_GetAllArrayUnionType__elemental2_dom_File(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {File}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), File_$Overlay));
 }
 /** @nodts @return {?string} */
 static m_asString__$devirt__elemental2_dom_FormData_GetAllArrayUnionType__java_lang_String(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asString__java_lang_Object__java_lang_String($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isFile__$devirt__elemental2_dom_FormData_GetAllArrayUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return File_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isString__$devirt__elemental2_dom_FormData_GetAllArrayUnionType__boolean(/** ? */ $thisArg) {
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
  File_$Overlay = goog.module.get('elemental2.dom.File.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=FormData$GetAllArrayUnionType$$Overlay.js.map

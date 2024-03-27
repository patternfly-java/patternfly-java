goog.module('elemental2.core.JSONType.StringifyReplacerUnionType.$Overlay$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $JavaScriptFunction = goog.forwardDeclare('vmbootstrap.JavaScriptFunction$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_core_JSONType_StringifyReplacerUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {Array<?string>} */
 static m_asJsArray__$devirt__elemental2_core_JSONType_StringifyReplacerUnionType__elemental2_core_JsArray(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Array<?string>}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), JsArray_$Overlay));
 }
 /** @nodts @return {?function(?string, *):*} */
 static m_asStringifyReplacerFn__$devirt__elemental2_core_JSONType_StringifyReplacerUnionType__elemental2_core_JSONType_StringifyReplacerFn(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {?function(?string, *):*}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), $JavaScriptFunction));
 }
 /** @nodts @return {boolean} */
 static m_isJsArray__$devirt__elemental2_core_JSONType_StringifyReplacerUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return JsArray_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isStringifyReplacerFn__$devirt__elemental2_core_JSONType_StringifyReplacerUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return $JavaScriptFunction.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  JsArray_$Overlay = goog.module.get('elemental2.core.JsArray.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $JavaScriptFunction = goog.module.get('vmbootstrap.JavaScriptFunction$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=JSONType$StringifyReplacerUnionType$$Overlay.js.map

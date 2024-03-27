goog.module('elemental2.core.JsObject.HasOwnPropertyNameUnionType.$Overlay$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_core_JsObject_HasOwnPropertyNameUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {*} */
 static m_asObject__$devirt__elemental2_core_JsObject_HasOwnPropertyNameUnionType__java_lang_Object(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_cast__java_lang_Object__java_lang_Object($thisArg);
 }
 /** @nodts @return {?string} */
 static m_asString__$devirt__elemental2_core_JsObject_HasOwnPropertyNameUnionType__java_lang_String(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asString__java_lang_Object__java_lang_String($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isObject__$devirt__elemental2_core_JsObject_HasOwnPropertyNameUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return !$Equality.$same($thisArg, null);
 }
 /** @nodts @return {boolean} */
 static m_isString__$devirt__elemental2_core_JsObject_HasOwnPropertyNameUnionType__boolean(/** ? */ $thisArg) {
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
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=JsObject$HasOwnPropertyNameUnionType$$Overlay.js.map

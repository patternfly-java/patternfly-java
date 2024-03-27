goog.module('elemental2.dom.Headers.ConstructorHeadersInitUnionType.$Overlay$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Headers_$Overlay = goog.forwardDeclare('elemental2.dom.Headers.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_Headers_ConstructorHeadersInitUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {Headers} */
 static m_asHeaders__$devirt__elemental2_dom_Headers_ConstructorHeadersInitUnionType__elemental2_dom_Headers(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Headers}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), Headers_$Overlay));
 }
 /** @nodts @return {Array<Array<?string>>} */
 static m_asJsArray__$devirt__elemental2_dom_Headers_ConstructorHeadersInitUnionType__elemental2_core_JsArray(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Array<Array<?string>>}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), JsArray_$Overlay));
 }
 /** @nodts @return {Object<string, ?string>} */
 static m_asJsPropertyMap__$devirt__elemental2_dom_Headers_ConstructorHeadersInitUnionType__jsinterop_base_JsPropertyMap(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Object<string, ?string>}*/ (Js.m_cast__java_lang_Object__java_lang_Object($thisArg));
 }
 /** @nodts @return {boolean} */
 static m_isHeaders__$devirt__elemental2_dom_Headers_ConstructorHeadersInitUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Headers_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isJsArray__$devirt__elemental2_dom_Headers_ConstructorHeadersInitUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return JsArray_$Overlay.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  JsArray_$Overlay = goog.module.get('elemental2.core.JsArray.$Overlay$impl');
  Headers_$Overlay = goog.module.get('elemental2.dom.Headers.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=Headers$ConstructorHeadersInitUnionType$$Overlay.js.map

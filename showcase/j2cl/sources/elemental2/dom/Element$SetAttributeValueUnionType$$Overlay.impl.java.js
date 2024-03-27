goog.module('elemental2.dom.Element.SetAttributeValueUnionType.$Overlay$impl');

let TrustedHTML_$Overlay = goog.forwardDeclare('elemental2.dom.TrustedHTML.$Overlay$impl');
let TrustedScriptURL_$Overlay = goog.forwardDeclare('elemental2.dom.TrustedScriptURL.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_Element_SetAttributeValueUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {boolean} */
 static m_asBoolean__$devirt__elemental2_dom_Element_SetAttributeValueUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asBoolean__java_lang_Object__boolean($thisArg);
 }
 /** @nodts @return {number} */
 static m_asDouble__$devirt__elemental2_dom_Element_SetAttributeValueUnionType__double(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asDouble__java_lang_Object__double($thisArg);
 }
 /** @nodts @return {?string} */
 static m_asString__$devirt__elemental2_dom_Element_SetAttributeValueUnionType__java_lang_String(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asString__java_lang_Object__java_lang_String($thisArg);
 }
 /** @nodts @return {TrustedHTML} */
 static m_asTrustedHTML__$devirt__elemental2_dom_Element_SetAttributeValueUnionType__elemental2_dom_TrustedHTML(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {TrustedHTML}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), TrustedHTML_$Overlay));
 }
 /** @nodts @return {TrustedScriptURL} */
 static m_asTrustedScriptURL__$devirt__elemental2_dom_Element_SetAttributeValueUnionType__elemental2_dom_TrustedScriptURL(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {TrustedScriptURL}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), TrustedScriptURL_$Overlay));
 }
 /** @nodts @return {boolean} */
 static m_isBoolean__$devirt__elemental2_dom_Element_SetAttributeValueUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Boolean.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isDouble__$devirt__elemental2_dom_Element_SetAttributeValueUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Double.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isString__$devirt__elemental2_dom_Element_SetAttributeValueUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return j_l_String.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isTrustedHTML__$devirt__elemental2_dom_Element_SetAttributeValueUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return TrustedHTML_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isTrustedScriptURL__$devirt__elemental2_dom_Element_SetAttributeValueUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return TrustedScriptURL_$Overlay.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  TrustedHTML_$Overlay = goog.module.get('elemental2.dom.TrustedHTML.$Overlay$impl');
  TrustedScriptURL_$Overlay = goog.module.get('elemental2.dom.TrustedScriptURL.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Double = goog.module.get('java.lang.Double$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=Element$SetAttributeValueUnionType$$Overlay.js.map

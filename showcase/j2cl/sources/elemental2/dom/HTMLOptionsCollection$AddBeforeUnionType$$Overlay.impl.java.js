goog.module('elemental2.dom.HTMLOptionsCollection.AddBeforeUnionType.$Overlay$impl');

let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_HTMLOptionsCollection_AddBeforeUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {number} */
 static m_asDouble__$devirt__elemental2_dom_HTMLOptionsCollection_AddBeforeUnionType__double(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asDouble__java_lang_Object__double($thisArg);
 }
 /** @nodts @return {HTMLElement} */
 static m_asHTMLElement__$devirt__elemental2_dom_HTMLOptionsCollection_AddBeforeUnionType__elemental2_dom_HTMLElement(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), HTMLElement_$Overlay));
 }
 /** @nodts @return {boolean} */
 static m_isDouble__$devirt__elemental2_dom_HTMLOptionsCollection_AddBeforeUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Double.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isHTMLElement__$devirt__elemental2_dom_HTMLOptionsCollection_AddBeforeUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return HTMLElement_$Overlay.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  Double = goog.module.get('java.lang.Double$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=HTMLOptionsCollection$AddBeforeUnionType$$Overlay.js.map

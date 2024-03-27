goog.module('elemental2.dom.Window.FrameElementUnionType.$Overlay$impl');

let HTMLIFrameElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLIFrameElement.$Overlay$impl');
let HTMLObjectElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLObjectElement.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_Window_FrameElementUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {HTMLIFrameElement} */
 static m_asHTMLIFrameElement__$devirt__elemental2_dom_Window_FrameElementUnionType__elemental2_dom_HTMLIFrameElement(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {HTMLIFrameElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), HTMLIFrameElement_$Overlay));
 }
 /** @nodts @return {HTMLObjectElement} */
 static m_asHTMLObjectElement__$devirt__elemental2_dom_Window_FrameElementUnionType__elemental2_dom_HTMLObjectElement(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {HTMLObjectElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), HTMLObjectElement_$Overlay));
 }
 /** @nodts @return {boolean} */
 static m_isHTMLIFrameElement__$devirt__elemental2_dom_Window_FrameElementUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return HTMLIFrameElement_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isHTMLObjectElement__$devirt__elemental2_dom_Window_FrameElementUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return HTMLObjectElement_$Overlay.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLIFrameElement_$Overlay = goog.module.get('elemental2.dom.HTMLIFrameElement.$Overlay$impl');
  HTMLObjectElement_$Overlay = goog.module.get('elemental2.dom.HTMLObjectElement.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=Window$FrameElementUnionType$$Overlay.js.map

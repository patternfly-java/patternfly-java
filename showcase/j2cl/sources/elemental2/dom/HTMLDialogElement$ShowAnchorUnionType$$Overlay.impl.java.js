goog.module('elemental2.dom.HTMLDialogElement.ShowAnchorUnionType.$Overlay$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_HTMLDialogElement_ShowAnchorUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {Element} */
 static m_asElement__$devirt__elemental2_dom_HTMLDialogElement_ShowAnchorUnionType__elemental2_dom_Element(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Element}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), Element_$Overlay));
 }
 /** @nodts @return {MouseEvent} */
 static m_asMouseEvent__$devirt__elemental2_dom_HTMLDialogElement_ShowAnchorUnionType__elemental2_dom_MouseEvent(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {MouseEvent}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), MouseEvent_$Overlay));
 }
 /** @nodts @return {boolean} */
 static m_isElement__$devirt__elemental2_dom_HTMLDialogElement_ShowAnchorUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Element_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isMouseEvent__$devirt__elemental2_dom_HTMLDialogElement_ShowAnchorUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return MouseEvent_$Overlay.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=HTMLDialogElement$ShowAnchorUnionType$$Overlay.js.map

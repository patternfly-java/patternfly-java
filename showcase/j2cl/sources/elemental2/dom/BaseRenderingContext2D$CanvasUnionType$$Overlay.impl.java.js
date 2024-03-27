goog.module('elemental2.dom.BaseRenderingContext2D.CanvasUnionType.$Overlay$impl');

let HTMLCanvasElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLCanvasElement.$Overlay$impl');
let OffscreenCanvas_$Overlay = goog.forwardDeclare('elemental2.dom.OffscreenCanvas.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_BaseRenderingContext2D_CanvasUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {HTMLCanvasElement} */
 static m_asHTMLCanvasElement__$devirt__elemental2_dom_BaseRenderingContext2D_CanvasUnionType__elemental2_dom_HTMLCanvasElement(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {HTMLCanvasElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), HTMLCanvasElement_$Overlay));
 }
 /** @nodts @return {OffscreenCanvas} */
 static m_asOffscreenCanvas__$devirt__elemental2_dom_BaseRenderingContext2D_CanvasUnionType__elemental2_dom_OffscreenCanvas(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {OffscreenCanvas}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), OffscreenCanvas_$Overlay));
 }
 /** @nodts @return {boolean} */
 static m_isHTMLCanvasElement__$devirt__elemental2_dom_BaseRenderingContext2D_CanvasUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return HTMLCanvasElement_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isOffscreenCanvas__$devirt__elemental2_dom_BaseRenderingContext2D_CanvasUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return OffscreenCanvas_$Overlay.$isInstance($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLCanvasElement_$Overlay = goog.module.get('elemental2.dom.HTMLCanvasElement.$Overlay$impl');
  OffscreenCanvas_$Overlay = goog.module.get('elemental2.dom.OffscreenCanvas.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=BaseRenderingContext2D$CanvasUnionType$$Overlay.js.map

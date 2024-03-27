goog.module('elemental2.dom.BaseRenderingContext2D.DrawImageImageUnionType.$Overlay$impl');

let HTMLCanvasElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLCanvasElement.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLVideoElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLVideoElement.$Overlay$impl');
let OffscreenCanvas_$Overlay = goog.forwardDeclare('elemental2.dom.OffscreenCanvas.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_BaseRenderingContext2D_DrawImageImageUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {HTMLCanvasElement} */
 static m_asHTMLCanvasElement__$devirt__elemental2_dom_BaseRenderingContext2D_DrawImageImageUnionType__elemental2_dom_HTMLCanvasElement(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {HTMLCanvasElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), HTMLCanvasElement_$Overlay));
 }
 /** @nodts @return {HTMLImageElement} */
 static m_asHTMLImageElement__$devirt__elemental2_dom_BaseRenderingContext2D_DrawImageImageUnionType__elemental2_dom_HTMLImageElement(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {HTMLImageElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), HTMLImageElement_$Overlay));
 }
 /** @nodts @return {HTMLVideoElement} */
 static m_asHTMLVideoElement__$devirt__elemental2_dom_BaseRenderingContext2D_DrawImageImageUnionType__elemental2_dom_HTMLVideoElement(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {HTMLVideoElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), HTMLVideoElement_$Overlay));
 }
 /** @nodts @return {ImageBitmap} */
 static m_asImageBitmap__$devirt__elemental2_dom_BaseRenderingContext2D_DrawImageImageUnionType__elemental2_dom_ImageBitmap(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {ImageBitmap}*/ (Js.m_cast__java_lang_Object__java_lang_Object($thisArg));
 }
 /** @nodts @return {OffscreenCanvas} */
 static m_asOffscreenCanvas__$devirt__elemental2_dom_BaseRenderingContext2D_DrawImageImageUnionType__elemental2_dom_OffscreenCanvas(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {OffscreenCanvas}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), OffscreenCanvas_$Overlay));
 }
 /** @nodts @return {boolean} */
 static m_isHTMLCanvasElement__$devirt__elemental2_dom_BaseRenderingContext2D_DrawImageImageUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return HTMLCanvasElement_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isHTMLImageElement__$devirt__elemental2_dom_BaseRenderingContext2D_DrawImageImageUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return HTMLImageElement_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isHTMLVideoElement__$devirt__elemental2_dom_BaseRenderingContext2D_DrawImageImageUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return HTMLVideoElement_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isOffscreenCanvas__$devirt__elemental2_dom_BaseRenderingContext2D_DrawImageImageUnionType__boolean(/** ? */ $thisArg) {
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
  HTMLImageElement_$Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  HTMLVideoElement_$Overlay = goog.module.get('elemental2.dom.HTMLVideoElement.$Overlay$impl');
  OffscreenCanvas_$Overlay = goog.module.get('elemental2.dom.OffscreenCanvas.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=BaseRenderingContext2D$DrawImageImageUnionType$$Overlay.js.map

goog.module('elemental2.dom.BaseRenderingContext2D.StrokeStyleUnionType.$Overlay$impl');

let CanvasGradient_$Overlay = goog.forwardDeclare('elemental2.dom.CanvasGradient.$Overlay$impl');
let CanvasPattern_$Overlay = goog.forwardDeclare('elemental2.dom.CanvasPattern.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {?} */
 static m_of__java_lang_Object__elemental2_dom_BaseRenderingContext2D_StrokeStyleUnionType(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object__java_lang_Object(o));
 }
 /** @nodts @return {CanvasGradient} */
 static m_asCanvasGradient__$devirt__elemental2_dom_BaseRenderingContext2D_StrokeStyleUnionType__elemental2_dom_CanvasGradient(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {CanvasGradient}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), CanvasGradient_$Overlay));
 }
 /** @nodts @return {CanvasPattern} */
 static m_asCanvasPattern__$devirt__elemental2_dom_BaseRenderingContext2D_StrokeStyleUnionType__elemental2_dom_CanvasPattern(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {CanvasPattern}*/ ($Casts.$to(Js.m_cast__java_lang_Object__java_lang_Object($thisArg), CanvasPattern_$Overlay));
 }
 /** @nodts @return {?string} */
 static m_asString__$devirt__elemental2_dom_BaseRenderingContext2D_StrokeStyleUnionType__java_lang_String(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asString__java_lang_Object__java_lang_String($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isCanvasGradient__$devirt__elemental2_dom_BaseRenderingContext2D_StrokeStyleUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return CanvasGradient_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isCanvasPattern__$devirt__elemental2_dom_BaseRenderingContext2D_StrokeStyleUnionType__boolean(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return CanvasPattern_$Overlay.$isInstance($thisArg);
 }
 /** @nodts @return {boolean} */
 static m_isString__$devirt__elemental2_dom_BaseRenderingContext2D_StrokeStyleUnionType__boolean(/** ? */ $thisArg) {
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
  CanvasGradient_$Overlay = goog.module.get('elemental2.dom.CanvasGradient.$Overlay$impl');
  CanvasPattern_$Overlay = goog.module.get('elemental2.dom.CanvasPattern.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=BaseRenderingContext2D$StrokeStyleUnionType$$Overlay.js.map

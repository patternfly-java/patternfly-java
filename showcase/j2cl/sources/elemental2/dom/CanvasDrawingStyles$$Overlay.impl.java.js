goog.module('elemental2.dom.CanvasDrawingStyles.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts */
 static m_setLineDash__$devirt__elemental2_dom_CanvasDrawingStyles__arrayOf_double__void(/** !CanvasDrawingStyles */ $thisArg, /** Array<number> */ segments) {
  $Overlay.$clinit();
  $thisArg.setLineDash(/**@type {Array<?number>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(segments)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=CanvasDrawingStyles$$Overlay.js.map

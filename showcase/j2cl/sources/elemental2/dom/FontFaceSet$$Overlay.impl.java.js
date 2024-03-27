goog.module('elemental2.dom.FontFaceSet.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts */
 static m_forEach__$devirt__elemental2_dom_FontFaceSet__elemental2_dom_FontFaceSet_ForEachCallbackFn__java_lang_Object__void(/** !FontFaceSet */ $thisArg, /** ?function(FontFace, number, FontFaceSet):* */ callback, /** * */ selfObj) {
  $Overlay.$clinit();
  $thisArg.forEach(callback, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(selfObj)));
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

//# sourceMappingURL=FontFaceSet$$Overlay.js.map

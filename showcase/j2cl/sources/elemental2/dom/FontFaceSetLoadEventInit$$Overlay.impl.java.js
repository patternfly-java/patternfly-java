goog.module('elemental2.dom.FontFaceSetLoadEventInit.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {FontFaceSetLoadEventInit} */
 static m_create__elemental2_dom_FontFaceSetLoadEventInit() {
  $Overlay.$clinit();
  return /**@type {FontFaceSetLoadEventInit}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {Object<string, *>}*/ (JsPropertyMap_$Overlay.m_of__jsinterop_base_JsPropertyMap())));
 }
 /** @nodts */
 static m_setFontfaces__$devirt__elemental2_dom_FontFaceSetLoadEventInit__arrayOf_elemental2_dom_FontFace__void(/** !FontFaceSetLoadEventInit */ $thisArg, /** Array<FontFace> */ fontfaces) {
  $Overlay.$clinit();
  $thisArg.fontfaces = /**@type {Array<FontFace>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(fontfaces));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=FontFaceSetLoadEventInit$$Overlay.js.map

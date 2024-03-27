goog.module('elemental2.dom.MutationObserverInit.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {MutationObserverInit} */
 static m_create__elemental2_dom_MutationObserverInit() {
  $Overlay.$clinit();
  return /**@type {MutationObserverInit}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {Object<string, *>}*/ (JsPropertyMap_$Overlay.m_of__jsinterop_base_JsPropertyMap())));
 }
 /** @nodts */
 static m_setAttributeFilter__$devirt__elemental2_dom_MutationObserverInit__arrayOf_java_lang_String__void(/** !MutationObserverInit */ $thisArg, /** Array<?string> */ attributeFilter) {
  $Overlay.$clinit();
  $thisArg.attributeFilter = /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(attributeFilter));
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

//# sourceMappingURL=MutationObserverInit$$Overlay.js.map

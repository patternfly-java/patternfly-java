goog.module('elemental2.dom.PerformanceObserverInit.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {PerformanceObserverInit} */
 static m_create__elemental2_dom_PerformanceObserverInit() {
  $Overlay.$clinit();
  return /**@type {PerformanceObserverInit}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {Object<string, *>}*/ (JsPropertyMap_$Overlay.m_of__jsinterop_base_JsPropertyMap())));
 }
 /** @nodts */
 static m_setEntryTypes__$devirt__elemental2_dom_PerformanceObserverInit__arrayOf_java_lang_String__void(/** !PerformanceObserverInit */ $thisArg, /** Array<?string> */ entryTypes) {
  $Overlay.$clinit();
  $thisArg.entryTypes = /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(entryTypes));
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

//# sourceMappingURL=PerformanceObserverInit$$Overlay.js.map

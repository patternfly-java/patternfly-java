goog.module('elemental2.dom.PerformanceMarkOptions.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {PerformanceMarkOptions} */
 static m_create__elemental2_dom_PerformanceMarkOptions() {
  $Overlay.$clinit();
  return /**@type {PerformanceMarkOptions}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {Object<string, *>}*/ (JsPropertyMap_$Overlay.m_of__jsinterop_base_JsPropertyMap())));
 }
 /** @nodts */
 static m_setDetail__$devirt__elemental2_dom_PerformanceMarkOptions__java_lang_Object__void(/** !PerformanceMarkOptions */ $thisArg, /** * */ detail) {
  $Overlay.$clinit();
  $thisArg.detail = /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(detail));
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

//# sourceMappingURL=PerformanceMarkOptions$$Overlay.js.map

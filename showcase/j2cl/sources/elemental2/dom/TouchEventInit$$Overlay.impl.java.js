goog.module('elemental2.dom.TouchEventInit.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {TouchEventInit} */
 static m_create__elemental2_dom_TouchEventInit() {
  $Overlay.$clinit();
  return /**@type {TouchEventInit}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {Object<string, *>}*/ (JsPropertyMap_$Overlay.m_of__jsinterop_base_JsPropertyMap())));
 }
 /** @nodts */
 static m_setChangedTouches__$devirt__elemental2_dom_TouchEventInit__arrayOf_elemental2_dom_Touch__void(/** !TouchEventInit */ $thisArg, /** Array<Touch> */ changedTouches) {
  $Overlay.$clinit();
  $thisArg.changedTouches = /**@type {Array<Touch>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(changedTouches));
 }
 /** @nodts */
 static m_setTargetTouches__$devirt__elemental2_dom_TouchEventInit__arrayOf_elemental2_dom_Touch__void(/** !TouchEventInit */ $thisArg, /** Array<Touch> */ targetTouches) {
  $Overlay.$clinit();
  $thisArg.targetTouches = /**@type {Array<Touch>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetTouches));
 }
 /** @nodts */
 static m_setTouches__$devirt__elemental2_dom_TouchEventInit__arrayOf_elemental2_dom_Touch__void(/** !TouchEventInit */ $thisArg, /** Array<Touch> */ touches) {
  $Overlay.$clinit();
  $thisArg.touches = /**@type {Array<Touch>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(touches));
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

//# sourceMappingURL=TouchEventInit$$Overlay.js.map

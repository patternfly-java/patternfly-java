goog.module('elemental2.dom.DedicatedWorkerGlobalScope.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts */
 static m_webkitPostMessage__$devirt__elemental2_dom_DedicatedWorkerGlobalScope__java_lang_Object__elemental2_core_JsArray__void(/** !DedicatedWorkerGlobalScope */ $thisArg, /** * */ message, /** Array<Transferable> */ transferOrOptions) {
  $Overlay.$clinit();
  $thisArg.webkitPostMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(transferOrOptions)));
 }
 /** @nodts */
 static m_webkitPostMessage__$devirt__elemental2_dom_DedicatedWorkerGlobalScope__java_lang_Object__elemental2_dom_StructuredSerializeOptions__void(/** !DedicatedWorkerGlobalScope */ $thisArg, /** * */ message, /** StructuredSerializeOptions */ transferOrOptions) {
  $Overlay.$clinit();
  $thisArg.webkitPostMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(transferOrOptions)));
 }
 /** @nodts */
 static m_webkitPostMessage__$devirt__elemental2_dom_DedicatedWorkerGlobalScope__java_lang_Object__arrayOf_elemental2_core_Transferable__void(/** !DedicatedWorkerGlobalScope */ $thisArg, /** * */ message, /** Array<Transferable> */ transferOrOptions) {
  $Overlay.$clinit();
  $Overlay.m_webkitPostMessage__$devirt__elemental2_dom_DedicatedWorkerGlobalScope__java_lang_Object__elemental2_core_JsArray__void($thisArg, message, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(transferOrOptions)));
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

//# sourceMappingURL=DedicatedWorkerGlobalScope$$Overlay.js.map

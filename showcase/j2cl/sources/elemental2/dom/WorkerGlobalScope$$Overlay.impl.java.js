goog.module('elemental2.dom.WorkerGlobalScope.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {Promise<Response>} */
 static m_fetch__$devirt__elemental2_dom_WorkerGlobalScope__elemental2_dom_Request__elemental2_dom_RequestInit__elemental2_promise_Promise(/** !WorkerGlobalScope */ $thisArg, /** Request */ input, /** RequestInit */ init) {
  $Overlay.$clinit();
  return $thisArg.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(input)), init);
 }
 /** @nodts @return {Promise<Response>} */
 static m_fetch__$devirt__elemental2_dom_WorkerGlobalScope__elemental2_dom_Request__elemental2_promise_Promise(/** !WorkerGlobalScope */ $thisArg, /** Request */ input) {
  $Overlay.$clinit();
  return $thisArg.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(input)));
 }
 /** @nodts @return {Promise<Response>} */
 static m_fetch__$devirt__elemental2_dom_WorkerGlobalScope__java_lang_String__elemental2_dom_RequestInit__elemental2_promise_Promise(/** !WorkerGlobalScope */ $thisArg, /** ?string */ input, /** RequestInit */ init) {
  $Overlay.$clinit();
  return $thisArg.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(input)), init);
 }
 /** @nodts @return {Promise<Response>} */
 static m_fetch__$devirt__elemental2_dom_WorkerGlobalScope__java_lang_String__elemental2_promise_Promise(/** !WorkerGlobalScope */ $thisArg, /** ?string */ input) {
  $Overlay.$clinit();
  return $thisArg.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(input)));
 }
 /** @nodts @return {Promise<Response>} */
 static m_fetch__$devirt__elemental2_dom_WorkerGlobalScope__elemental2_dom_URL__elemental2_dom_RequestInit__elemental2_promise_Promise(/** !WorkerGlobalScope */ $thisArg, /** URL */ input, /** RequestInit */ init) {
  $Overlay.$clinit();
  return $thisArg.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(input)), init);
 }
 /** @nodts @return {Promise<Response>} */
 static m_fetch__$devirt__elemental2_dom_WorkerGlobalScope__elemental2_dom_URL__elemental2_promise_Promise(/** !WorkerGlobalScope */ $thisArg, /** URL */ input) {
  $Overlay.$clinit();
  return $thisArg.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(input)));
 }
 /** @nodts */
 static m_postMessage__$devirt__elemental2_dom_WorkerGlobalScope__java_lang_Object__elemental2_core_JsArray__void(/** !WorkerGlobalScope */ $thisArg, /** * */ message, /** Array<Transferable> */ transferOrOptions) {
  $Overlay.$clinit();
  $thisArg.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(transferOrOptions)));
 }
 /** @nodts */
 static m_postMessage__$devirt__elemental2_dom_WorkerGlobalScope__java_lang_Object__elemental2_dom_StructuredSerializeOptions__void(/** !WorkerGlobalScope */ $thisArg, /** * */ message, /** StructuredSerializeOptions */ transferOrOptions) {
  $Overlay.$clinit();
  $thisArg.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(transferOrOptions)));
 }
 /** @nodts */
 static m_postMessage__$devirt__elemental2_dom_WorkerGlobalScope__java_lang_Object__arrayOf_elemental2_core_Transferable__void(/** !WorkerGlobalScope */ $thisArg, /** * */ message, /** Array<Transferable> */ transferOrOptions) {
  $Overlay.$clinit();
  $Overlay.m_postMessage__$devirt__elemental2_dom_WorkerGlobalScope__java_lang_Object__elemental2_core_JsArray__void($thisArg, message, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(transferOrOptions)));
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

//# sourceMappingURL=WorkerGlobalScope$$Overlay.js.map

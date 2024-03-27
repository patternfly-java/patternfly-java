goog.module('elemental2.dom.ServiceWorkerClient.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @return {Promise<ServiceWorkerClient>} */
 static m_navigate__$devirt__elemental2_dom_ServiceWorkerClient__java_lang_String__elemental2_promise_Promise(/** !ServiceWorkerClient */ $thisArg, /** ?string */ url) {
  $Overlay.$clinit();
  return $thisArg.navigate(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)));
 }
 /** @final @nodts @return {Promise<ServiceWorkerClient>} */
 static m_navigate__$devirt__elemental2_dom_ServiceWorkerClient__elemental2_dom_URL__elemental2_promise_Promise(/** !ServiceWorkerClient */ $thisArg, /** URL */ url) {
  $Overlay.$clinit();
  return $thisArg.navigate(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)));
 }
 /** @final @nodts */
 static m_postMessage__$devirt__elemental2_dom_ServiceWorkerClient__java_lang_Object__arrayOf_elemental2_core_Transferable__void(/** !ServiceWorkerClient */ $thisArg, /** * */ message, /** Array<Transferable> */ transfer) {
  $Overlay.$clinit();
  $thisArg.postMessage(message, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(transfer)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ServiceWorkerClient;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'ServiceWorkerClient');

exports = $Overlay;

//# sourceMappingURL=ServiceWorkerClient$$Overlay.js.map

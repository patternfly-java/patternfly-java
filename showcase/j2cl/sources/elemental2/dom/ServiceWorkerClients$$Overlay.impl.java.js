goog.module('elemental2.dom.ServiceWorkerClients.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {Promise<ServiceWorkerClient>} */
 static m_openWindow__$devirt__elemental2_dom_ServiceWorkerClients__java_lang_String__elemental2_promise_Promise(/** !ServiceWorkerClients */ $thisArg, /** ?string */ url) {
  $Overlay.$clinit();
  return $thisArg.openWindow(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)));
 }
 /** @nodts @return {Promise<ServiceWorkerClient>} */
 static m_openWindow__$devirt__elemental2_dom_ServiceWorkerClients__elemental2_dom_URL__elemental2_promise_Promise(/** !ServiceWorkerClients */ $thisArg, /** URL */ url) {
  $Overlay.$clinit();
  return $thisArg.openWindow(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)));
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

//# sourceMappingURL=ServiceWorkerClients$$Overlay.js.map

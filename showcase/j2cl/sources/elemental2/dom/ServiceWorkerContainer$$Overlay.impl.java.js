goog.module('elemental2.dom.ServiceWorkerContainer.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {Promise<ServiceWorkerRegistration>} */
 static m_getRegistration__$devirt__elemental2_dom_ServiceWorkerContainer__java_lang_String__elemental2_promise_Promise(/** !ServiceWorkerContainer */ $thisArg, /** ?string */ documentURL) {
  $Overlay.$clinit();
  return $thisArg.getRegistration(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(documentURL)));
 }
 /** @nodts @return {Promise<ServiceWorkerRegistration>} */
 static m_getRegistration__$devirt__elemental2_dom_ServiceWorkerContainer__elemental2_dom_URL__elemental2_promise_Promise(/** !ServiceWorkerContainer */ $thisArg, /** URL */ documentURL) {
  $Overlay.$clinit();
  return $thisArg.getRegistration(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(documentURL)));
 }
 /** @nodts @return {Promise<ServiceWorkerRegistration>} */
 static m_register__$devirt__elemental2_dom_ServiceWorkerContainer__java_lang_String__elemental2_dom_RegistrationOptions__elemental2_promise_Promise(/** !ServiceWorkerContainer */ $thisArg, /** ?string */ scriptURL, /** RegistrationOptions */ options) {
  $Overlay.$clinit();
  return $thisArg.register(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(scriptURL)), options);
 }
 /** @nodts @return {Promise<ServiceWorkerRegistration>} */
 static m_register__$devirt__elemental2_dom_ServiceWorkerContainer__java_lang_String__elemental2_promise_Promise(/** !ServiceWorkerContainer */ $thisArg, /** ?string */ scriptURL) {
  $Overlay.$clinit();
  return $thisArg.register(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(scriptURL)));
 }
 /** @nodts @return {Promise<ServiceWorkerRegistration>} */
 static m_register__$devirt__elemental2_dom_ServiceWorkerContainer__elemental2_dom_TrustedScriptURL__elemental2_dom_RegistrationOptions__elemental2_promise_Promise(/** !ServiceWorkerContainer */ $thisArg, /** TrustedScriptURL */ scriptURL, /** RegistrationOptions */ options) {
  $Overlay.$clinit();
  return $thisArg.register(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(scriptURL)), options);
 }
 /** @nodts @return {Promise<ServiceWorkerRegistration>} */
 static m_register__$devirt__elemental2_dom_ServiceWorkerContainer__elemental2_dom_TrustedScriptURL__elemental2_promise_Promise(/** !ServiceWorkerContainer */ $thisArg, /** TrustedScriptURL */ scriptURL) {
  $Overlay.$clinit();
  return $thisArg.register(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(scriptURL)));
 }
 /** @nodts @return {Promise<ServiceWorkerRegistration>} */
 static m_register__$devirt__elemental2_dom_ServiceWorkerContainer__elemental2_dom_URL__elemental2_dom_RegistrationOptions__elemental2_promise_Promise(/** !ServiceWorkerContainer */ $thisArg, /** URL */ scriptURL, /** RegistrationOptions */ options) {
  $Overlay.$clinit();
  return $thisArg.register(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(scriptURL)), options);
 }
 /** @nodts @return {Promise<ServiceWorkerRegistration>} */
 static m_register__$devirt__elemental2_dom_ServiceWorkerContainer__elemental2_dom_URL__elemental2_promise_Promise(/** !ServiceWorkerContainer */ $thisArg, /** URL */ scriptURL) {
  $Overlay.$clinit();
  return $thisArg.register(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(scriptURL)));
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

//# sourceMappingURL=ServiceWorkerContainer$$Overlay.js.map

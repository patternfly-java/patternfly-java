goog.module('elemental2.dom.Window.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @return {Promise<Response>} */
 static m_fetch__$devirt__elemental2_dom_Window__elemental2_dom_Request__elemental2_dom_RequestInit__elemental2_promise_Promise(/** !Window */ $thisArg, /** Request */ input, /** RequestInit */ init) {
  $Overlay.$clinit();
  return $thisArg.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(input)), init);
 }
 /** @final @nodts @return {Promise<Response>} */
 static m_fetch__$devirt__elemental2_dom_Window__elemental2_dom_Request__elemental2_promise_Promise(/** !Window */ $thisArg, /** Request */ input) {
  $Overlay.$clinit();
  return $thisArg.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(input)));
 }
 /** @final @nodts @return {Promise<Response>} */
 static m_fetch__$devirt__elemental2_dom_Window__java_lang_String__elemental2_dom_RequestInit__elemental2_promise_Promise(/** !Window */ $thisArg, /** ?string */ input, /** RequestInit */ init) {
  $Overlay.$clinit();
  return $thisArg.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(input)), init);
 }
 /** @final @nodts @return {Promise<Response>} */
 static m_fetch__$devirt__elemental2_dom_Window__java_lang_String__elemental2_promise_Promise(/** !Window */ $thisArg, /** ?string */ input) {
  $Overlay.$clinit();
  return $thisArg.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(input)));
 }
 /** @final @nodts @return {Promise<Response>} */
 static m_fetch__$devirt__elemental2_dom_Window__elemental2_dom_URL__elemental2_dom_RequestInit__elemental2_promise_Promise(/** !Window */ $thisArg, /** URL */ input, /** RequestInit */ init) {
  $Overlay.$clinit();
  return $thisArg.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(input)), init);
 }
 /** @final @nodts @return {Promise<Response>} */
 static m_fetch__$devirt__elemental2_dom_Window__elemental2_dom_URL__elemental2_promise_Promise(/** !Window */ $thisArg, /** URL */ input) {
  $Overlay.$clinit();
  return $thisArg.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(input)));
 }
 /** @final @nodts */
 static m_importScripts__$devirt__elemental2_dom_Window__arrayOf_java_lang_String__void(/** !Window */ $thisArg, /** Array<?string> */ urls) {
  $Overlay.$clinit();
  $thisArg.importScripts(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(urls))));
 }
 /** @final @nodts */
 static m_importScripts__$devirt__elemental2_dom_Window__arrayOf_elemental2_dom_TrustedScriptURL__void(/** !Window */ $thisArg, /** Array<TrustedScriptURL> */ urls) {
  $Overlay.$clinit();
  $thisArg.importScripts(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(urls))));
 }
 /** @final @nodts */
 static m_importScripts__$devirt__elemental2_dom_Window__arrayOf_elemental2_dom_URL__void(/** !Window */ $thisArg, /** Array<URL> */ urls) {
  $Overlay.$clinit();
  $thisArg.importScripts(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(urls))));
 }
 /** @final @nodts @return {Window} */
 static m_open__$devirt__elemental2_dom_Window__elemental2_dom_Window_OpenUrlUnionType__java_lang_String__java_lang_String__elemental2_dom_AttributionSourceParams__elemental2_dom_Window(/** !Window */ $thisArg, /** ? */ url, /** ?string */ windowName, /** ?string */ windowFeatures, /** AttributionSourceParams */ replaceOrAttributionParams) {
  $Overlay.$clinit();
  return $thisArg.open(url, windowName, windowFeatures, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(replaceOrAttributionParams)));
 }
 /** @final @nodts @return {Window} */
 static m_open__$devirt__elemental2_dom_Window__elemental2_dom_Window_OpenUrlUnionType__java_lang_String__java_lang_String__boolean__elemental2_dom_Window(/** !Window */ $thisArg, /** ? */ url, /** ?string */ windowName, /** ?string */ windowFeatures, /** boolean */ replaceOrAttributionParams) {
  $Overlay.$clinit();
  return $thisArg.open(url, windowName, windowFeatures, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(replaceOrAttributionParams)));
 }
 /** @final @nodts @return {Window} */
 static m_open__$devirt__elemental2_dom_Window__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_AttributionSourceParams__elemental2_dom_Window(/** !Window */ $thisArg, /** ?string */ url, /** ?string */ windowName, /** ?string */ windowFeatures, /** AttributionSourceParams */ replaceOrAttributionParams) {
  $Overlay.$clinit();
  return $thisArg.open(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)), windowName, windowFeatures, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(replaceOrAttributionParams)));
 }
 /** @final @nodts @return {Window} */
 static m_open__$devirt__elemental2_dom_Window__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_Window_OpenReplaceOrAttributionParamsUnionType__elemental2_dom_Window(/** !Window */ $thisArg, /** ?string */ url, /** ?string */ windowName, /** ?string */ windowFeatures, /** ? */ replaceOrAttributionParams) {
  $Overlay.$clinit();
  return $thisArg.open(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)), windowName, windowFeatures, replaceOrAttributionParams);
 }
 /** @final @nodts @return {Window} */
 static m_open__$devirt__elemental2_dom_Window__java_lang_String__java_lang_String__java_lang_String__boolean__elemental2_dom_Window(/** !Window */ $thisArg, /** ?string */ url, /** ?string */ windowName, /** ?string */ windowFeatures, /** boolean */ replaceOrAttributionParams) {
  $Overlay.$clinit();
  return $thisArg.open(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)), windowName, windowFeatures, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(replaceOrAttributionParams)));
 }
 /** @final @nodts @return {Window} */
 static m_open__$devirt__elemental2_dom_Window__java_lang_String__java_lang_String__java_lang_String__elemental2_dom_Window(/** !Window */ $thisArg, /** ?string */ url, /** ?string */ windowName, /** ?string */ windowFeatures) {
  $Overlay.$clinit();
  return $thisArg.open(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)), windowName, windowFeatures);
 }
 /** @final @nodts @return {Window} */
 static m_open__$devirt__elemental2_dom_Window__java_lang_String__java_lang_String__elemental2_dom_Window(/** !Window */ $thisArg, /** ?string */ url, /** ?string */ windowName) {
  $Overlay.$clinit();
  return $thisArg.open(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)), windowName);
 }
 /** @final @nodts @return {Window} */
 static m_open__$devirt__elemental2_dom_Window__java_lang_String__elemental2_dom_Window(/** !Window */ $thisArg, /** ?string */ url) {
  $Overlay.$clinit();
  return $thisArg.open(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)));
 }
 /** @final @nodts @return {Window} */
 static m_open__$devirt__elemental2_dom_Window__elemental2_dom_URL__java_lang_String__java_lang_String__elemental2_dom_AttributionSourceParams__elemental2_dom_Window(/** !Window */ $thisArg, /** URL */ url, /** ?string */ windowName, /** ?string */ windowFeatures, /** AttributionSourceParams */ replaceOrAttributionParams) {
  $Overlay.$clinit();
  return $thisArg.open(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)), windowName, windowFeatures, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(replaceOrAttributionParams)));
 }
 /** @final @nodts @return {Window} */
 static m_open__$devirt__elemental2_dom_Window__elemental2_dom_URL__java_lang_String__java_lang_String__elemental2_dom_Window_OpenReplaceOrAttributionParamsUnionType__elemental2_dom_Window(/** !Window */ $thisArg, /** URL */ url, /** ?string */ windowName, /** ?string */ windowFeatures, /** ? */ replaceOrAttributionParams) {
  $Overlay.$clinit();
  return $thisArg.open(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)), windowName, windowFeatures, replaceOrAttributionParams);
 }
 /** @final @nodts @return {Window} */
 static m_open__$devirt__elemental2_dom_Window__elemental2_dom_URL__java_lang_String__java_lang_String__boolean__elemental2_dom_Window(/** !Window */ $thisArg, /** URL */ url, /** ?string */ windowName, /** ?string */ windowFeatures, /** boolean */ replaceOrAttributionParams) {
  $Overlay.$clinit();
  return $thisArg.open(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)), windowName, windowFeatures, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(replaceOrAttributionParams)));
 }
 /** @final @nodts @return {Window} */
 static m_open__$devirt__elemental2_dom_Window__elemental2_dom_URL__java_lang_String__java_lang_String__elemental2_dom_Window(/** !Window */ $thisArg, /** URL */ url, /** ?string */ windowName, /** ?string */ windowFeatures) {
  $Overlay.$clinit();
  return $thisArg.open(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)), windowName, windowFeatures);
 }
 /** @final @nodts @return {Window} */
 static m_open__$devirt__elemental2_dom_Window__elemental2_dom_URL__java_lang_String__elemental2_dom_Window(/** !Window */ $thisArg, /** URL */ url, /** ?string */ windowName) {
  $Overlay.$clinit();
  return $thisArg.open(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)), windowName);
 }
 /** @final @nodts @return {Window} */
 static m_open__$devirt__elemental2_dom_Window__elemental2_dom_URL__elemental2_dom_Window(/** !Window */ $thisArg, /** URL */ url) {
  $Overlay.$clinit();
  return $thisArg.open(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)));
 }
 /** @final @nodts @return {Database} */
 static m_openDatabase__$devirt__elemental2_dom_Window__java_lang_String__java_lang_String__java_lang_String__int__elemental2_dom_DatabaseCallback__elemental2_dom_Database(/** !Window */ $thisArg, /** ?string */ name, /** ?string */ version, /** ?string */ description, /** number */ size, /** DatabaseCallback */ callback) {
  $Overlay.$clinit();
  return $thisArg.openDatabase(name, version, description, size, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(callback)));
 }
 /** @final @nodts @return {Database} */
 static m_openDatabase__$devirt__elemental2_dom_Window__java_lang_String__java_lang_String__java_lang_String__int__elemental2_dom_Window_OpenDatabaseCallbackFn__elemental2_dom_Database(/** !Window */ $thisArg, /** ?string */ name, /** ?string */ version, /** ?string */ description, /** number */ size, /** ?function(Database):* */ callback) {
  $Overlay.$clinit();
  return $thisArg.openDatabase(name, version, description, size, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(callback)));
 }
 /** @final @nodts */
 static m_postMessage__$devirt__elemental2_dom_Window__java_lang_Object__elemental2_dom_Window_PostMessageTargetOriginOrOptionsUnionType__arrayOf_elemental2_core_Transferable__void(/** !Window */ $thisArg, /** * */ message, /** ? */ targetOriginOrOptions, /** Array<Transferable> */ transfer) {
  $Overlay.$clinit();
  $thisArg.postMessage(message, targetOriginOrOptions, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(transfer)));
 }
 /** @final @nodts */
 static m_postMessage__$devirt__elemental2_dom_Window__java_lang_Object__java_lang_String__elemental2_core_JsArray__void(/** !Window */ $thisArg, /** * */ message, /** ?string */ targetOriginOrOptions, /** Array<Transferable> */ transfer) {
  $Overlay.$clinit();
  $thisArg.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrOptions)), transfer);
 }
 /** @final @nodts */
 static m_postMessage__$devirt__elemental2_dom_Window__java_lang_Object__java_lang_String__arrayOf_elemental2_core_Transferable__void(/** !Window */ $thisArg, /** * */ message, /** ?string */ targetOriginOrOptions, /** Array<Transferable> */ transfer) {
  $Overlay.$clinit();
  $Overlay.m_postMessage__$devirt__elemental2_dom_Window__java_lang_Object__java_lang_String__elemental2_core_JsArray__void($thisArg, message, targetOriginOrOptions, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(transfer)));
 }
 /** @final @nodts */
 static m_postMessage__$devirt__elemental2_dom_Window__java_lang_Object__java_lang_String__void(/** !Window */ $thisArg, /** * */ message, /** ?string */ targetOriginOrOptions) {
  $Overlay.$clinit();
  $thisArg.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrOptions)));
 }
 /** @final @nodts */
 static m_postMessage__$devirt__elemental2_dom_Window__java_lang_Object__elemental2_dom_WindowPostMessageOptions__elemental2_core_JsArray__void(/** !Window */ $thisArg, /** * */ message, /** WindowPostMessageOptions */ targetOriginOrOptions, /** Array<Transferable> */ transfer) {
  $Overlay.$clinit();
  $thisArg.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrOptions)), transfer);
 }
 /** @final @nodts */
 static m_postMessage__$devirt__elemental2_dom_Window__java_lang_Object__elemental2_dom_WindowPostMessageOptions__arrayOf_elemental2_core_Transferable__void(/** !Window */ $thisArg, /** * */ message, /** WindowPostMessageOptions */ targetOriginOrOptions, /** Array<Transferable> */ transfer) {
  $Overlay.$clinit();
  $Overlay.m_postMessage__$devirt__elemental2_dom_Window__java_lang_Object__elemental2_dom_WindowPostMessageOptions__elemental2_core_JsArray__void($thisArg, message, targetOriginOrOptions, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(transfer)));
 }
 /** @final @nodts */
 static m_postMessage__$devirt__elemental2_dom_Window__java_lang_Object__elemental2_dom_WindowPostMessageOptions__void(/** !Window */ $thisArg, /** * */ message, /** WindowPostMessageOptions */ targetOriginOrOptions) {
  $Overlay.$clinit();
  $thisArg.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrOptions)));
 }
 /** @final @nodts */
 static m_scroll__$devirt__elemental2_dom_Window__elemental2_dom_ScrollToOptions__double__void(/** !Window */ $thisArg, /** ScrollToOptions */ scrollToOptionsOrX, /** number */ y) {
  $Overlay.$clinit();
  $thisArg.scroll(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(scrollToOptionsOrX)), y);
 }
 /** @final @nodts */
 static m_scroll__$devirt__elemental2_dom_Window__elemental2_dom_ScrollToOptions__void(/** !Window */ $thisArg, /** ScrollToOptions */ scrollToOptionsOrX) {
  $Overlay.$clinit();
  $thisArg.scroll(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(scrollToOptionsOrX)));
 }
 /** @final @nodts */
 static m_scroll__$devirt__elemental2_dom_Window__double__double__void(/** !Window */ $thisArg, /** number */ scrollToOptionsOrX, /** number */ y) {
  $Overlay.$clinit();
  $thisArg.scroll(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(scrollToOptionsOrX)), y);
 }
 /** @final @nodts */
 static m_scroll__$devirt__elemental2_dom_Window__double__void(/** !Window */ $thisArg, /** number */ scrollToOptionsOrX) {
  $Overlay.$clinit();
  $thisArg.scroll(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(scrollToOptionsOrX)));
 }
 /** @final @nodts */
 static m_scrollBy__$devirt__elemental2_dom_Window__elemental2_dom_ScrollToOptions__double__void(/** !Window */ $thisArg, /** ScrollToOptions */ scrollToOptionsOrX, /** number */ y) {
  $Overlay.$clinit();
  $thisArg.scrollBy(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(scrollToOptionsOrX)), y);
 }
 /** @final @nodts */
 static m_scrollBy__$devirt__elemental2_dom_Window__elemental2_dom_ScrollToOptions__void(/** !Window */ $thisArg, /** ScrollToOptions */ scrollToOptionsOrX) {
  $Overlay.$clinit();
  $thisArg.scrollBy(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(scrollToOptionsOrX)));
 }
 /** @final @nodts */
 static m_scrollBy__$devirt__elemental2_dom_Window__double__double__void(/** !Window */ $thisArg, /** number */ scrollToOptionsOrX, /** number */ y) {
  $Overlay.$clinit();
  $thisArg.scrollBy(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(scrollToOptionsOrX)), y);
 }
 /** @final @nodts */
 static m_scrollBy__$devirt__elemental2_dom_Window__double__void(/** !Window */ $thisArg, /** number */ scrollToOptionsOrX) {
  $Overlay.$clinit();
  $thisArg.scrollBy(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(scrollToOptionsOrX)));
 }
 /** @final @nodts */
 static m_scrollTo__$devirt__elemental2_dom_Window__elemental2_dom_ScrollToOptions__double__void(/** !Window */ $thisArg, /** ScrollToOptions */ scrollToOptionsOrX, /** number */ y) {
  $Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(scrollToOptionsOrX)), y);
 }
 /** @final @nodts */
 static m_scrollTo__$devirt__elemental2_dom_Window__elemental2_dom_ScrollToOptions__void(/** !Window */ $thisArg, /** ScrollToOptions */ scrollToOptionsOrX) {
  $Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(scrollToOptionsOrX)));
 }
 /** @final @nodts */
 static m_scrollTo__$devirt__elemental2_dom_Window__double__double__void(/** !Window */ $thisArg, /** number */ scrollToOptionsOrX, /** number */ y) {
  $Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(scrollToOptionsOrX)), y);
 }
 /** @final @nodts */
 static m_scrollTo__$devirt__elemental2_dom_Window__double__void(/** !Window */ $thisArg, /** number */ scrollToOptionsOrX) {
  $Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(scrollToOptionsOrX)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Window;
 }
 
 /** @nodts */
 static $loadModules() {
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'Window');

exports = $Overlay;

//# sourceMappingURL=Window$$Overlay.js.map

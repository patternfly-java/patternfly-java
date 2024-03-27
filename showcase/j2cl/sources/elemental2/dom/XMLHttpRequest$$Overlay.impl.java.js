goog.module('elemental2.dom.XMLHttpRequest.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts */
 static m_open__$devirt__elemental2_dom_XMLHttpRequest__java_lang_String__java_lang_String__boolean__java_lang_String__java_lang_String__void(/** !XMLHttpRequest */ $thisArg, /** ?string */ method, /** ?string */ url, /** boolean */ async_1, /** ?string */ user, /** ?string */ password) {
  $Overlay.$clinit();
  $thisArg.open(method, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)), async_1, user, password);
 }
 /** @final @nodts */
 static m_open__$devirt__elemental2_dom_XMLHttpRequest__java_lang_String__java_lang_String__boolean__java_lang_String__void(/** !XMLHttpRequest */ $thisArg, /** ?string */ method, /** ?string */ url, /** boolean */ async_1, /** ?string */ user) {
  $Overlay.$clinit();
  $thisArg.open(method, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)), async_1, user);
 }
 /** @final @nodts */
 static m_open__$devirt__elemental2_dom_XMLHttpRequest__java_lang_String__java_lang_String__boolean__void(/** !XMLHttpRequest */ $thisArg, /** ?string */ method, /** ?string */ url, /** boolean */ async_1) {
  $Overlay.$clinit();
  $thisArg.open(method, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)), async_1);
 }
 /** @final @nodts */
 static m_open__$devirt__elemental2_dom_XMLHttpRequest__java_lang_String__java_lang_String__void(/** !XMLHttpRequest */ $thisArg, /** ?string */ method, /** ?string */ url) {
  $Overlay.$clinit();
  $thisArg.open(method, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)));
 }
 /** @final @nodts */
 static m_open__$devirt__elemental2_dom_XMLHttpRequest__java_lang_String__elemental2_dom_URL__boolean__java_lang_String__java_lang_String__void(/** !XMLHttpRequest */ $thisArg, /** ?string */ method, /** URL */ url, /** boolean */ async_1, /** ?string */ user, /** ?string */ password) {
  $Overlay.$clinit();
  $thisArg.open(method, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)), async_1, user, password);
 }
 /** @final @nodts */
 static m_open__$devirt__elemental2_dom_XMLHttpRequest__java_lang_String__elemental2_dom_URL__boolean__java_lang_String__void(/** !XMLHttpRequest */ $thisArg, /** ?string */ method, /** URL */ url, /** boolean */ async_1, /** ?string */ user) {
  $Overlay.$clinit();
  $thisArg.open(method, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)), async_1, user);
 }
 /** @final @nodts */
 static m_open__$devirt__elemental2_dom_XMLHttpRequest__java_lang_String__elemental2_dom_URL__boolean__void(/** !XMLHttpRequest */ $thisArg, /** ?string */ method, /** URL */ url, /** boolean */ async_1) {
  $Overlay.$clinit();
  $thisArg.open(method, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)), async_1);
 }
 /** @final @nodts */
 static m_open__$devirt__elemental2_dom_XMLHttpRequest__java_lang_String__elemental2_dom_URL__void(/** !XMLHttpRequest */ $thisArg, /** ?string */ method, /** URL */ url) {
  $Overlay.$clinit();
  $thisArg.open(method, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)));
 }
 /** @final @nodts */
 static m_send__$devirt__elemental2_dom_XMLHttpRequest__elemental2_core_ArrayBuffer__void(/** !XMLHttpRequest */ $thisArg, /** ArrayBuffer */ data) {
  $Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(data)));
 }
 /** @final @nodts */
 static m_send__$devirt__elemental2_dom_XMLHttpRequest__elemental2_core_ArrayBufferView__void(/** !XMLHttpRequest */ $thisArg, /** ArrayBufferView */ data) {
  $Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(data)));
 }
 /** @final @nodts */
 static m_send__$devirt__elemental2_dom_XMLHttpRequest__elemental2_dom_Blob__void(/** !XMLHttpRequest */ $thisArg, /** Blob */ data) {
  $Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(data)));
 }
 /** @final @nodts */
 static m_send__$devirt__elemental2_dom_XMLHttpRequest__elemental2_dom_Document__void(/** !XMLHttpRequest */ $thisArg, /** Document */ data) {
  $Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(data)));
 }
 /** @final @nodts */
 static m_send__$devirt__elemental2_dom_XMLHttpRequest__elemental2_dom_FormData__void(/** !XMLHttpRequest */ $thisArg, /** FormData */ data) {
  $Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(data)));
 }
 /** @final @nodts */
 static m_send__$devirt__elemental2_dom_XMLHttpRequest__java_lang_String__void(/** !XMLHttpRequest */ $thisArg, /** ?string */ data) {
  $Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(data)));
 }
 /** @nodts @return {number} */
 static get f_DONE__elemental2_dom_XMLHttpRequest_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_DONE__elemental2_dom_XMLHttpRequest_$Overlay);
 }
 /** @nodts @return {number} */
 static get f_HEADERS_RECEIVED__elemental2_dom_XMLHttpRequest_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_HEADERS_RECEIVED__elemental2_dom_XMLHttpRequest_$Overlay);
 }
 /** @nodts @return {number} */
 static get f_LOADING__elemental2_dom_XMLHttpRequest_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_LOADING__elemental2_dom_XMLHttpRequest_$Overlay);
 }
 /** @nodts @return {number} */
 static get f_OPENED__elemental2_dom_XMLHttpRequest_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_OPENED__elemental2_dom_XMLHttpRequest_$Overlay);
 }
 /** @nodts @return {number} */
 static get f_UNSENT__elemental2_dom_XMLHttpRequest_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_UNSENT__elemental2_dom_XMLHttpRequest_$Overlay);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_DONE__elemental2_dom_XMLHttpRequest_$Overlay = XMLHttpRequest.DONE;
  $Overlay.$static_HEADERS_RECEIVED__elemental2_dom_XMLHttpRequest_$Overlay = XMLHttpRequest.HEADERS_RECEIVED;
  $Overlay.$static_LOADING__elemental2_dom_XMLHttpRequest_$Overlay = XMLHttpRequest.LOADING;
  $Overlay.$static_OPENED__elemental2_dom_XMLHttpRequest_$Overlay = XMLHttpRequest.OPENED;
  $Overlay.$static_UNSENT__elemental2_dom_XMLHttpRequest_$Overlay = XMLHttpRequest.UNSENT;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof XMLHttpRequest;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
/**@private {number} @nodts*/
$Overlay.$static_DONE__elemental2_dom_XMLHttpRequest_$Overlay = 0;
/**@private {number} @nodts*/
$Overlay.$static_HEADERS_RECEIVED__elemental2_dom_XMLHttpRequest_$Overlay = 0;
/**@private {number} @nodts*/
$Overlay.$static_LOADING__elemental2_dom_XMLHttpRequest_$Overlay = 0;
/**@private {number} @nodts*/
$Overlay.$static_OPENED__elemental2_dom_XMLHttpRequest_$Overlay = 0;
/**@private {number} @nodts*/
$Overlay.$static_UNSENT__elemental2_dom_XMLHttpRequest_$Overlay = 0;
$Util.$setClassMetadata($Overlay, 'XMLHttpRequest');

exports = $Overlay;

//# sourceMappingURL=XMLHttpRequest$$Overlay.js.map

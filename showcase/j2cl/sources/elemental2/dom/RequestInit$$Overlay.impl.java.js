goog.module('elemental2.dom.RequestInit.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {RequestInit} */
 static m_create__elemental2_dom_RequestInit() {
  $Overlay.$clinit();
  return /**@type {RequestInit}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {Object<string, *>}*/ (JsPropertyMap_$Overlay.m_of__jsinterop_base_JsPropertyMap())));
 }
 /** @nodts */
 static m_setBody__$devirt__elemental2_dom_RequestInit__elemental2_core_ArrayBuffer__void(/** !RequestInit */ $thisArg, /** ArrayBuffer */ body) {
  $Overlay.$clinit();
  $thisArg.body = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(body));
 }
 /** @nodts */
 static m_setBody__$devirt__elemental2_dom_RequestInit__elemental2_core_ArrayBufferView__void(/** !RequestInit */ $thisArg, /** ArrayBufferView */ body) {
  $Overlay.$clinit();
  $thisArg.body = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(body));
 }
 /** @nodts */
 static m_setBody__$devirt__elemental2_dom_RequestInit__elemental2_dom_Blob__void(/** !RequestInit */ $thisArg, /** Blob */ body) {
  $Overlay.$clinit();
  $thisArg.body = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(body));
 }
 /** @nodts */
 static m_setBody__$devirt__elemental2_dom_RequestInit__elemental2_dom_FormData__void(/** !RequestInit */ $thisArg, /** FormData */ body) {
  $Overlay.$clinit();
  $thisArg.body = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(body));
 }
 /** @nodts */
 static m_setBody__$devirt__elemental2_dom_RequestInit__elemental2_dom_ReadableStream__void(/** !RequestInit */ $thisArg, /** ReadableStream */ body) {
  $Overlay.$clinit();
  $thisArg.body = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(body));
 }
 /** @nodts */
 static m_setBody__$devirt__elemental2_dom_RequestInit__java_lang_String__void(/** !RequestInit */ $thisArg, /** ?string */ body) {
  $Overlay.$clinit();
  $thisArg.body = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(body));
 }
 /** @nodts */
 static m_setBody__$devirt__elemental2_dom_RequestInit__elemental2_dom_URLSearchParams__void(/** !RequestInit */ $thisArg, /** URLSearchParams */ body) {
  $Overlay.$clinit();
  $thisArg.body = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(body));
 }
 /** @nodts */
 static m_setHeaders__$devirt__elemental2_dom_RequestInit__elemental2_dom_Headers__void(/** !RequestInit */ $thisArg, /** Headers */ headers) {
  $Overlay.$clinit();
  $thisArg.headers = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(headers));
 }
 /** @nodts */
 static m_setHeaders__$devirt__elemental2_dom_RequestInit__elemental2_core_JsArray__void(/** !RequestInit */ $thisArg, /** Array<Array<?string>> */ headers) {
  $Overlay.$clinit();
  $thisArg.headers = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(headers));
 }
 /** @nodts */
 static m_setHeaders__$devirt__elemental2_dom_RequestInit__jsinterop_base_JsPropertyMap__void(/** !RequestInit */ $thisArg, /** Object<string, ?string> */ headers) {
  $Overlay.$clinit();
  $thisArg.headers = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(headers));
 }
 /** @nodts */
 static m_setHeaders__$devirt__elemental2_dom_RequestInit__arrayOf_arrayOf_java_lang_String__void(/** !RequestInit */ $thisArg, /** Array<Array<?string>> */ headers) {
  $Overlay.$clinit();
  $Overlay.m_setHeaders__$devirt__elemental2_dom_RequestInit__elemental2_core_JsArray__void($thisArg, /**@type {Array<Array<?string>>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(headers)));
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

//# sourceMappingURL=RequestInit$$Overlay.js.map

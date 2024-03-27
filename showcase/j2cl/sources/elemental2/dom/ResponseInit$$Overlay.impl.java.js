goog.module('elemental2.dom.ResponseInit.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {ResponseInit} */
 static m_create__elemental2_dom_ResponseInit() {
  $Overlay.$clinit();
  return /**@type {ResponseInit}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {Object<string, *>}*/ (JsPropertyMap_$Overlay.m_of__jsinterop_base_JsPropertyMap())));
 }
 /** @nodts */
 static m_setHeaders__$devirt__elemental2_dom_ResponseInit__elemental2_dom_Headers__void(/** !ResponseInit */ $thisArg, /** Headers */ headers) {
  $Overlay.$clinit();
  $thisArg.headers = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(headers));
 }
 /** @nodts */
 static m_setHeaders__$devirt__elemental2_dom_ResponseInit__elemental2_core_JsArray__void(/** !ResponseInit */ $thisArg, /** Array<Array<?string>> */ headers) {
  $Overlay.$clinit();
  $thisArg.headers = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(headers));
 }
 /** @nodts */
 static m_setHeaders__$devirt__elemental2_dom_ResponseInit__jsinterop_base_JsPropertyMap__void(/** !ResponseInit */ $thisArg, /** Object<string, ?string> */ headers) {
  $Overlay.$clinit();
  $thisArg.headers = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(headers));
 }
 /** @nodts */
 static m_setHeaders__$devirt__elemental2_dom_ResponseInit__arrayOf_arrayOf_java_lang_String__void(/** !ResponseInit */ $thisArg, /** Array<Array<?string>> */ headers) {
  $Overlay.$clinit();
  $Overlay.m_setHeaders__$devirt__elemental2_dom_ResponseInit__elemental2_core_JsArray__void($thisArg, /**@type {Array<Array<?string>>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(headers)));
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

//# sourceMappingURL=ResponseInit$$Overlay.js.map

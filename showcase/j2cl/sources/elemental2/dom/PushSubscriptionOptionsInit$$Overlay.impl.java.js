goog.module('elemental2.dom.PushSubscriptionOptionsInit.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {PushSubscriptionOptionsInit} */
 static m_create__elemental2_dom_PushSubscriptionOptionsInit() {
  $Overlay.$clinit();
  return /**@type {PushSubscriptionOptionsInit}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(/**@type {Object<string, *>}*/ (JsPropertyMap_$Overlay.m_of__jsinterop_base_JsPropertyMap())));
 }
 /** @nodts */
 static m_setApplicationServerKey__$devirt__elemental2_dom_PushSubscriptionOptionsInit__elemental2_core_ArrayBuffer__void(/** !PushSubscriptionOptionsInit */ $thisArg, /** ArrayBuffer */ applicationServerKey) {
  $Overlay.$clinit();
  $thisArg.applicationServerKey = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(applicationServerKey));
 }
 /** @nodts */
 static m_setApplicationServerKey__$devirt__elemental2_dom_PushSubscriptionOptionsInit__elemental2_core_ArrayBufferView__void(/** !PushSubscriptionOptionsInit */ $thisArg, /** ArrayBufferView */ applicationServerKey) {
  $Overlay.$clinit();
  $thisArg.applicationServerKey = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(applicationServerKey));
 }
 /** @nodts */
 static m_setApplicationServerKey__$devirt__elemental2_dom_PushSubscriptionOptionsInit__java_lang_String__void(/** !PushSubscriptionOptionsInit */ $thisArg, /** ?string */ applicationServerKey) {
  $Overlay.$clinit();
  $thisArg.applicationServerKey = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(applicationServerKey));
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

//# sourceMappingURL=PushSubscriptionOptionsInit$$Overlay.js.map

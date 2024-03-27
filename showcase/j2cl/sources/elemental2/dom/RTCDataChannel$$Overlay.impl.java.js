goog.module('elemental2.dom.RTCDataChannel.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts */
 static m_send__$devirt__elemental2_dom_RTCDataChannel__elemental2_core_ArrayBuffer__void(/** !RTCDataChannel */ $thisArg, /** ArrayBuffer */ data) {
  $Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(data)));
 }
 /** @nodts */
 static m_send__$devirt__elemental2_dom_RTCDataChannel__elemental2_core_ArrayBufferView__void(/** !RTCDataChannel */ $thisArg, /** ArrayBufferView */ data) {
  $Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(data)));
 }
 /** @nodts */
 static m_send__$devirt__elemental2_dom_RTCDataChannel__elemental2_dom_Blob__void(/** !RTCDataChannel */ $thisArg, /** Blob */ data) {
  $Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(data)));
 }
 /** @nodts */
 static m_send__$devirt__elemental2_dom_RTCDataChannel__java_lang_String__void(/** !RTCDataChannel */ $thisArg, /** ?string */ data) {
  $Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(data)));
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

//# sourceMappingURL=RTCDataChannel$$Overlay.js.map

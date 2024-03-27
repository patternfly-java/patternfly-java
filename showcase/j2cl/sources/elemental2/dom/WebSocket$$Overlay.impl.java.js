goog.module('elemental2.dom.WebSocket.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts */
 static m_send__$devirt__elemental2_dom_WebSocket__elemental2_core_ArrayBuffer__void(/** !WebSocket */ $thisArg, /** ArrayBuffer */ data) {
  $Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(data)));
 }
 /** @final @nodts */
 static m_send__$devirt__elemental2_dom_WebSocket__elemental2_core_ArrayBufferView__void(/** !WebSocket */ $thisArg, /** ArrayBufferView */ data) {
  $Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(data)));
 }
 /** @final @nodts */
 static m_send__$devirt__elemental2_dom_WebSocket__elemental2_dom_Blob__void(/** !WebSocket */ $thisArg, /** Blob */ data) {
  $Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(data)));
 }
 /** @final @nodts */
 static m_send__$devirt__elemental2_dom_WebSocket__java_lang_String__void(/** !WebSocket */ $thisArg, /** ?string */ data) {
  $Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(data)));
 }
 /** @nodts @return {number} */
 static get f_CLOSED__elemental2_dom_WebSocket_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_CLOSED__elemental2_dom_WebSocket_$Overlay);
 }
 /** @nodts @return {number} */
 static get f_CLOSING__elemental2_dom_WebSocket_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_CLOSING__elemental2_dom_WebSocket_$Overlay);
 }
 /** @nodts @return {number} */
 static get f_CONNECTING__elemental2_dom_WebSocket_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_CONNECTING__elemental2_dom_WebSocket_$Overlay);
 }
 /** @nodts @return {number} */
 static get f_OPEN__elemental2_dom_WebSocket_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_OPEN__elemental2_dom_WebSocket_$Overlay);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_CLOSED__elemental2_dom_WebSocket_$Overlay = WebSocket.CLOSED;
  $Overlay.$static_CLOSING__elemental2_dom_WebSocket_$Overlay = WebSocket.CLOSING;
  $Overlay.$static_CONNECTING__elemental2_dom_WebSocket_$Overlay = WebSocket.CONNECTING;
  $Overlay.$static_OPEN__elemental2_dom_WebSocket_$Overlay = WebSocket.OPEN;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof WebSocket;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
/**@private {number} @nodts*/
$Overlay.$static_CLOSED__elemental2_dom_WebSocket_$Overlay = 0;
/**@private {number} @nodts*/
$Overlay.$static_CLOSING__elemental2_dom_WebSocket_$Overlay = 0;
/**@private {number} @nodts*/
$Overlay.$static_CONNECTING__elemental2_dom_WebSocket_$Overlay = 0;
/**@private {number} @nodts*/
$Overlay.$static_OPEN__elemental2_dom_WebSocket_$Overlay = 0;
$Util.$setClassMetadata($Overlay, 'WebSocket');

exports = $Overlay;

//# sourceMappingURL=WebSocket$$Overlay.js.map

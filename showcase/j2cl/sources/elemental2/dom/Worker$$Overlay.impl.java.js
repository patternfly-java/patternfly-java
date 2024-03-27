goog.module('elemental2.dom.Worker.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts */
 static m_postMessage__$devirt__elemental2_dom_Worker__java_lang_Object__elemental2_core_JsArray__void(/** !Worker */ $thisArg, /** * */ message, /** Array<Transferable> */ transferOrOptions) {
  $Overlay.$clinit();
  $thisArg.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(transferOrOptions)));
 }
 /** @final @nodts */
 static m_postMessage__$devirt__elemental2_dom_Worker__java_lang_Object__elemental2_dom_StructuredSerializeOptions__void(/** !Worker */ $thisArg, /** * */ message, /** StructuredSerializeOptions */ transferOrOptions) {
  $Overlay.$clinit();
  $thisArg.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(transferOrOptions)));
 }
 /** @final @nodts */
 static m_postMessage__$devirt__elemental2_dom_Worker__java_lang_Object__arrayOf_elemental2_core_Transferable__void(/** !Worker */ $thisArg, /** * */ message, /** Array<Transferable> */ transferOrOptions) {
  $Overlay.$clinit();
  $Overlay.m_postMessage__$devirt__elemental2_dom_Worker__java_lang_Object__elemental2_core_JsArray__void($thisArg, message, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(transferOrOptions)));
 }
 /** @final @nodts */
 static m_webkitPostMessage__$devirt__elemental2_dom_Worker__java_lang_Object__elemental2_core_JsArray__void(/** !Worker */ $thisArg, /** * */ message, /** Array<Transferable> */ transferOrOptions) {
  $Overlay.$clinit();
  $thisArg.webkitPostMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(transferOrOptions)));
 }
 /** @final @nodts */
 static m_webkitPostMessage__$devirt__elemental2_dom_Worker__java_lang_Object__elemental2_dom_StructuredSerializeOptions__void(/** !Worker */ $thisArg, /** * */ message, /** StructuredSerializeOptions */ transferOrOptions) {
  $Overlay.$clinit();
  $thisArg.webkitPostMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(transferOrOptions)));
 }
 /** @final @nodts */
 static m_webkitPostMessage__$devirt__elemental2_dom_Worker__java_lang_Object__arrayOf_elemental2_core_Transferable__void(/** !Worker */ $thisArg, /** * */ message, /** Array<Transferable> */ transferOrOptions) {
  $Overlay.$clinit();
  $Overlay.m_webkitPostMessage__$devirt__elemental2_dom_Worker__java_lang_Object__elemental2_core_JsArray__void($thisArg, message, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(transferOrOptions)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Worker;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'Worker');

exports = $Overlay;

//# sourceMappingURL=Worker$$Overlay.js.map

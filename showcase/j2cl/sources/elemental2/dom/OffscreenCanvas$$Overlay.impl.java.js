goog.module('elemental2.dom.OffscreenCanvas.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @return {Object} */
 static m_getContext__$devirt__elemental2_dom_OffscreenCanvas__java_lang_String__java_lang_Object__elemental2_core_JsObject(/** !OffscreenCanvas */ $thisArg, /** ?string */ contextId, /** * */ options) {
  $Overlay.$clinit();
  return $thisArg.getContext(contextId, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(options)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OffscreenCanvas;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'OffscreenCanvas');

exports = $Overlay;

//# sourceMappingURL=OffscreenCanvas$$Overlay.js.map

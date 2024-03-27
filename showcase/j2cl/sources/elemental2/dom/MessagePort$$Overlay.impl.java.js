goog.module('elemental2.dom.MessagePort.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts */
 static m_postMessage__$devirt__elemental2_dom_MessagePort__java_lang_Object__arrayOf_elemental2_core_Transferable__void(/** !MessagePort */ $thisArg, /** * */ message, /** Array<Transferable> */ transfer) {
  $Overlay.$clinit();
  $thisArg.postMessage(message, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(transfer)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MessagePort;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'MessagePort');

exports = $Overlay;

//# sourceMappingURL=MessagePort$$Overlay.js.map

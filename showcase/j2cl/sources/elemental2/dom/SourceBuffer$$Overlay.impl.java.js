goog.module('elemental2.dom.SourceBuffer.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts */
 static m_appendBuffer__$devirt__elemental2_dom_SourceBuffer__elemental2_core_ArrayBuffer__void(/** !SourceBuffer */ $thisArg, /** ArrayBuffer */ data) {
  $Overlay.$clinit();
  $thisArg.appendBuffer(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(data)));
 }
 /** @final @nodts */
 static m_appendBuffer__$devirt__elemental2_dom_SourceBuffer__elemental2_core_ArrayBufferView__void(/** !SourceBuffer */ $thisArg, /** ArrayBufferView */ data) {
  $Overlay.$clinit();
  $thisArg.appendBuffer(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(data)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SourceBuffer;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'SourceBuffer');

exports = $Overlay;

//# sourceMappingURL=SourceBuffer$$Overlay.js.map

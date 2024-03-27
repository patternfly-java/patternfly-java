goog.module('elemental2.core.JsError.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts */
 static m_captureStackTrace__java_lang_Object__elemental2_core_Function__void(/** * */ error, /** Function */ constructor) {
  $Overlay.$clinit();
  Error.captureStackTrace(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(error)), constructor);
 }
 /** @final @nodts */
 static m_captureStackTrace__java_lang_Object__void(/** * */ error) {
  $Overlay.$clinit();
  Error.captureStackTrace(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(error)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Error;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'Error');

exports = $Overlay;

//# sourceMappingURL=JsError$$Overlay.js.map

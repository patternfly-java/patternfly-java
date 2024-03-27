goog.module('elemental2.core.Global.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @return {*} */
 static m_eval__java_lang_String__java_lang_Object(/** ?string */ code) {
  $Overlay.$clinit();
  return goog.global.eval(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(code)));
 }
 /** @final @nodts @return {*} */
 static m_eval__elemental2_core_TrustedScript__java_lang_Object(/** TrustedScript */ code) {
  $Overlay.$clinit();
  return goog.global.eval(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(code)));
 }
 /** @nodts @return {number} */
 static get f_Infinity__elemental2_core_Global_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_Infinity__elemental2_core_Global_$Overlay);
 }
 /** @nodts @return {number} */
 static get f_NaN__elemental2_core_Global_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_NaN__elemental2_core_Global_$Overlay);
 }
 /** @nodts @return {*} */
 static get f_undefined__elemental2_core_Global_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_undefined__elemental2_core_Global_$Overlay);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_Infinity__elemental2_core_Global_$Overlay = goog.global.Infinity;
  $Overlay.$static_NaN__elemental2_core_Global_$Overlay = goog.global.NaN;
  $Overlay.$static_undefined__elemental2_core_Global_$Overlay = goog.global.undefined;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof goog.global;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
/**@private {number} @nodts*/
$Overlay.$static_Infinity__elemental2_core_Global_$Overlay = 0;
/**@private {number} @nodts*/
$Overlay.$static_NaN__elemental2_core_Global_$Overlay = 0;
/**@private {*} @nodts*/
$Overlay.$static_undefined__elemental2_core_Global_$Overlay;
$Util.$setClassMetadata($Overlay, 'goog.global');

exports = $Overlay;

//# sourceMappingURL=Global$$Overlay.js.map

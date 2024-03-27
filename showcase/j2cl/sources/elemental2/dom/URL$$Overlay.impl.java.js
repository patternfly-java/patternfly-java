goog.module('elemental2.dom.URL.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @return {?string} */
 static m_createObjectURL__elemental2_dom_Blob__java_lang_String(/** Blob */ obj) {
  $Overlay.$clinit();
  return URL.createObjectURL(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(obj)));
 }
 /** @final @nodts @return {?string} */
 static m_createObjectURL__elemental2_dom_MediaSource__java_lang_String(/** MediaSource */ obj) {
  $Overlay.$clinit();
  return URL.createObjectURL(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(obj)));
 }
 /** @final @nodts @return {?string} */
 static m_createObjectURL__elemental2_dom_MediaStream__java_lang_String(/** MediaStream */ obj) {
  $Overlay.$clinit();
  return URL.createObjectURL(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(obj)));
 }
 /** @final @nodts */
 static m_revokeObjectURL__java_lang_String__void(/** ?string */ url) {
  $Overlay.$clinit();
  URL.revokeObjectURL(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)));
 }
 /** @final @nodts */
 static m_revokeObjectURL__elemental2_dom_URL__void(/** URL */ url) {
  $Overlay.$clinit();
  URL.revokeObjectURL(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof URL;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'URL');

exports = $Overlay;

//# sourceMappingURL=URL$$Overlay.js.map

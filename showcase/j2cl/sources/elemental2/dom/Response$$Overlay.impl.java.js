goog.module('elemental2.dom.Response.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @return {Response} */
 static m_redirect__java_lang_String__int__elemental2_dom_Response(/** ?string */ url, /** number */ status) {
  $Overlay.$clinit();
  return Response.redirect(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)), status);
 }
 /** @final @nodts @return {Response} */
 static m_redirect__java_lang_String__elemental2_dom_Response(/** ?string */ url) {
  $Overlay.$clinit();
  return Response.redirect(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)));
 }
 /** @final @nodts @return {Response} */
 static m_redirect__elemental2_dom_URL__int__elemental2_dom_Response(/** URL */ url, /** number */ status) {
  $Overlay.$clinit();
  return Response.redirect(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)), status);
 }
 /** @final @nodts @return {Response} */
 static m_redirect__elemental2_dom_URL__elemental2_dom_Response(/** URL */ url) {
  $Overlay.$clinit();
  return Response.redirect(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Response;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'Response');

exports = $Overlay;

//# sourceMappingURL=Response$$Overlay.js.map

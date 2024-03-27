goog.module('elemental2.dom.Navigator.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts */
 static m_registerProtocolHandler__$devirt__elemental2_dom_Navigator__java_lang_String__java_lang_String__java_lang_String__void(/** !Navigator */ $thisArg, /** ?string */ scheme, /** ?string */ url, /** ?string */ title) {
  $Overlay.$clinit();
  $thisArg.registerProtocolHandler(scheme, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)), title);
 }
 /** @final @nodts */
 static m_registerProtocolHandler__$devirt__elemental2_dom_Navigator__java_lang_String__elemental2_dom_URL__java_lang_String__void(/** !Navigator */ $thisArg, /** ?string */ scheme, /** URL */ url, /** ?string */ title) {
  $Overlay.$clinit();
  $thisArg.registerProtocolHandler(scheme, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)), title);
 }
 /** @final @nodts */
 static m_unregisterProtocolHandler__$devirt__elemental2_dom_Navigator__java_lang_String__java_lang_String__void(/** !Navigator */ $thisArg, /** ?string */ scheme, /** ?string */ url) {
  $Overlay.$clinit();
  $thisArg.unregisterProtocolHandler(scheme, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)));
 }
 /** @final @nodts */
 static m_unregisterProtocolHandler__$devirt__elemental2_dom_Navigator__java_lang_String__elemental2_dom_URL__void(/** !Navigator */ $thisArg, /** ?string */ scheme, /** URL */ url) {
  $Overlay.$clinit();
  $thisArg.unregisterProtocolHandler(scheme, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Navigator;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'Navigator');

exports = $Overlay;

//# sourceMappingURL=Navigator$$Overlay.js.map

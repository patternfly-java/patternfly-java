goog.module('elemental2.dom.Location.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts */
 static m_assign__$devirt__elemental2_dom_Location__java_lang_String__void(/** !Location */ $thisArg, /** ?string */ url) {
  $Overlay.$clinit();
  $thisArg.assign(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)));
 }
 /** @final @nodts */
 static m_assign__$devirt__elemental2_dom_Location__elemental2_dom_URL__void(/** !Location */ $thisArg, /** URL */ url) {
  $Overlay.$clinit();
  $thisArg.assign(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)));
 }
 /** @final @nodts */
 static m_replace__$devirt__elemental2_dom_Location__java_lang_String__void(/** !Location */ $thisArg, /** ?string */ url) {
  $Overlay.$clinit();
  $thisArg.replace(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)));
 }
 /** @final @nodts */
 static m_replace__$devirt__elemental2_dom_Location__elemental2_dom_URL__void(/** !Location */ $thisArg, /** URL */ url) {
  $Overlay.$clinit();
  $thisArg.replace(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Location;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'Location');

exports = $Overlay;

//# sourceMappingURL=Location$$Overlay.js.map

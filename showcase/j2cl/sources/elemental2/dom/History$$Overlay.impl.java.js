goog.module('elemental2.dom.History.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts */
 static m_pushState__$devirt__elemental2_dom_History__java_lang_Object__java_lang_String__java_lang_String__void(/** !History */ $thisArg, /** * */ data, /** ?string */ title, /** ?string */ url) {
  $Overlay.$clinit();
  $thisArg.pushState(data, title, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)));
 }
 /** @final @nodts */
 static m_pushState__$devirt__elemental2_dom_History__java_lang_Object__java_lang_String__elemental2_dom_URL__void(/** !History */ $thisArg, /** * */ data, /** ?string */ title, /** URL */ url) {
  $Overlay.$clinit();
  $thisArg.pushState(data, title, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)));
 }
 /** @final @nodts */
 static m_replaceState__$devirt__elemental2_dom_History__java_lang_Object__java_lang_String__java_lang_String__void(/** !History */ $thisArg, /** * */ data, /** ?string */ title, /** ?string */ url) {
  $Overlay.$clinit();
  $thisArg.replaceState(data, title, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)));
 }
 /** @final @nodts */
 static m_replaceState__$devirt__elemental2_dom_History__java_lang_Object__java_lang_String__elemental2_dom_URL__void(/** !History */ $thisArg, /** * */ data, /** ?string */ title, /** URL */ url) {
  $Overlay.$clinit();
  $thisArg.replaceState(data, title, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(url)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof History;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'History');

exports = $Overlay;

//# sourceMappingURL=History$$Overlay.js.map

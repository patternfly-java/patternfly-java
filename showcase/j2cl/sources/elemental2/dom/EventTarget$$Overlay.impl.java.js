goog.module('elemental2.dom.EventTarget.$Overlay$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @nodts */
 static m_addEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__elemental2_dom_AddEventListenerOptions__void(/** !EventTarget */ $thisArg, /** ?string */ type, /** EventListener */ listener, /** AddEventListenerOptions */ options) {
  $Overlay.$clinit();
  $thisArg.addEventListener(type, listener, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(options)));
 }
 /** @nodts */
 static m_addEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean__void(/** !EventTarget */ $thisArg, /** ?string */ type, /** EventListener */ listener, /** boolean */ options) {
  $Overlay.$clinit();
  $thisArg.addEventListener(type, listener, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(options)));
 }
 /** @nodts */
 static m_removeEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__elemental2_dom_EventListenerOptions__void(/** !EventTarget */ $thisArg, /** ?string */ type, /** EventListener */ listener, /** EventListenerOptions */ options) {
  $Overlay.$clinit();
  $thisArg.removeEventListener(type, listener, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(options)));
 }
 /** @nodts */
 static m_removeEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean__void(/** !EventTarget */ $thisArg, /** ?string */ type, /** EventListener */ listener, /** boolean */ options) {
  $Overlay.$clinit();
  $thisArg.removeEventListener(type, listener, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(options)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=EventTarget$$Overlay.js.map

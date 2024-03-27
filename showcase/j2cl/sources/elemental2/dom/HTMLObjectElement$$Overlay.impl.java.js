goog.module('elemental2.dom.HTMLObjectElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts */
 static m_TSetProperty__$devirt__elemental2_dom_HTMLObjectElement__double__double__java_lang_String__void(/** !HTMLObjectElement */ $thisArg, /** number */ target, /** number */ property, /** ?string */ value) {
  $Overlay.$clinit();
  $thisArg.TSetProperty(target, property, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(value)));
 }
 /** @final @nodts */
 static m_TSetProperty__$devirt__elemental2_dom_HTMLObjectElement__double__double__double__void(/** !HTMLObjectElement */ $thisArg, /** number */ target, /** number */ property, /** number */ value) {
  $Overlay.$clinit();
  $thisArg.TSetProperty(target, property, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(value)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLObjectElement;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'HTMLObjectElement');

exports = $Overlay;

//# sourceMappingURL=HTMLObjectElement$$Overlay.js.map

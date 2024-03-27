goog.module('elemental2.dom.HTMLDialogElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts */
 static m_show__$devirt__elemental2_dom_HTMLDialogElement__elemental2_dom_Element__void(/** !HTMLDialogElement */ $thisArg, /** Element */ anchor) {
  $Overlay.$clinit();
  $thisArg.show(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(anchor)));
 }
 /** @final @nodts */
 static m_show__$devirt__elemental2_dom_HTMLDialogElement__elemental2_dom_MouseEvent__void(/** !HTMLDialogElement */ $thisArg, /** MouseEvent */ anchor) {
  $Overlay.$clinit();
  $thisArg.show(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(anchor)));
 }
 /** @final @nodts */
 static m_showModal__$devirt__elemental2_dom_HTMLDialogElement__elemental2_dom_Element__void(/** !HTMLDialogElement */ $thisArg, /** Element */ anchor) {
  $Overlay.$clinit();
  $thisArg.showModal(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(anchor)));
 }
 /** @final @nodts */
 static m_showModal__$devirt__elemental2_dom_HTMLDialogElement__elemental2_dom_MouseEvent__void(/** !HTMLDialogElement */ $thisArg, /** MouseEvent */ anchor) {
  $Overlay.$clinit();
  $thisArg.showModal(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(anchor)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLDialogElement;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'HTMLDialogElement');

exports = $Overlay;

//# sourceMappingURL=HTMLDialogElement$$Overlay.js.map

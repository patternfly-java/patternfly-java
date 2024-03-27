goog.module('elemental2.dom.DocumentFragment.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts */
 static m_append__$devirt__elemental2_dom_DocumentFragment__arrayOf_elemental2_dom_Node__void(/** !DocumentFragment */ $thisArg, /** Array<Node> */ nodes) {
  $Overlay.$clinit();
  $thisArg.append(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_append__$devirt__elemental2_dom_DocumentFragment__arrayOf_java_lang_String__void(/** !DocumentFragment */ $thisArg, /** Array<?string> */ nodes) {
  $Overlay.$clinit();
  $thisArg.append(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_prepend__$devirt__elemental2_dom_DocumentFragment__arrayOf_elemental2_dom_Node__void(/** !DocumentFragment */ $thisArg, /** Array<Node> */ nodes) {
  $Overlay.$clinit();
  $thisArg.prepend(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_prepend__$devirt__elemental2_dom_DocumentFragment__arrayOf_java_lang_String__void(/** !DocumentFragment */ $thisArg, /** Array<?string> */ nodes) {
  $Overlay.$clinit();
  $thisArg.prepend(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_replaceChildren__$devirt__elemental2_dom_DocumentFragment__arrayOf_elemental2_dom_Node__void(/** !DocumentFragment */ $thisArg, /** Array<Node> */ nodes) {
  $Overlay.$clinit();
  $thisArg.replaceChildren(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_replaceChildren__$devirt__elemental2_dom_DocumentFragment__arrayOf_java_lang_String__void(/** !DocumentFragment */ $thisArg, /** Array<?string> */ nodes) {
  $Overlay.$clinit();
  $thisArg.replaceChildren(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DocumentFragment;
 }
 
 /** @nodts */
 static $loadModules() {
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'DocumentFragment');

exports = $Overlay;

//# sourceMappingURL=DocumentFragment$$Overlay.js.map

goog.module('elemental2.dom.DocumentType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts */
 static m_after__$devirt__elemental2_dom_DocumentType__arrayOf_elemental2_dom_Node__void(/** !DocumentType */ $thisArg, /** Array<Node> */ nodes) {
  $Overlay.$clinit();
  $thisArg.after(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_after__$devirt__elemental2_dom_DocumentType__arrayOf_java_lang_String__void(/** !DocumentType */ $thisArg, /** Array<?string> */ nodes) {
  $Overlay.$clinit();
  $thisArg.after(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_before__$devirt__elemental2_dom_DocumentType__arrayOf_elemental2_dom_Node__void(/** !DocumentType */ $thisArg, /** Array<Node> */ nodes) {
  $Overlay.$clinit();
  $thisArg.before(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_before__$devirt__elemental2_dom_DocumentType__arrayOf_java_lang_String__void(/** !DocumentType */ $thisArg, /** Array<?string> */ nodes) {
  $Overlay.$clinit();
  $thisArg.before(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_replaceWith__$devirt__elemental2_dom_DocumentType__arrayOf_elemental2_dom_Node__void(/** !DocumentType */ $thisArg, /** Array<Node> */ nodes) {
  $Overlay.$clinit();
  $thisArg.replaceWith(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_replaceWith__$devirt__elemental2_dom_DocumentType__arrayOf_java_lang_String__void(/** !DocumentType */ $thisArg, /** Array<?string> */ nodes) {
  $Overlay.$clinit();
  $thisArg.replaceWith(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DocumentType;
 }
 
 /** @nodts */
 static $loadModules() {
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'DocumentType');

exports = $Overlay;

//# sourceMappingURL=DocumentType$$Overlay.js.map

goog.module('elemental2.dom.Document.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts */
 static m_append__$devirt__elemental2_dom_Document__arrayOf_elemental2_dom_Node__void(/** !Document */ $thisArg, /** Array<Node> */ nodes) {
  $Overlay.$clinit();
  $thisArg.append(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_append__$devirt__elemental2_dom_Document__arrayOf_java_lang_String__void(/** !Document */ $thisArg, /** Array<?string> */ nodes) {
  $Overlay.$clinit();
  $thisArg.append(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts @return {Element} */
 static m_createElement__$devirt__elemental2_dom_Document__java_lang_String__elemental2_dom_Document_CreateElementTypeExtensionType__elemental2_dom_Element(/** !Document */ $thisArg, /** ?string */ tagName, /** ? */ typeExtension) {
  $Overlay.$clinit();
  return $thisArg.createElement(tagName, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(typeExtension)));
 }
 /** @final @nodts @return {Element} */
 static m_createElement__$devirt__elemental2_dom_Document__java_lang_String__java_lang_String__elemental2_dom_Element(/** !Document */ $thisArg, /** ?string */ tagName, /** ?string */ typeExtension) {
  $Overlay.$clinit();
  return $thisArg.createElement(tagName, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(typeExtension)));
 }
 /** @final @nodts @return {Text} */
 static m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String__elemental2_dom_Text(/** !Document */ $thisArg, /** ?string */ data) {
  $Overlay.$clinit();
  return $thisArg.createTextNode(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(data)));
 }
 /** @final @nodts @return {Text} */
 static m_createTextNode__$devirt__elemental2_dom_Document__double__elemental2_dom_Text(/** !Document */ $thisArg, /** number */ data) {
  $Overlay.$clinit();
  return $thisArg.createTextNode(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(data)));
 }
 /** @final @nodts @return {TouchList} */
 static m_createTouchList__$devirt__elemental2_dom_Document__arrayOf_elemental2_dom_Touch__elemental2_dom_TouchList(/** !Document */ $thisArg, /** Array<Touch> */ touches) {
  $Overlay.$clinit();
  return $thisArg.createTouchList(/**@type {Array<Touch>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(touches)));
 }
 /** @final @nodts */
 static m_prepend__$devirt__elemental2_dom_Document__arrayOf_elemental2_dom_Node__void(/** !Document */ $thisArg, /** Array<Node> */ nodes) {
  $Overlay.$clinit();
  $thisArg.prepend(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_prepend__$devirt__elemental2_dom_Document__arrayOf_java_lang_String__void(/** !Document */ $thisArg, /** Array<?string> */ nodes) {
  $Overlay.$clinit();
  $thisArg.prepend(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_replaceChildren__$devirt__elemental2_dom_Document__arrayOf_elemental2_dom_Node__void(/** !Document */ $thisArg, /** Array<Node> */ nodes) {
  $Overlay.$clinit();
  $thisArg.replaceChildren(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_replaceChildren__$devirt__elemental2_dom_Document__arrayOf_java_lang_String__void(/** !Document */ $thisArg, /** Array<?string> */ nodes) {
  $Overlay.$clinit();
  $thisArg.replaceChildren(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_write__$devirt__elemental2_dom_Document__java_lang_String__void(/** !Document */ $thisArg, /** ?string */ text) {
  $Overlay.$clinit();
  $thisArg.write(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(text)));
 }
 /** @final @nodts */
 static m_write__$devirt__elemental2_dom_Document__elemental2_dom_TrustedHTML__void(/** !Document */ $thisArg, /** TrustedHTML */ text) {
  $Overlay.$clinit();
  $thisArg.write(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(text)));
 }
 /** @final @nodts */
 static m_writeln__$devirt__elemental2_dom_Document__java_lang_String__void(/** !Document */ $thisArg, /** ?string */ text) {
  $Overlay.$clinit();
  $thisArg.writeln(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(text)));
 }
 /** @final @nodts */
 static m_writeln__$devirt__elemental2_dom_Document__elemental2_dom_TrustedHTML__void(/** !Document */ $thisArg, /** TrustedHTML */ text) {
  $Overlay.$clinit();
  $thisArg.writeln(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(text)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Document;
 }
 
 /** @nodts */
 static $loadModules() {
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'Document');

exports = $Overlay;

//# sourceMappingURL=Document$$Overlay.js.map

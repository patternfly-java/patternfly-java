goog.module('elemental2.dom.Element.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts */
 static m_after__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node__void(/** !Element */ $thisArg, /** Array<Node> */ nodes) {
  $Overlay.$clinit();
  $thisArg.after(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_after__$devirt__elemental2_dom_Element__arrayOf_java_lang_String__void(/** !Element */ $thisArg, /** Array<?string> */ nodes) {
  $Overlay.$clinit();
  $thisArg.after(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_append__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node__void(/** !Element */ $thisArg, /** Array<Node> */ nodes) {
  $Overlay.$clinit();
  $thisArg.append(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_append__$devirt__elemental2_dom_Element__arrayOf_java_lang_String__void(/** !Element */ $thisArg, /** Array<?string> */ nodes) {
  $Overlay.$clinit();
  $thisArg.append(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_before__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node__void(/** !Element */ $thisArg, /** Array<Node> */ nodes) {
  $Overlay.$clinit();
  $thisArg.before(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_before__$devirt__elemental2_dom_Element__arrayOf_java_lang_String__void(/** !Element */ $thisArg, /** Array<?string> */ nodes) {
  $Overlay.$clinit();
  $thisArg.before(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts @return {boolean} */
 static m_matchesSelector__$devirt__elemental2_dom_Element__java_lang_String__elemental2_dom_Node__boolean(/** !Element */ $thisArg, /** ?string */ selectors, /** Node */ refNodes) {
  $Overlay.$clinit();
  return $thisArg.matchesSelector(selectors, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(refNodes)));
 }
 /** @final @nodts @return {boolean} */
 static m_matchesSelector__$devirt__elemental2_dom_Element__java_lang_String__elemental2_dom_NodeList__boolean(/** !Element */ $thisArg, /** ?string */ selectors, /** NodeList<*> */ refNodes) {
  $Overlay.$clinit();
  return $thisArg.matchesSelector(selectors, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(refNodes)));
 }
 /** @final @nodts */
 static m_prepend__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node__void(/** !Element */ $thisArg, /** Array<Node> */ nodes) {
  $Overlay.$clinit();
  $thisArg.prepend(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_prepend__$devirt__elemental2_dom_Element__arrayOf_java_lang_String__void(/** !Element */ $thisArg, /** Array<?string> */ nodes) {
  $Overlay.$clinit();
  $thisArg.prepend(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_replaceChildren__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node__void(/** !Element */ $thisArg, /** Array<Node> */ nodes) {
  $Overlay.$clinit();
  $thisArg.replaceChildren(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_replaceChildren__$devirt__elemental2_dom_Element__arrayOf_java_lang_String__void(/** !Element */ $thisArg, /** Array<?string> */ nodes) {
  $Overlay.$clinit();
  $thisArg.replaceChildren(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_replaceWith__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node__void(/** !Element */ $thisArg, /** Array<Node> */ nodes) {
  $Overlay.$clinit();
  $thisArg.replaceWith(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_replaceWith__$devirt__elemental2_dom_Element__arrayOf_java_lang_String__void(/** !Element */ $thisArg, /** Array<?string> */ nodes) {
  $Overlay.$clinit();
  $thisArg.replaceWith(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(nodes))));
 }
 /** @final @nodts */
 static m_scrollIntoView__$devirt__elemental2_dom_Element__elemental2_dom_ScrollIntoViewOptions__void(/** !Element */ $thisArg, /** ScrollIntoViewOptions */ top) {
  $Overlay.$clinit();
  $thisArg.scrollIntoView(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(top)));
 }
 /** @final @nodts */
 static m_scrollIntoView__$devirt__elemental2_dom_Element__boolean__void(/** !Element */ $thisArg, /** boolean */ top) {
  $Overlay.$clinit();
  $thisArg.scrollIntoView(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(top)));
 }
 /** @final @nodts */
 static m_scrollTo__$devirt__elemental2_dom_Element__elemental2_dom_ScrollToOptions__double__void(/** !Element */ $thisArg, /** ScrollToOptions */ scrollToOptionsOrX, /** number */ y) {
  $Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(scrollToOptionsOrX)), y);
 }
 /** @final @nodts */
 static m_scrollTo__$devirt__elemental2_dom_Element__elemental2_dom_ScrollToOptions__void(/** !Element */ $thisArg, /** ScrollToOptions */ scrollToOptionsOrX) {
  $Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(scrollToOptionsOrX)));
 }
 /** @final @nodts */
 static m_scrollTo__$devirt__elemental2_dom_Element__double__double__void(/** !Element */ $thisArg, /** number */ scrollToOptionsOrX, /** number */ y) {
  $Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(scrollToOptionsOrX)), y);
 }
 /** @final @nodts */
 static m_scrollTo__$devirt__elemental2_dom_Element__double__void(/** !Element */ $thisArg, /** number */ scrollToOptionsOrX) {
  $Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(scrollToOptionsOrX)));
 }
 /** @final @nodts */
 static m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(/** !Element */ $thisArg, /** ?string */ name, /** ?string */ value) {
  $Overlay.$clinit();
  $thisArg.setAttribute(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(value)));
 }
 /** @final @nodts */
 static m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__elemental2_dom_TrustedHTML__void(/** !Element */ $thisArg, /** ?string */ name, /** TrustedHTML */ value) {
  $Overlay.$clinit();
  $thisArg.setAttribute(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(value)));
 }
 /** @final @nodts */
 static m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__elemental2_dom_TrustedScriptURL__void(/** !Element */ $thisArg, /** ?string */ name, /** TrustedScriptURL */ value) {
  $Overlay.$clinit();
  $thisArg.setAttribute(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(value)));
 }
 /** @final @nodts */
 static m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(/** !Element */ $thisArg, /** ?string */ name, /** boolean */ value) {
  $Overlay.$clinit();
  $thisArg.setAttribute(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(value)));
 }
 /** @final @nodts */
 static m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__double__void(/** !Element */ $thisArg, /** ?string */ name, /** number */ value) {
  $Overlay.$clinit();
  $thisArg.setAttribute(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(value)));
 }
 /** @final @nodts */
 static m_setAttributeNS__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__java_lang_String__void(/** !Element */ $thisArg, /** ?string */ namespaceURI, /** ?string */ qualifiedName, /** ?string */ value) {
  $Overlay.$clinit();
  $thisArg.setAttributeNS(namespaceURI, qualifiedName, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(value)));
 }
 /** @final @nodts */
 static m_setAttributeNS__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__boolean__void(/** !Element */ $thisArg, /** ?string */ namespaceURI, /** ?string */ qualifiedName, /** boolean */ value) {
  $Overlay.$clinit();
  $thisArg.setAttributeNS(namespaceURI, qualifiedName, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(value)));
 }
 /** @final @nodts */
 static m_setAttributeNS__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__double__void(/** !Element */ $thisArg, /** ?string */ namespaceURI, /** ?string */ qualifiedName, /** number */ value) {
  $Overlay.$clinit();
  $thisArg.setAttributeNS(namespaceURI, qualifiedName, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(value)));
 }
 /** @nodts @return {number} */
 static get f_ALLOW_KEYBOARD_INPUT__elemental2_dom_Element_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_ALLOW_KEYBOARD_INPUT__elemental2_dom_Element_$Overlay);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_ALLOW_KEYBOARD_INPUT__elemental2_dom_Element_$Overlay = Element.ALLOW_KEYBOARD_INPUT;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Element;
 }
 
 /** @nodts */
 static $loadModules() {
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
/**@private {number} @nodts*/
$Overlay.$static_ALLOW_KEYBOARD_INPUT__elemental2_dom_Element_$Overlay = 0;
$Util.$setClassMetadata($Overlay, 'Element');

exports = $Overlay;

//# sourceMappingURL=Element$$Overlay.js.map

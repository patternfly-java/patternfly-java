goog.module('org.patternfly.core.ElementDelegate$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Container = goog.require('org.jboss.elemento.Container$impl');
const HasElement = goog.require('org.jboss.elemento.HasElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let Document_$Overlay = goog.forwardDeclare('elemental2.dom.Document.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {HasElement<E, B>}
 * @extends {Container<E, B>}
 */
class ElementDelegate {
 /** @abstract @nodts @return {HTMLElement} */
 m_delegate__elemental2_dom_HTMLElement() {}
 /** @abstract @override @nodts @return {B} */
 m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ text) {}
 /** @abstract @override @nodts @return {B} */
 m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ text) {}
 /** @abstract @override @nodts @return {B} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ text) {}
 /** @abstract @override @nodts @return {B} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** SafeHtml */ html) {}
 /** @abstract @override @nodts @return {B} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ node) {}
 /** @nodts @template E, B @return {B} */
 static m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(/** !ElementDelegate<E, B> */ $thisArg, /** ?string */ text) {
  ElementDelegate.$clinit();
  $thisArg.m_delegate__elemental2_dom_HTMLElement().textContent = text;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(/** !ElementDelegate<E, B> */ $thisArg, /** ?string */ text) {
  ElementDelegate.$clinit();
  let textNode = false;
  let nodes = $thisArg.m_delegate__elemental2_dom_HTMLElement().childNodes;
  for (let i = 0; i < nodes.length && !textNode; i = i + 1 | 0) {
   let node = /**@type {Node}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int__java_lang_Object(nodes, i), Node_$Overlay));
   if (node.nodeType == Node_$Overlay.f_TEXT_NODE__elemental2_dom_Node_$Overlay) {
    node.nodeValue = text;
    textNode = true;
   }
  }
  if (!textNode) {
   $thisArg.m_add__java_lang_String__org_jboss_elemento_TypedBuilder(text);
  }
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(/** !ElementDelegate<E, B> */ $thisArg, /** ?string */ text) {
  ElementDelegate.$clinit();
  $thisArg.m_delegate__elemental2_dom_HTMLElement().appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String__elemental2_dom_Text($thisArg.m_delegate__elemental2_dom_HTMLElement().ownerDocument, text));
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** !ElementDelegate<E, B> */ $thisArg, /** SafeHtml */ html) {
  ElementDelegate.$clinit();
  $thisArg.m_delegate__elemental2_dom_HTMLElement().innerHTML = html.m_asString__java_lang_String();
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** !ElementDelegate<E, B> */ $thisArg, /** Node */ node) {
  ElementDelegate.$clinit();
  $thisArg.m_delegate__elemental2_dom_HTMLElement().appendChild(node);
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts */
 static $clinit() {
  ElementDelegate.$clinit = () =>{};
  ElementDelegate.$loadModules();
  HasElement.$clinit();
  Container.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  HasElement.$markImplementor(ctor);
  Container.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_core_ElementDelegate = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_core_ElementDelegate;
 }
 
 /** @nodts */
 static $loadModules() {
  Document_$Overlay = goog.module.get('elemental2.dom.Document.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  JsArrayLike_$Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ElementDelegate.$markImplementor(/**@type {Function}*/ (ElementDelegate));
$Util.$setClassMetadataForInterface(ElementDelegate, 'org.patternfly.core.ElementDelegate');

exports = ElementDelegate;

//# sourceMappingURL=ElementDelegate.js.map

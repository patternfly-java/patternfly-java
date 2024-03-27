goog.module('org.jboss.elemento.HasElement$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let Document_$Overlay = goog.forwardDeclare('elemental2.dom.Document.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let ClassList = goog.forwardDeclare('org.jboss.elemento.ClassList$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class HasElement {
 /** @abstract @nodts @return {B} @deprecated */
 m_id__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_uniqueId__org_jboss_elemento_TypedBuilder() {}
 /** @abstract @nodts @return {B} */
 m_id__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ id) {}
 /** @abstract @nodts @return {B} */
 m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ text) {}
 /** @abstract @nodts @return {B} */
 m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ text) {}
 /** @abstract @nodts @return {B} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ text) {}
 /** @abstract @nodts @return {B} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** SafeHtml */ html) {}
 /** @abstract @nodts @return {B} */
 m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/** Array<?string> */ classes) {}
 /** @abstract @nodts @return {B} */
 m_toggle__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ className) {}
 /** @abstract @nodts @return {B} */
 m_toggle__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ className, /** boolean */ force) {}
 /** @abstract @nodts @return {B} */
 m_toggle__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** ?string */ className, /** Supplier<?boolean> */ force) {}
 /** @abstract @nodts @return {B} */
 m_classList__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<ClassList<E>> */ classList) {}
 /** @abstract @nodts @return {ClassList<E>} */
 m_classList__org_jboss_elemento_ClassList() {}
 /** @abstract @nodts @return {B} */
 m_attr__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ name, /** boolean */ value) {}
 /** @abstract @nodts @return {B} */
 m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ name, /** number */ value) {}
 /** @abstract @nodts @return {B} */
 m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ name, /** ?string */ value) {}
 /** @abstract @nodts @return {B} */
 m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ name, /** boolean */ value) {}
 /** @abstract @nodts @return {B} */
 m_aria__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ name, /** number */ value) {}
 /** @abstract @nodts @return {B} */
 m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ name, /** ?string */ value) {}
 /** @abstract @nodts @return {B} */
 m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<E> */ consumer) {}
 /** @abstract @nodts @return {B} */
 m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<B> */ consumer) {}
 /** @abstract @nodts @template V @return {B} */
 m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** EventType<V, ?> */ type, /** ?function(V):void */ callback) {}
 /** @nodts @template E, B @return {B} @deprecated */
 static m_id__$default__org_jboss_elemento_HasElement__org_jboss_elemento_TypedBuilder(/** !HasElement<E, B> */ $thisArg) {
  HasElement.$clinit();
  return $thisArg.m_id__java_lang_String__org_jboss_elemento_TypedBuilder(Id.m_unique__java_lang_String());
 }
 /** @nodts @template E, B @return {B} */
 static m_uniqueId__$default__org_jboss_elemento_HasElement__org_jboss_elemento_TypedBuilder(/** !HasElement<E, B> */ $thisArg) {
  HasElement.$clinit();
  return $thisArg.m_id__java_lang_String__org_jboss_elemento_TypedBuilder(Id.m_unique__java_lang_String());
 }
 /** @nodts @template E, B @return {B} */
 static m_id__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HasElement<E, B> */ $thisArg, /** ?string */ id) {
  HasElement.$clinit();
  /**@type {!Element}*/ ($thisArg.m_element__elemental2_dom_Element()).id = id;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_textContent__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HasElement<E, B> */ $thisArg, /** ?string */ text) {
  HasElement.$clinit();
  /**@type {!Node}*/ ($thisArg.m_element__elemental2_dom_Element()).textContent = text;
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_textNode__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HasElement<E, B> */ $thisArg, /** ?string */ text) {
  HasElement.$clinit();
  let textNode = false;
  let nodes = /**@type {!Node}*/ ($thisArg.m_element__elemental2_dom_Element()).childNodes;
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
 static m_add__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HasElement<E, B> */ $thisArg, /** ?string */ text) {
  HasElement.$clinit();
  /**@type {!Node}*/ ($thisArg.m_element__elemental2_dom_Element()).appendChild(Document_$Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String__elemental2_dom_Text(/**@type {!Node}*/ ($thisArg.m_element__elemental2_dom_Element()).ownerDocument, text));
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_innerHtml__$default__org_jboss_elemento_HasElement__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** !HasElement<E, B> */ $thisArg, /** SafeHtml */ html) {
  HasElement.$clinit();
  /**@type {!Element}*/ ($thisArg.m_element__elemental2_dom_Element()).innerHTML = html.m_asString__java_lang_String();
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_css__$default__org_jboss_elemento_HasElement__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/** !HasElement<E, B> */ $thisArg, /** Array<?string> */ classes) {
  HasElement.$clinit();
  $thisArg.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(classes);
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_toggle__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HasElement<E, B> */ $thisArg, /** ?string */ className) {
  HasElement.$clinit();
  $thisArg.m_classList__org_jboss_elemento_ClassList().m_toggle__java_lang_String__void(className);
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_toggle__$default__org_jboss_elemento_HasElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** !HasElement<E, B> */ $thisArg, /** ?string */ className, /** boolean */ force) {
  HasElement.$clinit();
  $thisArg.m_classList__org_jboss_elemento_ClassList().m_toggle__java_lang_String__boolean__void(className, force);
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_toggle__$default__org_jboss_elemento_HasElement__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** !HasElement<E, B> */ $thisArg, /** ?string */ className, /** Supplier<?boolean> */ force) {
  HasElement.$clinit();
  $thisArg.m_classList__org_jboss_elemento_ClassList().m_toggle__java_lang_String__boolean__void(className, Boolean.m_booleanValue__java_lang_Boolean__boolean(/**@type {?boolean}*/ ($Casts.$to(force.m_get__java_lang_Object(), Boolean))));
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_classList__$default__org_jboss_elemento_HasElement__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** !HasElement<E, B> */ $thisArg, /** Consumer<ClassList<E>> */ classList) {
  HasElement.$clinit();
  classList.m_accept__java_lang_Object__void(/**@type {ClassList<E>}*/ (ClassList.m_classList__elemental2_dom_Element__org_jboss_elemento_ClassList($thisArg.m_element__elemental2_dom_Element())));
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {ClassList<E>} */
 static m_classList__$default__org_jboss_elemento_HasElement__org_jboss_elemento_ClassList(/** !HasElement<E, B> */ $thisArg) {
  HasElement.$clinit();
  return /**@type {ClassList<E>}*/ (ClassList.m_classList__elemental2_dom_Element__org_jboss_elemento_ClassList($thisArg.m_element__elemental2_dom_Element()));
 }
 /** @nodts @template E, B @return {B} */
 static m_attr__$default__org_jboss_elemento_HasElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** !HasElement<E, B> */ $thisArg, /** ?string */ name, /** boolean */ value) {
  HasElement.$clinit();
  $Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean__void(/**@type {!Element}*/ ($thisArg.m_element__elemental2_dom_Element()), name, value);
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_attr__$default__org_jboss_elemento_HasElement__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** !HasElement<E, B> */ $thisArg, /** ?string */ name, /** number */ value) {
  HasElement.$clinit();
  $Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__double__void(/**@type {!Element}*/ ($thisArg.m_element__elemental2_dom_Element()), name, value);
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_attr__$default__org_jboss_elemento_HasElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HasElement<E, B> */ $thisArg, /** ?string */ name, /** ?string */ value) {
  HasElement.$clinit();
  $Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(/**@type {!Element}*/ ($thisArg.m_element__elemental2_dom_Element()), name, value);
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_aria__$default__org_jboss_elemento_HasElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** !HasElement<E, B> */ $thisArg, /** ?string */ name, /** boolean */ value) {
  HasElement.$clinit();
  let safeName = j_l_String.m_startsWith__java_lang_String__java_lang_String__boolean(name, 'aria-') ? name : 'aria-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(name);
  return $thisArg.m_attr__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(safeName, value);
 }
 /** @nodts @template E, B @return {B} */
 static m_aria__$default__org_jboss_elemento_HasElement__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** !HasElement<E, B> */ $thisArg, /** ?string */ name, /** number */ value) {
  HasElement.$clinit();
  let safeName = j_l_String.m_startsWith__java_lang_String__java_lang_String__boolean(name, 'aria-') ? name : 'aria-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(name);
  return $thisArg.m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(safeName, value);
 }
 /** @nodts @template E, B @return {B} */
 static m_aria__$default__org_jboss_elemento_HasElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** !HasElement<E, B> */ $thisArg, /** ?string */ name, /** ?string */ value) {
  HasElement.$clinit();
  let safeName = j_l_String.m_startsWith__java_lang_String__java_lang_String__boolean(name, 'aria-') ? name : 'aria-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(name);
  return $thisArg.m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(safeName, value);
 }
 /** @nodts @template E, B @return {B} */
 static m_apply__$default__org_jboss_elemento_HasElement__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** !HasElement<E, B> */ $thisArg, /** Consumer<E> */ consumer) {
  HasElement.$clinit();
  consumer.m_accept__java_lang_Object__void($thisArg.m_element__elemental2_dom_Element());
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_run__$default__org_jboss_elemento_HasElement__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** !HasElement<E, B> */ $thisArg, /** Consumer<B> */ consumer) {
  HasElement.$clinit();
  consumer.m_accept__java_lang_Object__void($thisArg.m_that__org_jboss_elemento_TypedBuilder());
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B, V @return {B} */
 static m_on__$default__org_jboss_elemento_HasElement__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** !HasElement<E, B> */ $thisArg, /** EventType<V, ?> */ type, /** ?function(V):void */ callback) {
  HasElement.$clinit();
  EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(/**@type {EventTarget}*/ ($thisArg.m_element__elemental2_dom_Element()), type, callback);
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts */
 static $clinit() {
  HasElement.$clinit = () =>{};
  HasElement.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_HasElement = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_HasElement;
 }
 
 /** @nodts */
 static $loadModules() {
  Document_$Overlay = goog.module.get('elemental2.dom.Document.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  JsArrayLike_$Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  ClassList = goog.module.get('org.jboss.elemento.ClassList$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HasElement.$markImplementor(/**@type {Function}*/ (HasElement));
$Util.$setClassMetadataForInterface(HasElement, 'org.jboss.elemento.HasElement');

exports = HasElement;

//# sourceMappingURL=HasElement.js.map

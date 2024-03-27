goog.module('org.jboss.elemento.HTMLContainerBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Container = goog.require('org.jboss.elemento.Container$impl');
const Finder = goog.require('org.jboss.elemento.Finder$impl');
const HasElement = goog.require('org.jboss.elemento.HasElement$impl');
const HasHTMLElement = goog.require('org.jboss.elemento.HasHTMLElement$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let ClassList = goog.forwardDeclare('org.jboss.elemento.ClassList$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template E
 * @implements {HasElement<E, HTMLContainerBuilder<E>>}
 * @implements {HasHTMLElement<E, HTMLContainerBuilder<E>>}
 * @implements {Finder<E>}
 * @implements {Container<E, HTMLContainerBuilder<E>>}
 */
class HTMLContainerBuilder extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {E} @nodts*/
  this.f_element__org_jboss_elemento_HTMLContainerBuilder_;
 }
 /** @nodts @template E @return {!HTMLContainerBuilder<E>} */
 static $create__elemental2_dom_HTMLElement(/** E */ element) {
  HTMLContainerBuilder.$clinit();
  let $instance = new HTMLContainerBuilder();
  $instance.$ctor__org_jboss_elemento_HTMLContainerBuilder__elemental2_dom_HTMLElement__void(element);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_HTMLContainerBuilder__elemental2_dom_HTMLElement__void(/** E */ element) {
  this.$ctor__java_lang_Object__void();
  this.f_element__org_jboss_elemento_HTMLContainerBuilder_ = /**@type {E}*/ ($Casts.$to(Objects.m_requireNonNull__java_lang_Object__java_lang_String__java_lang_Object(element, 'element required'), $Overlay));
 }
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_that__org_jboss_elemento_HTMLContainerBuilder() {
  return this;
 }
 /** @nodts @return {E} */
 m_element__elemental2_dom_HTMLElement() {
  return this.f_element__org_jboss_elemento_HTMLContainerBuilder_;
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_jboss_elemento_HTMLContainerBuilder();
 }
 //Bridge method.
 /** @final @override @nodts @return {E} */
 m_element__elemental2_dom_Element() {
  return this.m_element__elemental2_dom_HTMLElement();
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_add__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<E> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_apply__$default__org_jboss_elemento_HasElement__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_aria__$default__org_jboss_elemento_HasElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_aria__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_aria__$default__org_jboss_elemento_HasElement__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_aria__$default__org_jboss_elemento_HasElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_attr__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_attr__$default__org_jboss_elemento_HasElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_attr__$default__org_jboss_elemento_HasElement__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_attr__$default__org_jboss_elemento_HasElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_classList__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<ClassList<E>> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_classList__$default__org_jboss_elemento_HasElement__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {ClassList<E>} */
 m_classList__org_jboss_elemento_ClassList() {
  return /**@type {ClassList<E>}*/ (HasElement.m_classList__$default__org_jboss_elemento_HasElement__org_jboss_elemento_ClassList(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/** Array<?string> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_css__$default__org_jboss_elemento_HasElement__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} @deprecated */
 m_id__org_jboss_elemento_TypedBuilder() {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_id__$default__org_jboss_elemento_HasElement__org_jboss_elemento_TypedBuilder(this), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_id__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_id__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** SafeHtml */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_innerHtml__$default__org_jboss_elemento_HasElement__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @template V @return {HTMLContainerBuilder<E>} */
 m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** EventType<V, ?> */ arg0, /** ?function(V):void */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_on__$default__org_jboss_elemento_HasElement__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<HTMLContainerBuilder<E>> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_run__$default__org_jboss_elemento_HasElement__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_textContent__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_textNode__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_toggle__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_toggle__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_toggle__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_toggle__$default__org_jboss_elemento_HasElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_toggle__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** Supplier<?boolean> */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_toggle__$default__org_jboss_elemento_HasElement__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_uniqueId__org_jboss_elemento_TypedBuilder() {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_uniqueId__$default__org_jboss_elemento_HasElement__org_jboss_elemento_TypedBuilder(this), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_data__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_hidden__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_hidden__$default__org_jboss_elemento_HasHTMLElement__boolean__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_style__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_style__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_style__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_style__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1, /** boolean */ arg2) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1, /** boolean */ arg2) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_title__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_title__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @override @nodts @template F @return {F} */
 m_closest__org_jboss_elemento_By__elemental2_dom_HTMLElement(/** By */ arg0) {
  return Finder.m_closest__$default__org_jboss_elemento_Finder__org_jboss_elemento_By__elemental2_dom_HTMLElement(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @template F @return {F} */
 m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(/** By */ arg0) {
  return Finder.m_find__$default__org_jboss_elemento_Finder__org_jboss_elemento_By__elemental2_dom_HTMLElement(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Iterable<HTMLElement>} */
 m_findAll__org_jboss_elemento_By__java_lang_Iterable(/** By */ arg0) {
  return Finder.m_findAll__$default__org_jboss_elemento_Finder__org_jboss_elemento_By__java_lang_Iterable(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(Container.m_add__$default__org_jboss_elemento_Container__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/** IsElement<?> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(Container.m_add__$default__org_jboss_elemento_Container__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(Container.m_add__$default__org_jboss_elemento_Container__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_addAll__arrayOf_elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Array<Node> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(Container.m_addAll__$default__org_jboss_elemento_Container__arrayOf_elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_addAll__arrayOf_elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Array<Element> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(Container.m_addAll__$default__org_jboss_elemento_Container__arrayOf_elemental2_dom_Element__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_addAll__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_TypedBuilder(/** Array<HTMLElement> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(Container.m_addAll__$default__org_jboss_elemento_Container__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_addAll__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/** Array<IsElement<?>> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(Container.m_addAll__$default__org_jboss_elemento_Container__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_addAll__java_lang_Iterable__org_jboss_elemento_TypedBuilder(/** Iterable<?> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(Container.m_addAll__$default__org_jboss_elemento_Container__java_lang_Iterable__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLContainerBuilder<E>} */
 m_addAll__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Iterable<?>> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(Container.m_addAll__$default__org_jboss_elemento_Container__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_add__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_add__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_apply__java_util_function_Consumer__org_jboss_elemento_HTMLContainerBuilder(/** Consumer<E> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_apply__$default__org_jboss_elemento_HasElement__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_aria__java_lang_String__boolean__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_aria__$default__org_jboss_elemento_HasElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_aria__java_lang_String__int__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_aria__$default__org_jboss_elemento_HasElement__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_aria__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_aria__$default__org_jboss_elemento_HasElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_attr__java_lang_String__boolean__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_attr__$default__org_jboss_elemento_HasElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_attr__java_lang_String__int__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_attr__$default__org_jboss_elemento_HasElement__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_attr__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_attr__$default__org_jboss_elemento_HasElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_classList__java_util_function_Consumer__org_jboss_elemento_HTMLContainerBuilder(/** Consumer<ClassList<E>> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_classList__$default__org_jboss_elemento_HasElement__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_css__arrayOf_java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** Array<?string> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_css__$default__org_jboss_elemento_HasElement__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} @deprecated */
 m_id__org_jboss_elemento_HTMLContainerBuilder() {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_id__$default__org_jboss_elemento_HasElement__org_jboss_elemento_TypedBuilder(this), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_id__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_id__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_HTMLContainerBuilder(/** SafeHtml */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_innerHtml__$default__org_jboss_elemento_HasElement__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @template V @return {HTMLContainerBuilder<E>} */
 m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_HTMLContainerBuilder(/** EventType<V, ?> */ arg0, /** ?function(V):void */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_on__$default__org_jboss_elemento_HasElement__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_run__java_util_function_Consumer__org_jboss_elemento_HTMLContainerBuilder(/** Consumer<HTMLContainerBuilder<E>> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_run__$default__org_jboss_elemento_HasElement__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_textContent__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_textContent__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_textNode__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_textNode__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_toggle__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_toggle__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_toggle__java_lang_String__boolean__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_toggle__$default__org_jboss_elemento_HasElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_toggle__java_lang_String__java_util_function_Supplier__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0, /** Supplier<?boolean> */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_toggle__$default__org_jboss_elemento_HasElement__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_uniqueId__org_jboss_elemento_HTMLContainerBuilder() {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_uniqueId__$default__org_jboss_elemento_HasElement__org_jboss_elemento_TypedBuilder(this), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_data__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_data__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_hidden__boolean__org_jboss_elemento_HTMLContainerBuilder(/** boolean */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_hidden__$default__org_jboss_elemento_HasHTMLElement__boolean__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_style__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_style__java_lang_String__boolean__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_style__java_lang_String__int__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_style__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_style__java_lang_String__int__boolean__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0, /** number */ arg1, /** boolean */ arg2) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0, /** ?string */ arg1, /** boolean */ arg2) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_title__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_title__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_add__elemental2_dom_Node__org_jboss_elemento_HTMLContainerBuilder(/** Node */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(Container.m_add__$default__org_jboss_elemento_Container__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_add__org_jboss_elemento_IsElement__org_jboss_elemento_HTMLContainerBuilder(/** IsElement<?> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(Container.m_add__$default__org_jboss_elemento_Container__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_add__java_util_function_Supplier__org_jboss_elemento_HTMLContainerBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(Container.m_add__$default__org_jboss_elemento_Container__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_addAll__arrayOf_elemental2_dom_Node__org_jboss_elemento_HTMLContainerBuilder(/** Array<Node> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(Container.m_addAll__$default__org_jboss_elemento_Container__arrayOf_elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_addAll__arrayOf_elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(/** Array<Element> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(Container.m_addAll__$default__org_jboss_elemento_Container__arrayOf_elemental2_dom_Element__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_addAll__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(/** Array<HTMLElement> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(Container.m_addAll__$default__org_jboss_elemento_Container__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_addAll__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_HTMLContainerBuilder(/** Array<IsElement<?>> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(Container.m_addAll__$default__org_jboss_elemento_Container__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_addAll__java_lang_Iterable__org_jboss_elemento_HTMLContainerBuilder(/** Iterable<?> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(Container.m_addAll__$default__org_jboss_elemento_Container__java_lang_Iterable__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {HTMLContainerBuilder<E>} */
 m_addAll__java_util_function_Supplier__org_jboss_elemento_HTMLContainerBuilder(/** Supplier<Iterable<?>> */ arg0) {
  return /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(Container.m_addAll__$default__org_jboss_elemento_Container__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), HTMLContainerBuilder));
 }
 /** @nodts */
 static $clinit() {
  HTMLContainerBuilder.$clinit = () =>{};
  HTMLContainerBuilder.$loadModules();
  j_l_Object.$clinit();
  HasElement.$clinit();
  HasHTMLElement.$clinit();
  Finder.$clinit();
  Container.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLContainerBuilder;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HasElement.$markImplementor(HTMLContainerBuilder);
HasHTMLElement.$markImplementor(HTMLContainerBuilder);
Finder.$markImplementor(HTMLContainerBuilder);
Container.$markImplementor(HTMLContainerBuilder);
$Util.$setClassMetadata(HTMLContainerBuilder, 'org.jboss.elemento.HTMLContainerBuilder');

exports = HTMLContainerBuilder;

//# sourceMappingURL=HTMLContainerBuilder.js.map

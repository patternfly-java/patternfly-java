goog.module('org.jboss.elemento.InputElementBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Finder = goog.require('org.jboss.elemento.Finder$impl');
const HasElement = goog.require('org.jboss.elemento.HasElement$impl');
const HasHTMLElement = goog.require('org.jboss.elemento.HasHTMLElement$impl');
const HasInputElement = goog.require('org.jboss.elemento.HasInputElement$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let ClassList = goog.forwardDeclare('org.jboss.elemento.ClassList$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template E
 * @implements {HasElement<E, InputElementBuilder<E>>}
 * @implements {HasHTMLElement<E, InputElementBuilder<E>>}
 * @implements {HasInputElement<E, InputElementBuilder<E>>}
 * @implements {Finder<E>}
 */
class InputElementBuilder extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {E} @nodts*/
  this.f_element__org_jboss_elemento_InputElementBuilder_;
 }
 /** @nodts @template E @return {!InputElementBuilder<E>} */
 static $create__elemental2_dom_HTMLInputElement(/** E */ element) {
  InputElementBuilder.$clinit();
  let $instance = new InputElementBuilder();
  $instance.$ctor__org_jboss_elemento_InputElementBuilder__elemental2_dom_HTMLInputElement__void(element);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_InputElementBuilder__elemental2_dom_HTMLInputElement__void(/** E */ element) {
  this.$ctor__java_lang_Object__void();
  this.f_element__org_jboss_elemento_InputElementBuilder_ = /**@type {E}*/ ($Casts.$to(Objects.m_requireNonNull__java_lang_Object__java_lang_String__java_lang_Object(element, 'element required'), $Overlay));
 }
 /** @nodts @return {InputElementBuilder<E>} */
 m_that__org_jboss_elemento_InputElementBuilder() {
  return this;
 }
 /** @nodts @return {E} */
 m_element__elemental2_dom_HTMLInputElement() {
  return this.f_element__org_jboss_elemento_InputElementBuilder_;
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_jboss_elemento_InputElementBuilder();
 }
 //Bridge method.
 /** @final @override @nodts @return {E} */
 m_element__elemental2_dom_Element() {
  return this.m_element__elemental2_dom_HTMLInputElement();
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_add__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<E> */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_apply__$default__org_jboss_elemento_HasElement__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_aria__$default__org_jboss_elemento_HasElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_aria__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_aria__$default__org_jboss_elemento_HasElement__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_aria__$default__org_jboss_elemento_HasElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_attr__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_attr__$default__org_jboss_elemento_HasElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_attr__$default__org_jboss_elemento_HasElement__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_attr__$default__org_jboss_elemento_HasElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_classList__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<ClassList<E>> */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_classList__$default__org_jboss_elemento_HasElement__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {ClassList<E>} */
 m_classList__org_jboss_elemento_ClassList() {
  return /**@type {ClassList<E>}*/ (HasElement.m_classList__$default__org_jboss_elemento_HasElement__org_jboss_elemento_ClassList(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/** Array<?string> */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_css__$default__org_jboss_elemento_HasElement__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} @deprecated */
 m_id__org_jboss_elemento_TypedBuilder() {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_id__$default__org_jboss_elemento_HasElement__org_jboss_elemento_TypedBuilder(this), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_id__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_id__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** SafeHtml */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_innerHtml__$default__org_jboss_elemento_HasElement__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @template V @return {InputElementBuilder<E>} */
 m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** EventType<V, ?> */ arg0, /** ?function(V):void */ arg1) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_on__$default__org_jboss_elemento_HasElement__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<InputElementBuilder<E>> */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_run__$default__org_jboss_elemento_HasElement__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_textContent__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_textNode__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_toggle__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_toggle__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_toggle__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_toggle__$default__org_jboss_elemento_HasElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_toggle__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** Supplier<?boolean> */ arg1) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_toggle__$default__org_jboss_elemento_HasElement__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0, arg1), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_uniqueId__org_jboss_elemento_TypedBuilder() {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_uniqueId__$default__org_jboss_elemento_HasElement__org_jboss_elemento_TypedBuilder(this), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_data__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_hidden__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_hidden__$default__org_jboss_elemento_HasHTMLElement__boolean__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_style__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_style__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_style__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_style__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1, /** boolean */ arg2) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1, /** boolean */ arg2) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_title__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_title__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_accept__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_accept__$default__org_jboss_elemento_HasInputElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_autocomplete__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_autocomplete__$default__org_jboss_elemento_HasInputElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_autofocus__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_autofocus__$default__org_jboss_elemento_HasInputElement__boolean__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_checked__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_checked__$default__org_jboss_elemento_HasInputElement__boolean__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_disabled__$default__org_jboss_elemento_HasInputElement__boolean__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_indeterminate__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_indeterminate__$default__org_jboss_elemento_HasInputElement__boolean__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_max__int__org_jboss_elemento_TypedBuilder(/** number */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_max__$default__org_jboss_elemento_HasInputElement__int__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_max__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_max__$default__org_jboss_elemento_HasInputElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_min__int__org_jboss_elemento_TypedBuilder(/** number */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_min__$default__org_jboss_elemento_HasInputElement__int__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_min__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_min__$default__org_jboss_elemento_HasInputElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_multiple__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_multiple__$default__org_jboss_elemento_HasInputElement__boolean__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_name__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_name__$default__org_jboss_elemento_HasInputElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_placeholder__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_placeholder__$default__org_jboss_elemento_HasInputElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_readOnly__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_readOnly__$default__org_jboss_elemento_HasInputElement__boolean__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_required__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_required__$default__org_jboss_elemento_HasInputElement__boolean__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_tabIndex__int__org_jboss_elemento_TypedBuilder(/** number */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_tabIndex__$default__org_jboss_elemento_HasInputElement__int__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {InputElementBuilder<E>} */
 m_value__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_value__$default__org_jboss_elemento_HasInputElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
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
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_add__java_lang_String__org_jboss_elemento_InputElementBuilder(/** ?string */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_add__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_apply__java_util_function_Consumer__org_jboss_elemento_InputElementBuilder(/** Consumer<E> */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_apply__$default__org_jboss_elemento_HasElement__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_aria__java_lang_String__boolean__org_jboss_elemento_InputElementBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_aria__$default__org_jboss_elemento_HasElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_aria__java_lang_String__int__org_jboss_elemento_InputElementBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_aria__$default__org_jboss_elemento_HasElement__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_aria__java_lang_String__java_lang_String__org_jboss_elemento_InputElementBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_aria__$default__org_jboss_elemento_HasElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_attr__java_lang_String__boolean__org_jboss_elemento_InputElementBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_attr__$default__org_jboss_elemento_HasElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_attr__java_lang_String__int__org_jboss_elemento_InputElementBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_attr__$default__org_jboss_elemento_HasElement__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_attr__java_lang_String__java_lang_String__org_jboss_elemento_InputElementBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_attr__$default__org_jboss_elemento_HasElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_classList__java_util_function_Consumer__org_jboss_elemento_InputElementBuilder(/** Consumer<ClassList<E>> */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_classList__$default__org_jboss_elemento_HasElement__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_css__arrayOf_java_lang_String__org_jboss_elemento_InputElementBuilder(/** Array<?string> */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_css__$default__org_jboss_elemento_HasElement__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} @deprecated */
 m_id__org_jboss_elemento_InputElementBuilder() {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_id__$default__org_jboss_elemento_HasElement__org_jboss_elemento_TypedBuilder(this), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_id__java_lang_String__org_jboss_elemento_InputElementBuilder(/** ?string */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_id__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_InputElementBuilder(/** SafeHtml */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_innerHtml__$default__org_jboss_elemento_HasElement__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @template V @return {InputElementBuilder<E>} */
 m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_InputElementBuilder(/** EventType<V, ?> */ arg0, /** ?function(V):void */ arg1) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_on__$default__org_jboss_elemento_HasElement__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_run__java_util_function_Consumer__org_jboss_elemento_InputElementBuilder(/** Consumer<InputElementBuilder<E>> */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_run__$default__org_jboss_elemento_HasElement__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_textContent__java_lang_String__org_jboss_elemento_InputElementBuilder(/** ?string */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_textContent__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_textNode__java_lang_String__org_jboss_elemento_InputElementBuilder(/** ?string */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_textNode__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_toggle__java_lang_String__org_jboss_elemento_InputElementBuilder(/** ?string */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_toggle__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_toggle__java_lang_String__boolean__org_jboss_elemento_InputElementBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_toggle__$default__org_jboss_elemento_HasElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_toggle__java_lang_String__java_util_function_Supplier__org_jboss_elemento_InputElementBuilder(/** ?string */ arg0, /** Supplier<?boolean> */ arg1) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_toggle__$default__org_jboss_elemento_HasElement__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0, arg1), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_uniqueId__org_jboss_elemento_InputElementBuilder() {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasElement.m_uniqueId__$default__org_jboss_elemento_HasElement__org_jboss_elemento_TypedBuilder(this), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_data__java_lang_String__java_lang_String__org_jboss_elemento_InputElementBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_data__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_hidden__boolean__org_jboss_elemento_InputElementBuilder(/** boolean */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_hidden__$default__org_jboss_elemento_HasHTMLElement__boolean__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_style__java_lang_String__org_jboss_elemento_InputElementBuilder(/** ?string */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_style__java_lang_String__boolean__org_jboss_elemento_InputElementBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_style__java_lang_String__int__org_jboss_elemento_InputElementBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_style__java_lang_String__java_lang_String__org_jboss_elemento_InputElementBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_style__java_lang_String__int__boolean__org_jboss_elemento_InputElementBuilder(/** ?string */ arg0, /** number */ arg1, /** boolean */ arg2) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_InputElementBuilder(/** ?string */ arg0, /** ?string */ arg1, /** boolean */ arg2) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_style__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_title__java_lang_String__org_jboss_elemento_InputElementBuilder(/** ?string */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasHTMLElement.m_title__$default__org_jboss_elemento_HasHTMLElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_accept__java_lang_String__org_jboss_elemento_InputElementBuilder(/** ?string */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_accept__$default__org_jboss_elemento_HasInputElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_autocomplete__java_lang_String__org_jboss_elemento_InputElementBuilder(/** ?string */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_autocomplete__$default__org_jboss_elemento_HasInputElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_autofocus__boolean__org_jboss_elemento_InputElementBuilder(/** boolean */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_autofocus__$default__org_jboss_elemento_HasInputElement__boolean__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_checked__boolean__org_jboss_elemento_InputElementBuilder(/** boolean */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_checked__$default__org_jboss_elemento_HasInputElement__boolean__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_disabled__boolean__org_jboss_elemento_InputElementBuilder(/** boolean */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_disabled__$default__org_jboss_elemento_HasInputElement__boolean__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_indeterminate__boolean__org_jboss_elemento_InputElementBuilder(/** boolean */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_indeterminate__$default__org_jboss_elemento_HasInputElement__boolean__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_max__int__org_jboss_elemento_InputElementBuilder(/** number */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_max__$default__org_jboss_elemento_HasInputElement__int__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_max__java_lang_String__org_jboss_elemento_InputElementBuilder(/** ?string */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_max__$default__org_jboss_elemento_HasInputElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_min__int__org_jboss_elemento_InputElementBuilder(/** number */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_min__$default__org_jboss_elemento_HasInputElement__int__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_min__java_lang_String__org_jboss_elemento_InputElementBuilder(/** ?string */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_min__$default__org_jboss_elemento_HasInputElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_multiple__boolean__org_jboss_elemento_InputElementBuilder(/** boolean */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_multiple__$default__org_jboss_elemento_HasInputElement__boolean__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_name__java_lang_String__org_jboss_elemento_InputElementBuilder(/** ?string */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_name__$default__org_jboss_elemento_HasInputElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_placeholder__java_lang_String__org_jboss_elemento_InputElementBuilder(/** ?string */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_placeholder__$default__org_jboss_elemento_HasInputElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_readOnly__boolean__org_jboss_elemento_InputElementBuilder(/** boolean */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_readOnly__$default__org_jboss_elemento_HasInputElement__boolean__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_required__boolean__org_jboss_elemento_InputElementBuilder(/** boolean */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_required__$default__org_jboss_elemento_HasInputElement__boolean__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_tabIndex__int__org_jboss_elemento_InputElementBuilder(/** number */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_tabIndex__$default__org_jboss_elemento_HasInputElement__int__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {InputElementBuilder<E>} */
 m_value__java_lang_String__org_jboss_elemento_InputElementBuilder(/** ?string */ arg0) {
  return /**@type {InputElementBuilder<E>}*/ ($Casts.$to(HasInputElement.m_value__$default__org_jboss_elemento_HasInputElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), InputElementBuilder));
 }
 /** @nodts */
 static $clinit() {
  InputElementBuilder.$clinit = () =>{};
  InputElementBuilder.$loadModules();
  j_l_Object.$clinit();
  HasElement.$clinit();
  HasHTMLElement.$clinit();
  HasInputElement.$clinit();
  Finder.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InputElementBuilder;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HasElement.$markImplementor(InputElementBuilder);
HasHTMLElement.$markImplementor(InputElementBuilder);
HasInputElement.$markImplementor(InputElementBuilder);
Finder.$markImplementor(InputElementBuilder);
$Util.$setClassMetadata(InputElementBuilder, 'org.jboss.elemento.InputElementBuilder');

exports = InputElementBuilder;

//# sourceMappingURL=InputElementBuilder.js.map

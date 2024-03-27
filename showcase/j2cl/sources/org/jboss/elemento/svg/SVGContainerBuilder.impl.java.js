goog.module('org.jboss.elemento.svg.SVGContainerBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Container = goog.require('org.jboss.elemento.Container$impl');
const Finder = goog.require('org.jboss.elemento.Finder$impl');
const HasElement = goog.require('org.jboss.elemento.HasElement$impl');
const HasSVGElement = goog.require('org.jboss.elemento.svg.HasSVGElement$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let ClassList = goog.forwardDeclare('org.jboss.elemento.ClassList$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let $Overlay = goog.forwardDeclare('org.jboss.elemento.svg.SVGElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template E
 * @implements {HasElement<E, SVGContainerBuilder<E>>}
 * @implements {HasSVGElement<E, SVGContainerBuilder<E>>}
 * @implements {Finder<E>}
 * @implements {Container<E, SVGContainerBuilder<E>>}
 */
class SVGContainerBuilder extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {E} @nodts*/
  this.f_element__org_jboss_elemento_svg_SVGContainerBuilder_;
 }
 /** @nodts @template E @return {!SVGContainerBuilder<E>} */
 static $create__org_jboss_elemento_svg_SVGElement(/** E */ element) {
  SVGContainerBuilder.$clinit();
  let $instance = new SVGContainerBuilder();
  $instance.$ctor__org_jboss_elemento_svg_SVGContainerBuilder__org_jboss_elemento_svg_SVGElement__void(element);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_svg_SVGContainerBuilder__org_jboss_elemento_svg_SVGElement__void(/** E */ element) {
  this.$ctor__java_lang_Object__void();
  this.f_element__org_jboss_elemento_svg_SVGContainerBuilder_ = /**@type {E}*/ ($Casts.$to(Objects.m_requireNonNull__java_lang_Object__java_lang_String__java_lang_Object(element, 'element required'), $Overlay));
 }
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_that__org_jboss_elemento_svg_SVGContainerBuilder() {
  return this;
 }
 /** @nodts @return {E} */
 m_element__org_jboss_elemento_svg_SVGElement() {
  return this.f_element__org_jboss_elemento_svg_SVGContainerBuilder_;
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_jboss_elemento_svg_SVGContainerBuilder();
 }
 //Bridge method.
 /** @final @override @nodts @return {E} */
 m_element__elemental2_dom_Element() {
  return this.m_element__org_jboss_elemento_svg_SVGElement();
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_add__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<E> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_apply__$default__org_jboss_elemento_HasElement__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_aria__$default__org_jboss_elemento_HasElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_aria__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_aria__$default__org_jboss_elemento_HasElement__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_aria__$default__org_jboss_elemento_HasElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_attr__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_attr__$default__org_jboss_elemento_HasElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_attr__$default__org_jboss_elemento_HasElement__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_attr__$default__org_jboss_elemento_HasElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {ClassList<E>} */
 m_classList__org_jboss_elemento_ClassList() {
  return /**@type {ClassList<E>}*/ (HasElement.m_classList__$default__org_jboss_elemento_HasElement__org_jboss_elemento_ClassList(this));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_classList__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<ClassList<E>> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_classList__$default__org_jboss_elemento_HasElement__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/** Array<?string> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_css__$default__org_jboss_elemento_HasElement__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} @deprecated */
 m_id__org_jboss_elemento_TypedBuilder() {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_id__$default__org_jboss_elemento_HasElement__org_jboss_elemento_TypedBuilder(this), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_id__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_id__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** SafeHtml */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_innerHtml__$default__org_jboss_elemento_HasElement__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @template V @return {SVGContainerBuilder<E>} */
 m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(/** EventType<V, ?> */ arg0, /** ?function(V):void */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_on__$default__org_jboss_elemento_HasElement__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(/** Consumer<SVGContainerBuilder<E>> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_run__$default__org_jboss_elemento_HasElement__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_textContent__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_textNode__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_toggle__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_toggle__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_toggle__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_toggle__$default__org_jboss_elemento_HasElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_toggle__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** Supplier<?boolean> */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_toggle__$default__org_jboss_elemento_HasElement__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_uniqueId__org_jboss_elemento_TypedBuilder() {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_uniqueId__$default__org_jboss_elemento_HasElement__org_jboss_elemento_TypedBuilder(this), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasSVGElement.m_data__$default__org_jboss_elemento_svg_HasSVGElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_style__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasSVGElement.m_style__$default__org_jboss_elemento_svg_HasSVGElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_style__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasSVGElement.m_style__$default__org_jboss_elemento_svg_HasSVGElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_style__java_lang_String__int__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasSVGElement.m_style__$default__org_jboss_elemento_svg_HasSVGElement__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasSVGElement.m_style__$default__org_jboss_elemento_svg_HasSVGElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_style__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** number */ arg1, /** boolean */ arg2) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasSVGElement.m_style__$default__org_jboss_elemento_svg_HasSVGElement__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1, /** boolean */ arg2) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasSVGElement.m_style__$default__org_jboss_elemento_svg_HasSVGElement__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), SVGContainerBuilder));
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
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(Container.m_add__$default__org_jboss_elemento_Container__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/** IsElement<?> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(Container.m_add__$default__org_jboss_elemento_Container__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(Container.m_add__$default__org_jboss_elemento_Container__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_addAll__arrayOf_elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Array<Node> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(Container.m_addAll__$default__org_jboss_elemento_Container__arrayOf_elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_addAll__arrayOf_elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Array<Element> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(Container.m_addAll__$default__org_jboss_elemento_Container__arrayOf_elemental2_dom_Element__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_addAll__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_TypedBuilder(/** Array<HTMLElement> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(Container.m_addAll__$default__org_jboss_elemento_Container__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_addAll__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/** Array<IsElement<?>> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(Container.m_addAll__$default__org_jboss_elemento_Container__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_addAll__java_lang_Iterable__org_jboss_elemento_TypedBuilder(/** Iterable<?> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(Container.m_addAll__$default__org_jboss_elemento_Container__java_lang_Iterable__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Bridge method.
 /** @final @override @nodts @return {SVGContainerBuilder<E>} */
 m_addAll__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Iterable<?>> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(Container.m_addAll__$default__org_jboss_elemento_Container__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_add__java_lang_String__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_add__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_apply__java_util_function_Consumer__org_jboss_elemento_svg_SVGContainerBuilder(/** Consumer<E> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_apply__$default__org_jboss_elemento_HasElement__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_aria__java_lang_String__boolean__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_aria__$default__org_jboss_elemento_HasElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_aria__java_lang_String__int__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_aria__$default__org_jboss_elemento_HasElement__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_aria__java_lang_String__java_lang_String__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_aria__$default__org_jboss_elemento_HasElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_attr__java_lang_String__boolean__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_attr__$default__org_jboss_elemento_HasElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_attr__java_lang_String__int__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_attr__$default__org_jboss_elemento_HasElement__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_attr__java_lang_String__java_lang_String__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_attr__$default__org_jboss_elemento_HasElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_classList__java_util_function_Consumer__org_jboss_elemento_svg_SVGContainerBuilder(/** Consumer<ClassList<E>> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_classList__$default__org_jboss_elemento_HasElement__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_css__arrayOf_java_lang_String__org_jboss_elemento_svg_SVGContainerBuilder(/** Array<?string> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_css__$default__org_jboss_elemento_HasElement__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} @deprecated */
 m_id__org_jboss_elemento_svg_SVGContainerBuilder() {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_id__$default__org_jboss_elemento_HasElement__org_jboss_elemento_TypedBuilder(this), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_id__java_lang_String__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_id__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_svg_SVGContainerBuilder(/** SafeHtml */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_innerHtml__$default__org_jboss_elemento_HasElement__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @template V @return {SVGContainerBuilder<E>} */
 m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_svg_SVGContainerBuilder(/** EventType<V, ?> */ arg0, /** ?function(V):void */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_on__$default__org_jboss_elemento_HasElement__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_run__java_util_function_Consumer__org_jboss_elemento_svg_SVGContainerBuilder(/** Consumer<SVGContainerBuilder<E>> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_run__$default__org_jboss_elemento_HasElement__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_textContent__java_lang_String__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_textContent__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_textNode__java_lang_String__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_textNode__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_toggle__java_lang_String__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_toggle__$default__org_jboss_elemento_HasElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_toggle__java_lang_String__boolean__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_toggle__$default__org_jboss_elemento_HasElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_toggle__java_lang_String__java_util_function_Supplier__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0, /** Supplier<?boolean> */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_toggle__$default__org_jboss_elemento_HasElement__java_lang_String__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_uniqueId__org_jboss_elemento_svg_SVGContainerBuilder() {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasElement.m_uniqueId__$default__org_jboss_elemento_HasElement__org_jboss_elemento_TypedBuilder(this), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_data__java_lang_String__java_lang_String__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasSVGElement.m_data__$default__org_jboss_elemento_svg_HasSVGElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_style__java_lang_String__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasSVGElement.m_style__$default__org_jboss_elemento_svg_HasSVGElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_style__java_lang_String__boolean__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0, /** boolean */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasSVGElement.m_style__$default__org_jboss_elemento_svg_HasSVGElement__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_style__java_lang_String__int__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0, /** number */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasSVGElement.m_style__$default__org_jboss_elemento_svg_HasSVGElement__java_lang_String__int__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_style__java_lang_String__java_lang_String__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasSVGElement.m_style__$default__org_jboss_elemento_svg_HasSVGElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0, arg1), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_style__java_lang_String__int__boolean__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0, /** number */ arg1, /** boolean */ arg2) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasSVGElement.m_style__$default__org_jboss_elemento_svg_HasSVGElement__java_lang_String__int__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_style__java_lang_String__java_lang_String__boolean__org_jboss_elemento_svg_SVGContainerBuilder(/** ?string */ arg0, /** ?string */ arg1, /** boolean */ arg2) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(HasSVGElement.m_style__$default__org_jboss_elemento_svg_HasSVGElement__java_lang_String__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, arg0, arg1, arg2), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_add__elemental2_dom_Node__org_jboss_elemento_svg_SVGContainerBuilder(/** Node */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(Container.m_add__$default__org_jboss_elemento_Container__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_add__org_jboss_elemento_IsElement__org_jboss_elemento_svg_SVGContainerBuilder(/** IsElement<?> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(Container.m_add__$default__org_jboss_elemento_Container__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_add__java_util_function_Supplier__org_jboss_elemento_svg_SVGContainerBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(Container.m_add__$default__org_jboss_elemento_Container__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_addAll__arrayOf_elemental2_dom_Node__org_jboss_elemento_svg_SVGContainerBuilder(/** Array<Node> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(Container.m_addAll__$default__org_jboss_elemento_Container__arrayOf_elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_addAll__arrayOf_elemental2_dom_Element__org_jboss_elemento_svg_SVGContainerBuilder(/** Array<Element> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(Container.m_addAll__$default__org_jboss_elemento_Container__arrayOf_elemental2_dom_Element__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_addAll__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_svg_SVGContainerBuilder(/** Array<HTMLElement> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(Container.m_addAll__$default__org_jboss_elemento_Container__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_addAll__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_svg_SVGContainerBuilder(/** Array<IsElement<?>> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(Container.m_addAll__$default__org_jboss_elemento_Container__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_addAll__java_lang_Iterable__org_jboss_elemento_svg_SVGContainerBuilder(/** Iterable<?> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(Container.m_addAll__$default__org_jboss_elemento_Container__java_lang_Iterable__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 //Default method forwarding stub.
 /** @nodts @return {SVGContainerBuilder<E>} */
 m_addAll__java_util_function_Supplier__org_jboss_elemento_svg_SVGContainerBuilder(/** Supplier<Iterable<?>> */ arg0) {
  return /**@type {SVGContainerBuilder<E>}*/ ($Casts.$to(Container.m_addAll__$default__org_jboss_elemento_Container__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), SVGContainerBuilder));
 }
 /** @nodts */
 static $clinit() {
  SVGContainerBuilder.$clinit = () =>{};
  SVGContainerBuilder.$loadModules();
  j_l_Object.$clinit();
  HasElement.$clinit();
  HasSVGElement.$clinit();
  Finder.$clinit();
  Container.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SVGContainerBuilder;
 }
 
 /** @nodts */
 static $loadModules() {
  Objects = goog.module.get('java.util.Objects$impl');
  $Overlay = goog.module.get('org.jboss.elemento.svg.SVGElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HasElement.$markImplementor(SVGContainerBuilder);
HasSVGElement.$markImplementor(SVGContainerBuilder);
Finder.$markImplementor(SVGContainerBuilder);
Container.$markImplementor(SVGContainerBuilder);
$Util.$setClassMetadata(SVGContainerBuilder, 'org.jboss.elemento.svg.SVGContainerBuilder');

exports = SVGContainerBuilder;

//# sourceMappingURL=SVGContainerBuilder.js.map

goog.module('org.patternfly.component.list.DescriptionListDescription$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const WithText = goog.require('org.patternfly.component.WithText$impl');
const DescriptionListSubComponent = goog.require('org.patternfly.component.list.DescriptionListSubComponent$impl');
const ElementDelegate = goog.require('org.patternfly.core.ElementDelegate$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let HTMLElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLElementBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DescriptionListSubComponent<HTMLElement, DescriptionListDescription>}
 * @implements {WithText<HTMLElement, DescriptionListDescription>}
 * @implements {ElementDelegate<HTMLElement, DescriptionListDescription>}
 */
class DescriptionListDescription extends DescriptionListSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_list_DescriptionListDescription_;
 }
 /** @nodts @return {DescriptionListDescription} */
 static m_descriptionListDescription__org_patternfly_component_list_DescriptionListDescription() {
  DescriptionListDescription.$clinit();
  return DescriptionListDescription.$create__java_lang_String(null);
 }
 /** @nodts @return {DescriptionListDescription} */
 static m_descriptionListDescription__java_lang_String__org_patternfly_component_list_DescriptionListDescription(/** ?string */ text) {
  DescriptionListDescription.$clinit();
  return DescriptionListDescription.$create__java_lang_String(text);
 }
 /** @nodts @return {!DescriptionListDescription} */
 static $create__java_lang_String(/** ?string */ text) {
  DescriptionListDescription.$clinit();
  let $instance = new DescriptionListDescription();
  $instance.$ctor__org_patternfly_component_list_DescriptionListDescription__java_lang_String__void(text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_list_DescriptionListDescription__java_lang_String__void(/** ?string */ text) {
  this.$ctor__org_patternfly_component_list_DescriptionListSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(DescriptionListDescription.f_SUB_COMPONENT_NAME__org_patternfly_component_list_DescriptionListDescription, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_dd__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_descriptionList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_description__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_textElement__org_patternfly_component_list_DescriptionListDescription_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_descriptionList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  if (!$Equality.$same(text, null)) {
   this.m_text__java_lang_String__org_patternfly_component_list_DescriptionListDescription(text);
  }
 }
 /** @override @nodts @return {HTMLElement} */
 m_delegate__elemental2_dom_HTMLElement() {
  return this.f_textElement__org_patternfly_component_list_DescriptionListDescription_;
 }
 /** @nodts @return {DescriptionListDescription} */
 m_text__java_lang_String__org_patternfly_component_list_DescriptionListDescription(/** ?string */ text) {
  /**@type {HTMLElementBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLElementBuilder(this.f_textElement__org_patternfly_component_list_DescriptionListDescription_)).m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(text);
  return this;
 }
 /** @nodts @return {DescriptionListDescription} */
 m_that__org_patternfly_component_list_DescriptionListDescription() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionListDescription} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_list_DescriptionListDescription();
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionListDescription} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_list_DescriptionListDescription(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionListDescription} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {DescriptionListDescription}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), DescriptionListDescription));
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionListDescription} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** SafeHtml */ arg0) {
  return /**@type {DescriptionListDescription}*/ ($Casts.$to(ElementDelegate.m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), DescriptionListDescription));
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionListDescription} */
 m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {DescriptionListDescription}*/ ($Casts.$to(ElementDelegate.m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), DescriptionListDescription));
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionListDescription} */
 m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {DescriptionListDescription}*/ ($Casts.$to(ElementDelegate.m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), DescriptionListDescription));
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionListDescription} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {DescriptionListDescription}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), DescriptionListDescription));
 }
 //Default method forwarding stub.
 /** @nodts @return {DescriptionListDescription} */
 m_add__java_lang_String__org_patternfly_component_list_DescriptionListDescription(/** ?string */ arg0) {
  return /**@type {DescriptionListDescription}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), DescriptionListDescription));
 }
 //Default method forwarding stub.
 /** @nodts @return {DescriptionListDescription} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_patternfly_component_list_DescriptionListDescription(/** SafeHtml */ arg0) {
  return /**@type {DescriptionListDescription}*/ ($Casts.$to(ElementDelegate.m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), DescriptionListDescription));
 }
 //Default method forwarding stub.
 /** @nodts @return {DescriptionListDescription} */
 m_textContent__java_lang_String__org_patternfly_component_list_DescriptionListDescription(/** ?string */ arg0) {
  return /**@type {DescriptionListDescription}*/ ($Casts.$to(ElementDelegate.m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), DescriptionListDescription));
 }
 //Default method forwarding stub.
 /** @nodts @return {DescriptionListDescription} */
 m_textNode__java_lang_String__org_patternfly_component_list_DescriptionListDescription(/** ?string */ arg0) {
  return /**@type {DescriptionListDescription}*/ ($Casts.$to(ElementDelegate.m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), DescriptionListDescription));
 }
 //Default method forwarding stub.
 /** @nodts @return {DescriptionListDescription} */
 m_add__elemental2_dom_Node__org_patternfly_component_list_DescriptionListDescription(/** Node */ arg0) {
  return /**@type {DescriptionListDescription}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), DescriptionListDescription));
 }
 /** @nodts */
 static $clinit() {
  DescriptionListDescription.$clinit = () =>{};
  DescriptionListDescription.$loadModules();
  DescriptionListSubComponent.$clinit();
  ElementDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DescriptionListDescription;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
DescriptionListDescription.f_SUB_COMPONENT_NAME__org_patternfly_component_list_DescriptionListDescription = 'dlg';
WithText.$markImplementor(DescriptionListDescription);
ElementDelegate.$markImplementor(DescriptionListDescription);
$Util.$setClassMetadata(DescriptionListDescription, 'org.patternfly.component.list.DescriptionListDescription');

exports = DescriptionListDescription;

//# sourceMappingURL=DescriptionListDescription.js.map

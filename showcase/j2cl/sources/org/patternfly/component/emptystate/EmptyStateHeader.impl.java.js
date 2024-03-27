goog.module('org.patternfly.component.emptystate.EmptyStateHeader$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const WithIcon = goog.require('org.patternfly.component.WithIcon$impl');
const WithText = goog.require('org.patternfly.component.WithText$impl');
const EmptyStateSubComponent = goog.require('org.patternfly.component.emptystate.EmptyStateSubComponent$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLHeadingElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Spinner = goog.forwardDeclare('org.patternfly.component.spinner.Spinner$impl');
let Validation = goog.forwardDeclare('org.patternfly.core.Validation$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let Variables = goog.forwardDeclare('org.patternfly.style.Variables$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {EmptyStateSubComponent<HTMLDivElement, EmptyStateHeader>}
 * @implements {WithText<HTMLDivElement, EmptyStateHeader>}
 * @implements {WithIcon<HTMLDivElement, EmptyStateHeader>}
 */
class EmptyStateHeader extends EmptyStateSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {number} @nodts*/
  this.f_headingLevel__org_patternfly_component_emptystate_EmptyStateHeader_ = 0;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_emptystate_EmptyStateHeader_;
  /**@type {HTMLElement} @nodts*/
  this.f_titleElement__org_patternfly_component_emptystate_EmptyStateHeader_;
 }
 /** @nodts @return {EmptyStateHeader} */
 static m_emptyStateHeader__org_patternfly_component_emptystate_EmptyStateHeader() {
  EmptyStateHeader.$clinit();
  return EmptyStateHeader.$create__int(1);
 }
 /** @nodts @return {EmptyStateHeader} */
 static m_emptyStateHeader__int__org_patternfly_component_emptystate_EmptyStateHeader(/** number */ headingLevel) {
  EmptyStateHeader.$clinit();
  return EmptyStateHeader.$create__int(headingLevel);
 }
 /** @nodts @return {!EmptyStateHeader} */
 static $create__int(/** number */ headingLevel) {
  EmptyStateHeader.$clinit();
  let $instance = new EmptyStateHeader();
  $instance.$ctor__org_patternfly_component_emptystate_EmptyStateHeader__int__void(headingLevel);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_emptystate_EmptyStateHeader__int__void(/** number */ headingLevel) {
  this.$ctor__org_patternfly_component_emptystate_EmptyStateSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(EmptyStateHeader.f_SUB_COMPONENT_NAME__org_patternfly_component_emptystate_EmptyStateHeader, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_emptyState__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_header__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  if (Validation.m_verifyRange__java_lang_String__elemental2_dom_Element__java_lang_String__int__int__int__boolean(ComponentType.f_EmptyState__org_patternfly_component_ComponentType.f_componentName__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), 'headingLevel', headingLevel, 1, 6)) {
   this.f_headingLevel__org_patternfly_component_emptystate_EmptyStateHeader_ = headingLevel;
  } else {
   this.f_headingLevel__org_patternfly_component_emptystate_EmptyStateHeader_ = 1;
  }
 }
 /** @nodts @return {EmptyStateHeader} */
 m_spinner__org_patternfly_component_emptystate_EmptyStateHeader() {
  return this.m_spinner__java_lang_String__org_patternfly_component_emptystate_EmptyStateHeader('Loading');
 }
 /** @nodts @return {EmptyStateHeader} */
 m_spinner__java_lang_String__org_patternfly_component_emptystate_EmptyStateHeader(/** ?string */ label) {
  this.m_removeIcon__org_patternfly_component_emptystate_EmptyStateHeader();
  this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_emptystate_EmptyStateHeader().appendChild(Spinner.m_spinner__org_patternfly_style_Size__java_lang_String__org_patternfly_component_spinner_Spinner(Size.f_xl__org_patternfly_style_Size, label).m_element__org_jboss_elemento_svg_SVGElement());
  return this;
 }
 /** @nodts @return {EmptyStateHeader} */
 m_icon__elemental2_dom_Element__org_patternfly_component_emptystate_EmptyStateHeader(/** Element */ icon) {
  this.m_removeIcon__org_patternfly_component_emptystate_EmptyStateHeader();
  this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_emptystate_EmptyStateHeader().appendChild(icon);
  return this;
 }
 /** @nodts @return {EmptyStateHeader} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_style_Variable__org_patternfly_component_emptystate_EmptyStateHeader(/** PredefinedIcon */ icon, /** Variable */ color) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_style_Variable__org_patternfly_component_emptystate_EmptyStateHeader(icon.m_element__org_jboss_elemento_svg_SVGElement(), color);
 }
 /** @nodts @return {EmptyStateHeader} */
 m_icon__elemental2_dom_Element__org_patternfly_style_Variable__org_patternfly_component_emptystate_EmptyStateHeader(/** Element */ icon, /** Variable */ color) {
  this.m_icon__elemental2_dom_Element__org_patternfly_component_emptystate_EmptyStateHeader(icon);
  this.m_iconColor__java_lang_String__void_$p_org_patternfly_component_emptystate_EmptyStateHeader('var(' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(color.f_name__org_patternfly_style_Variable) + ')');
  return this;
 }
 /** @nodts @return {EmptyStateHeader} */
 m_icon__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_emptystate_EmptyStateHeader(/** PredefinedIcon */ icon, /** ?string */ color) {
  return this.m_icon__elemental2_dom_Element__java_lang_String__org_patternfly_component_emptystate_EmptyStateHeader(icon.m_element__org_jboss_elemento_svg_SVGElement(), color);
 }
 /** @nodts @return {EmptyStateHeader} */
 m_icon__elemental2_dom_Element__java_lang_String__org_patternfly_component_emptystate_EmptyStateHeader(/** Element */ icon, /** ?string */ color) {
  this.m_icon__elemental2_dom_Element__org_patternfly_component_emptystate_EmptyStateHeader(icon);
  this.m_iconColor__java_lang_String__void_$p_org_patternfly_component_emptystate_EmptyStateHeader(color);
  return this;
 }
 /** @nodts @return {EmptyStateHeader} */
 m_removeIcon__org_patternfly_component_emptystate_EmptyStateHeader() {
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_emptystate_EmptyStateHeader());
  this.f_iconContainer__org_patternfly_component_emptystate_EmptyStateHeader_ = null;
  return this;
 }
 /** @nodts @return {EmptyStateHeader} */
 m_text__java_lang_String__org_patternfly_component_emptystate_EmptyStateHeader(/** ?string */ text) {
  this.m_failSafeTitleElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_emptystate_EmptyStateHeader().textContent = text;
  return this;
 }
 /** @nodts @return {EmptyStateHeader} */
 m_that__org_patternfly_component_emptystate_EmptyStateHeader() {
  return this;
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_emptystate_EmptyStateHeader() {
  if ($Equality.$same(this.f_iconContainer__org_patternfly_component_emptystate_EmptyStateHeader_, null)) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), this.f_iconContainer__org_patternfly_component_emptystate_EmptyStateHeader_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_emptyState__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  }
  return this.f_iconContainer__org_patternfly_component_emptystate_EmptyStateHeader_;
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeTitleElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_emptystate_EmptyStateHeader() {
  if ($Equality.$same(this.f_titleElement__org_patternfly_component_emptystate_EmptyStateHeader_, null)) {
   this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_emptyState__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_title__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_titleElement__org_patternfly_component_emptystate_EmptyStateHeader_ = /**@type {HTMLHeadingElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int__org_jboss_elemento_HTMLContainerBuilder(this.f_headingLevel__org_patternfly_component_emptystate_EmptyStateHeader_).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_emptyState__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_title__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLHeadingElement_$Overlay))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  }
  return this.f_titleElement__org_patternfly_component_emptystate_EmptyStateHeader_;
 }
 /** @nodts */
 m_iconColor__java_lang_String__void_$p_org_patternfly_component_emptystate_EmptyStateHeader(/** ?string */ color) {
  Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_emptyState__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_icon__org_patternfly_style_Classes], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$init([Variables.f_Color__org_patternfly_style_Variables], j_l_String))).m_applyTo__elemental2_dom_HTMLElement__java_lang_String__void(this.f_iconContainer__org_patternfly_component_emptystate_EmptyStateHeader_, color);
 }
 //Bridge method.
 /** @final @override @nodts @return {EmptyStateHeader} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_emptystate_EmptyStateHeader();
 }
 //Bridge method.
 /** @final @override @nodts @return {EmptyStateHeader} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_emptystate_EmptyStateHeader(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {EmptyStateHeader} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {EmptyStateHeader}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_component_WithIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), EmptyStateHeader));
 }
 //Bridge method.
 /** @final @override @nodts @return {EmptyStateHeader} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_emptystate_EmptyStateHeader(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {EmptyStateHeader} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_emptystate_EmptyStateHeader();
 }
 //Default method forwarding stub.
 /** @nodts @return {EmptyStateHeader} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_emptystate_EmptyStateHeader(/** PredefinedIcon */ arg0) {
  return /**@type {EmptyStateHeader}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_component_WithIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), EmptyStateHeader));
 }
 /** @nodts */
 static $clinit() {
  EmptyStateHeader.$clinit = () =>{};
  EmptyStateHeader.$loadModules();
  EmptyStateSubComponent.$clinit();
  WithIcon.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EmptyStateHeader;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLHeadingElement_$Overlay = goog.module.get('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Spinner = goog.module.get('org.patternfly.component.spinner.Spinner$impl');
  Validation = goog.module.get('org.patternfly.core.Validation$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  Variable = goog.module.get('org.patternfly.style.Variable$impl');
  Variables = goog.module.get('org.patternfly.style.Variables$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
EmptyStateHeader.f_SUB_COMPONENT_NAME__org_patternfly_component_emptystate_EmptyStateHeader = 'esh';
WithText.$markImplementor(EmptyStateHeader);
WithIcon.$markImplementor(EmptyStateHeader);
$Util.$setClassMetadata(EmptyStateHeader, 'org.patternfly.component.emptystate.EmptyStateHeader');

exports = EmptyStateHeader;

//# sourceMappingURL=EmptyStateHeader.js.map

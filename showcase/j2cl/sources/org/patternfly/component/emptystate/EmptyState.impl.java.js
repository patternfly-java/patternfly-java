goog.module('org.patternfly.component.emptystate.EmptyState$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const ElementDelegate = goog.require('org.patternfly.core.ElementDelegate$impl');
const FullHeight = goog.require('org.patternfly.style.Modifiers.FullHeight$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let EmptyStateBody = goog.forwardDeclare('org.patternfly.component.emptystate.EmptyStateBody$impl');
let EmptyStateFooter = goog.forwardDeclare('org.patternfly.component.emptystate.EmptyStateFooter$impl');
let EmptyStateHeader = goog.forwardDeclare('org.patternfly.component.emptystate.EmptyStateHeader$impl');
let Validation = goog.forwardDeclare('org.patternfly.core.Validation$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, EmptyState>}
 * @implements {ElementDelegate<HTMLElement, EmptyState>}
 * @implements {FullHeight<HTMLElement, EmptyState>}
 */
class EmptyState extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_contentContainer__org_patternfly_component_emptystate_EmptyState_;
 }
 /** @nodts @return {EmptyState} */
 static m_emptyState__org_patternfly_component_emptystate_EmptyState() {
  EmptyState.$clinit();
  return EmptyState.$create__();
 }
 /** @nodts @return {!EmptyState} */
 static $create__() {
  EmptyState.$clinit();
  let $instance = new EmptyState();
  $instance.$ctor__org_patternfly_component_emptystate_EmptyState__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_emptystate_EmptyState__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_EmptyState__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_emptyState__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_contentContainer__org_patternfly_component_emptystate_EmptyState_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_emptyState__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
 }
 /** @override @nodts @return {HTMLElement} */
 m_delegate__elemental2_dom_HTMLElement() {
  return this.f_contentContainer__org_patternfly_component_emptystate_EmptyState_;
 }
 /** @nodts @return {EmptyState} */
 m_addHeader__org_patternfly_component_emptystate_EmptyStateHeader__org_patternfly_component_emptystate_EmptyState(/** EmptyStateHeader */ header) {
  return this.m_add__org_patternfly_component_emptystate_EmptyStateHeader__org_patternfly_component_emptystate_EmptyState(header);
 }
 /** @nodts @return {EmptyState} */
 m_add__org_patternfly_component_emptystate_EmptyStateHeader__org_patternfly_component_emptystate_EmptyState(/** EmptyStateHeader */ header) {
  this.f_contentContainer__org_patternfly_component_emptystate_EmptyState_.appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(header.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return this;
 }
 /** @nodts @return {EmptyState} */
 m_addBody__org_patternfly_component_emptystate_EmptyStateBody__org_patternfly_component_emptystate_EmptyState(/** EmptyStateBody */ body) {
  return this.m_add__org_patternfly_component_emptystate_EmptyStateBody__org_patternfly_component_emptystate_EmptyState(body);
 }
 /** @nodts @return {EmptyState} */
 m_add__org_patternfly_component_emptystate_EmptyStateBody__org_patternfly_component_emptystate_EmptyState(/** EmptyStateBody */ body) {
  this.f_contentContainer__org_patternfly_component_emptystate_EmptyState_.appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(body.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return this;
 }
 /** @nodts @return {EmptyState} */
 m_addFooter__org_patternfly_component_emptystate_EmptyStateFooter__org_patternfly_component_emptystate_EmptyState(/** EmptyStateFooter */ footer) {
  return this.m_add__org_patternfly_component_emptystate_EmptyStateFooter__org_patternfly_component_emptystate_EmptyState(footer);
 }
 /** @nodts @return {EmptyState} */
 m_add__org_patternfly_component_emptystate_EmptyStateFooter__org_patternfly_component_emptystate_EmptyState(/** EmptyStateFooter */ footer) {
  this.f_contentContainer__org_patternfly_component_emptystate_EmptyState_.appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(footer.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return this;
 }
 /** @nodts @return {EmptyState} */
 m_size__org_patternfly_style_Size__org_patternfly_component_emptystate_EmptyState(/** Size */ size) {
  if (Validation.m_verifyEnum__java_lang_String__elemental2_dom_Element__java_lang_String__java_lang_Enum__java_lang_Enum__arrayOf_java_lang_Enum__boolean(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'size', size, Size.f_xs__org_patternfly_style_Size, /**@type {!Array<Size>}*/ ($Arrays.$init([Size.f_sm__org_patternfly_style_Size, Size.f_lg__org_patternfly_style_Size, Size.f_xl__org_patternfly_style_Size], Size)))) {
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([size.m_modifier__java_lang_String()], j_l_String)));
  }
  return this;
 }
 /** @nodts @return {EmptyState} */
 m_that__org_patternfly_component_emptystate_EmptyState() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {EmptyState} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_emptystate_EmptyState();
 }
 //Bridge method.
 /** @final @override @nodts @return {EmptyState} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {EmptyState}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), EmptyState));
 }
 //Bridge method.
 /** @final @override @nodts @return {EmptyState} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** SafeHtml */ arg0) {
  return /**@type {EmptyState}*/ ($Casts.$to(ElementDelegate.m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), EmptyState));
 }
 //Bridge method.
 /** @final @override @nodts @return {EmptyState} */
 m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {EmptyState}*/ ($Casts.$to(ElementDelegate.m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), EmptyState));
 }
 //Bridge method.
 /** @final @override @nodts @return {EmptyState} */
 m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {EmptyState}*/ ($Casts.$to(ElementDelegate.m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), EmptyState));
 }
 //Bridge method.
 /** @final @override @nodts @return {EmptyState} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {EmptyState}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), EmptyState));
 }
 //Bridge method.
 /** @final @override @nodts @return {EmptyState} */
 m_fullHeight__org_jboss_elemento_TypedBuilder() {
  return /**@type {EmptyState}*/ ($Casts.$to(FullHeight.m_fullHeight__$default__org_patternfly_style_Modifiers_FullHeight__org_jboss_elemento_TypedBuilder(this), EmptyState));
 }
 //Bridge method.
 /** @final @override @nodts @return {EmptyState} */
 m_fullHeight__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {EmptyState}*/ ($Casts.$to(FullHeight.m_fullHeight__$default__org_patternfly_style_Modifiers_FullHeight__boolean__org_jboss_elemento_TypedBuilder(this, arg0), EmptyState));
 }
 //Default method forwarding stub.
 /** @nodts @return {EmptyState} */
 m_add__java_lang_String__org_patternfly_component_emptystate_EmptyState(/** ?string */ arg0) {
  return /**@type {EmptyState}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), EmptyState));
 }
 //Default method forwarding stub.
 /** @nodts @return {EmptyState} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_patternfly_component_emptystate_EmptyState(/** SafeHtml */ arg0) {
  return /**@type {EmptyState}*/ ($Casts.$to(ElementDelegate.m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), EmptyState));
 }
 //Default method forwarding stub.
 /** @nodts @return {EmptyState} */
 m_textContent__java_lang_String__org_patternfly_component_emptystate_EmptyState(/** ?string */ arg0) {
  return /**@type {EmptyState}*/ ($Casts.$to(ElementDelegate.m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), EmptyState));
 }
 //Default method forwarding stub.
 /** @nodts @return {EmptyState} */
 m_textNode__java_lang_String__org_patternfly_component_emptystate_EmptyState(/** ?string */ arg0) {
  return /**@type {EmptyState}*/ ($Casts.$to(ElementDelegate.m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), EmptyState));
 }
 //Default method forwarding stub.
 /** @nodts @return {EmptyState} */
 m_add__elemental2_dom_Node__org_patternfly_component_emptystate_EmptyState(/** Node */ arg0) {
  return /**@type {EmptyState}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), EmptyState));
 }
 //Default method forwarding stub.
 /** @nodts @return {EmptyState} */
 m_fullHeight__org_patternfly_component_emptystate_EmptyState() {
  return /**@type {EmptyState}*/ ($Casts.$to(FullHeight.m_fullHeight__$default__org_patternfly_style_Modifiers_FullHeight__org_jboss_elemento_TypedBuilder(this), EmptyState));
 }
 //Default method forwarding stub.
 /** @nodts @return {EmptyState} */
 m_fullHeight__boolean__org_patternfly_component_emptystate_EmptyState(/** boolean */ arg0) {
  return /**@type {EmptyState}*/ ($Casts.$to(FullHeight.m_fullHeight__$default__org_patternfly_style_Modifiers_FullHeight__boolean__org_jboss_elemento_TypedBuilder(this, arg0), EmptyState));
 }
 /** @nodts */
 static $clinit() {
  EmptyState.$clinit = () =>{};
  EmptyState.$loadModules();
  BaseComponent.$clinit();
  ElementDelegate.$clinit();
  FullHeight.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EmptyState;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Validation = goog.module.get('org.patternfly.core.Validation$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ElementDelegate.$markImplementor(EmptyState);
FullHeight.$markImplementor(EmptyState);
$Util.$setClassMetadata(EmptyState, 'org.patternfly.component.emptystate.EmptyState');

exports = EmptyState;

//# sourceMappingURL=EmptyState.js.map

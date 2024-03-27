goog.module('org.patternfly.component.drawer.DrawerPanelHead$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const DrawerSubComponent = goog.require('org.patternfly.component.drawer.DrawerSubComponent$impl');
const ElementDelegate = goog.require('org.patternfly.core.ElementDelegate$impl');
const NoPadding = goog.require('org.patternfly.style.Modifiers.NoPadding$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Drawer = goog.forwardDeclare('org.patternfly.component.drawer.Drawer$impl');
let DrawerCloseButton = goog.forwardDeclare('org.patternfly.component.drawer.DrawerCloseButton$impl');
let DrawerPanelBody = goog.forwardDeclare('org.patternfly.component.drawer.DrawerPanelBody$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DrawerSubComponent<HTMLDivElement, DrawerPanelHead>}
 * @implements {Attachable}
 * @implements {ElementDelegate<HTMLDivElement, DrawerPanelHead>}
 * @implements {NoPadding<HTMLDivElement, DrawerPanelHead>}
 */
class DrawerPanelHead extends DrawerSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_headContainer__org_patternfly_component_drawer_DrawerPanelHead_;
  /**@type {boolean} @nodts*/
  this.f_adjustTabIndex__org_patternfly_component_drawer_DrawerPanelHead_ = false;
 }
 /** @nodts @return {DrawerPanelHead} */
 static m_drawerPanelHead__org_patternfly_component_drawer_DrawerPanelHead() {
  DrawerPanelHead.$clinit();
  return DrawerPanelHead.$create__();
 }
 /** @nodts @return {!DrawerPanelHead} */
 static $create__() {
  DrawerPanelHead.$clinit();
  let $instance = new DrawerPanelHead();
  $instance.$ctor__org_patternfly_component_drawer_DrawerPanelHead__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_drawer_DrawerPanelHead__void() {
  this.$ctor__org_patternfly_component_drawer_DrawerSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(DrawerPanelHead.f_SUB_COMPONENT_NAME__org_patternfly_component_drawer_DrawerPanelHead, /**@type {HTMLDivElement}*/ ($Casts.$to(DrawerPanelBody.m_drawerPanelBody__org_patternfly_component_drawer_DrawerPanelBody().m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).appendChild(this.f_headContainer__org_patternfly_component_drawer_DrawerPanelHead_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_drawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_head__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (this.f_adjustTabIndex__org_patternfly_component_drawer_DrawerPanelHead_) {
   let drawer = /**@type {Drawer}*/ ($Casts.$to(this.m_lookupFlatComponent__org_patternfly_component_BaseComponentFlat(), Drawer));
   if ($Overlay.$isInstance(this.f_headContainer__org_patternfly_component_drawer_DrawerPanelHead_.firstElementChild)) {
    let firstElement = /**@type {HTMLElement}*/ (this.f_headContainer__org_patternfly_component_drawer_DrawerPanelHead_.firstElementChild);
    drawer.m_onToggle__org_patternfly_handler_ToggleHandler__org_patternfly_component_drawer_Drawer(ToggleHandler.$adapt((/** Event */ event, drw, /** boolean */ expanded) =>{
     let drw_1 = /**@type {Drawer}*/ ($Casts.$to(drw, Drawer));
     firstElement.tabIndex = expanded ? 0 : - 1 | 0;
    }));
   }
  }
 }
 /** @override @nodts @return {HTMLElement} */
 m_delegate__elemental2_dom_HTMLElement() {
  return this.f_headContainer__org_patternfly_component_drawer_DrawerPanelHead_;
 }
 /** @nodts @return {DrawerPanelHead} */
 m_addCloseButton__org_patternfly_component_drawer_DrawerCloseButton__org_patternfly_component_drawer_DrawerPanelHead(/** DrawerCloseButton */ closeButton) {
  return /**@type {DrawerPanelHead}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(closeButton), DrawerPanelHead));
 }
 /** @nodts @return {DrawerPanelHead} */
 m_noAutoTabIndex__org_patternfly_component_drawer_DrawerPanelHead() {
  this.f_adjustTabIndex__org_patternfly_component_drawer_DrawerPanelHead_ = false;
  return this;
 }
 /** @nodts @return {DrawerPanelHead} */
 m_that__org_patternfly_component_drawer_DrawerPanelHead() {
  return this;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {DrawerPanelHead} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_drawer_DrawerPanelHead();
 }
 //Bridge method.
 /** @final @override @nodts @return {DrawerPanelHead} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {DrawerPanelHead}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), DrawerPanelHead));
 }
 //Bridge method.
 /** @final @override @nodts @return {DrawerPanelHead} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** SafeHtml */ arg0) {
  return /**@type {DrawerPanelHead}*/ ($Casts.$to(ElementDelegate.m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), DrawerPanelHead));
 }
 //Bridge method.
 /** @final @override @nodts @return {DrawerPanelHead} */
 m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {DrawerPanelHead}*/ ($Casts.$to(ElementDelegate.m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), DrawerPanelHead));
 }
 //Bridge method.
 /** @final @override @nodts @return {DrawerPanelHead} */
 m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {DrawerPanelHead}*/ ($Casts.$to(ElementDelegate.m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), DrawerPanelHead));
 }
 //Bridge method.
 /** @final @override @nodts @return {DrawerPanelHead} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {DrawerPanelHead}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), DrawerPanelHead));
 }
 //Bridge method.
 /** @final @override @nodts @return {DrawerPanelHead} */
 m_noPadding__org_jboss_elemento_TypedBuilder() {
  return /**@type {DrawerPanelHead}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__org_jboss_elemento_TypedBuilder(this), DrawerPanelHead));
 }
 //Bridge method.
 /** @final @override @nodts @return {DrawerPanelHead} */
 m_noPadding__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {DrawerPanelHead}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__boolean__org_jboss_elemento_TypedBuilder(this, arg0), DrawerPanelHead));
 }
 //Default method forwarding stub.
 /** @nodts @return {DrawerPanelHead} */
 m_add__java_lang_String__org_patternfly_component_drawer_DrawerPanelHead(/** ?string */ arg0) {
  return /**@type {DrawerPanelHead}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), DrawerPanelHead));
 }
 //Default method forwarding stub.
 /** @nodts @return {DrawerPanelHead} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_patternfly_component_drawer_DrawerPanelHead(/** SafeHtml */ arg0) {
  return /**@type {DrawerPanelHead}*/ ($Casts.$to(ElementDelegate.m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), DrawerPanelHead));
 }
 //Default method forwarding stub.
 /** @nodts @return {DrawerPanelHead} */
 m_textContent__java_lang_String__org_patternfly_component_drawer_DrawerPanelHead(/** ?string */ arg0) {
  return /**@type {DrawerPanelHead}*/ ($Casts.$to(ElementDelegate.m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), DrawerPanelHead));
 }
 //Default method forwarding stub.
 /** @nodts @return {DrawerPanelHead} */
 m_textNode__java_lang_String__org_patternfly_component_drawer_DrawerPanelHead(/** ?string */ arg0) {
  return /**@type {DrawerPanelHead}*/ ($Casts.$to(ElementDelegate.m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), DrawerPanelHead));
 }
 //Default method forwarding stub.
 /** @nodts @return {DrawerPanelHead} */
 m_add__elemental2_dom_Node__org_patternfly_component_drawer_DrawerPanelHead(/** Node */ arg0) {
  return /**@type {DrawerPanelHead}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), DrawerPanelHead));
 }
 //Default method forwarding stub.
 /** @nodts @return {DrawerPanelHead} */
 m_noPadding__org_patternfly_component_drawer_DrawerPanelHead() {
  return /**@type {DrawerPanelHead}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__org_jboss_elemento_TypedBuilder(this), DrawerPanelHead));
 }
 //Default method forwarding stub.
 /** @nodts @return {DrawerPanelHead} */
 m_noPadding__boolean__org_patternfly_component_drawer_DrawerPanelHead(/** boolean */ arg0) {
  return /**@type {DrawerPanelHead}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__boolean__org_jboss_elemento_TypedBuilder(this, arg0), DrawerPanelHead));
 }
 /** @nodts */
 static $clinit() {
  DrawerPanelHead.$clinit = () =>{};
  DrawerPanelHead.$loadModules();
  DrawerSubComponent.$clinit();
  Attachable.$clinit();
  ElementDelegate.$clinit();
  NoPadding.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DrawerPanelHead;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Drawer = goog.module.get('org.patternfly.component.drawer.Drawer$impl');
  DrawerPanelBody = goog.module.get('org.patternfly.component.drawer.DrawerPanelBody$impl');
  ToggleHandler = goog.module.get('org.patternfly.handler.ToggleHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
DrawerPanelHead.f_SUB_COMPONENT_NAME__org_patternfly_component_drawer_DrawerPanelHead = 'dph';
Attachable.$markImplementor(DrawerPanelHead);
ElementDelegate.$markImplementor(DrawerPanelHead);
NoPadding.$markImplementor(DrawerPanelHead);
$Util.$setClassMetadata(DrawerPanelHead, 'org.patternfly.component.drawer.DrawerPanelHead');

exports = DrawerPanelHead;

//# sourceMappingURL=DrawerPanelHead.js.map

goog.module('org.patternfly.component.panel.PanelMain$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PanelSubComponent = goog.require('org.patternfly.component.panel.PanelSubComponent$impl');
const ElementDelegate = goog.require('org.patternfly.core.ElementDelegate$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PanelSubComponent<HTMLElement, PanelMain>}
 * @implements {ElementDelegate<HTMLElement, PanelMain>}
 */
class PanelMain extends PanelSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLDivElement} @nodts*/
  this.f_bodyElement__org_patternfly_component_panel_PanelMain_;
 }
 /** @nodts @return {PanelMain} */
 static m_panelMain__org_patternfly_component_panel_PanelMain() {
  PanelMain.$clinit();
  return PanelMain.$create__();
 }
 /** @nodts @return {!PanelMain} */
 static $create__() {
  PanelMain.$clinit();
  let $instance = new PanelMain();
  $instance.$ctor__org_patternfly_component_panel_PanelMain__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_panel_PanelMain__void() {
  this.$ctor__org_patternfly_component_panel_PanelSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(PanelMain.f_SUB_COMPONENT_NAME__org_patternfly_component_panel_PanelMain, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_panel__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_main__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_bodyElement__org_patternfly_component_panel_PanelMain_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_panel__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_main__org_patternfly_style_Classes, Classes.f_body__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @override @nodts @return {HTMLElement} */
 m_delegate__elemental2_dom_HTMLElement() {
  return this.f_bodyElement__org_patternfly_component_panel_PanelMain_;
 }
 /** @nodts @return {PanelMain} */
 m_that__org_patternfly_component_panel_PanelMain() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PanelMain} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_panel_PanelMain();
 }
 //Bridge method.
 /** @final @override @nodts @return {PanelMain} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {PanelMain}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PanelMain));
 }
 //Bridge method.
 /** @final @override @nodts @return {PanelMain} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** SafeHtml */ arg0) {
  return /**@type {PanelMain}*/ ($Casts.$to(ElementDelegate.m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), PanelMain));
 }
 //Bridge method.
 /** @final @override @nodts @return {PanelMain} */
 m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {PanelMain}*/ ($Casts.$to(ElementDelegate.m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PanelMain));
 }
 //Bridge method.
 /** @final @override @nodts @return {PanelMain} */
 m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {PanelMain}*/ ($Casts.$to(ElementDelegate.m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PanelMain));
 }
 //Bridge method.
 /** @final @override @nodts @return {PanelMain} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {PanelMain}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), PanelMain));
 }
 //Default method forwarding stub.
 /** @nodts @return {PanelMain} */
 m_add__java_lang_String__org_patternfly_component_panel_PanelMain(/** ?string */ arg0) {
  return /**@type {PanelMain}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PanelMain));
 }
 //Default method forwarding stub.
 /** @nodts @return {PanelMain} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_patternfly_component_panel_PanelMain(/** SafeHtml */ arg0) {
  return /**@type {PanelMain}*/ ($Casts.$to(ElementDelegate.m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), PanelMain));
 }
 //Default method forwarding stub.
 /** @nodts @return {PanelMain} */
 m_textContent__java_lang_String__org_patternfly_component_panel_PanelMain(/** ?string */ arg0) {
  return /**@type {PanelMain}*/ ($Casts.$to(ElementDelegate.m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PanelMain));
 }
 //Default method forwarding stub.
 /** @nodts @return {PanelMain} */
 m_textNode__java_lang_String__org_patternfly_component_panel_PanelMain(/** ?string */ arg0) {
  return /**@type {PanelMain}*/ ($Casts.$to(ElementDelegate.m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), PanelMain));
 }
 //Default method forwarding stub.
 /** @nodts @return {PanelMain} */
 m_add__elemental2_dom_Node__org_patternfly_component_panel_PanelMain(/** Node */ arg0) {
  return /**@type {PanelMain}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), PanelMain));
 }
 /** @nodts */
 static $clinit() {
  PanelMain.$clinit = () =>{};
  PanelMain.$loadModules();
  PanelSubComponent.$clinit();
  ElementDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PanelMain;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
PanelMain.f_SUB_COMPONENT_NAME__org_patternfly_component_panel_PanelMain = 'pm';
ElementDelegate.$markImplementor(PanelMain);
$Util.$setClassMetadata(PanelMain, 'org.patternfly.component.panel.PanelMain');

exports = PanelMain;

//# sourceMappingURL=PanelMain.js.map

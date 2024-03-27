goog.module('org.patternfly.component.drawer.DrawerPanelBody$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DrawerSubComponent = goog.require('org.patternfly.component.drawer.DrawerSubComponent$impl');
const NoPadding = goog.require('org.patternfly.style.Modifiers.NoPadding$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let DrawerPanelHead = goog.forwardDeclare('org.patternfly.component.drawer.DrawerPanelHead$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DrawerSubComponent<HTMLDivElement, DrawerPanelBody>}
 * @implements {NoPadding<HTMLDivElement, DrawerPanelBody>}
 */
class DrawerPanelBody extends DrawerSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {DrawerPanelBody} */
 static m_drawerPanelBody__org_patternfly_component_drawer_DrawerPanelBody() {
  DrawerPanelBody.$clinit();
  return DrawerPanelBody.$create__();
 }
 /** @nodts @return {!DrawerPanelBody} */
 static $create__() {
  DrawerPanelBody.$clinit();
  let $instance = new DrawerPanelBody();
  $instance.$ctor__org_patternfly_component_drawer_DrawerPanelBody__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_drawer_DrawerPanelBody__void() {
  this.$ctor__org_patternfly_component_drawer_DrawerSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(DrawerPanelBody.f_SUB_COMPONENT_NAME__org_patternfly_component_drawer_DrawerPanelBody, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_drawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_body__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {DrawerPanelBody} */
 m_addHead__org_patternfly_component_drawer_DrawerPanelHead__org_patternfly_component_drawer_DrawerPanelBody(/** DrawerPanelHead */ head) {
  return /**@type {DrawerPanelBody}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(head), DrawerPanelBody));
 }
 /** @nodts @return {DrawerPanelBody} */
 m_that__org_patternfly_component_drawer_DrawerPanelBody() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {DrawerPanelBody} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_drawer_DrawerPanelBody();
 }
 //Bridge method.
 /** @final @override @nodts @return {DrawerPanelBody} */
 m_noPadding__org_jboss_elemento_TypedBuilder() {
  return /**@type {DrawerPanelBody}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__org_jboss_elemento_TypedBuilder(this), DrawerPanelBody));
 }
 //Bridge method.
 /** @final @override @nodts @return {DrawerPanelBody} */
 m_noPadding__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {DrawerPanelBody}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__boolean__org_jboss_elemento_TypedBuilder(this, arg0), DrawerPanelBody));
 }
 //Default method forwarding stub.
 /** @nodts @return {DrawerPanelBody} */
 m_noPadding__org_patternfly_component_drawer_DrawerPanelBody() {
  return /**@type {DrawerPanelBody}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__org_jboss_elemento_TypedBuilder(this), DrawerPanelBody));
 }
 //Default method forwarding stub.
 /** @nodts @return {DrawerPanelBody} */
 m_noPadding__boolean__org_patternfly_component_drawer_DrawerPanelBody(/** boolean */ arg0) {
  return /**@type {DrawerPanelBody}*/ ($Casts.$to(NoPadding.m_noPadding__$default__org_patternfly_style_Modifiers_NoPadding__boolean__org_jboss_elemento_TypedBuilder(this, arg0), DrawerPanelBody));
 }
 /** @nodts */
 static $clinit() {
  DrawerPanelBody.$clinit = () =>{};
  DrawerPanelBody.$loadModules();
  DrawerSubComponent.$clinit();
  NoPadding.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DrawerPanelBody;
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
DrawerPanelBody.f_SUB_COMPONENT_NAME__org_patternfly_component_drawer_DrawerPanelBody = 'dpb';
NoPadding.$markImplementor(DrawerPanelBody);
$Util.$setClassMetadata(DrawerPanelBody, 'org.patternfly.component.drawer.DrawerPanelBody');

exports = DrawerPanelBody;

//# sourceMappingURL=DrawerPanelBody.js.map

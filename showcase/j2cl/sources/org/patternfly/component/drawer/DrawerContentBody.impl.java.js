goog.module('org.patternfly.component.drawer.DrawerContentBody$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DrawerSubComponent = goog.require('org.patternfly.component.drawer.DrawerSubComponent$impl');
const Padding = goog.require('org.patternfly.style.Modifiers.Padding$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DrawerSubComponent<HTMLDivElement, DrawerContentBody>}
 * @implements {Padding<HTMLDivElement, DrawerContentBody>}
 */
class DrawerContentBody extends DrawerSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {DrawerContentBody} */
 static m_drawerContentBody__org_patternfly_component_drawer_DrawerContentBody() {
  DrawerContentBody.$clinit();
  return DrawerContentBody.$create__();
 }
 /** @nodts @return {!DrawerContentBody} */
 static $create__() {
  DrawerContentBody.$clinit();
  let $instance = new DrawerContentBody();
  $instance.$ctor__org_patternfly_component_drawer_DrawerContentBody__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_drawer_DrawerContentBody__void() {
  this.$ctor__org_patternfly_component_drawer_DrawerSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(DrawerContentBody.f_SUB_COMPONENT_NAME__org_patternfly_component_drawer_DrawerContentBody, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_drawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_body__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {DrawerContentBody} */
 m_that__org_patternfly_component_drawer_DrawerContentBody() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {DrawerContentBody} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_drawer_DrawerContentBody();
 }
 //Bridge method.
 /** @final @override @nodts @return {DrawerContentBody} */
 m_padding__org_jboss_elemento_TypedBuilder() {
  return /**@type {DrawerContentBody}*/ ($Casts.$to(Padding.m_padding__$default__org_patternfly_style_Modifiers_Padding__org_jboss_elemento_TypedBuilder(this), DrawerContentBody));
 }
 //Bridge method.
 /** @final @override @nodts @return {DrawerContentBody} */
 m_padding__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {DrawerContentBody}*/ ($Casts.$to(Padding.m_padding__$default__org_patternfly_style_Modifiers_Padding__boolean__org_jboss_elemento_TypedBuilder(this, arg0), DrawerContentBody));
 }
 //Default method forwarding stub.
 /** @nodts @return {DrawerContentBody} */
 m_padding__org_patternfly_component_drawer_DrawerContentBody() {
  return /**@type {DrawerContentBody}*/ ($Casts.$to(Padding.m_padding__$default__org_patternfly_style_Modifiers_Padding__org_jboss_elemento_TypedBuilder(this), DrawerContentBody));
 }
 //Default method forwarding stub.
 /** @nodts @return {DrawerContentBody} */
 m_padding__boolean__org_patternfly_component_drawer_DrawerContentBody(/** boolean */ arg0) {
  return /**@type {DrawerContentBody}*/ ($Casts.$to(Padding.m_padding__$default__org_patternfly_style_Modifiers_Padding__boolean__org_jboss_elemento_TypedBuilder(this, arg0), DrawerContentBody));
 }
 /** @nodts */
 static $clinit() {
  DrawerContentBody.$clinit = () =>{};
  DrawerContentBody.$loadModules();
  DrawerSubComponent.$clinit();
  Padding.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DrawerContentBody;
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
DrawerContentBody.f_SUB_COMPONENT_NAME__org_patternfly_component_drawer_DrawerContentBody = 'dcb';
Padding.$markImplementor(DrawerContentBody);
$Util.$setClassMetadata(DrawerContentBody, 'org.patternfly.component.drawer.DrawerContentBody');

exports = DrawerContentBody;

//# sourceMappingURL=DrawerContentBody.js.map

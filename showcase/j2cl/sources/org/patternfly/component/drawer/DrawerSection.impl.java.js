goog.module('org.patternfly.component.drawer.DrawerSection$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DrawerSubComponent = goog.require('org.patternfly.component.drawer.DrawerSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let DrawerColor = goog.forwardDeclare('org.patternfly.component.drawer.DrawerColor$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DrawerSubComponent<HTMLDivElement, DrawerSection>}
 */
class DrawerSection extends DrawerSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {DrawerSection} */
 static m_drawerSection__org_patternfly_component_drawer_DrawerSection() {
  DrawerSection.$clinit();
  return DrawerSection.$create__();
 }
 /** @nodts @return {!DrawerSection} */
 static $create__() {
  DrawerSection.$clinit();
  let $instance = new DrawerSection();
  $instance.$ctor__org_patternfly_component_drawer_DrawerSection__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_drawer_DrawerSection__void() {
  this.$ctor__org_patternfly_component_drawer_DrawerSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(DrawerSection.f_SUB_COMPONENT_NAME__org_patternfly_component_drawer_DrawerSection, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_drawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_section__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {DrawerSection} */
 m_color__org_patternfly_component_drawer_DrawerColor__org_patternfly_component_drawer_DrawerSection(/** DrawerColor */ color) {
  return /**@type {DrawerSection}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([color.f_modifier__org_patternfly_component_drawer_DrawerColor], j_l_String))), DrawerSection));
 }
 /** @nodts @return {DrawerSection} */
 m_that__org_patternfly_component_drawer_DrawerSection() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {DrawerSection} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_drawer_DrawerSection();
 }
 /** @nodts */
 static $clinit() {
  DrawerSection.$clinit = () =>{};
  DrawerSection.$loadModules();
  DrawerSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DrawerSection;
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
DrawerSection.f_SUB_COMPONENT_NAME__org_patternfly_component_drawer_DrawerSection = 'ds';
$Util.$setClassMetadata(DrawerSection, 'org.patternfly.component.drawer.DrawerSection');

exports = DrawerSection;

//# sourceMappingURL=DrawerSection.js.map

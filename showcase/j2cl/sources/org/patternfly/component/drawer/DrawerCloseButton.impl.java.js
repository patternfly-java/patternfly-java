goog.module('org.patternfly.component.drawer.DrawerCloseButton$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DrawerSubComponent = goog.require('org.patternfly.component.drawer.DrawerSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Drawer = goog.forwardDeclare('org.patternfly.component.drawer.Drawer$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DrawerSubComponent<HTMLDivElement, DrawerCloseButton>}
 */
class DrawerCloseButton extends DrawerSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {DrawerCloseButton} */
 static m_drawerCloseButton__org_patternfly_component_drawer_DrawerCloseButton() {
  DrawerCloseButton.$clinit();
  return DrawerCloseButton.$create__();
 }
 /** @nodts @return {!DrawerCloseButton} */
 static $create__() {
  DrawerCloseButton.$clinit();
  let $instance = new DrawerCloseButton();
  $instance.$ctor__org_patternfly_component_drawer_DrawerCloseButton__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_drawer_DrawerCloseButton__void() {
  this.$ctor__org_patternfly_component_drawer_DrawerSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(DrawerCloseButton.f_SUB_COMPONENT_NAME__org_patternfly_component_drawer_DrawerCloseButton, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_drawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_actions__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_drawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_close__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_plain__org_jboss_elemento_TypedBuilder(), Button)).m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_times__org_patternfly_icon_PredefinedIcon()), Button)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Close drawer panel'), Button)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   this.m_close__void_$p_org_patternfly_component_drawer_DrawerCloseButton();
  }), Button))), HTMLContainerBuilder)));
 }
 /** @nodts @return {DrawerCloseButton} */
 m_that__org_patternfly_component_drawer_DrawerCloseButton() {
  return this;
 }
 /** @nodts */
 m_close__void_$p_org_patternfly_component_drawer_DrawerCloseButton() {
  let drawer = /**@type {Drawer}*/ ($Casts.$to(this.m_lookupFlatComponent__org_patternfly_component_BaseComponentFlat(), Drawer));
  drawer.m_collapse__void();
 }
 //Bridge method.
 /** @final @override @nodts @return {DrawerCloseButton} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_drawer_DrawerCloseButton();
 }
 /** @nodts */
 static $clinit() {
  DrawerCloseButton.$clinit = () =>{};
  DrawerCloseButton.$loadModules();
  DrawerSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DrawerCloseButton;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Drawer = goog.module.get('org.patternfly.component.drawer.Drawer$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
DrawerCloseButton.f_SUB_COMPONENT_NAME__org_patternfly_component_drawer_DrawerCloseButton = 'dcbtn';
$Util.$setClassMetadata(DrawerCloseButton, 'org.patternfly.component.drawer.DrawerCloseButton');

exports = DrawerCloseButton;

//# sourceMappingURL=DrawerCloseButton.js.map

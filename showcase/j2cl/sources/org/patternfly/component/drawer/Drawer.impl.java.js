goog.module('org.patternfly.component.drawer.Drawer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponentFlat = goog.require('org.patternfly.component.BaseComponentFlat$impl');
const Expandable = goog.require('org.patternfly.component.Expandable$impl');
const Inline = goog.require('org.patternfly.style.Modifiers.Inline$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let DrawerContent = goog.forwardDeclare('org.patternfly.component.drawer.DrawerContent$impl');
let DrawerPanel = goog.forwardDeclare('org.patternfly.component.drawer.DrawerPanel$impl');
let DrawerSection = goog.forwardDeclare('org.patternfly.component.drawer.DrawerSection$impl');
let Position = goog.forwardDeclare('org.patternfly.component.drawer.Position$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.style.Modifiers$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponentFlat<HTMLElement, Drawer>}
 * @implements {Inline<HTMLElement, Drawer>}
 * @implements {Expandable<HTMLElement, Drawer>}
 */
class Drawer extends BaseComponentFlat {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_mainContainer__org_patternfly_component_drawer_Drawer_;
  /**@type {DrawerPanel} @nodts*/
  this.f_panel__org_patternfly_component_drawer_Drawer_;
  /**@type {ToggleHandler<Drawer>} @nodts*/
  this.f_toggleHandler__org_patternfly_component_drawer_Drawer_;
  /**@type {boolean} @nodts*/
  this.f_inline__org_patternfly_component_drawer_Drawer = false;
  /**@type {Position} @nodts*/
  this.f_position__org_patternfly_component_drawer_Drawer;
  /**@type {DrawerContent} @nodts*/
  this.f_content__org_patternfly_component_drawer_Drawer;
 }
 /** @nodts @return {Drawer} */
 static m_drawer__org_patternfly_component_drawer_Drawer() {
  Drawer.$clinit();
  return Drawer.$create__();
 }
 /** @nodts @return {!Drawer} */
 static $create__() {
  Drawer.$clinit();
  let $instance = new Drawer();
  $instance.$ctor__org_patternfly_component_drawer_Drawer__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_drawer_Drawer__void() {
  this.$ctor__org_patternfly_component_BaseComponentFlat__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Drawer__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_drawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_position__org_patternfly_component_drawer_Drawer = Position.f_end__org_patternfly_component_drawer_Position;
  this.m_storeFlatComponent__void();
 }
 /** @nodts @return {Drawer} */
 m_addSection__org_patternfly_component_drawer_DrawerSection__org_patternfly_component_drawer_Drawer(/** DrawerSection */ section) {
  return this.m_add__org_patternfly_component_drawer_DrawerSection__org_patternfly_component_drawer_Drawer(section);
 }
 /** @nodts @return {Drawer} */
 m_add__org_patternfly_component_drawer_DrawerSection__org_patternfly_component_drawer_Drawer(/** DrawerSection */ section) {
  this.m_element__elemental2_dom_HTMLElement().appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(section.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return this;
 }
 /** @nodts @return {Drawer} */
 m_addContent__org_patternfly_component_drawer_DrawerContent__org_patternfly_component_drawer_Drawer(/** DrawerContent */ content) {
  return this.m_add__org_patternfly_component_drawer_DrawerContent__org_patternfly_component_drawer_Drawer(content);
 }
 /** @nodts @return {Drawer} */
 m_add__org_patternfly_component_drawer_DrawerContent__org_patternfly_component_drawer_Drawer(/** DrawerContent */ content) {
  this.f_content__org_patternfly_component_drawer_Drawer = content;
  this.m_failSafeMainContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_drawer_Drawer().appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(content.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return this;
 }
 /** @nodts @return {Drawer} */
 m_addPanel__org_patternfly_component_drawer_DrawerPanel__org_patternfly_component_drawer_Drawer(/** DrawerPanel */ panel) {
  return this.m_add__org_patternfly_component_drawer_DrawerPanel__org_patternfly_component_drawer_Drawer(panel);
 }
 /** @nodts @return {Drawer} */
 m_add__org_patternfly_component_drawer_DrawerPanel__org_patternfly_component_drawer_Drawer(/** DrawerPanel */ panel) {
  this.f_panel__org_patternfly_component_drawer_Drawer_ = panel;
  this.m_failSafeMainContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_drawer_Drawer().appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(panel.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return this;
 }
 /** @nodts @return {Drawer} */
 m_static___org_patternfly_component_drawer_Drawer() {
  return this.m_static___boolean__org_patternfly_component_drawer_Drawer(true);
 }
 /** @nodts @return {Drawer} */
 m_static___boolean__org_patternfly_component_drawer_Drawer(/** boolean */ static_) {
  return /**@type {Drawer}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this.m_that__org_patternfly_component_drawer_Drawer(), this.m_element__elemental2_dom_HTMLElement(), Classes.f_static___org_patternfly_style_Classes, static_), Drawer));
 }
 /** @nodts @return {Drawer} */
 m_position__org_patternfly_component_drawer_Position__org_patternfly_component_drawer_Drawer(/** Position */ position) {
  this.f_position__org_patternfly_component_drawer_Drawer = position;
  return /**@type {Drawer}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([position.m_modifier__java_lang_String()], j_l_String))), Drawer));
 }
 /** @nodts @return {Drawer} */
 m_inline__boolean__org_patternfly_component_drawer_Drawer(/** boolean */ inline) {
  this.f_inline__org_patternfly_component_drawer_Drawer = inline;
  return /**@type {Drawer}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__boolean__org_jboss_elemento_TypedBuilder(this, inline), Drawer));
 }
 /** @nodts @return {Drawer} */
 m_that__org_patternfly_component_drawer_Drawer() {
  return this;
 }
 /** @nodts @return {Drawer} */
 m_onToggle__org_patternfly_handler_ToggleHandler__org_patternfly_component_drawer_Drawer(/** ToggleHandler<Drawer> */ toggleHandler) {
  this.f_toggleHandler__org_patternfly_component_drawer_Drawer_ = toggleHandler;
  return this;
 }
 /** @override @nodts */
 m_collapse__boolean__void(/** boolean */ fireEvent) {
  this.m_element__elemental2_dom_HTMLElement().classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes));
  if (!$Equality.$same(this.f_panel__org_patternfly_component_drawer_Drawer_, null)) {
   /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_panel__org_patternfly_component_drawer_Drawer_.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).hidden = true;
  }
  if (fireEvent && !$Equality.$same(this.f_toggleHandler__org_patternfly_component_drawer_Drawer_, null)) {
   this.f_toggleHandler__org_patternfly_component_drawer_Drawer_.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, false);
  }
 }
 /** @override @nodts */
 m_expand__boolean__void(/** boolean */ fireEvent) {
  this.m_element__elemental2_dom_HTMLElement().classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes));
  if (!$Equality.$same(this.f_panel__org_patternfly_component_drawer_Drawer_, null)) {
   /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_panel__org_patternfly_component_drawer_Drawer_.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).hidden = false;
  }
  if (fireEvent && !$Equality.$same(this.f_toggleHandler__org_patternfly_component_drawer_Drawer_, null)) {
   this.f_toggleHandler__org_patternfly_component_drawer_Drawer_.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, true);
  }
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeMainContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_drawer_Drawer() {
  if ($Equality.$same(this.f_mainContainer__org_patternfly_component_drawer_Drawer_, null)) {
   this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_mainContainer__org_patternfly_component_drawer_Drawer_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_drawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_main__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  }
  return this.f_mainContainer__org_patternfly_component_drawer_Drawer_;
 }
 //Bridge method.
 /** @final @override @nodts @return {Drawer} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_drawer_Drawer();
 }
 //Bridge method.
 /** @final @override @nodts @return {Drawer} */
 m_inline__org_jboss_elemento_TypedBuilder() {
  return /**@type {Drawer}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__org_jboss_elemento_TypedBuilder(this), Drawer));
 }
 //Bridge method.
 /** @final @override @nodts @return {Drawer} */
 m_inline__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_inline__boolean__org_patternfly_component_drawer_Drawer(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_collapse__void() {
  Expandable.m_collapse__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_expand__void() {
  Expandable.m_expand__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_expanded__boolean() {
  return Expandable.m_expanded__$default__org_patternfly_component_Expandable__boolean(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_toggle__void() {
  Expandable.m_toggle__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_toggle__boolean__void(/** boolean */ arg0) {
  Expandable.m_toggle__$default__org_patternfly_component_Expandable__boolean__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {Drawer} */
 m_inline__org_patternfly_component_drawer_Drawer() {
  return /**@type {Drawer}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__org_jboss_elemento_TypedBuilder(this), Drawer));
 }
 /** @nodts */
 static $clinit() {
  Drawer.$clinit = () =>{};
  Drawer.$loadModules();
  BaseComponentFlat.$clinit();
  Inline.$clinit();
  Expandable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Drawer;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Position = goog.module.get('org.patternfly.component.drawer.Position$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Inline.$markImplementor(Drawer);
Expandable.$markImplementor(Drawer);
$Util.$setClassMetadata(Drawer, 'org.patternfly.component.drawer.Drawer');

exports = Drawer;

//# sourceMappingURL=Drawer.js.map

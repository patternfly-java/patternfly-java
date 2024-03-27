goog.module('org.patternfly.component.tabs.TabsToggle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TabSubComponent = goog.require('org.patternfly.component.tabs.TabSubComponent$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Tabs = goog.forwardDeclare('org.patternfly.component.tabs.Tabs$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {TabSubComponent<HTMLElement, TabsToggle>}
 * @implements {Disabled<HTMLElement, TabsToggle>}
 */
class TabsToggle extends TabSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Button} @nodts*/
  this.f_button__org_patternfly_component_tabs_TabsToggle_;
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_tabs_TabsToggle_;
 }
 /** @nodts @return {TabsToggle} */
 static m_tabsToggle__org_patternfly_component_tabs_TabsToggle() {
  TabsToggle.$clinit();
  return TabsToggle.$create__();
 }
 /** @nodts @return {!TabsToggle} */
 static $create__() {
  TabsToggle.$clinit();
  let $instance = new TabsToggle();
  $instance.$ctor__org_patternfly_component_tabs_TabsToggle__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_tabs_TabsToggle__void() {
  this.$ctor__org_patternfly_component_tabs_TabSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(TabsToggle.f_SUB_COMPONENT_NAME__org_patternfly_component_tabs_TabsToggle, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  let toggleButtonId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Tabs__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['toggle', 'button'], j_l_String)));
  let toggleTextId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Tabs__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['toggle', 'text'], j_l_String)));
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_style_Classes, Classes.f_button__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_button__org_patternfly_component_tabs_TabsToggle_ = /**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_plain__org_jboss_elemento_TypedBuilder(), Button)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(toggleButtonId), Button)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, false), Button)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, j_l_String.m_valueOf__java_lang_Object__java_lang_String(toggleButtonId) + ' ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(toggleTextId)), Button)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   this.m_toggle__void_$p_org_patternfly_component_tabs_TabsToggle();
  }), Button)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(fas.m_angleRight__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder))), Button)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_tabs_TabsToggle_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(toggleTextId), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()), Button))), HTMLContainerBuilder)));
 }
 /** @nodts @return {TabsToggle} */
 m_that__org_patternfly_component_tabs_TabsToggle() {
  return this;
 }
 /** @nodts @return {boolean} */
 m_noText__boolean_$pp_org_patternfly_component_tabs() {
  return $Equality.$same(this.f_textElement__org_patternfly_component_tabs_TabsToggle_.textContent, null) || j_l_String.m_isEmpty__java_lang_String__boolean(this.f_textElement__org_patternfly_component_tabs_TabsToggle_.textContent);
 }
 /** @nodts */
 m_text__java_lang_String__void_$pp_org_patternfly_component_tabs(/** ?string */ text) {
  this.f_textElement__org_patternfly_component_tabs_TabsToggle_.textContent = text;
 }
 /** @nodts */
 m_ariaLabel__java_lang_String__void_$pp_org_patternfly_component_tabs(/** ?string */ label) {
  this.f_button__org_patternfly_component_tabs_TabsToggle_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
 }
 /** @nodts */
 m_toggle__void_$p_org_patternfly_component_tabs_TabsToggle() {
  let tabs = /**@type {Tabs}*/ ($Casts.$to(this.m_lookupFlatComponent__org_patternfly_component_BaseComponentFlat(), Tabs));
  tabs.m_toggle__void();
 }
 //Bridge method.
 /** @final @override @nodts @return {TabsToggle} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_tabs_TabsToggle();
 }
 //Bridge method.
 /** @final @override @nodts @return {TabsToggle} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {TabsToggle}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), TabsToggle));
 }
 //Bridge method.
 /** @final @override @nodts @return {TabsToggle} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {TabsToggle}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, arg0), TabsToggle));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return Disabled.m_isDisabled__$default__org_patternfly_style_Modifiers_Disabled__boolean(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {TabsToggle} */
 m_disabled__org_patternfly_component_tabs_TabsToggle() {
  return /**@type {TabsToggle}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), TabsToggle));
 }
 //Default method forwarding stub.
 /** @nodts @return {TabsToggle} */
 m_disabled__boolean__org_patternfly_component_tabs_TabsToggle(/** boolean */ arg0) {
  return /**@type {TabsToggle}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, arg0), TabsToggle));
 }
 /** @nodts */
 static $clinit() {
  TabsToggle.$clinit = () =>{};
  TabsToggle.$loadModules();
  TabSubComponent.$clinit();
  Disabled.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TabsToggle;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Tabs = goog.module.get('org.patternfly.component.tabs.Tabs$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
TabsToggle.f_SUB_COMPONENT_NAME__org_patternfly_component_tabs_TabsToggle = 'tt';
Disabled.$markImplementor(TabsToggle);
$Util.$setClassMetadata(TabsToggle, 'org.patternfly.component.tabs.TabsToggle');

exports = TabsToggle;

//# sourceMappingURL=TabsToggle.js.map

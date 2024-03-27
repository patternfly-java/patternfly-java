goog.module('org.patternfly.component.page.MastheadToggle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MastheadSubComponent = goog.require('org.patternfly.component.page.MastheadSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Page = goog.forwardDeclare('org.patternfly.component.page.Page$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {MastheadSubComponent<HTMLDivElement, MastheadToggle>}
 */
class MastheadToggle extends MastheadSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Button} @nodts*/
  this.f_toggleButton__org_patternfly_component_page_MastheadToggle_;
 }
 /** @nodts @return {MastheadToggle} */
 static m_mastheadToggle__org_patternfly_component_page_MastheadToggle() {
  MastheadToggle.$clinit();
  return MastheadToggle.$create__();
 }
 /** @nodts @return {!MastheadToggle} */
 static $create__() {
  MastheadToggle.$clinit();
  let $instance = new MastheadToggle();
  $instance.$ctor__org_patternfly_component_page_MastheadToggle__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_MastheadToggle__void() {
  this.$ctor__org_patternfly_component_page_MastheadSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(MastheadToggle.f_SUB_COMPONENT_NAME__org_patternfly_component_page_MastheadToggle, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_masthead__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_toggleButton__org_patternfly_component_page_MastheadToggle_ = /**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_plain__org_jboss_elemento_TypedBuilder(), Button)).m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_bars__org_patternfly_icon_PredefinedIcon()), Button)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Global Navigation'), Button)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, true), Button)));
 }
 /** @nodts @return {MastheadToggle} */
 m_toggleSidebar__org_patternfly_component_page_MastheadToggle() {
  this.f_toggleButton__org_patternfly_component_page_MastheadToggle_.m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   this.m_toggle__void_$p_org_patternfly_component_page_MastheadToggle();
  });
  return this;
 }
 /** @nodts @return {MastheadToggle} */
 m_that__org_patternfly_component_page_MastheadToggle() {
  return this;
 }
 /** @nodts */
 m_toggle__void_$p_org_patternfly_component_page_MastheadToggle() {
  let expanded = Boolean.m_parseBoolean__java_lang_String__boolean(this.f_toggleButton__org_patternfly_component_page_MastheadToggle_.m_element__elemental2_dom_HTMLElement().getAttribute(Aria.f_expanded__org_patternfly_core_Aria));
  this.f_toggleButton__org_patternfly_component_page_MastheadToggle_.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, !expanded);
  if (!$Equality.$same(Page.m_page__org_patternfly_component_page_Page().m_sidebar__org_patternfly_component_page_PageSidebar(), null)) {
   Page.m_page__org_patternfly_component_page_Page().m_sidebar__org_patternfly_component_page_PageSidebar().m_toggle__void();
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {MastheadToggle} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_MastheadToggle();
 }
 /** @nodts */
 static $clinit() {
  MastheadToggle.$clinit = () =>{};
  MastheadToggle.$loadModules();
  MastheadSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MastheadToggle;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Page = goog.module.get('org.patternfly.component.page.Page$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
MastheadToggle.f_SUB_COMPONENT_NAME__org_patternfly_component_page_MastheadToggle = 'mht';
$Util.$setClassMetadata(MastheadToggle, 'org.patternfly.component.page.MastheadToggle');

exports = MastheadToggle;

//# sourceMappingURL=MastheadToggle.js.map

goog.module('org.patternfly.component.page.PageMainGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let PageSection = goog.forwardDeclare('org.patternfly.component.page.PageSection$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Sticky = goog.forwardDeclare('org.patternfly.style.Sticky$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLDivElement, PageMainGroup>}
 */
class PageMainGroup extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {PageMainGroup} */
 static m_pageMainGroup__org_patternfly_component_page_PageMainGroup() {
  PageMainGroup.$clinit();
  return PageMainGroup.$create__();
 }
 /** @nodts @return {!PageMainGroup} */
 static $create__() {
  PageMainGroup.$clinit();
  let $instance = new PageMainGroup();
  $instance.$ctor__org_patternfly_component_page_PageMainGroup__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_PageMainGroup__void() {
  this.$ctor__org_patternfly_component_SubComponent__org_patternfly_component_ComponentType__java_lang_String__elemental2_dom_HTMLElement__void(ComponentType.f_Page__org_patternfly_component_ComponentType, PageMainGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageMainGroup, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_page__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_main__org_patternfly_style_Classes, Classes.f_group__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @template E, P @return {PageMainGroup} */
 m_addSection__org_patternfly_component_page_PageSection__org_patternfly_component_page_PageMainGroup(/** PageSection<E, P> */ pageSection) {
  return /**@type {PageMainGroup}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(pageSection), PageMainGroup));
 }
 /** @nodts @return {PageMainGroup} */
 m_sticky__org_patternfly_style_Breakpoints__org_patternfly_component_page_PageMainGroup(/** Breakpoints<Sticky> */ sticky) {
  return /**@type {PageMainGroup}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([sticky.m_modifiers__java_lang_String()], j_l_String))), PageMainGroup));
 }
 /** @nodts @return {PageMainGroup} */
 m_shadowTop__org_patternfly_component_page_PageMainGroup() {
  return /**@type {PageMainGroup}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_shadowTop__org_patternfly_style_Classes)], j_l_String))), PageMainGroup));
 }
 /** @nodts @return {PageMainGroup} */
 m_shadowBottom__org_patternfly_component_page_PageMainGroup() {
  return /**@type {PageMainGroup}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_shadowBottom__org_patternfly_style_Classes)], j_l_String))), PageMainGroup));
 }
 /** @nodts @return {PageMainGroup} */
 m_overflowScroll__org_patternfly_component_page_PageMainGroup() {
  return /**@type {PageMainGroup}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_overflowScroll__org_patternfly_style_Classes)], j_l_String))), PageMainGroup));
 }
 /** @nodts @return {PageMainGroup} */
 m_that__org_patternfly_component_page_PageMainGroup() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PageMainGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_PageMainGroup();
 }
 /** @nodts */
 static $clinit() {
  PageMainGroup.$clinit = () =>{};
  PageMainGroup.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PageMainGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
PageMainGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_page_PageMainGroup = 'pmg';
$Util.$setClassMetadata(PageMainGroup, 'org.patternfly.component.page.PageMainGroup');

exports = PageMainGroup;

//# sourceMappingURL=PageMainGroup.js.map

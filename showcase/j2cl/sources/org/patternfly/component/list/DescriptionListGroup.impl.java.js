goog.module('org.patternfly.component.list.DescriptionListGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DescriptionListSubComponent = goog.require('org.patternfly.component.list.DescriptionListSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let DescriptionListDescription = goog.forwardDeclare('org.patternfly.component.list.DescriptionListDescription$impl');
let DescriptionListTerm = goog.forwardDeclare('org.patternfly.component.list.DescriptionListTerm$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DescriptionListSubComponent<HTMLDivElement, DescriptionListGroup>}
 */
class DescriptionListGroup extends DescriptionListSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {DescriptionListGroup} */
 static m_descriptionListGroup__org_patternfly_component_list_DescriptionListGroup() {
  DescriptionListGroup.$clinit();
  return DescriptionListGroup.$create__();
 }
 /** @nodts @return {!DescriptionListGroup} */
 static $create__() {
  DescriptionListGroup.$clinit();
  let $instance = new DescriptionListGroup();
  $instance.$ctor__org_patternfly_component_list_DescriptionListGroup__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_list_DescriptionListGroup__void() {
  this.$ctor__org_patternfly_component_list_DescriptionListSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(DescriptionListGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_list_DescriptionListGroup, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_descriptionList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_group__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {DescriptionListGroup} */
 m_that__org_patternfly_component_list_DescriptionListGroup() {
  return this;
 }
 /** @nodts @return {DescriptionListGroup} */
 m_addTerm__org_patternfly_component_list_DescriptionListTerm__org_patternfly_component_list_DescriptionListGroup(/** DescriptionListTerm */ term) {
  return /**@type {DescriptionListGroup}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(term), DescriptionListGroup));
 }
 /** @nodts @return {DescriptionListGroup} */
 m_addDescription__org_patternfly_component_list_DescriptionListDescription__org_patternfly_component_list_DescriptionListGroup(/** DescriptionListDescription */ description) {
  return /**@type {DescriptionListGroup}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(description), DescriptionListGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {DescriptionListGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_list_DescriptionListGroup();
 }
 /** @nodts */
 static $clinit() {
  DescriptionListGroup.$clinit = () =>{};
  DescriptionListGroup.$loadModules();
  DescriptionListSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DescriptionListGroup;
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
DescriptionListGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_list_DescriptionListGroup = 'dlg';
$Util.$setClassMetadata(DescriptionListGroup, 'org.patternfly.component.list.DescriptionListGroup');

exports = DescriptionListGroup;

//# sourceMappingURL=DescriptionListGroup.js.map

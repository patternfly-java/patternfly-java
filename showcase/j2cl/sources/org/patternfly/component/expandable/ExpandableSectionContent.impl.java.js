goog.module('org.patternfly.component.expandable.ExpandableSectionContent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ExpandableSectionSubComponent = goog.require('org.patternfly.component.expandable.ExpandableSectionSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ExpandableSectionSubComponent<HTMLDivElement, ExpandableSectionContent>}
 */
class ExpandableSectionContent extends ExpandableSectionSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_component_expandable_ExpandableSectionContent;
 }
 /** @nodts @return {ExpandableSectionContent} */
 static m_expandableSectionContent__org_patternfly_component_expandable_ExpandableSectionContent() {
  ExpandableSectionContent.$clinit();
  return ExpandableSectionContent.$create__();
 }
 /** @nodts @return {!ExpandableSectionContent} */
 static $create__() {
  ExpandableSectionContent.$clinit();
  let $instance = new ExpandableSectionContent();
  $instance.$ctor__org_patternfly_component_expandable_ExpandableSectionContent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_expandable_ExpandableSectionContent__void() {
  this.$ctor__org_patternfly_component_expandable_ExpandableSectionSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(ExpandableSectionContent.f_SUB_COMPONENT_NAME__org_patternfly_component_expandable_ExpandableSectionContent, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_expandableSection__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((e) =>{
   let e_1 = /**@type {HTMLDivElement}*/ ($Casts.$to(e, $Overlay));
   e_1.hidden = true;
  })), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'region'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_id__java_lang_String__org_jboss_elemento_TypedBuilder(this.f_id__org_patternfly_component_expandable_ExpandableSectionContent = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_ExpandableSection__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['cnt'], j_l_String))));
 }
 /** @nodts @return {ExpandableSectionContent} */
 m_that__org_patternfly_component_expandable_ExpandableSectionContent() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {ExpandableSectionContent} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_expandable_ExpandableSectionContent();
 }
 /** @nodts */
 static $clinit() {
  ExpandableSectionContent.$clinit = () =>{};
  ExpandableSectionContent.$loadModules();
  ExpandableSectionSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ExpandableSectionContent;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
ExpandableSectionContent.f_SUB_COMPONENT_NAME__org_patternfly_component_expandable_ExpandableSectionContent = 'esc';
$Util.$setClassMetadata(ExpandableSectionContent, 'org.patternfly.component.expandable.ExpandableSectionContent');

exports = ExpandableSectionContent;

//# sourceMappingURL=ExpandableSectionContent.js.map

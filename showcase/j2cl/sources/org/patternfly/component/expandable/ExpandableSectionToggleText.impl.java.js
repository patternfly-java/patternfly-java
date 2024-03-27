goog.module('org.patternfly.component.expandable.ExpandableSectionToggleText$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ExpandableSectionSubComponent = goog.require('org.patternfly.component.expandable.ExpandableSectionSubComponent$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ExpandableSectionSubComponent<HTMLElement, ExpandableSectionToggleText>}
 */
class ExpandableSectionToggleText extends ExpandableSectionSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_moreText__org_patternfly_component_expandable_ExpandableSectionToggleText_;
  /**@type {?string} @nodts*/
  this.f_lessText__org_patternfly_component_expandable_ExpandableSectionToggleText_;
 }
 /** @nodts @return {ExpandableSectionToggleText} */
 static m_expandableSectionToggleText__org_patternfly_component_expandable_ExpandableSectionToggleText() {
  ExpandableSectionToggleText.$clinit();
  return ExpandableSectionToggleText.$create__java_lang_String__java_lang_String(null, null);
 }
 /** @nodts @return {ExpandableSectionToggleText} */
 static m_expandableSectionToggleText__java_lang_String__org_patternfly_component_expandable_ExpandableSectionToggleText(/** ?string */ moreText) {
  ExpandableSectionToggleText.$clinit();
  return ExpandableSectionToggleText.$create__java_lang_String__java_lang_String(moreText, null);
 }
 /** @nodts @return {ExpandableSectionToggleText} */
 static m_expandableSectionToggleText__java_lang_String__java_lang_String__org_patternfly_component_expandable_ExpandableSectionToggleText(/** ?string */ moreText, /** ?string */ lessText) {
  ExpandableSectionToggleText.$clinit();
  return ExpandableSectionToggleText.$create__java_lang_String__java_lang_String(moreText, lessText);
 }
 /** @nodts @return {!ExpandableSectionToggleText} */
 static $create__java_lang_String__java_lang_String(/** ?string */ moreText, /** ?string */ lessText) {
  ExpandableSectionToggleText.$clinit();
  let $instance = new ExpandableSectionToggleText();
  $instance.$ctor__org_patternfly_component_expandable_ExpandableSectionToggleText__java_lang_String__java_lang_String__void(moreText, lessText);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_expandable_ExpandableSectionToggleText__java_lang_String__java_lang_String__void(/** ?string */ moreText, /** ?string */ lessText) {
  this.$ctor__org_patternfly_component_expandable_ExpandableSectionSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(ExpandableSectionToggleText.f_SUB_COMPONENT_NAME__org_patternfly_component_expandable_ExpandableSectionToggleText, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_expandableSection__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  this.f_moreText__org_patternfly_component_expandable_ExpandableSectionToggleText_ = moreText;
  this.f_lessText__org_patternfly_component_expandable_ExpandableSectionToggleText_ = lessText;
  if (!$Equality.$same(moreText, null)) {
   this.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(moreText);
  }
 }
 /** @nodts @return {ExpandableSectionToggleText} */
 m_that__org_patternfly_component_expandable_ExpandableSectionToggleText() {
  return this;
 }
 /** @nodts */
 m_collapse__void_$pp_org_patternfly_component_expandable() {
  if (!$Equality.$same(this.f_lessText__org_patternfly_component_expandable_ExpandableSectionToggleText_, null)) {
   this.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(this.f_moreText__org_patternfly_component_expandable_ExpandableSectionToggleText_);
  }
 }
 /** @nodts */
 m_expand__void_$pp_org_patternfly_component_expandable() {
  if (!$Equality.$same(this.f_lessText__org_patternfly_component_expandable_ExpandableSectionToggleText_, null)) {
   this.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(this.f_lessText__org_patternfly_component_expandable_ExpandableSectionToggleText_);
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {ExpandableSectionToggleText} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_expandable_ExpandableSectionToggleText();
 }
 /** @nodts */
 static $clinit() {
  ExpandableSectionToggleText.$clinit = () =>{};
  ExpandableSectionToggleText.$loadModules();
  ExpandableSectionSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ExpandableSectionToggleText;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
ExpandableSectionToggleText.f_SUB_COMPONENT_NAME__org_patternfly_component_expandable_ExpandableSectionToggleText = 'estt';
$Util.$setClassMetadata(ExpandableSectionToggleText, 'org.patternfly.component.expandable.ExpandableSectionToggleText');

exports = ExpandableSectionToggleText;

//# sourceMappingURL=ExpandableSectionToggleText.js.map

goog.module('org.patternfly.component.help.HelperText$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponentFlat = goog.require('org.patternfly.component.BaseComponentFlat$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let ValidationStatus = goog.forwardDeclare('org.patternfly.component.ValidationStatus$impl');
let HelperTextItem = goog.forwardDeclare('org.patternfly.component.help.HelperTextItem$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponentFlat<HTMLElement, HelperText>}
 */
class HelperText extends BaseComponentFlat {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HelperTextItem} @nodts*/
  this.f_firstItem__org_patternfly_component_help_HelperText_;
 }
 /** @nodts @return {HelperText} */
 static m_helperText__org_patternfly_component_help_HelperText() {
  HelperText.$clinit();
  return HelperText.$create__org_jboss_elemento_HTMLContainerBuilder(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder());
 }
 /** @nodts @template E @return {HelperText} */
 static m_helperText__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_help_HelperText(/** HTMLContainerBuilder<E> */ builder) {
  HelperText.$clinit();
  return HelperText.$create__org_jboss_elemento_HTMLContainerBuilder(builder);
 }
 /** @nodts @return {HelperText} */
 static m_helperText__java_lang_String__org_patternfly_component_help_HelperText(/** ?string */ text) {
  HelperText.$clinit();
  return HelperText.m_helperText__org_patternfly_component_help_HelperText().m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(HelperTextItem.m_helperTextItem__java_lang_String__org_patternfly_component_help_HelperTextItem(text));
 }
 /** @nodts @return {HelperText} */
 static m_helperText__java_lang_String__org_patternfly_component_ValidationStatus__org_patternfly_component_help_HelperText(/** ?string */ text, /** ValidationStatus */ status) {
  HelperText.$clinit();
  return HelperText.m_helperText__org_patternfly_component_help_HelperText().m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(HelperTextItem.m_helperTextItem__java_lang_String__org_patternfly_component_ValidationStatus__org_patternfly_component_help_HelperTextItem(text, status));
 }
 /** @nodts @template E @return {!HelperText} */
 static $create__org_jboss_elemento_HTMLContainerBuilder(/** HTMLContainerBuilder<E> */ builder) {
  HelperText.$clinit();
  let $instance = new HelperText();
  $instance.$ctor__org_patternfly_component_help_HelperText__org_jboss_elemento_HTMLContainerBuilder__void(builder);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_component_help_HelperText__org_jboss_elemento_HTMLContainerBuilder__void(/** HTMLContainerBuilder<E> */ builder) {
  this.$ctor__org_patternfly_component_BaseComponentFlat__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_HelperText__org_patternfly_component_ComponentType, /**@type {HTMLElement}*/ (/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_helperText__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()));
 }
 /** @nodts @return {HelperText} */
 m_addItem__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(/** HelperTextItem */ item) {
  return this.m_add__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(item);
 }
 /** @nodts @return {HelperText} */
 m_add__org_patternfly_component_help_HelperTextItem__org_patternfly_component_help_HelperText(/** HelperTextItem */ item) {
  if ($Equality.$same(this.f_firstItem__org_patternfly_component_help_HelperText_, null)) {
   this.f_firstItem__org_patternfly_component_help_HelperText_ = item;
  }
  this.m_element__elemental2_dom_HTMLElement().appendChild(item.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {HelperText} */
 m_liveRegion__org_patternfly_component_help_HelperText() {
  return /**@type {HelperText}*/ ($Casts.$to(this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_live__org_patternfly_core_Aria, 'polite'), HelperText));
 }
 /** @nodts @return {HelperText} */
 m_that__org_patternfly_component_help_HelperText() {
  return this;
 }
 /** @nodts @return {HelperTextItem} */
 m_firstItem__org_patternfly_component_help_HelperTextItem() {
  if ($Equality.$same(this.f_firstItem__org_patternfly_component_help_HelperText_, null)) {
   Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'Helper text does not contain any items. Returning empty item instead');
   return HelperTextItem.m_helperTextItem__org_patternfly_component_help_HelperTextItem();
  }
  return this.f_firstItem__org_patternfly_component_help_HelperText_;
 }
 //Bridge method.
 /** @final @override @nodts @return {HelperText} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_help_HelperText();
 }
 /** @nodts */
 static $clinit() {
  HelperText.$clinit = () =>{};
  HelperText.$loadModules();
  BaseComponentFlat.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HelperText;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  HelperTextItem = goog.module.get('org.patternfly.component.help.HelperTextItem$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(HelperText, 'org.patternfly.component.help.HelperText');

exports = HelperText;

//# sourceMappingURL=HelperText.js.map

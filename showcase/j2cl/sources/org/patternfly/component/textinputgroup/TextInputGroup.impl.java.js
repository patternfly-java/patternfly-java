goog.module('org.patternfly.component.textinputgroup.TextInputGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let TextInputGroupMain = goog.forwardDeclare('org.patternfly.component.textinputgroup.TextInputGroupMain$impl');
let TextInputGroupUtilities = goog.forwardDeclare('org.patternfly.component.textinputgroup.TextInputGroupUtilities$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, TextInputGroup>}
 * @implements {Disabled<HTMLDivElement, TextInputGroup>}
 * @implements {Attachable}
 */
class TextInputGroup extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {boolean} @nodts*/
  this.f_initialDisabled__org_patternfly_component_textinputgroup_TextInputGroup = false;
  /**@type {TextInputGroupMain} @nodts*/
  this.f_main__org_patternfly_component_textinputgroup_TextInputGroup_;
  /**@type {TextInputGroupUtilities} @nodts*/
  this.f_utilities__org_patternfly_component_textinputgroup_TextInputGroup_;
 }
 /** @nodts @return {TextInputGroup} */
 static m_textInputGroup__org_patternfly_component_textinputgroup_TextInputGroup() {
  TextInputGroup.$clinit();
  return TextInputGroup.$create__();
 }
 /** @nodts @return {!TextInputGroup} */
 static $create__() {
  TextInputGroup.$clinit();
  let $instance = new TextInputGroup();
  $instance.$ctor__org_patternfly_component_textinputgroup_TextInputGroup__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_textinputgroup_TextInputGroup__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_TextInputGroup__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_textInputGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_storeComponent__void();
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (this.f_initialDisabled__org_patternfly_component_textinputgroup_TextInputGroup && !$Equality.$same(this.f_main__org_patternfly_component_textinputgroup_TextInputGroup_, null)) {
   this.f_main__org_patternfly_component_textinputgroup_TextInputGroup_.m_disabled__boolean__org_jboss_elemento_TypedBuilder(true);
  }
 }
 /** @nodts @return {TextInputGroup} */
 m_addMain__org_patternfly_component_textinputgroup_TextInputGroupMain__org_patternfly_component_textinputgroup_TextInputGroup(/** TextInputGroupMain */ main) {
  return this.m_add__org_patternfly_component_textinputgroup_TextInputGroupMain__org_patternfly_component_textinputgroup_TextInputGroup(main);
 }
 /** @nodts @return {TextInputGroup} */
 m_add__org_patternfly_component_textinputgroup_TextInputGroupMain__org_patternfly_component_textinputgroup_TextInputGroup(/** TextInputGroupMain */ main) {
  this.f_main__org_patternfly_component_textinputgroup_TextInputGroup_ = main;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(main.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  return this;
 }
 /** @nodts @return {TextInputGroup} */
 m_addUtilities__org_patternfly_component_textinputgroup_TextInputGroupUtilities__org_patternfly_component_textinputgroup_TextInputGroup(/** TextInputGroupUtilities */ utilities) {
  this.f_utilities__org_patternfly_component_textinputgroup_TextInputGroup_ = utilities;
  return this.m_add__org_patternfly_component_textinputgroup_TextInputGroupUtilities__org_patternfly_component_textinputgroup_TextInputGroup(utilities);
 }
 /** @nodts @return {TextInputGroup} */
 m_add__org_patternfly_component_textinputgroup_TextInputGroupUtilities__org_patternfly_component_textinputgroup_TextInputGroup(/** TextInputGroupUtilities */ utilities) {
  this.f_utilities__org_patternfly_component_textinputgroup_TextInputGroup_ = utilities;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(utilities.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  return this;
 }
 /** @nodts @return {TextInputGroup} */
 m_disabled__boolean__org_patternfly_component_textinputgroup_TextInputGroup(/** boolean */ disabled) {
  if ($Equality.$same(this.f_main__org_patternfly_component_textinputgroup_TextInputGroup_, null)) {
   this.f_initialDisabled__org_patternfly_component_textinputgroup_TextInputGroup = disabled;
  } else {
   this.f_main__org_patternfly_component_textinputgroup_TextInputGroup_.m_disabled__boolean__org_jboss_elemento_TypedBuilder(disabled);
  }
  return /**@type {TextInputGroup}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, disabled), TextInputGroup));
 }
 /** @nodts @return {TextInputGroup} */
 m_that__org_patternfly_component_textinputgroup_TextInputGroup() {
  return this;
 }
 /** @nodts @return {TextInputGroupMain} */
 m_main__org_patternfly_component_textinputgroup_TextInputGroupMain() {
  return this.f_main__org_patternfly_component_textinputgroup_TextInputGroup_;
 }
 /** @nodts @return {TextInputGroupUtilities} */
 m_utilities__org_patternfly_component_textinputgroup_TextInputGroupUtilities() {
  return this.f_utilities__org_patternfly_component_textinputgroup_TextInputGroup_;
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInputGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_textinputgroup_TextInputGroup();
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInputGroup} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {TextInputGroup}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), TextInputGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {TextInputGroup} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_textinputgroup_TextInputGroup(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return Disabled.m_isDisabled__$default__org_patternfly_style_Modifiers_Disabled__boolean(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {TextInputGroup} */
 m_disabled__org_patternfly_component_textinputgroup_TextInputGroup() {
  return /**@type {TextInputGroup}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), TextInputGroup));
 }
 /** @nodts */
 static $clinit() {
  TextInputGroup.$clinit = () =>{};
  TextInputGroup.$loadModules();
  BaseComponent.$clinit();
  Disabled.$clinit();
  Attachable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextInputGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Disabled.$markImplementor(TextInputGroup);
Attachable.$markImplementor(TextInputGroup);
$Util.$setClassMetadata(TextInputGroup, 'org.patternfly.component.textinputgroup.TextInputGroup');

exports = TextInputGroup;

//# sourceMappingURL=TextInputGroup.js.map

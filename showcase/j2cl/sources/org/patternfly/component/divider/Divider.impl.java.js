goog.module('org.patternfly.component.divider.Divider$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponentFlat = goog.require('org.patternfly.component.BaseComponentFlat$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLElementBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let DividerType = goog.forwardDeclare('org.patternfly.component.divider.DividerType$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Inset = goog.forwardDeclare('org.patternfly.style.Inset$impl');
let Orientation = goog.forwardDeclare('org.patternfly.style.Orientation$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $JavaScriptObject = goog.forwardDeclare('vmbootstrap.JavaScriptObject$impl');

/**
 * @extends {BaseComponentFlat<HTMLElement, Divider>}
 */
class Divider extends BaseComponentFlat {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Divider} */
 static m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(/** DividerType */ type) {
  Divider.$clinit();
  switch (type.ordinal()) {
   case DividerType.$ordinal_li__org_patternfly_component_divider_DividerType: 
    return Divider.$create__java_lang_String__java_lang_Class('li', Class.$get($JavaScriptObject));
   case DividerType.$ordinal_hr__org_patternfly_component_divider_DividerType: 
    return Divider.$create__java_lang_String__java_lang_Class('hr', Class.$get($JavaScriptObject));
   case DividerType.$ordinal_div__org_patternfly_component_divider_DividerType: 
    return Divider.$create__java_lang_String__java_lang_Class('div', Class.$get($JavaScriptObject));
   default: 
    Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(ComponentType.f_Divider__org_patternfly_component_ComponentType.f_componentName__org_patternfly_component_ComponentType, null, 'Unknown divider type ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(type) + '. Fallback to ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(DividerType.f_div__org_patternfly_component_divider_DividerType.name()));
    return Divider.$create__java_lang_String__java_lang_Class('div', Class.$get($JavaScriptObject));
  }
 }
 /** @nodts @template E @return {!Divider} */
 static $create__java_lang_String__java_lang_Class(/** ?string */ element, /** Class<E> */ type) {
  Divider.$clinit();
  let $instance = new Divider();
  $instance.$ctor__org_patternfly_component_divider_Divider__java_lang_String__java_lang_Class__void(element, type);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_component_divider_Divider__java_lang_String__java_lang_Class__void(/** ?string */ element, /** Class<E> */ type) {
  this.$ctor__org_patternfly_component_BaseComponentFlat__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Divider__org_patternfly_component_ComponentType, /**@type {HTMLElement}*/ (/**@type {HTMLElementBuilder<E>}*/ ($Casts.$to(/**@type {HTMLElementBuilder<E>}*/ ($Casts.$to(/**@type {HTMLElementBuilder<E>}*/ (Elements.m_htmlElement__java_lang_String__java_lang_Class__org_jboss_elemento_HTMLElementBuilder(element, type)).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_divider__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLElementBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'separator'), HTMLElementBuilder)).m_element__elemental2_dom_HTMLElement()));
 }
 /** @nodts @return {Divider} */
 m_inset__org_patternfly_style_Breakpoints__org_patternfly_component_divider_Divider(/** Breakpoints<Inset> */ inset) {
  return /**@type {Divider}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([inset.m_modifiers__java_lang_String()], j_l_String))), Divider));
 }
 /** @nodts @return {Divider} */
 m_orientation__org_patternfly_style_Breakpoints__org_patternfly_component_divider_Divider(/** Breakpoints<Orientation> */ orientation) {
  return /**@type {Divider}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([orientation.m_modifiers__java_lang_String()], j_l_String))), Divider));
 }
 /** @nodts @return {Divider} */
 m_that__org_patternfly_component_divider_Divider() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Divider} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_divider_Divider();
 }
 /** @nodts */
 static $clinit() {
  Divider.$clinit = () =>{};
  Divider.$loadModules();
  BaseComponentFlat.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Divider;
 }
 
 /** @nodts */
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLElementBuilder = goog.module.get('org.jboss.elemento.HTMLElementBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  DividerType = goog.module.get('org.patternfly.component.divider.DividerType$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $JavaScriptObject = goog.module.get('vmbootstrap.JavaScriptObject$impl');
 }
}
$Util.$setClassMetadata(Divider, 'org.patternfly.component.divider.Divider');

exports = Divider;

//# sourceMappingURL=Divider.js.map

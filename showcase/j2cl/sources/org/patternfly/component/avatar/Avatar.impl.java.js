goog.module('org.patternfly.component.avatar.Avatar$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponentFlat = goog.require('org.patternfly.component.BaseComponentFlat$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLElementBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Validation = goog.forwardDeclare('org.patternfly.core.Validation$impl');
let Brightness = goog.forwardDeclare('org.patternfly.style.Brightness$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponentFlat<HTMLImageElement, Avatar>}
 */
class Avatar extends BaseComponentFlat {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Avatar} */
 static m_avatar__java_lang_String__java_lang_String__org_patternfly_component_avatar_Avatar(/** ?string */ src, /** ?string */ alt) {
  Avatar.$clinit();
  return Avatar.$create__java_lang_String__java_lang_String(src, alt);
 }
 /** @nodts @return {!Avatar} */
 static $create__java_lang_String__java_lang_String(/** ?string */ src, /** ?string */ alt) {
  Avatar.$clinit();
  let $instance = new Avatar();
  $instance.$ctor__org_patternfly_component_avatar_Avatar__java_lang_String__java_lang_String__void(src, alt);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_avatar_Avatar__java_lang_String__java_lang_String__void(/** ?string */ src, /** ?string */ alt) {
  this.$ctor__org_patternfly_component_BaseComponentFlat__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Avatar__org_patternfly_component_ComponentType, /**@type {HTMLImageElement}*/ ($Casts.$to(/**@type {HTMLElementBuilder<HTMLImageElement>}*/ ($Casts.$to(/**@type {HTMLElementBuilder<HTMLImageElement>}*/ ($Casts.$to(Elements.m_img__org_jboss_elemento_HTMLElementBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_avatar__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLElementBuilder)).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((i) =>{
   let i_1 = /**@type {HTMLImageElement}*/ ($Casts.$to(i, $Overlay));
   i_1.src = src;
   i_1.alt = alt;
  })), HTMLElementBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {Avatar} */
 m_src__java_lang_String__org_patternfly_component_avatar_Avatar(/** ?string */ src) {
  /**@type {HTMLImageElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)).src = src;
  return this;
 }
 /** @nodts @return {Avatar} */
 m_alt__java_lang_String__org_patternfly_component_avatar_Avatar(/** ?string */ alt) {
  /**@type {HTMLImageElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)).alt = alt;
  return this;
 }
 /** @nodts @return {Avatar} */
 m_size__org_patternfly_style_Size__org_patternfly_component_avatar_Avatar(/** Size */ size) {
  return /**@type {Avatar}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([size.m_modifier__java_lang_String()], j_l_String))), Avatar));
 }
 /** @nodts @return {Avatar} */
 m_border__org_patternfly_style_Brightness__org_patternfly_component_avatar_Avatar(/** Brightness */ border) {
  if (Validation.m_verifyEnum__java_lang_String__elemental2_dom_Element__java_lang_String__java_lang_Enum__java_lang_Enum__arrayOf_java_lang_Enum__boolean(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, /**@type {HTMLImageElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), 'border', border, Brightness.f_light__org_patternfly_style_Brightness, /**@type {!Array<Brightness>}*/ ($Arrays.$init([Brightness.f_dark__org_patternfly_style_Brightness], Brightness)))) {
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([border.m_modifier__java_lang_String()], j_l_String)));
  }
  return this;
 }
 /** @nodts @return {Avatar} */
 m_that__org_patternfly_component_avatar_Avatar() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Avatar} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_avatar_Avatar();
 }
 /** @nodts */
 static $clinit() {
  Avatar.$clinit = () =>{};
  Avatar.$loadModules();
  BaseComponentFlat.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Avatar;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLElementBuilder = goog.module.get('org.jboss.elemento.HTMLElementBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Validation = goog.module.get('org.patternfly.core.Validation$impl');
  Brightness = goog.module.get('org.patternfly.style.Brightness$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Avatar, 'org.patternfly.component.avatar.Avatar');

exports = Avatar;

//# sourceMappingURL=Avatar.js.map

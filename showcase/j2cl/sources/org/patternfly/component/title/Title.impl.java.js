goog.module('org.patternfly.component.title.Title$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const WithText = goog.require('org.patternfly.component.WithText$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLHeadingElement, Title>}
 * @implements {WithText<HTMLHeadingElement, Title>}
 */
class Title extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Title} */
 static m_title__int__org_patternfly_component_title_Title(/** number */ level) {
  Title.$clinit();
  return Title.$create__int__org_patternfly_style_Size(level, null);
 }
 /** @nodts @return {Title} */
 static m_title__int__org_patternfly_style_Size__org_patternfly_component_title_Title(/** number */ level, /** Size */ size) {
  Title.$clinit();
  return Title.$create__int__org_patternfly_style_Size(level, size);
 }
 /** @nodts @return {Title} */
 static m_title__int__java_lang_String__org_patternfly_component_title_Title(/** number */ level, /** ?string */ text) {
  Title.$clinit();
  return Title.$create__int__org_patternfly_style_Size(level, null).m_text__java_lang_String__org_patternfly_component_title_Title(text);
 }
 /** @nodts @return {Title} */
 static m_title__int__org_patternfly_style_Size__java_lang_String__org_patternfly_component_title_Title(/** number */ level, /** Size */ size, /** ?string */ text) {
  Title.$clinit();
  return Title.$create__int__org_patternfly_style_Size(level, size).m_text__java_lang_String__org_patternfly_component_title_Title(text);
 }
 /** @nodts @return {!Title} */
 static $create__int__org_patternfly_style_Size(/** number */ level, /** Size */ size) {
  Title.$clinit();
  let $instance = new Title();
  $instance.$ctor__org_patternfly_component_title_Title__int__org_patternfly_style_Size__void(level, size);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_title_Title__int__org_patternfly_style_Size__void(/** number */ level, /** Size */ size) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Title__org_patternfly_component_ComponentType, /**@type {HTMLHeadingElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int__org_jboss_elemento_HTMLContainerBuilder(level).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_title__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  if (!$Equality.$same(size, null)) {
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([size.m_modifier__java_lang_String()], j_l_String)));
  }
 }
 /** @nodts @return {Title} */
 m_text__java_lang_String__org_patternfly_component_title_Title(/** ?string */ text) {
  if (!$Equality.$same(text, null)) {
   this.m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(text);
  }
  return this;
 }
 /** @nodts @return {Title} */
 m_that__org_patternfly_component_title_Title() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Title} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_title_Title();
 }
 //Bridge method.
 /** @final @override @nodts @return {Title} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_title_Title(arg0);
 }
 /** @nodts */
 static $clinit() {
  Title.$clinit = () =>{};
  Title.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Title;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
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
WithText.$markImplementor(Title);
$Util.$setClassMetadata(Title, 'org.patternfly.component.title.Title');

exports = Title;

//# sourceMappingURL=Title.js.map

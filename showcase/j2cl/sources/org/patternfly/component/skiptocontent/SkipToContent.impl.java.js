goog.module('org.patternfly.component.skiptocontent.SkipToContent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const WithText = goog.require('org.patternfly.component.WithText$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, SkipToContent>}
 * @implements {WithText<HTMLDivElement, SkipToContent>}
 */
class SkipToContent extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Button} @nodts*/
  this.f_button__org_patternfly_component_skiptocontent_SkipToContent_;
 }
 /** @nodts @return {SkipToContent} */
 static m_skipToContent__java_lang_String__org_patternfly_component_skiptocontent_SkipToContent(/** ?string */ mainId) {
  SkipToContent.$clinit();
  return SkipToContent.$create__java_lang_String__java_lang_String(mainId, 'Skip to content');
 }
 /** @nodts @return {SkipToContent} */
 static m_skipToContent__java_lang_String__java_lang_String__org_patternfly_component_skiptocontent_SkipToContent(/** ?string */ mainId, /** ?string */ text) {
  SkipToContent.$clinit();
  return SkipToContent.$create__java_lang_String__java_lang_String(mainId, text);
 }
 /** @nodts @return {!SkipToContent} */
 static $create__java_lang_String__java_lang_String(/** ?string */ mainId, /** ?string */ text) {
  SkipToContent.$clinit();
  let $instance = new SkipToContent();
  $instance.$ctor__org_patternfly_component_skiptocontent_SkipToContent__java_lang_String__java_lang_String__void(mainId, text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_skiptocontent_SkipToContent__java_lang_String__java_lang_String__void(/** ?string */ mainId, /** ?string */ text) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_SkipToContent__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_skipToContent__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_button__org_patternfly_component_skiptocontent_SkipToContent_ = Button.m_button__java_lang_String__java_lang_String__org_patternfly_component_button_Button(text, '#' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(mainId)).m_primary__org_patternfly_component_button_Button());
 }
 /** @nodts @return {SkipToContent} */
 m_text__java_lang_String__org_patternfly_component_skiptocontent_SkipToContent(/** ?string */ text) {
  this.f_button__org_patternfly_component_skiptocontent_SkipToContent_.m_text__java_lang_String__org_patternfly_component_button_Button(text);
  return this;
 }
 /** @nodts @return {SkipToContent} */
 m_that__org_patternfly_component_skiptocontent_SkipToContent() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {SkipToContent} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_skiptocontent_SkipToContent();
 }
 //Bridge method.
 /** @final @override @nodts @return {SkipToContent} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_skiptocontent_SkipToContent(arg0);
 }
 /** @nodts */
 static $clinit() {
  SkipToContent.$clinit = () =>{};
  SkipToContent.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SkipToContent;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
WithText.$markImplementor(SkipToContent);
$Util.$setClassMetadata(SkipToContent, 'org.patternfly.component.skiptocontent.SkipToContent');

exports = SkipToContent;

//# sourceMappingURL=SkipToContent.js.map

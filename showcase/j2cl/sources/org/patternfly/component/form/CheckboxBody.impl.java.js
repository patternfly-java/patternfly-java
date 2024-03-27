goog.module('org.patternfly.component.form.CheckboxBody$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CheckboxSubComponent = goog.require('org.patternfly.component.form.CheckboxSubComponent$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {CheckboxSubComponent<HTMLElement, CheckboxBody>}
 */
class CheckboxBody extends CheckboxSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {CheckboxBody} */
 static m_checkboxBody__org_patternfly_component_form_CheckboxBody() {
  CheckboxBody.$clinit();
  return CheckboxBody.$create__java_lang_String(null);
 }
 /** @nodts @return {CheckboxBody} */
 static m_checkboxBody__java_lang_String__org_patternfly_component_form_CheckboxBody(/** ?string */ text) {
  CheckboxBody.$clinit();
  return CheckboxBody.$create__java_lang_String(text);
 }
 /** @nodts @return {!CheckboxBody} */
 static $create__java_lang_String(/** ?string */ text) {
  CheckboxBody.$clinit();
  let $instance = new CheckboxBody();
  $instance.$ctor__org_patternfly_component_form_CheckboxBody__java_lang_String__void(text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_form_CheckboxBody__java_lang_String__void(/** ?string */ text) {
  this.$ctor__org_patternfly_component_form_CheckboxSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(CheckboxBody.f_SUB_COMPONENT_NAME__org_patternfly_component_form_CheckboxBody, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_check__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_body__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  if (!$Equality.$same(text, null)) {
   this.m_element__elemental2_dom_HTMLElement().textContent = text;
  }
 }
 /** @nodts @return {CheckboxBody} */
 m_that__org_patternfly_component_form_CheckboxBody() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {CheckboxBody} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_form_CheckboxBody();
 }
 /** @nodts */
 static $clinit() {
  CheckboxBody.$clinit = () =>{};
  CheckboxBody.$loadModules();
  CheckboxSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CheckboxBody;
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
CheckboxBody.f_SUB_COMPONENT_NAME__org_patternfly_component_form_CheckboxBody = 'cbb';
$Util.$setClassMetadata(CheckboxBody, 'org.patternfly.component.form.CheckboxBody');

exports = CheckboxBody;

//# sourceMappingURL=CheckboxBody.js.map

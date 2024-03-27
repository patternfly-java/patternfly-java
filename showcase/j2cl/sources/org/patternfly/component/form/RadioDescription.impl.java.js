goog.module('org.patternfly.component.form.RadioDescription$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RadioSubComponent = goog.require('org.patternfly.component.form.RadioSubComponent$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {RadioSubComponent<HTMLElement, RadioDescription>}
 */
class RadioDescription extends RadioSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {RadioDescription} */
 static m_radioDescription__org_patternfly_component_form_RadioDescription() {
  RadioDescription.$clinit();
  return RadioDescription.$create__java_lang_String(null);
 }
 /** @nodts @return {RadioDescription} */
 static m_radioDescription__java_lang_String__org_patternfly_component_form_RadioDescription(/** ?string */ description) {
  RadioDescription.$clinit();
  return RadioDescription.$create__java_lang_String(description);
 }
 /** @nodts @return {!RadioDescription} */
 static $create__java_lang_String(/** ?string */ description) {
  RadioDescription.$clinit();
  let $instance = new RadioDescription();
  $instance.$ctor__org_patternfly_component_form_RadioDescription__java_lang_String__void(description);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_form_RadioDescription__java_lang_String__void(/** ?string */ description) {
  this.$ctor__org_patternfly_component_form_RadioSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(RadioDescription.f_SUB_COMPONENT_NAME__org_patternfly_component_form_RadioDescription, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_radio__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_description__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  if (!$Equality.$same(description, null)) {
   this.m_element__elemental2_dom_HTMLElement().textContent = description;
  }
 }
 /** @nodts @return {RadioDescription} */
 m_that__org_patternfly_component_form_RadioDescription() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {RadioDescription} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_form_RadioDescription();
 }
 /** @nodts */
 static $clinit() {
  RadioDescription.$clinit = () =>{};
  RadioDescription.$loadModules();
  RadioSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RadioDescription;
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
RadioDescription.f_SUB_COMPONENT_NAME__org_patternfly_component_form_RadioDescription = 'rd';
$Util.$setClassMetadata(RadioDescription, 'org.patternfly.component.form.RadioDescription');

exports = RadioDescription;

//# sourceMappingURL=RadioDescription.js.map

goog.module('org.patternfly.component.alert.AlertDescription$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AlertSubComponent = goog.require('org.patternfly.component.alert.AlertSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AlertSubComponent<HTMLDivElement, AlertDescription>}
 */
class AlertDescription extends AlertSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {AlertDescription} */
 static m_alertDescription__org_patternfly_component_alert_AlertDescription() {
  AlertDescription.$clinit();
  return AlertDescription.$create__java_lang_String(null);
 }
 /** @nodts @return {AlertDescription} */
 static m_alertDescription__java_lang_String__org_patternfly_component_alert_AlertDescription(/** ?string */ text) {
  AlertDescription.$clinit();
  return AlertDescription.$create__java_lang_String(text);
 }
 /** @nodts @return {!AlertDescription} */
 static $create__java_lang_String(/** ?string */ text) {
  AlertDescription.$clinit();
  let $instance = new AlertDescription();
  $instance.$ctor__org_patternfly_component_alert_AlertDescription__java_lang_String__void(text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_alert_AlertDescription__java_lang_String__void(/** ?string */ text) {
  this.$ctor__org_patternfly_component_alert_AlertSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(AlertDescription.f_SUB_COMPONENT_NAME__org_patternfly_component_alert_AlertDescription, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_alert__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_description__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  if (!$Equality.$same(text, null)) {
   this.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text);
  }
 }
 /** @nodts @return {AlertDescription} */
 m_that__org_patternfly_component_alert_AlertDescription() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {AlertDescription} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_alert_AlertDescription();
 }
 /** @nodts */
 static $clinit() {
  AlertDescription.$clinit = () =>{};
  AlertDescription.$loadModules();
  AlertSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AlertDescription;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
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
AlertDescription.f_SUB_COMPONENT_NAME__org_patternfly_component_alert_AlertDescription = 'ad';
$Util.$setClassMetadata(AlertDescription, 'org.patternfly.component.alert.AlertDescription');

exports = AlertDescription;

//# sourceMappingURL=AlertDescription.js.map

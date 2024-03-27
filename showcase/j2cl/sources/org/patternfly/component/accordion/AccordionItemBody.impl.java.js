goog.module('org.patternfly.component.accordion.AccordionItemBody$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AccordionSubComponent = goog.require('org.patternfly.component.accordion.AccordionSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AccordionSubComponent<HTMLDivElement, AccordionItemBody>}
 */
class AccordionItemBody extends AccordionSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {AccordionItemBody} */
 static m_accordionItemBody__org_patternfly_component_accordion_AccordionItemBody() {
  AccordionItemBody.$clinit();
  return AccordionItemBody.$create__();
 }
 /** @nodts @return {!AccordionItemBody} */
 static $create__() {
  AccordionItemBody.$clinit();
  let $instance = new AccordionItemBody();
  $instance.$ctor__org_patternfly_component_accordion_AccordionItemBody__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_accordion_AccordionItemBody__void() {
  this.$ctor__org_patternfly_component_accordion_AccordionSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(AccordionItemBody.f_SUB_COMPONENT_NAME__org_patternfly_component_accordion_AccordionItemBody, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_accordion__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_expandableContent__org_patternfly_style_Classes, Classes.f_body__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {AccordionItemBody} */
 m_that__org_patternfly_component_accordion_AccordionItemBody() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {AccordionItemBody} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_accordion_AccordionItemBody();
 }
 /** @nodts */
 static $clinit() {
  AccordionItemBody.$clinit = () =>{};
  AccordionItemBody.$loadModules();
  AccordionSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AccordionItemBody;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
AccordionItemBody.f_SUB_COMPONENT_NAME__org_patternfly_component_accordion_AccordionItemBody = 'acicb';
$Util.$setClassMetadata(AccordionItemBody, 'org.patternfly.component.accordion.AccordionItemBody');

exports = AccordionItemBody;

//# sourceMappingURL=AccordionItemBody.js.map

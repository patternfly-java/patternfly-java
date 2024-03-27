goog.module('org.patternfly.component.hint.HintBody$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HintSubComponent = goog.require('org.patternfly.component.hint.HintSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HintSubComponent<HTMLDivElement, HintBody>}
 */
class HintBody extends HintSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {HintBody} */
 static m_hintBody__org_patternfly_component_hint_HintBody() {
  HintBody.$clinit();
  return HintBody.$create__();
 }
 /** @nodts @return {!HintBody} */
 static $create__() {
  HintBody.$clinit();
  let $instance = new HintBody();
  $instance.$ctor__org_patternfly_component_hint_HintBody__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_hint_HintBody__void() {
  this.$ctor__org_patternfly_component_hint_HintSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(HintBody.f_SUB_COMPONENT_NAME__org_patternfly_component_hint_HintBody, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_hint__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_body__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {HintBody} */
 m_that__org_patternfly_component_hint_HintBody() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {HintBody} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_hint_HintBody();
 }
 /** @nodts */
 static $clinit() {
  HintBody.$clinit = () =>{};
  HintBody.$loadModules();
  HintSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HintBody;
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
HintBody.f_SUB_COMPONENT_NAME__org_patternfly_component_hint_HintBody = 'hb';
$Util.$setClassMetadata(HintBody, 'org.patternfly.component.hint.HintBody');

exports = HintBody;

//# sourceMappingURL=HintBody.js.map

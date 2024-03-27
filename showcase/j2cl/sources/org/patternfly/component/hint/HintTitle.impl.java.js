goog.module('org.patternfly.component.hint.HintTitle$impl');

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
 * @extends {HintSubComponent<HTMLDivElement, HintTitle>}
 */
class HintTitle extends HintSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {HintTitle} */
 static m_hintTitle__org_patternfly_component_hint_HintTitle() {
  HintTitle.$clinit();
  return HintTitle.$create__();
 }
 /** @nodts @return {!HintTitle} */
 static $create__() {
  HintTitle.$clinit();
  let $instance = new HintTitle();
  $instance.$ctor__org_patternfly_component_hint_HintTitle__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_hint_HintTitle__void() {
  this.$ctor__org_patternfly_component_hint_HintSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(HintTitle.f_SUB_COMPONENT_NAME__org_patternfly_component_hint_HintTitle, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_hint__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_title__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {HintTitle} */
 m_that__org_patternfly_component_hint_HintTitle() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {HintTitle} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_hint_HintTitle();
 }
 /** @nodts */
 static $clinit() {
  HintTitle.$clinit = () =>{};
  HintTitle.$loadModules();
  HintSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HintTitle;
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
HintTitle.f_SUB_COMPONENT_NAME__org_patternfly_component_hint_HintTitle = 'ht';
$Util.$setClassMetadata(HintTitle, 'org.patternfly.component.hint.HintTitle');

exports = HintTitle;

//# sourceMappingURL=HintTitle.js.map

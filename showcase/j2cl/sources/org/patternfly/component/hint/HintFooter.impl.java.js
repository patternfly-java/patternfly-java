goog.module('org.patternfly.component.hint.HintFooter$impl');

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
 * @extends {HintSubComponent<HTMLDivElement, HintFooter>}
 */
class HintFooter extends HintSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {HintFooter} */
 static m_hintFooter__org_patternfly_component_hint_HintFooter() {
  HintFooter.$clinit();
  return HintFooter.$create__();
 }
 /** @nodts @return {!HintFooter} */
 static $create__() {
  HintFooter.$clinit();
  let $instance = new HintFooter();
  $instance.$ctor__org_patternfly_component_hint_HintFooter__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_hint_HintFooter__void() {
  this.$ctor__org_patternfly_component_hint_HintSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(HintFooter.f_SUB_COMPONENT_NAME__org_patternfly_component_hint_HintFooter, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_hint__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_footer__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {HintFooter} */
 m_that__org_patternfly_component_hint_HintFooter() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {HintFooter} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_hint_HintFooter();
 }
 /** @nodts */
 static $clinit() {
  HintFooter.$clinit = () =>{};
  HintFooter.$loadModules();
  HintSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HintFooter;
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
HintFooter.f_SUB_COMPONENT_NAME__org_patternfly_component_hint_HintFooter = 'hf';
$Util.$setClassMetadata(HintFooter, 'org.patternfly.component.hint.HintFooter');

exports = HintFooter;

//# sourceMappingURL=HintFooter.js.map

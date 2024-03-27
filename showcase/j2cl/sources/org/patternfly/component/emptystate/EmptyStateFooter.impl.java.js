goog.module('org.patternfly.component.emptystate.EmptyStateFooter$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EmptyStateSubComponent = goog.require('org.patternfly.component.emptystate.EmptyStateSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let EmptyStateActions = goog.forwardDeclare('org.patternfly.component.emptystate.EmptyStateActions$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {EmptyStateSubComponent<HTMLDivElement, EmptyStateFooter>}
 */
class EmptyStateFooter extends EmptyStateSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {EmptyStateFooter} */
 static m_emptyStateFooter__org_patternfly_component_emptystate_EmptyStateFooter() {
  EmptyStateFooter.$clinit();
  return EmptyStateFooter.$create__();
 }
 /** @nodts @return {!EmptyStateFooter} */
 static $create__() {
  EmptyStateFooter.$clinit();
  let $instance = new EmptyStateFooter();
  $instance.$ctor__org_patternfly_component_emptystate_EmptyStateFooter__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_emptystate_EmptyStateFooter__void() {
  this.$ctor__org_patternfly_component_emptystate_EmptyStateSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(EmptyStateFooter.f_SUB_COMPONENT_NAME__org_patternfly_component_emptystate_EmptyStateFooter, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_emptyState__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_footer__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {EmptyStateFooter} */
 m_addActions__org_patternfly_component_emptystate_EmptyStateActions__org_patternfly_component_emptystate_EmptyStateFooter(/** EmptyStateActions */ actions) {
  return /**@type {EmptyStateFooter}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(actions), EmptyStateFooter));
 }
 /** @nodts @return {EmptyStateFooter} */
 m_that__org_patternfly_component_emptystate_EmptyStateFooter() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {EmptyStateFooter} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_emptystate_EmptyStateFooter();
 }
 /** @nodts */
 static $clinit() {
  EmptyStateFooter.$clinit = () =>{};
  EmptyStateFooter.$loadModules();
  EmptyStateSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EmptyStateFooter;
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
EmptyStateFooter.f_SUB_COMPONENT_NAME__org_patternfly_component_emptystate_EmptyStateFooter = 'esb';
$Util.$setClassMetadata(EmptyStateFooter, 'org.patternfly.component.emptystate.EmptyStateFooter');

exports = EmptyStateFooter;

//# sourceMappingURL=EmptyStateFooter.js.map

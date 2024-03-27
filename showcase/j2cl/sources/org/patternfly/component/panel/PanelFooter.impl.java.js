goog.module('org.patternfly.component.panel.PanelFooter$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PanelSubComponent = goog.require('org.patternfly.component.panel.PanelSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PanelSubComponent<HTMLDivElement, PanelFooter>}
 */
class PanelFooter extends PanelSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {PanelFooter} */
 static m_panelFooter__org_patternfly_component_panel_PanelFooter() {
  PanelFooter.$clinit();
  return PanelFooter.$create__();
 }
 /** @nodts @return {!PanelFooter} */
 static $create__() {
  PanelFooter.$clinit();
  let $instance = new PanelFooter();
  $instance.$ctor__org_patternfly_component_panel_PanelFooter__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_panel_PanelFooter__void() {
  this.$ctor__org_patternfly_component_panel_PanelSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(PanelFooter.f_SUB_COMPONENT_NAME__org_patternfly_component_panel_PanelFooter, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_panel__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_footer__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {PanelFooter} */
 m_that__org_patternfly_component_panel_PanelFooter() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PanelFooter} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_panel_PanelFooter();
 }
 /** @nodts */
 static $clinit() {
  PanelFooter.$clinit = () =>{};
  PanelFooter.$loadModules();
  PanelSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PanelFooter;
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
PanelFooter.f_SUB_COMPONENT_NAME__org_patternfly_component_panel_PanelFooter = 'pf';
$Util.$setClassMetadata(PanelFooter, 'org.patternfly.component.panel.PanelFooter');

exports = PanelFooter;

//# sourceMappingURL=PanelFooter.js.map

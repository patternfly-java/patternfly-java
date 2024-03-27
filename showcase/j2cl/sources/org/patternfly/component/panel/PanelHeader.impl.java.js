goog.module('org.patternfly.component.panel.PanelHeader$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PanelSubComponent = goog.require('org.patternfly.component.panel.PanelSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PanelSubComponent<HTMLDivElement, PanelHeader>}
 */
class PanelHeader extends PanelSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_headerId__org_patternfly_component_panel_PanelHeader;
 }
 /** @nodts @return {PanelHeader} */
 static m_panelHeader__org_patternfly_component_panel_PanelHeader() {
  PanelHeader.$clinit();
  return PanelHeader.$create__();
 }
 /** @nodts @return {!PanelHeader} */
 static $create__() {
  PanelHeader.$clinit();
  let $instance = new PanelHeader();
  $instance.$ctor__org_patternfly_component_panel_PanelHeader__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_panel_PanelHeader__void() {
  this.$ctor__org_patternfly_component_panel_PanelSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(PanelHeader.f_SUB_COMPONENT_NAME__org_patternfly_component_panel_PanelHeader, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_panel__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_header__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_headerId__org_patternfly_component_panel_PanelHeader = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Panel__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['header'], j_l_String)));
  /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)).id = this.f_headerId__org_patternfly_component_panel_PanelHeader;
 }
 /** @nodts @return {PanelHeader} */
 m_that__org_patternfly_component_panel_PanelHeader() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {PanelHeader} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_panel_PanelHeader();
 }
 /** @nodts */
 static $clinit() {
  PanelHeader.$clinit = () =>{};
  PanelHeader.$loadModules();
  PanelSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PanelHeader;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
PanelHeader.f_SUB_COMPONENT_NAME__org_patternfly_component_panel_PanelHeader = 'ph';
$Util.$setClassMetadata(PanelHeader, 'org.patternfly.component.panel.PanelHeader');

exports = PanelHeader;

//# sourceMappingURL=PanelHeader.js.map

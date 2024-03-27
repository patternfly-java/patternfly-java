goog.module('org.patternfly.component.tabs.TabContentBody$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TabSubComponent = goog.require('org.patternfly.component.tabs.TabSubComponent$impl');
const Padding = goog.require('org.patternfly.style.Modifiers.Padding$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {TabSubComponent<HTMLElement, TabContentBody>}
 * @implements {Padding<HTMLElement, TabContentBody>}
 */
class TabContentBody extends TabSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {TabContentBody} */
 static m_tabContentBody__org_patternfly_component_tabs_TabContentBody() {
  TabContentBody.$clinit();
  return TabContentBody.$create__();
 }
 /** @nodts @return {!TabContentBody} */
 static $create__() {
  TabContentBody.$clinit();
  let $instance = new TabContentBody();
  $instance.$ctor__org_patternfly_component_tabs_TabContentBody__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_tabs_TabContentBody__void() {
  this.$ctor__org_patternfly_component_tabs_TabSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(TabContentBody.f_SUB_COMPONENT_NAME__org_patternfly_component_tabs_TabContentBody, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabContent__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_body__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @return {TabContentBody} */
 m_that__org_patternfly_component_tabs_TabContentBody() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {TabContentBody} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_tabs_TabContentBody();
 }
 //Bridge method.
 /** @final @override @nodts @return {TabContentBody} */
 m_padding__org_jboss_elemento_TypedBuilder() {
  return /**@type {TabContentBody}*/ ($Casts.$to(Padding.m_padding__$default__org_patternfly_style_Modifiers_Padding__org_jboss_elemento_TypedBuilder(this), TabContentBody));
 }
 //Bridge method.
 /** @final @override @nodts @return {TabContentBody} */
 m_padding__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {TabContentBody}*/ ($Casts.$to(Padding.m_padding__$default__org_patternfly_style_Modifiers_Padding__boolean__org_jboss_elemento_TypedBuilder(this, arg0), TabContentBody));
 }
 //Default method forwarding stub.
 /** @nodts @return {TabContentBody} */
 m_padding__org_patternfly_component_tabs_TabContentBody() {
  return /**@type {TabContentBody}*/ ($Casts.$to(Padding.m_padding__$default__org_patternfly_style_Modifiers_Padding__org_jboss_elemento_TypedBuilder(this), TabContentBody));
 }
 //Default method forwarding stub.
 /** @nodts @return {TabContentBody} */
 m_padding__boolean__org_patternfly_component_tabs_TabContentBody(/** boolean */ arg0) {
  return /**@type {TabContentBody}*/ ($Casts.$to(Padding.m_padding__$default__org_patternfly_style_Modifiers_Padding__boolean__org_jboss_elemento_TypedBuilder(this, arg0), TabContentBody));
 }
 /** @nodts */
 static $clinit() {
  TabContentBody.$clinit = () =>{};
  TabContentBody.$loadModules();
  TabSubComponent.$clinit();
  Padding.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TabContentBody;
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
TabContentBody.f_SUB_COMPONENT_NAME__org_patternfly_component_tabs_TabContentBody = 'tcb';
Padding.$markImplementor(TabContentBody);
$Util.$setClassMetadata(TabContentBody, 'org.patternfly.component.tabs.TabContentBody');

exports = TabContentBody;

//# sourceMappingURL=TabContentBody.js.map

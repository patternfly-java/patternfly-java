goog.module('org.patternfly.component.menu.MenuFooter$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SubComponent<HTMLDivElement, MenuFooter>}
 */
class MenuFooter extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {MenuFooter} */
 static m_menuFooter__org_patternfly_component_menu_MenuFooter() {
  MenuFooter.$clinit();
  return MenuFooter.$create__java_lang_String(null);
 }
 /** @nodts @return {MenuFooter} */
 static m_menuFooter__java_lang_String__org_patternfly_component_menu_MenuFooter(/** ?string */ text) {
  MenuFooter.$clinit();
  return MenuFooter.$create__java_lang_String(text);
 }
 /** @nodts @return {!MenuFooter} */
 static $create__java_lang_String(/** ?string */ text) {
  MenuFooter.$clinit();
  let $instance = new MenuFooter();
  $instance.$ctor__org_patternfly_component_menu_MenuFooter__java_lang_String__void(text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_MenuFooter__java_lang_String__void(/** ?string */ text) {
  this.$ctor__org_patternfly_component_SubComponent__org_patternfly_component_ComponentType__java_lang_String__elemental2_dom_HTMLElement__void(ComponentType.f_Menu__org_patternfly_component_ComponentType, MenuFooter.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuFooter, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_footer__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  if (!$Equality.$same(text, null)) {
   this.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text);
  }
 }
 /** @nodts @return {MenuFooter} */
 m_that__org_patternfly_component_menu_MenuFooter() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuFooter} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_MenuFooter();
 }
 /** @nodts */
 static $clinit() {
  MenuFooter.$clinit = () =>{};
  MenuFooter.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MenuFooter;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
MenuFooter.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuFooter = 'mf';
$Util.$setClassMetadata(MenuFooter, 'org.patternfly.component.menu.MenuFooter');

exports = MenuFooter;

//# sourceMappingURL=MenuFooter.js.map

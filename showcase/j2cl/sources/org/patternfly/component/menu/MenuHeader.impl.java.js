goog.module('org.patternfly.component.menu.MenuHeader$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MenuSubComponent = goog.require('org.patternfly.component.menu.MenuSubComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {MenuSubComponent<HTMLDivElement, MenuHeader>}
 */
class MenuHeader extends MenuSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {MenuHeader} */
 static m_menuHeader__org_patternfly_component_menu_MenuHeader() {
  MenuHeader.$clinit();
  return MenuHeader.$create__java_lang_String(null);
 }
 /** @nodts @return {MenuHeader} */
 static m_menuHeader__java_lang_String__org_patternfly_component_menu_MenuHeader(/** ?string */ text) {
  MenuHeader.$clinit();
  return MenuHeader.$create__java_lang_String(text);
 }
 /** @nodts @return {!MenuHeader} */
 static $create__java_lang_String(/** ?string */ text) {
  MenuHeader.$clinit();
  let $instance = new MenuHeader();
  $instance.$ctor__org_patternfly_component_menu_MenuHeader__java_lang_String__void(text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_MenuHeader__java_lang_String__void(/** ?string */ text) {
  this.$ctor__org_patternfly_component_menu_MenuSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(MenuHeader.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuHeader, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_menu__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_header__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  if (!$Equality.$same(text, null)) {
   this.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text);
  }
 }
 /** @nodts @return {MenuHeader} */
 m_that__org_patternfly_component_menu_MenuHeader() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {MenuHeader} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_menu_MenuHeader();
 }
 /** @nodts */
 static $clinit() {
  MenuHeader.$clinit = () =>{};
  MenuHeader.$loadModules();
  MenuSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MenuHeader;
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
MenuHeader.f_SUB_COMPONENT_NAME__org_patternfly_component_menu_MenuHeader = 'mh';
$Util.$setClassMetadata(MenuHeader, 'org.patternfly.component.menu.MenuHeader');

exports = MenuHeader;

//# sourceMappingURL=MenuHeader.js.map

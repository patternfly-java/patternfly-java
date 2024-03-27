goog.module('org.patternfly.icon.InlineIcon$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HTMLContainerBuilder = goog.require('org.jboss.elemento.HTMLContainerBuilder$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HTMLContainerBuilder<HTMLElement>}
 */
class InlineIcon extends HTMLContainerBuilder {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {InlineIcon} */
 static m_inlineIcon__java_lang_String__org_patternfly_icon_InlineIcon(/** ?string */ iconClass) {
  InlineIcon.$clinit();
  return InlineIcon.$create__java_lang_String(iconClass);
 }
 /** @nodts @return {!InlineIcon} */
 static $create__java_lang_String(/** ?string */ iconClass) {
  InlineIcon.$clinit();
  let $instance = new InlineIcon();
  $instance.$ctor__org_patternfly_icon_InlineIcon__java_lang_String__void(iconClass);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_icon_InlineIcon__java_lang_String__void(/** ?string */ iconClass) {
  this.$ctor__org_jboss_elemento_HTMLContainerBuilder__elemental2_dom_HTMLElement__void(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_i__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([iconClass], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {InlineIcon} */
 m_that__org_patternfly_icon_InlineIcon() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {InlineIcon} */
 m_that__org_jboss_elemento_HTMLContainerBuilder() {
  return this.m_that__org_patternfly_icon_InlineIcon();
 }
 /** @nodts */
 static $clinit() {
  InlineIcon.$clinit = () =>{};
  InlineIcon.$loadModules();
  HTMLContainerBuilder.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InlineIcon;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(InlineIcon, 'org.patternfly.icon.InlineIcon');

exports = InlineIcon;

//# sourceMappingURL=InlineIcon.js.map

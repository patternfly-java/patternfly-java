goog.module('org.patternfly.layout.level.LevelItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseLayout = goog.require('org.patternfly.layout.BaseLayout$impl');
const Fill = goog.require('org.patternfly.style.Modifiers.Fill$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseLayout<HTMLElement, LevelItem>}
 * @implements {Fill<HTMLElement, LevelItem>}
 */
class LevelItem extends BaseLayout {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {LevelItem} */
 static m_levelItem__org_patternfly_layout_level_LevelItem() {
  LevelItem.$clinit();
  return LevelItem.$create__org_jboss_elemento_HTMLContainerBuilder(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder());
 }
 /** @nodts @template E @return {LevelItem} */
 static m_levelItem__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_layout_level_LevelItem(/** HTMLContainerBuilder<E> */ builder) {
  LevelItem.$clinit();
  return LevelItem.$create__org_jboss_elemento_HTMLContainerBuilder(builder);
 }
 /** @nodts @template E @return {!LevelItem} */
 static $create__org_jboss_elemento_HTMLContainerBuilder(/** HTMLContainerBuilder<E> */ builder) {
  LevelItem.$clinit();
  let $instance = new LevelItem();
  $instance.$ctor__org_patternfly_layout_level_LevelItem__org_jboss_elemento_HTMLContainerBuilder__void(builder);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_layout_level_LevelItem__org_jboss_elemento_HTMLContainerBuilder__void(/** HTMLContainerBuilder<E> */ builder) {
  this.$ctor__org_patternfly_layout_BaseLayout__elemental2_dom_HTMLElement__void(/**@type {HTMLElement}*/ (/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_layout__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_level__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()));
 }
 /** @nodts @return {LevelItem} */
 m_that__org_patternfly_layout_level_LevelItem() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {LevelItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_layout_level_LevelItem();
 }
 //Bridge method.
 /** @final @override @nodts @return {LevelItem} */
 m_fill__org_jboss_elemento_TypedBuilder() {
  return /**@type {LevelItem}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__org_jboss_elemento_TypedBuilder(this), LevelItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {LevelItem} */
 m_fill__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {LevelItem}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), LevelItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {LevelItem} */
 m_fill__org_patternfly_layout_level_LevelItem() {
  return /**@type {LevelItem}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__org_jboss_elemento_TypedBuilder(this), LevelItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {LevelItem} */
 m_fill__boolean__org_patternfly_layout_level_LevelItem(/** boolean */ arg0) {
  return /**@type {LevelItem}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__boolean__org_jboss_elemento_TypedBuilder(this, arg0), LevelItem));
 }
 /** @nodts */
 static $clinit() {
  LevelItem.$clinit = () =>{};
  LevelItem.$loadModules();
  BaseLayout.$clinit();
  Fill.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LevelItem;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Fill.$markImplementor(LevelItem);
$Util.$setClassMetadata(LevelItem, 'org.patternfly.layout.level.LevelItem');

exports = LevelItem;

//# sourceMappingURL=LevelItem.js.map

goog.module('org.patternfly.layout.level.Level$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseLayout = goog.require('org.patternfly.layout.BaseLayout$impl');
const Gutter = goog.require('org.patternfly.style.Modifiers.Gutter$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let LevelItem = goog.forwardDeclare('org.patternfly.layout.level.LevelItem$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseLayout<HTMLElement, Level>}
 * @implements {Gutter<HTMLElement, Level>}
 */
class Level extends BaseLayout {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Level} */
 static m_level__org_patternfly_layout_level_Level() {
  Level.$clinit();
  return Level.$create__org_jboss_elemento_HTMLContainerBuilder(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder());
 }
 /** @nodts @template E @return {Level} */
 static m_level__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_layout_level_Level(/** HTMLContainerBuilder<E> */ builder) {
  Level.$clinit();
  return Level.$create__org_jboss_elemento_HTMLContainerBuilder(builder);
 }
 /** @nodts @template E @return {!Level} */
 static $create__org_jboss_elemento_HTMLContainerBuilder(/** HTMLContainerBuilder<E> */ builder) {
  Level.$clinit();
  let $instance = new Level();
  $instance.$ctor__org_patternfly_layout_level_Level__org_jboss_elemento_HTMLContainerBuilder__void(builder);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_layout_level_Level__org_jboss_elemento_HTMLContainerBuilder__void(/** HTMLContainerBuilder<E> */ builder) {
  this.$ctor__org_patternfly_layout_BaseLayout__elemental2_dom_HTMLElement__void(/**@type {HTMLElement}*/ (/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_layout__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_level__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()));
 }
 /** @nodts @return {Level} */
 m_addItem__org_patternfly_layout_level_LevelItem__org_patternfly_layout_level_Level(/** LevelItem */ item) {
  return /**@type {Level}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(item), Level));
 }
 /** @nodts @return {Level} */
 m_that__org_patternfly_layout_level_Level() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Level} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_layout_level_Level();
 }
 //Bridge method.
 /** @final @override @nodts @return {Level} */
 m_gutter__org_jboss_elemento_TypedBuilder() {
  return /**@type {Level}*/ ($Casts.$to(Gutter.m_gutter__$default__org_patternfly_style_Modifiers_Gutter__org_jboss_elemento_TypedBuilder(this), Level));
 }
 //Bridge method.
 /** @final @override @nodts @return {Level} */
 m_gutter__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Level}*/ ($Casts.$to(Gutter.m_gutter__$default__org_patternfly_style_Modifiers_Gutter__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Level));
 }
 //Default method forwarding stub.
 /** @nodts @return {Level} */
 m_gutter__org_patternfly_layout_level_Level() {
  return /**@type {Level}*/ ($Casts.$to(Gutter.m_gutter__$default__org_patternfly_style_Modifiers_Gutter__org_jboss_elemento_TypedBuilder(this), Level));
 }
 //Default method forwarding stub.
 /** @nodts @return {Level} */
 m_gutter__boolean__org_patternfly_layout_level_Level(/** boolean */ arg0) {
  return /**@type {Level}*/ ($Casts.$to(Gutter.m_gutter__$default__org_patternfly_style_Modifiers_Gutter__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Level));
 }
 /** @nodts */
 static $clinit() {
  Level.$clinit = () =>{};
  Level.$loadModules();
  BaseLayout.$clinit();
  Gutter.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Level;
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
Gutter.$markImplementor(Level);
$Util.$setClassMetadata(Level, 'org.patternfly.layout.level.Level');

exports = Level;

//# sourceMappingURL=Level.js.map

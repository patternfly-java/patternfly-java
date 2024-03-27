goog.module('org.patternfly.layout.split.Split$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseLayout = goog.require('org.patternfly.layout.BaseLayout$impl');
const Gutter = goog.require('org.patternfly.style.Modifiers.Gutter$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let SplitItem = goog.forwardDeclare('org.patternfly.layout.split.SplitItem$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseLayout<HTMLElement, Split>}
 * @implements {Gutter<HTMLElement, Split>}
 */
class Split extends BaseLayout {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Split} */
 static m_split__org_patternfly_layout_split_Split() {
  Split.$clinit();
  return Split.$create__org_jboss_elemento_HTMLContainerBuilder(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder());
 }
 /** @nodts @template E @return {Split} */
 static m_split__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_layout_split_Split(/** HTMLContainerBuilder<E> */ builder) {
  Split.$clinit();
  return Split.$create__org_jboss_elemento_HTMLContainerBuilder(builder);
 }
 /** @nodts @template E @return {!Split} */
 static $create__org_jboss_elemento_HTMLContainerBuilder(/** HTMLContainerBuilder<E> */ builder) {
  Split.$clinit();
  let $instance = new Split();
  $instance.$ctor__org_patternfly_layout_split_Split__org_jboss_elemento_HTMLContainerBuilder__void(builder);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_layout_split_Split__org_jboss_elemento_HTMLContainerBuilder__void(/** HTMLContainerBuilder<E> */ builder) {
  this.$ctor__org_patternfly_layout_BaseLayout__elemental2_dom_HTMLElement__void(/**@type {HTMLElement}*/ (/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_layout__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_split__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()));
 }
 /** @nodts @return {Split} */
 m_addItem__org_patternfly_layout_split_SplitItem__org_patternfly_layout_split_Split(/** SplitItem */ item) {
  return /**@type {Split}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(item), Split));
 }
 /** @nodts @return {Split} */
 m_wrap__org_patternfly_layout_split_Split() {
  return /**@type {Split}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_wrap__org_patternfly_style_Classes)], j_l_String))), Split));
 }
 /** @nodts @return {Split} */
 m_that__org_patternfly_layout_split_Split() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Split} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_layout_split_Split();
 }
 //Bridge method.
 /** @final @override @nodts @return {Split} */
 m_gutter__org_jboss_elemento_TypedBuilder() {
  return /**@type {Split}*/ ($Casts.$to(Gutter.m_gutter__$default__org_patternfly_style_Modifiers_Gutter__org_jboss_elemento_TypedBuilder(this), Split));
 }
 //Bridge method.
 /** @final @override @nodts @return {Split} */
 m_gutter__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Split}*/ ($Casts.$to(Gutter.m_gutter__$default__org_patternfly_style_Modifiers_Gutter__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Split));
 }
 //Default method forwarding stub.
 /** @nodts @return {Split} */
 m_gutter__org_patternfly_layout_split_Split() {
  return /**@type {Split}*/ ($Casts.$to(Gutter.m_gutter__$default__org_patternfly_style_Modifiers_Gutter__org_jboss_elemento_TypedBuilder(this), Split));
 }
 //Default method forwarding stub.
 /** @nodts @return {Split} */
 m_gutter__boolean__org_patternfly_layout_split_Split(/** boolean */ arg0) {
  return /**@type {Split}*/ ($Casts.$to(Gutter.m_gutter__$default__org_patternfly_style_Modifiers_Gutter__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Split));
 }
 /** @nodts */
 static $clinit() {
  Split.$clinit = () =>{};
  Split.$loadModules();
  BaseLayout.$clinit();
  Gutter.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Split;
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
Gutter.$markImplementor(Split);
$Util.$setClassMetadata(Split, 'org.patternfly.layout.split.Split');

exports = Split;

//# sourceMappingURL=Split.js.map

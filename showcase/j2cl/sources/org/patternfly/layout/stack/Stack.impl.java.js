goog.module('org.patternfly.layout.stack.Stack$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseLayout = goog.require('org.patternfly.layout.BaseLayout$impl');
const Gutter = goog.require('org.patternfly.style.Modifiers.Gutter$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let StackItem = goog.forwardDeclare('org.patternfly.layout.stack.StackItem$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseLayout<HTMLElement, Stack>}
 * @implements {Gutter<HTMLElement, Stack>}
 */
class Stack extends BaseLayout {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Stack} */
 static m_stack__org_patternfly_layout_stack_Stack() {
  Stack.$clinit();
  return Stack.$create__org_jboss_elemento_HTMLContainerBuilder(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder());
 }
 /** @nodts @template E @return {Stack} */
 static m_stack__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_layout_stack_Stack(/** HTMLContainerBuilder<E> */ builder) {
  Stack.$clinit();
  return Stack.$create__org_jboss_elemento_HTMLContainerBuilder(builder);
 }
 /** @nodts @template E @return {!Stack} */
 static $create__org_jboss_elemento_HTMLContainerBuilder(/** HTMLContainerBuilder<E> */ builder) {
  Stack.$clinit();
  let $instance = new Stack();
  $instance.$ctor__org_patternfly_layout_stack_Stack__org_jboss_elemento_HTMLContainerBuilder__void(builder);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_layout_stack_Stack__org_jboss_elemento_HTMLContainerBuilder__void(/** HTMLContainerBuilder<E> */ builder) {
  this.$ctor__org_patternfly_layout_BaseLayout__elemental2_dom_HTMLElement__void(/**@type {HTMLElement}*/ (/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_layout__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_stack__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()));
 }
 /** @nodts @return {Stack} */
 m_addItem__org_patternfly_layout_stack_StackItem__org_patternfly_layout_stack_Stack(/** StackItem */ item) {
  return /**@type {Stack}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(item), Stack));
 }
 /** @nodts @return {Stack} */
 m_that__org_patternfly_layout_stack_Stack() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Stack} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_layout_stack_Stack();
 }
 //Bridge method.
 /** @final @override @nodts @return {Stack} */
 m_gutter__org_jboss_elemento_TypedBuilder() {
  return /**@type {Stack}*/ ($Casts.$to(Gutter.m_gutter__$default__org_patternfly_style_Modifiers_Gutter__org_jboss_elemento_TypedBuilder(this), Stack));
 }
 //Bridge method.
 /** @final @override @nodts @return {Stack} */
 m_gutter__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {Stack}*/ ($Casts.$to(Gutter.m_gutter__$default__org_patternfly_style_Modifiers_Gutter__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Stack));
 }
 //Default method forwarding stub.
 /** @nodts @return {Stack} */
 m_gutter__org_patternfly_layout_stack_Stack() {
  return /**@type {Stack}*/ ($Casts.$to(Gutter.m_gutter__$default__org_patternfly_style_Modifiers_Gutter__org_jboss_elemento_TypedBuilder(this), Stack));
 }
 //Default method forwarding stub.
 /** @nodts @return {Stack} */
 m_gutter__boolean__org_patternfly_layout_stack_Stack(/** boolean */ arg0) {
  return /**@type {Stack}*/ ($Casts.$to(Gutter.m_gutter__$default__org_patternfly_style_Modifiers_Gutter__boolean__org_jboss_elemento_TypedBuilder(this, arg0), Stack));
 }
 /** @nodts */
 static $clinit() {
  Stack.$clinit = () =>{};
  Stack.$loadModules();
  BaseLayout.$clinit();
  Gutter.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Stack;
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
Gutter.$markImplementor(Stack);
$Util.$setClassMetadata(Stack, 'org.patternfly.layout.stack.Stack');

exports = Stack;

//# sourceMappingURL=Stack.js.map

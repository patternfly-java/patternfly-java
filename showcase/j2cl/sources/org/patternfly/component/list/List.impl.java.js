goog.module('org.patternfly.component.list.List$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Bordered = goog.require('org.patternfly.style.Modifiers.Bordered$impl');
const Inline = goog.require('org.patternfly.style.Modifiers.Inline$impl');
const Plain = goog.require('org.patternfly.style.Modifiers.Plain$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let ListItem = goog.forwardDeclare('org.patternfly.component.list.ListItem$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, List>}
 * @implements {Bordered<HTMLElement, List>}
 * @implements {Inline<HTMLElement, List>}
 * @implements {Plain<HTMLElement, List>}
 */
class List extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {List} */
 static m_list__org_patternfly_component_list_List() {
  List.$clinit();
  return List.$create__org_jboss_elemento_HTMLContainerBuilder(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder());
 }
 /** @nodts @template E @return {List} */
 static m_list__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_list_List(/** HTMLContainerBuilder<E> */ builder) {
  List.$clinit();
  return List.$create__org_jboss_elemento_HTMLContainerBuilder(builder);
 }
 /** @nodts @template E @return {!List} */
 static $create__org_jboss_elemento_HTMLContainerBuilder(/** HTMLContainerBuilder<E> */ builder) {
  List.$clinit();
  let $instance = new List();
  $instance.$ctor__org_patternfly_component_list_List__org_jboss_elemento_HTMLContainerBuilder__void(builder);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_component_list_List__org_jboss_elemento_HTMLContainerBuilder__void(/** HTMLContainerBuilder<E> */ builder) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_List__org_patternfly_component_ComponentType, /**@type {HTMLElement}*/ (/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_list__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'list'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()));
 }
 /** @nodts @return {List} */
 m_addItem__org_patternfly_component_list_ListItem__org_patternfly_component_list_List(/** ListItem */ item) {
  return /**@type {List}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(item), List));
 }
 /** @nodts @return {List} */
 m_largeIcons__org_patternfly_component_list_List() {
  return /**@type {List}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__org_patternfly_style_Size__java_lang_String(Classes.f_icon__org_patternfly_style_Classes, Size.f_lg__org_patternfly_style_Size)], j_l_String))), List));
 }
 /** @nodts @return {List} */
 m_that__org_patternfly_component_list_List() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {List} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_list_List();
 }
 //Bridge method.
 /** @final @override @nodts @return {List} */
 m_bordered__org_jboss_elemento_TypedBuilder() {
  return /**@type {List}*/ ($Casts.$to(Bordered.m_bordered__$default__org_patternfly_style_Modifiers_Bordered__org_jboss_elemento_TypedBuilder(this), List));
 }
 //Bridge method.
 /** @final @override @nodts @return {List} */
 m_bordered__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {List}*/ ($Casts.$to(Bordered.m_bordered__$default__org_patternfly_style_Modifiers_Bordered__boolean__org_jboss_elemento_TypedBuilder(this, arg0), List));
 }
 //Bridge method.
 /** @final @override @nodts @return {List} */
 m_inline__org_jboss_elemento_TypedBuilder() {
  return /**@type {List}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__org_jboss_elemento_TypedBuilder(this), List));
 }
 //Bridge method.
 /** @final @override @nodts @return {List} */
 m_inline__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {List}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__boolean__org_jboss_elemento_TypedBuilder(this, arg0), List));
 }
 //Bridge method.
 /** @final @override @nodts @return {List} */
 m_plain__org_jboss_elemento_TypedBuilder() {
  return /**@type {List}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), List));
 }
 //Bridge method.
 /** @final @override @nodts @return {List} */
 m_plain__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {List}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), List));
 }
 //Default method forwarding stub.
 /** @nodts @return {List} */
 m_bordered__org_patternfly_component_list_List() {
  return /**@type {List}*/ ($Casts.$to(Bordered.m_bordered__$default__org_patternfly_style_Modifiers_Bordered__org_jboss_elemento_TypedBuilder(this), List));
 }
 //Default method forwarding stub.
 /** @nodts @return {List} */
 m_bordered__boolean__org_patternfly_component_list_List(/** boolean */ arg0) {
  return /**@type {List}*/ ($Casts.$to(Bordered.m_bordered__$default__org_patternfly_style_Modifiers_Bordered__boolean__org_jboss_elemento_TypedBuilder(this, arg0), List));
 }
 //Default method forwarding stub.
 /** @nodts @return {List} */
 m_inline__org_patternfly_component_list_List() {
  return /**@type {List}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__org_jboss_elemento_TypedBuilder(this), List));
 }
 //Default method forwarding stub.
 /** @nodts @return {List} */
 m_inline__boolean__org_patternfly_component_list_List(/** boolean */ arg0) {
  return /**@type {List}*/ ($Casts.$to(Inline.m_inline__$default__org_patternfly_style_Modifiers_Inline__boolean__org_jboss_elemento_TypedBuilder(this, arg0), List));
 }
 //Default method forwarding stub.
 /** @nodts @return {List} */
 m_plain__org_patternfly_component_list_List() {
  return /**@type {List}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__org_jboss_elemento_TypedBuilder(this), List));
 }
 //Default method forwarding stub.
 /** @nodts @return {List} */
 m_plain__boolean__org_patternfly_component_list_List(/** boolean */ arg0) {
  return /**@type {List}*/ ($Casts.$to(Plain.m_plain__$default__org_patternfly_style_Modifiers_Plain__boolean__org_jboss_elemento_TypedBuilder(this, arg0), List));
 }
 /** @nodts */
 static $clinit() {
  List.$clinit = () =>{};
  List.$loadModules();
  BaseComponent.$clinit();
  Bordered.$clinit();
  Inline.$clinit();
  Plain.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof List;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Bordered.$markImplementor(List);
Inline.$markImplementor(List);
Plain.$markImplementor(List);
$Util.$setClassMetadata(List, 'org.patternfly.component.list.List');

exports = List;

//# sourceMappingURL=List.js.map

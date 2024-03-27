goog.module('org.patternfly.component.list.ListItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const WithIcon = goog.require('org.patternfly.component.WithIcon$impl');
const WithText = goog.require('org.patternfly.component.WithText$impl');
const ListSubComponent = goog.require('org.patternfly.component.list.ListSubComponent$impl');

let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ListSubComponent<HTMLLIElement, ListItem>}
 * @implements {WithText<HTMLLIElement, ListItem>}
 * @implements {WithIcon<HTMLLIElement, ListItem>}
 */
class ListItem extends ListSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_list_ListItem_;
 }
 /** @nodts @return {ListItem} */
 static m_listItem__org_patternfly_component_list_ListItem() {
  ListItem.$clinit();
  return ListItem.$create__();
 }
 /** @nodts @return {!ListItem} */
 static $create__() {
  ListItem.$clinit();
  let $instance = new ListItem();
  $instance.$ctor__org_patternfly_component_list_ListItem__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_list_ListItem__void() {
  this.$ctor__org_patternfly_component_list_ListSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(ListItem.f_SUB_COMPONENT_NAME__org_patternfly_component_list_ListItem, /**@type {HTMLLIElement}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
 }
 /** @nodts @return {ListItem} */
 m_icon__elemental2_dom_Element__org_patternfly_component_list_ListItem(/** Element */ icon) {
  this.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_list__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String)));
  this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_list_ListItem().appendChild(icon);
  return this;
 }
 /** @nodts @return {ListItem} */
 m_removeIcon__org_patternfly_component_list_ListItem() {
  this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_list__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String)));
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_list_ListItem());
  this.f_iconContainer__org_patternfly_component_list_ListItem_ = null;
  return this;
 }
 /** @nodts @return {ListItem} */
 m_text__java_lang_String__org_patternfly_component_list_ListItem(/** ?string */ text) {
  return /**@type {ListItem}*/ ($Casts.$to(this.m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(text), ListItem));
 }
 /** @nodts @return {ListItem} */
 m_that__org_patternfly_component_list_ListItem() {
  return this;
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_list_ListItem() {
  if ($Equality.$same(this.f_iconContainer__org_patternfly_component_list_ListItem_, null)) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)), this.f_iconContainer__org_patternfly_component_list_ListItem_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_list__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  }
  return this.f_iconContainer__org_patternfly_component_list_ListItem_;
 }
 //Bridge method.
 /** @final @override @nodts @return {ListItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_list_ListItem();
 }
 //Bridge method.
 /** @final @override @nodts @return {ListItem} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_list_ListItem(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {ListItem} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {ListItem}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_component_WithIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), ListItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {ListItem} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_list_ListItem(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {ListItem} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_list_ListItem();
 }
 //Default method forwarding stub.
 /** @nodts @return {ListItem} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_list_ListItem(/** PredefinedIcon */ arg0) {
  return /**@type {ListItem}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_component_WithIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), ListItem));
 }
 /** @nodts */
 static $clinit() {
  ListItem.$clinit = () =>{};
  ListItem.$loadModules();
  ListSubComponent.$clinit();
  WithIcon.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ListItem;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
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
ListItem.f_SUB_COMPONENT_NAME__org_patternfly_component_list_ListItem = 'li';
WithText.$markImplementor(ListItem);
WithIcon.$markImplementor(ListItem);
$Util.$setClassMetadata(ListItem, 'org.patternfly.component.list.ListItem');

exports = ListItem;

//# sourceMappingURL=ListItem.js.map

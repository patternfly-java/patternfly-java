goog.module('org.patternfly.component.navigation.NavigationGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const WithText = goog.require('org.patternfly.component.WithText$impl');
const NavigationSubComponent = goog.require('org.patternfly.component.navigation.NavigationSubComponent$impl');
const ElementDelegate = goog.require('org.patternfly.core.ElementDelegate$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Divider = goog.forwardDeclare('org.patternfly.component.divider.Divider$impl');
let DividerType = goog.forwardDeclare('org.patternfly.component.divider.DividerType$impl');
let NavigationItem = goog.forwardDeclare('org.patternfly.component.navigation.NavigationItem$impl');
let NavigationLinkText = goog.forwardDeclare('org.patternfly.component.navigation.NavigationLinkText$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {NavigationSubComponent<HTMLElement, NavigationGroup>}
 * @implements {WithText<HTMLElement, NavigationGroup>}
 * @implements {ElementDelegate<HTMLElement, NavigationGroup>}
 */
class NavigationGroup extends NavigationSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_component_navigation_NavigationGroup;
  /**@type {Map<?string, NavigationItem>} @nodts*/
  this.f_items__org_patternfly_component_navigation_NavigationGroup_;
  /**@type {HTMLHeadingElement} @nodts*/
  this.f_heading__org_patternfly_component_navigation_NavigationGroup_;
  /**@type {HTMLUListElement} @nodts*/
  this.f_ul__org_patternfly_component_navigation_NavigationGroup_;
  /**@type {NavigationLinkText} @nodts*/
  this.f_text__org_patternfly_component_navigation_NavigationGroup_;
 }
 /** @nodts @return {NavigationGroup} */
 static m_navigationGroup__java_lang_String__org_patternfly_component_navigation_NavigationGroup(/** ?string */ id) {
  NavigationGroup.$clinit();
  return NavigationGroup.$create__java_lang_String(id);
 }
 /** @nodts @return {NavigationGroup} */
 static m_navigationGroup__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationGroup(/** ?string */ id, /** ?string */ text) {
  NavigationGroup.$clinit();
  return NavigationGroup.$create__java_lang_String(id).m_text__java_lang_String__org_patternfly_component_navigation_NavigationGroup(text);
 }
 /** @nodts @return {!NavigationGroup} */
 static $create__java_lang_String(/** ?string */ id) {
  NavigationGroup.$clinit();
  let $instance = new NavigationGroup();
  $instance.$ctor__org_patternfly_component_navigation_NavigationGroup__java_lang_String__void(id);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_navigation_NavigationGroup__java_lang_String__void(/** ?string */ id) {
  this.$ctor__org_patternfly_component_navigation_NavigationSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(NavigationGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_navigation_NavigationGroup, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_section__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_section__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_navigationGroup__org_patternfly_core_Dataset, id), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  this.f_id__org_patternfly_component_navigation_NavigationGroup = id;
  this.f_items__org_patternfly_component_navigation_NavigationGroup_ = /**@type {!HashMap<?string, NavigationItem>}*/ (HashMap.$create__());
  this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_heading__org_patternfly_component_navigation_NavigationGroup_ = /**@type {HTMLHeadingElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int__org_jboss_elemento_HTMLContainerBuilder(2).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_section__org_patternfly_style_Classes, Classes.f_title__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_ul__org_patternfly_component_navigation_NavigationGroup_ = /**@type {HTMLUListElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_list__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'list'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)));
 }
 /** @override @nodts @return {HTMLElement} */
 m_delegate__elemental2_dom_HTMLElement() {
  return this.f_heading__org_patternfly_component_navigation_NavigationGroup_;
 }
 /** @nodts @template T @return {NavigationGroup} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_navigation_NavigationGroup(/** Iterable<T> */ items, /** j_u_function_Function<T, NavigationItem> */ display) {
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let navigationItem = /**@type {NavigationItem}*/ ($Casts.$to(display.m_apply__java_lang_Object__java_lang_Object(item), NavigationItem));
    this.m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_NavigationGroup(navigationItem);
   }
  }
  return this;
 }
 /** @nodts @return {NavigationGroup} */
 m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_NavigationGroup(/** NavigationItem */ item) {
  return this.m_add__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_NavigationGroup(item);
 }
 /** @nodts @return {NavigationGroup} */
 m_add__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_NavigationGroup(/** NavigationItem */ item) {
  this.m_internalAddItem__org_patternfly_component_navigation_NavigationItem__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_NavigationGroup(item, Consumer.$adapt((itm) =>{
   let itm_1 = /**@type {NavigationItem}*/ ($Casts.$to(itm, NavigationItem));
   this.f_ul__org_patternfly_component_navigation_NavigationGroup_.appendChild(/**@type {HTMLLIElement}*/ ($Casts.$to(itm_1.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  }));
  return this;
 }
 /** @nodts @return {NavigationGroup} */
 m_addDivider__org_patternfly_component_navigation_NavigationGroup() {
  return this.m_add__org_patternfly_component_divider_Divider__org_patternfly_component_navigation_NavigationGroup(Divider.m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(DividerType.f_li__org_patternfly_component_divider_DividerType));
 }
 /** @nodts @return {NavigationGroup} */
 m_add__org_patternfly_component_divider_Divider__org_patternfly_component_navigation_NavigationGroup(/** Divider */ divider) {
  this.f_ul__org_patternfly_component_navigation_NavigationGroup_.appendChild(divider.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {NavigationGroup} */
 m_addLinkText__org_patternfly_component_navigation_NavigationLinkText__org_patternfly_component_navigation_NavigationGroup(/** NavigationLinkText */ text) {
  return this.m_add__org_patternfly_component_navigation_NavigationLinkText__org_patternfly_component_navigation_NavigationGroup(text);
 }
 /** @nodts @return {NavigationGroup} */
 m_add__org_patternfly_component_navigation_NavigationLinkText__org_patternfly_component_navigation_NavigationGroup(/** NavigationLinkText */ text) {
  this.f_text__org_patternfly_component_navigation_NavigationGroup_ = text;
  this.f_heading__org_patternfly_component_navigation_NavigationGroup_.appendChild(text.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {NavigationGroup} */
 m_insertItemBefore__org_patternfly_component_navigation_NavigationItem__java_lang_String__org_patternfly_component_navigation_NavigationGroup(/** NavigationItem */ item, /** ?string */ beforeItemId) {
  let element = Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(this.f_ul__org_patternfly_component_navigation_NavigationGroup_, By.m_data__java_lang_String__java_lang_String__org_jboss_elemento_By(Dataset.f_navigationItem__org_patternfly_core_Dataset, beforeItemId));
  if (!$Equality.$same(element, null)) {
   this.m_internalAddItem__org_patternfly_component_navigation_NavigationItem__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_NavigationGroup(item, Consumer.$adapt((itm) =>{
    let itm_1 = /**@type {NavigationItem}*/ ($Casts.$to(itm, NavigationItem));
    Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLLIElement}*/ ($Casts.$to(itm_1.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)), element);
   }));
  }
  return this;
 }
 /** @nodts @return {NavigationGroup} */
 m_insertItemAfter__org_patternfly_component_navigation_NavigationItem__java_lang_String__org_patternfly_component_navigation_NavigationGroup(/** NavigationItem */ item, /** ?string */ afterItemId) {
  let element = Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(this.f_ul__org_patternfly_component_navigation_NavigationGroup_, By.m_data__java_lang_String__java_lang_String__org_jboss_elemento_By(Dataset.f_navigationItem__org_patternfly_core_Dataset, afterItemId));
  if (!$Equality.$same(element, null)) {
   this.m_internalAddItem__org_patternfly_component_navigation_NavigationItem__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_NavigationGroup(item, Consumer.$adapt((itm) =>{
    let itm_1 = /**@type {NavigationItem}*/ ($Casts.$to(itm, NavigationItem));
    Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLLIElement}*/ ($Casts.$to(itm_1.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)), element);
   }));
  }
  return this;
 }
 /** @nodts @return {NavigationGroup} */
 m_text__java_lang_String__org_patternfly_component_navigation_NavigationGroup(/** ?string */ text) {
  if (!$Equality.$same(text, null)) {
   if (!$Equality.$same(this.f_text__org_patternfly_component_navigation_NavigationGroup_, null)) {
    this.f_text__org_patternfly_component_navigation_NavigationGroup_.m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(text);
   } else {
    Elements.m_h__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(this.f_heading__org_patternfly_component_navigation_NavigationGroup_).m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(text);
   }
  }
  return this;
 }
 /** @nodts @return {NavigationGroup} */
 m_that__org_patternfly_component_navigation_NavigationGroup() {
  return this;
 }
 /** @nodts */
 m_internalAddItem__org_patternfly_component_navigation_NavigationItem__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_NavigationGroup(/** NavigationItem */ item, /** Consumer<NavigationItem> */ dom) {
  this.f_items__org_patternfly_component_navigation_NavigationGroup_.put(item.f_id__org_patternfly_component_navigation_NavigationItem, item);
  dom.m_accept__java_lang_Object__void(item);
 }
 /** @nodts @return {NavigationItem} */
 m_findItem__java_lang_String__org_patternfly_component_navigation_NavigationItem_$pp_org_patternfly_component_navigation(/** ?string */ id) {
  return /**@type {NavigationItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_navigation_NavigationGroup_.get(id), NavigationItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {NavigationGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_navigation_NavigationGroup();
 }
 //Bridge method.
 /** @final @override @nodts @return {NavigationGroup} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_navigation_NavigationGroup(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {NavigationGroup} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {NavigationGroup}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), NavigationGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {NavigationGroup} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** SafeHtml */ arg0) {
  return /**@type {NavigationGroup}*/ ($Casts.$to(ElementDelegate.m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), NavigationGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {NavigationGroup} */
 m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {NavigationGroup}*/ ($Casts.$to(ElementDelegate.m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), NavigationGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {NavigationGroup} */
 m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {NavigationGroup}*/ ($Casts.$to(ElementDelegate.m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), NavigationGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {NavigationGroup} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {NavigationGroup}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), NavigationGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {NavigationGroup} */
 m_add__java_lang_String__org_patternfly_component_navigation_NavigationGroup(/** ?string */ arg0) {
  return /**@type {NavigationGroup}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), NavigationGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {NavigationGroup} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_patternfly_component_navigation_NavigationGroup(/** SafeHtml */ arg0) {
  return /**@type {NavigationGroup}*/ ($Casts.$to(ElementDelegate.m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), NavigationGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {NavigationGroup} */
 m_textContent__java_lang_String__org_patternfly_component_navigation_NavigationGroup(/** ?string */ arg0) {
  return /**@type {NavigationGroup}*/ ($Casts.$to(ElementDelegate.m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), NavigationGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {NavigationGroup} */
 m_textNode__java_lang_String__org_patternfly_component_navigation_NavigationGroup(/** ?string */ arg0) {
  return /**@type {NavigationGroup}*/ ($Casts.$to(ElementDelegate.m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), NavigationGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {NavigationGroup} */
 m_add__elemental2_dom_Node__org_patternfly_component_navigation_NavigationGroup(/** Node */ arg0) {
  return /**@type {NavigationGroup}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), NavigationGroup));
 }
 /** @nodts */
 static $clinit() {
  NavigationGroup.$clinit = () =>{};
  NavigationGroup.$loadModules();
  NavigationSubComponent.$clinit();
  ElementDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NavigationGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Divider = goog.module.get('org.patternfly.component.divider.Divider$impl');
  DividerType = goog.module.get('org.patternfly.component.divider.DividerType$impl');
  NavigationItem = goog.module.get('org.patternfly.component.navigation.NavigationItem$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
NavigationGroup.f_SUB_COMPONENT_NAME__org_patternfly_component_navigation_NavigationGroup = 'ng';
WithText.$markImplementor(NavigationGroup);
ElementDelegate.$markImplementor(NavigationGroup);
$Util.$setClassMetadata(NavigationGroup, 'org.patternfly.component.navigation.NavigationGroup');

exports = NavigationGroup;

//# sourceMappingURL=NavigationGroup.js.map

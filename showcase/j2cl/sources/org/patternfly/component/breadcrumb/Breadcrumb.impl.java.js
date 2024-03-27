goog.module('org.patternfly.component.breadcrumb.Breadcrumb$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponentFlat = goog.require('org.patternfly.component.BaseComponentFlat$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLOListElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let BreadcrumbItem = goog.forwardDeclare('org.patternfly.component.breadcrumb.BreadcrumbItem$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponentFlat<HTMLElement, Breadcrumb>}
 */
class Breadcrumb extends BaseComponentFlat {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLContainerBuilder<HTMLOListElement>} @nodts*/
  this.f_ol__org_patternfly_component_breadcrumb_Breadcrumb_;
  /**@type {SelectHandler<BreadcrumbItem>} @nodts*/
  this.f_selectHandler__org_patternfly_component_breadcrumb_Breadcrumb_;
 }
 /** @nodts @return {Breadcrumb} */
 static m_breadcrumb__org_patternfly_component_breadcrumb_Breadcrumb() {
  Breadcrumb.$clinit();
  return Breadcrumb.$create__();
 }
 /** @nodts @return {!Breadcrumb} */
 static $create__() {
  Breadcrumb.$clinit();
  let $instance = new Breadcrumb();
  $instance.$ctor__org_patternfly_component_breadcrumb_Breadcrumb__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_breadcrumb_Breadcrumb__void() {
  this.$ctor__org_patternfly_component_BaseComponentFlat__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Breadcrumb__org_patternfly_component_ComponentType, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_nav__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_breadcrumb__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  this.f_ol__org_patternfly_component_breadcrumb_Breadcrumb_ = /**@type {HTMLContainerBuilder<HTMLOListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLOListElement>}*/ ($Casts.$to(Elements.m_ol__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_breadcrumb__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_list__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'list'), HTMLContainerBuilder));
  this.m_storeFlatComponent__void();
  this.m_element__elemental2_dom_HTMLElement().appendChild(/**@type {HTMLOListElement}*/ ($Casts.$to(this.f_ol__org_patternfly_component_breadcrumb_Breadcrumb_.m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @nodts @template T @return {Breadcrumb} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_breadcrumb_Breadcrumb(/** Iterable<T> */ items, /** j_u_function_Function<T, BreadcrumbItem> */ display) {
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let bi = /**@type {BreadcrumbItem}*/ ($Casts.$to(display.m_apply__java_lang_Object__java_lang_Object(item), BreadcrumbItem));
    this.m_addItem__org_patternfly_component_breadcrumb_BreadcrumbItem__org_patternfly_component_breadcrumb_Breadcrumb(bi);
   }
  }
  return this;
 }
 /** @nodts @return {Breadcrumb} */
 m_addItem__org_patternfly_component_breadcrumb_BreadcrumbItem__org_patternfly_component_breadcrumb_Breadcrumb(/** BreadcrumbItem */ item) {
  return this.m_add__org_patternfly_component_breadcrumb_BreadcrumbItem__org_patternfly_component_breadcrumb_Breadcrumb(item);
 }
 /** @nodts @return {Breadcrumb} */
 m_add__org_patternfly_component_breadcrumb_BreadcrumbItem__org_patternfly_component_breadcrumb_Breadcrumb(/** BreadcrumbItem */ item) {
  this.f_ol__org_patternfly_component_breadcrumb_Breadcrumb_.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(item);
  return this;
 }
 /** @nodts @return {Breadcrumb} */
 m_that__org_patternfly_component_breadcrumb_Breadcrumb() {
  return this;
 }
 /** @nodts @return {Breadcrumb} */
 m_ariaLabel__java_lang_String__org_patternfly_component_breadcrumb_Breadcrumb(/** ?string */ label) {
  return /**@type {Breadcrumb}*/ ($Casts.$to(this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label), Breadcrumb));
 }
 /** @nodts @return {Breadcrumb} */
 m_onSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_breadcrumb_Breadcrumb(/** SelectHandler<BreadcrumbItem> */ selectHandler) {
  this.f_selectHandler__org_patternfly_component_breadcrumb_Breadcrumb_ = selectHandler;
  return this;
 }
 /** @nodts @template T */
 m_updateItems__java_lang_Iterable__java_util_function_Function__void(/** Iterable<T> */ items, /** j_u_function_Function<T, BreadcrumbItem> */ display) {
  Elements.m_removeChildrenFrom__org_jboss_elemento_IsElement__void(this.f_ol__org_patternfly_component_breadcrumb_Breadcrumb_);
  this.m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_breadcrumb_Breadcrumb(items, display);
 }
 /** @nodts */
 m_select__elemental2_dom_Event__org_patternfly_component_breadcrumb_BreadcrumbItem__void_$pp_org_patternfly_component_breadcrumb(/** Event */ event, /** BreadcrumbItem */ item) {
  if (!$Equality.$same(this.f_selectHandler__org_patternfly_component_breadcrumb_Breadcrumb_, null)) {
   this.f_selectHandler__org_patternfly_component_breadcrumb_Breadcrumb_.m_onSelect__elemental2_dom_Event__java_lang_Object__boolean__void(event, item, true);
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {Breadcrumb} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_breadcrumb_Breadcrumb();
 }
 /** @nodts */
 static $clinit() {
  Breadcrumb.$clinit = () =>{};
  Breadcrumb.$loadModules();
  BaseComponentFlat.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Breadcrumb;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLOListElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  BreadcrumbItem = goog.module.get('org.patternfly.component.breadcrumb.BreadcrumbItem$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Breadcrumb, 'org.patternfly.component.breadcrumb.Breadcrumb');

exports = Breadcrumb;

//# sourceMappingURL=Breadcrumb.js.map

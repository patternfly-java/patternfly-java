goog.module('org.patternfly.component.list.SimpleListItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const WithText = goog.require('org.patternfly.component.WithText$impl');
const SimpleListSubComponent = goog.require('org.patternfly.component.list.SimpleListSubComponent$impl');
const ElementDelegate = goog.require('org.patternfly.core.ElementDelegate$impl');

let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let HTMLAnchorElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let SimpleList = goog.forwardDeclare('org.patternfly.component.list.SimpleList$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SimpleListSubComponent<HTMLLIElement, SimpleListItem>}
 * @implements {WithText<HTMLLIElement, SimpleListItem>}
 * @implements {ElementDelegate<HTMLLIElement, SimpleListItem>}
 */
class SimpleListItem extends SimpleListSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_component_list_SimpleListItem;
  /**@type {HTMLElement} @nodts*/
  this.f_itemElement__org_patternfly_component_list_SimpleListItem_;
  /**@type {HTMLAnchorElement} @nodts*/
  this.f_anchorElement__org_patternfly_component_list_SimpleListItem_;
 }
 /** @nodts @return {SimpleListItem} */
 static m_simpleListItem__java_lang_String__org_patternfly_component_list_SimpleListItem(/** ?string */ id) {
  SimpleListItem.$clinit();
  return SimpleListItem.$create__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(id, Elements.m_button__org_jboss_elemento_HTMLContainerBuilder());
 }
 /** @nodts @return {SimpleListItem} */
 static m_simpleListItem__java_lang_String__java_lang_String__org_patternfly_component_list_SimpleListItem(/** ?string */ id, /** ?string */ text) {
  SimpleListItem.$clinit();
  return SimpleListItem.$create__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(id, Elements.m_button__org_jboss_elemento_HTMLContainerBuilder()).m_text__java_lang_String__org_patternfly_component_list_SimpleListItem(text);
 }
 /** @nodts @return {SimpleListItem} */
 static m_simpleListItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_list_SimpleListItem(/** ?string */ id, /** ?string */ text, /** ?string */ href) {
  SimpleListItem.$clinit();
  return SimpleListItem.$create__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(id, /**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__org_jboss_elemento_HTMLContainerBuilder().m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((a) =>{
   let a_1 = /**@type {HTMLAnchorElement}*/ ($Casts.$to(a, HTMLAnchorElement_$Overlay));
   a_1.tabIndex = 0;
  })), HTMLContainerBuilder))).m_text__java_lang_String__org_patternfly_component_list_SimpleListItem(text).m_href__java_lang_String__org_patternfly_component_list_SimpleListItem(href);
 }
 /** @nodts @return {SimpleListItem} */
 static m_simpleListItem__java_lang_String__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_list_SimpleListItem(/** ?string */ id, /** ?string */ text, /** ?string */ href, /** ?string */ target) {
  SimpleListItem.$clinit();
  return SimpleListItem.$create__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(id, /**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__org_jboss_elemento_HTMLContainerBuilder().m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((a) =>{
   let a_1 = /**@type {HTMLAnchorElement}*/ ($Casts.$to(a, HTMLAnchorElement_$Overlay));
   a_1.tabIndex = 0;
  })), HTMLContainerBuilder))).m_text__java_lang_String__org_patternfly_component_list_SimpleListItem(text).m_href__java_lang_String__org_patternfly_component_list_SimpleListItem(href).m_target__java_lang_String__org_patternfly_component_list_SimpleListItem(target);
 }
 /** @nodts @template E @return {SimpleListItem} */
 static m_simpleListItem__java_lang_String__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_list_SimpleListItem(/** ?string */ id, /** HTMLContainerBuilder<E> */ builder) {
  SimpleListItem.$clinit();
  return SimpleListItem.$create__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(id, builder);
 }
 /** @nodts @template E @return {!SimpleListItem} */
 static $create__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ id, /** HTMLContainerBuilder<E> */ builder) {
  SimpleListItem.$clinit();
  let $instance = new SimpleListItem();
  $instance.$ctor__org_patternfly_component_list_SimpleListItem__java_lang_String__org_jboss_elemento_HTMLContainerBuilder__void(id, builder);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_component_list_SimpleListItem__java_lang_String__org_jboss_elemento_HTMLContainerBuilder__void(/** ?string */ id, /** HTMLContainerBuilder<E> */ builder) {
  this.$ctor__org_patternfly_component_list_SimpleListSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(SimpleListItem.f_SUB_COMPONENT_NAME__org_patternfly_component_list_SimpleListItem, /**@type {HTMLLIElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_simpleList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  this.f_id__org_patternfly_component_list_SimpleListItem = id;
  this.f_itemElement__org_patternfly_component_list_SimpleListItem_ = /**@type {HTMLElement}*/ (/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_simpleList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Classes.f_link__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   let simpleList = /**@type {SimpleList}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), SimpleList));
   simpleList.m_select__org_patternfly_component_list_SimpleListItem__void(this);
  }), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  this.f_anchorElement__org_patternfly_component_list_SimpleListItem_ = j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String__boolean(this.f_itemElement__org_patternfly_component_list_SimpleListItem_.tagName, 'a') ? /**@type {HTMLAnchorElement}*/ ($Casts.$to(this.f_itemElement__org_patternfly_component_list_SimpleListItem_, HTMLAnchorElement_$Overlay)) : null;
  /**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)).appendChild(this.f_itemElement__org_patternfly_component_list_SimpleListItem_);
 }
 /** @override @nodts @return {HTMLElement} */
 m_delegate__elemental2_dom_HTMLElement() {
  return this.f_itemElement__org_patternfly_component_list_SimpleListItem_;
 }
 /** @nodts @return {SimpleListItem} */
 m_text__java_lang_String__org_patternfly_component_list_SimpleListItem(/** ?string */ text) {
  return /**@type {SimpleListItem}*/ ($Casts.$to(this.m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(text), SimpleListItem));
 }
 /** @nodts @return {SimpleListItem} */
 m_href__java_lang_String__org_patternfly_component_list_SimpleListItem(/** ?string */ href) {
  if (!$Equality.$same(this.f_anchorElement__org_patternfly_component_list_SimpleListItem_, null)) {
   this.f_anchorElement__org_patternfly_component_list_SimpleListItem_.href = href;
  } else {
   Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(ComponentType.f_SimpleList__org_patternfly_component_ComponentType.f_componentName__org_patternfly_component_ComponentType, /**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)), 'Unable to set href: This simple list item is not an <a/> item.');
  }
  return this;
 }
 /** @nodts @return {SimpleListItem} */
 m_target__java_lang_String__org_patternfly_component_list_SimpleListItem(/** ?string */ target) {
  if (!$Equality.$same(this.f_anchorElement__org_patternfly_component_list_SimpleListItem_, null)) {
   this.f_anchorElement__org_patternfly_component_list_SimpleListItem_.target = target;
  } else {
   Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(ComponentType.f_SimpleList__org_patternfly_component_ComponentType.f_componentName__org_patternfly_component_ComponentType, /**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)), 'Unable to set target: This simple list item is not an <a/> item.');
  }
  return this;
 }
 /** @nodts @return {SimpleListItem} */
 m_that__org_patternfly_component_list_SimpleListItem() {
  return this;
 }
 /** @nodts @return {SimpleListItem} */
 m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_list_SimpleListItem(/** ComponentHandler<SimpleListItem> */ actionHandler) {
  this.f_itemElement__org_patternfly_component_list_SimpleListItem_.addEventListener(EventType.f_click__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
   actionHandler.m_handle__elemental2_dom_Event__java_lang_Object__void(e, this);
  }));
  return this;
 }
 /** @nodts */
 m_markSelected__boolean__void_$pp_org_patternfly_component_list(/** boolean */ selected) {
  this.f_itemElement__org_patternfly_component_list_SimpleListItem_.classList.toggle(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes), selected);
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_list_SimpleListItem();
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListItem} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_list_SimpleListItem(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListItem} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {SimpleListItem}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListItem} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** SafeHtml */ arg0) {
  return /**@type {SimpleListItem}*/ ($Casts.$to(ElementDelegate.m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListItem} */
 m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {SimpleListItem}*/ ($Casts.$to(ElementDelegate.m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListItem} */
 m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {SimpleListItem}*/ ($Casts.$to(ElementDelegate.m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListItem} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {SimpleListItem}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {SimpleListItem} */
 m_add__java_lang_String__org_patternfly_component_list_SimpleListItem(/** ?string */ arg0) {
  return /**@type {SimpleListItem}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {SimpleListItem} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_patternfly_component_list_SimpleListItem(/** SafeHtml */ arg0) {
  return /**@type {SimpleListItem}*/ ($Casts.$to(ElementDelegate.m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {SimpleListItem} */
 m_textContent__java_lang_String__org_patternfly_component_list_SimpleListItem(/** ?string */ arg0) {
  return /**@type {SimpleListItem}*/ ($Casts.$to(ElementDelegate.m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {SimpleListItem} */
 m_textNode__java_lang_String__org_patternfly_component_list_SimpleListItem(/** ?string */ arg0) {
  return /**@type {SimpleListItem}*/ ($Casts.$to(ElementDelegate.m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {SimpleListItem} */
 m_add__elemental2_dom_Node__org_patternfly_component_list_SimpleListItem(/** Node */ arg0) {
  return /**@type {SimpleListItem}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListItem));
 }
 /** @nodts */
 static $clinit() {
  SimpleListItem.$clinit = () =>{};
  SimpleListItem.$loadModules();
  SimpleListSubComponent.$clinit();
  ElementDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SimpleListItem;
 }
 
 /** @nodts */
 static $loadModules() {
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  HTMLAnchorElement_$Overlay = goog.module.get('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  SimpleList = goog.module.get('org.patternfly.component.list.SimpleList$impl');
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
SimpleListItem.f_SUB_COMPONENT_NAME__org_patternfly_component_list_SimpleListItem = 'sli';
WithText.$markImplementor(SimpleListItem);
ElementDelegate.$markImplementor(SimpleListItem);
$Util.$setClassMetadata(SimpleListItem, 'org.patternfly.component.list.SimpleListItem');

exports = SimpleListItem;

//# sourceMappingURL=SimpleListItem.js.map

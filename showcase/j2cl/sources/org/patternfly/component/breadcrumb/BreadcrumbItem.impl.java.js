goog.module('org.patternfly.component.breadcrumb.BreadcrumbItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const WithText = goog.require('org.patternfly.component.WithText$impl');
const BreadcrumbSubComponent = goog.require('org.patternfly.component.breadcrumb.BreadcrumbSubComponent$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let HTMLAnchorElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BreadcrumbSubComponent<HTMLLIElement, BreadcrumbItem>}
 * @implements {WithText<HTMLLIElement, BreadcrumbItem>}
 */
class BreadcrumbItem extends BreadcrumbSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_breadcrumb_BreadcrumbItem_;
  /**@type {HTMLAnchorElement} @nodts*/
  this.f_anchorElement__org_patternfly_component_breadcrumb_BreadcrumbItem_;
 }
 /** @nodts @return {BreadcrumbItem} */
 static m_breadcrumbItem__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem(/** ?string */ text) {
  BreadcrumbItem.$clinit();
  return BreadcrumbItem.$create__java_lang_String(text);
 }
 /** @nodts @return {BreadcrumbItem} */
 static m_breadcrumbItem__java_lang_String__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem(/** ?string */ text, /** ?string */ href) {
  BreadcrumbItem.$clinit();
  return BreadcrumbItem.$create__java_lang_String(text).m_href__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem(href);
 }
 /** @nodts @return {BreadcrumbItem} */
 static m_breadcrumbItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem(/** ?string */ text, /** ?string */ href, /** ?string */ target) {
  BreadcrumbItem.$clinit();
  return BreadcrumbItem.$create__java_lang_String(text).m_href__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem(href).m_target__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem(target);
 }
 /** @nodts @template E @return {!BreadcrumbItem} */
 static $create__java_lang_String(/** ?string */ text) {
  BreadcrumbItem.$clinit();
  let $instance = new BreadcrumbItem();
  $instance.$ctor__org_patternfly_component_breadcrumb_BreadcrumbItem__java_lang_String__void(text);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_component_breadcrumb_BreadcrumbItem__java_lang_String__void(/** ?string */ text) {
  this.$ctor__org_patternfly_component_breadcrumb_BreadcrumbSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(BreadcrumbItem.f_SUB_COMPONENT_NAME__org_patternfly_component_breadcrumb_BreadcrumbItem, /**@type {HTMLLIElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_breadcrumb__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_breadcrumb__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes, Classes.f_divider__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(fas.m_angleRight__org_patternfly_icon_PredefinedIcon().m_element__org_jboss_elemento_svg_SVGElement()), HTMLContainerBuilder)));
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_breadcrumb_BreadcrumbItem_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts @return {BreadcrumbItem} */
 m_active__org_patternfly_component_breadcrumb_BreadcrumbItem() {
  return this.m_active__boolean__org_patternfly_component_breadcrumb_BreadcrumbItem(true);
 }
 /** @nodts @return {BreadcrumbItem} */
 m_active__boolean__org_patternfly_component_breadcrumb_BreadcrumbItem(/** boolean */ active) {
  if (active) {
   this.m_failSafeAnchorElement__elemental2_dom_HTMLAnchorElement_$p_org_patternfly_component_breadcrumb_BreadcrumbItem().classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes));
   Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.m_failSafeAnchorElement__elemental2_dom_HTMLAnchorElement_$p_org_patternfly_component_breadcrumb_BreadcrumbItem(), Aria.f_current__org_patternfly_core_Aria, 'page');
  } else {
   this.m_failSafeAnchorElement__elemental2_dom_HTMLAnchorElement_$p_org_patternfly_component_breadcrumb_BreadcrumbItem().classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes));
   this.m_failSafeAnchorElement__elemental2_dom_HTMLAnchorElement_$p_org_patternfly_component_breadcrumb_BreadcrumbItem().removeAttribute(Aria.f_current__org_patternfly_core_Aria);
  }
  return this;
 }
 /** @nodts @return {BreadcrumbItem} */
 m_text__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem(/** ?string */ text) {
  if (!$Equality.$same(this.f_anchorElement__org_patternfly_component_breadcrumb_BreadcrumbItem_, null)) {
   this.f_anchorElement__org_patternfly_component_breadcrumb_BreadcrumbItem_.textContent = text;
  } else if (!$Equality.$same(this.f_textElement__org_patternfly_component_breadcrumb_BreadcrumbItem_, null)) {
   this.f_textElement__org_patternfly_component_breadcrumb_BreadcrumbItem_.textContent = text;
  }
  return this;
 }
 /** @nodts @return {BreadcrumbItem} */
 m_href__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem(/** ?string */ href) {
  this.m_failSafeAnchorElement__elemental2_dom_HTMLAnchorElement_$p_org_patternfly_component_breadcrumb_BreadcrumbItem().href = href;
  return this;
 }
 /** @nodts @return {BreadcrumbItem} */
 m_target__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem(/** ?string */ target) {
  this.m_failSafeAnchorElement__elemental2_dom_HTMLAnchorElement_$p_org_patternfly_component_breadcrumb_BreadcrumbItem().target = target;
  return this;
 }
 /** @nodts @return {BreadcrumbItem} */
 m_that__org_patternfly_component_breadcrumb_BreadcrumbItem() {
  return this;
 }
 /** @nodts @return {BreadcrumbItem} */
 m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_breadcrumb_BreadcrumbItem(/** ComponentHandler<BreadcrumbItem> */ actionHandler) {
  this.m_failSafeAnchorElement__elemental2_dom_HTMLAnchorElement_$p_org_patternfly_component_breadcrumb_BreadcrumbItem().addEventListener(EventType.f_click__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
   actionHandler.m_handle__elemental2_dom_Event__java_lang_Object__void(e, this);
  }));
  return this;
 }
 /** @nodts @return {HTMLAnchorElement} */
 m_failSafeAnchorElement__elemental2_dom_HTMLAnchorElement_$p_org_patternfly_component_breadcrumb_BreadcrumbItem() {
  if ($Equality.$same(this.f_anchorElement__org_patternfly_component_breadcrumb_BreadcrumbItem_, null)) {
   this.f_anchorElement__org_patternfly_component_breadcrumb_BreadcrumbItem_ = /**@type {HTMLAnchorElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_breadcrumb__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_link__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_breadcrumb_BreadcrumbItem_.textContent), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLAnchorElement_$Overlay));
   Element_$Overlay.m_replaceWith__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node__void(this.f_textElement__org_patternfly_component_breadcrumb_BreadcrumbItem_, [this.f_anchorElement__org_patternfly_component_breadcrumb_BreadcrumbItem_]);
  }
  return this.f_anchorElement__org_patternfly_component_breadcrumb_BreadcrumbItem_;
 }
 //Bridge method.
 /** @final @override @nodts @return {BreadcrumbItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_breadcrumb_BreadcrumbItem();
 }
 //Bridge method.
 /** @final @override @nodts @return {BreadcrumbItem} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_breadcrumb_BreadcrumbItem(arg0);
 }
 /** @nodts */
 static $clinit() {
  BreadcrumbItem.$clinit = () =>{};
  BreadcrumbItem.$loadModules();
  BreadcrumbSubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BreadcrumbItem;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  HTMLAnchorElement_$Overlay = goog.module.get('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
BreadcrumbItem.f_SUB_COMPONENT_NAME__org_patternfly_component_breadcrumb_BreadcrumbItem = 'bci';
WithText.$markImplementor(BreadcrumbItem);
$Util.$setClassMetadata(BreadcrumbItem, 'org.patternfly.component.breadcrumb.BreadcrumbItem');

exports = BreadcrumbItem;

//# sourceMappingURL=BreadcrumbItem.js.map

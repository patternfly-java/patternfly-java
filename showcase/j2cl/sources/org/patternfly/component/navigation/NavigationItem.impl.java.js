goog.module('org.patternfly.component.navigation.NavigationItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const WithText = goog.require('org.patternfly.component.WithText$impl');
const NavigationSubComponent = goog.require('org.patternfly.component.navigation.NavigationSubComponent$impl');
const ElementDelegate = goog.require('org.patternfly.core.ElementDelegate$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let ScrollIntoViewOptions_$Overlay = goog.forwardDeclare('elemental2.dom.ScrollIntoViewOptions.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Navigation = goog.forwardDeclare('org.patternfly.component.navigation.Navigation$impl');
let NavigationLinkText = goog.forwardDeclare('org.patternfly.component.navigation.NavigationLinkText$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {NavigationSubComponent<HTMLLIElement, NavigationItem>}
 * @implements {WithText<HTMLLIElement, NavigationItem>}
 * @implements {ElementDelegate<HTMLLIElement, NavigationItem>}
 */
class NavigationItem extends NavigationSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_component_navigation_NavigationItem;
  /**@type {HTMLAnchorElement} @nodts*/
  this.f_a__org_patternfly_component_navigation_NavigationItem;
  /**@type {NavigationLinkText} @nodts*/
  this.f_text__org_patternfly_component_navigation_NavigationItem_;
 }
 /** @nodts @return {NavigationItem} */
 static m_navigationItem__java_lang_String__org_patternfly_component_navigation_NavigationItem(/** ?string */ id) {
  NavigationItem.$clinit();
  return NavigationItem.$create__java_lang_String(id);
 }
 /** @nodts @return {NavigationItem} */
 static m_navigationItem__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem(/** ?string */ id, /** ?string */ text) {
  NavigationItem.$clinit();
  return NavigationItem.$create__java_lang_String(id).m_text__java_lang_String__org_patternfly_component_navigation_NavigationItem(text);
 }
 /** @nodts @return {NavigationItem} */
 static m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem(/** ?string */ id, /** ?string */ text, /** ?string */ href) {
  NavigationItem.$clinit();
  return NavigationItem.$create__java_lang_String(id).m_text__java_lang_String__org_patternfly_component_navigation_NavigationItem(text).m_href__java_lang_String__org_patternfly_component_navigation_NavigationItem(href);
 }
 /** @nodts @return {!NavigationItem} */
 static $create__java_lang_String(/** ?string */ id) {
  NavigationItem.$clinit();
  let $instance = new NavigationItem();
  $instance.$ctor__org_patternfly_component_navigation_NavigationItem__java_lang_String__void(id);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_navigation_NavigationItem__java_lang_String__void(/** ?string */ id) {
  this.$ctor__org_patternfly_component_navigation_NavigationSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(NavigationItem.f_SUB_COMPONENT_NAME__org_patternfly_component_navigation_NavigationItem, /**@type {HTMLLIElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  this.f_id__org_patternfly_component_navigation_NavigationItem = id;
  /**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)).appendChild(this.f_a__org_patternfly_component_navigation_NavigationItem = /**@type {HTMLAnchorElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_link__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   let navigation = /**@type {Navigation}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), Navigation));
   navigation.m_select__org_patternfly_component_navigation_NavigationItem__void(this);
  }), HTMLContainerBuilder)).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_navigationItem__org_patternfly_core_Dataset, id), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
 }
 /** @override @nodts @return {HTMLElement} */
 m_delegate__elemental2_dom_HTMLElement() {
  return this.f_a__org_patternfly_component_navigation_NavigationItem;
 }
 /** @nodts @return {NavigationItem} */
 m_addLinkText__org_patternfly_component_navigation_NavigationLinkText__org_patternfly_component_navigation_NavigationItem(/** NavigationLinkText */ text) {
  return this.m_add__org_patternfly_component_navigation_NavigationLinkText__org_patternfly_component_navigation_NavigationItem(text);
 }
 /** @nodts @return {NavigationItem} */
 m_add__org_patternfly_component_navigation_NavigationLinkText__org_patternfly_component_navigation_NavigationItem(/** NavigationLinkText */ text) {
  this.f_text__org_patternfly_component_navigation_NavigationItem_ = text;
  this.f_a__org_patternfly_component_navigation_NavigationItem.appendChild(text.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {NavigationItem} */
 m_text__java_lang_String__org_patternfly_component_navigation_NavigationItem(/** ?string */ text) {
  if (!$Equality.$same(text, null)) {
   if (!$Equality.$same(this.f_text__org_patternfly_component_navigation_NavigationItem_, null)) {
    this.f_text__org_patternfly_component_navigation_NavigationItem_.m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(text);
   } else {
    Elements.m_a__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(this.f_a__org_patternfly_component_navigation_NavigationItem).m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(text);
   }
  }
  return this;
 }
 /** @nodts @return {NavigationItem} */
 m_href__java_lang_String__org_patternfly_component_navigation_NavigationItem(/** ?string */ href) {
  if (!$Equality.$same(href, null)) {
   this.f_a__org_patternfly_component_navigation_NavigationItem.href = href;
  }
  return this;
 }
 /** @nodts @return {NavigationItem} */
 m_that__org_patternfly_component_navigation_NavigationItem() {
  return this;
 }
 /** @nodts @return {NavigationItem} */
 m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_navigation_NavigationItem(/** ComponentHandler<NavigationItem> */ handler) {
  Elements.m_a__elemental2_dom_Element__org_jboss_elemento_HTMLContainerBuilder(this.f_a__org_patternfly_component_navigation_NavigationItem).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   handler.m_handle__elemental2_dom_Event__java_lang_Object__void(e_1, this);
  });
  return this;
 }
 /** @nodts */
 m_select__void_$pp_org_patternfly_component_navigation() {
  this.f_a__org_patternfly_component_navigation_NavigationItem.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes));
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.f_a__org_patternfly_component_navigation_NavigationItem, Aria.f_current__org_patternfly_core_Aria, 'page');
  let options = ScrollIntoViewOptions_$Overlay.m_create__elemental2_dom_ScrollIntoViewOptions();
  options.block = 'nearest';
  options.inline = 'nearest';
  Element_$Overlay.m_scrollIntoView__$devirt__elemental2_dom_Element__elemental2_dom_ScrollIntoViewOptions__void(this.f_a__org_patternfly_component_navigation_NavigationItem, options);
 }
 //Bridge method.
 /** @final @override @nodts @return {NavigationItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_navigation_NavigationItem();
 }
 //Bridge method.
 /** @final @override @nodts @return {NavigationItem} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_navigation_NavigationItem(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {NavigationItem} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {NavigationItem}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), NavigationItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {NavigationItem} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** SafeHtml */ arg0) {
  return /**@type {NavigationItem}*/ ($Casts.$to(ElementDelegate.m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), NavigationItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {NavigationItem} */
 m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {NavigationItem}*/ ($Casts.$to(ElementDelegate.m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), NavigationItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {NavigationItem} */
 m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {NavigationItem}*/ ($Casts.$to(ElementDelegate.m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), NavigationItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {NavigationItem} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {NavigationItem}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), NavigationItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {NavigationItem} */
 m_add__java_lang_String__org_patternfly_component_navigation_NavigationItem(/** ?string */ arg0) {
  return /**@type {NavigationItem}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), NavigationItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {NavigationItem} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_patternfly_component_navigation_NavigationItem(/** SafeHtml */ arg0) {
  return /**@type {NavigationItem}*/ ($Casts.$to(ElementDelegate.m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), NavigationItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {NavigationItem} */
 m_textContent__java_lang_String__org_patternfly_component_navigation_NavigationItem(/** ?string */ arg0) {
  return /**@type {NavigationItem}*/ ($Casts.$to(ElementDelegate.m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), NavigationItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {NavigationItem} */
 m_textNode__java_lang_String__org_patternfly_component_navigation_NavigationItem(/** ?string */ arg0) {
  return /**@type {NavigationItem}*/ ($Casts.$to(ElementDelegate.m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), NavigationItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {NavigationItem} */
 m_add__elemental2_dom_Node__org_patternfly_component_navigation_NavigationItem(/** Node */ arg0) {
  return /**@type {NavigationItem}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), NavigationItem));
 }
 /** @nodts */
 static $clinit() {
  NavigationItem.$clinit = () =>{};
  NavigationItem.$loadModules();
  NavigationSubComponent.$clinit();
  ElementDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NavigationItem;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  ScrollIntoViewOptions_$Overlay = goog.module.get('elemental2.dom.ScrollIntoViewOptions.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Navigation = goog.module.get('org.patternfly.component.navigation.Navigation$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
NavigationItem.f_SUB_COMPONENT_NAME__org_patternfly_component_navigation_NavigationItem = 'ni';
WithText.$markImplementor(NavigationItem);
ElementDelegate.$markImplementor(NavigationItem);
$Util.$setClassMetadata(NavigationItem, 'org.patternfly.component.navigation.NavigationItem');

exports = NavigationItem;

//# sourceMappingURL=NavigationItem.js.map

goog.module('org.patternfly.component.backtotop.BackToTop$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponentFlat = goog.require('org.patternfly.component.BaseComponentFlat$impl');
const WithText = goog.require('org.patternfly.component.WithText$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.ScrollToOptions.$Overlay$impl');
let Window_$Overlay = goog.forwardDeclare('elemental2.dom.Window.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let IconPosition = goog.forwardDeclare('org.patternfly.component.IconPosition$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @extends {BaseComponentFlat<HTMLElement, BackToTop>}
 * @implements {WithText<HTMLElement, BackToTop>}
 * @implements {Attachable}
 */
class BackToTop extends BaseComponentFlat {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Button} @nodts*/
  this.f_button__org_patternfly_component_backtotop_BackToTop_;
  /**@type {ScrollToOptions} @nodts*/
  this.f_scrollToOptions__org_patternfly_component_backtotop_BackToTop_;
  /**@type {boolean} @nodts*/
  this.f_alwaysVisible__org_patternfly_component_backtotop_BackToTop_ = false;
  /**@type {HTMLElement} @nodts*/
  this.f_element__org_patternfly_component_backtotop_BackToTop_;
  /**@type {Supplier<HTMLElement>} @nodts*/
  this.f_elementSupplier__org_patternfly_component_backtotop_BackToTop_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_hr__org_patternfly_component_backtotop_BackToTop_;
 }
 /** @nodts @return {BackToTop} */
 static m_backToTop__org_patternfly_component_backtotop_BackToTop() {
  BackToTop.$clinit();
  return BackToTop.m_backToTop__java_lang_String__org_patternfly_component_backtotop_BackToTop('Back to top');
 }
 /** @nodts @return {BackToTop} */
 static m_backToTop__java_lang_String__org_patternfly_component_backtotop_BackToTop(/** ?string */ text) {
  BackToTop.$clinit();
  return BackToTop.$create__java_lang_String(text);
 }
 /** @nodts @return {!BackToTop} */
 static $create__java_lang_String(/** ?string */ text) {
  BackToTop.$clinit();
  let $instance = new BackToTop();
  $instance.$ctor__org_patternfly_component_backtotop_BackToTop__java_lang_String__void(text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_backtotop_BackToTop__java_lang_String__void(/** ?string */ text) {
  this.$ctor__org_patternfly_component_BaseComponentFlat__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_BackToTop__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_backToTop__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_alwaysVisible__org_patternfly_component_backtotop_BackToTop_ = false;
  this.f_scrollToOptions__org_patternfly_component_backtotop_BackToTop_ = $Overlay.m_create__elemental2_dom_ScrollToOptions();
  this.f_scrollToOptions__org_patternfly_component_backtotop_BackToTop_.top = 0;
  this.f_scrollToOptions__org_patternfly_component_backtotop_BackToTop_.behavior = 'smooth';
  this.f_button__org_patternfly_component_backtotop_BackToTop_ = /**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_button_Button(Elements.m_a__org_jboss_elemento_HTMLContainerBuilder()).m_primary__org_patternfly_component_button_Button().m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_IconPosition__org_jboss_elemento_TypedBuilder(fas.m_angleUp__org_patternfly_icon_PredefinedIcon(), text, IconPosition.f_end__org_patternfly_component_IconPosition), Button)).m_href__java_lang_String__org_patternfly_component_button_Button('#').m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   e_1.preventDefault();
   this.m_scrollUp__void_$p_org_patternfly_component_backtotop_BackToTop();
  }), Button));
  this.m_element__elemental2_dom_HTMLElement().appendChild(this.f_button__org_patternfly_component_backtotop_BackToTop_.m_element__elemental2_dom_HTMLElement());
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (!this.f_alwaysVisible__org_patternfly_component_backtotop_BackToTop_) {
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_hidden__org_patternfly_style_Classes)], j_l_String)));
   this.f_element__org_patternfly_component_backtotop_BackToTop_ = /**@type {HTMLElement}*/ ($Casts.$to(this.f_elementSupplier__org_patternfly_component_backtotop_BackToTop_.m_get__java_lang_Object(), HTMLElement_$Overlay));
   if ($Equality.$same(this.f_element__org_patternfly_component_backtotop_BackToTop_, null)) {
    this.f_hr__org_patternfly_component_backtotop_BackToTop_ = EventType.m_bind__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__org_gwtproject_event_shared_HandlerRegistration(goog.global.window, EventType.f_scroll__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ __) =>{
     this.m_toggleVisible__int__void_$p_org_patternfly_component_backtotop_BackToTop($Primitives.narrowDoubleToInt(goog.global.window.scrollY));
    }));
   } else {
    this.f_hr__org_patternfly_component_backtotop_BackToTop_ = EventType.m_bind__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__org_gwtproject_event_shared_HandlerRegistration(this.f_element__org_patternfly_component_backtotop_BackToTop_, EventType.f_scroll__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ ___1) =>{
     this.m_toggleVisible__int__void_$p_org_patternfly_component_backtotop_BackToTop($Primitives.narrowDoubleToInt(this.f_element__org_patternfly_component_backtotop_BackToTop_.scrollTop));
    }));
   }
  }
 }
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (!$Equality.$same(this.f_hr__org_patternfly_component_backtotop_BackToTop_, null)) {
   this.f_hr__org_patternfly_component_backtotop_BackToTop_.m_removeHandler__void();
  }
 }
 /** @nodts @return {BackToTop} */
 m_text__java_lang_String__org_patternfly_component_backtotop_BackToTop(/** ?string */ text) {
  this.f_button__org_patternfly_component_backtotop_BackToTop_.m_text__java_lang_String__org_patternfly_component_button_Button(text);
  return this;
 }
 /** @nodts @return {BackToTop} */
 m_alwaysVisible__org_patternfly_component_backtotop_BackToTop() {
  return this.m_alwaysVisible__boolean__org_patternfly_component_backtotop_BackToTop(true);
 }
 /** @nodts @return {BackToTop} */
 m_alwaysVisible__boolean__org_patternfly_component_backtotop_BackToTop(/** boolean */ alwaysVisible) {
  this.f_alwaysVisible__org_patternfly_component_backtotop_BackToTop_ = alwaysVisible;
  return this;
 }
 /** @nodts @return {BackToTop} */
 m_scrollableSelector__java_lang_String__org_patternfly_component_backtotop_BackToTop(/** ?string */ selector) {
  return this.m_scrollableSelector__java_util_function_Supplier__org_patternfly_component_backtotop_BackToTop(Supplier.$adapt(() =>{
   return Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, By.m_selector__java_lang_String__org_jboss_elemento_By(selector));
  }));
 }
 /** @nodts @return {BackToTop} */
 m_scrollableSelector__org_jboss_elemento_By__org_patternfly_component_backtotop_BackToTop(/** By */ selector) {
  return this.m_scrollableSelector__java_util_function_Supplier__org_patternfly_component_backtotop_BackToTop(Supplier.$adapt(() =>{
   return Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, selector);
  }));
 }
 /** @nodts @return {BackToTop} */
 m_scrollableSelector__elemental2_dom_HTMLElement__org_patternfly_component_backtotop_BackToTop(/** HTMLElement */ element) {
  return this.m_scrollableSelector__java_util_function_Supplier__org_patternfly_component_backtotop_BackToTop(Supplier.$adapt(() =>{
   return element;
  }));
 }
 /** @nodts @return {BackToTop} */
 m_scrollableSelector__java_util_function_Supplier__org_patternfly_component_backtotop_BackToTop(/** Supplier<HTMLElement> */ element) {
  this.f_elementSupplier__org_patternfly_component_backtotop_BackToTop_ = element;
  return this;
 }
 /** @nodts @return {BackToTop} */
 m_that__org_patternfly_component_backtotop_BackToTop() {
  return this;
 }
 /** @nodts */
 m_toggleVisible__int__void_$p_org_patternfly_component_backtotop_BackToTop(/** number */ y) {
  Elements.m_toggle__elemental2_dom_HTMLElement__java_lang_String__boolean__void(this.m_element__elemental2_dom_HTMLElement(), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_hidden__org_patternfly_style_Classes), y < BackToTop.f_VISIBILITY_THRESHOLD__org_patternfly_component_backtotop_BackToTop_);
 }
 /** @nodts */
 m_scrollUp__void_$p_org_patternfly_component_backtotop_BackToTop() {
  if (!$Equality.$same(this.f_element__org_patternfly_component_backtotop_BackToTop_, null)) {
   Element_$Overlay.m_scrollTo__$devirt__elemental2_dom_Element__elemental2_dom_ScrollToOptions__void(this.f_element__org_patternfly_component_backtotop_BackToTop_, this.f_scrollToOptions__org_patternfly_component_backtotop_BackToTop_);
  } else {
   Window_$Overlay.m_scrollTo__$devirt__elemental2_dom_Window__elemental2_dom_ScrollToOptions__void(goog.global.window, this.f_scrollToOptions__org_patternfly_component_backtotop_BackToTop_);
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {BackToTop} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_backtotop_BackToTop();
 }
 //Bridge method.
 /** @final @override @nodts @return {BackToTop} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_backtotop_BackToTop(arg0);
 }
 /** @nodts */
 static $clinit() {
  BackToTop.$clinit = () =>{};
  BackToTop.$loadModules();
  BaseComponentFlat.$clinit();
  Attachable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BackToTop;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.ScrollToOptions.$Overlay$impl');
  Window_$Overlay = goog.module.get('elemental2.dom.Window.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  IconPosition = goog.module.get('org.patternfly.component.IconPosition$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@const {number} @nodts*/
BackToTop.f_VISIBILITY_THRESHOLD__org_patternfly_component_backtotop_BackToTop_ = 400;
WithText.$markImplementor(BackToTop);
Attachable.$markImplementor(BackToTop);
$Util.$setClassMetadata(BackToTop, 'org.patternfly.component.backtotop.BackToTop');

exports = BackToTop;

//# sourceMappingURL=BackToTop.js.map

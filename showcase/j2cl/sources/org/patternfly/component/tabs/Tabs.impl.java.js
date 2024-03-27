goog.module('org.patternfly.component.tabs.Tabs$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponentFlat = goog.require('org.patternfly.component.BaseComponentFlat$impl');
const Expandable = goog.require('org.patternfly.component.Expandable$impl');
const Box = goog.require('org.patternfly.style.Modifiers.Box$impl');
const Fill = goog.require('org.patternfly.style.Modifiers.Fill$impl');
const PageInsets = goog.require('org.patternfly.style.Modifiers.PageInsets$impl');
const Secondary = goog.require('org.patternfly.style.Modifiers.Secondary$impl');
const Vertical = goog.require('org.patternfly.style.Modifiers.Vertical$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let OverflowTab = goog.forwardDeclare('org.patternfly.component.tabs.OverflowTab$impl');
let Tab = goog.forwardDeclare('org.patternfly.component.tabs.Tab$impl');
let TabsToggle = goog.forwardDeclare('org.patternfly.component.tabs.TabsToggle$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let LanguageDirection = goog.forwardDeclare('org.patternfly.core.LanguageDirection$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let ObservableValue = goog.forwardDeclare('org.patternfly.core.ObservableValue$impl');
let Subscriber = goog.forwardDeclare('org.patternfly.core.ObservableValue.Subscriber$impl');
let CloseHandler = goog.forwardDeclare('org.patternfly.handler.CloseHandler$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let ExpandableModifier = goog.forwardDeclare('org.patternfly.style.ExpandableModifier$impl');
let Inset = goog.forwardDeclare('org.patternfly.style.Inset$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.style.Modifiers$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponentFlat<HTMLElement, Tabs>}
 * @implements {Attachable}
 * @implements {Box<HTMLElement, Tabs>}
 * @implements {Expandable<HTMLElement, Tabs>}
 * @implements {Fill<HTMLElement, Tabs>}
 * @implements {PageInsets<HTMLElement, Tabs>}
 * @implements {Secondary<HTMLElement, Tabs>}
 * @implements {Vertical<HTMLElement, Tabs>}
 */
class Tabs extends BaseComponentFlat {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, Tab>} @nodts*/
  this.f_tabs__org_patternfly_component_tabs_Tabs_;
  /**@type {HTMLContainerBuilder<?>} @nodts*/
  this.f_mainContainer__org_patternfly_component_tabs_Tabs_;
  /**@type {HTMLContainerBuilder<HTMLButtonElement>} @nodts*/
  this.f_scrollBack__org_patternfly_component_tabs_Tabs_;
  /**@type {HTMLContainerBuilder<HTMLUListElement>} @nodts*/
  this.f_tabsContainer__org_patternfly_component_tabs_Tabs_;
  /**@type {HTMLContainerBuilder<HTMLButtonElement>} @nodts*/
  this.f_scrollForward__org_patternfly_component_tabs_Tabs_;
  /**@type {ObservableValue<?boolean>} @nodts*/
  this.f_enableScrollButtons__org_patternfly_component_tabs_Tabs_;
  /**@type {ObservableValue<?boolean>} @nodts*/
  this.f_showScrollButtons__org_patternfly_component_tabs_Tabs_;
  /**@type {ObservableValue<?boolean>} @nodts*/
  this.f_renderScrollButtons__org_patternfly_component_tabs_Tabs_;
  /**@type {ObservableValue<?boolean>} @nodts*/
  this.f_disableBackScrollButton__org_patternfly_component_tabs_Tabs_;
  /**@type {ObservableValue<?boolean>} @nodts*/
  this.f_disableForwardScrollButton__org_patternfly_component_tabs_Tabs_;
  /**@type {number} @nodts*/
  this.f_scrollTimeout__org_patternfly_component_tabs_Tabs_ = 0;
  /**@type {boolean} @nodts*/
  this.f_closeable__org_patternfly_component_tabs_Tabs_ = false;
  /**@type {boolean} @nodts*/
  this.f_expandable__org_patternfly_component_tabs_Tabs_ = false;
  /**@type {boolean} @nodts*/
  this.f_lightTabs__org_patternfly_component_tabs_Tabs_ = false;
  /**@type {boolean} @nodts*/
  this.f_noInitialSelection__org_patternfly_component_tabs_Tabs_ = false;
  /**@type {boolean} @nodts*/
  this.f_overflowHorizontal__org_patternfly_component_tabs_Tabs_ = false;
  /**@type {boolean} @nodts*/
  this.f_vertical__org_patternfly_component_tabs_Tabs_ = false;
  /**@type {Tab} @nodts*/
  this.f_currentTab__org_patternfly_component_tabs_Tabs_;
  /**@type {OverflowTab} @nodts*/
  this.f_overflowTab__org_patternfly_component_tabs_Tabs_;
  /**@type {TabsToggle} @nodts*/
  this.f_tabsToggle__org_patternfly_component_tabs_Tabs_;
  /**@type {Button} @nodts*/
  this.f_addButton__org_patternfly_component_tabs_Tabs_;
  /**@type {j_u_function_Function<Tabs, Tab>} @nodts*/
  this.f_addHandler__org_patternfly_component_tabs_Tabs_;
  /**@type {ToggleHandler<Tabs>} @nodts*/
  this.f_toggleHandler__org_patternfly_component_tabs_Tabs_;
  /**@type {CloseHandler<Tab>} @nodts*/
  this.f_closeHandler__org_patternfly_component_tabs_Tabs_;
  /**@type {SelectHandler<Tab>} @nodts*/
  this.f_selectHandler__org_patternfly_component_tabs_Tabs_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_resizeHandler__org_patternfly_component_tabs_Tabs_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_transitionEndHandler__org_patternfly_component_tabs_Tabs_;
 }
 /** @nodts @return {Tabs} */
 static m_tabs__org_patternfly_component_tabs_Tabs() {
  Tabs.$clinit();
  return Tabs.$create__org_jboss_elemento_HTMLContainerBuilder(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder());
 }
 /** @nodts @template E @return {Tabs} */
 static m_tabs__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_tabs_Tabs(/** HTMLContainerBuilder<E> */ builder) {
  Tabs.$clinit();
  return Tabs.$create__org_jboss_elemento_HTMLContainerBuilder(builder);
 }
 /** @nodts @template E @return {!Tabs} */
 static $create__org_jboss_elemento_HTMLContainerBuilder(/** HTMLContainerBuilder<E> */ builder) {
  Tabs.$clinit();
  let $instance = new Tabs();
  $instance.$ctor__org_patternfly_component_tabs_Tabs__org_jboss_elemento_HTMLContainerBuilder__void(builder);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_component_tabs_Tabs__org_jboss_elemento_HTMLContainerBuilder__void(/** HTMLContainerBuilder<E> */ builder) {
  this.$ctor__org_patternfly_component_BaseComponentFlat__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Tabs__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_tabs__org_patternfly_component_tabs_Tabs_ = /**@type {!LinkedHashMap<?string, Tab>}*/ (LinkedHashMap.$create__());
  this.f_enableScrollButtons__org_patternfly_component_tabs_Tabs_ = /**@type {ObservableValue<?boolean>}*/ (ObservableValue.m_ov__java_lang_Object__org_patternfly_core_ObservableValue(false));
  this.f_showScrollButtons__org_patternfly_component_tabs_Tabs_ = /**@type {ObservableValue<?boolean>}*/ (ObservableValue.m_ov__java_lang_Object__org_patternfly_core_ObservableValue(false));
  this.f_renderScrollButtons__org_patternfly_component_tabs_Tabs_ = /**@type {ObservableValue<?boolean>}*/ (ObservableValue.m_ov__java_lang_Object__org_patternfly_core_ObservableValue(false));
  this.f_disableBackScrollButton__org_patternfly_component_tabs_Tabs_ = /**@type {ObservableValue<?boolean>}*/ (ObservableValue.m_ov__java_lang_Object__org_patternfly_core_ObservableValue(false));
  this.f_disableForwardScrollButton__org_patternfly_component_tabs_Tabs_ = /**@type {ObservableValue<?boolean>}*/ (ObservableValue.m_ov__java_lang_Object__org_patternfly_core_ObservableValue(false));
  this.f_mainContainer__org_patternfly_component_tabs_Tabs_ = /**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'region'), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_scrollBack__org_patternfly_component_tabs_Tabs_ = /**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_scrollButton__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((b) =>{
   let b_1 = /**@type {HTMLButtonElement}*/ ($Casts.$to(b, HTMLButtonElement_$Overlay));
   b_1.disabled = true;
  })), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Scroll back'), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   this.m_scrollBack__void_$p_org_patternfly_component_tabs_Tabs();
  }), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(fas.m_angleLeft__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_tabsContainer__org_patternfly_component_tabs_Tabs_ = /**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_list__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'tablist'), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_scroll__org_jboss_elemento_EventType, (/** Event */ e_2) =>{
   this.m_updateState__void_$p_org_patternfly_component_tabs_Tabs();
  }), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_scrollForward__org_patternfly_component_tabs_Tabs_ = /**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_scrollButton__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((b_2) =>{
   let b_3 = /**@type {HTMLButtonElement}*/ ($Casts.$to(b_2, HTMLButtonElement_$Overlay));
   b_3.disabled = true;
  })), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Scroll forward'), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e_3) =>{
   let e_4 = /**@type {MouseEvent}*/ ($Casts.$to(e_3, MouseEvent_$Overlay));
   this.m_scrollForward__void_$p_org_patternfly_component_tabs_Tabs();
  }), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(fas.m_angleRight__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder))), HTMLContainerBuilder));
  this.m_element__elemental2_dom_HTMLElement().appendChild(/**@type {Node}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()));
  this.m_storeFlatComponent__void();
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (this.f_vertical__org_patternfly_component_tabs_Tabs_) {
   if (this.f_overflowHorizontal__org_patternfly_component_tabs_Tabs_) {
    Logger.m_unsupported__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, /**@type {Element}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()), 'Horizontal overflow is not supported for vertical tabs!');
   }
   this.m_attachVertical__void_$p_org_patternfly_component_tabs_Tabs();
  } else {
   if (this.f_expandable__org_patternfly_component_tabs_Tabs_) {
    Logger.m_unsupported__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, /**@type {Element}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()), 'Expandable is not supported for horizontal tabs!');
   }
   if (this.f_overflowHorizontal__org_patternfly_component_tabs_Tabs_) {
    if (!$Equality.$same(this.f_addHandler__org_patternfly_component_tabs_Tabs_, null)) {
     Logger.m_wrong__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'Overflow tabs should not have an onAdd() handler.');
    }
    this.m_attachOverflow__void_$p_org_patternfly_component_tabs_Tabs();
   } else {
    this.m_attachHorizontal__void_$p_org_patternfly_component_tabs_Tabs();
   }
   this.f_resizeHandler__org_patternfly_component_tabs_Tabs_ = EventType.m_bind__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__org_gwtproject_event_shared_HandlerRegistration(goog.global.window, EventType.f_resize__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
    this.m_updateState__void_$p_org_patternfly_component_tabs_Tabs();
   }));
  }
  if (this.f_tabs__org_patternfly_component_tabs_Tabs_.isEmpty()) {
   Logger.m_missing__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, /**@type {Element}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()), 'No tabs given!');
  } else {
   this.m_attachTabs__void_$p_org_patternfly_component_tabs_Tabs();
   this.m_updateState__void_$p_org_patternfly_component_tabs_Tabs();
  }
 }
 /** @nodts */
 m_attachVertical__void_$p_org_patternfly_component_tabs_Tabs() {
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_scrollBack__org_patternfly_component_tabs_Tabs_);
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_scrollForward__org_patternfly_component_tabs_Tabs_);
  if (this.f_expandable__org_patternfly_component_tabs_Tabs_) {
   let tt = this.m_failSafeTabsToggle__org_patternfly_component_tabs_TabsToggle_$p_org_patternfly_component_tabs_Tabs();
   if (tt.m_noText__boolean_$pp_org_patternfly_component_tabs()) {
    if (!this.f_tabs__org_patternfly_component_tabs_Tabs_.isEmpty()) {
     tt.m_text__java_lang_String__void_$pp_org_patternfly_component_tabs(/**@type {Tab}*/ ($Casts.$to(this.f_tabs__org_patternfly_component_tabs_Tabs_.values().m_iterator__java_util_Iterator().m_next__java_lang_Object(), Tab)).m_text__java_lang_String());
    }
    this.m_onSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_tabs_Tabs(SelectHandler.$adapt((/** Event */ e, tab, /** boolean */ selected) =>{
     let tab_1 = /**@type {Tab}*/ ($Casts.$to(tab, Tab));
     tt.m_text__java_lang_String__void_$pp_org_patternfly_component_tabs(tab_1.m_text__java_lang_String());
    }));
   }
   Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(tt.m_element__elemental2_dom_HTMLElement(), /**@type {HTMLUListElement}*/ ($Casts.$to(this.f_tabsContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)));
  }
 }
 /** @nodts */
 m_attachHorizontal__void_$p_org_patternfly_component_tabs_Tabs() {
  this.f_enableScrollButtons__org_patternfly_component_tabs_Tabs_.m_subscribe__org_patternfly_core_ObservableValue_Subscriber__org_patternfly_core_ObservableValue(Subscriber.$adapt((current, previous) =>{
   let current_1 = /**@type {?boolean}*/ ($Casts.$to(current, Boolean));
   let previous_1 = /**@type {?boolean}*/ ($Casts.$to(previous, Boolean));
   if (!Boolean.m_booleanValue__java_lang_Boolean__boolean(previous_1) && Boolean.m_booleanValue__java_lang_Boolean__boolean(current_1)) {
    this.f_renderScrollButtons__org_patternfly_component_tabs_Tabs_.m_change__java_lang_Object__void(true);
    DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ __) =>{
     this.f_transitionEndHandler__org_patternfly_component_tabs_Tabs_ = EventType.m_bind__org_jboss_elemento_IsElement__java_lang_String__elemental2_dom_EventListener__org_gwtproject_event_shared_HandlerRegistration(this.f_scrollBack__org_patternfly_component_tabs_Tabs_, 'transitionend', EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
      this.m_hideScrollButtons__void_$p_org_patternfly_component_tabs_Tabs();
     }));
     this.f_showScrollButtons__org_patternfly_component_tabs_Tabs_.m_set__java_lang_Object__void(true);
    }, 100, []);
   } else if (Boolean.m_booleanValue__java_lang_Boolean__boolean(previous_1) && !Boolean.m_booleanValue__java_lang_Boolean__boolean(current_1)) {
    this.f_showScrollButtons__org_patternfly_component_tabs_Tabs_.m_change__java_lang_Object__void(false);
   }
  }));
  this.f_showScrollButtons__org_patternfly_component_tabs_Tabs_.m_subscribe__org_patternfly_core_ObservableValue_Subscriber__org_patternfly_core_ObservableValue(Subscriber.$adapt((current_2, ___1) =>{
   let current_3 = /**@type {?boolean}*/ ($Casts.$to(current_2, Boolean));
   let ___2 = /**@type {?boolean}*/ ($Casts.$to(___1, Boolean));
   this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_classList__org_jboss_elemento_ClassList().m_toggle__java_lang_String__boolean__void(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_scrollable__org_patternfly_style_Classes), Boolean.m_booleanValue__java_lang_Boolean__boolean(current_3));
  }));
  this.f_renderScrollButtons__org_patternfly_component_tabs_Tabs_.m_subscribe__org_patternfly_core_ObservableValue_Subscriber__org_patternfly_core_ObservableValue(Subscriber.$adapt((current_4, ___3) =>{
   let current_5 = /**@type {?boolean}*/ ($Casts.$to(current_4, Boolean));
   let ___4 = /**@type {?boolean}*/ ($Casts.$to(___3, Boolean));
   Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this.f_scrollBack__org_patternfly_component_tabs_Tabs_, Boolean.m_booleanValue__java_lang_Boolean__boolean(current_5));
   Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this.f_scrollForward__org_patternfly_component_tabs_Tabs_, Boolean.m_booleanValue__java_lang_Boolean__boolean(current_5));
  }));
  this.f_disableBackScrollButton__org_patternfly_component_tabs_Tabs_.m_subscribe__org_patternfly_core_ObservableValue_Subscriber__org_patternfly_core_ObservableValue(Subscriber.$adapt((current_6, ___5) =>{
   let current_7 = /**@type {?boolean}*/ ($Casts.$to(current_6, Boolean));
   let ___6 = /**@type {?boolean}*/ ($Casts.$to(___5, Boolean));
   /**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_scrollBack__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)).disabled = Boolean.m_booleanValue__java_lang_Boolean__boolean(current_7);
   this.f_scrollBack__org_patternfly_component_tabs_Tabs_.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_disabled__org_patternfly_core_Aria, Boolean.m_booleanValue__java_lang_Boolean__boolean(current_7));
  }));
  this.f_disableForwardScrollButton__org_patternfly_component_tabs_Tabs_.m_subscribe__org_patternfly_core_ObservableValue_Subscriber__org_patternfly_core_ObservableValue(Subscriber.$adapt((current_8, ___7) =>{
   let current_9 = /**@type {?boolean}*/ ($Casts.$to(current_8, Boolean));
   let ___8 = /**@type {?boolean}*/ ($Casts.$to(___7, Boolean));
   /**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_scrollForward__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)).disabled = Boolean.m_booleanValue__java_lang_Boolean__boolean(current_9);
   this.f_scrollForward__org_patternfly_component_tabs_Tabs_.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_disabled__org_patternfly_core_Aria, Boolean.m_booleanValue__java_lang_Boolean__boolean(current_9));
  }));
 }
 /** @nodts */
 m_attachOverflow__void_$p_org_patternfly_component_tabs_Tabs() {
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_scrollBack__org_patternfly_component_tabs_Tabs_);
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_scrollForward__org_patternfly_component_tabs_Tabs_);
 }
 /** @nodts */
 m_attachTabs__void_$p_org_patternfly_component_tabs_Tabs() {
  for (let $iterator = this.f_tabs__org_patternfly_component_tabs_Tabs_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let tab = /**@type {Tab}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tab));
   {
    this.m_addTabToDOM__org_patternfly_component_tabs_Tab__void_$p_org_patternfly_component_tabs_Tabs(tab);
   }
  }
  if (this.f_overflowHorizontal__org_patternfly_component_tabs_Tabs_) {
   this.f_tabsContainer__org_patternfly_component_tabs_Tabs_.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_overflowTab__org_patternfly_component_tabs_Tabs_);
  }
  if (!this.f_noInitialSelection__org_patternfly_component_tabs_Tabs_) {
   /**@type {Tab}*/ ($Casts.$to(this.f_tabs__org_patternfly_component_tabs_Tabs_.values().m_iterator__java_util_Iterator().m_next__java_lang_Object(), Tab)).m_select__boolean__void_$pp_org_patternfly_component_tabs(true);
  }
 }
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  goog.global.clearTimeout(this.f_scrollTimeout__org_patternfly_component_tabs_Tabs_);
  if (!$Equality.$same(this.f_resizeHandler__org_patternfly_component_tabs_Tabs_, null)) {
   this.f_resizeHandler__org_patternfly_component_tabs_Tabs_.m_removeHandler__void();
  }
  if (!$Equality.$same(this.f_transitionEndHandler__org_patternfly_component_tabs_Tabs_, null)) {
   this.f_transitionEndHandler__org_patternfly_component_tabs_Tabs_.m_removeHandler__void();
  }
  if (!$Equality.$same(this.f_overflowTab__org_patternfly_component_tabs_Tabs_, null)) {
   this.f_overflowTab__org_patternfly_component_tabs_Tabs_.m_detach__void_$pp_org_patternfly_component_tabs();
  }
  for (let $iterator = this.f_tabs__org_patternfly_component_tabs_Tabs_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let tab = /**@type {Tab}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tab));
   {
    Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(tab.f_help__org_patternfly_component_tabs_Tab);
    Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(tab.f_tooltip__org_patternfly_component_tabs_Tab);
   }
  }
 }
 /** @nodts @template T @return {Tabs} */
 m_addTabs__java_lang_Iterable__java_util_function_Function__org_patternfly_component_tabs_Tabs(/** Iterable<T> */ items, /** j_u_function_Function<T, Tab> */ display) {
  let attached = Elements.m_isAttached__elemental2_dom_Node__boolean(this.m_element__elemental2_dom_HTMLElement());
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let tab = /**@type {Tab}*/ ($Casts.$to(display.m_apply__java_lang_Object__java_lang_Object(item), Tab));
    this.f_tabs__org_patternfly_component_tabs_Tabs_.put(tab.f_id__org_patternfly_component_tabs_Tab, tab);
    if (attached) {
     this.m_addTabToDOM__org_patternfly_component_tabs_Tab__void_$p_org_patternfly_component_tabs_Tabs(tab);
    }
   }
  }
  if (attached) {
   this.m_updateState__void_$p_org_patternfly_component_tabs_Tabs();
  }
  return this;
 }
 /** @nodts @return {Tabs} */
 m_addTab__org_patternfly_component_tabs_Tab__org_patternfly_component_tabs_Tabs(/** Tab */ tab) {
  return this.m_add__org_patternfly_component_tabs_Tab__org_patternfly_component_tabs_Tabs(tab);
 }
 /** @nodts @return {Tabs} */
 m_add__org_patternfly_component_tabs_Tab__org_patternfly_component_tabs_Tabs(/** Tab */ tab) {
  this.f_tabs__org_patternfly_component_tabs_Tabs_.put(tab.f_id__org_patternfly_component_tabs_Tab, tab);
  if (Elements.m_isAttached__elemental2_dom_Node__boolean(this.m_element__elemental2_dom_HTMLElement())) {
   this.m_addTabToDOM__org_patternfly_component_tabs_Tab__void_$p_org_patternfly_component_tabs_Tabs(tab);
   this.m_updateState__void_$p_org_patternfly_component_tabs_Tabs();
  }
  return this;
 }
 /** @nodts @return {Tabs} */
 m_box__boolean__org_patternfly_component_tabs_Tabs(/** boolean */ box) {
  return /**@type {Tabs}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, /**@type {HTMLElement}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()), Classes.f_box__org_patternfly_style_Classes, box), Tabs));
 }
 /** @nodts @return {Tabs} */
 m_closeable__org_patternfly_component_tabs_Tabs() {
  this.f_closeable__org_patternfly_component_tabs_Tabs_ = true;
  return this.m_closeable__org_patternfly_handler_CloseHandler__org_patternfly_component_tabs_Tabs(null);
 }
 /** @nodts @return {Tabs} */
 m_closeable__org_patternfly_handler_CloseHandler__org_patternfly_component_tabs_Tabs(/** CloseHandler<Tab> */ closeHandler) {
  this.f_closeable__org_patternfly_component_tabs_Tabs_ = true;
  this.f_closeHandler__org_patternfly_component_tabs_Tabs_ = closeHandler;
  return this;
 }
 /** @nodts @return {Tabs} */
 m_expandable__org_patternfly_style_Breakpoints__org_patternfly_component_tabs_Tabs(/** Breakpoints<ExpandableModifier> */ expandable) {
  this.f_expandable__org_patternfly_component_tabs_Tabs_ = expandable.m_hasValue__java_lang_Object__boolean(ExpandableModifier.f_expandable__org_patternfly_style_ExpandableModifier);
  this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([expandable.m_modifiers__java_lang_String()], j_l_String)));
  return this;
 }
 /** @nodts @return {Tabs} */
 m_fill__boolean__org_patternfly_component_tabs_Tabs(/** boolean */ fill) {
  return /**@type {Tabs}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, /**@type {HTMLElement}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()), Classes.f_fill__org_patternfly_style_Classes, fill), Tabs));
 }
 /** @nodts @return {Tabs} */
 m_lightTabs__org_patternfly_component_tabs_Tabs() {
  return this.m_lightTabs__boolean__org_patternfly_component_tabs_Tabs(true);
 }
 /** @nodts @return {Tabs} */
 m_lightTabs__boolean__org_patternfly_component_tabs_Tabs(/** boolean */ lightTabs) {
  this.f_lightTabs__org_patternfly_component_tabs_Tabs_ = lightTabs;
  if (lightTabs) {
   this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String('color-scheme--light-300')], j_l_String)));
  } else {
   this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String('color-scheme--light-300')], j_l_String)));
  }
  if (Elements.m_isAttached__org_jboss_elemento_IsElement__boolean(this)) {
   for (let $iterator = this.f_tabs__org_patternfly_component_tabs_Tabs_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let tab = /**@type {Tab}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tab));
    {
     if (!$Equality.$same(tab.f_content__org_patternfly_component_tabs_Tab, null)) {
      tab.f_content__org_patternfly_component_tabs_Tab.m_classList__org_jboss_elemento_ClassList().m_toggle__java_lang_String__boolean__void(Classes.m_modifier__java_lang_String__java_lang_String('light-300'), lightTabs);
     }
    }
   }
  }
  return this;
 }
 /** @nodts @return {Tabs} */
 m_inset__org_patternfly_style_Breakpoints__org_patternfly_component_tabs_Tabs(/** Breakpoints<Inset> */ inset) {
  this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([inset.m_modifiers__java_lang_String()], j_l_String)));
  return this;
 }
 /** @nodts @return {Tabs} */
 m_noBorderBottom__org_patternfly_component_tabs_Tabs() {
  return this.m_noBorderBottom__boolean__org_patternfly_component_tabs_Tabs(true);
 }
 /** @nodts @return {Tabs} */
 m_noBorderBottom__boolean__org_patternfly_component_tabs_Tabs(/** boolean */ noBorderBottom) {
  return /**@type {Tabs}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, /**@type {HTMLElement}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()), Classes.f_noBorderBottom__org_patternfly_style_Classes, noBorderBottom), Tabs));
 }
 /** @nodts @return {Tabs} */
 m_pageInsets__boolean__org_patternfly_component_tabs_Tabs(/** boolean */ pageInsets) {
  return /**@type {Tabs}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, /**@type {HTMLElement}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()), Classes.f_pageInsets__org_patternfly_style_Classes, pageInsets), Tabs));
 }
 /** @nodts @return {Tabs} */
 m_overflowHorizontal__org_patternfly_component_tabs_Tabs() {
  return this.m_overflowHorizontal__java_lang_String__org_patternfly_component_tabs_Tabs('More');
 }
 /** @nodts @return {Tabs} */
 m_overflowHorizontal__java_lang_String__org_patternfly_component_tabs_Tabs(/** ?string */ overflowText) {
  this.f_overflowHorizontal__org_patternfly_component_tabs_Tabs_ = true;
  this.m_failSafeOverflowTab__org_patternfly_component_tabs_OverflowTab_$p_org_patternfly_component_tabs_Tabs().m_text__java_lang_String__void_$pp_org_patternfly_component_tabs(overflowText);
  this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_overflow__org_patternfly_style_Classes)], j_l_String)));
  return this;
 }
 /** @nodts @return {Tabs} */
 m_noInitialSelection__org_patternfly_component_tabs_Tabs() {
  this.f_noInitialSelection__org_patternfly_component_tabs_Tabs_ = true;
  return this;
 }
 /** @nodts @return {Tabs} */
 m_secondary__boolean__org_patternfly_component_tabs_Tabs(/** boolean */ secondary) {
  return /**@type {Tabs}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, /**@type {HTMLElement}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()), Classes.f_secondary__org_patternfly_style_Classes, secondary), Tabs));
 }
 /** @nodts @return {Tabs} */
 m_showTabCount__org_patternfly_component_tabs_Tabs() {
  return this.m_showTabCount__boolean__org_patternfly_component_tabs_Tabs(true);
 }
 /** @nodts @return {Tabs} */
 m_showTabCount__boolean__org_patternfly_component_tabs_Tabs(/** boolean */ showTabCount) {
  this.m_failSafeOverflowTab__org_patternfly_component_tabs_OverflowTab_$p_org_patternfly_component_tabs_Tabs().m_showCount__boolean__void_$pp_org_patternfly_component_tabs(showTabCount);
  return this;
 }
 /** @nodts @return {Tabs} */
 m_toggleText__java_lang_String__org_patternfly_component_tabs_Tabs(/** ?string */ text) {
  this.m_failSafeTabsToggle__org_patternfly_component_tabs_TabsToggle_$p_org_patternfly_component_tabs_Tabs().m_text__java_lang_String__void_$pp_org_patternfly_component_tabs(text);
  return this;
 }
 /** @nodts @return {Tabs} */
 m_vertical__boolean__org_patternfly_component_tabs_Tabs(/** boolean */ vertical) {
  this.f_vertical__org_patternfly_component_tabs_Tabs_ = vertical;
  return /**@type {Tabs}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, /**@type {HTMLElement}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()), Classes.f_vertical__org_patternfly_style_Classes, vertical), Tabs));
 }
 /** @nodts @return {Tabs} */
 m_that__org_patternfly_component_tabs_Tabs() {
  return this;
 }
 /** @nodts @return {Tabs} */
 m_ariaLabel__java_lang_String__org_patternfly_component_tabs_Tabs(/** ?string */ label) {
  return /**@type {Tabs}*/ ($Casts.$to(this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label), Tabs));
 }
 /** @nodts @return {Tabs} */
 m_ariaAddLabel__java_lang_String__org_patternfly_component_tabs_Tabs(/** ?string */ label) {
  if (!$Equality.$same(this.f_addButton__org_patternfly_component_tabs_Tabs_, null)) {
   this.f_addButton__org_patternfly_component_tabs_Tabs_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  } else {
   Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'Unable to set aria add label. Please make call onAdd() first.');
  }
  return this;
 }
 /** @nodts @return {Tabs} */
 m_ariaScrollBackLabel__java_lang_String__org_patternfly_component_tabs_Tabs(/** ?string */ label) {
  this.f_scrollBack__org_patternfly_component_tabs_Tabs_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  return this;
 }
 /** @nodts @return {Tabs} */
 m_ariaScrollForwardLabel__java_lang_String__org_patternfly_component_tabs_Tabs(/** ?string */ label) {
  this.f_scrollForward__org_patternfly_component_tabs_Tabs_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  return this;
 }
 /** @nodts @return {Tabs} */
 m_ariaOverflowLabel__java_lang_String__org_patternfly_component_tabs_Tabs(/** ?string */ label) {
  this.m_failSafeOverflowTab__org_patternfly_component_tabs_OverflowTab_$p_org_patternfly_component_tabs_Tabs().m_ariaLabel__java_lang_String__void_$pp_org_patternfly_component_tabs(label);
  return this;
 }
 /** @nodts @return {Tabs} */
 m_ariaToggleLabel__java_lang_String__org_patternfly_component_tabs_Tabs(/** ?string */ label) {
  this.m_failSafeTabsToggle__org_patternfly_component_tabs_TabsToggle_$p_org_patternfly_component_tabs_Tabs().m_ariaLabel__java_lang_String__void_$pp_org_patternfly_component_tabs(label);
  return this;
 }
 /** @nodts @return {Tabs} */
 m_onAdd__java_util_function_Function__org_patternfly_component_tabs_Tabs(/** j_u_function_Function<Tabs, Tab> */ addHandler) {
  if ($Equality.$same(this.f_addButton__org_patternfly_component_tabs_Tabs_, null)) {
   Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_tabs__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_add__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_addButton__org_patternfly_component_tabs_Tabs_ = /**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_plain__org_jboss_elemento_TypedBuilder(), Button)).m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_plus__org_patternfly_icon_PredefinedIcon()), Button)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Add new tab'), Button)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
    let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
    this.m_addTab__org_patternfly_component_tabs_Tab__org_patternfly_component_tabs_Tabs(/**@type {Tab}*/ ($Casts.$to(addHandler.m_apply__java_lang_Object__java_lang_Object(this), Tab)));
   }), Button))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), /**@type {HTMLUListElement}*/ ($Casts.$to(this.f_tabsContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)));
  }
  this.f_addHandler__org_patternfly_component_tabs_Tabs_ = addHandler;
  return this;
 }
 /** @nodts @return {Tabs} */
 m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_tabs_Tabs(/** CloseHandler<Tab> */ closeHandler) {
  this.f_closeHandler__org_patternfly_component_tabs_Tabs_ = closeHandler;
  return null;
 }
 /** @nodts @return {Tabs} */
 m_onSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_tabs_Tabs(/** SelectHandler<Tab> */ selectHandler) {
  this.f_selectHandler__org_patternfly_component_tabs_Tabs_ = selectHandler;
  return this;
 }
 /** @nodts @return {Tabs} */
 m_onToggle__org_patternfly_handler_ToggleHandler__org_patternfly_component_tabs_Tabs(/** ToggleHandler<Tabs> */ toggleHandler) {
  this.f_toggleHandler__org_patternfly_component_tabs_Tabs_ = toggleHandler;
  return this;
 }
 /** @override @nodts @return {boolean} */
 m_expanded__boolean() {
  return Expandable.m_expanded__elemental2_dom_Element__boolean(/**@type {Element}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()));
 }
 /** @override @nodts */
 m_collapse__boolean__void(/** boolean */ fireEvent) {
  if (!$Equality.$same(this.f_tabsToggle__org_patternfly_component_tabs_Tabs_, null)) {
   Expandable.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLElement}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()), this.f_tabsToggle__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement(), null);
   if (fireEvent && !$Equality.$same(this.f_toggleHandler__org_patternfly_component_tabs_Tabs_, null)) {
    this.f_toggleHandler__org_patternfly_component_tabs_Tabs_.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, false);
   }
  }
 }
 /** @override @nodts */
 m_expand__boolean__void(/** boolean */ fireEvent) {
  if (!$Equality.$same(this.f_tabsToggle__org_patternfly_component_tabs_Tabs_, null)) {
   Expandable.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(/**@type {HTMLElement}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()), this.f_tabsToggle__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement(), null);
   if (fireEvent && !$Equality.$same(this.f_toggleHandler__org_patternfly_component_tabs_Tabs_, null)) {
    this.f_toggleHandler__org_patternfly_component_tabs_Tabs_.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, true);
   }
  }
 }
 /** @nodts */
 m_close__java_lang_String__void(/** ?string */ id) {
  if (!$Equality.$same(id, null)) {
   this.m_close__org_patternfly_component_tabs_Tab__void(/**@type {Tab}*/ ($Casts.$to(this.f_tabs__org_patternfly_component_tabs_Tabs_.get(id), Tab)));
  } else {
   Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, /**@type {Element}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()), 'Cannot close tab: No tab id given.');
  }
 }
 /** @nodts */
 m_close__org_patternfly_component_tabs_Tab__void(/** Tab */ tab) {
  if (!$Equality.$same(tab, null)) {
   this.f_tabs__org_patternfly_component_tabs_Tabs_.remove(tab.f_id__org_patternfly_component_tabs_Tab);
   Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(tab.f_help__org_patternfly_component_tabs_Tab);
   Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(tab.f_tooltip__org_patternfly_component_tabs_Tab);
   Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(tab.f_content__org_patternfly_component_tabs_Tab);
   Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(tab);
   this.m_updateState__void_$p_org_patternfly_component_tabs_Tabs();
  } else {
   Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, /**@type {Element}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()), 'Cannot close tab: No tab given.');
  }
 }
 /** @nodts */
 m_select__java_lang_String__void(/** ?string */ id) {
  if (!$Equality.$same(id, null)) {
   this.m_select__org_patternfly_component_tabs_Tab__void(/**@type {Tab}*/ ($Casts.$to(this.f_tabs__org_patternfly_component_tabs_Tabs_.get(id), Tab)));
  } else {
   Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, /**@type {Element}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()), 'Cannot select tab: No tab id given.');
  }
 }
 /** @nodts */
 m_select__org_patternfly_component_tabs_Tab__void(/** Tab */ tab) {
  if (!$Equality.$same(tab, null)) {
   for (let $iterator = this.f_tabs__org_patternfly_component_tabs_Tabs_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let t = /**@type {Tab}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tab));
    {
     if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(tab.f_id__org_patternfly_component_tabs_Tab, t.f_id__org_patternfly_component_tabs_Tab)) {
      this.f_currentTab__org_patternfly_component_tabs_Tabs_ = t;
      t.m_select__boolean__void_$pp_org_patternfly_component_tabs(true);
     } else {
      t.m_select__boolean__void_$pp_org_patternfly_component_tabs(false);
     }
    }
   }
   if (this.f_overflowHorizontal__org_patternfly_component_tabs_Tabs_ && Elements.m_isVisible__org_jboss_elemento_IsElement__boolean(tab)) {
    this.f_overflowTab__org_patternfly_component_tabs_Tabs_.m_unselect__void_$pp_org_patternfly_component_tabs();
   }
   if (!$Equality.$same(this.f_selectHandler__org_patternfly_component_tabs_Tabs_, null)) {
    this.f_selectHandler__org_patternfly_component_tabs_Tabs_.m_onSelect__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), tab, true);
   }
  } else {
   Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, /**@type {Element}*/ (this.f_mainContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement()), 'Cannot select tab: No tab given.');
  }
 }
 /** @nodts @return {Tab} */
 m_currentTab__org_patternfly_component_tabs_Tab() {
  return this.f_currentTab__org_patternfly_component_tabs_Tabs_;
 }
 /** @nodts @return {Tab} */
 m_tab__java_lang_String__org_patternfly_component_tabs_Tab(/** ?string */ id) {
  return /**@type {Tab}*/ ($Casts.$to(this.f_tabs__org_patternfly_component_tabs_Tabs_.get(id), Tab));
 }
 /** @nodts */
 m_addTabToDOM__org_patternfly_component_tabs_Tab__void_$p_org_patternfly_component_tabs_Tabs(/** Tab */ tab) {
  this.m_addTabHandle__org_patternfly_component_tabs_Tab__void_$p_org_patternfly_component_tabs_Tabs(tab);
  if (!$Equality.$same(tab.f_content__org_patternfly_component_tabs_Tab, null)) {
   this.m_addTabContent__org_patternfly_component_tabs_Tab__void_$pp_org_patternfly_component_tabs(tab);
  }
 }
 /** @nodts */
 m_addTabHandle__org_patternfly_component_tabs_Tab__void_$p_org_patternfly_component_tabs_Tabs(/** Tab */ tab) {
  if (!$Equality.$same(tab.f_tooltip__org_patternfly_component_tabs_Tab, null)) {
   tab.f_tooltip__org_patternfly_component_tabs_Tab.m_trigger__elemental2_dom_HTMLElement__org_patternfly_component_tooltip_Tooltip(/**@type {HTMLElement}*/ (tab.f_button__org_patternfly_component_tabs_Tab.m_element__elemental2_dom_HTMLElement()));
   tab.f_tooltip__org_patternfly_component_tabs_Tab.m_appendToBody__org_patternfly_component_tooltip_Tooltip();
  }
  if (!$Equality.$same(tab.f_help__org_patternfly_component_tabs_Tab, null)) {
   tab.f_help__org_patternfly_component_tabs_Tab.m_trigger__elemental2_dom_HTMLElement__org_patternfly_component_popover_Popover(tab.f_helpButton__org_patternfly_component_tabs_Tab.m_element__elemental2_dom_HTMLElement());
   tab.f_help__org_patternfly_component_tabs_Tab.m_appendToBody__org_patternfly_component_popover_Popover();
  }
  if (this.f_closeable__org_patternfly_component_tabs_Tabs_ && $Equality.$same(tab.f_closeHandler__org_patternfly_component_tabs_Tab, null)) {
   tab.m_closeable__org_patternfly_handler_CloseHandler__org_patternfly_component_tabs_Tab(this.f_closeHandler__org_patternfly_component_tabs_Tabs_);
  }
  if (Elements.m_isAttached__org_jboss_elemento_IsElement__boolean(this.f_overflowTab__org_patternfly_component_tabs_Tabs_)) {
   Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(tab.m_element__elemental2_dom_HTMLElement(), this.f_overflowTab__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement());
  } else {
   this.f_tabsContainer__org_patternfly_component_tabs_Tabs_.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(tab);
  }
 }
 /** @nodts */
 m_addTabContent__org_patternfly_component_tabs_Tab__void_$pp_org_patternfly_component_tabs(/** Tab */ tab) {
  tab.f_button__org_patternfly_component_tabs_Tab.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_controls__org_patternfly_core_Aria, tab.f_contentId__org_patternfly_component_tabs_Tab);
  tab.f_content__org_patternfly_component_tabs_Tab.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, tab.f_buttonId__org_patternfly_component_tabs_Tab);
  if (this.f_lightTabs__org_patternfly_component_tabs_Tabs_) {
   tab.f_content__org_patternfly_component_tabs_Tab.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String('light-300')], j_l_String)));
  }
  this.m_element__elemental2_dom_HTMLElement().appendChild(tab.f_content__org_patternfly_component_tabs_Tab.m_element__elemental2_dom_HTMLElement());
  tab.f_content__org_patternfly_component_tabs_Tab.m_element__elemental2_dom_HTMLElement().hidden = true;
 }
 /** @nodts */
 m_updateState__void_$p_org_patternfly_component_tabs_Tabs() {
  goog.global.clearTimeout(this.f_scrollTimeout__org_patternfly_component_tabs_Tabs_);
  this.f_scrollTimeout__org_patternfly_component_tabs_Tabs_ = DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ __) =>{
   if (!this.f_vertical__org_patternfly_component_tabs_Tabs_ && !this.f_overflowHorizontal__org_patternfly_component_tabs_Tabs_) {
    let overflowOnLeft = !Elements.m_isElementInView__org_jboss_elemento_IsElement__elemental2_dom_HTMLElement__boolean__boolean(this.f_tabsContainer__org_patternfly_component_tabs_Tabs_, /**@type {HTMLElement}*/ ($Casts.$to(/**@type {HTMLUListElement}*/ ($Casts.$to(this.f_tabsContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)).firstElementChild, $Overlay)), false);
    let overflowOnRight = !Elements.m_isElementInView__org_jboss_elemento_IsElement__elemental2_dom_HTMLElement__boolean__boolean(this.f_tabsContainer__org_patternfly_component_tabs_Tabs_, /**@type {HTMLElement}*/ ($Casts.$to(/**@type {HTMLUListElement}*/ ($Casts.$to(this.f_tabsContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)).lastElementChild, $Overlay)), false);
    this.f_enableScrollButtons__org_patternfly_component_tabs_Tabs_.m_change__java_lang_Object__void(overflowOnLeft || overflowOnRight);
    this.f_disableBackScrollButton__org_patternfly_component_tabs_Tabs_.m_change__java_lang_Object__void(!overflowOnLeft);
    this.f_disableForwardScrollButton__org_patternfly_component_tabs_Tabs_.m_change__java_lang_Object__void(!overflowOnRight);
   }
   if (this.f_overflowHorizontal__org_patternfly_component_tabs_Tabs_) {
    this.m_updateOverflow__void_$p_org_patternfly_component_tabs_Tabs();
   }
   let size = this.f_tabs__org_patternfly_component_tabs_Tabs_.size();
   for (let $iterator = this.f_tabs__org_patternfly_component_tabs_Tabs_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let tab = /**@type {Tab}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tab));
    {
     tab.m_disableCloseButton__boolean__void_$pp_org_patternfly_component_tabs(size == 1);
    }
   }
  }, 100, []);
 }
 /** @nodts */
 m_hideScrollButtons__void_$p_org_patternfly_component_tabs_Tabs() {
  if (!Boolean.m_booleanValue__java_lang_Boolean__boolean(/**@type {?boolean}*/ ($Casts.$to(this.f_enableScrollButtons__org_patternfly_component_tabs_Tabs_.m_get__java_lang_Object(), Boolean))) && !Boolean.m_booleanValue__java_lang_Boolean__boolean(/**@type {?boolean}*/ ($Casts.$to(this.f_showScrollButtons__org_patternfly_component_tabs_Tabs_.m_get__java_lang_Object(), Boolean))) && Boolean.m_booleanValue__java_lang_Boolean__boolean(/**@type {?boolean}*/ ($Casts.$to(this.f_renderScrollButtons__org_patternfly_component_tabs_Tabs_.m_get__java_lang_Object(), Boolean)))) {
   this.f_renderScrollButtons__org_patternfly_component_tabs_Tabs_.m_change__java_lang_Object__void(false);
  }
 }
 /** @nodts */
 m_scrollBack__void_$p_org_patternfly_component_tabs_Tabs() {
  let firstElementInView = null;
  let lastElementOutOfView = null;
  let children = /**@type {HTMLUListElement}*/ ($Casts.$to(this.f_tabsContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)).childNodes;
  for (let i = 0; i < children.length && $Equality.$same(firstElementInView, null); i = i + 1 | 0) {
   let child = /**@type {HTMLElement}*/ ($Casts.$to(children.item(i), $Overlay));
   if (Elements.m_isElementInView__org_jboss_elemento_IsElement__elemental2_dom_HTMLElement__boolean__boolean(this.f_tabsContainer__org_patternfly_component_tabs_Tabs_, child, false)) {
    firstElementInView = child;
    lastElementOutOfView = /**@type {HTMLElement}*/ ($Casts.$to(children.item(i - 1 | 0), $Overlay));
   }
  }
  if (!$Equality.$same(lastElementOutOfView, null)) {
   if ($Equality.$same(LanguageDirection.m_languageDirection__elemental2_dom_HTMLElement__org_patternfly_core_LanguageDirection(this.m_element__elemental2_dom_HTMLElement()), LanguageDirection.f_ltr__org_patternfly_core_LanguageDirection)) {
    /**@type {HTMLUListElement}*/ ($Casts.$to(this.f_tabsContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)).scrollLeft -= lastElementOutOfView.scrollWidth;
   } else {
    /**@type {HTMLUListElement}*/ ($Casts.$to(this.f_tabsContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)).scrollLeft += lastElementOutOfView.scrollWidth;
   }
  }
 }
 /** @nodts */
 m_scrollForward__void_$p_org_patternfly_component_tabs_Tabs() {
  let lastElementInView = null;
  let firstElementOutOfView = null;
  let children = /**@type {HTMLUListElement}*/ ($Casts.$to(this.f_tabsContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)).childNodes;
  for (let i = children.length - 1 | 0; i >= 0 && $Equality.$same(lastElementInView, null); i = i - 1 | 0) {
   let child = /**@type {HTMLElement}*/ ($Casts.$to(children.item(i), $Overlay));
   if (Elements.m_isElementInView__org_jboss_elemento_IsElement__elemental2_dom_HTMLElement__boolean__boolean(this.f_tabsContainer__org_patternfly_component_tabs_Tabs_, child, false)) {
    lastElementInView = child;
    firstElementOutOfView = /**@type {HTMLElement}*/ ($Casts.$to(children.item(i + 1 | 0), $Overlay));
   }
  }
  if (!$Equality.$same(firstElementOutOfView, null)) {
   if ($Equality.$same(LanguageDirection.m_languageDirection__elemental2_dom_HTMLElement__org_patternfly_core_LanguageDirection(this.m_element__elemental2_dom_HTMLElement()), LanguageDirection.f_ltr__org_patternfly_core_LanguageDirection)) {
    /**@type {HTMLUListElement}*/ ($Casts.$to(this.f_tabsContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)).scrollLeft += firstElementOutOfView.scrollWidth;
   } else {
    /**@type {HTMLUListElement}*/ ($Casts.$to(this.f_tabsContainer__org_patternfly_component_tabs_Tabs_.m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)).scrollLeft -= firstElementOutOfView.scrollWidth;
   }
  }
 }
 /** @nodts */
 m_updateOverflow__void_$p_org_patternfly_component_tabs_Tabs() {
  let count = 0;
  let overflowingTabs = /**@type {!ArrayList<Tab>}*/ (ArrayList.$create__());
  for (let $iterator = this.f_tabs__org_patternfly_component_tabs_Tabs_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let tab = /**@type {Tab}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tab));
   {
    Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(tab, true);
    if (!Elements.m_isElementInView__org_jboss_elemento_IsElement__org_jboss_elemento_IsElement__boolean__boolean(this.f_tabsContainer__org_patternfly_component_tabs_Tabs_, tab, false)) {
     count = count + 1 | 0;
    }
   }
  }
  if (count > 0) {
   Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this.f_overflowTab__org_patternfly_component_tabs_Tabs_, true);
   let tabValues = /**@type {!LinkedList<Tab>}*/ (LinkedList.$create__java_util_Collection(this.f_tabs__org_patternfly_component_tabs_Tabs_.values()));
   for (let iterator = tabValues.m_listIterator__int__java_util_ListIterator(tabValues.size()); iterator.m_hasPrevious__boolean() && !Elements.m_isElementInView__org_jboss_elemento_IsElement__org_jboss_elemento_IsElement__boolean__boolean(this.f_tabsContainer__org_patternfly_component_tabs_Tabs_, this.f_overflowTab__org_patternfly_component_tabs_Tabs_, false); ) {
    let tab_1 = /**@type {Tab}*/ ($Casts.$to(iterator.m_previous__java_lang_Object(), Tab));
    Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(tab_1, false);
    overflowingTabs.add(tab_1);
   }
   Collections.m_reverse__java_util_List__void(overflowingTabs);
  }
  this.f_overflowTab__org_patternfly_component_tabs_Tabs_.m_update__java_util_List__void_$pp_org_patternfly_component_tabs(overflowingTabs);
 }
 /** @nodts @return {OverflowTab} */
 m_failSafeOverflowTab__org_patternfly_component_tabs_OverflowTab_$p_org_patternfly_component_tabs_Tabs() {
  if ($Equality.$same(this.f_overflowTab__org_patternfly_component_tabs_Tabs_, null)) {
   this.f_overflowTab__org_patternfly_component_tabs_Tabs_ = OverflowTab.m_overflowTab__org_patternfly_component_tabs_OverflowTab();
  }
  return this.f_overflowTab__org_patternfly_component_tabs_Tabs_;
 }
 /** @nodts @return {TabsToggle} */
 m_failSafeTabsToggle__org_patternfly_component_tabs_TabsToggle_$p_org_patternfly_component_tabs_Tabs() {
  if ($Equality.$same(this.f_tabsToggle__org_patternfly_component_tabs_Tabs_, null)) {
   this.f_tabsToggle__org_patternfly_component_tabs_Tabs_ = TabsToggle.m_tabsToggle__org_patternfly_component_tabs_TabsToggle();
  }
  return this.f_tabsToggle__org_patternfly_component_tabs_Tabs_;
 }
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_tabs_Tabs();
 }
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_box__org_jboss_elemento_TypedBuilder() {
  return /**@type {Tabs}*/ ($Casts.$to(Box.m_box__$default__org_patternfly_style_Modifiers_Box__org_jboss_elemento_TypedBuilder(this), Tabs));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_box__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_box__boolean__org_patternfly_component_tabs_Tabs(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_collapse__void() {
  Expandable.m_collapse__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_expand__void() {
  Expandable.m_expand__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_toggle__void() {
  Expandable.m_toggle__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_toggle__boolean__void(/** boolean */ arg0) {
  Expandable.m_toggle__$default__org_patternfly_component_Expandable__boolean__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_fill__org_jboss_elemento_TypedBuilder() {
  return /**@type {Tabs}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__org_jboss_elemento_TypedBuilder(this), Tabs));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_fill__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_fill__boolean__org_patternfly_component_tabs_Tabs(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_pageInsets__org_jboss_elemento_TypedBuilder() {
  return /**@type {Tabs}*/ ($Casts.$to(PageInsets.m_pageInsets__$default__org_patternfly_style_Modifiers_PageInsets__org_jboss_elemento_TypedBuilder(this), Tabs));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_pageInsets__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_pageInsets__boolean__org_patternfly_component_tabs_Tabs(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_secondary__org_jboss_elemento_TypedBuilder() {
  return /**@type {Tabs}*/ ($Casts.$to(Secondary.m_secondary__$default__org_patternfly_style_Modifiers_Secondary__org_jboss_elemento_TypedBuilder(this), Tabs));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_secondary__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_secondary__boolean__org_patternfly_component_tabs_Tabs(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_vertical__org_jboss_elemento_TypedBuilder() {
  return /**@type {Tabs}*/ ($Casts.$to(Vertical.m_vertical__$default__org_patternfly_style_Modifiers_Vertical__org_jboss_elemento_TypedBuilder(this), Tabs));
 }
 //Bridge method.
 /** @final @override @nodts @return {Tabs} */
 m_vertical__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_vertical__boolean__org_patternfly_component_tabs_Tabs(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {Tabs} */
 m_box__org_patternfly_component_tabs_Tabs() {
  return /**@type {Tabs}*/ ($Casts.$to(Box.m_box__$default__org_patternfly_style_Modifiers_Box__org_jboss_elemento_TypedBuilder(this), Tabs));
 }
 //Default method forwarding stub.
 /** @nodts @return {Tabs} */
 m_fill__org_patternfly_component_tabs_Tabs() {
  return /**@type {Tabs}*/ ($Casts.$to(Fill.m_fill__$default__org_patternfly_style_Modifiers_Fill__org_jboss_elemento_TypedBuilder(this), Tabs));
 }
 //Default method forwarding stub.
 /** @nodts @return {Tabs} */
 m_pageInsets__org_patternfly_component_tabs_Tabs() {
  return /**@type {Tabs}*/ ($Casts.$to(PageInsets.m_pageInsets__$default__org_patternfly_style_Modifiers_PageInsets__org_jboss_elemento_TypedBuilder(this), Tabs));
 }
 //Default method forwarding stub.
 /** @nodts @return {Tabs} */
 m_secondary__org_patternfly_component_tabs_Tabs() {
  return /**@type {Tabs}*/ ($Casts.$to(Secondary.m_secondary__$default__org_patternfly_style_Modifiers_Secondary__org_jboss_elemento_TypedBuilder(this), Tabs));
 }
 //Default method forwarding stub.
 /** @nodts @return {Tabs} */
 m_vertical__org_patternfly_component_tabs_Tabs() {
  return /**@type {Tabs}*/ ($Casts.$to(Vertical.m_vertical__$default__org_patternfly_style_Modifiers_Vertical__org_jboss_elemento_TypedBuilder(this), Tabs));
 }
 /** @nodts */
 static $clinit() {
  Tabs.$clinit = () =>{};
  Tabs.$loadModules();
  BaseComponentFlat.$clinit();
  Attachable.$clinit();
  Box.$clinit();
  Expandable.$clinit();
  Fill.$clinit();
  PageInsets.$clinit();
  Secondary.$clinit();
  Vertical.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Tabs;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  OverflowTab = goog.module.get('org.patternfly.component.tabs.OverflowTab$impl');
  Tab = goog.module.get('org.patternfly.component.tabs.Tab$impl');
  TabsToggle = goog.module.get('org.patternfly.component.tabs.TabsToggle$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  LanguageDirection = goog.module.get('org.patternfly.core.LanguageDirection$impl');
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
  ObservableValue = goog.module.get('org.patternfly.core.ObservableValue$impl');
  Subscriber = goog.module.get('org.patternfly.core.ObservableValue.Subscriber$impl');
  SelectHandler = goog.module.get('org.patternfly.handler.SelectHandler$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  ExpandableModifier = goog.module.get('org.patternfly.style.ExpandableModifier$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Attachable.$markImplementor(Tabs);
Box.$markImplementor(Tabs);
Expandable.$markImplementor(Tabs);
Fill.$markImplementor(Tabs);
PageInsets.$markImplementor(Tabs);
Secondary.$markImplementor(Tabs);
Vertical.$markImplementor(Tabs);
$Util.$setClassMetadata(Tabs, 'org.patternfly.component.tabs.Tabs');

exports = Tabs;

//# sourceMappingURL=Tabs.js.map

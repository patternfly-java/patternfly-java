goog.module('org.patternfly.component.navigation.Navigation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Divider = goog.forwardDeclare('org.patternfly.component.divider.Divider$impl');
let DividerType = goog.forwardDeclare('org.patternfly.component.divider.DividerType$impl');
let ExpandableNavigationGroup = goog.forwardDeclare('org.patternfly.component.navigation.ExpandableNavigationGroup$impl');
let NavigationGroup = goog.forwardDeclare('org.patternfly.component.navigation.NavigationGroup$impl');
let NavigationItem = goog.forwardDeclare('org.patternfly.component.navigation.NavigationItem$impl');
let NavigationType = goog.forwardDeclare('org.patternfly.component.navigation.NavigationType$impl');
let Horizontal = goog.forwardDeclare('org.patternfly.component.navigation.NavigationType.Horizontal$impl');
let Vertical = goog.forwardDeclare('org.patternfly.component.navigation.NavigationType.Vertical$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let LanguageDirection = goog.forwardDeclare('org.patternfly.core.LanguageDirection$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let ObservableValue = goog.forwardDeclare('org.patternfly.core.ObservableValue$impl');
let Subscriber = goog.forwardDeclare('org.patternfly.core.ObservableValue.Subscriber$impl');
let Validation = goog.forwardDeclare('org.patternfly.core.Validation$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let Brightness = goog.forwardDeclare('org.patternfly.style.Brightness$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, Navigation>}
 * @implements {Attachable}
 */
class Navigation extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {NavigationType} @nodts*/
  this.f_type__org_patternfly_component_navigation_Navigation_;
  /**@type {HTMLElement} @nodts*/
  this.f_itemsContainer__org_patternfly_component_navigation_Navigation_;
  /**@type {Map<?string, NavigationItem>} @nodts*/
  this.f_items__org_patternfly_component_navigation_Navigation_;
  /**@type {Map<?string, NavigationGroup>} @nodts*/
  this.f_groups__org_patternfly_component_navigation_Navigation_;
  /**@type {Map<?string, ExpandableNavigationGroup>} @nodts*/
  this.f_expandableGroups__org_patternfly_component_navigation_Navigation_;
  /**@type {ObservableValue<?boolean>} @nodts*/
  this.f_enableScrollButtons__org_patternfly_component_navigation_Navigation_;
  /**@type {ObservableValue<?boolean>} @nodts*/
  this.f_showScrollButtons__org_patternfly_component_navigation_Navigation_;
  /**@type {ObservableValue<?boolean>} @nodts*/
  this.f_renderScrollButtons__org_patternfly_component_navigation_Navigation_;
  /**@type {ObservableValue<?boolean>} @nodts*/
  this.f_disableBackScrollButton__org_patternfly_component_navigation_Navigation_;
  /**@type {ObservableValue<?boolean>} @nodts*/
  this.f_disableForwardScrollButton__org_patternfly_component_navigation_Navigation_;
  /**@type {number} @nodts*/
  this.f_scrollTimeout__org_patternfly_component_navigation_Navigation_ = 0;
  /**@type {HandlerRegistration} @nodts*/
  this.f_resizeHandler__org_patternfly_component_navigation_Navigation_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_transitionEndHandler__org_patternfly_component_navigation_Navigation_;
  /**@type {SelectHandler<NavigationItem>} @nodts*/
  this.f_onSelect__org_patternfly_component_navigation_Navigation_;
  /**@type {ToggleHandler<ExpandableNavigationGroup>} @nodts*/
  this.f_toggleHandler__org_patternfly_component_navigation_Navigation_;
  /**@type {HTMLContainerBuilder<HTMLButtonElement>} @nodts*/
  this.f_scrollBack__org_patternfly_component_navigation_Navigation_;
  /**@type {HTMLContainerBuilder<HTMLButtonElement>} @nodts*/
  this.f_scrollForward__org_patternfly_component_navigation_Navigation_;
 }
 /** @nodts @return {Navigation} */
 static m_navigation__org_patternfly_component_navigation_NavigationType__org_patternfly_component_navigation_Navigation(/** NavigationType */ type) {
  Navigation.$clinit();
  return Navigation.$create__org_patternfly_component_navigation_NavigationType(type);
 }
 /** @nodts @return {!Navigation} */
 static $create__org_patternfly_component_navigation_NavigationType(/** NavigationType */ type) {
  Navigation.$clinit();
  let $instance = new Navigation();
  $instance.$ctor__org_patternfly_component_navigation_Navigation__org_patternfly_component_navigation_NavigationType__void(type);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_navigation_Navigation__org_patternfly_component_navigation_NavigationType__void(/** NavigationType */ type) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Navigation__org_patternfly_component_ComponentType, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_nav__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  this.f_type__org_patternfly_component_navigation_Navigation_ = type;
  this.f_items__org_patternfly_component_navigation_Navigation_ = /**@type {!HashMap<?string, NavigationItem>}*/ (HashMap.$create__());
  this.f_groups__org_patternfly_component_navigation_Navigation_ = /**@type {!HashMap<?string, NavigationGroup>}*/ (HashMap.$create__());
  this.f_expandableGroups__org_patternfly_component_navigation_Navigation_ = /**@type {!HashMap<?string, ExpandableNavigationGroup>}*/ (HashMap.$create__());
  this.f_enableScrollButtons__org_patternfly_component_navigation_Navigation_ = /**@type {ObservableValue<?boolean>}*/ (ObservableValue.m_ov__java_lang_Object__org_patternfly_core_ObservableValue(false));
  this.f_showScrollButtons__org_patternfly_component_navigation_Navigation_ = /**@type {ObservableValue<?boolean>}*/ (ObservableValue.m_ov__java_lang_Object__org_patternfly_core_ObservableValue(false));
  this.f_renderScrollButtons__org_patternfly_component_navigation_Navigation_ = /**@type {ObservableValue<?boolean>}*/ (ObservableValue.m_ov__java_lang_Object__org_patternfly_core_ObservableValue(false));
  this.f_disableBackScrollButton__org_patternfly_component_navigation_Navigation_ = /**@type {ObservableValue<?boolean>}*/ (ObservableValue.m_ov__java_lang_Object__org_patternfly_core_ObservableValue(false));
  this.f_disableForwardScrollButton__org_patternfly_component_navigation_Navigation_ = /**@type {ObservableValue<?boolean>}*/ (ObservableValue.m_ov__java_lang_Object__org_patternfly_core_ObservableValue(false));
  if ($Equality.$same(type, Horizontal.f_secondary__org_patternfly_component_navigation_NavigationType_Horizontal) || $Equality.$same(type, Horizontal.f_tertiary__org_patternfly_component_navigation_NavigationType_Horizontal)) {
   this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Local');
  } else {
   this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Global');
  }
  if (Horizontal.$isInstance(type)) {
   if ($Equality.$same(type, Horizontal.f_primary__org_patternfly_component_navigation_NavigationType_Horizontal)) {
    this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_horizontal__org_patternfly_style_Classes)], j_l_String)));
   } else if ($Equality.$same(type, Horizontal.f_secondary__org_patternfly_component_navigation_NavigationType_Horizontal)) {
    this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_horizontalSubnav__org_patternfly_style_Classes)], j_l_String)));
   } else if ($Equality.$same(type, Horizontal.f_tertiary__org_patternfly_component_navigation_NavigationType_Horizontal)) {
    this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_tertiary__org_patternfly_style_Classes)], j_l_String)));
   }
   this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_scrollBack__org_patternfly_component_navigation_Navigation_ = /**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_scroll__org_patternfly_style_Classes, Classes.f_button__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((b) =>{
    let b_1 = /**@type {HTMLButtonElement}*/ ($Casts.$to(b, HTMLButtonElement_$Overlay));
    b_1.disabled = true;
   })), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Scroll back'), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
    let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
    this.m_scrollBack__void_$p_org_patternfly_component_navigation_Navigation();
   }), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(fas.m_angleLeft__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder)));
   this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_itemsContainer__org_patternfly_component_navigation_Navigation_ = /**@type {HTMLUListElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_list__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'list'), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_scroll__org_jboss_elemento_EventType, (/** Event */ e_2) =>{
    this.m_updateScrollState__void_$p_org_patternfly_component_navigation_Navigation();
   }), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)));
   this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_scrollForward__org_patternfly_component_navigation_Navigation_ = /**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_scroll__org_patternfly_style_Classes, Classes.f_button__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((b_2) =>{
    let b_3 = /**@type {HTMLButtonElement}*/ ($Casts.$to(b_2, HTMLButtonElement_$Overlay));
    b_3.disabled = true;
   })), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Scroll forward'), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e_3) =>{
    let e_4 = /**@type {MouseEvent}*/ ($Casts.$to(e_3, MouseEvent_$Overlay));
    this.m_scrollForward__void_$p_org_patternfly_component_navigation_Navigation();
   }), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(fas.m_angleRight__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder)));
  } else if (Vertical.$isInstance(type)) {
   let vt = /**@type {Vertical}*/ (type);
   switch (vt.ordinal()) {
    case Vertical.$ordinal_flat__org_patternfly_component_navigation_NavigationType_Vertical: 
    case Vertical.$ordinal_expandable__org_patternfly_component_navigation_NavigationType_Vertical: 
     this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_itemsContainer__org_patternfly_component_navigation_Navigation_ = /**@type {HTMLUListElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_list__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'list'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay)));
     break;
    case Vertical.$ordinal_grouped__org_patternfly_component_navigation_NavigationType_Vertical: 
     this.f_itemsContainer__org_patternfly_component_navigation_Navigation_ = this.m_element__elemental2_dom_HTMLElement();
     break;
    case Vertical.$ordinal_drillDown__org_patternfly_component_navigation_NavigationType_Vertical: 
    case Vertical.$ordinal_flyout__org_patternfly_component_navigation_NavigationType_Vertical: 
     Logger.m_nyi__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'Drill-down and fly-out not yet implemented');
     this.f_itemsContainer__org_patternfly_component_navigation_Navigation_ = /**@type {HTMLDivElement}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
     break;
    default: 
     Logger.m_unknown__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'Unknown navigation type: ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(type));
     this.f_itemsContainer__org_patternfly_component_navigation_Navigation_ = /**@type {HTMLDivElement}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
   }
  } else {
   Logger.m_unknown__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'Unknown navigation type: ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(type));
   this.f_itemsContainer__org_patternfly_component_navigation_Navigation_ = /**@type {HTMLDivElement}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }
  this.m_storeComponent__void();
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (Horizontal.$isInstance(this.f_type__org_patternfly_component_navigation_Navigation_) && !$Equality.$same(this.f_scrollBack__org_patternfly_component_navigation_Navigation_, null) && !$Equality.$same(this.f_scrollForward__org_patternfly_component_navigation_Navigation_, null)) {
   this.f_enableScrollButtons__org_patternfly_component_navigation_Navigation_.m_subscribe__org_patternfly_core_ObservableValue_Subscriber__org_patternfly_core_ObservableValue(Subscriber.$adapt((current, previous) =>{
    let current_1 = /**@type {?boolean}*/ ($Casts.$to(current, Boolean));
    let previous_1 = /**@type {?boolean}*/ ($Casts.$to(previous, Boolean));
    if (!Boolean.m_booleanValue__java_lang_Boolean__boolean(previous_1) && Boolean.m_booleanValue__java_lang_Boolean__boolean(current_1)) {
     this.f_renderScrollButtons__org_patternfly_component_navigation_Navigation_.m_change__java_lang_Object__void(true);
     DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ __) =>{
      this.f_transitionEndHandler__org_patternfly_component_navigation_Navigation_ = EventType.m_bind__org_jboss_elemento_IsElement__java_lang_String__elemental2_dom_EventListener__org_gwtproject_event_shared_HandlerRegistration(this.f_scrollBack__org_patternfly_component_navigation_Navigation_, 'transitionend', EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
       this.m_hideScrollButtons__void_$p_org_patternfly_component_navigation_Navigation();
      }));
      this.f_showScrollButtons__org_patternfly_component_navigation_Navigation_.m_set__java_lang_Object__void(true);
     }, 100, []);
    } else if (Boolean.m_booleanValue__java_lang_Boolean__boolean(previous_1) && !Boolean.m_booleanValue__java_lang_Boolean__boolean(current_1)) {
     this.f_showScrollButtons__org_patternfly_component_navigation_Navigation_.m_change__java_lang_Object__void(false);
    }
   }));
   this.f_showScrollButtons__org_patternfly_component_navigation_Navigation_.m_subscribe__org_patternfly_core_ObservableValue_Subscriber__org_patternfly_core_ObservableValue(Subscriber.$adapt((current_2, ___1) =>{
    let current_3 = /**@type {?boolean}*/ ($Casts.$to(current_2, Boolean));
    let ___2 = /**@type {?boolean}*/ ($Casts.$to(___1, Boolean));
    this.m_classList__org_jboss_elemento_ClassList().m_toggle__java_lang_String__boolean__void(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_scrollable__org_patternfly_style_Classes), Boolean.m_booleanValue__java_lang_Boolean__boolean(current_3));
   }));
   this.f_renderScrollButtons__org_patternfly_component_navigation_Navigation_.m_subscribe__org_patternfly_core_ObservableValue_Subscriber__org_patternfly_core_ObservableValue(Subscriber.$adapt((current_4, ___3) =>{
    let current_5 = /**@type {?boolean}*/ ($Casts.$to(current_4, Boolean));
    let ___4 = /**@type {?boolean}*/ ($Casts.$to(___3, Boolean));
    Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this.f_scrollBack__org_patternfly_component_navigation_Navigation_, Boolean.m_booleanValue__java_lang_Boolean__boolean(current_5));
    Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this.f_scrollForward__org_patternfly_component_navigation_Navigation_, Boolean.m_booleanValue__java_lang_Boolean__boolean(current_5));
   }));
   this.f_disableBackScrollButton__org_patternfly_component_navigation_Navigation_.m_subscribe__org_patternfly_core_ObservableValue_Subscriber__org_patternfly_core_ObservableValue(Subscriber.$adapt((current_6, ___5) =>{
    let current_7 = /**@type {?boolean}*/ ($Casts.$to(current_6, Boolean));
    let ___6 = /**@type {?boolean}*/ ($Casts.$to(___5, Boolean));
    /**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_scrollBack__org_patternfly_component_navigation_Navigation_.m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)).disabled = Boolean.m_booleanValue__java_lang_Boolean__boolean(current_7);
    this.f_scrollBack__org_patternfly_component_navigation_Navigation_.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_disabled__org_patternfly_core_Aria, Boolean.m_booleanValue__java_lang_Boolean__boolean(current_7));
   }));
   this.f_disableForwardScrollButton__org_patternfly_component_navigation_Navigation_.m_subscribe__org_patternfly_core_ObservableValue_Subscriber__org_patternfly_core_ObservableValue(Subscriber.$adapt((current_8, ___7) =>{
    let current_9 = /**@type {?boolean}*/ ($Casts.$to(current_8, Boolean));
    let ___8 = /**@type {?boolean}*/ ($Casts.$to(___7, Boolean));
    /**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_scrollForward__org_patternfly_component_navigation_Navigation_.m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)).disabled = Boolean.m_booleanValue__java_lang_Boolean__boolean(current_9);
    this.f_scrollForward__org_patternfly_component_navigation_Navigation_.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_disabled__org_patternfly_core_Aria, Boolean.m_booleanValue__java_lang_Boolean__boolean(current_9));
   }));
   this.f_resizeHandler__org_patternfly_component_navigation_Navigation_ = EventType.m_bind__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__org_gwtproject_event_shared_HandlerRegistration(goog.global.window, EventType.f_resize__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e_1) =>{
    this.m_updateScrollState__void_$p_org_patternfly_component_navigation_Navigation();
   }));
   this.m_updateScrollState__void_$p_org_patternfly_component_navigation_Navigation();
  }
 }
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  goog.global.clearTimeout(this.f_scrollTimeout__org_patternfly_component_navigation_Navigation_);
  if (!$Equality.$same(this.f_resizeHandler__org_patternfly_component_navigation_Navigation_, null)) {
   this.f_resizeHandler__org_patternfly_component_navigation_Navigation_.m_removeHandler__void();
  }
  if (!$Equality.$same(this.f_transitionEndHandler__org_patternfly_component_navigation_Navigation_, null)) {
   this.f_transitionEndHandler__org_patternfly_component_navigation_Navigation_.m_removeHandler__void();
  }
 }
 /** @nodts @template T @return {Navigation} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_navigation_Navigation(/** Iterable<T> */ items, /** j_u_function_Function<T, NavigationItem> */ display) {
  if ($Equality.$same(this.f_type__org_patternfly_component_navigation_Navigation_, Vertical.f_grouped__org_patternfly_component_navigation_NavigationType_Vertical)) {
   Logger.m_unsupported__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'addItem(NavigationItem) is not supported for type ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_type__org_patternfly_component_navigation_Navigation_));
   return this;
  }
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let navigationItem = /**@type {NavigationItem}*/ ($Casts.$to(display.m_apply__java_lang_Object__java_lang_Object(item), NavigationItem));
    this.m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_Navigation(navigationItem);
   }
  }
  return this;
 }
 /** @nodts @return {Navigation} */
 m_addItem__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_Navigation(/** NavigationItem */ item) {
  return this.m_add__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_Navigation(item);
 }
 /** @nodts @return {Navigation} */
 m_add__org_patternfly_component_navigation_NavigationItem__org_patternfly_component_navigation_Navigation(/** NavigationItem */ item) {
  if ($Equality.$same(this.f_type__org_patternfly_component_navigation_Navigation_, Vertical.f_grouped__org_patternfly_component_navigation_NavigationType_Vertical)) {
   Logger.m_unsupported__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'addItem(NavigationItem) is not supported for type ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_type__org_patternfly_component_navigation_Navigation_));
   return this;
  }
  this.m_internalAddItem__org_patternfly_component_navigation_NavigationItem__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_Navigation(item, Consumer.$adapt((itm) =>{
   let itm_1 = /**@type {NavigationItem}*/ ($Casts.$to(itm, NavigationItem));
   this.f_itemsContainer__org_patternfly_component_navigation_Navigation_.appendChild(/**@type {HTMLLIElement}*/ ($Casts.$to(itm_1.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  }));
  return this;
 }
 /** @nodts @return {Navigation} */
 m_addGroup__org_patternfly_component_navigation_NavigationGroup__org_patternfly_component_navigation_Navigation(/** NavigationGroup */ group) {
  return this.m_add__org_patternfly_component_navigation_NavigationGroup__org_patternfly_component_navigation_Navigation(group);
 }
 /** @nodts @return {Navigation} */
 m_add__org_patternfly_component_navigation_NavigationGroup__org_patternfly_component_navigation_Navigation(/** NavigationGroup */ group) {
  if ($Equality.$same(this.f_type__org_patternfly_component_navigation_Navigation_, Vertical.f_flat__org_patternfly_component_navigation_NavigationType_Vertical) || $Equality.$same(this.f_type__org_patternfly_component_navigation_Navigation_, Vertical.f_expandable__org_patternfly_component_navigation_NavigationType_Vertical) || Horizontal.$isInstance(this.f_type__org_patternfly_component_navigation_Navigation_)) {
   Logger.m_unsupported__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'addGroup(NavigationGroup) is not supported for type ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_type__org_patternfly_component_navigation_Navigation_));
   return this;
  }
  this.m_internalAddGroup__org_patternfly_component_navigation_NavigationGroup__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_Navigation(group, Consumer.$adapt((grp) =>{
   let grp_1 = /**@type {NavigationGroup}*/ ($Casts.$to(grp, NavigationGroup));
   this.f_itemsContainer__org_patternfly_component_navigation_Navigation_.appendChild(grp_1.m_element__elemental2_dom_HTMLElement());
  }));
  return this;
 }
 /** @nodts @return {Navigation} */
 m_addGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__org_patternfly_component_navigation_Navigation(/** ExpandableNavigationGroup */ group) {
  return this.m_add__org_patternfly_component_navigation_ExpandableNavigationGroup__org_patternfly_component_navigation_Navigation(group);
 }
 /** @nodts @return {Navigation} */
 m_add__org_patternfly_component_navigation_ExpandableNavigationGroup__org_patternfly_component_navigation_Navigation(/** ExpandableNavigationGroup */ group) {
  if ($Equality.$same(this.f_type__org_patternfly_component_navigation_Navigation_, Vertical.f_flat__org_patternfly_component_navigation_NavigationType_Vertical) || $Equality.$same(this.f_type__org_patternfly_component_navigation_Navigation_, Vertical.f_grouped__org_patternfly_component_navigation_NavigationType_Vertical) || Horizontal.$isInstance(this.f_type__org_patternfly_component_navigation_Navigation_)) {
   Logger.m_unsupported__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'addGroup(ExpandableNavigationGroup) is not supported for type ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_type__org_patternfly_component_navigation_Navigation_));
   return this;
  }
  this.m_internalAddGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_Navigation(group, Consumer.$adapt((grp) =>{
   let grp_1 = /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(grp, ExpandableNavigationGroup));
   this.f_itemsContainer__org_patternfly_component_navigation_Navigation_.appendChild(/**@type {HTMLLIElement}*/ ($Casts.$to(group.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  }));
  return this;
 }
 /** @nodts @return {Navigation} */
 m_addDivider__org_patternfly_component_navigation_Navigation() {
  return this.m_add__org_patternfly_component_divider_Divider__org_patternfly_component_navigation_Navigation(Divider.m_divider__org_patternfly_component_divider_DividerType__org_patternfly_component_divider_Divider(DividerType.f_li__org_patternfly_component_divider_DividerType));
 }
 /** @nodts @return {Navigation} */
 m_add__org_patternfly_component_divider_Divider__org_patternfly_component_navigation_Navigation(/** Divider */ divider) {
  this.f_itemsContainer__org_patternfly_component_navigation_Navigation_.appendChild(divider.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {Navigation} */
 m_insertItemBefore__org_patternfly_component_navigation_NavigationItem__java_lang_String__org_patternfly_component_navigation_Navigation(/** NavigationItem */ item, /** ?string */ beforeItemId) {
  let element = Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(this.f_itemsContainer__org_patternfly_component_navigation_Navigation_, By.m_data__java_lang_String__java_lang_String__org_jboss_elemento_By(Dataset.f_navigationItem__org_patternfly_core_Dataset, beforeItemId));
  if (!$Equality.$same(element, null)) {
   this.m_internalAddItem__org_patternfly_component_navigation_NavigationItem__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_Navigation(item, Consumer.$adapt((itm) =>{
    let itm_1 = /**@type {NavigationItem}*/ ($Casts.$to(itm, NavigationItem));
    Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLLIElement}*/ ($Casts.$to(itm_1.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)), element);
   }));
  }
  return this;
 }
 /** @nodts @return {Navigation} */
 m_insertItemAfter__org_patternfly_component_navigation_NavigationItem__java_lang_String__org_patternfly_component_navigation_Navigation(/** NavigationItem */ item, /** ?string */ afterItemId) {
  let element = Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(this.f_itemsContainer__org_patternfly_component_navigation_Navigation_, By.m_data__java_lang_String__java_lang_String__org_jboss_elemento_By(Dataset.f_navigationItem__org_patternfly_core_Dataset, afterItemId));
  if (!$Equality.$same(element, null)) {
   this.m_internalAddItem__org_patternfly_component_navigation_NavigationItem__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_Navigation(item, Consumer.$adapt((itm) =>{
    let itm_1 = /**@type {NavigationItem}*/ ($Casts.$to(itm, NavigationItem));
    Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLLIElement}*/ ($Casts.$to(itm_1.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)), element);
   }));
  }
  return this;
 }
 /** @nodts @return {Navigation} */
 m_insertGroupBefore__org_patternfly_component_navigation_NavigationGroup__java_lang_String__org_patternfly_component_navigation_Navigation(/** NavigationGroup */ group, /** ?string */ beforeItemId) {
  let element = Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(this.f_itemsContainer__org_patternfly_component_navigation_Navigation_, By.m_data__java_lang_String__java_lang_String__org_jboss_elemento_By(Dataset.f_navigationItem__org_patternfly_core_Dataset, beforeItemId));
  if (!$Equality.$same(element, null)) {
   this.m_internalAddGroup__org_patternfly_component_navigation_NavigationGroup__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_Navigation(group, Consumer.$adapt((grp) =>{
    let grp_1 = /**@type {NavigationGroup}*/ ($Casts.$to(grp, NavigationGroup));
    Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(grp_1.m_element__elemental2_dom_HTMLElement(), element);
   }));
  }
  return this;
 }
 /** @nodts @return {Navigation} */
 m_insertGroupAfter__org_patternfly_component_navigation_NavigationGroup__java_lang_String__org_patternfly_component_navigation_Navigation(/** NavigationGroup */ group, /** ?string */ afterItemId) {
  let element = Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(this.f_itemsContainer__org_patternfly_component_navigation_Navigation_, By.m_data__java_lang_String__java_lang_String__org_jboss_elemento_By(Dataset.f_navigationItem__org_patternfly_core_Dataset, afterItemId));
  if (!$Equality.$same(element, null)) {
   this.m_internalAddGroup__org_patternfly_component_navigation_NavigationGroup__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_Navigation(group, Consumer.$adapt((grp) =>{
    let grp_1 = /**@type {NavigationGroup}*/ ($Casts.$to(grp, NavigationGroup));
    Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(grp_1.m_element__elemental2_dom_HTMLElement(), element);
   }));
  }
  return this;
 }
 /** @nodts @return {Navigation} */
 m_insertGroupBefore__org_patternfly_component_navigation_ExpandableNavigationGroup__java_lang_String__org_patternfly_component_navigation_Navigation(/** ExpandableNavigationGroup */ group, /** ?string */ beforeItemId) {
  let element = Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(this.f_itemsContainer__org_patternfly_component_navigation_Navigation_, By.m_data__java_lang_String__java_lang_String__org_jboss_elemento_By(Dataset.f_navigationItem__org_patternfly_core_Dataset, beforeItemId));
  if (!$Equality.$same(element, null)) {
   this.m_internalAddGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_Navigation(group, Consumer.$adapt((grp) =>{
    let grp_1 = /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(grp, ExpandableNavigationGroup));
    Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLLIElement}*/ ($Casts.$to(grp_1.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)), element);
   }));
  }
  return this;
 }
 /** @nodts @return {Navigation} */
 m_insertGroupAfter__org_patternfly_component_navigation_ExpandableNavigationGroup__java_lang_String__org_patternfly_component_navigation_Navigation(/** ExpandableNavigationGroup */ group, /** ?string */ afterItemId) {
  let element = Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(this.f_itemsContainer__org_patternfly_component_navigation_Navigation_, By.m_data__java_lang_String__java_lang_String__org_jboss_elemento_By(Dataset.f_navigationItem__org_patternfly_core_Dataset, afterItemId));
  if (!$Equality.$same(element, null)) {
   this.m_internalAddGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_Navigation(group, Consumer.$adapt((grp) =>{
    let grp_1 = /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(grp, ExpandableNavigationGroup));
    Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLLIElement}*/ ($Casts.$to(grp_1.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)), element);
   }));
  }
  return this;
 }
 /** @nodts @return {Navigation} */
 m_theme__org_patternfly_style_Brightness__org_patternfly_component_navigation_Navigation(/** Brightness */ theme) {
  if (Validation.m_verifyEnum__java_lang_String__elemental2_dom_Element__java_lang_String__java_lang_Enum__java_lang_Enum__arrayOf_java_lang_Enum__boolean(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'theme', theme, Brightness.f_dark__org_patternfly_style_Brightness, /**@type {!Array<Brightness>}*/ ($Arrays.$init([Brightness.f_light__org_patternfly_style_Brightness], Brightness)))) {
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([theme.m_modifier__java_lang_String()], j_l_String)));
  }
  return this;
 }
 /** @nodts @return {Navigation} */
 m_that__org_patternfly_component_navigation_Navigation() {
  return this;
 }
 /** @nodts @return {Navigation} */
 m_ariaScrollBackLabel__java_lang_String__org_patternfly_component_navigation_Navigation(/** ?string */ label) {
  if (!$Equality.$same(this.f_scrollBack__org_patternfly_component_navigation_Navigation_, null)) {
   this.f_scrollBack__org_patternfly_component_navigation_Navigation_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  }
  return this;
 }
 /** @nodts @return {Navigation} */
 m_ariaScrollForwardLabel__java_lang_String__org_patternfly_component_navigation_Navigation(/** ?string */ label) {
  if (!$Equality.$same(this.f_scrollForward__org_patternfly_component_navigation_Navigation_, null)) {
   this.f_scrollForward__org_patternfly_component_navigation_Navigation_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  }
  return this;
 }
 /** @nodts @return {Navigation} */
 m_onSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_navigation_Navigation(/** SelectHandler<NavigationItem> */ selectHandler) {
  this.f_onSelect__org_patternfly_component_navigation_Navigation_ = selectHandler;
  return this;
 }
 /** @nodts @return {Navigation} */
 m_onToggle__org_patternfly_handler_ToggleHandler__org_patternfly_component_navigation_Navigation(/** ToggleHandler<ExpandableNavigationGroup> */ toggleHandler) {
  this.f_toggleHandler__org_patternfly_component_navigation_Navigation_ = toggleHandler;
  return this;
 }
 /** @nodts */
 m_select__java_lang_String__void(/** ?string */ itemId) {
  this.m_select__org_patternfly_component_navigation_NavigationItem__boolean__void(this.m_findItem__java_lang_String__org_patternfly_component_navigation_NavigationItem_$p_org_patternfly_component_navigation_Navigation(itemId), true);
 }
 /** @nodts */
 m_select__java_lang_String__boolean__void(/** ?string */ itemId, /** boolean */ fireEvent) {
  this.m_select__org_patternfly_component_navigation_NavigationItem__boolean__void(this.m_findItem__java_lang_String__org_patternfly_component_navigation_NavigationItem_$p_org_patternfly_component_navigation_Navigation(itemId), fireEvent);
 }
 /** @nodts */
 m_select__org_patternfly_component_navigation_NavigationItem__void(/** NavigationItem */ item) {
  this.m_select__org_patternfly_component_navigation_NavigationItem__boolean__void(item, true);
 }
 /** @nodts */
 m_select__org_patternfly_component_navigation_NavigationItem__boolean__void(/** NavigationItem */ item, /** boolean */ fireEvent) {
  if (!$Equality.$same(item, null)) {
   this.m_unselectAllItems__void_$p_org_patternfly_component_navigation_Navigation();
   item.m_select__void_$pp_org_patternfly_component_navigation();
   if (fireEvent && !$Equality.$same(this.f_onSelect__org_patternfly_component_navigation_Navigation_, null)) {
    this.f_onSelect__org_patternfly_component_navigation_Navigation_.m_onSelect__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), item, true);
   }
   if ($Equality.$same(this.f_type__org_patternfly_component_navigation_Navigation_, Vertical.f_expandable__org_patternfly_component_navigation_NavigationType_Vertical)) {
    this.m_unselectAllExpandableGroups__void_$p_org_patternfly_component_navigation_Navigation();
    this.m_selectGroup__elemental2_dom_HTMLElement__boolean__void_$p_org_patternfly_component_navigation_Navigation(item.f_a__org_patternfly_component_navigation_NavigationItem, fireEvent);
   }
  } else {
   this.m_unselectAllItems__void_$p_org_patternfly_component_navigation_Navigation();
   this.m_unselectAllExpandableGroups__void_$p_org_patternfly_component_navigation_Navigation();
  }
 }
 /** @nodts */
 m_internalAddItem__org_patternfly_component_navigation_NavigationItem__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_Navigation(/** NavigationItem */ item, /** Consumer<NavigationItem> */ dom) {
  this.f_items__org_patternfly_component_navigation_Navigation_.put(item.f_id__org_patternfly_component_navigation_NavigationItem, item);
  dom.m_accept__java_lang_Object__void(item);
  if (Elements.m_isAttached__elemental2_dom_Node__boolean(this.m_element__elemental2_dom_HTMLElement())) {
   this.m_updateScrollState__void_$p_org_patternfly_component_navigation_Navigation();
  }
 }
 /** @nodts */
 m_internalAddGroup__org_patternfly_component_navigation_NavigationGroup__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_Navigation(/** NavigationGroup */ group, /** Consumer<NavigationGroup> */ dom) {
  this.f_groups__org_patternfly_component_navigation_Navigation_.put(group.f_id__org_patternfly_component_navigation_NavigationGroup, group);
  dom.m_accept__java_lang_Object__void(group);
 }
 /** @nodts */
 m_internalAddGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__java_util_function_Consumer__void_$p_org_patternfly_component_navigation_Navigation(/** ExpandableNavigationGroup */ group, /** Consumer<ExpandableNavigationGroup> */ dom) {
  group.m_collapse__void_$pp_org_patternfly_component_navigation();
  this.f_expandableGroups__org_patternfly_component_navigation_Navigation_.put(group.f_id__org_patternfly_component_navigation_ExpandableNavigationGroup, group);
  if (!$Equality.$same(this.f_toggleHandler__org_patternfly_component_navigation_Navigation_, null)) {
   group.f_toggleHandler__org_patternfly_component_navigation_ExpandableNavigationGroup = this.f_toggleHandler__org_patternfly_component_navigation_Navigation_;
  }
  dom.m_accept__java_lang_Object__void(group);
 }
 /** @nodts */
 m_unselectAllItems__void_$p_org_patternfly_component_navigation_Navigation() {
  for (let $iterator = this.m_findAll__org_jboss_elemento_By__java_lang_Iterable(Navigation.f_A_NAV_LINK_CURRENT__org_patternfly_component_navigation_Navigation_).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let element = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), $Overlay));
   {
    element.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes));
    element.removeAttribute(Aria.f_current__org_patternfly_core_Aria);
   }
  }
 }
 /** @nodts */
 m_unselectAllExpandableGroups__void_$p_org_patternfly_component_navigation_Navigation() {
  for (let $iterator = this.m_findAll__org_jboss_elemento_By__java_lang_Iterable(Navigation.f_LI_NAV_ITEM_EXPANDABLE__org_patternfly_component_navigation_Navigation_.m_and__org_jboss_elemento_By__org_jboss_elemento_By(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes)))).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let element = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), $Overlay));
   {
    element.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes));
   }
  }
 }
 /** @nodts */
 m_selectGroup__elemental2_dom_HTMLElement__boolean__void_$p_org_patternfly_component_navigation_Navigation(/** HTMLElement */ element, /** boolean */ fireEvent) {
  let li = Elements.m_closest__elemental2_dom_Element__org_jboss_elemento_By__elemental2_dom_HTMLElement(element, Navigation.f_LI_NAV_ITEM_EXPANDABLE__org_patternfly_component_navigation_Navigation_);
  if (!$Equality.$same(li, null)) {
   li.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes));
   let groupId = /**@type {?string}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(li.dataset, Dataset.f_navigationGroup__org_patternfly_core_Dataset), j_l_String));
   let group = this.m_findGroup__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup_$p_org_patternfly_component_navigation_Navigation(groupId);
   if (!$Equality.$same(group, null)) {
    group.m_expand__void_$pp_org_patternfly_component_navigation();
    if (fireEvent && !$Equality.$same(this.f_toggleHandler__org_patternfly_component_navigation_Navigation_, null)) {
     this.f_toggleHandler__org_patternfly_component_navigation_Navigation_.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), group, true);
    }
   }
   let parent = li.parentElement;
   if ($Overlay.$isInstance(parent)) {
    this.m_selectGroup__elemental2_dom_HTMLElement__boolean__void_$p_org_patternfly_component_navigation_Navigation(/**@type {HTMLElement}*/ ($Casts.$to(parent, $Overlay)), fireEvent);
   }
  }
 }
 /** @nodts @return {NavigationItem} */
 m_findItem__java_lang_String__org_patternfly_component_navigation_NavigationItem_$p_org_patternfly_component_navigation_Navigation(/** ?string */ id) {
  let item = /**@type {NavigationItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_navigation_Navigation_.get(id), NavigationItem));
  if ($Equality.$same(item, null)) {
   if ($Equality.$same(this.f_type__org_patternfly_component_navigation_Navigation_, Vertical.f_grouped__org_patternfly_component_navigation_NavigationType_Vertical)) {
    for (let $iterator = this.f_groups__org_patternfly_component_navigation_Navigation_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
     let group = /**@type {NavigationGroup}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), NavigationGroup));
     {
      item = group.m_findItem__java_lang_String__org_patternfly_component_navigation_NavigationItem_$pp_org_patternfly_component_navigation(id);
      if (!$Equality.$same(item, null)) {
       break;
      }
     }
    }
   } else if ($Equality.$same(this.f_type__org_patternfly_component_navigation_Navigation_, Vertical.f_expandable__org_patternfly_component_navigation_NavigationType_Vertical)) {
    for (let $iterator_1 = this.f_expandableGroups__org_patternfly_component_navigation_Navigation_.values().m_iterator__java_util_Iterator(); $iterator_1.m_hasNext__boolean(); ) {
     let group_1 = /**@type {ExpandableNavigationGroup}*/ ($Casts.$to($iterator_1.m_next__java_lang_Object(), ExpandableNavigationGroup));
     {
      item = group_1.m_findItem__java_lang_String__org_patternfly_component_navigation_NavigationItem_$pp_org_patternfly_component_navigation(id);
      if (!$Equality.$same(item, null)) {
       break;
      }
     }
    }
   }
  }
  return item;
 }
 /** @nodts @return {ExpandableNavigationGroup} */
 m_findGroup__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup_$p_org_patternfly_component_navigation_Navigation(/** ?string */ id) {
  let group = /**@type {ExpandableNavigationGroup}*/ ($Casts.$to(this.f_expandableGroups__org_patternfly_component_navigation_Navigation_.get(id), ExpandableNavigationGroup));
  if ($Equality.$same(group, null)) {
   for (let $iterator = this.f_expandableGroups__org_patternfly_component_navigation_Navigation_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let nestedGroup = /**@type {ExpandableNavigationGroup}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), ExpandableNavigationGroup));
    {
     group = nestedGroup.m_findGroup__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup_$pp_org_patternfly_component_navigation(id);
     if (!$Equality.$same(group, null)) {
      break;
     }
    }
   }
  }
  return group;
 }
 /** @nodts */
 m_updateScrollState__void_$p_org_patternfly_component_navigation_Navigation() {
  goog.global.clearTimeout(this.f_scrollTimeout__org_patternfly_component_navigation_Navigation_);
  this.f_scrollTimeout__org_patternfly_component_navigation_Navigation_ = DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ __) =>{
   let overflowOnLeft = !Elements.m_isElementInView__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__boolean__boolean(this.f_itemsContainer__org_patternfly_component_navigation_Navigation_, /**@type {HTMLElement}*/ ($Casts.$to(this.f_itemsContainer__org_patternfly_component_navigation_Navigation_.firstElementChild, $Overlay)), false);
   let overflowOnRight = !Elements.m_isElementInView__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__boolean__boolean(this.f_itemsContainer__org_patternfly_component_navigation_Navigation_, /**@type {HTMLElement}*/ ($Casts.$to(this.f_itemsContainer__org_patternfly_component_navigation_Navigation_.lastElementChild, $Overlay)), false);
   this.f_enableScrollButtons__org_patternfly_component_navigation_Navigation_.m_change__java_lang_Object__void(overflowOnLeft || overflowOnRight);
   this.f_disableBackScrollButton__org_patternfly_component_navigation_Navigation_.m_change__java_lang_Object__void(!overflowOnLeft);
   this.f_disableForwardScrollButton__org_patternfly_component_navigation_Navigation_.m_change__java_lang_Object__void(!overflowOnRight);
  }, 100, []);
 }
 /** @nodts */
 m_hideScrollButtons__void_$p_org_patternfly_component_navigation_Navigation() {
  if (!Boolean.m_booleanValue__java_lang_Boolean__boolean(/**@type {?boolean}*/ ($Casts.$to(this.f_enableScrollButtons__org_patternfly_component_navigation_Navigation_.m_get__java_lang_Object(), Boolean))) && !Boolean.m_booleanValue__java_lang_Boolean__boolean(/**@type {?boolean}*/ ($Casts.$to(this.f_showScrollButtons__org_patternfly_component_navigation_Navigation_.m_get__java_lang_Object(), Boolean))) && Boolean.m_booleanValue__java_lang_Boolean__boolean(/**@type {?boolean}*/ ($Casts.$to(this.f_renderScrollButtons__org_patternfly_component_navigation_Navigation_.m_get__java_lang_Object(), Boolean)))) {
   this.f_renderScrollButtons__org_patternfly_component_navigation_Navigation_.m_change__java_lang_Object__void(false);
  }
 }
 /** @nodts */
 m_scrollBack__void_$p_org_patternfly_component_navigation_Navigation() {
  let firstElementInView = null;
  let lastElementOutOfView = null;
  let children = this.f_itemsContainer__org_patternfly_component_navigation_Navigation_.childNodes;
  for (let i = 0; i < children.length && $Equality.$same(firstElementInView, null); i = i + 1 | 0) {
   let child = /**@type {HTMLElement}*/ ($Casts.$to(children.item(i), $Overlay));
   if (Elements.m_isElementInView__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__boolean__boolean(this.f_itemsContainer__org_patternfly_component_navigation_Navigation_, child, false)) {
    firstElementInView = child;
    lastElementOutOfView = /**@type {HTMLElement}*/ ($Casts.$to(children.item(i - 1 | 0), $Overlay));
   }
  }
  if (!$Equality.$same(lastElementOutOfView, null)) {
   if ($Equality.$same(LanguageDirection.m_languageDirection__elemental2_dom_HTMLElement__org_patternfly_core_LanguageDirection(this.m_element__elemental2_dom_HTMLElement()), LanguageDirection.f_ltr__org_patternfly_core_LanguageDirection)) {
    this.f_itemsContainer__org_patternfly_component_navigation_Navigation_.scrollLeft -= lastElementOutOfView.scrollWidth;
   } else {
    this.f_itemsContainer__org_patternfly_component_navigation_Navigation_.scrollLeft += lastElementOutOfView.scrollWidth;
   }
  }
 }
 /** @nodts */
 m_scrollForward__void_$p_org_patternfly_component_navigation_Navigation() {
  let lastElementInView = null;
  let firstElementOutOfView = null;
  let children = this.f_itemsContainer__org_patternfly_component_navigation_Navigation_.childNodes;
  for (let i = children.length - 1 | 0; i >= 0 && $Equality.$same(lastElementInView, null); i = i - 1 | 0) {
   let child = /**@type {HTMLElement}*/ ($Casts.$to(children.item(i), $Overlay));
   if (Elements.m_isElementInView__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__boolean__boolean(this.f_itemsContainer__org_patternfly_component_navigation_Navigation_, child, false)) {
    lastElementInView = child;
    firstElementOutOfView = /**@type {HTMLElement}*/ ($Casts.$to(children.item(i + 1 | 0), $Overlay));
   }
  }
  if (!$Equality.$same(firstElementOutOfView, null)) {
   if ($Equality.$same(LanguageDirection.m_languageDirection__elemental2_dom_HTMLElement__org_patternfly_core_LanguageDirection(this.m_element__elemental2_dom_HTMLElement()), LanguageDirection.f_ltr__org_patternfly_core_LanguageDirection)) {
    this.f_itemsContainer__org_patternfly_component_navigation_Navigation_.scrollLeft += firstElementOutOfView.scrollWidth;
   } else {
    this.f_itemsContainer__org_patternfly_component_navigation_Navigation_.scrollLeft -= firstElementOutOfView.scrollWidth;
   }
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {Navigation} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_navigation_Navigation();
 }
 /** @nodts */
 static $clinit() {
  Navigation.$clinit = () =>{};
  Navigation.$loadModules();
  BaseComponent.$clinit();
  Attachable.$clinit();
  Navigation.f_A_NAV_LINK_CURRENT__org_patternfly_component_navigation_Navigation_ = By.m_element__java_lang_String__org_jboss_elemento_By('a').m_and__org_jboss_elemento_By__org_jboss_elemento_By(By.m_classnames__java_lang_String__java_lang_String__arrayOf_java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_link__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes), /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))));
  Navigation.f_LI_NAV_ITEM_EXPANDABLE__org_patternfly_component_navigation_Navigation_ = By.m_element__java_lang_String__org_jboss_elemento_By('li').m_and__org_jboss_elemento_By__org_jboss_elemento_By(By.m_classnames__java_lang_String__java_lang_String__arrayOf_java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_nav__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expandable__org_patternfly_style_Classes), /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Navigation;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Divider = goog.module.get('org.patternfly.component.divider.Divider$impl');
  DividerType = goog.module.get('org.patternfly.component.divider.DividerType$impl');
  ExpandableNavigationGroup = goog.module.get('org.patternfly.component.navigation.ExpandableNavigationGroup$impl');
  NavigationGroup = goog.module.get('org.patternfly.component.navigation.NavigationGroup$impl');
  NavigationItem = goog.module.get('org.patternfly.component.navigation.NavigationItem$impl');
  Horizontal = goog.module.get('org.patternfly.component.navigation.NavigationType.Horizontal$impl');
  Vertical = goog.module.get('org.patternfly.component.navigation.NavigationType.Vertical$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  LanguageDirection = goog.module.get('org.patternfly.core.LanguageDirection$impl');
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
  ObservableValue = goog.module.get('org.patternfly.core.ObservableValue$impl');
  Subscriber = goog.module.get('org.patternfly.core.ObservableValue.Subscriber$impl');
  Validation = goog.module.get('org.patternfly.core.Validation$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Brightness = goog.module.get('org.patternfly.style.Brightness$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {By} @nodts*/
Navigation.f_A_NAV_LINK_CURRENT__org_patternfly_component_navigation_Navigation_;
/**@type {By} @nodts*/
Navigation.f_LI_NAV_ITEM_EXPANDABLE__org_patternfly_component_navigation_Navigation_;
Attachable.$markImplementor(Navigation);
$Util.$setClassMetadata(Navigation, 'org.patternfly.component.navigation.Navigation');

exports = Navigation;

//# sourceMappingURL=Navigation.js.map

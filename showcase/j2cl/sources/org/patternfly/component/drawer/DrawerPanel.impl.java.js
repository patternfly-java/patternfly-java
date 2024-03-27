goog.module('org.patternfly.component.drawer.DrawerPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const DrawerSubComponent = goog.require('org.patternfly.component.drawer.DrawerSubComponent$impl');

let JsNumber_$Overlay = goog.forwardDeclare('elemental2.core.JsNumber.$Overlay$impl');
let AddEventListenerOptions_$Overlay = goog.forwardDeclare('elemental2.dom.AddEventListenerOptions.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let EventTarget_$Overlay = goog.forwardDeclare('elemental2.dom.EventTarget.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let KeyboardEvent_$Overlay = goog.forwardDeclare('elemental2.dom.KeyboardEvent.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let TouchEvent_$Overlay = goog.forwardDeclare('elemental2.dom.TouchEvent.$Overlay$impl');
let Math = goog.forwardDeclare('java.lang.Math$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Key = goog.forwardDeclare('org.jboss.elemento.Key$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Drawer = goog.forwardDeclare('org.patternfly.component.drawer.Drawer$impl');
let DrawerColor = goog.forwardDeclare('org.patternfly.component.drawer.DrawerColor$impl');
let DrawerPanelBody = goog.forwardDeclare('org.patternfly.component.drawer.DrawerPanelBody$impl');
let DrawerPanelHead = goog.forwardDeclare('org.patternfly.component.drawer.DrawerPanelHead$impl');
let DrawerPanelWidth = goog.forwardDeclare('org.patternfly.component.drawer.DrawerPanelWidth$impl');
let Position = goog.forwardDeclare('org.patternfly.component.drawer.Position$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let LanguageDirection = goog.forwardDeclare('org.patternfly.core.LanguageDirection$impl');
let ResizeHandler = goog.forwardDeclare('org.patternfly.handler.ResizeHandler$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.style.Modifiers$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let Variables = goog.forwardDeclare('org.patternfly.style.Variables$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @extends {DrawerSubComponent<HTMLDivElement, DrawerPanel>}
 * @implements {Attachable}
 */
class DrawerPanel extends DrawerSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {number} @nodts*/
  this.f_increment__org_patternfly_component_drawer_DrawerPanel_ = 0;
  /**@type {boolean} @nodts*/
  this.f_resizable__org_patternfly_component_drawer_DrawerPanel_ = false;
  /**@type {boolean} @nodts*/
  this.f_isResizing__org_patternfly_component_drawer_DrawerPanel_ = false;
  /**@type {boolean} @nodts*/
  this.f_setInitialVals__org_patternfly_component_drawer_DrawerPanel_ = false;
  /**@type {number} @nodts*/
  this.f_currentWidth__org_patternfly_component_drawer_DrawerPanel_ = 0;
  /**@type {number} @nodts*/
  this.f_start__org_patternfly_component_drawer_DrawerPanel_ = 0;
  /**@type {number} @nodts*/
  this.f_end__org_patternfly_component_drawer_DrawerPanel_ = 0;
  /**@type {number} @nodts*/
  this.f_bottom__org_patternfly_component_drawer_DrawerPanel_ = 0;
  /**@type {?string} @nodts*/
  this.f_ariaResizeLabel__org_patternfly_component_drawer_DrawerPanel_;
  /**@type {Drawer} @nodts*/
  this.f_drawer__org_patternfly_component_drawer_DrawerPanel_;
  /**@type {HTMLContainerBuilder<HTMLDivElement>} @nodts*/
  this.f_splitterElement__org_patternfly_component_drawer_DrawerPanel_;
  /**@type {ResizeHandler<DrawerPanel>} @nodts*/
  this.f_resizeHandler__org_patternfly_component_drawer_DrawerPanel_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_mouseDownHandler__org_patternfly_component_drawer_DrawerPanel_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_mouseMoveHandler__org_patternfly_component_drawer_DrawerPanel_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_mouseUpHandler__org_patternfly_component_drawer_DrawerPanel_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_touchStartHandler__org_patternfly_component_drawer_DrawerPanel_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_touchMoveHandler__org_patternfly_component_drawer_DrawerPanel_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_touchEndHandler__org_patternfly_component_drawer_DrawerPanel_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_keyDownHandler__org_patternfly_component_drawer_DrawerPanel_;
 }
 /** @nodts @return {DrawerPanel} */
 static m_drawerPanel__org_patternfly_component_drawer_DrawerPanel() {
  DrawerPanel.$clinit();
  return DrawerPanel.$create__();
 }
 /** @nodts @return {!DrawerPanel} */
 static $create__() {
  DrawerPanel.$clinit();
  let $instance = new DrawerPanel();
  $instance.$ctor__org_patternfly_component_drawer_DrawerPanel__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_drawer_DrawerPanel__void() {
  this.$ctor__org_patternfly_component_drawer_DrawerSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(DrawerPanel.f_SUB_COMPONENT_NAME__org_patternfly_component_drawer_DrawerPanel, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_drawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_panel__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_increment__org_patternfly_component_drawer_DrawerPanel_ = 5;
  this.f_resizable__org_patternfly_component_drawer_DrawerPanel_ = false;
  this.f_isResizing__org_patternfly_component_drawer_DrawerPanel_ = false;
  this.f_setInitialVals__org_patternfly_component_drawer_DrawerPanel_ = true;
  this.f_ariaResizeLabel__org_patternfly_component_drawer_DrawerPanel_ = 'Resize';
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (this.f_resizable__org_patternfly_component_drawer_DrawerPanel_) {
   this.f_drawer__org_patternfly_component_drawer_DrawerPanel_ = /**@type {Drawer}*/ ($Casts.$to(this.m_lookupFlatComponent__org_patternfly_component_BaseComponentFlat(), Drawer));
   let id = /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)).id;
   if ($Equality.$same(id, null) || j_l_String.m_isEmpty__java_lang_String__boolean(id)) {
    id = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Dropdown__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['panel'], j_l_String)));
    this.m_id__java_lang_String__org_jboss_elemento_TypedBuilder(id);
   }
   this.f_splitterElement__org_patternfly_component_drawer_DrawerPanel_ = /**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_drawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_splitter__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((e) =>{
    let e_1 = /**@type {HTMLDivElement}*/ ($Casts.$to(e, $Overlay));
    e_1.tabIndex = 0;
   })), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'separator'), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, this.f_ariaResizeLabel__org_patternfly_component_drawer_DrawerPanel_), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_controls__org_patternfly_core_Aria, id), HTMLContainerBuilder)).m_aria__java_lang_String__int__org_jboss_elemento_TypedBuilder(Aria.f_valueMin__org_patternfly_core_Aria, 0), HTMLContainerBuilder)).m_aria__java_lang_String__int__org_jboss_elemento_TypedBuilder(Aria.f_valueMax__org_patternfly_core_Aria, 100), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_orientation__org_patternfly_core_Aria, $Equality.$same(this.f_drawer__org_patternfly_component_drawer_DrawerPanel_.f_position__org_patternfly_component_drawer_Drawer, Position.f_bottom__org_patternfly_component_drawer_Position) ? 'horizontal' : 'vertical'), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_drawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_splitter__org_patternfly_style_Classes, Classes.f_handle__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))), HTMLContainerBuilder));
   if (!$Equality.$same(this.f_drawer__org_patternfly_component_drawer_DrawerPanel_.f_position__org_patternfly_component_drawer_Drawer, Position.f_bottom__org_patternfly_component_drawer_Position)) {
    this.f_splitterElement__org_patternfly_component_drawer_DrawerPanel_.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_vertical__org_patternfly_style_Classes)], j_l_String)));
   }
   let mainContainer = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_drawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_panel__org_patternfly_style_Classes, Classes.f_main__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay));
   while (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)).hasChildNodes()) {
    mainContainer.appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)).firstChild);
   }
   this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_splitterElement__org_patternfly_component_drawer_DrawerPanel_);
   this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(mainContainer);
   this.f_mouseDownHandler__org_patternfly_component_drawer_DrawerPanel_ = EventType.m_bind__org_jboss_elemento_IsElement__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(this.f_splitterElement__org_patternfly_component_drawer_DrawerPanel_, EventType.f_mousedown__org_jboss_elemento_EventType, (arg0) =>{
    let arg0_1 = /**@type {MouseEvent}*/ ($Casts.$to(arg0, MouseEvent_$Overlay));
    this.m_handleMouseDown__elemental2_dom_MouseEvent__void_$p_org_patternfly_component_drawer_DrawerPanel(arg0_1);
   });
   this.f_touchStartHandler__org_patternfly_component_drawer_DrawerPanel_ = EventType.m_bind__org_jboss_elemento_IsElement__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(this.f_splitterElement__org_patternfly_component_drawer_DrawerPanel_, EventType.f_touchstart__org_jboss_elemento_EventType, (arg0_2) =>{
    let arg0_3 = /**@type {TouchEvent}*/ ($Casts.$to(arg0_2, TouchEvent_$Overlay));
    this.m_handleTouchStart__elemental2_dom_TouchEvent__void_$p_org_patternfly_component_drawer_DrawerPanel(arg0_3);
   });
   this.f_keyDownHandler__org_patternfly_component_drawer_DrawerPanel_ = EventType.m_bind__org_jboss_elemento_IsElement__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(this.f_splitterElement__org_patternfly_component_drawer_DrawerPanel_, EventType.f_keydown__org_jboss_elemento_EventType, (arg0_4) =>{
    let arg0_5 = /**@type {KeyboardEvent}*/ ($Casts.$to(arg0_4, KeyboardEvent_$Overlay));
    this.m_handleKeys__elemental2_dom_KeyboardEvent__void_$p_org_patternfly_component_drawer_DrawerPanel(arg0_5);
   });
   this.f_splitterElement__org_patternfly_component_drawer_DrawerPanel_.m_aria__java_lang_String__int__org_jboss_elemento_TypedBuilder(Aria.f_valueNow__org_patternfly_core_Aria, this.m_calcValueNow__int_$p_org_patternfly_component_drawer_DrawerPanel());
  }
 }
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (!$Equality.$same(this.f_mouseDownHandler__org_patternfly_component_drawer_DrawerPanel_, null)) {
   this.f_mouseDownHandler__org_patternfly_component_drawer_DrawerPanel_.m_removeHandler__void();
  }
  if (!$Equality.$same(this.f_mouseMoveHandler__org_patternfly_component_drawer_DrawerPanel_, null)) {
   this.f_mouseMoveHandler__org_patternfly_component_drawer_DrawerPanel_.m_removeHandler__void();
  }
  if (!$Equality.$same(this.f_mouseUpHandler__org_patternfly_component_drawer_DrawerPanel_, null)) {
   this.f_mouseUpHandler__org_patternfly_component_drawer_DrawerPanel_.m_removeHandler__void();
  }
  if (!$Equality.$same(this.f_touchStartHandler__org_patternfly_component_drawer_DrawerPanel_, null)) {
   this.f_touchStartHandler__org_patternfly_component_drawer_DrawerPanel_.m_removeHandler__void();
  }
  if (!$Equality.$same(this.f_touchMoveHandler__org_patternfly_component_drawer_DrawerPanel_, null)) {
   this.f_touchMoveHandler__org_patternfly_component_drawer_DrawerPanel_.m_removeHandler__void();
  }
  if (!$Equality.$same(this.f_touchEndHandler__org_patternfly_component_drawer_DrawerPanel_, null)) {
   this.f_touchEndHandler__org_patternfly_component_drawer_DrawerPanel_.m_removeHandler__void();
  }
  if (!$Equality.$same(this.f_keyDownHandler__org_patternfly_component_drawer_DrawerPanel_, null)) {
   this.f_keyDownHandler__org_patternfly_component_drawer_DrawerPanel_.m_removeHandler__void();
  }
 }
 /** @nodts @return {DrawerPanel} */
 m_addHead__org_patternfly_component_drawer_DrawerPanelHead__org_patternfly_component_drawer_DrawerPanel(/** DrawerPanelHead */ head) {
  return /**@type {DrawerPanel}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(head), DrawerPanel));
 }
 /** @nodts @return {DrawerPanel} */
 m_addBody__org_patternfly_component_drawer_DrawerPanelBody__org_patternfly_component_drawer_DrawerPanel(/** DrawerPanelBody */ body) {
  return /**@type {DrawerPanel}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(body), DrawerPanel));
 }
 /** @nodts @return {DrawerPanel} */
 m_defaultSize__java_lang_String__org_patternfly_component_drawer_DrawerPanel(/** ?string */ defaultSize) {
  return /**@type {DrawerPanel}*/ ($Casts.$to(Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_drawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_panel__org_patternfly_style_Classes], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$init([Breakpoint.f_md__org_patternfly_style_Breakpoint.f_value__org_patternfly_style_Breakpoint, Variables.f_FlexBasis__org_patternfly_style_Variables], j_l_String))).m_applyTo__org_jboss_elemento_HasHTMLElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, defaultSize), DrawerPanel));
 }
 /** @nodts @return {DrawerPanel} */
 m_minSize__java_lang_String__org_patternfly_component_drawer_DrawerPanel(/** ?string */ minSize) {
  return /**@type {DrawerPanel}*/ ($Casts.$to(Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_drawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_panel__org_patternfly_style_Classes], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$init([Breakpoint.f_md__org_patternfly_style_Breakpoint.f_value__org_patternfly_style_Breakpoint, Variables.f_FlexBasis__org_patternfly_style_Variables, 'min'], j_l_String))).m_applyTo__org_jboss_elemento_HasHTMLElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, minSize), DrawerPanel));
 }
 /** @nodts @return {DrawerPanel} */
 m_maxSize__java_lang_String__org_patternfly_component_drawer_DrawerPanel(/** ?string */ maxSize) {
  return /**@type {DrawerPanel}*/ ($Casts.$to(Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_drawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_panel__org_patternfly_style_Classes], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$init([Breakpoint.f_md__org_patternfly_style_Breakpoint.f_value__org_patternfly_style_Breakpoint, Variables.f_FlexBasis__org_patternfly_style_Variables, 'max'], j_l_String))).m_applyTo__org_jboss_elemento_HasHTMLElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, maxSize), DrawerPanel));
 }
 /** @nodts @return {DrawerPanel} */
 m_color__org_patternfly_component_drawer_DrawerColor__org_patternfly_component_drawer_DrawerPanel(/** DrawerColor */ color) {
  return /**@type {DrawerPanel}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([color.f_modifier__org_patternfly_component_drawer_DrawerColor], j_l_String))), DrawerPanel));
 }
 /** @nodts @return {DrawerPanel} */
 m_noBorder__org_patternfly_component_drawer_DrawerPanel() {
  return this.m_noBorder__boolean__org_patternfly_component_drawer_DrawerPanel(true);
 }
 /** @nodts @return {DrawerPanel} */
 m_noBorder__boolean__org_patternfly_component_drawer_DrawerPanel(/** boolean */ noBorder) {
  return /**@type {DrawerPanel}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), Classes.f_noBorder__org_patternfly_style_Classes, noBorder), DrawerPanel));
 }
 /** @nodts @return {DrawerPanel} */
 m_resizable__org_patternfly_component_drawer_DrawerPanel() {
  this.f_resizable__org_patternfly_component_drawer_DrawerPanel_ = true;
  return /**@type {DrawerPanel}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_resizable__org_patternfly_style_Classes)], j_l_String))), DrawerPanel));
 }
 /** @nodts @return {DrawerPanel} */
 m_increment__int__org_patternfly_component_drawer_DrawerPanel(/** number */ increment) {
  this.f_increment__org_patternfly_component_drawer_DrawerPanel_ = increment;
  return this;
 }
 /** @nodts @return {DrawerPanel} */
 m_widths__org_patternfly_style_Breakpoints__org_patternfly_component_drawer_DrawerPanel(/** Breakpoints<DrawerPanelWidth> */ widths) {
  return /**@type {DrawerPanel}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([widths.m_modifiers__java_lang_String()], j_l_String))), DrawerPanel));
 }
 /** @nodts @return {DrawerPanel} */
 m_that__org_patternfly_component_drawer_DrawerPanel() {
  return this;
 }
 /** @nodts @return {DrawerPanel} */
 m_ariaResizeLabel__java_lang_String__org_patternfly_component_drawer_DrawerPanel(/** ?string */ ariaResizeLabel) {
  this.f_ariaResizeLabel__org_patternfly_component_drawer_DrawerPanel_ = ariaResizeLabel;
  return this;
 }
 /** @nodts @return {DrawerPanel} */
 m_onResize__org_patternfly_handler_ResizeHandler__org_patternfly_component_drawer_DrawerPanel(/** ResizeHandler<DrawerPanel> */ resizeHandler) {
  this.f_resizeHandler__org_patternfly_component_drawer_DrawerPanel_ = resizeHandler;
  return this;
 }
 /** @nodts @return {number} */
 m_currentWidth__double() {
  return this.f_currentWidth__org_patternfly_component_drawer_DrawerPanel_;
 }
 /** @nodts @return {number} */
 m_calcValueNow__int_$p_org_patternfly_component_drawer_DrawerPanel() {
  if (!this.m_resizableDrawer__boolean_$p_org_patternfly_component_drawer_DrawerPanel()) {
   return 0;
  }
  let splitterPos = 0;
  let drawerSize = 1;
  let drawerRect = this.f_drawer__org_patternfly_component_drawer_DrawerPanel_.m_element__elemental2_dom_HTMLElement().getBoundingClientRect();
  let contentRect = /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_drawer__org_patternfly_component_drawer_DrawerPanel_.f_content__org_patternfly_component_drawer_Drawer.m_element__elemental2_dom_HTMLElement(), $Overlay)).getBoundingClientRect();
  let splitterRect = /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_splitterElement__org_patternfly_component_drawer_DrawerPanel_.m_element__elemental2_dom_HTMLElement(), $Overlay)).getBoundingClientRect();
  let panelRect = /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)).getBoundingClientRect();
  let rtl = $Equality.$same(LanguageDirection.m_languageDirection__elemental2_dom_HTMLElement__org_patternfly_core_LanguageDirection(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay))), LanguageDirection.f_rtl__org_patternfly_core_LanguageDirection);
  if (this.f_drawer__org_patternfly_component_drawer_DrawerPanel_.f_inline__org_patternfly_component_drawer_Drawer) {
   if ($Equality.$same(this.f_drawer__org_patternfly_component_drawer_DrawerPanel_.f_position__org_patternfly_component_drawer_Drawer, Position.f_end__org_patternfly_component_drawer_Position)) {
    if (rtl) {
     splitterPos = panelRect.left - splitterRect.right;
     drawerSize = drawerRect.left - drawerRect.right;
    } else {
     splitterPos = panelRect.right - splitterRect.left;
     drawerSize = drawerRect.right - drawerRect.left;
    }
   } else if ($Equality.$same(this.f_drawer__org_patternfly_component_drawer_DrawerPanel_.f_position__org_patternfly_component_drawer_Drawer, Position.f_start__org_patternfly_component_drawer_Position)) {
    if (rtl) {
     splitterPos = splitterRect.left - panelRect.right;
     drawerSize = drawerRect.left - drawerRect.right;
    } else {
     splitterPos = splitterRect.right - panelRect.left;
     drawerSize = drawerRect.right - drawerRect.left;
    }
   }
  } else {
   if ($Equality.$same(this.f_drawer__org_patternfly_component_drawer_DrawerPanel_.f_position__org_patternfly_component_drawer_Drawer, Position.f_end__org_patternfly_component_drawer_Position)) {
    if (rtl) {
     splitterPos = contentRect.left - splitterRect.right;
     drawerSize = contentRect.left - contentRect.right;
    } else {
     splitterPos = contentRect.right - splitterRect.left;
     drawerSize = contentRect.right - contentRect.left;
    }
   } else if ($Equality.$same(this.f_drawer__org_patternfly_component_drawer_DrawerPanel_.f_position__org_patternfly_component_drawer_Drawer, Position.f_start__org_patternfly_component_drawer_Position)) {
    if (rtl) {
     splitterPos = splitterRect.left - contentRect.right;
     drawerSize = contentRect.left - contentRect.right;
    } else {
     splitterPos = splitterRect.right - contentRect.left;
     drawerSize = contentRect.right - contentRect.left;
    }
   } else if ($Equality.$same(this.f_drawer__org_patternfly_component_drawer_DrawerPanel_.f_position__org_patternfly_component_drawer_Drawer, Position.f_bottom__org_patternfly_component_drawer_Position)) {
    splitterPos = contentRect.bottom - splitterRect.top;
    drawerSize = contentRect.bottom - contentRect.top;
   }
  }
  let newSplitterPos = splitterPos / drawerSize * 100;
  return $Primitives.narrowLongToInt($LongUtils.divide(Math.m_round__double__long((newSplitterPos + JsNumber_$Overlay.f_EPSILON__elemental2_core_JsNumber_$Overlay) * 100), $Long.fromInt(100)));
 }
 /** @nodts */
 m_handleMouseDown__elemental2_dom_MouseEvent__void_$p_org_patternfly_component_drawer_DrawerPanel(/** MouseEvent */ event) {
  if (this.m_resizableDrawer__boolean_$p_org_patternfly_component_drawer_DrawerPanel()) {
   event.stopPropagation();
   event.preventDefault();
   this.f_mouseMoveHandler__org_patternfly_component_drawer_DrawerPanel_ = EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, EventType.f_mousemove__org_jboss_elemento_EventType, (arg0) =>{
    let arg0_1 = /**@type {MouseEvent}*/ ($Casts.$to(arg0, MouseEvent_$Overlay));
    this.m_handleMouseMove__elemental2_dom_MouseEvent__void_$p_org_patternfly_component_drawer_DrawerPanel(arg0_1);
   });
   this.f_mouseUpHandler__org_patternfly_component_drawer_DrawerPanel_ = EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, EventType.f_mouseup__org_jboss_elemento_EventType, (arg0_2) =>{
    let arg0_3 = /**@type {MouseEvent}*/ ($Casts.$to(arg0_2, MouseEvent_$Overlay));
    this.m_handleMouseUp__elemental2_dom_MouseEvent__void_$p_org_patternfly_component_drawer_DrawerPanel(arg0_3);
   });
   this.f_drawer__org_patternfly_component_drawer_DrawerPanel_.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_resizing__org_patternfly_style_Classes)], j_l_String)));
   this.f_isResizing__org_patternfly_component_drawer_DrawerPanel_ = true;
   this.f_setInitialVals__org_patternfly_component_drawer_DrawerPanel_ = true;
  }
 }
 /** @nodts */
 m_handleTouchStart__elemental2_dom_TouchEvent__void_$p_org_patternfly_component_drawer_DrawerPanel(/** TouchEvent */ event) {
  if (this.m_resizableDrawer__boolean_$p_org_patternfly_component_drawer_DrawerPanel()) {
   event.stopPropagation();
   let options = AddEventListenerOptions_$Overlay.m_create__elemental2_dom_AddEventListenerOptions();
   options.passive = true;
   let listener = EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ evt) =>{
    this.m_handleTouchMove__elemental2_dom_TouchEvent__void_$p_org_patternfly_component_drawer_DrawerPanel(/**@type {TouchEvent}*/ ($Casts.$to(evt, TouchEvent_$Overlay)));
   });
   EventTarget_$Overlay.m_addEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__elemental2_dom_AddEventListenerOptions__void(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, EventType.f_touchmove__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, listener, options);
   this.f_touchMoveHandler__org_patternfly_component_drawer_DrawerPanel_ = HandlerRegistration.$adapt(() =>{
    EventTarget_$Overlay.m_removeEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__elemental2_dom_EventListenerOptions__void(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, EventType.f_touchmove__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, listener, options);
   });
   this.f_touchEndHandler__org_patternfly_component_drawer_DrawerPanel_ = EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, EventType.f_touchend__org_jboss_elemento_EventType, (arg0) =>{
    let arg0_1 = /**@type {TouchEvent}*/ ($Casts.$to(arg0, TouchEvent_$Overlay));
    this.m_handleTouchEnd__elemental2_dom_TouchEvent__void_$p_org_patternfly_component_drawer_DrawerPanel(arg0_1);
   });
   this.f_isResizing__org_patternfly_component_drawer_DrawerPanel_ = true;
  }
 }
 /** @nodts */
 m_handleMouseMove__elemental2_dom_MouseEvent__void_$p_org_patternfly_component_drawer_DrawerPanel(/** MouseEvent */ event) {
  if (this.m_resizableDrawer__boolean_$p_org_patternfly_component_drawer_DrawerPanel()) {
   let mousePos = $Equality.$same(this.f_drawer__org_patternfly_component_drawer_DrawerPanel_.f_position__org_patternfly_component_drawer_Drawer, Position.f_bottom__org_patternfly_component_drawer_Position) ? event.clientY : event.clientX;
   this.m_handleControlMove__elemental2_dom_Event__double__void_$p_org_patternfly_component_drawer_DrawerPanel(event, mousePos);
  }
 }
 /** @nodts */
 m_handleTouchMove__elemental2_dom_TouchEvent__void_$p_org_patternfly_component_drawer_DrawerPanel(/** TouchEvent */ event) {
  if (this.m_resizableDrawer__boolean_$p_org_patternfly_component_drawer_DrawerPanel()) {
   event.preventDefault();
   event.stopImmediatePropagation();
   let touchPos = $Equality.$same(this.f_drawer__org_patternfly_component_drawer_DrawerPanel_.f_position__org_patternfly_component_drawer_Drawer, Position.f_bottom__org_patternfly_component_drawer_Position) ? event.touches.item(0).clientY : event.touches.item(0).clientX;
   this.m_handleControlMove__elemental2_dom_Event__double__void_$p_org_patternfly_component_drawer_DrawerPanel(event, touchPos);
  }
 }
 /** @nodts */
 m_handleControlMove__elemental2_dom_Event__double__void_$p_org_patternfly_component_drawer_DrawerPanel(/** Event */ event, /** number */ controlPosition) {
  if (this.m_resizableDrawer__boolean_$p_org_patternfly_component_drawer_DrawerPanel()) {
   let rtl = $Equality.$same(LanguageDirection.m_languageDirection__elemental2_dom_HTMLElement__org_patternfly_core_LanguageDirection(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay))), LanguageDirection.f_rtl__org_patternfly_core_LanguageDirection);
   event.stopPropagation();
   if (this.f_isResizing__org_patternfly_component_drawer_DrawerPanel_) {
    if (this.f_setInitialVals__org_patternfly_component_drawer_DrawerPanel_) {
     let panelRect = /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)).getBoundingClientRect();
     if (rtl) {
      this.f_start__org_patternfly_component_drawer_DrawerPanel_ = panelRect.right;
      this.f_end__org_patternfly_component_drawer_DrawerPanel_ = panelRect.left;
     } else {
      this.f_start__org_patternfly_component_drawer_DrawerPanel_ = panelRect.left;
      this.f_end__org_patternfly_component_drawer_DrawerPanel_ = panelRect.right;
     }
     this.f_bottom__org_patternfly_component_drawer_DrawerPanel_ = panelRect.bottom;
     this.f_setInitialVals__org_patternfly_component_drawer_DrawerPanel_ = false;
    }
    let /** number */ newSize;
    if ($Equality.$same(this.f_drawer__org_patternfly_component_drawer_DrawerPanel_.f_position__org_patternfly_component_drawer_Drawer, Position.f_end__org_patternfly_component_drawer_Position)) {
     newSize = rtl ? controlPosition - this.f_end__org_patternfly_component_drawer_DrawerPanel_ : this.f_end__org_patternfly_component_drawer_DrawerPanel_ - controlPosition;
    } else if ($Equality.$same(this.f_drawer__org_patternfly_component_drawer_DrawerPanel_.f_position__org_patternfly_component_drawer_Drawer, Position.f_start__org_patternfly_component_drawer_Position)) {
     newSize = rtl ? this.f_start__org_patternfly_component_drawer_DrawerPanel_ - controlPosition : controlPosition - this.f_start__org_patternfly_component_drawer_DrawerPanel_;
    } else {
     newSize = this.f_bottom__org_patternfly_component_drawer_DrawerPanel_ - controlPosition;
    }
    if ($Equality.$same(this.f_drawer__org_patternfly_component_drawer_DrawerPanel_.f_position__org_patternfly_component_drawer_Drawer, Position.f_bottom__org_patternfly_component_drawer_Position)) {
     this.m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('overflow-anchor', 'none');
    }
    this.m_updateSize__double__void_$p_org_patternfly_component_drawer_DrawerPanel(newSize);
   }
  }
 }
 /** @nodts */
 m_handleMouseUp__elemental2_dom_MouseEvent__void_$p_org_patternfly_component_drawer_DrawerPanel(/** MouseEvent */ event) {
  if (this.m_resizableDrawer__boolean_$p_org_patternfly_component_drawer_DrawerPanel() && this.f_isResizing__org_patternfly_component_drawer_DrawerPanel_) {
   this.f_drawer__org_patternfly_component_drawer_DrawerPanel_.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_resizing__org_patternfly_style_Classes)], j_l_String)));
   this.f_isResizing__org_patternfly_component_drawer_DrawerPanel_ = false;
   if (!$Equality.$same(this.f_resizeHandler__org_patternfly_component_drawer_DrawerPanel_, null)) {
    this.f_resizeHandler__org_patternfly_component_drawer_DrawerPanel_.m_onResize__java_lang_Object__void(this);
   }
   this.f_setInitialVals__org_patternfly_component_drawer_DrawerPanel_ = true;
   this.f_mouseMoveHandler__org_patternfly_component_drawer_DrawerPanel_.m_removeHandler__void();
   this.f_mouseUpHandler__org_patternfly_component_drawer_DrawerPanel_.m_removeHandler__void();
  }
 }
 /** @nodts */
 m_handleTouchEnd__elemental2_dom_TouchEvent__void_$p_org_patternfly_component_drawer_DrawerPanel(/** TouchEvent */ event) {
  if (this.m_resizableDrawer__boolean_$p_org_patternfly_component_drawer_DrawerPanel()) {
   event.stopPropagation();
   if (this.f_isResizing__org_patternfly_component_drawer_DrawerPanel_) {
    this.f_isResizing__org_patternfly_component_drawer_DrawerPanel_ = false;
    if (!$Equality.$same(this.f_resizeHandler__org_patternfly_component_drawer_DrawerPanel_, null)) {
     this.f_resizeHandler__org_patternfly_component_drawer_DrawerPanel_.m_onResize__java_lang_Object__void(this);
    }
    this.f_touchMoveHandler__org_patternfly_component_drawer_DrawerPanel_.m_removeHandler__void();
    this.f_touchEndHandler__org_patternfly_component_drawer_DrawerPanel_.m_removeHandler__void();
   }
  }
 }
 /** @nodts */
 m_handleKeys__elemental2_dom_KeyboardEvent__void_$p_org_patternfly_component_drawer_DrawerPanel(/** KeyboardEvent */ event) {
  if (this.m_resizableDrawer__boolean_$p_org_patternfly_component_drawer_DrawerPanel()) {
   if (Key.f_Escape__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event) || Key.f_Enter__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event) || Key.f_ArrowUp__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event) || Key.f_ArrowDown__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event) || Key.f_ArrowLeft__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event) || Key.f_ArrowRight__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event)) {
    let rtl = $Equality.$same(LanguageDirection.m_languageDirection__elemental2_dom_HTMLElement__org_patternfly_core_LanguageDirection(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay))), LanguageDirection.f_rtl__org_patternfly_core_LanguageDirection);
    event.preventDefault();
    if (Key.f_Escape__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event) || Key.f_Enter__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event)) {
     if (!$Equality.$same(this.f_resizeHandler__org_patternfly_component_drawer_DrawerPanel_, null)) {
      this.f_resizeHandler__org_patternfly_component_drawer_DrawerPanel_.m_onResize__java_lang_Object__void(this);
     }
    }
    let delta = 0;
    let panelRect = /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)).getBoundingClientRect();
    let newSize = $Equality.$same(this.f_drawer__org_patternfly_component_drawer_DrawerPanel_.f_position__org_patternfly_component_drawer_Drawer, Position.f_bottom__org_patternfly_component_drawer_Position) ? panelRect.height : panelRect.width;
    if (Key.f_ArrowRight__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event)) {
     if (rtl) {
      delta = $Equality.$same(this.f_drawer__org_patternfly_component_drawer_DrawerPanel_.f_position__org_patternfly_component_drawer_Drawer, Position.f_start__org_patternfly_component_drawer_Position) ? - this.f_increment__org_patternfly_component_drawer_DrawerPanel_ | 0 : this.f_increment__org_patternfly_component_drawer_DrawerPanel_;
     } else {
      delta = $Equality.$same(this.f_drawer__org_patternfly_component_drawer_DrawerPanel_.f_position__org_patternfly_component_drawer_Drawer, Position.f_start__org_patternfly_component_drawer_Position) ? this.f_increment__org_patternfly_component_drawer_DrawerPanel_ : - this.f_increment__org_patternfly_component_drawer_DrawerPanel_ | 0;
     }
    } else if (Key.f_ArrowLeft__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event)) {
     if (rtl) {
      delta = $Equality.$same(this.f_drawer__org_patternfly_component_drawer_DrawerPanel_.f_position__org_patternfly_component_drawer_Drawer, Position.f_start__org_patternfly_component_drawer_Position) ? this.f_increment__org_patternfly_component_drawer_DrawerPanel_ : - this.f_increment__org_patternfly_component_drawer_DrawerPanel_ | 0;
     } else {
      delta = $Equality.$same(this.f_drawer__org_patternfly_component_drawer_DrawerPanel_.f_position__org_patternfly_component_drawer_Drawer, Position.f_start__org_patternfly_component_drawer_Position) ? - this.f_increment__org_patternfly_component_drawer_DrawerPanel_ | 0 : this.f_increment__org_patternfly_component_drawer_DrawerPanel_;
     }
    } else if (Key.f_ArrowUp__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event)) {
     delta = this.f_increment__org_patternfly_component_drawer_DrawerPanel_;
    } else if (Key.f_ArrowDown__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event)) {
     delta = - this.f_increment__org_patternfly_component_drawer_DrawerPanel_ | 0;
    }
    newSize = newSize + delta;
    if ($Equality.$same(this.f_drawer__org_patternfly_component_drawer_DrawerPanel_.f_position__org_patternfly_component_drawer_Drawer, Position.f_bottom__org_patternfly_component_drawer_Position)) {
     this.m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('overflow-anchor', 'none');
    }
    this.m_updateSize__double__void_$p_org_patternfly_component_drawer_DrawerPanel(newSize);
   } else {
    if (this.f_isResizing__org_patternfly_component_drawer_DrawerPanel_) {
     event.preventDefault();
    }
   }
  }
 }
 /** @nodts */
 m_updateSize__double__void_$p_org_patternfly_component_drawer_DrawerPanel(/** number */ newSize) {
  this.f_currentWidth__org_patternfly_component_drawer_DrawerPanel_ = newSize;
  this.f_splitterElement__org_patternfly_component_drawer_DrawerPanel_.m_aria__java_lang_String__int__org_jboss_elemento_TypedBuilder(Aria.f_valueNow__org_patternfly_core_Aria, this.m_calcValueNow__int_$p_org_patternfly_component_drawer_DrawerPanel());
  Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_drawer__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_panel__org_patternfly_style_Classes], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$init([Breakpoint.f_md__org_patternfly_style_Breakpoint.f_value__org_patternfly_style_Breakpoint, Variables.f_FlexBasis__org_patternfly_style_Variables], j_l_String))).m_applyTo__org_jboss_elemento_HasHTMLElement__java_lang_String__org_jboss_elemento_TypedBuilder(this, newSize + 'px');
 }
 /** @nodts @return {boolean} */
 m_resizableDrawer__boolean_$p_org_patternfly_component_drawer_DrawerPanel() {
  return this.f_resizable__org_patternfly_component_drawer_DrawerPanel_ && !$Equality.$same(this.f_drawer__org_patternfly_component_drawer_DrawerPanel_, null);
 }
 //Bridge method.
 /** @final @override @nodts @return {DrawerPanel} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_drawer_DrawerPanel();
 }
 /** @nodts */
 static $clinit() {
  DrawerPanel.$clinit = () =>{};
  DrawerPanel.$loadModules();
  DrawerSubComponent.$clinit();
  Attachable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DrawerPanel;
 }
 
 /** @nodts */
 static $loadModules() {
  JsNumber_$Overlay = goog.module.get('elemental2.core.JsNumber.$Overlay$impl');
  AddEventListenerOptions_$Overlay = goog.module.get('elemental2.dom.AddEventListenerOptions.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  EventTarget_$Overlay = goog.module.get('elemental2.dom.EventTarget.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  KeyboardEvent_$Overlay = goog.module.get('elemental2.dom.KeyboardEvent.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  TouchEvent_$Overlay = goog.module.get('elemental2.dom.TouchEvent.$Overlay$impl');
  Math = goog.module.get('java.lang.Math$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  HandlerRegistration = goog.module.get('org.gwtproject.event.shared.HandlerRegistration$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Key = goog.module.get('org.jboss.elemento.Key$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Drawer = goog.module.get('org.patternfly.component.drawer.Drawer$impl');
  Position = goog.module.get('org.patternfly.component.drawer.Position$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  LanguageDirection = goog.module.get('org.patternfly.core.LanguageDirection$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
  Variable = goog.module.get('org.patternfly.style.Variable$impl');
  Variables = goog.module.get('org.patternfly.style.Variables$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@const {string} @nodts*/
DrawerPanel.f_SUB_COMPONENT_NAME__org_patternfly_component_drawer_DrawerPanel = 'dp';
Attachable.$markImplementor(DrawerPanel);
$Util.$setClassMetadata(DrawerPanel, 'org.patternfly.component.drawer.DrawerPanel');

exports = DrawerPanel;

//# sourceMappingURL=DrawerPanel.js.map

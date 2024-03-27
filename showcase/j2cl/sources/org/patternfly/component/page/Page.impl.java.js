goog.module('org.patternfly.component.page.Page$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Callback = goog.forwardDeclare('org.jboss.elemento.Callback$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Scheduler = goog.forwardDeclare('org.jboss.elemento.Scheduler$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Masthead = goog.forwardDeclare('org.patternfly.component.page.Masthead$impl');
let PageMain = goog.forwardDeclare('org.patternfly.component.page.PageMain$impl');
let PageSidebar = goog.forwardDeclare('org.patternfly.component.page.PageSidebar$impl');
let SkipToContent = goog.forwardDeclare('org.patternfly.component.skiptocontent.SkipToContent$impl');
let ObservableValue = goog.forwardDeclare('org.patternfly.core.ObservableValue$impl');
let Subscriber = goog.forwardDeclare('org.patternfly.core.ObservableValue.Subscriber$impl');
let ResizeHandler = goog.forwardDeclare('org.patternfly.handler.ResizeHandler$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Rect = goog.forwardDeclare('org.patternfly.style.Rect$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, Page>}
 * @implements {Attachable}
 */
class Page extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {ObservableValue<Rect>} @nodts*/
  this.f_rect__org_patternfly_component_page_Page_;
  /**@type {SkipToContent} @nodts*/
  this.f_skipToContent__org_patternfly_component_page_Page_;
  /**@type {Masthead} @nodts*/
  this.f_masthead__org_patternfly_component_page_Page_;
  /**@type {PageSidebar} @nodts*/
  this.f_sidebar__org_patternfly_component_page_Page_;
  /**@type {PageMain} @nodts*/
  this.f_main__org_patternfly_component_page_Page_;
  /**@type {?function():void} @nodts*/
  this.f_cleanup__org_patternfly_component_page_Page_;
  /**@type {j_u_function_Function<Integer, Breakpoint>} @nodts*/
  this.f_breakpointFn__org_patternfly_component_page_Page_;
  /**@type {j_u_function_Function<Integer, Breakpoint>} @nodts*/
  this.f_verticalBreakpointFn__org_patternfly_component_page_Page_;
  /**@type {ResizeHandler<Page>} @nodts*/
  this.f_resizeHandler__org_patternfly_component_page_Page_;
 }
 /** @nodts @return {Page} */
 static m_page__org_patternfly_component_page_Page() {
  Page.$clinit();
  return Page.m_page__boolean__org_patternfly_component_page_Page(false);
 }
 /** @nodts @return {Page} */
 static m_page__boolean__org_patternfly_component_page_Page(/** boolean */ newInstance) {
  Page.$clinit();
  if (newInstance) {
   return Page.$create__();
  } else {
   if ($Equality.$same(Page.f_instance__org_patternfly_component_page_Page_, null)) {
    Page.f_instance__org_patternfly_component_page_Page_ = Page.$create__();
   }
   return Page.f_instance__org_patternfly_component_page_Page_;
  }
 }
 /** @nodts @return {!Page} */
 static $create__() {
  Page.$clinit();
  let $instance = new Page();
  $instance.$ctor__org_patternfly_component_page_Page__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_Page__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Page__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_page__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_rect__org_patternfly_component_page_Page_ = /**@type {ObservableValue<Rect>}*/ (ObservableValue.m_ov__java_lang_Object__org_patternfly_core_ObservableValue(Rect.$create__())).m_subscribe__org_patternfly_core_ObservableValue_Subscriber__org_patternfly_core_ObservableValue(Subscriber.$adapt((arg0, arg1) =>{
   let arg0_1 = /**@type {Rect}*/ ($Casts.$to(arg0, Rect));
   let arg1_1 = /**@type {Rect}*/ ($Casts.$to(arg1, Rect));
   this.m_onChangedRect__org_patternfly_style_Rect__org_patternfly_style_Rect__void_$p_org_patternfly_component_page_Page(arg0_1, arg1_1);
  }));
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  let resizeCallback = Scheduler.m_debounce__int__org_jboss_elemento_Callback__org_jboss_elemento_Callback(250, Callback.$adapt(() =>{
   this.m_onResize__void_$p_org_patternfly_component_page_Page();
  }));
  this.f_cleanup__org_patternfly_component_page_Page_ = Elements.m_resizeObserver__elemental2_dom_HTMLElement__org_jboss_elemento_ResizeCallback__org_jboss_elemento_ResizeObserverCleanup(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), () =>{
   if (!$Equality.$same(this.f_resizeHandler__org_patternfly_component_page_Page_, null)) {
    this.f_resizeHandler__org_patternfly_component_page_Page_.m_onResize__java_lang_Object__void(this);
   }
   resizeCallback.m_call__void();
  });
  this.m_onResize__void_$p_org_patternfly_component_page_Page();
 }
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (!$Equality.$same(this.f_cleanup__org_patternfly_component_page_Page_, null)) {
   {
    let $function = this.f_cleanup__org_patternfly_component_page_Page_;
    $function();
   }
  }
 }
 /** @nodts @return {Page} */
 m_addSkipToContent__org_patternfly_component_skiptocontent_SkipToContent__org_patternfly_component_page_Page(/** SkipToContent */ skipToContent) {
  return this.m_add__org_patternfly_component_skiptocontent_SkipToContent__org_patternfly_component_page_Page(skipToContent);
 }
 /** @nodts @return {Page} */
 m_add__org_patternfly_component_skiptocontent_SkipToContent__org_patternfly_component_page_Page(/** SkipToContent */ skipToContent) {
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_skipToContent__org_patternfly_component_page_Page_);
  this.f_skipToContent__org_patternfly_component_page_Page_ = skipToContent;
  Elements.m_insertFirst__elemental2_dom_Element__org_jboss_elemento_IsElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), this.f_skipToContent__org_patternfly_component_page_Page_);
  return this;
 }
 /** @nodts @return {Page} */
 m_addMasthead__org_patternfly_component_page_Masthead__org_patternfly_component_page_Page(/** Masthead */ masthead) {
  return this.m_add__org_patternfly_component_page_Masthead__org_patternfly_component_page_Page(masthead);
 }
 /** @nodts @return {Page} */
 m_add__org_patternfly_component_page_Masthead__org_patternfly_component_page_Page(/** Masthead */ masthead) {
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_masthead__org_patternfly_component_page_Page_);
  this.f_masthead__org_patternfly_component_page_Page_ = masthead;
  if (!$Equality.$same(this.f_skipToContent__org_patternfly_component_page_Page_, null)) {
   Elements.m_insertAfter__org_jboss_elemento_IsElement__elemental2_dom_Element__void(this.f_masthead__org_patternfly_component_page_Page_, /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_skipToContent__org_patternfly_component_page_Page_.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  } else {
   Elements.m_insertFirst__elemental2_dom_Element__org_jboss_elemento_IsElement__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)), this.f_masthead__org_patternfly_component_page_Page_);
  }
  return this;
 }
 /** @nodts @return {Page} */
 m_addSidebar__org_patternfly_component_page_PageSidebar__org_patternfly_component_page_Page(/** PageSidebar */ sidebar) {
  return this.m_add__org_patternfly_component_page_PageSidebar__org_patternfly_component_page_Page(sidebar);
 }
 /** @nodts @return {Page} */
 m_add__org_patternfly_component_page_PageSidebar__org_patternfly_component_page_Page(/** PageSidebar */ sidebar) {
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_sidebar__org_patternfly_component_page_Page_);
  this.f_sidebar__org_patternfly_component_page_Page_ = sidebar;
  if (!$Equality.$same(this.f_main__org_patternfly_component_page_Page_, null)) {
   Elements.m_insertBefore__org_jboss_elemento_IsElement__elemental2_dom_Element__void(this.f_sidebar__org_patternfly_component_page_Page_, this.f_main__org_patternfly_component_page_Page_.m_element__elemental2_dom_HTMLElement());
  } else {
   this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(sidebar.m_element__elemental2_dom_HTMLElement());
  }
  return this;
 }
 /** @nodts @return {Page} */
 m_addMain__org_patternfly_component_page_PageMain__org_patternfly_component_page_Page(/** PageMain */ main) {
  return this.m_add__org_patternfly_component_page_PageMain__org_patternfly_component_page_Page(main);
 }
 /** @nodts @return {Page} */
 m_add__org_patternfly_component_page_PageMain__org_patternfly_component_page_Page(/** PageMain */ main) {
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_main__org_patternfly_component_page_Page_);
  this.f_main__org_patternfly_component_page_Page_ = main;
  return /**@type {Page}*/ ($Casts.$to(this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(main.m_element__elemental2_dom_HTMLElement()), Page));
 }
 /** @nodts @return {Page} */
 m_breakpoint__java_util_function_Function__org_patternfly_component_page_Page(/** j_u_function_Function<Integer, Breakpoint> */ breakpointFn) {
  this.f_breakpointFn__org_patternfly_component_page_Page_ = breakpointFn;
  return this;
 }
 /** @nodts @return {Page} */
 m_verticalBreakpoint__java_util_function_Function__org_patternfly_component_page_Page(/** j_u_function_Function<Integer, Breakpoint> */ verticalBreakpointFn) {
  this.f_verticalBreakpointFn__org_patternfly_component_page_Page_ = verticalBreakpointFn;
  return this;
 }
 /** @nodts @return {Page} */
 m_that__org_patternfly_component_page_Page() {
  return this;
 }
 /** @nodts @return {Page} */
 m_onResize__org_patternfly_handler_ResizeHandler__org_patternfly_component_page_Page(/** ResizeHandler<Page> */ resizeHandler) {
  this.f_resizeHandler__org_patternfly_component_page_Page_ = resizeHandler;
  return this;
 }
 /** @nodts @return {Masthead} */
 m_masthead__org_patternfly_component_page_Masthead() {
  return this.f_masthead__org_patternfly_component_page_Page_;
 }
 /** @nodts @return {PageSidebar} */
 m_sidebar__org_patternfly_component_page_PageSidebar() {
  return this.f_sidebar__org_patternfly_component_page_Page_;
 }
 /** @nodts @return {PageMain} */
 m_main__org_patternfly_component_page_PageMain() {
  return this.f_main__org_patternfly_component_page_Page_;
 }
 /** @nodts @return {boolean} */
 m_underXl__boolean_$pp_org_patternfly_component_page() {
  return /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)).clientWidth < Breakpoint.f_xl__org_patternfly_style_Breakpoint.f_widthValue__org_patternfly_style_Breakpoint;
 }
 /** @nodts */
 m_onResize__void_$p_org_patternfly_component_page_Page() {
  let width = /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)).clientWidth;
  let height = /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), $Overlay)).clientHeight;
  this.f_rect__org_patternfly_component_page_Page_.m_set__java_lang_Object__void(Rect.$create__int__int(width, height));
 }
 /** @nodts */
 m_onChangedRect__org_patternfly_style_Rect__org_patternfly_style_Rect__void_$p_org_patternfly_component_page_Page(/** Rect */ current, /** Rect */ previous) {
  this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_resizeObserver__org_patternfly_style_Classes)], j_l_String)));
  let previousBreakpoint = !$Equality.$same(this.f_breakpointFn__org_patternfly_component_page_Page_, null) ? /**@type {Breakpoint}*/ ($Casts.$to(this.f_breakpointFn__org_patternfly_component_page_Page_.m_apply__java_lang_Object__java_lang_Object(Integer.m_valueOf__int__java_lang_Integer(previous.f_width__org_patternfly_style_Rect)), Breakpoint)) : Breakpoint.m_breakpoint__int__org_patternfly_style_Breakpoint(previous.f_width__org_patternfly_style_Rect);
  let currentBreakpoint = !$Equality.$same(this.f_breakpointFn__org_patternfly_component_page_Page_, null) ? /**@type {Breakpoint}*/ ($Casts.$to(this.f_breakpointFn__org_patternfly_component_page_Page_.m_apply__java_lang_Object__java_lang_Object(Integer.m_valueOf__int__java_lang_Integer(current.f_width__org_patternfly_style_Rect)), Breakpoint)) : Breakpoint.m_breakpoint__int__org_patternfly_style_Breakpoint(current.f_width__org_patternfly_style_Rect);
  if (!$Equality.$same(previousBreakpoint, currentBreakpoint)) {
   this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String('breakpoint-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(previousBreakpoint.f_value__org_patternfly_style_Breakpoint))], j_l_String)));
   this.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String('breakpoint-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(currentBreakpoint.f_value__org_patternfly_style_Breakpoint))], j_l_String)));
  }
  let previousVerticalBreakpoint = !$Equality.$same(this.f_breakpointFn__org_patternfly_component_page_Page_, null) ? /**@type {Breakpoint}*/ ($Casts.$to(this.f_verticalBreakpointFn__org_patternfly_component_page_Page_.m_apply__java_lang_Object__java_lang_Object(Integer.m_valueOf__int__java_lang_Integer(previous.f_height__org_patternfly_style_Rect)), Breakpoint)) : Breakpoint.m_verticalBreakpoint__int__org_patternfly_style_Breakpoint(previous.f_height__org_patternfly_style_Rect);
  let currentVerticalBreakpoint = !$Equality.$same(this.f_breakpointFn__org_patternfly_component_page_Page_, null) ? /**@type {Breakpoint}*/ ($Casts.$to(this.f_verticalBreakpointFn__org_patternfly_component_page_Page_.m_apply__java_lang_Object__java_lang_Object(Integer.m_valueOf__int__java_lang_Integer(current.f_height__org_patternfly_style_Rect)), Breakpoint)) : Breakpoint.m_verticalBreakpoint__int__org_patternfly_style_Breakpoint(current.f_height__org_patternfly_style_Rect);
  if (!$Equality.$same(previousVerticalBreakpoint, currentVerticalBreakpoint)) {
   this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String('height-breakpoint-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(previousVerticalBreakpoint.f_value__org_patternfly_style_Breakpoint))], j_l_String)));
   this.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String('height-breakpoint-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(currentVerticalBreakpoint.f_value__org_patternfly_style_Breakpoint))], j_l_String)));
  }
  if (!$Equality.$same(this.f_masthead__org_patternfly_component_page_Page_, null)) {
   this.f_masthead__org_patternfly_component_page_Page_.m_onPageResize__org_patternfly_style_Rect__org_patternfly_style_Rect__void_$pp_org_patternfly_component_page(current, previous);
  }
  if (!$Equality.$same(this.f_sidebar__org_patternfly_component_page_Page_, null)) {
   if (this.m_underXl__boolean_$pp_org_patternfly_component_page()) {
    this.f_sidebar__org_patternfly_component_page_Page_.m_collapse__void();
   } else {
    this.f_sidebar__org_patternfly_component_page_Page_.m_expand__void();
   }
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {Page} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_Page();
 }
 /** @nodts */
 static $clinit() {
  Page.$clinit = () =>{};
  Page.$loadModules();
  BaseComponent.$clinit();
  Attachable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Page;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Callback = goog.module.get('org.jboss.elemento.Callback$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Scheduler = goog.module.get('org.jboss.elemento.Scheduler$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  ObservableValue = goog.module.get('org.patternfly.core.ObservableValue$impl');
  Subscriber = goog.module.get('org.patternfly.core.ObservableValue.Subscriber$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Rect = goog.module.get('org.patternfly.style.Rect$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Page} @nodts*/
Page.f_instance__org_patternfly_component_page_Page_;
Attachable.$markImplementor(Page);
$Util.$setClassMetadata(Page, 'org.patternfly.component.page.Page');

exports = Page;

//# sourceMappingURL=Page.js.map

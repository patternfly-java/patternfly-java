goog.module('org.patternfly.component.page.Masthead$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let MastheadContent = goog.forwardDeclare('org.patternfly.component.page.MastheadContent$impl');
let MastheadMain = goog.forwardDeclare('org.patternfly.component.page.MastheadMain$impl');
let MastheadToggle = goog.forwardDeclare('org.patternfly.component.page.MastheadToggle$impl');
let Validation = goog.forwardDeclare('org.patternfly.core.Validation$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let Brightness = goog.forwardDeclare('org.patternfly.style.Brightness$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Display = goog.forwardDeclare('org.patternfly.style.Display$impl');
let Inset = goog.forwardDeclare('org.patternfly.style.Inset$impl');
let Rect = goog.forwardDeclare('org.patternfly.style.Rect$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, Masthead>}
 */
class Masthead extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Breakpoints<Display>} @nodts*/
  this.f_displayModifiers__org_patternfly_component_page_Masthead_;
  /**@type {Breakpoints<Inset>} @nodts*/
  this.f_insetModifiers__org_patternfly_component_page_Masthead_;
 }
 /** @nodts @return {Masthead} */
 static m_masthead__org_patternfly_component_page_Masthead() {
  Masthead.$clinit();
  return Masthead.$create__();
 }
 /** @nodts @return {!Masthead} */
 static $create__() {
  Masthead.$clinit();
  let $instance = new Masthead();
  $instance.$ctor__org_patternfly_component_page_Masthead__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_page_Masthead__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Masthead__org_patternfly_component_ComponentType, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_header__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_masthead__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  this.f_displayModifiers__org_patternfly_component_page_Masthead_ = /**@type {Breakpoints<Display>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_md__org_patternfly_style_Breakpoint, Display.f_inline__org_patternfly_style_Display));
  this.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([this.f_displayModifiers__org_patternfly_component_page_Masthead_.m_modifiers__java_lang_String()], j_l_String)));
 }
 /** @nodts @return {Masthead} */
 m_addToggle__org_patternfly_component_page_MastheadToggle__org_patternfly_component_page_Masthead(/** MastheadToggle */ toggle) {
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(toggle);
  return this;
 }
 /** @nodts @return {Masthead} */
 m_addMain__org_patternfly_component_page_MastheadMain__org_patternfly_component_page_Masthead(/** MastheadMain */ main) {
  return /**@type {Masthead}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(main), Masthead));
 }
 /** @nodts @return {Masthead} */
 m_addContent__org_patternfly_component_page_MastheadContent__org_patternfly_component_page_Masthead(/** MastheadContent */ content) {
  return /**@type {Masthead}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(content), Masthead));
 }
 /** @nodts @return {Masthead} */
 m_display__org_patternfly_style_Breakpoints__org_patternfly_component_page_Masthead(/** Breakpoints<Display> */ displayModifiers) {
  if (!$Equality.$same(this.f_displayModifiers__org_patternfly_component_page_Masthead_, null)) {
   this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([this.f_displayModifiers__org_patternfly_component_page_Masthead_.m_modifiers__java_lang_String()], j_l_String)));
  }
  this.f_displayModifiers__org_patternfly_component_page_Masthead_ = displayModifiers;
  this.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([this.f_displayModifiers__org_patternfly_component_page_Masthead_.m_modifiers__java_lang_String()], j_l_String)));
  return this;
 }
 /** @nodts @return {Masthead} */
 m_inset__org_patternfly_style_Breakpoints__org_patternfly_component_page_Masthead(/** Breakpoints<Inset> */ insetModifiers) {
  if (!$Equality.$same(this.f_insetModifiers__org_patternfly_component_page_Masthead_, null)) {
   this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([this.f_insetModifiers__org_patternfly_component_page_Masthead_.m_modifiers__java_lang_String()], j_l_String)));
  }
  this.f_insetModifiers__org_patternfly_component_page_Masthead_ = insetModifiers;
  this.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([this.f_insetModifiers__org_patternfly_component_page_Masthead_.m_modifiers__java_lang_String()], j_l_String)));
  this.f_insetModifiers__org_patternfly_component_page_Masthead_ = insetModifiers;
  return this;
 }
 /** @nodts @return {Masthead} */
 m_background__org_patternfly_style_Brightness__org_patternfly_component_page_Masthead(/** Brightness */ brightness) {
  if (Validation.m_verifyEnum__java_lang_String__elemental2_dom_Element__java_lang_String__java_lang_Enum__java_lang_Enum__arrayOf_java_lang_Enum__boolean(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'background', brightness, Brightness.f_dark__org_patternfly_style_Brightness, /**@type {!Array<Brightness>}*/ ($Arrays.$init([Brightness.f_light__org_patternfly_style_Brightness, Brightness.f_light200__org_patternfly_style_Brightness], Brightness)))) {
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([brightness.m_modifier__java_lang_String()], j_l_String)));
  }
  return this;
 }
 /** @nodts @return {Masthead} */
 m_that__org_patternfly_component_page_Masthead() {
  return this;
 }
 /** @nodts */
 m_onPageResize__org_patternfly_style_Rect__org_patternfly_style_Rect__void_$pp_org_patternfly_component_page(/** Rect */ currentPageRect, /** Rect */ previousPageRect) {
  if (!$Equality.$same(this.f_displayModifiers__org_patternfly_component_page_Masthead_, null)) {
   this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([this.f_displayModifiers__org_patternfly_component_page_Masthead_.m_modifiers__org_patternfly_style_Breakpoint__java_lang_String(Breakpoint.m_breakpoint__int__org_patternfly_style_Breakpoint(previousPageRect.f_width__org_patternfly_style_Rect))], j_l_String)));
   this.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([this.f_displayModifiers__org_patternfly_component_page_Masthead_.m_modifiers__org_patternfly_style_Breakpoint__java_lang_String(Breakpoint.m_breakpoint__int__org_patternfly_style_Breakpoint(currentPageRect.f_width__org_patternfly_style_Rect))], j_l_String)));
  }
  if (!$Equality.$same(this.f_insetModifiers__org_patternfly_component_page_Masthead_, null)) {
   this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([this.f_insetModifiers__org_patternfly_component_page_Masthead_.m_modifiers__org_patternfly_style_Breakpoint__java_lang_String(Breakpoint.m_breakpoint__int__org_patternfly_style_Breakpoint(previousPageRect.f_width__org_patternfly_style_Rect))], j_l_String)));
   this.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([this.f_insetModifiers__org_patternfly_component_page_Masthead_.m_modifiers__org_patternfly_style_Breakpoint__java_lang_String(Breakpoint.m_breakpoint__int__org_patternfly_style_Breakpoint(currentPageRect.f_width__org_patternfly_style_Rect))], j_l_String)));
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {Masthead} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_page_Masthead();
 }
 /** @nodts */
 static $clinit() {
  Masthead.$clinit = () =>{};
  Masthead.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Masthead;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Validation = goog.module.get('org.patternfly.core.Validation$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  Breakpoints = goog.module.get('org.patternfly.style.Breakpoints$impl');
  Brightness = goog.module.get('org.patternfly.style.Brightness$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Display = goog.module.get('org.patternfly.style.Display$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Masthead, 'org.patternfly.component.page.Masthead');

exports = Masthead;

//# sourceMappingURL=Masthead.js.map

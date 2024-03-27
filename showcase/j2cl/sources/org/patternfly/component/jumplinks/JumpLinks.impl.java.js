goog.module('org.patternfly.component.jumplinks.JumpLinks$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponentFlat = goog.require('org.patternfly.component.BaseComponentFlat$impl');
const Expandable = goog.require('org.patternfly.component.Expandable$impl');
const Vertical = goog.require('org.patternfly.style.Modifiers.Vertical$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let JumpLinksItem = goog.forwardDeclare('org.patternfly.component.jumplinks.JumpLinksItem$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let SelectHandler = goog.forwardDeclare('org.patternfly.handler.SelectHandler$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let ExpandableModifier = goog.forwardDeclare('org.patternfly.style.ExpandableModifier$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.style.Modifiers$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponentFlat<HTMLElement, JumpLinks>}
 * @implements {Attachable}
 * @implements {Expandable<HTMLElement, JumpLinks>}
 * @implements {Vertical<HTMLElement, JumpLinks>}
 */
class JumpLinks extends BaseComponentFlat {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, JumpLinksItem>} @nodts*/
  this.f_items__org_patternfly_component_jumplinks_JumpLinks_;
  /**@type {HTMLContainerBuilder<HTMLDivElement>} @nodts*/
  this.f_headerElement__org_patternfly_component_jumplinks_JumpLinks_;
  /**@type {HTMLContainerBuilder<HTMLDivElement>} @nodts*/
  this.f_labelElement__org_patternfly_component_jumplinks_JumpLinks_;
  /**@type {HTMLContainerBuilder<HTMLUListElement>} @nodts*/
  this.f_ulElement__org_patternfly_component_jumplinks_JumpLinks_;
  /**@type {boolean} @nodts*/
  this.f_expandable__org_patternfly_component_jumplinks_JumpLinks_ = false;
  /**@type {boolean} @nodts*/
  this.f_vertical__org_patternfly_component_jumplinks_JumpLinks_ = false;
  /**@type {Button} @nodts*/
  this.f_toggleButton__org_patternfly_component_jumplinks_JumpLinks_;
  /**@type {Supplier<HTMLElement>} @nodts*/
  this.f_scrollableElement__org_patternfly_component_jumplinks_JumpLinks_;
  /**@type {HTMLContainerBuilder<HTMLElement>} @nodts*/
  this.f_toggleTextElement__org_patternfly_component_jumplinks_JumpLinks_;
  /**@type {SelectHandler<JumpLinksItem>} @nodts*/
  this.f_selectHandler__org_patternfly_component_jumplinks_JumpLinks_;
  /**@type {ToggleHandler<JumpLinks>} @nodts*/
  this.f_toggleHandler__org_patternfly_component_jumplinks_JumpLinks_;
 }
 /** @nodts @return {JumpLinks} */
 static m_jumpLinks__org_patternfly_component_jumplinks_JumpLinks() {
  JumpLinks.$clinit();
  return JumpLinks.$create__java_lang_String(null);
 }
 /** @nodts @return {JumpLinks} */
 static m_jumpLinks__java_lang_String__org_patternfly_component_jumplinks_JumpLinks(/** ?string */ label) {
  JumpLinks.$clinit();
  return JumpLinks.$create__java_lang_String(label);
 }
 /** @nodts @return {!JumpLinks} */
 static $create__java_lang_String(/** ?string */ label) {
  JumpLinks.$clinit();
  let $instance = new JumpLinks();
  $instance.$ctor__org_patternfly_component_jumplinks_JumpLinks__java_lang_String__void(label);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_jumplinks_JumpLinks__java_lang_String__void(/** ?string */ label) {
  this.$ctor__org_patternfly_component_BaseComponentFlat__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_JumpLinks__org_patternfly_component_ComponentType, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_nav__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_jumpLinks__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  this.f_items__org_patternfly_component_jumplinks_JumpLinks_ = /**@type {!HashMap<?string, JumpLinksItem>}*/ (HashMap.$create__());
  this.m_element__elemental2_dom_HTMLElement().appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_jumpLinks__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_main__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_headerElement__org_patternfly_component_jumplinks_JumpLinks_ = /**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_jumpLinks__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_header__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_labelElement__org_patternfly_component_jumplinks_JumpLinks_ = /**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_jumpLinks__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_label__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_ulElement__org_patternfly_component_jumplinks_JumpLinks_ = /**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_jumpLinks__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_list__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'list'), HTMLContainerBuilder))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  if (!$Equality.$same(label, null)) {
   this.m_label__java_lang_String__org_patternfly_component_jumplinks_JumpLinks(label);
  }
  this.m_storeFlatComponent__void();
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (this.f_expandable__org_patternfly_component_jumplinks_JumpLinks_ && !this.f_vertical__org_patternfly_component_jumplinks_JumpLinks_) {
   Logger.m_unsupported__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'Expandable is only supported for vertical jump links!');
  } else {
   this.m_failSafeToggleButton__org_patternfly_component_button_Button_$p_org_patternfly_component_jumplinks_JumpLinks();
  }
 }
 /** @nodts @template T @return {JumpLinks} */
 m_addItems__java_lang_Iterable__java_util_function_Function__org_patternfly_component_jumplinks_JumpLinks(/** Iterable<T> */ items, /** j_u_function_Function<T, JumpLinksItem> */ display) {
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let bi = /**@type {JumpLinksItem}*/ ($Casts.$to(display.m_apply__java_lang_Object__java_lang_Object(item), JumpLinksItem));
    this.m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(bi);
   }
  }
  return this;
 }
 /** @nodts @return {JumpLinks} */
 m_addItem__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(/** JumpLinksItem */ item) {
  return this.m_add__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(item);
 }
 /** @nodts @return {JumpLinks} */
 m_add__org_patternfly_component_jumplinks_JumpLinksItem__org_patternfly_component_jumplinks_JumpLinks(/** JumpLinksItem */ item) {
  this.f_items__org_patternfly_component_jumplinks_JumpLinks_.put(item.f_id__org_patternfly_component_jumplinks_JumpLinksItem, item);
  this.f_ulElement__org_patternfly_component_jumplinks_JumpLinks_.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(item);
  return this;
 }
 /** @nodts @return {JumpLinks} */
 m_center__org_patternfly_component_jumplinks_JumpLinks() {
  return this.m_center__boolean__org_patternfly_component_jumplinks_JumpLinks(true);
 }
 /** @nodts @return {JumpLinks} */
 m_center__boolean__org_patternfly_component_jumplinks_JumpLinks(/** boolean */ center) {
  return /**@type {JumpLinks}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, this.m_element__elemental2_dom_HTMLElement(), Classes.f_center__org_patternfly_style_Classes, center), JumpLinks));
 }
 /** @nodts @return {JumpLinks} */
 m_expandable__org_patternfly_style_Breakpoints__org_patternfly_component_jumplinks_JumpLinks(/** Breakpoints<ExpandableModifier> */ expandable) {
  this.f_expandable__org_patternfly_component_jumplinks_JumpLinks_ = expandable.m_hasValue__java_lang_Object__boolean(ExpandableModifier.f_expandable__org_patternfly_style_ExpandableModifier);
  this.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([expandable.m_modifiers__java_lang_String()], j_l_String)));
  return this;
 }
 /** @nodts @return {JumpLinks} */
 m_label__java_lang_String__org_patternfly_component_jumplinks_JumpLinks(/** ?string */ label) {
  this.f_labelElement__org_patternfly_component_jumplinks_JumpLinks_.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(label);
  if (!$Equality.$same(this.f_toggleTextElement__org_patternfly_component_jumplinks_JumpLinks_, null)) {
   this.f_toggleTextElement__org_patternfly_component_jumplinks_JumpLinks_.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(label);
  }
  return this;
 }
 /** @nodts @return {JumpLinks} */
 m_scrollableSelector__java_lang_String__org_patternfly_component_jumplinks_JumpLinks(/** ?string */ selector) {
  return this.m_scrollableSelector__java_util_function_Supplier__org_patternfly_component_jumplinks_JumpLinks(Supplier.$adapt(() =>{
   return Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, By.m_selector__java_lang_String__org_jboss_elemento_By(selector));
  }));
 }
 /** @nodts @return {JumpLinks} */
 m_scrollableSelector__org_jboss_elemento_By__org_patternfly_component_jumplinks_JumpLinks(/** By */ selector) {
  return this.m_scrollableSelector__java_util_function_Supplier__org_patternfly_component_jumplinks_JumpLinks(Supplier.$adapt(() =>{
   return Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, selector);
  }));
 }
 /** @nodts @return {JumpLinks} */
 m_scrollableSelector__elemental2_dom_HTMLElement__org_patternfly_component_jumplinks_JumpLinks(/** HTMLElement */ element) {
  return this.m_scrollableSelector__java_util_function_Supplier__org_patternfly_component_jumplinks_JumpLinks(Supplier.$adapt(() =>{
   return element;
  }));
 }
 /** @nodts @return {JumpLinks} */
 m_scrollableSelector__java_util_function_Supplier__org_patternfly_component_jumplinks_JumpLinks(/** Supplier<HTMLElement> */ element) {
  this.f_scrollableElement__org_patternfly_component_jumplinks_JumpLinks_ = element;
  return this;
 }
 /** @nodts @return {JumpLinks} */
 m_vertical__boolean__org_patternfly_component_jumplinks_JumpLinks(/** boolean */ vertical) {
  this.f_vertical__org_patternfly_component_jumplinks_JumpLinks_ = vertical;
  return /**@type {JumpLinks}*/ ($Casts.$to(Vertical.m_vertical__$default__org_patternfly_style_Modifiers_Vertical__boolean__org_jboss_elemento_TypedBuilder(this, vertical), JumpLinks));
 }
 /** @nodts @return {JumpLinks} */
 m_that__org_patternfly_component_jumplinks_JumpLinks() {
  return this;
 }
 /** @nodts @return {JumpLinks} */
 m_ariaLabel__java_lang_String__org_patternfly_component_jumplinks_JumpLinks(/** ?string */ label) {
  return /**@type {JumpLinks}*/ ($Casts.$to(this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label), JumpLinks));
 }
 /** @nodts @return {JumpLinks} */
 m_ariaToggleLabel__java_lang_String__org_patternfly_component_jumplinks_JumpLinks(/** ?string */ label) {
  if (!$Equality.$same(this.f_toggleButton__org_patternfly_component_jumplinks_JumpLinks_, null)) {
   this.f_toggleButton__org_patternfly_component_jumplinks_JumpLinks_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  }
  return this;
 }
 /** @nodts @return {JumpLinks} */
 m_onSelect__org_patternfly_handler_SelectHandler__org_patternfly_component_jumplinks_JumpLinks(/** SelectHandler<JumpLinksItem> */ selectHandler) {
  this.f_selectHandler__org_patternfly_component_jumplinks_JumpLinks_ = selectHandler;
  return this;
 }
 /** @nodts @return {JumpLinks} */
 m_onToggle__org_patternfly_handler_ToggleHandler__org_patternfly_component_jumplinks_JumpLinks(/** ToggleHandler<JumpLinks> */ toggleHandler) {
  this.f_toggleHandler__org_patternfly_component_jumplinks_JumpLinks_ = toggleHandler;
  return this;
 }
 /** @override @nodts */
 m_collapse__boolean__void(/** boolean */ fireEvent) {
  Expandable.m_collapse__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(this.m_element__elemental2_dom_HTMLElement(), this.f_toggleButton__org_patternfly_component_jumplinks_JumpLinks_.m_element__elemental2_dom_HTMLElement(), null);
  if (fireEvent && !$Equality.$same(this.f_toggleHandler__org_patternfly_component_jumplinks_JumpLinks_, null)) {
   this.f_toggleHandler__org_patternfly_component_jumplinks_JumpLinks_.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, false);
  }
 }
 /** @override @nodts */
 m_expand__boolean__void(/** boolean */ fireEvent) {
  Expandable.m_expand__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__void(this.m_element__elemental2_dom_HTMLElement(), this.f_toggleButton__org_patternfly_component_jumplinks_JumpLinks_.m_element__elemental2_dom_HTMLElement(), null);
  if (fireEvent && !$Equality.$same(this.f_toggleHandler__org_patternfly_component_jumplinks_JumpLinks_, null)) {
   this.f_toggleHandler__org_patternfly_component_jumplinks_JumpLinks_.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, true);
  }
 }
 /** @nodts */
 m_select__java_lang_String__void(/** ?string */ itemId) {
  this.m_select__org_patternfly_component_jumplinks_JumpLinksItem__boolean__void(this.m_findItem__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem_$p_org_patternfly_component_jumplinks_JumpLinks(itemId), true);
 }
 /** @nodts */
 m_select__java_lang_String__boolean__void(/** ?string */ itemId, /** boolean */ fireEvent) {
  this.m_select__org_patternfly_component_jumplinks_JumpLinksItem__boolean__void(this.m_findItem__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem_$p_org_patternfly_component_jumplinks_JumpLinks(itemId), fireEvent);
 }
 /** @nodts */
 m_select__org_patternfly_component_jumplinks_JumpLinksItem__void(/** JumpLinksItem */ item) {
  this.m_select__org_patternfly_component_jumplinks_JumpLinksItem__boolean__boolean__void(item, true, true);
 }
 /** @nodts */
 m_select__org_patternfly_component_jumplinks_JumpLinksItem__boolean__void(/** JumpLinksItem */ item, /** boolean */ fireEvent) {
  this.m_select__org_patternfly_component_jumplinks_JumpLinksItem__boolean__boolean__void(item, true, fireEvent);
 }
 /** @nodts */
 m_select__org_patternfly_component_jumplinks_JumpLinksItem__boolean__boolean__void(/** JumpLinksItem */ item, /** boolean */ selected, /** boolean */ fireEvent) {
  if (!$Equality.$same(item, null)) {
   this.m_unselectAllItems__void_$p_org_patternfly_component_jumplinks_JumpLinks();
   item.m_markSelected__boolean__void_$pp_org_patternfly_component_jumplinks(selected);
   if (!$Equality.$same(this.f_selectHandler__org_patternfly_component_jumplinks_JumpLinks_, null) && fireEvent) {
    this.f_selectHandler__org_patternfly_component_jumplinks_JumpLinks_.m_onSelect__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), item, selected);
   }
  }
 }
 /** @nodts @return {JumpLinksItem} */
 m_findItem__java_lang_String__org_patternfly_component_jumplinks_JumpLinksItem_$p_org_patternfly_component_jumplinks_JumpLinks(/** ?string */ id) {
  let item = /**@type {JumpLinksItem}*/ ($Casts.$to(this.f_items__org_patternfly_component_jumplinks_JumpLinks_.get(id), JumpLinksItem));
  if ($Equality.$same(item, null)) {
   for (let iterator = this.f_items__org_patternfly_component_jumplinks_JumpLinks_.values().m_iterator__java_util_Iterator(); iterator.m_hasNext__boolean() && $Equality.$same(item, null); ) {
    let itm = /**@type {JumpLinksItem}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), JumpLinksItem));
    if (!$Equality.$same(itm.f_list__org_patternfly_component_jumplinks_JumpLinksItem, null)) {
     item = /**@type {JumpLinksItem}*/ ($Casts.$to(itm.f_list__org_patternfly_component_jumplinks_JumpLinksItem.f_items__org_patternfly_component_jumplinks_JumpLinksList.get(id), JumpLinksItem));
    }
   }
  }
  return item;
 }
 /** @nodts */
 m_unselectAllItems__void_$p_org_patternfly_component_jumplinks_JumpLinks() {
  for (let $iterator = this.m_findAll__org_jboss_elemento_By__java_lang_Iterable(JumpLinks.f_JUMP_LINKS_ITEMS__org_patternfly_component_jumplinks_JumpLinks_).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let element = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), HTMLElement_$Overlay));
   {
    element.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes));
    element.removeAttribute(Aria.f_current__org_patternfly_core_Aria);
   }
  }
 }
 /** @nodts @return {Button} */
 m_failSafeToggleButton__org_patternfly_component_button_Button_$p_org_patternfly_component_jumplinks_JumpLinks() {
  if ($Equality.$same(this.f_toggleButton__org_patternfly_component_jumplinks_JumpLinks_, null)) {
   this.f_headerElement__org_patternfly_component_jumplinks_JumpLinks_.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_jumpLinks__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_toggleButton__org_patternfly_component_jumplinks_JumpLinks_ = /**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_plain__org_jboss_elemento_TypedBuilder(), Button)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, false), Button)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Toggle jump links'), Button)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
    let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
    this.m_toggle__void();
   }), Button)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_jumpLinks__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(fas.m_angleRight__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder))), Button)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_toggleTextElement__org_patternfly_component_jumplinks_JumpLinks_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_jumpLinks__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_toggle__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(this.f_labelElement__org_patternfly_component_jumplinks_JumpLinks_.m_element__elemental2_dom_HTMLElement(), $Overlay)).textContent), HTMLContainerBuilder))), Button))), HTMLContainerBuilder)));
  }
  return this.f_toggleButton__org_patternfly_component_jumplinks_JumpLinks_;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {JumpLinks} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_jumplinks_JumpLinks();
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
 /** @override @nodts @return {boolean} */
 m_expanded__boolean() {
  return Expandable.m_expanded__$default__org_patternfly_component_Expandable__boolean(this);
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
 /** @final @override @nodts @return {JumpLinks} */
 m_vertical__org_jboss_elemento_TypedBuilder() {
  return /**@type {JumpLinks}*/ ($Casts.$to(Vertical.m_vertical__$default__org_patternfly_style_Modifiers_Vertical__org_jboss_elemento_TypedBuilder(this), JumpLinks));
 }
 //Bridge method.
 /** @final @override @nodts @return {JumpLinks} */
 m_vertical__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_vertical__boolean__org_patternfly_component_jumplinks_JumpLinks(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {JumpLinks} */
 m_vertical__org_patternfly_component_jumplinks_JumpLinks() {
  return /**@type {JumpLinks}*/ ($Casts.$to(Vertical.m_vertical__$default__org_patternfly_style_Modifiers_Vertical__org_jboss_elemento_TypedBuilder(this), JumpLinks));
 }
 /** @nodts */
 static $clinit() {
  JumpLinks.$clinit = () =>{};
  JumpLinks.$loadModules();
  BaseComponentFlat.$clinit();
  Attachable.$clinit();
  Expandable.$clinit();
  Vertical.$clinit();
  JumpLinks.f_JUMP_LINKS_ITEMS__org_patternfly_component_jumplinks_JumpLinks_ = By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_jumpLinks__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes], j_l_String))));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JumpLinks;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  JumpLinksItem = goog.module.get('org.patternfly.component.jumplinks.JumpLinksItem$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  ExpandableModifier = goog.module.get('org.patternfly.style.ExpandableModifier$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {By} @nodts*/
JumpLinks.f_JUMP_LINKS_ITEMS__org_patternfly_component_jumplinks_JumpLinks_;
Attachable.$markImplementor(JumpLinks);
Expandable.$markImplementor(JumpLinks);
Vertical.$markImplementor(JumpLinks);
$Util.$setClassMetadata(JumpLinks, 'org.patternfly.component.jumplinks.JumpLinks');

exports = JumpLinks;

//# sourceMappingURL=JumpLinks.js.map

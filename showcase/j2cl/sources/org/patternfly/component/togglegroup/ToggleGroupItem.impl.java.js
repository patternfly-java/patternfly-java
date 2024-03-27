goog.module('org.patternfly.component.togglegroup.ToggleGroupItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const WithIcon = goog.require('org.patternfly.component.WithIcon$impl');
const WithText = goog.require('org.patternfly.component.WithText$impl');
const ToggleGroupSubComponent = goog.require('org.patternfly.component.togglegroup.ToggleGroupSubComponent$impl');
const ElementDelegate = goog.require('org.patternfly.core.ElementDelegate$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let SelectionMode = goog.forwardDeclare('org.patternfly.component.SelectionMode$impl');
let ToggleGroup = goog.forwardDeclare('org.patternfly.component.togglegroup.ToggleGroup$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {ToggleGroupSubComponent<HTMLDivElement, ToggleGroupItem>}
 * @implements {Disabled<HTMLDivElement, ToggleGroupItem>}
 * @implements {ElementDelegate<HTMLDivElement, ToggleGroupItem>}
 * @implements {WithIcon<HTMLDivElement, ToggleGroupItem>}
 * @implements {WithText<HTMLDivElement, ToggleGroupItem>}
 */
class ToggleGroupItem extends ToggleGroupSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_component_togglegroup_ToggleGroupItem;
  /**@type {HTMLContainerBuilder<HTMLButtonElement>} @nodts*/
  this.f_button__org_patternfly_component_togglegroup_ToggleGroupItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_togglegroup_ToggleGroupItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_togglegroup_ToggleGroupItem_;
 }
 /** @nodts @return {ToggleGroupItem} */
 static m_toggleGroupItem__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem(/** ?string */ id) {
  ToggleGroupItem.$clinit();
  return ToggleGroupItem.$create__java_lang_String__java_lang_String(id, null);
 }
 /** @nodts @return {ToggleGroupItem} */
 static m_toggleGroupItem__java_lang_String__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem(/** ?string */ id, /** ?string */ text) {
  ToggleGroupItem.$clinit();
  return ToggleGroupItem.$create__java_lang_String__java_lang_String(id, text);
 }
 /** @nodts @return {!ToggleGroupItem} */
 static $create__java_lang_String__java_lang_String(/** ?string */ id, /** ?string */ text) {
  ToggleGroupItem.$clinit();
  let $instance = new ToggleGroupItem();
  $instance.$ctor__org_patternfly_component_togglegroup_ToggleGroupItem__java_lang_String__java_lang_String__void(id, text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_togglegroup_ToggleGroupItem__java_lang_String__java_lang_String__void(/** ?string */ id, /** ?string */ text) {
  this.$ctor__org_patternfly_component_togglegroup_ToggleGroupSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(ToggleGroupItem.f_SUB_COMPONENT_NAME__org_patternfly_component_togglegroup_ToggleGroupItem, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_toggleGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_id__org_patternfly_component_togglegroup_ToggleGroupItem = id;
  this.f_button__org_patternfly_component_togglegroup_ToggleGroupItem_ = /**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_toggleGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_button__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_pressed__org_patternfly_core_Aria, false), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (arg0) =>{
   let arg0_1 = /**@type {MouseEvent}*/ ($Casts.$to(arg0, MouseEvent_$Overlay));
   this.m_onClick__elemental2_dom_Event__void_$pp_org_patternfly_component_togglegroup(arg0_1);
  }), HTMLContainerBuilder));
  /**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).appendChild(/**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_button__org_patternfly_component_togglegroup_ToggleGroupItem_.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_text__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem(text);
 }
 /** @override @nodts @return {HTMLElement} */
 m_delegate__elemental2_dom_HTMLElement() {
  return /**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_button__org_patternfly_component_togglegroup_ToggleGroupItem_.m_element__elemental2_dom_HTMLElement(), $Overlay));
 }
 /** @nodts @return {ToggleGroupItem} */
 m_disabled__boolean__org_patternfly_component_togglegroup_ToggleGroupItem(/** boolean */ disabled) {
  /**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_button__org_patternfly_component_togglegroup_ToggleGroupItem_.m_element__elemental2_dom_HTMLElement(), $Overlay)).disabled = disabled;
  return this;
 }
 /** @nodts @return {ToggleGroupItem} */
 m_icon__elemental2_dom_Element__org_patternfly_component_togglegroup_ToggleGroupItem(/** Element */ icon) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_iconContainer__org_patternfly_component_togglegroup_ToggleGroupItem_);
  this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_togglegroup_ToggleGroupItem().appendChild(icon);
  return this;
 }
 /** @nodts @return {ToggleGroupItem} */
 m_removeIcon__org_patternfly_component_togglegroup_ToggleGroupItem() {
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_iconContainer__org_patternfly_component_togglegroup_ToggleGroupItem_);
  this.f_iconContainer__org_patternfly_component_togglegroup_ToggleGroupItem_ = null;
  return this;
 }
 /** @nodts @return {ToggleGroupItem} */
 m_text__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem(/** ?string */ text) {
  if ($Equality.$same(text, null)) {
   Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_textElement__org_patternfly_component_togglegroup_ToggleGroupItem_);
   this.f_textElement__org_patternfly_component_togglegroup_ToggleGroupItem_ = null;
  } else {
   this.m_failSafeTextElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_togglegroup_ToggleGroupItem().textContent = text;
  }
  return this;
 }
 /** @nodts @return {ToggleGroupItem} */
 m_that__org_patternfly_component_togglegroup_ToggleGroupItem() {
  return this;
 }
 /** @nodts @return {ToggleGroupItem} */
 m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_togglegroup_ToggleGroupItem(/** ComponentHandler<ToggleGroupItem> */ clickHandler) {
  this.f_button__org_patternfly_component_togglegroup_ToggleGroupItem_.m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   clickHandler.m_handle__elemental2_dom_Event__java_lang_Object__void(e_1, this);
  });
  return this;
 }
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return /**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_button__org_patternfly_component_togglegroup_ToggleGroupItem_.m_element__elemental2_dom_HTMLElement(), $Overlay)).disabled;
 }
 /** @nodts */
 m_onClick__elemental2_dom_Event__void_$pp_org_patternfly_component_togglegroup(/** Event */ event) {
  let toggleGroup = /**@type {ToggleGroup}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), ToggleGroup));
  if ($Equality.$same(toggleGroup.f_selectionMode__org_patternfly_component_togglegroup_ToggleGroup, SelectionMode.f_single__org_patternfly_component_SelectionMode)) {
   if (!this.m_isSelected__boolean_$pp_org_patternfly_component_togglegroup()) {
    toggleGroup.m_select__org_patternfly_component_togglegroup_ToggleGroupItem__void(this);
   }
  } else if ($Equality.$same(toggleGroup.f_selectionMode__org_patternfly_component_togglegroup_ToggleGroup, SelectionMode.f_multi__org_patternfly_component_SelectionMode)) {
   toggleGroup.m_select__org_patternfly_component_togglegroup_ToggleGroupItem__boolean__boolean__void(this, !this.m_isSelected__boolean_$pp_org_patternfly_component_togglegroup(), true);
  }
 }
 /** @nodts */
 m_markSelected__boolean__void_$pp_org_patternfly_component_togglegroup(/** boolean */ selected) {
  this.f_button__org_patternfly_component_togglegroup_ToggleGroupItem_.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_pressed__org_patternfly_core_Aria, selected);
  this.f_button__org_patternfly_component_togglegroup_ToggleGroupItem_.m_classList__org_jboss_elemento_ClassList().m_toggle__java_lang_String__boolean__void(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_selected__org_patternfly_style_Classes), selected);
 }
 /** @nodts @return {boolean} */
 m_isSelected__boolean_$pp_org_patternfly_component_togglegroup() {
  return Boolean.m_parseBoolean__java_lang_String__boolean(/**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_button__org_patternfly_component_togglegroup_ToggleGroupItem_.m_element__elemental2_dom_HTMLElement(), $Overlay)).getAttribute(Aria.f_pressed__org_patternfly_core_Aria));
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeTextElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_togglegroup_ToggleGroupItem() {
  if ($Equality.$same(this.f_textElement__org_patternfly_component_togglegroup_ToggleGroupItem_, null)) {
   this.f_button__org_patternfly_component_togglegroup_ToggleGroupItem_.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_textElement__org_patternfly_component_togglegroup_ToggleGroupItem_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_toggleGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  }
  return this.f_textElement__org_patternfly_component_togglegroup_ToggleGroupItem_;
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_togglegroup_ToggleGroupItem() {
  if ($Equality.$same(this.f_iconContainer__org_patternfly_component_togglegroup_ToggleGroupItem_, null)) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLButtonElement}*/ ($Casts.$to(this.f_button__org_patternfly_component_togglegroup_ToggleGroupItem_.m_element__elemental2_dom_HTMLElement(), $Overlay)), this.f_iconContainer__org_patternfly_component_togglegroup_ToggleGroupItem_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_toggleGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  }
  return this.f_iconContainer__org_patternfly_component_togglegroup_ToggleGroupItem_;
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroupItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_togglegroup_ToggleGroupItem();
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroupItem} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), ToggleGroupItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroupItem} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_togglegroup_ToggleGroupItem(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroupItem} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ToggleGroupItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroupItem} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(/** SafeHtml */ arg0) {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(ElementDelegate.m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), ToggleGroupItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroupItem} */
 m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(ElementDelegate.m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ToggleGroupItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroupItem} */
 m_textNode__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(ElementDelegate.m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ToggleGroupItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroupItem} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), ToggleGroupItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroupItem} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_component_WithIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), ToggleGroupItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroupItem} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_component_togglegroup_ToggleGroupItem(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroupItem} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_component_togglegroup_ToggleGroupItem();
 }
 //Bridge method.
 /** @final @override @nodts @return {ToggleGroupItem} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem(arg0);
 }
 //Default method forwarding stub.
 /** @nodts @return {ToggleGroupItem} */
 m_disabled__org_patternfly_component_togglegroup_ToggleGroupItem() {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), ToggleGroupItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToggleGroupItem} */
 m_add__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem(/** ?string */ arg0) {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ToggleGroupItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToggleGroupItem} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_patternfly_component_togglegroup_ToggleGroupItem(/** SafeHtml */ arg0) {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(ElementDelegate.m_innerHtml__$default__org_patternfly_core_ElementDelegate__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(this, arg0), ToggleGroupItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToggleGroupItem} */
 m_textContent__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem(/** ?string */ arg0) {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(ElementDelegate.m_textContent__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ToggleGroupItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToggleGroupItem} */
 m_textNode__java_lang_String__org_patternfly_component_togglegroup_ToggleGroupItem(/** ?string */ arg0) {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(ElementDelegate.m_textNode__$default__org_patternfly_core_ElementDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), ToggleGroupItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToggleGroupItem} */
 m_add__elemental2_dom_Node__org_patternfly_component_togglegroup_ToggleGroupItem(/** Node */ arg0) {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(ElementDelegate.m_add__$default__org_patternfly_core_ElementDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), ToggleGroupItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {ToggleGroupItem} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_component_togglegroup_ToggleGroupItem(/** PredefinedIcon */ arg0) {
  return /**@type {ToggleGroupItem}*/ ($Casts.$to(WithIcon.m_icon__$default__org_patternfly_component_WithIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), ToggleGroupItem));
 }
 /** @nodts */
 static $clinit() {
  ToggleGroupItem.$clinit = () =>{};
  ToggleGroupItem.$loadModules();
  ToggleGroupSubComponent.$clinit();
  Disabled.$clinit();
  ElementDelegate.$clinit();
  WithIcon.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ToggleGroupItem;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  SelectionMode = goog.module.get('org.patternfly.component.SelectionMode$impl');
  ToggleGroup = goog.module.get('org.patternfly.component.togglegroup.ToggleGroup$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
ToggleGroupItem.f_SUB_COMPONENT_NAME__org_patternfly_component_togglegroup_ToggleGroupItem = 'tgi';
Disabled.$markImplementor(ToggleGroupItem);
ElementDelegate.$markImplementor(ToggleGroupItem);
WithIcon.$markImplementor(ToggleGroupItem);
WithText.$markImplementor(ToggleGroupItem);
$Util.$setClassMetadata(ToggleGroupItem, 'org.patternfly.component.togglegroup.ToggleGroupItem');

exports = ToggleGroupItem;

//# sourceMappingURL=ToggleGroupItem.js.map

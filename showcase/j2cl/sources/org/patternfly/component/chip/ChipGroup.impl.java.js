goog.module('org.patternfly.component.chip.ChipGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Closeable = goog.require('org.patternfly.component.Closeable$impl');
const HasValues = goog.require('org.patternfly.component.HasValues$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let HasElement = goog.forwardDeclare('org.jboss.elemento.HasElement$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Chip = goog.forwardDeclare('org.patternfly.component.chip.Chip$impl');
let TooltipToggle = goog.forwardDeclare('org.patternfly.component.tooltip.TooltipToggle$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let CloseHandler = goog.forwardDeclare('org.patternfly.handler.CloseHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, ChipGroup>}
 * @implements {HasValues<Chip>}
 * @implements {Attachable}
 * @implements {Closeable<HTMLDivElement, ChipGroup>}
 */
class ChipGroup extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_listElement__org_patternfly_component_chip_ChipGroup_;
  /**@type {Map<?string, Chip>} @nodts*/
  this.f_chips__org_patternfly_component_chip_ChipGroup_;
  /**@type {boolean} @nodts*/
  this.f_expanded__org_patternfly_component_chip_ChipGroup_ = false;
  /**@type {number} @nodts*/
  this.f_numChips__org_patternfly_component_chip_ChipGroup_ = 0;
  /**@type {?string} @nodts*/
  this.f_collapsedText__org_patternfly_component_chip_ChipGroup_;
  /**@type {?string} @nodts*/
  this.f_expandedText__org_patternfly_component_chip_ChipGroup_;
  /**@type {Chip} @nodts*/
  this.f_overflowChip__org_patternfly_component_chip_ChipGroup_;
  /**@type {Button} @nodts*/
  this.f_closeButton__org_patternfly_component_chip_ChipGroup_;
  /**@type {HTMLElement} @nodts*/
  this.f_categoryElement__org_patternfly_component_chip_ChipGroup_;
  /**@type {HTMLElement} @nodts*/
  this.f_overflowItem__org_patternfly_component_chip_ChipGroup_;
  /**@type {TooltipToggle} @nodts*/
  this.f_tooltipToggle__org_patternfly_component_chip_ChipGroup_;
  /**@type {CloseHandler<ChipGroup>} @nodts*/
  this.f_closeHandler__org_patternfly_component_chip_ChipGroup_;
 }
 /** @nodts @return {ChipGroup} */
 static m_chipGroup__org_patternfly_component_chip_ChipGroup() {
  ChipGroup.$clinit();
  return ChipGroup.$create__java_lang_String(null);
 }
 /** @nodts @return {ChipGroup} */
 static m_chipGroup__java_lang_String__org_patternfly_component_chip_ChipGroup(/** ?string */ category) {
  ChipGroup.$clinit();
  return ChipGroup.$create__java_lang_String(category);
 }
 /** @nodts @return {!ChipGroup} */
 static $create__java_lang_String(/** ?string */ category) {
  ChipGroup.$clinit();
  let $instance = new ChipGroup();
  $instance.$ctor__org_patternfly_component_chip_ChipGroup__java_lang_String__void(category);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_chip_ChipGroup__java_lang_String__void(/** ?string */ category) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_ChipGroup__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_chipGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'group'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_chips__org_patternfly_component_chip_ChipGroup_ = /**@type {!LinkedHashMap<?string, Chip>}*/ (LinkedHashMap.$create__());
  this.f_expanded__org_patternfly_component_chip_ChipGroup_ = false;
  this.f_numChips__org_patternfly_component_chip_ChipGroup_ = ChipGroup.f_DEFAULT_NUM_CHIPS__org_patternfly_component_chip_ChipGroup_;
  this.f_collapsedText__org_patternfly_component_chip_ChipGroup_ = j_l_String.m_valueOf__java_lang_Object__java_lang_String(ChipGroup.f_REMAINING_PLACEHOLDER__org_patternfly_component_chip_ChipGroup_) + ' more';
  this.f_expandedText__org_patternfly_component_chip_ChipGroup_ = 'Show less';
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_chipGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_main__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_listElement__org_patternfly_component_chip_ChipGroup_ = /**@type {HTMLUListElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_chipGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_list__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'list'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay))), HTMLContainerBuilder)));
  if (!$Equality.$same(category, null)) {
   this.m_category__java_lang_String__org_patternfly_component_chip_ChipGroup(category);
  } else {
   this.m_aria__java_lang_String__java_lang_String__org_patternfly_component_chip_ChipGroup(Classes.f_label__org_patternfly_style_Classes, 'Chip group category');
  }
  this.m_storeComponent__void();
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (!$Equality.$same(this.f_tooltipToggle__org_patternfly_component_chip_ChipGroup_, null)) {
   this.f_tooltipToggle__org_patternfly_component_chip_ChipGroup_.m_eval__void();
  }
 }
 /** @nodts @template T @return {ChipGroup} */
 m_addChips__java_lang_Iterable__java_util_function_Function__org_patternfly_component_chip_ChipGroup(/** Iterable<T> */ items, /** j_u_function_Function<T, Chip> */ display) {
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let chip = /**@type {Chip}*/ ($Casts.$to(display.m_apply__java_lang_Object__java_lang_Object(item), Chip));
    this.m_addChip__org_patternfly_component_chip_Chip__org_patternfly_component_chip_ChipGroup(chip);
   }
  }
  return this;
 }
 /** @nodts @return {ChipGroup} */
 m_addChip__org_patternfly_component_chip_Chip__org_patternfly_component_chip_ChipGroup(/** Chip */ chip) {
  return this.m_add__org_patternfly_component_chip_Chip__org_patternfly_component_chip_ChipGroup(chip);
 }
 /** @nodts @return {ChipGroup} */
 m_add__org_patternfly_component_chip_Chip__org_patternfly_component_chip_ChipGroup(/** Chip */ chip) {
  this.f_chips__org_patternfly_component_chip_ChipGroup_.put(chip.f_id__org_patternfly_component_chip_Chip, chip);
  let itemElement = /**@type {HTMLLIElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_chipGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_list__org_patternfly_style_Classes, Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(chip), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay));
  if (!$Equality.$same(this.f_overflowItem__org_patternfly_component_chip_ChipGroup_, null)) {
   Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(itemElement, this.f_overflowItem__org_patternfly_component_chip_ChipGroup_);
  } else {
   this.f_listElement__org_patternfly_component_chip_ChipGroup_.appendChild(itemElement);
  }
  this.m_overflow__void_$p_org_patternfly_component_chip_ChipGroup();
  return this;
 }
 /** @nodts @return {ChipGroup} */
 m_category__java_lang_String__org_patternfly_component_chip_ChipGroup(/** ?string */ category) {
  if ($Equality.$same(this.f_categoryElement__org_patternfly_component_chip_ChipGroup_, null)) {
   let categoryId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.m_componentType__org_patternfly_component_ComponentType().f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['category'], j_l_String)));
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_category__org_patternfly_style_Classes)], j_l_String)));
   this.f_categoryElement__org_patternfly_component_chip_ChipGroup_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_chipGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_label__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(categoryId), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement();
   Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(this.f_categoryElement__org_patternfly_component_chip_ChipGroup_, this.f_listElement__org_patternfly_component_chip_ChipGroup_);
   this.m_aria__java_lang_String__java_lang_String__org_patternfly_component_chip_ChipGroup(Aria.f_labelledBy__org_patternfly_core_Aria, categoryId);
   this.f_tooltipToggle__org_patternfly_component_chip_ChipGroup_ = TooltipToggle.$create__elemental2_dom_HTMLElement(this.f_categoryElement__org_patternfly_component_chip_ChipGroup_);
  }
  this.f_categoryElement__org_patternfly_component_chip_ChipGroup_.textContent = category;
  return this;
 }
 /** @nodts @return {ChipGroup} */
 m_numChips__int__org_patternfly_component_chip_ChipGroup(/** number */ numChips) {
  if (numChips > 0) {
   this.f_numChips__org_patternfly_component_chip_ChipGroup_ = numChips;
  }
  return this;
 }
 /** @nodts @return {ChipGroup} */
 m_closable__org_patternfly_component_chip_ChipGroup() {
  return this.m_closable__org_patternfly_handler_CloseHandler__org_patternfly_component_chip_ChipGroup(null);
 }
 /** @nodts @return {ChipGroup} */
 m_closable__org_patternfly_handler_CloseHandler__org_patternfly_component_chip_ChipGroup(/** CloseHandler<ChipGroup> */ closeHandler) {
  this.f_closeHandler__org_patternfly_component_chip_ChipGroup_ = closeHandler;
  let closeId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.m_componentType__org_patternfly_component_ComponentType().f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['close'], j_l_String)));
  let labelledBy = closeId;
  if (!$Equality.$same(this.f_categoryElement__org_patternfly_component_chip_ChipGroup_, null)) {
   labelledBy = j_l_String.m_valueOf__java_lang_Object__java_lang_String(labelledBy) + (' ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_categoryElement__org_patternfly_component_chip_ChipGroup_.id));
  }
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_chipGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_close__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_closeButton__org_patternfly_component_chip_ChipGroup_ = /**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_timesCircle__org_patternfly_icon_PredefinedIcon()), Button)).m_plain__org_jboss_elemento_TypedBuilder(), Button)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(closeId), Button)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Close chip group'), Button)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, labelledBy), Button)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (event) =>{
   let event_1 = /**@type {MouseEvent}*/ ($Casts.$to(event, MouseEvent_$Overlay));
   this.m_close__elemental2_dom_Event__boolean__void(event_1, true);
  }), Button))), HTMLContainerBuilder)));
  return this;
 }
 /** @nodts @return {ChipGroup} */
 m_collapsedText__java_lang_String__org_patternfly_component_chip_ChipGroup(/** ?string */ collapsedText) {
  this.f_collapsedText__org_patternfly_component_chip_ChipGroup_ = collapsedText;
  return this;
 }
 /** @nodts @return {ChipGroup} */
 m_expandedText__java_lang_String__org_patternfly_component_chip_ChipGroup(/** ?string */ expandedText) {
  this.f_expandedText__org_patternfly_component_chip_ChipGroup_ = expandedText;
  return this;
 }
 /** @nodts @return {ChipGroup} */
 m_that__org_patternfly_component_chip_ChipGroup() {
  return this;
 }
 /** @nodts @return {ChipGroup} */
 m_aria__java_lang_String__java_lang_String__org_patternfly_component_chip_ChipGroup(/** ?string */ name, /** ?string */ value) {
  if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(name, Aria.f_label__org_patternfly_core_Aria)) {
   Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.f_listElement__org_patternfly_component_chip_ChipGroup_, Aria.f_label__org_patternfly_core_Aria, value);
  }
  return /**@type {ChipGroup}*/ ($Casts.$to(HasElement.m_aria__$default__org_jboss_elemento_HasElement__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this, name, value), ChipGroup));
 }
 /** @nodts @return {ChipGroup} */
 m_ariaCloseLabel__java_lang_String__org_patternfly_component_chip_ChipGroup(/** ?string */ label) {
  if (!$Equality.$same(this.f_closeButton__org_patternfly_component_chip_ChipGroup_, null)) {
   this.f_closeButton__org_patternfly_component_chip_ChipGroup_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  }
  return this;
 }
 /** @nodts @return {ChipGroup} */
 m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_chip_ChipGroup(/** CloseHandler<ChipGroup> */ closeHandler) {
  this.f_closeHandler__org_patternfly_component_chip_ChipGroup_ = closeHandler;
  return this;
 }
 /** @override @nodts @return {Set<Chip>} */
 m_values__java_util_Set() {
  return /**@type {!HashSet<Chip>}*/ (HashSet.$create__java_util_Collection(this.f_chips__org_patternfly_component_chip_ChipGroup_.values()));
 }
 /** @override @nodts */
 m_close__elemental2_dom_Event__boolean__void(/** Event */ event, /** boolean */ fireEvent) {
  if (CloseHandler.m_shouldClose__java_lang_Object__org_patternfly_handler_CloseHandler__elemental2_dom_Event__boolean__boolean(this, this.f_closeHandler__org_patternfly_component_chip_ChipGroup_, event, fireEvent)) {
   Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this);
   CloseHandler.m_fireEvent__java_lang_Object__org_patternfly_handler_CloseHandler__elemental2_dom_Event__boolean__void(this, this.f_closeHandler__org_patternfly_component_chip_ChipGroup_, event, fireEvent);
  }
 }
 /** @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_listElement__org_patternfly_component_chip_ChipGroup_);
  this.f_chips__org_patternfly_component_chip_ChipGroup_.clear();
  this.f_overflowItem__org_patternfly_component_chip_ChipGroup_ = null;
  this.f_overflowChip__org_patternfly_component_chip_ChipGroup_ = null;
 }
 /** @nodts */
 m_close__org_patternfly_component_chip_Chip__void_$pp_org_patternfly_component_chip(/** Chip */ chip) {
  this.f_chips__org_patternfly_component_chip_ChipGroup_.remove(chip.f_id__org_patternfly_component_chip_Chip);
  let element = chip.m_element__elemental2_dom_HTMLElement().parentElement;
  if (!$Equality.$same(element, null)) {
   Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(element);
  } else {
   Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(chip);
  }
  this.m_overflow__void_$p_org_patternfly_component_chip_ChipGroup();
 }
 /** @nodts */
 m_overflow__void_$p_org_patternfly_component_chip_ChipGroup() {
  if (this.f_chips__org_patternfly_component_chip_ChipGroup_.size() > this.f_numChips__org_patternfly_component_chip_ChipGroup_ && $Equality.$same(this.f_overflowItem__org_patternfly_component_chip_ChipGroup_, null) && $Equality.$same(this.f_overflowChip__org_patternfly_component_chip_ChipGroup_, null)) {
   this.f_overflowItem__org_patternfly_component_chip_ChipGroup_ = /**@type {HTMLLIElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_chipGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_list__org_patternfly_style_Classes, Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_overflowChip__org_patternfly_component_chip_ChipGroup_ = /**@type {Chip}*/ ($Casts.$to(/**@type {Chip}*/ ($Casts.$to(Chip.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder(), '').m_readonly__org_patternfly_component_chip_Chip().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_overflow__org_patternfly_style_Classes)], j_l_String))), Chip)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (event) =>{
    let event_1 = /**@type {MouseEvent}*/ ($Casts.$to(event, MouseEvent_$Overlay));
    this.m_toggle__void_$p_org_patternfly_component_chip_ChipGroup();
   }), Chip))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay));
   this.f_listElement__org_patternfly_component_chip_ChipGroup_.appendChild(this.f_overflowItem__org_patternfly_component_chip_ChipGroup_);
  }
  let index = 0;
  for (let $iterator = this.f_chips__org_patternfly_component_chip_ChipGroup_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let chip = /**@type {Chip}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Chip));
   {
    Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(/**@type {HTMLElement}*/ ($Casts.$to(chip.m_element__elemental2_dom_HTMLElement().parentElement, $Overlay)), this.f_expanded__org_patternfly_component_chip_ChipGroup_ || index < this.f_numChips__org_patternfly_component_chip_ChipGroup_);
    index = index + 1 | 0;
   }
  }
  if (!$Equality.$same(this.f_overflowItem__org_patternfly_component_chip_ChipGroup_, null) && !$Equality.$same(this.f_overflowChip__org_patternfly_component_chip_ChipGroup_, null)) {
   Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.f_overflowItem__org_patternfly_component_chip_ChipGroup_, this.f_chips__org_patternfly_component_chip_ChipGroup_.size() > this.f_numChips__org_patternfly_component_chip_ChipGroup_);
   this.f_overflowChip__org_patternfly_component_chip_ChipGroup_.f_textElement__org_patternfly_component_chip_Chip.textContent = this.f_expanded__org_patternfly_component_chip_ChipGroup_ ? this.f_expandedText__org_patternfly_component_chip_ChipGroup_ : j_l_String.m_replace__java_lang_String__java_lang_CharSequence__java_lang_CharSequence__java_lang_String(this.f_collapsedText__org_patternfly_component_chip_ChipGroup_, ChipGroup.f_REMAINING_PLACEHOLDER__org_patternfly_component_chip_ChipGroup_, j_l_String.m_valueOf__int__java_lang_String(this.f_chips__org_patternfly_component_chip_ChipGroup_.size() - this.f_numChips__org_patternfly_component_chip_ChipGroup_ | 0));
  }
 }
 /** @nodts */
 m_toggle__void_$p_org_patternfly_component_chip_ChipGroup() {
  this.f_expanded__org_patternfly_component_chip_ChipGroup_ = !this.f_expanded__org_patternfly_component_chip_ChipGroup_;
  this.m_overflow__void_$p_org_patternfly_component_chip_ChipGroup();
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {ChipGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_chip_ChipGroup();
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_close__void() {
  Closeable.m_close__$default__org_patternfly_component_Closeable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_close__elemental2_dom_Event__void(/** Event */ arg0) {
  Closeable.m_close__$default__org_patternfly_component_Closeable__elemental2_dom_Event__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {ChipGroup} */
 m_onClose__org_patternfly_handler_CloseHandler__org_jboss_elemento_TypedBuilder(/** CloseHandler<ChipGroup> */ arg0) {
  return this.m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_chip_ChipGroup(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {ChipGroup} */
 m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** ?string */ arg1) {
  return this.m_aria__java_lang_String__java_lang_String__org_patternfly_component_chip_ChipGroup(arg0, arg1);
 }
 /** @nodts */
 static $clinit() {
  ChipGroup.$clinit = () =>{};
  ChipGroup.$loadModules();
  BaseComponent.$clinit();
  Attachable.$clinit();
  Closeable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChipGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  HasElement = goog.module.get('org.jboss.elemento.HasElement$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Chip = goog.module.get('org.patternfly.component.chip.Chip$impl');
  TooltipToggle = goog.module.get('org.patternfly.component.tooltip.TooltipToggle$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  CloseHandler = goog.module.get('org.patternfly.handler.CloseHandler$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {number} @nodts*/
ChipGroup.f_DEFAULT_NUM_CHIPS__org_patternfly_component_chip_ChipGroup_ = 3;
/**@const {string} @nodts*/
ChipGroup.f_REMAINING_PLACEHOLDER__org_patternfly_component_chip_ChipGroup_ = '${remaining}';
HasValues.$markImplementor(ChipGroup);
Attachable.$markImplementor(ChipGroup);
Closeable.$markImplementor(ChipGroup);
$Util.$setClassMetadata(ChipGroup, 'org.patternfly.component.chip.ChipGroup');

exports = ChipGroup;

//# sourceMappingURL=ChipGroup.js.map

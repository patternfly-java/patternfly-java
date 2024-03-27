goog.module('org.patternfly.component.label.LabelGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Closeable = goog.require('org.patternfly.component.Closeable$impl');
const HasValues = goog.require('org.patternfly.component.HasValues$impl');
const Vertical = goog.require('org.patternfly.style.Modifiers.Vertical$impl');

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
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Label = goog.forwardDeclare('org.patternfly.component.label.Label$impl');
let TooltipToggle = goog.forwardDeclare('org.patternfly.component.tooltip.TooltipToggle$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let CloseHandler = goog.forwardDeclare('org.patternfly.handler.CloseHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Color = goog.forwardDeclare('org.patternfly.style.Color$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, LabelGroup>}
 * @implements {HasValues<Label>}
 * @implements {Attachable}
 * @implements {Closeable<HTMLDivElement, LabelGroup>}
 * @implements {Vertical<HTMLDivElement, LabelGroup>}
 */
class LabelGroup extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_listElement__org_patternfly_component_label_LabelGroup_;
  /**@type {Map<?string, Label>} @nodts*/
  this.f_labels__org_patternfly_component_label_LabelGroup_;
  /**@type {boolean} @nodts*/
  this.f_expanded__org_patternfly_component_label_LabelGroup_ = false;
  /**@type {number} @nodts*/
  this.f_numLabels__org_patternfly_component_label_LabelGroup_ = 0;
  /**@type {?string} @nodts*/
  this.f_collapsedText__org_patternfly_component_label_LabelGroup_;
  /**@type {?string} @nodts*/
  this.f_expandedText__org_patternfly_component_label_LabelGroup_;
  /**@type {Label} @nodts*/
  this.f_overflowLabel__org_patternfly_component_label_LabelGroup_;
  /**@type {Button} @nodts*/
  this.f_closeButton__org_patternfly_component_label_LabelGroup_;
  /**@type {HTMLElement} @nodts*/
  this.f_categoryElement__org_patternfly_component_label_LabelGroup_;
  /**@type {HTMLElement} @nodts*/
  this.f_overflowItem__org_patternfly_component_label_LabelGroup_;
  /**@type {TooltipToggle} @nodts*/
  this.f_tooltipToggle__org_patternfly_component_label_LabelGroup_;
  /**@type {CloseHandler<LabelGroup>} @nodts*/
  this.f_closeHandler__org_patternfly_component_label_LabelGroup_;
 }
 /** @nodts @return {LabelGroup} */
 static m_labelGroup__org_patternfly_component_label_LabelGroup() {
  LabelGroup.$clinit();
  return LabelGroup.$create__java_lang_String(null);
 }
 /** @nodts @return {LabelGroup} */
 static m_labelGroup__java_lang_String__org_patternfly_component_label_LabelGroup(/** ?string */ category) {
  LabelGroup.$clinit();
  return LabelGroup.$create__java_lang_String(category);
 }
 /** @nodts @return {!LabelGroup} */
 static $create__java_lang_String(/** ?string */ category) {
  LabelGroup.$clinit();
  let $instance = new LabelGroup();
  $instance.$ctor__org_patternfly_component_label_LabelGroup__java_lang_String__void(category);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_label_LabelGroup__java_lang_String__void(/** ?string */ category) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_ChipGroup__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_labelGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_labels__org_patternfly_component_label_LabelGroup_ = /**@type {!LinkedHashMap<?string, Label>}*/ (LinkedHashMap.$create__());
  this.f_expanded__org_patternfly_component_label_LabelGroup_ = false;
  this.f_numLabels__org_patternfly_component_label_LabelGroup_ = LabelGroup.f_DEFAULT_NUM_CHIPS__org_patternfly_component_label_LabelGroup_;
  this.f_collapsedText__org_patternfly_component_label_LabelGroup_ = j_l_String.m_valueOf__java_lang_Object__java_lang_String(LabelGroup.f_REMAINING_PLACEHOLDER__org_patternfly_component_label_LabelGroup_) + ' more';
  this.f_expandedText__org_patternfly_component_label_LabelGroup_ = 'Show less';
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_labelGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_main__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_listElement__org_patternfly_component_label_LabelGroup_ = /**@type {HTMLUListElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_labelGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_list__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'list'), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLUListElement_$Overlay))), HTMLContainerBuilder)));
  if (!$Equality.$same(category, null)) {
   this.m_category__java_lang_String__org_patternfly_component_label_LabelGroup(category);
  } else {
   Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.f_listElement__org_patternfly_component_label_LabelGroup_, Aria.f_label__org_patternfly_core_Aria, 'Label group category');
  }
  this.m_storeComponent__void();
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (!$Equality.$same(this.f_tooltipToggle__org_patternfly_component_label_LabelGroup_, null)) {
   this.f_tooltipToggle__org_patternfly_component_label_LabelGroup_.m_eval__void();
  }
 }
 /** @nodts @template T @return {LabelGroup} */
 m_addLabels__java_lang_Iterable__java_util_function_Function__org_patternfly_component_label_LabelGroup(/** Iterable<T> */ items, /** j_u_function_Function<T, Label> */ display) {
  for (let $iterator = items.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let item = $iterator.m_next__java_lang_Object();
   {
    let label = /**@type {Label}*/ ($Casts.$to(display.m_apply__java_lang_Object__java_lang_Object(item), Label));
    this.m_addLabel__org_patternfly_component_label_Label__org_patternfly_component_label_LabelGroup(label);
   }
  }
  return this;
 }
 /** @nodts @return {LabelGroup} */
 m_addLabel__org_patternfly_component_label_Label__org_patternfly_component_label_LabelGroup(/** Label */ label) {
  return this.m_add__org_patternfly_component_label_Label__org_patternfly_component_label_LabelGroup(label);
 }
 /** @nodts @return {LabelGroup} */
 m_add__org_patternfly_component_label_Label__org_patternfly_component_label_LabelGroup(/** Label */ label) {
  this.f_labels__org_patternfly_component_label_LabelGroup_.put(label.f_id__org_patternfly_component_label_Label, label);
  let itemElement = /**@type {HTMLLIElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_labelGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_list__org_patternfly_style_Classes, Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(label), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay));
  if (!$Equality.$same(this.f_overflowItem__org_patternfly_component_label_LabelGroup_, null)) {
   Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(itemElement, this.f_overflowItem__org_patternfly_component_label_LabelGroup_);
  } else {
   this.f_listElement__org_patternfly_component_label_LabelGroup_.appendChild(itemElement);
  }
  this.m_overflow__void_$p_org_patternfly_component_label_LabelGroup();
  return this;
 }
 /** @nodts @return {LabelGroup} */
 m_category__java_lang_String__org_patternfly_component_label_LabelGroup(/** ?string */ category) {
  if ($Equality.$same(this.f_categoryElement__org_patternfly_component_label_LabelGroup_, null)) {
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_category__org_patternfly_style_Classes)], j_l_String)));
   let categoryId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.m_componentType__org_patternfly_component_ComponentType().f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['category'], j_l_String)));
   this.f_categoryElement__org_patternfly_component_label_LabelGroup_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_labelGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_label__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(categoryId), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement();
   Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element__void(this.f_categoryElement__org_patternfly_component_label_LabelGroup_, this.f_listElement__org_patternfly_component_label_LabelGroup_);
   Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(this.f_listElement__org_patternfly_component_label_LabelGroup_, Aria.f_labelledBy__org_patternfly_core_Aria, categoryId);
   this.f_tooltipToggle__org_patternfly_component_label_LabelGroup_ = TooltipToggle.$create__elemental2_dom_HTMLElement(this.f_categoryElement__org_patternfly_component_label_LabelGroup_);
  }
  this.f_categoryElement__org_patternfly_component_label_LabelGroup_.textContent = category;
  return this;
 }
 /** @nodts @return {LabelGroup} */
 m_numLabels__int__org_patternfly_component_label_LabelGroup(/** number */ numLabels) {
  if (numLabels > 0) {
   this.f_numLabels__org_patternfly_component_label_LabelGroup_ = numLabels;
  }
  return this;
 }
 /** @nodts @return {LabelGroup} */
 m_closable__org_patternfly_component_label_LabelGroup() {
  return this.m_closable__org_patternfly_handler_CloseHandler__org_patternfly_component_label_LabelGroup(null);
 }
 /** @nodts @return {LabelGroup} */
 m_closable__org_patternfly_handler_CloseHandler__org_patternfly_component_label_LabelGroup(/** CloseHandler<LabelGroup> */ closeHandler) {
  this.f_closeHandler__org_patternfly_component_label_LabelGroup_ = closeHandler;
  let closeId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.m_componentType__org_patternfly_component_ComponentType().f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['close'], j_l_String)));
  let labelledBy = closeId;
  if (!$Equality.$same(this.f_categoryElement__org_patternfly_component_label_LabelGroup_, null)) {
   labelledBy = j_l_String.m_valueOf__java_lang_Object__java_lang_String(labelledBy) + (' ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_categoryElement__org_patternfly_component_label_LabelGroup_.id));
  }
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_labelGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_close__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_closeButton__org_patternfly_component_label_LabelGroup_ = /**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_plain__org_jboss_elemento_TypedBuilder(), Button)).m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_timesCircle__org_patternfly_icon_PredefinedIcon()), Button)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(closeId), Button)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Close label group'), Button)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, labelledBy), Button)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (event) =>{
   let event_1 = /**@type {MouseEvent}*/ ($Casts.$to(event, MouseEvent_$Overlay));
   this.m_close__elemental2_dom_Event__boolean__void(event_1, true);
  }), Button))), HTMLContainerBuilder)));
  return this;
 }
 /** @nodts @return {LabelGroup} */
 m_collapsedText__java_lang_String__org_patternfly_component_label_LabelGroup(/** ?string */ collapsedText) {
  this.f_collapsedText__org_patternfly_component_label_LabelGroup_ = collapsedText;
  return this;
 }
 /** @nodts @return {LabelGroup} */
 m_expandedText__java_lang_String__org_patternfly_component_label_LabelGroup(/** ?string */ expandedText) {
  this.f_expandedText__org_patternfly_component_label_LabelGroup_ = expandedText;
  return this;
 }
 /** @nodts @return {LabelGroup} */
 m_that__org_patternfly_component_label_LabelGroup() {
  return this;
 }
 /** @nodts @return {LabelGroup} */
 m_ariaCloseLabel__java_lang_String__org_patternfly_component_label_LabelGroup(/** ?string */ label) {
  if (!$Equality.$same(this.f_closeButton__org_patternfly_component_label_LabelGroup_, null)) {
   this.f_closeButton__org_patternfly_component_label_LabelGroup_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  }
  return this;
 }
 /** @nodts @return {LabelGroup} */
 m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_label_LabelGroup(/** CloseHandler<LabelGroup> */ closeHandler) {
  this.f_closeHandler__org_patternfly_component_label_LabelGroup_ = closeHandler;
  return this;
 }
 /** @override @nodts @return {Set<Label>} */
 m_values__java_util_Set() {
  return /**@type {!HashSet<Label>}*/ (HashSet.$create__java_util_Collection(this.f_labels__org_patternfly_component_label_LabelGroup_.values()));
 }
 /** @override @nodts */
 m_close__elemental2_dom_Event__boolean__void(/** Event */ event, /** boolean */ fireEvent) {
  if (CloseHandler.m_shouldClose__java_lang_Object__org_patternfly_handler_CloseHandler__elemental2_dom_Event__boolean__boolean(this, this.f_closeHandler__org_patternfly_component_label_LabelGroup_, event, fireEvent)) {
   Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this);
   CloseHandler.m_fireEvent__java_lang_Object__org_patternfly_handler_CloseHandler__elemental2_dom_Event__boolean__void(this, this.f_closeHandler__org_patternfly_component_label_LabelGroup_, event, fireEvent);
  }
 }
 /** @nodts */
 m_clear__void() {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_listElement__org_patternfly_component_label_LabelGroup_);
  this.f_labels__org_patternfly_component_label_LabelGroup_.clear();
  this.f_overflowItem__org_patternfly_component_label_LabelGroup_ = null;
  this.f_overflowLabel__org_patternfly_component_label_LabelGroup_ = null;
 }
 /** @nodts */
 m_close__org_patternfly_component_label_Label__void_$pp_org_patternfly_component_label(/** Label */ label) {
  this.f_labels__org_patternfly_component_label_LabelGroup_.remove(label.f_id__org_patternfly_component_label_Label);
  let element = label.m_element__elemental2_dom_HTMLElement().parentElement;
  if (!$Equality.$same(element, null)) {
   Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(element);
  } else {
   Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(label);
  }
  this.m_overflow__void_$p_org_patternfly_component_label_LabelGroup();
 }
 /** @nodts */
 m_overflow__void_$p_org_patternfly_component_label_LabelGroup() {
  if (this.f_labels__org_patternfly_component_label_LabelGroup_.size() > this.f_numLabels__org_patternfly_component_label_LabelGroup_ && $Equality.$same(this.f_overflowItem__org_patternfly_component_label_LabelGroup_, null) && $Equality.$same(this.f_overflowLabel__org_patternfly_component_label_LabelGroup_, null)) {
   this.f_overflowItem__org_patternfly_component_label_LabelGroup_ = /**@type {HTMLLIElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_chipGroup__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_list__org_patternfly_style_Classes, Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_overflowLabel__org_patternfly_component_label_LabelGroup_ = /**@type {Label}*/ ($Casts.$to(/**@type {Label}*/ ($Casts.$to(Label.$create__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__org_patternfly_style_Color(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder(), '', Color.f_grey__org_patternfly_style_Color).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_overflow__org_patternfly_style_Classes)], j_l_String))), Label)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (event) =>{
    let event_1 = /**@type {MouseEvent}*/ ($Casts.$to(event, MouseEvent_$Overlay));
    this.m_toggle__void_$p_org_patternfly_component_label_LabelGroup();
   }), Label))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay));
   this.f_listElement__org_patternfly_component_label_LabelGroup_.appendChild(this.f_overflowItem__org_patternfly_component_label_LabelGroup_);
  }
  let index = 0;
  for (let $iterator = this.f_labels__org_patternfly_component_label_LabelGroup_.values().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let label = /**@type {Label}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Label));
   {
    Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(/**@type {HTMLElement}*/ ($Casts.$to(label.m_element__elemental2_dom_HTMLElement().parentElement, $Overlay)), this.f_expanded__org_patternfly_component_label_LabelGroup_ || index < this.f_numLabels__org_patternfly_component_label_LabelGroup_);
    index = index + 1 | 0;
   }
  }
  if (!$Equality.$same(this.f_overflowItem__org_patternfly_component_label_LabelGroup_, null) && !$Equality.$same(this.f_overflowLabel__org_patternfly_component_label_LabelGroup_, null)) {
   Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.f_overflowItem__org_patternfly_component_label_LabelGroup_, this.f_labels__org_patternfly_component_label_LabelGroup_.size() > this.f_numLabels__org_patternfly_component_label_LabelGroup_);
   this.f_overflowLabel__org_patternfly_component_label_LabelGroup_.f_textElement__org_patternfly_component_label_Label.textContent = this.f_expanded__org_patternfly_component_label_LabelGroup_ ? this.f_expandedText__org_patternfly_component_label_LabelGroup_ : j_l_String.m_replace__java_lang_String__java_lang_CharSequence__java_lang_CharSequence__java_lang_String(this.f_collapsedText__org_patternfly_component_label_LabelGroup_, LabelGroup.f_REMAINING_PLACEHOLDER__org_patternfly_component_label_LabelGroup_, j_l_String.m_valueOf__int__java_lang_String(this.f_labels__org_patternfly_component_label_LabelGroup_.size() - this.f_numLabels__org_patternfly_component_label_LabelGroup_ | 0));
  }
 }
 /** @nodts */
 m_toggle__void_$p_org_patternfly_component_label_LabelGroup() {
  this.f_expanded__org_patternfly_component_label_LabelGroup_ = !this.f_expanded__org_patternfly_component_label_LabelGroup_;
  this.m_overflow__void_$p_org_patternfly_component_label_LabelGroup();
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {LabelGroup} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_label_LabelGroup();
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
 /** @final @override @nodts @return {LabelGroup} */
 m_onClose__org_patternfly_handler_CloseHandler__org_jboss_elemento_TypedBuilder(/** CloseHandler<LabelGroup> */ arg0) {
  return this.m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_label_LabelGroup(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {LabelGroup} */
 m_vertical__org_jboss_elemento_TypedBuilder() {
  return /**@type {LabelGroup}*/ ($Casts.$to(Vertical.m_vertical__$default__org_patternfly_style_Modifiers_Vertical__org_jboss_elemento_TypedBuilder(this), LabelGroup));
 }
 //Bridge method.
 /** @final @override @nodts @return {LabelGroup} */
 m_vertical__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return /**@type {LabelGroup}*/ ($Casts.$to(Vertical.m_vertical__$default__org_patternfly_style_Modifiers_Vertical__boolean__org_jboss_elemento_TypedBuilder(this, arg0), LabelGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {LabelGroup} */
 m_vertical__org_patternfly_component_label_LabelGroup() {
  return /**@type {LabelGroup}*/ ($Casts.$to(Vertical.m_vertical__$default__org_patternfly_style_Modifiers_Vertical__org_jboss_elemento_TypedBuilder(this), LabelGroup));
 }
 //Default method forwarding stub.
 /** @nodts @return {LabelGroup} */
 m_vertical__boolean__org_patternfly_component_label_LabelGroup(/** boolean */ arg0) {
  return /**@type {LabelGroup}*/ ($Casts.$to(Vertical.m_vertical__$default__org_patternfly_style_Modifiers_Vertical__boolean__org_jboss_elemento_TypedBuilder(this, arg0), LabelGroup));
 }
 /** @nodts */
 static $clinit() {
  LabelGroup.$clinit = () =>{};
  LabelGroup.$loadModules();
  BaseComponent.$clinit();
  Attachable.$clinit();
  Closeable.$clinit();
  Vertical.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LabelGroup;
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
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Label = goog.module.get('org.patternfly.component.label.Label$impl');
  TooltipToggle = goog.module.get('org.patternfly.component.tooltip.TooltipToggle$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  CloseHandler = goog.module.get('org.patternfly.handler.CloseHandler$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Color = goog.module.get('org.patternfly.style.Color$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {number} @nodts*/
LabelGroup.f_DEFAULT_NUM_CHIPS__org_patternfly_component_label_LabelGroup_ = 3;
/**@const {string} @nodts*/
LabelGroup.f_REMAINING_PLACEHOLDER__org_patternfly_component_label_LabelGroup_ = '${remaining}';
HasValues.$markImplementor(LabelGroup);
Attachable.$markImplementor(LabelGroup);
Closeable.$markImplementor(LabelGroup);
Vertical.$markImplementor(LabelGroup);
$Util.$setClassMetadata(LabelGroup, 'org.patternfly.component.label.LabelGroup');

exports = LabelGroup;

//# sourceMappingURL=LabelGroup.js.map

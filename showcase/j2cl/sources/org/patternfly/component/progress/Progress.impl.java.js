goog.module('org.patternfly.component.progress.Progress$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponentFlat = goog.require('org.patternfly.component.BaseComponentFlat$impl');
const HasValue = goog.require('org.patternfly.component.HasValue$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let ValidationStatus = goog.forwardDeclare('org.patternfly.component.ValidationStatus$impl');
let HelperText = goog.forwardDeclare('org.patternfly.component.help.HelperText$impl');
let MeasureLocation = goog.forwardDeclare('org.patternfly.component.progress.MeasureLocation$impl');
let ProgressLabel = goog.forwardDeclare('org.patternfly.component.progress.ProgressLabel$impl');
let Tooltip = goog.forwardDeclare('org.patternfly.component.tooltip.Tooltip$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Numbers = goog.forwardDeclare('org.patternfly.core.Numbers$impl');
let ObservableValue = goog.forwardDeclare('org.patternfly.core.ObservableValue$impl');
let Subscriber = goog.forwardDeclare('org.patternfly.core.ObservableValue.Subscriber$impl');
let Validation = goog.forwardDeclare('org.patternfly.core.Validation$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let Status = goog.forwardDeclare('org.patternfly.style.Status$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $$int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

/**
 * @extends {BaseComponentFlat<HTMLElement, Progress>}
 * @implements {HasValue<Integer>}
 */
class Progress extends BaseComponentFlat {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {ObservableValue<Integer>} @nodts*/
  this.f_value__org_patternfly_component_progress_Progress_;
  /**@type {HTMLElement} @nodts*/
  this.f_measureElement__org_patternfly_component_progress_Progress_;
  /**@type {HTMLContainerBuilder<HTMLDivElement>} @nodts*/
  this.f_statusElement__org_patternfly_component_progress_Progress_;
  /**@type {HTMLContainerBuilder<HTMLDivElement>} @nodts*/
  this.f_indicatorElement__org_patternfly_component_progress_Progress_;
  /**@type {HTMLContainerBuilder<HTMLDivElement>} @nodts*/
  this.f_progressbarElement__org_patternfly_component_progress_Progress_;
  /**@type {number} @nodts*/
  this.f_min__org_patternfly_component_progress_Progress_ = 0;
  /**@type {number} @nodts*/
  this.f_max__org_patternfly_component_progress_Progress_ = 0;
  /**@type {number} @nodts*/
  this.f_step__org_patternfly_component_progress_Progress_ = 0;
  /**@type {Status} @nodts*/
  this.f_status__org_patternfly_component_progress_Progress_;
  /**@type {ProgressLabel} @nodts*/
  this.f_label__org_patternfly_component_progress_Progress_;
  /**@type {HelperText} @nodts*/
  this.f_helperText__org_patternfly_component_progress_Progress_;
  /**@type {HTMLElement} @nodts*/
  this.f_titleElement__org_patternfly_component_progress_Progress_;
  /**@type {HTMLElement} @nodts*/
  this.f_iconContainer__org_patternfly_component_progress_Progress_;
  /**@type {MeasureLocation} @nodts*/
  this.f_measureLocation__org_patternfly_component_progress_Progress_;
  /**@type {ChangeHandler<Progress, Integer>} @nodts*/
  this.f_changeHandler__org_patternfly_component_progress_Progress_;
 }
 /** @nodts @return {Progress} */
 static m_progress__org_patternfly_component_progress_Progress() {
  Progress.$clinit();
  return Progress.$create__();
 }
 /** @nodts @return {!Progress} */
 static $create__() {
  Progress.$clinit();
  let $instance = new Progress();
  $instance.$ctor__org_patternfly_component_progress_Progress__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_progress_Progress__void() {
  this.$ctor__org_patternfly_component_BaseComponentFlat__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Progress__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_progress__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_singleline__org_patternfly_style_Classes)], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_value__org_patternfly_component_progress_Progress_ = /**@type {ObservableValue<Integer>}*/ (ObservableValue.m_ov__java_lang_Object__org_patternfly_core_ObservableValue(Integer.m_valueOf__int__java_lang_Integer(0))).m_subscribe__org_patternfly_core_ObservableValue_Subscriber__org_patternfly_core_ObservableValue(Subscriber.$adapt((arg0, arg1) =>{
   let arg0_1 = /**@type {Integer}*/ ($Casts.$to(arg0, Integer));
   let arg1_1 = /**@type {Integer}*/ ($Casts.$to(arg1, Integer));
   this.m_onValueChanged__int__int__void_$p_org_patternfly_component_progress_Progress(arg0_1.m_intValue__int(), arg1_1.m_intValue__int());
  }));
  this.f_label__org_patternfly_component_progress_Progress_ = ProgressLabel.$adapt((/** number */ min, /** number */ max, /** number */ step, /** number */ value) =>{
   return value + '%';
  });
  this.f_statusElement__org_patternfly_component_progress_Progress_ = /**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_progress__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_status__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), HTMLContainerBuilder));
  this.m_element__elemental2_dom_HTMLElement().appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(this.f_statusElement__org_patternfly_component_progress_Progress_.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_progressbarElement__org_patternfly_component_progress_Progress_ = /**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_progress__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_bar__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'progressbar'), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_indicatorElement__org_patternfly_component_progress_Progress_ = /**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_progress__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_indicator__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))), HTMLContainerBuilder));
  this.m_element__elemental2_dom_HTMLElement().appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(this.f_progressbarElement__org_patternfly_component_progress_Progress_.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_measureElement__org_patternfly_component_progress_Progress_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_progress__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_measure__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement();
  this.m_range__int__int__int__org_patternfly_component_progress_Progress(0, 100, 1);
  this.m_measureLocation__org_patternfly_component_progress_MeasureLocation__org_patternfly_component_progress_Progress(MeasureLocation.f_top__org_patternfly_component_progress_MeasureLocation);
  this.f_value__org_patternfly_component_progress_Progress_.m_publish__void();
 }
 /** @nodts @return {Progress} */
 m_addHelperText__org_patternfly_component_help_HelperText__org_patternfly_component_progress_Progress(/** HelperText */ helperText) {
  return this.m_add__org_patternfly_component_help_HelperText__org_patternfly_component_progress_Progress(helperText);
 }
 /** @nodts @return {Progress} */
 m_add__org_patternfly_component_help_HelperText__org_patternfly_component_progress_Progress(/** HelperText */ helperText) {
  if (!$Equality.$same(this.f_helperText__org_patternfly_component_progress_Progress_, null)) {
   Element_$Overlay.m_replaceWith__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node__void(this.f_helperText__org_patternfly_component_progress_Progress_.m_element__elemental2_dom_HTMLElement(), [helperText.m_element__elemental2_dom_HTMLElement()]);
  } else {
   this.m_element__elemental2_dom_HTMLElement().appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_progress__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_helperText__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(helperText), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  }
  this.f_helperText__org_patternfly_component_progress_Progress_ = helperText;
  return this;
 }
 /** @nodts @return {Progress} */
 m_min__int__org_patternfly_component_progress_Progress(/** number */ min) {
  this.f_min__org_patternfly_component_progress_Progress_ = min;
  this.f_progressbarElement__org_patternfly_component_progress_Progress_.m_aria__java_lang_String__int__org_jboss_elemento_TypedBuilder(Aria.f_valueMin__org_patternfly_core_Aria, min);
  return this;
 }
 /** @nodts @return {Progress} */
 m_max__int__org_patternfly_component_progress_Progress(/** number */ max) {
  this.f_max__org_patternfly_component_progress_Progress_ = max;
  this.f_progressbarElement__org_patternfly_component_progress_Progress_.m_aria__java_lang_String__int__org_jboss_elemento_TypedBuilder(Aria.f_valueMax__org_patternfly_core_Aria, max);
  return this;
 }
 /** @nodts @return {Progress} */
 m_step__int__org_patternfly_component_progress_Progress(/** number */ step) {
  this.f_step__org_patternfly_component_progress_Progress_ = step;
  return this;
 }
 /** @nodts @return {Progress} */
 m_range__int__int__org_patternfly_component_progress_Progress(/** number */ min, /** number */ max) {
  return this.m_range__int__int__int__org_patternfly_component_progress_Progress(min, max, 1);
 }
 /** @nodts @return {Progress} */
 m_range__int__int__int__org_patternfly_component_progress_Progress(/** number */ min, /** number */ max, /** number */ step) {
  this.m_min__int__org_patternfly_component_progress_Progress(min);
  this.m_max__int__org_patternfly_component_progress_Progress(max);
  this.m_step__int__org_patternfly_component_progress_Progress(step);
  return this;
 }
 /** @nodts @return {Progress} */
 m_label__org_patternfly_component_progress_ProgressLabel__org_patternfly_component_progress_Progress(/** ProgressLabel */ label) {
  this.f_label__org_patternfly_component_progress_Progress_ = label;
  return this;
 }
 /** @nodts @return {Progress} */
 m_measureLocation__org_patternfly_component_progress_MeasureLocation__org_patternfly_component_progress_Progress(/** MeasureLocation */ location) {
  this.f_measureLocation__org_patternfly_component_progress_Progress_ = location;
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_measureElement__org_patternfly_component_progress_Progress_);
  this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([MeasureLocation.f_outside__org_patternfly_component_progress_MeasureLocation.f_modifier__org_patternfly_component_progress_MeasureLocation, MeasureLocation.f_inside__org_patternfly_component_progress_MeasureLocation.f_modifier__org_patternfly_component_progress_MeasureLocation], j_l_String)));
  if ($Equality.$same(location, MeasureLocation.f_inside__org_patternfly_component_progress_MeasureLocation) || $Equality.$same(location, MeasureLocation.f_outside__org_patternfly_component_progress_MeasureLocation)) {
   this.m_classList__org_jboss_elemento_ClassList().m_add__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([location.f_modifier__org_patternfly_component_progress_MeasureLocation], j_l_String)));
   if ($Equality.$same(location, MeasureLocation.f_inside__org_patternfly_component_progress_MeasureLocation)) {
    this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Size.f_lg__org_patternfly_style_Size.m_modifier__java_lang_String()], j_l_String)));
   }
  }
  if ($Equality.$same(location, MeasureLocation.f_top__org_patternfly_component_progress_MeasureLocation) || $Equality.$same(location, MeasureLocation.f_outside__org_patternfly_component_progress_MeasureLocation)) {
   this.f_statusElement__org_patternfly_component_progress_Progress_.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_measureElement__org_patternfly_component_progress_Progress_);
  } else if ($Equality.$same(location, MeasureLocation.f_inside__org_patternfly_component_progress_MeasureLocation)) {
   this.f_indicatorElement__org_patternfly_component_progress_Progress_.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_measureElement__org_patternfly_component_progress_Progress_);
  }
  return this;
 }
 /** @nodts @return {Progress} */
 m_size__org_patternfly_style_Size__org_patternfly_component_progress_Progress(/** Size */ size) {
  if (Validation.m_verifyEnum__java_lang_String__elemental2_dom_Element__java_lang_String__java_lang_Enum__java_lang_Enum__arrayOf_java_lang_Enum__boolean(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'size', size, Size.f_sm__org_patternfly_style_Size, /**@type {!Array<Size>}*/ ($Arrays.$init([Size.f_md__org_patternfly_style_Size, Size.f_lg__org_patternfly_style_Size], Size)))) {
   this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([size.m_modifier__java_lang_String()], j_l_String)));
  }
  return this;
 }
 /** @nodts @return {Progress} */
 m_status__org_patternfly_style_Status__org_patternfly_component_progress_Progress(/** Status */ status) {
  if (Validation.m_verifyEnum__java_lang_String__elemental2_dom_Element__java_lang_String__java_lang_Enum__java_lang_Enum__arrayOf_java_lang_Enum__boolean(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'status', status, Status.f_info__org_patternfly_style_Status, /**@type {!Array<Status>}*/ ($Arrays.$init([Status.f_danger__org_patternfly_style_Status, Status.f_success__org_patternfly_style_Status, Status.f_warning__org_patternfly_style_Status], Status)))) {
   if (!$Equality.$same(this.f_status__org_patternfly_component_progress_Progress_, null)) {
    this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([this.f_status__org_patternfly_component_progress_Progress_.f_modifier__org_patternfly_style_Status], j_l_String)));
   }
   if (!$Equality.$same(status, Status.f_info__org_patternfly_style_Status)) {
    this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([status.f_modifier__org_patternfly_style_Status], j_l_String)));
   }
   Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_iconContainer__org_patternfly_component_progress_Progress_);
   switch (status.ordinal()) {
    case Status.$ordinal_danger__org_patternfly_style_Status: 
     this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_progress_Progress().appendChild(fas.m_timesCircle__org_patternfly_icon_PredefinedIcon().m_element__org_jboss_elemento_svg_SVGElement());
     if (!$Equality.$same(this.f_helperText__org_patternfly_component_progress_Progress_, null)) {
      this.f_helperText__org_patternfly_component_progress_Progress_.m_firstItem__org_patternfly_component_help_HelperTextItem().m_status__org_patternfly_component_ValidationStatus__org_patternfly_component_help_HelperTextItem(ValidationStatus.f_error__org_patternfly_component_ValidationStatus);
     }
     break;
    case Status.$ordinal_warning__org_patternfly_style_Status: 
     this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_progress_Progress().appendChild(fas.m_exclamationTriangle__org_patternfly_icon_PredefinedIcon().m_element__org_jboss_elemento_svg_SVGElement());
     if (!$Equality.$same(this.f_helperText__org_patternfly_component_progress_Progress_, null)) {
      this.f_helperText__org_patternfly_component_progress_Progress_.m_firstItem__org_patternfly_component_help_HelperTextItem().m_status__org_patternfly_component_ValidationStatus__org_patternfly_component_help_HelperTextItem(ValidationStatus.f_warning__org_patternfly_component_ValidationStatus);
     }
     break;
    case Status.$ordinal_success__org_patternfly_style_Status: 
     this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_progress_Progress().appendChild(fas.m_checkCircle__org_patternfly_icon_PredefinedIcon().m_element__org_jboss_elemento_svg_SVGElement());
     if (!$Equality.$same(this.f_helperText__org_patternfly_component_progress_Progress_, null)) {
      this.f_helperText__org_patternfly_component_progress_Progress_.m_firstItem__org_patternfly_component_help_HelperTextItem().m_status__org_patternfly_component_ValidationStatus__org_patternfly_component_help_HelperTextItem(ValidationStatus.f_success__org_patternfly_component_ValidationStatus);
     }
     break;
    case Status.$ordinal_info__org_patternfly_style_Status: 
    case Status.$ordinal_custom__org_patternfly_style_Status: 
     break;
   }
   this.f_status__org_patternfly_component_progress_Progress_ = status;
  }
  return this;
 }
 /** @nodts @return {Progress} */
 m_title__java_lang_String__org_patternfly_component_progress_Progress(/** ?string */ title) {
  this.m_failSafeTitleElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_progress_Progress().textContent = title;
  return this;
 }
 /** @nodts @return {Progress} */
 m_truncate__org_patternfly_component_progress_Progress() {
  if (!$Equality.$same(this.f_titleElement__org_patternfly_component_progress_Progress_, null) && !this.f_titleElement__org_patternfly_component_progress_Progress_.classList.contains(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_truncate__org_patternfly_style_Classes))) {
   this.f_titleElement__org_patternfly_component_progress_Progress_.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_truncate__org_patternfly_style_Classes));
   this.m_element__elemental2_dom_HTMLElement().appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(Tooltip.m_tooltip__elemental2_dom_HTMLElement__java_lang_String__org_patternfly_component_tooltip_Tooltip(this.f_titleElement__org_patternfly_component_progress_Progress_, this.f_titleElement__org_patternfly_component_progress_Progress_.textContent).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  }
  return this;
 }
 /** @nodts @return {Progress} */
 m_value__int__org_patternfly_component_progress_Progress(/** number */ value) {
  this.f_value__org_patternfly_component_progress_Progress_.m_set__java_lang_Object__void(Integer.m_valueOf__int__java_lang_Integer(value));
  return this;
 }
 /** @nodts @return {Progress} */
 m_that__org_patternfly_component_progress_Progress() {
  return this;
 }
 /** @nodts @return {Progress} */
 m_ariaLabel__java_lang_String__org_patternfly_component_progress_Progress(/** ?string */ label) {
  this.f_progressbarElement__org_patternfly_component_progress_Progress_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  return this;
 }
 /** @nodts @return {Progress} */
 m_ariaLabeledBy__java_lang_String__org_patternfly_component_progress_Progress(/** ?string */ labeledBy) {
  this.f_progressbarElement__org_patternfly_component_progress_Progress_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, labeledBy);
  return this;
 }
 /** @nodts @return {Progress} */
 m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_progress_Progress(/** ChangeHandler<Progress, Integer> */ changeHandler) {
  this.f_changeHandler__org_patternfly_component_progress_Progress_ = changeHandler;
  return this;
 }
 /** @nodts */
 m_decrease__void() {
  let newValue = Math.max(this.f_min__org_patternfly_component_progress_Progress_, /**@type {Integer}*/ ($Casts.$to(this.f_value__org_patternfly_component_progress_Progress_.m_get__java_lang_Object(), Integer)).m_intValue__int() - this.f_step__org_patternfly_component_progress_Progress_ | 0);
  this.m_value__int__org_patternfly_component_progress_Progress(newValue);
 }
 /** @nodts */
 m_increase__void() {
  let newValue = Math.min(this.f_max__org_patternfly_component_progress_Progress_, /**@type {Integer}*/ ($Casts.$to(this.f_value__org_patternfly_component_progress_Progress_.m_get__java_lang_Object(), Integer)).m_intValue__int() + this.f_step__org_patternfly_component_progress_Progress_ | 0);
  this.m_value__int__org_patternfly_component_progress_Progress(newValue);
 }
 /** @nodts @return {number} */
 m_min__int() {
  return this.f_min__org_patternfly_component_progress_Progress_;
 }
 /** @nodts @return {number} */
 m_max__int() {
  return this.f_max__org_patternfly_component_progress_Progress_;
 }
 /** @nodts @return {number} */
 m_step__int() {
  return this.f_step__org_patternfly_component_progress_Progress_;
 }
 /** @nodts @return {Array<number>} */
 m_range__arrayOf_int() {
  return /**@type {!Array<number>}*/ ($Arrays.$init([this.f_min__org_patternfly_component_progress_Progress_, this.f_max__org_patternfly_component_progress_Progress_, this.f_step__org_patternfly_component_progress_Progress_], $$int));
 }
 /** @nodts @return {Integer} */
 m_value__java_lang_Integer() {
  return /**@type {Integer}*/ ($Casts.$to(this.f_value__org_patternfly_component_progress_Progress_.m_get__java_lang_Object(), Integer));
 }
 /** @nodts */
 m_onValueChanged__int__int__void_$p_org_patternfly_component_progress_Progress(/** number */ current, /** number */ previous) {
  this.f_measureElement__org_patternfly_component_progress_Progress_.textContent = this.f_label__org_patternfly_component_progress_Progress_.m_label__int__int__int__int__java_lang_String(this.f_min__org_patternfly_component_progress_Progress_, this.f_max__org_patternfly_component_progress_Progress_, this.f_step__org_patternfly_component_progress_Progress_, current);
  this.f_progressbarElement__org_patternfly_component_progress_Progress_.m_aria__java_lang_String__int__org_jboss_elemento_TypedBuilder(Aria.f_valueNow__org_patternfly_core_Aria, current);
  this.f_indicatorElement__org_patternfly_component_progress_Progress_.m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('width', Numbers.m_percentage__double__double__double__double(current, this.f_min__org_patternfly_component_progress_Progress_, this.f_max__org_patternfly_component_progress_Progress_) + '%');
  if (!$Equality.$same(this.f_changeHandler__org_patternfly_component_progress_Progress_, null) && current != previous) {
   this.f_changeHandler__org_patternfly_component_progress_Progress_.m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(new Event(''), this, /**@type {Integer}*/ ($Casts.$to(this.f_value__org_patternfly_component_progress_Progress_.m_get__java_lang_Object(), Integer)));
  }
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeTitleElement__elemental2_dom_HTMLElement_$p_org_patternfly_component_progress_Progress() {
  if ($Equality.$same(this.f_titleElement__org_patternfly_component_progress_Progress_, null)) {
   this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_singleline__org_patternfly_style_Classes)], j_l_String)));
   let id = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.m_componentType__org_patternfly_component_ComponentType().f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['description'], j_l_String)));
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement(), this.f_titleElement__org_patternfly_component_progress_Progress_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_progress__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_description__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(id), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
   this.f_progressbarElement__org_patternfly_component_progress_Progress_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, id);
  }
  return this.f_titleElement__org_patternfly_component_progress_Progress_;
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_component_progress_Progress() {
  if ($Equality.$same(this.f_iconContainer__org_patternfly_component_progress_Progress_, null)) {
   this.f_statusElement__org_patternfly_component_progress_Progress_.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_iconContainer__org_patternfly_component_progress_Progress_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_progress__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_status__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  }
  return this.f_iconContainer__org_patternfly_component_progress_Progress_;
 }
 //Bridge method.
 /** @final @override @nodts @return {Integer} */
 m_value__java_lang_Object() {
  return this.m_value__java_lang_Integer();
 }
 //Bridge method.
 /** @final @override @nodts @return {Progress} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_progress_Progress();
 }
 //Bridge method.
 /** @final @override @nodts @return {Progress} */
 m_title__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_title__java_lang_String__org_patternfly_component_progress_Progress(arg0);
 }
 /** @nodts */
 static $clinit() {
  Progress.$clinit = () =>{};
  Progress.$loadModules();
  BaseComponentFlat.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Progress;
 }
 
 /** @nodts */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  ValidationStatus = goog.module.get('org.patternfly.component.ValidationStatus$impl');
  MeasureLocation = goog.module.get('org.patternfly.component.progress.MeasureLocation$impl');
  ProgressLabel = goog.module.get('org.patternfly.component.progress.ProgressLabel$impl');
  Tooltip = goog.module.get('org.patternfly.component.tooltip.Tooltip$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Numbers = goog.module.get('org.patternfly.core.Numbers$impl');
  ObservableValue = goog.module.get('org.patternfly.core.ObservableValue$impl');
  Subscriber = goog.module.get('org.patternfly.core.ObservableValue.Subscriber$impl');
  Validation = goog.module.get('org.patternfly.core.Validation$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  Status = goog.module.get('org.patternfly.style.Status$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $$int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
HasValue.$markImplementor(Progress);
$Util.$setClassMetadata(Progress, 'org.patternfly.component.progress.Progress');

exports = Progress;

//# sourceMappingURL=Progress.js.map

goog.module('org.patternfly.component.truncate.Truncate$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponentFlat = goog.require('org.patternfly.component.BaseComponentFlat$impl');
const WithText = goog.require('org.patternfly.component.WithText$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Tooltip = goog.forwardDeclare('org.patternfly.component.tooltip.Tooltip$impl');
let TruncatePosition = goog.forwardDeclare('org.patternfly.component.truncate.TruncatePosition$impl');
let ObservableValue = goog.forwardDeclare('org.patternfly.core.ObservableValue$impl');
let Subscriber = goog.forwardDeclare('org.patternfly.core.ObservableValue.Subscriber$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponentFlat<HTMLElement, Truncate>}
 * @implements {WithText<HTMLElement, Truncate>}
 */
class Truncate extends BaseComponentFlat {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Tooltip} @nodts*/
  this.f_tooltip__org_patternfly_component_truncate_Truncate_;
  /**@type {ObservableValue<TruncatePosition>} @nodts*/
  this.f_position__org_patternfly_component_truncate_Truncate_;
  /**@type {?string} @nodts*/
  this.f_text__org_patternfly_component_truncate_Truncate_;
  /**@type {number} @nodts*/
  this.f_trailingNumChars__org_patternfly_component_truncate_Truncate_ = 0;
  /**@type {HTMLContainerBuilder<HTMLElement>} @nodts*/
  this.f_primaryTextElement__org_patternfly_component_truncate_Truncate_;
  /**@type {HTMLContainerBuilder<HTMLElement>} @nodts*/
  this.f_secondaryTextElement__org_patternfly_component_truncate_Truncate_;
 }
 /** @nodts @return {Truncate} */
 static m_truncate__java_lang_String__org_patternfly_component_truncate_Truncate(/** ?string */ text) {
  Truncate.$clinit();
  return Truncate.$create__java_lang_String__org_patternfly_component_truncate_TruncatePosition(text, TruncatePosition.f_end__org_patternfly_component_truncate_TruncatePosition);
 }
 /** @nodts @return {Truncate} */
 static m_truncate__java_lang_String__org_patternfly_component_truncate_TruncatePosition__org_patternfly_component_truncate_Truncate(/** ?string */ text, /** TruncatePosition */ position) {
  Truncate.$clinit();
  return Truncate.$create__java_lang_String__org_patternfly_component_truncate_TruncatePosition(text, position);
 }
 /** @nodts @return {!Truncate} */
 static $create__java_lang_String__org_patternfly_component_truncate_TruncatePosition(/** ?string */ text, /** TruncatePosition */ position) {
  Truncate.$clinit();
  let $instance = new Truncate();
  $instance.$ctor__org_patternfly_component_truncate_Truncate__java_lang_String__org_patternfly_component_truncate_TruncatePosition__void(text, position);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_truncate_Truncate__java_lang_String__org_patternfly_component_truncate_TruncatePosition__void(/** ?string */ text, /** TruncatePosition */ position) {
  this.$ctor__org_patternfly_component_BaseComponentFlat__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Truncate__org_patternfly_component_ComponentType, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_truncate__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  this.f_text__org_patternfly_component_truncate_Truncate_ = text;
  this.f_trailingNumChars__org_patternfly_component_truncate_Truncate_ = 7;
  this.f_position__org_patternfly_component_truncate_Truncate_ = /**@type {ObservableValue<TruncatePosition>}*/ (ObservableValue.m_ov__java_lang_Object__org_patternfly_core_ObservableValue(position)).m_subscribe__org_patternfly_core_ObservableValue_Subscriber__org_patternfly_core_ObservableValue(Subscriber.$adapt((arg0, arg1) =>{
   let arg0_1 = /**@type {TruncatePosition}*/ ($Casts.$to(arg0, TruncatePosition));
   let arg1_1 = /**@type {TruncatePosition}*/ ($Casts.$to(arg1, TruncatePosition));
   this.m_internalUpdate__org_patternfly_component_truncate_TruncatePosition__org_patternfly_component_truncate_TruncatePosition__void_$p_org_patternfly_component_truncate_Truncate(arg0_1, arg1_1);
  }));
  this.f_tooltip__org_patternfly_component_truncate_Truncate_ = Tooltip.m_tooltip__elemental2_dom_HTMLElement__org_patternfly_component_tooltip_Tooltip(this.m_element__elemental2_dom_HTMLElement());
  this.m_element__elemental2_dom_HTMLElement().appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(this.f_tooltip__org_patternfly_component_truncate_Truncate_.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.m_internalUpdate__org_patternfly_component_truncate_TruncatePosition__org_patternfly_component_truncate_TruncatePosition__void_$p_org_patternfly_component_truncate_Truncate(position, null);
 }
 /** @nodts @return {Truncate} */
 m_position__org_patternfly_component_truncate_TruncatePosition__org_patternfly_component_truncate_Truncate(/** TruncatePosition */ position) {
  this.f_position__org_patternfly_component_truncate_Truncate_.m_set__java_lang_Object__void(position);
  return this;
 }
 /** @nodts @return {Truncate} */
 m_text__java_lang_String__org_patternfly_component_truncate_Truncate(/** ?string */ text) {
  if (!Objects.m_equals__java_lang_String__java_lang_String__boolean(this.f_text__org_patternfly_component_truncate_Truncate_, text)) {
   this.f_text__org_patternfly_component_truncate_Truncate_ = text;
   this.m_updateText__java_lang_String__void_$p_org_patternfly_component_truncate_Truncate(text);
  }
  return this;
 }
 /** @nodts @return {Truncate} */
 m_trailingNumChars__int__org_patternfly_component_truncate_Truncate(/** number */ trailingNumChars) {
  if (this.f_trailingNumChars__org_patternfly_component_truncate_Truncate_ != trailingNumChars && $Equality.$same(this.f_position__org_patternfly_component_truncate_Truncate_.m_get__java_lang_Object(), TruncatePosition.f_middle__org_patternfly_component_truncate_TruncatePosition)) {
   this.f_trailingNumChars__org_patternfly_component_truncate_Truncate_ = trailingNumChars;
   this.m_updateText__java_lang_String__void_$p_org_patternfly_component_truncate_Truncate(this.f_text__org_patternfly_component_truncate_Truncate_);
  }
  return this;
 }
 /** @nodts @return {Truncate} */
 m_that__org_patternfly_component_truncate_Truncate() {
  return this;
 }
 /** @nodts */
 m_internalUpdate__org_patternfly_component_truncate_TruncatePosition__org_patternfly_component_truncate_TruncatePosition__void_$p_org_patternfly_component_truncate_Truncate(/** TruncatePosition */ current, /** TruncatePosition */ previous) {
  switch (current.ordinal()) {
   case TruncatePosition.$ordinal_start__org_patternfly_component_truncate_TruncatePosition: 
   case TruncatePosition.$ordinal_end__org_patternfly_component_truncate_TruncatePosition: 
    this.m_reset__void_$p_org_patternfly_component_truncate_Truncate();
    this.m_failSafePrimaryTextElement__org_jboss_elemento_HTMLContainerBuilder_$p_org_patternfly_component_truncate_Truncate().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_truncate__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([current.f_suffix__org_patternfly_component_truncate_TruncatePosition], j_l_String)))], j_l_String)));
    this.m_updatePrimaryText__java_lang_String__void_$p_org_patternfly_component_truncate_Truncate(this.f_text__org_patternfly_component_truncate_Truncate_);
    break;
   case TruncatePosition.$ordinal_middle__org_patternfly_component_truncate_TruncatePosition: 
    this.m_updateMiddleText__java_lang_String__void_$p_org_patternfly_component_truncate_Truncate(this.f_text__org_patternfly_component_truncate_Truncate_);
    break;
  }
  this.f_tooltip__org_patternfly_component_truncate_Truncate_.m_text__java_lang_String__org_patternfly_component_tooltip_Tooltip(this.f_text__org_patternfly_component_truncate_Truncate_);
 }
 /** @nodts */
 m_updateText__java_lang_String__void_$p_org_patternfly_component_truncate_Truncate(/** ?string */ text) {
  if (!$Equality.$same(text, null)) {
   switch (/**@type {TruncatePosition}*/ ($Casts.$to(this.f_position__org_patternfly_component_truncate_Truncate_.m_get__java_lang_Object(), TruncatePosition)).ordinal()) {
    case TruncatePosition.$ordinal_start__org_patternfly_component_truncate_TruncatePosition: 
     this.m_updatePrimaryText__java_lang_String__void_$p_org_patternfly_component_truncate_Truncate(text);
     break;
    case TruncatePosition.$ordinal_middle__org_patternfly_component_truncate_TruncatePosition: 
     break;
    case TruncatePosition.$ordinal_end__org_patternfly_component_truncate_TruncatePosition: 
     this.m_failSafePrimaryTextElement__org_jboss_elemento_HTMLContainerBuilder_$p_org_patternfly_component_truncate_Truncate().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text);
     break;
   }
   this.f_tooltip__org_patternfly_component_truncate_Truncate_.m_text__java_lang_String__org_patternfly_component_tooltip_Tooltip(text);
  }
 }
 /** @nodts */
 m_updatePrimaryText__java_lang_String__void_$p_org_patternfly_component_truncate_Truncate(/** ?string */ text) {
  this.m_failSafePrimaryTextElement__org_jboss_elemento_HTMLContainerBuilder_$p_org_patternfly_component_truncate_Truncate().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text);
  if ($Equality.$same(this.f_position__org_patternfly_component_truncate_Truncate_.m_get__java_lang_Object(), TruncatePosition.f_end__org_patternfly_component_truncate_TruncatePosition)) {
   this.m_failSafePrimaryTextElement__org_jboss_elemento_HTMLContainerBuilder_$p_org_patternfly_component_truncate_Truncate().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(text);
  } else if ($Equality.$same(this.f_position__org_patternfly_component_truncate_Truncate_.m_get__java_lang_Object(), TruncatePosition.f_start__org_patternfly_component_truncate_TruncatePosition)) {
   let safeHtml = SafeHtmlBuilder.$create__().m_appendEscaped__java_lang_String__org_gwtproject_safehtml_shared_SafeHtmlBuilder(text).m_appendHtmlConstant__java_lang_String__org_gwtproject_safehtml_shared_SafeHtmlBuilder('&lrm;').m_toSafeHtml__org_gwtproject_safehtml_shared_SafeHtml();
   this.m_failSafePrimaryTextElement__org_jboss_elemento_HTMLContainerBuilder_$p_org_patternfly_component_truncate_Truncate().m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml__org_jboss_elemento_TypedBuilder(safeHtml);
  }
 }
 /** @nodts */
 m_updateMiddleText__java_lang_String__void_$p_org_patternfly_component_truncate_Truncate(/** ?string */ text) {
  this.m_reset__void_$p_org_patternfly_component_truncate_Truncate();
  let length = j_l_String.m_length__java_lang_String__int(text) - this.f_trailingNumChars__org_patternfly_component_truncate_Truncate_ | 0;
  let first = j_l_String.m_substring__java_lang_String__int__int__java_lang_String(text, 0, length);
  let second = j_l_String.m_substring__java_lang_String__int__java_lang_String(text, length);
  if (j_l_String.m_length__java_lang_String__int(first) > Truncate.f_MIN_WIDTH_CHARACTERS__org_patternfly_component_truncate_Truncate_) {
   /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(this.m_failSafePrimaryTextElement__org_jboss_elemento_HTMLContainerBuilder_$p_org_patternfly_component_truncate_Truncate().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_truncate__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_start__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(first);
   /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(this.m_failSafeSecondaryTextElement__org_jboss_elemento_HTMLContainerBuilder_$p_org_patternfly_component_truncate_Truncate().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_truncate__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_end__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_substring__java_lang_String__int__java_lang_String(text, j_l_String.m_length__java_lang_String__int(text) - this.f_trailingNumChars__org_patternfly_component_truncate_Truncate_ | 0));
  } else {
   this.m_element__elemental2_dom_HTMLElement().textContent = text;
  }
 }
 /** @nodts */
 m_reset__void_$p_org_patternfly_component_truncate_Truncate() {
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_primaryTextElement__org_patternfly_component_truncate_Truncate_);
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_secondaryTextElement__org_patternfly_component_truncate_Truncate_);
  this.f_primaryTextElement__org_patternfly_component_truncate_Truncate_ = null;
  this.f_secondaryTextElement__org_patternfly_component_truncate_Truncate_ = null;
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 m_failSafePrimaryTextElement__org_jboss_elemento_HTMLContainerBuilder_$p_org_patternfly_component_truncate_Truncate() {
  if ($Equality.$same(this.f_primaryTextElement__org_patternfly_component_truncate_Truncate_, null)) {
   this.f_primaryTextElement__org_patternfly_component_truncate_Truncate_ = Elements.m_span__org_jboss_elemento_HTMLContainerBuilder();
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement(), this.f_primaryTextElement__org_patternfly_component_truncate_Truncate_.m_element__elemental2_dom_HTMLElement());
  }
  return this.f_primaryTextElement__org_patternfly_component_truncate_Truncate_;
 }
 /** @nodts @return {HTMLContainerBuilder<HTMLElement>} */
 m_failSafeSecondaryTextElement__org_jboss_elemento_HTMLContainerBuilder_$p_org_patternfly_component_truncate_Truncate() {
  if ($Equality.$same(this.f_secondaryTextElement__org_patternfly_component_truncate_Truncate_, null)) {
   this.f_secondaryTextElement__org_patternfly_component_truncate_Truncate_ = Elements.m_span__org_jboss_elemento_HTMLContainerBuilder();
   Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(this.f_secondaryTextElement__org_patternfly_component_truncate_Truncate_.m_element__elemental2_dom_HTMLElement(), this.f_primaryTextElement__org_patternfly_component_truncate_Truncate_.m_element__elemental2_dom_HTMLElement());
  }
  return this.f_secondaryTextElement__org_patternfly_component_truncate_Truncate_;
 }
 //Bridge method.
 /** @final @override @nodts @return {Truncate} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_truncate_Truncate();
 }
 //Bridge method.
 /** @final @override @nodts @return {Truncate} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return this.m_text__java_lang_String__org_patternfly_component_truncate_Truncate(arg0);
 }
 /** @nodts */
 static $clinit() {
  Truncate.$clinit = () =>{};
  Truncate.$loadModules();
  BaseComponentFlat.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Truncate;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SafeHtmlBuilder = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Tooltip = goog.module.get('org.patternfly.component.tooltip.Tooltip$impl');
  TruncatePosition = goog.module.get('org.patternfly.component.truncate.TruncatePosition$impl');
  ObservableValue = goog.module.get('org.patternfly.core.ObservableValue$impl');
  Subscriber = goog.module.get('org.patternfly.core.ObservableValue.Subscriber$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {number} @nodts*/
Truncate.f_MIN_WIDTH_CHARACTERS__org_patternfly_component_truncate_Truncate_ = 12;
WithText.$markImplementor(Truncate);
$Util.$setClassMetadata(Truncate, 'org.patternfly.component.truncate.Truncate');

exports = Truncate;

//# sourceMappingURL=Truncate.js.map

goog.module('org.patternfly.component.slider.Slider$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponentFlat = goog.require('org.patternfly.component.BaseComponentFlat$impl');
const HasValue = goog.require('org.patternfly.component.HasValue$impl');
const Disabled = goog.require('org.patternfly.style.Modifiers.Disabled$impl');

let AddEventListenerOptions_$Overlay = goog.forwardDeclare('elemental2.dom.AddEventListenerOptions.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let FocusEvent_$Overlay = goog.forwardDeclare('elemental2.dom.FocusEvent.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let KeyboardEvent_$Overlay = goog.forwardDeclare('elemental2.dom.KeyboardEvent.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let TouchEvent_$Overlay = goog.forwardDeclare('elemental2.dom.TouchEvent.$Overlay$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let j_l_Math = goog.forwardDeclare('java.lang.Math$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let InputElementBuilder = goog.forwardDeclare('org.jboss.elemento.InputElementBuilder$impl');
let Key = goog.forwardDeclare('org.jboss.elemento.Key$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let TextInput = goog.forwardDeclare('org.patternfly.component.form.TextInput$impl');
let InputGroup = goog.forwardDeclare('org.patternfly.component.inputgroup.InputGroup$impl');
let SliderActions = goog.forwardDeclare('org.patternfly.component.slider.SliderActions$impl');
let SliderInputPosition = goog.forwardDeclare('org.patternfly.component.slider.SliderInputPosition$impl');
let SliderStep = goog.forwardDeclare('org.patternfly.component.slider.SliderStep$impl');
let SliderSteps = goog.forwardDeclare('org.patternfly.component.slider.SliderSteps$impl');
let Tooltip = goog.forwardDeclare('org.patternfly.component.tooltip.Tooltip$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let LanguageDirection = goog.forwardDeclare('org.patternfly.core.LanguageDirection$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let Numbers = goog.forwardDeclare('org.patternfly.core.Numbers$impl');
let ObservableValue = goog.forwardDeclare('org.patternfly.core.ObservableValue$impl');
let Subscriber = goog.forwardDeclare('org.patternfly.core.ObservableValue.Subscriber$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let Variables = goog.forwardDeclare('org.patternfly.style.Variables$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @extends {BaseComponentFlat<HTMLElement, Slider>}
 * @implements {Disabled<HTMLElement, Slider>}
 * @implements {HasValue<?number>}
 * @implements {Attachable}
 */
class Slider extends BaseComponentFlat {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {ObservableValue<?number>} @nodts*/
  this.f_value__org_patternfly_component_slider_Slider_;
  /**@type {HTMLContainerBuilder<HTMLDivElement>} @nodts*/
  this.f_main__org_patternfly_component_slider_Slider_;
  /**@type {HTMLContainerBuilder<HTMLDivElement>} @nodts*/
  this.f_thumb__org_patternfly_component_slider_Slider_;
  /**@type {HTMLContainerBuilder<HTMLDivElement>} @nodts*/
  this.f_sliderRail__org_patternfly_component_slider_Slider_;
  /**@type {HTMLContainerBuilder<HTMLDivElement>} @nodts*/
  this.f_stepsContainer__org_patternfly_component_slider_Slider_;
  /**@type {List<SliderActions>} @nodts*/
  this.f_actions__org_patternfly_component_slider_Slider_;
  /**@type {number} @nodts*/
  this.f_min__org_patternfly_component_slider_Slider_ = 0;
  /**@type {number} @nodts*/
  this.f_max__org_patternfly_component_slider_Slider_ = 0;
  /**@type {number} @nodts*/
  this.f_step__org_patternfly_component_slider_Slider_ = 0;
  /**@type {number} @nodts*/
  this.f_diff__org_patternfly_component_slider_Slider_ = 0;
  /**@type {boolean} @nodts*/
  this.f_rtl__org_patternfly_component_slider_Slider_ = false;
  /**@type {boolean} @nodts*/
  this.f_disabled__org_patternfly_component_slider_Slider_ = false;
  /**@type {boolean} @nodts*/
  this.f_showTicks__org_patternfly_component_slider_Slider_ = false;
  /**@type {boolean} @nodts*/
  this.f_tooltipOnThumb__org_patternfly_component_slider_Slider_ = false;
  /**@type {boolean} @nodts*/
  this.f_showBoundaries__org_patternfly_component_slider_Slider_ = false;
  /**@type {boolean} @nodts*/
  this.f_continuousCustomSteps__org_patternfly_component_slider_Slider_ = false;
  /**@type {Tooltip} @nodts*/
  this.f_tooltip__org_patternfly_component_slider_Slider_;
  /**@type {TextInput} @nodts*/
  this.f_textInput__org_patternfly_component_slider_Slider_;
  /**@type {InputGroup} @nodts*/
  this.f_inputGroup__org_patternfly_component_slider_Slider_;
  /**@type {SliderSteps} @nodts*/
  this.f_customSteps__org_patternfly_component_slider_Slider_;
  /**@type {ChangeHandler<Slider, ?number>} @nodts*/
  this.f_changeHandler__org_patternfly_component_slider_Slider_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_mouseMoveHandler__org_patternfly_component_slider_Slider_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_mouseUpHandler__org_patternfly_component_slider_Slider_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_touchMoveHandler__org_patternfly_component_slider_Slider_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_touchEndHandler__org_patternfly_component_slider_Slider_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_touchCancelHandler__org_patternfly_component_slider_Slider_;
 }
 /** @nodts @template N @return {Slider} */
 static m_slider__org_patternfly_component_slider_Slider() {
  Slider.$clinit();
  return Slider.$create__();
 }
 /** @nodts @return {!Slider} */
 static $create__() {
  Slider.$clinit();
  let $instance = new Slider();
  $instance.$ctor__org_patternfly_component_slider_Slider__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_slider_Slider__void() {
  this.$ctor__org_patternfly_component_BaseComponentFlat__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Slider__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_slider__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_value__org_patternfly_component_slider_Slider_ = /**@type {ObservableValue<?number>}*/ (ObservableValue.m_ov__java_lang_Object__org_patternfly_core_ObservableValue(0));
  this.f_min__org_patternfly_component_slider_Slider_ = 0;
  this.f_max__org_patternfly_component_slider_Slider_ = 100;
  this.f_step__org_patternfly_component_slider_Slider_ = 1;
  this.f_showBoundaries__org_patternfly_component_slider_Slider_ = true;
  this.f_actions__org_patternfly_component_slider_Slider_ = /**@type {!ArrayList<SliderActions>}*/ (ArrayList.$create__());
  this.f_main__org_patternfly_component_slider_Slider_ = /**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_slider__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_main__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_sliderRail__org_patternfly_component_slider_Slider_ = /**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_slider__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_rail__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (arg0) =>{
   let arg0_1 = /**@type {MouseEvent}*/ ($Casts.$to(arg0, MouseEvent_$Overlay));
   this.m_handleRailClick__elemental2_dom_Event__void_$p_org_patternfly_component_slider_Slider(arg0_1);
  }), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_slider__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_rail__org_patternfly_style_Classes, Classes.f_track__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_stepsContainer__org_patternfly_component_slider_Slider_ = /**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_slider__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_steps__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_thumb__org_patternfly_component_slider_Slider_ = /**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_slider__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_thumb__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((e) =>{
   let e_1 = /**@type {HTMLDivElement}*/ ($Casts.$to(e, $Overlay));
   e_1.tabIndex = 0;
  })), HTMLContainerBuilder)).m_attr__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Attributes.f_role__org_patternfly_core_Attributes, 'slider'), HTMLContainerBuilder)).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Value'), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_disabled__org_patternfly_core_Aria, false), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_mousedown__org_jboss_elemento_EventType, (arg0_2) =>{
   let arg0_3 = /**@type {MouseEvent}*/ ($Casts.$to(arg0_2, MouseEvent_$Overlay));
   this.m_handleThumbMouseDown__elemental2_dom_MouseEvent__void_$p_org_patternfly_component_slider_Slider(arg0_3);
  }), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_touchstart__org_jboss_elemento_EventType, (arg0_4) =>{
   let arg0_5 = /**@type {TouchEvent}*/ ($Casts.$to(arg0_4, TouchEvent_$Overlay));
   this.m_handleThumbTouchStart__elemental2_dom_TouchEvent__void_$p_org_patternfly_component_slider_Slider(arg0_5);
  }), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (arg0_6) =>{
   let arg0_7 = /**@type {MouseEvent}*/ ($Casts.$to(arg0_6, MouseEvent_$Overlay));
   this.m_handleThumbClick__elemental2_dom_Event__void_$p_org_patternfly_component_slider_Slider(arg0_7);
  }), HTMLContainerBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_keydown__org_jboss_elemento_EventType, (arg0_8) =>{
   let arg0_9 = /**@type {KeyboardEvent}*/ ($Casts.$to(arg0_8, KeyboardEvent_$Overlay));
   this.m_handleThumbKeys__elemental2_dom_KeyboardEvent__void_$p_org_patternfly_component_slider_Slider(arg0_9);
  }), HTMLContainerBuilder))), HTMLContainerBuilder));
  this.m_element__elemental2_dom_HTMLElement().appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(this.f_main__org_patternfly_component_slider_Slider_.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_storeFlatComponent__void();
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  this.f_rtl__org_patternfly_component_slider_Slider_ = $Equality.$same(LanguageDirection.m_languageDirection__elemental2_dom_HTMLElement__org_patternfly_core_LanguageDirection(this.m_element__elemental2_dom_HTMLElement()), LanguageDirection.f_rtl__org_patternfly_core_LanguageDirection);
  Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(this.f_stepsContainer__org_patternfly_component_slider_Slider_, !$Equality.$same(this.f_customSteps__org_patternfly_component_slider_Slider_, null) || this.f_showBoundaries__org_patternfly_component_slider_Slider_ || this.f_showTicks__org_patternfly_component_slider_Slider_);
  if (!$Equality.$same(this.f_customSteps__org_patternfly_component_slider_Slider_, null)) {
   this.f_thumb__org_patternfly_component_slider_Slider_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_valueMin__org_patternfly_core_Aria, j_l_String.m_valueOf__double__java_lang_String(this.f_customSteps__org_patternfly_component_slider_Slider_.m_firstValue__double_$pp_org_patternfly_component_slider()));
   this.f_thumb__org_patternfly_component_slider_Slider_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_valueMax__org_patternfly_core_Aria, j_l_String.m_valueOf__double__java_lang_String(this.f_customSteps__org_patternfly_component_slider_Slider_.m_lastValue__double_$pp_org_patternfly_component_slider()));
   for (let $iterator = this.f_customSteps__org_patternfly_component_slider_Slider_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let step = /**@type {SliderStep}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), SliderStep));
    {
     let stepElement = /**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_slider__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_step__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_sliderStepValue__org_patternfly_core_Dataset, j_l_String.m_valueOf__double__java_lang_String(step.f_value__org_patternfly_component_slider_SliderStep)), HTMLContainerBuilder));
     Slider.f_sliderStepLeft__org_patternfly_component_slider_Slider_.m_applyTo__org_jboss_elemento_HasHTMLElement__java_lang_String__org_jboss_elemento_TypedBuilder(stepElement, step.m_percentage__double_$pp_org_patternfly_component_slider() + '%');
     stepElement.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_slider__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_step__org_patternfly_style_Classes, Classes.f_tick__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)));
     if (!step.f_labelHidden__org_patternfly_component_slider_SliderStep) {
      stepElement.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_slider__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_step__org_patternfly_style_Classes, Classes.f_label__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(step.f_label__org_patternfly_component_slider_SliderStep), HTMLContainerBuilder)));
     }
     this.f_stepsContainer__org_patternfly_component_slider_Slider_.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(stepElement);
    }
   }
  } else {
   this.f_thumb__org_patternfly_component_slider_Slider_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_valueMin__org_patternfly_core_Aria, j_l_String.m_valueOf__double__java_lang_String(this.f_min__org_patternfly_component_slider_Slider_));
   this.f_thumb__org_patternfly_component_slider_Slider_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_valueMax__org_patternfly_core_Aria, j_l_String.m_valueOf__double__java_lang_String(this.f_max__org_patternfly_component_slider_Slider_));
   if (this.f_showBoundaries__org_patternfly_component_slider_Slider_ || this.f_showTicks__org_patternfly_component_slider_Slider_) {
    for (let index = this.f_min__org_patternfly_component_slider_Slider_; index <= this.f_max__org_patternfly_component_slider_Slider_; index += this.f_step__org_patternfly_component_slider_Slider_) {
     if (!this.f_showTicks__org_patternfly_component_slider_Slider_ && this.f_showBoundaries__org_patternfly_component_slider_Slider_ && index != this.f_min__org_patternfly_component_slider_Slider_ && index != this.f_max__org_patternfly_component_slider_Slider_) {
      continue;
     }
     let stepElement_1 = /**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_slider__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_step__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_sliderStepValue__org_patternfly_core_Dataset, j_l_String.m_valueOf__double__java_lang_String(index)), HTMLContainerBuilder));
     Slider.f_sliderStepLeft__org_patternfly_component_slider_Slider_.m_applyTo__org_jboss_elemento_HasHTMLElement__java_lang_String__org_jboss_elemento_TypedBuilder(stepElement_1, Numbers.m_percentage__double__double__double__double(index, this.f_min__org_patternfly_component_slider_Slider_, this.f_max__org_patternfly_component_slider_Slider_) + '%');
     if (this.f_showTicks__org_patternfly_component_slider_Slider_) {
      stepElement_1.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_slider__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_step__org_patternfly_style_Classes, Classes.f_tick__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)));
     }
     if (this.f_showBoundaries__org_patternfly_component_slider_Slider_ && (index == this.f_min__org_patternfly_component_slider_Slider_ || index == this.f_max__org_patternfly_component_slider_Slider_)) {
      stepElement_1.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_slider__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_step__org_patternfly_style_Classes, Classes.f_label__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(j_l_String.m_valueOf__double__java_lang_String(index)), HTMLContainerBuilder)));
     }
     this.f_stepsContainer__org_patternfly_component_slider_Slider_.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(stepElement_1);
    }
   }
  }
  if (this.f_tooltipOnThumb__org_patternfly_component_slider_Slider_) {
   this.f_tooltip__org_patternfly_component_slider_Slider_ = Tooltip.m_tooltip__elemental2_dom_HTMLElement__org_patternfly_component_tooltip_Tooltip(/**@type {HTMLDivElement}*/ ($Casts.$to(this.f_thumb__org_patternfly_component_slider_Slider_.m_element__elemental2_dom_HTMLElement(), $Overlay))).m_entryDelay__int__org_patternfly_component_tooltip_Tooltip(0).m_appendToBody__org_patternfly_component_tooltip_Tooltip();
  }
  if (this.f_disabled__org_patternfly_component_slider_Slider_) {
   this.m_disabledInternal__boolean__void_$p_org_patternfly_component_slider_Slider(true);
  }
  this.f_value__org_patternfly_component_slider_Slider_.m_subscribe__org_patternfly_core_ObservableValue_Subscriber__org_patternfly_core_ObservableValue(Subscriber.$adapt((arg0, arg1) =>{
   let arg0_1 = /**@type {?number}*/ ($Casts.$to(arg0, Double));
   let arg1_1 = /**@type {?number}*/ ($Casts.$to(arg1, Double));
   this.m_onValueChanged__double__double__void_$p_org_patternfly_component_slider_Slider(Double.m_doubleValue__java_lang_Double__double(arg0_1), Double.m_doubleValue__java_lang_Double__double(arg1_1));
  }));
  this.f_value__org_patternfly_component_slider_Slider_.m_publish__void();
 }
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_tooltip__org_patternfly_component_slider_Slider_);
  if (!$Equality.$same(this.f_mouseMoveHandler__org_patternfly_component_slider_Slider_, null)) {
   this.f_mouseMoveHandler__org_patternfly_component_slider_Slider_.m_removeHandler__void();
  }
  if (!$Equality.$same(this.f_mouseUpHandler__org_patternfly_component_slider_Slider_, null)) {
   this.f_mouseUpHandler__org_patternfly_component_slider_Slider_.m_removeHandler__void();
  }
  if (!$Equality.$same(this.f_touchMoveHandler__org_patternfly_component_slider_Slider_, null)) {
   this.f_touchMoveHandler__org_patternfly_component_slider_Slider_.m_removeHandler__void();
  }
  if (!$Equality.$same(this.f_touchEndHandler__org_patternfly_component_slider_Slider_, null)) {
   this.f_touchEndHandler__org_patternfly_component_slider_Slider_.m_removeHandler__void();
  }
  if (!$Equality.$same(this.f_touchCancelHandler__org_patternfly_component_slider_Slider_, null)) {
   this.f_touchCancelHandler__org_patternfly_component_slider_Slider_.m_removeHandler__void();
  }
 }
 /** @nodts @return {Slider} */
 m_addStartActions__org_patternfly_component_slider_SliderActions__org_patternfly_component_slider_Slider(/** SliderActions */ actions) {
  Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(this.m_element__elemental2_dom_HTMLElement(), /**@type {HTMLDivElement}*/ ($Casts.$to(actions.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_actions__org_patternfly_component_slider_Slider_.add(actions);
  return this;
 }
 /** @nodts @return {Slider} */
 m_addEndActions__org_patternfly_component_slider_SliderActions__org_patternfly_component_slider_Slider(/** SliderActions */ actions) {
  this.m_element__elemental2_dom_HTMLElement().appendChild(/**@type {HTMLDivElement}*/ ($Casts.$to(actions.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.f_actions__org_patternfly_component_slider_Slider_.add(actions);
  return this;
 }
 /** @nodts @return {Slider} */
 m_addValueInput__org_patternfly_component_form_TextInput__org_patternfly_component_slider_Slider(/** TextInput */ valueInput) {
  return this.m_addValueInput__org_patternfly_component_form_TextInput__org_patternfly_component_slider_SliderInputPosition__org_patternfly_component_slider_Slider(valueInput, SliderInputPosition.f_end__org_patternfly_component_slider_SliderInputPosition);
 }
 /** @nodts @return {Slider} */
 m_addValueInput__org_patternfly_component_form_TextInput__org_patternfly_component_slider_SliderInputPosition__org_patternfly_component_slider_Slider(/** TextInput */ textInput, /** SliderInputPosition */ inputPosition) {
  if ($Equality.$same(this.f_textInput__org_patternfly_component_slider_Slider_, null)) {
   this.m_bindValueInput__org_patternfly_component_form_TextInput__void_$p_org_patternfly_component_slider_Slider(textInput);
   this.m_addValueInputInternal__elemental2_dom_HTMLElement__org_patternfly_component_slider_SliderInputPosition__void_$p_org_patternfly_component_slider_Slider(textInput.m_element__elemental2_dom_HTMLElement(), inputPosition);
  } else {
   Logger.m_unsupported__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'Value input already added.');
  }
  return this;
 }
 /** @nodts @return {Slider} */
 m_addValueInput__org_patternfly_component_inputgroup_InputGroup__org_patternfly_component_slider_Slider(/** InputGroup */ valueInput) {
  return this.m_addValueInput__org_patternfly_component_inputgroup_InputGroup__org_patternfly_component_slider_SliderInputPosition__org_patternfly_component_slider_Slider(valueInput, SliderInputPosition.f_end__org_patternfly_component_slider_SliderInputPosition);
 }
 /** @nodts @return {Slider} */
 m_addValueInput__org_patternfly_component_inputgroup_InputGroup__org_patternfly_component_slider_SliderInputPosition__org_patternfly_component_slider_Slider(/** InputGroup */ valueInput, /** SliderInputPosition */ inputPosition) {
  if ($Equality.$same(this.f_inputGroup__org_patternfly_component_slider_Slider_, null)) {
   let inputGroupItem = valueInput.m_itemWithFormControl__org_patternfly_component_inputgroup_InputGroupItem();
   if (!$Equality.$same(inputGroupItem, null)) {
    if (TextInput.$isInstance(inputGroupItem.m_formControl__org_patternfly_component_form_FormControl())) {
     this.f_inputGroup__org_patternfly_component_slider_Slider_ = valueInput;
     this.m_bindValueInput__org_patternfly_component_form_TextInput__void_$p_org_patternfly_component_slider_Slider(/**@type {TextInput}*/ ($Casts.$to(inputGroupItem.m_formControl__org_patternfly_component_form_FormControl(), TextInput)));
     this.m_addValueInputInternal__elemental2_dom_HTMLElement__org_patternfly_component_slider_SliderInputPosition__void_$p_org_patternfly_component_slider_Slider(valueInput.m_element__elemental2_dom_HTMLElement(), inputPosition);
    } else {
     Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'Value input does not contain a text input!');
    }
   } else {
    Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'Value input does not contain a form control!');
   }
  } else {
   Logger.m_unsupported__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'Value input already added.');
  }
  return this;
 }
 /** @nodts @return {Slider} */
 m_customSteps__org_patternfly_component_slider_SliderSteps__org_patternfly_component_slider_Slider(/** SliderSteps */ steps) {
  return this.m_customSteps__boolean__org_patternfly_component_slider_SliderSteps__org_patternfly_component_slider_Slider(false, steps);
 }
 /** @nodts @return {Slider} */
 m_customSteps__boolean__org_patternfly_component_slider_SliderSteps__org_patternfly_component_slider_Slider(/** boolean */ continuous, /** SliderSteps */ steps) {
  this.f_continuousCustomSteps__org_patternfly_component_slider_Slider_ = continuous;
  this.f_customSteps__org_patternfly_component_slider_Slider_ = steps;
  return this;
 }
 /** @nodts @return {Slider} */
 m_disabled__boolean__org_patternfly_component_slider_Slider(/** boolean */ disabled) {
  this.f_disabled__org_patternfly_component_slider_Slider_ = disabled;
  if (Elements.m_isAttached__elemental2_dom_Node__boolean(this.m_element__elemental2_dom_HTMLElement())) {
   this.m_disabledInternal__boolean__void_$p_org_patternfly_component_slider_Slider(disabled);
  }
  return /**@type {Slider}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__boolean__org_jboss_elemento_TypedBuilder(this, disabled), Slider));
 }
 /** @nodts @return {Slider} */
 m_min__double__org_patternfly_component_slider_Slider(/** number */ min) {
  this.f_min__org_patternfly_component_slider_Slider_ = min;
  return this;
 }
 /** @nodts @return {Slider} */
 m_max__double__org_patternfly_component_slider_Slider(/** number */ max) {
  this.f_max__org_patternfly_component_slider_Slider_ = max;
  return this;
 }
 /** @nodts @return {Slider} */
 m_step__double__org_patternfly_component_slider_Slider(/** number */ step) {
  this.f_step__org_patternfly_component_slider_Slider_ = step;
  return this;
 }
 /** @nodts @return {Slider} */
 m_range__double__double__org_patternfly_component_slider_Slider(/** number */ min, /** number */ max) {
  return this.m_range__double__double__double__org_patternfly_component_slider_Slider(min, max, 1);
 }
 /** @nodts @return {Slider} */
 m_range__double__double__double__org_patternfly_component_slider_Slider(/** number */ min, /** number */ max, /** number */ step) {
  this.f_min__org_patternfly_component_slider_Slider_ = min;
  this.f_max__org_patternfly_component_slider_Slider_ = max;
  this.f_step__org_patternfly_component_slider_Slider_ = step;
  return this;
 }
 /** @nodts @return {Slider} */
 m_showBoundaries__org_patternfly_component_slider_Slider() {
  return this.m_showBoundaries__boolean__org_patternfly_component_slider_Slider(true);
 }
 /** @nodts @return {Slider} */
 m_showBoundaries__boolean__org_patternfly_component_slider_Slider(/** boolean */ showBoundaries) {
  this.f_showBoundaries__org_patternfly_component_slider_Slider_ = showBoundaries;
  return this;
 }
 /** @nodts @return {Slider} */
 m_showTicks__org_patternfly_component_slider_Slider() {
  return this.m_showTicks__boolean__org_patternfly_component_slider_Slider(true);
 }
 /** @nodts @return {Slider} */
 m_showTicks__boolean__org_patternfly_component_slider_Slider(/** boolean */ showTicks) {
  this.f_showTicks__org_patternfly_component_slider_Slider_ = showTicks;
  return this;
 }
 /** @nodts @return {Slider} */
 m_toolTipOnThumb__org_patternfly_component_slider_Slider() {
  return this.m_toolTipOnThumb__boolean__org_patternfly_component_slider_Slider(true);
 }
 /** @nodts @return {Slider} */
 m_toolTipOnThumb__boolean__org_patternfly_component_slider_Slider(/** boolean */ tooltipOnThumb) {
  this.f_tooltipOnThumb__org_patternfly_component_slider_Slider_ = tooltipOnThumb;
  return this;
 }
 /** @nodts @return {Slider} */
 m_value__double__org_patternfly_component_slider_Slider(/** number */ value) {
  if (Elements.m_isAttached__elemental2_dom_Node__boolean(this.m_element__elemental2_dom_HTMLElement())) {
   this.f_value__org_patternfly_component_slider_Slider_.m_set__java_lang_Object__void(value);
  } else {
   this.f_value__org_patternfly_component_slider_Slider_.m_silent__java_lang_Object__void(value);
  }
  return this;
 }
 /** @nodts @return {Slider} */
 m_that__org_patternfly_component_slider_Slider() {
  return this;
 }
 /** @nodts @return {Slider} */
 m_ariaLabel__java_lang_String__org_patternfly_component_slider_Slider(/** ?string */ label) {
  return /**@type {Slider}*/ ($Casts.$to(this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label), Slider));
 }
 /** @nodts @return {Slider} */
 m_ariaDescribedBy__java_lang_String__org_patternfly_component_slider_Slider(/** ?string */ describedBy) {
  this.f_thumb__org_patternfly_component_slider_Slider_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_describedBy__org_patternfly_core_Aria, describedBy);
  return /**@type {Slider}*/ ($Casts.$to(this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_describedBy__org_patternfly_core_Aria, describedBy), Slider));
 }
 /** @nodts @return {Slider} */
 m_ariaLabelledBy__java_lang_String__org_patternfly_component_slider_Slider(/** ?string */ labelledBy) {
  this.f_thumb__org_patternfly_component_slider_Slider_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, labelledBy);
  return /**@type {Slider}*/ ($Casts.$to(this.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, labelledBy), Slider));
 }
 /** @nodts @return {Slider} */
 m_ariaThumbLabel__java_lang_String__org_patternfly_component_slider_Slider(/** ?string */ label) {
  this.f_thumb__org_patternfly_component_slider_Slider_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, label);
  return this;
 }
 /** @nodts @return {Slider} */
 m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_slider_Slider(/** ChangeHandler<Slider, ?number> */ changeHandler) {
  this.f_changeHandler__org_patternfly_component_slider_Slider_ = changeHandler;
  return this;
 }
 /** @nodts */
 m_decrease__void() {
  let /** number */ newValue;
  let localValue = Double.m_doubleValue__java_lang_Double__double(/**@type {?number}*/ ($Casts.$to(this.f_value__org_patternfly_component_slider_Slider_.m_get__java_lang_Object(), Double)));
  if (!$Equality.$same(this.f_customSteps__org_patternfly_component_slider_Slider_, null) && !this.f_continuousCustomSteps__org_patternfly_component_slider_Slider_) {
   newValue = this.f_customSteps__org_patternfly_component_slider_Slider_.m_previousValue__double__double_$pp_org_patternfly_component_slider(localValue);
  } else {
   let localMin = $Equality.$same(this.f_customSteps__org_patternfly_component_slider_Slider_, null) ? this.f_min__org_patternfly_component_slider_Slider_ : this.f_customSteps__org_patternfly_component_slider_Slider_.m_firstValue__double_$pp_org_patternfly_component_slider();
   newValue = Math.max(localValue - this.f_step__org_patternfly_component_slider_Slider_, localMin);
  }
  this.f_value__org_patternfly_component_slider_Slider_.m_set__java_lang_Object__void(newValue);
 }
 /** @nodts */
 m_increase__void() {
  let /** number */ newValue;
  let localValue = Double.m_doubleValue__java_lang_Double__double(/**@type {?number}*/ ($Casts.$to(this.f_value__org_patternfly_component_slider_Slider_.m_get__java_lang_Object(), Double)));
  if (!$Equality.$same(this.f_customSteps__org_patternfly_component_slider_Slider_, null) && !this.f_continuousCustomSteps__org_patternfly_component_slider_Slider_) {
   newValue = this.f_customSteps__org_patternfly_component_slider_Slider_.m_nextValue__double__double_$pp_org_patternfly_component_slider(localValue);
  } else {
   let localMax = $Equality.$same(this.f_customSteps__org_patternfly_component_slider_Slider_, null) ? this.f_max__org_patternfly_component_slider_Slider_ : this.f_customSteps__org_patternfly_component_slider_Slider_.m_lastValue__double_$pp_org_patternfly_component_slider();
   newValue = Math.min(localValue + this.f_step__org_patternfly_component_slider_Slider_, localMax);
  }
  this.f_value__org_patternfly_component_slider_Slider_.m_set__java_lang_Object__void(newValue);
 }
 /** @nodts @return {?number} */
 m_value__java_lang_Double() {
  return /**@type {?number}*/ ($Casts.$to(this.f_value__org_patternfly_component_slider_Slider_.m_get__java_lang_Object(), Double));
 }
 /** @nodts @return {number} */
 m_intValue__int() {
  return $Primitives.narrowDoubleToInt(Double.m_doubleValue__java_lang_Double__double(this.m_value__java_lang_Double()));
 }
 /** @nodts @return {SliderStep} */
 m_currentStep__org_patternfly_component_slider_SliderStep() {
  if ($Equality.$same(this.f_customSteps__org_patternfly_component_slider_Slider_, null)) {
   return SliderStep.m_sliderStep__double__org_patternfly_component_slider_SliderStep(Double.m_doubleValue__java_lang_Double__double(/**@type {?number}*/ ($Casts.$to(this.f_value__org_patternfly_component_slider_Slider_.m_get__java_lang_Object(), Double))));
  } else {
   return this.f_customSteps__org_patternfly_component_slider_Slider_.m_closestStep__double__org_patternfly_component_slider_SliderStep_$pp_org_patternfly_component_slider(Double.m_doubleValue__java_lang_Double__double(/**@type {?number}*/ ($Casts.$to(this.f_value__org_patternfly_component_slider_Slider_.m_get__java_lang_Object(), Double))));
  }
 }
 /** @nodts */
 m_onValueChanged__double__double__void_$p_org_patternfly_component_slider_Slider(/** number */ current, /** number */ previous) {
  let stringValue = j_l_String.m_valueOf__double__java_lang_String(current);
  let percentage = !$Equality.$same(this.f_customSteps__org_patternfly_component_slider_Slider_, null) ? Numbers.m_percentage__double__double__double__double(current, this.f_customSteps__org_patternfly_component_slider_Slider_.m_firstValue__double_$pp_org_patternfly_component_slider(), this.f_customSteps__org_patternfly_component_slider_Slider_.m_lastValue__double_$pp_org_patternfly_component_slider()) : Numbers.m_percentage__double__double__double__double(current, this.f_min__org_patternfly_component_slider_Slider_, this.f_max__org_patternfly_component_slider_Slider_);
  Slider.f_sliderValue__org_patternfly_component_slider_Slider_.m_applyTo__elemental2_dom_HTMLElement__java_lang_String__void(this.m_element__elemental2_dom_HTMLElement(), percentage + '%');
  for (let $iterator = Elements.m_children__org_jboss_elemento_IsElement__java_lang_Iterable(this.f_stepsContainer__org_patternfly_component_slider_Slider_).m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let stepElement = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), HTMLElement_$Overlay));
   {
    let stepValue = Double.m_parseDouble__java_lang_String__double(/**@type {?string}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(stepElement.dataset, Dataset.f_sliderStepValue__org_patternfly_core_Dataset), j_l_String)));
    stepElement.classList.toggle(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_active__org_patternfly_style_Classes), stepValue < current);
   }
  }
  let labelOrValue = this.m_labelOrValue__double__java_lang_String_$p_org_patternfly_component_slider_Slider(current);
  this.f_thumb__org_patternfly_component_slider_Slider_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_valueNow__org_patternfly_core_Aria, stringValue);
  this.f_thumb__org_patternfly_component_slider_Slider_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_valueText__org_patternfly_core_Aria, labelOrValue);
  if (!$Equality.$same(this.f_textInput__org_patternfly_component_slider_Slider_, null)) {
   this.f_textInput__org_patternfly_component_slider_Slider_.m_value__java_lang_String__org_patternfly_component_form_TextInput(stringValue);
   Slider.f_sliderValueInputWidth__org_patternfly_component_slider_Slider_.m_applyTo__elemental2_dom_HTMLElement__int__void(this.m_element__elemental2_dom_HTMLElement(), j_l_String.m_length__java_lang_String__int(this.f_textInput__org_patternfly_component_slider_Slider_.m_value__java_lang_String()));
  }
  if (!$Equality.$same(this.f_tooltip__org_patternfly_component_slider_Slider_, null)) {
   this.f_tooltip__org_patternfly_component_slider_Slider_.m_text__java_lang_String__org_patternfly_component_tooltip_Tooltip(labelOrValue);
  }
  if (!$Equality.$same(this.f_changeHandler__org_patternfly_component_slider_Slider_, null)) {
   this.f_changeHandler__org_patternfly_component_slider_Slider_.m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(new Event(''), this, current);
  }
 }
 /** @nodts @return {?string} */
 m_labelOrValue__double__java_lang_String_$p_org_patternfly_component_slider_Slider(/** number */ value) {
  if (!$Equality.$same(this.f_customSteps__org_patternfly_component_slider_Slider_, null) && !this.f_continuousCustomSteps__org_patternfly_component_slider_Slider_) {
   return this.f_customSteps__org_patternfly_component_slider_Slider_.m_closestStep__double__org_patternfly_component_slider_SliderStep_$pp_org_patternfly_component_slider(value).f_label__org_patternfly_component_slider_SliderStep;
  }
  return j_l_String.m_valueOf__double__java_lang_String(value);
 }
 /** @nodts */
 m_disabledInternal__boolean__void_$p_org_patternfly_component_slider_Slider(/** boolean */ disabled) {
  /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_thumb__org_patternfly_component_slider_Slider_.m_element__elemental2_dom_HTMLElement(), $Overlay)).tabIndex = disabled ? - 1 | 0 : 0;
  this.f_thumb__org_patternfly_component_slider_Slider_.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_disabled__org_patternfly_core_Aria, disabled);
  for (let $iterator = this.f_actions__org_patternfly_component_slider_Slider_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let a = /**@type {SliderActions}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), SliderActions));
   {
    a.m_disabled__boolean__void_$pp_org_patternfly_component_slider(disabled);
   }
  }
  if (!$Equality.$same(this.f_inputGroup__org_patternfly_component_slider_Slider_, null)) {
   this.f_inputGroup__org_patternfly_component_slider_Slider_.m_disabled__boolean__org_patternfly_component_inputgroup_InputGroup(disabled);
  } else if (!$Equality.$same(this.f_textInput__org_patternfly_component_slider_Slider_, null)) {
   this.f_textInput__org_patternfly_component_slider_Slider_.m_disabled__boolean__org_patternfly_component_BaseComponent(disabled);
  }
 }
 /** @nodts */
 m_addValueInputInternal__elemental2_dom_HTMLElement__org_patternfly_component_slider_SliderInputPosition__void_$p_org_patternfly_component_slider_Slider(/** HTMLElement */ element, /** SliderInputPosition */ inputPosition) {
  if ($Equality.$same(inputPosition, SliderInputPosition.f_aboveThumb__org_patternfly_component_slider_SliderInputPosition)) {
   this.f_main__org_patternfly_component_slider_Slider_.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_slider__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_value__org_patternfly_style_Classes], j_l_String))), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_floating__org_patternfly_style_Classes)], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(element), HTMLContainerBuilder)));
  } else if ($Equality.$same(inputPosition, SliderInputPosition.f_end__org_patternfly_component_slider_SliderInputPosition)) {
   Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_slider__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_value__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(element), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), $Overlay)), /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_main__org_patternfly_component_slider_Slider_.m_element__elemental2_dom_HTMLElement(), $Overlay)));
  } else {
   if (!$Equality.$same(inputPosition, null)) {
    Logger.m_unsupported__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'Unsupported input position: ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(inputPosition.name()));
   } else {
    Logger.m_unsupported__java_lang_String__elemental2_dom_Element__java_lang_String__void(this.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType, this.m_element__elemental2_dom_HTMLElement(), 'No input position!');
   }
  }
 }
 /** @nodts */
 m_bindValueInput__org_patternfly_component_form_TextInput__void_$p_org_patternfly_component_slider_Slider(/** TextInput */ textInput) {
  this.f_textInput__org_patternfly_component_slider_Slider_ = textInput;
  /**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputElementBuilder<HTMLInputElement>}*/ ($Casts.$to(this.f_textInput__org_patternfly_component_slider_Slider_.m_inputElement__org_jboss_elemento_InputElementBuilder().m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_keyup__org_jboss_elemento_EventType, (arg0) =>{
   let arg0_1 = /**@type {KeyboardEvent}*/ ($Casts.$to(arg0, KeyboardEvent_$Overlay));
   this.m_handleInputKeyUp__elemental2_dom_KeyboardEvent__void_$p_org_patternfly_component_slider_Slider(arg0_1);
  }), InputElementBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (arg0_2) =>{
   let arg0_3 = /**@type {MouseEvent}*/ ($Casts.$to(arg0_2, MouseEvent_$Overlay));
   arg0_3.stopPropagation();
  }), InputElementBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_focus__org_jboss_elemento_EventType, (arg0_4) =>{
   let arg0_5 = /**@type {FocusEvent}*/ ($Casts.$to(arg0_4, FocusEvent_$Overlay));
   arg0_5.stopPropagation();
  }), InputElementBuilder)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_blur__org_jboss_elemento_EventType, (arg0_6) =>{
   let arg0_7 = /**@type {FocusEvent}*/ ($Casts.$to(arg0_6, FocusEvent_$Overlay));
   this.m_handleInputBlur__elemental2_dom_FocusEvent__void_$p_org_patternfly_component_slider_Slider(arg0_7);
  });
 }
 /** @nodts */
 m_handleRailClick__elemental2_dom_Event__void_$p_org_patternfly_component_slider_Slider(/** Event */ event) {
  if (this.f_disabled__org_patternfly_component_slider_Slider_) {
   return;
  }
  this.m_handleThumbMove__elemental2_dom_Event__void_$p_org_patternfly_component_slider_Slider(event);
 }
 /** @nodts */
 m_handleThumbClick__elemental2_dom_Event__void_$p_org_patternfly_component_slider_Slider(/** Event */ event) {
  if (this.f_disabled__org_patternfly_component_slider_Slider_) {
   return;
  }
  /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_thumb__org_patternfly_component_slider_Slider_.m_element__elemental2_dom_HTMLElement(), $Overlay)).focus();
 }
 /** @nodts */
 m_handleThumbMouseDown__elemental2_dom_MouseEvent__void_$p_org_patternfly_component_slider_Slider(/** MouseEvent */ event) {
  if (this.f_disabled__org_patternfly_component_slider_Slider_) {
   return;
  }
  event.stopPropagation();
  event.preventDefault();
  if (this.f_rtl__org_patternfly_component_slider_Slider_) {
   this.f_diff__org_patternfly_component_slider_Slider_ = /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_thumb__org_patternfly_component_slider_Slider_.m_element__elemental2_dom_HTMLElement(), $Overlay)).getBoundingClientRect().right - event.clientX;
  } else {
   this.f_diff__org_patternfly_component_slider_Slider_ = event.clientX - /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_thumb__org_patternfly_component_slider_Slider_.m_element__elemental2_dom_HTMLElement(), $Overlay)).getBoundingClientRect().left;
  }
  this.f_mouseMoveHandler__org_patternfly_component_slider_Slider_ = EventType.m_bind__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__org_gwtproject_event_shared_HandlerRegistration(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, EventType.f_mousemove__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ arg0) =>{
   this.m_handleThumbMove__elemental2_dom_Event__void_$p_org_patternfly_component_slider_Slider(arg0);
  }));
  this.f_mouseUpHandler__org_patternfly_component_slider_Slider_ = EventType.m_bind__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__org_gwtproject_event_shared_HandlerRegistration(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, EventType.f_mouseup__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ arg0_1) =>{
   this.m_handleThumbUp__elemental2_dom_Event__void_$p_org_patternfly_component_slider_Slider(arg0_1);
  }));
 }
 /** @nodts */
 m_handleThumbTouchStart__elemental2_dom_TouchEvent__void_$p_org_patternfly_component_slider_Slider(/** TouchEvent */ event) {
  if (this.f_disabled__org_patternfly_component_slider_Slider_) {
   return;
  }
  event.stopPropagation();
  if (this.f_rtl__org_patternfly_component_slider_Slider_) {
   this.f_diff__org_patternfly_component_slider_Slider_ = /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_thumb__org_patternfly_component_slider_Slider_.m_element__elemental2_dom_HTMLElement(), $Overlay)).getBoundingClientRect().right - event.touches.item(0).clientX;
  } else {
   this.f_diff__org_patternfly_component_slider_Slider_ = event.touches.item(0).clientX - /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_thumb__org_patternfly_component_slider_Slider_.m_element__elemental2_dom_HTMLElement(), $Overlay)).getBoundingClientRect().left;
  }
  let options = AddEventListenerOptions_$Overlay.m_create__elemental2_dom_AddEventListenerOptions();
  options.passive = true;
  this.f_touchMoveHandler__org_patternfly_component_slider_Slider_ = EventType.m_bind__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_AddEventListenerOptions__elemental2_dom_EventListener__org_gwtproject_event_shared_HandlerRegistration(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, EventType.f_touchmove__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, options, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ arg0) =>{
   this.m_handleThumbMove__elemental2_dom_Event__void_$p_org_patternfly_component_slider_Slider(arg0);
  }));
  this.f_touchEndHandler__org_patternfly_component_slider_Slider_ = EventType.m_bind__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__org_gwtproject_event_shared_HandlerRegistration(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, EventType.f_touchend__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ arg0_1) =>{
   this.m_handleThumbUp__elemental2_dom_Event__void_$p_org_patternfly_component_slider_Slider(arg0_1);
  }));
  this.f_touchCancelHandler__org_patternfly_component_slider_Slider_ = EventType.m_bind__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__org_gwtproject_event_shared_HandlerRegistration(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, EventType.f_touchcancel__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ arg0_2) =>{
   this.m_handleThumbUp__elemental2_dom_Event__void_$p_org_patternfly_component_slider_Slider(arg0_2);
  }));
 }
 /** @nodts */
 m_handleThumbUp__elemental2_dom_Event__void_$p_org_patternfly_component_slider_Slider(/** Event */ event) {
  if (!$Equality.$same(this.f_mouseMoveHandler__org_patternfly_component_slider_Slider_, null)) {
   this.f_mouseMoveHandler__org_patternfly_component_slider_Slider_.m_removeHandler__void();
  }
  if (!$Equality.$same(this.f_mouseUpHandler__org_patternfly_component_slider_Slider_, null)) {
   this.f_mouseUpHandler__org_patternfly_component_slider_Slider_.m_removeHandler__void();
  }
  if (!$Equality.$same(this.f_touchMoveHandler__org_patternfly_component_slider_Slider_, null)) {
   this.f_touchMoveHandler__org_patternfly_component_slider_Slider_.m_removeHandler__void();
  }
  if (!$Equality.$same(this.f_touchEndHandler__org_patternfly_component_slider_Slider_, null)) {
   this.f_touchEndHandler__org_patternfly_component_slider_Slider_.m_removeHandler__void();
  }
  if (!$Equality.$same(this.f_touchCancelHandler__org_patternfly_component_slider_Slider_, null)) {
   this.f_touchCancelHandler__org_patternfly_component_slider_Slider_.m_removeHandler__void();
  }
 }
 /** @nodts */
 m_handleThumbMove__elemental2_dom_Event__void_$p_org_patternfly_component_slider_Slider(/** Event */ event) {
  if (this.f_disabled__org_patternfly_component_slider_Slider_) {
   return;
  }
  let start = 0;
  let /** number */ newPos;
  let clientPos = 0;
  if (TouchEvent_$Overlay.$isInstance(event)) {
   event.preventDefault();
   event.stopImmediatePropagation();
   clientPos = /**@type {TouchEvent}*/ ($Casts.$to(event, TouchEvent_$Overlay)).touches.item(0).clientX;
  } else if (MouseEvent_$Overlay.$isInstance(event)) {
   clientPos = /**@type {MouseEvent}*/ ($Casts.$to(event, MouseEvent_$Overlay)).clientX;
  }
  if (this.f_rtl__org_patternfly_component_slider_Slider_) {
   newPos = /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_sliderRail__org_patternfly_component_slider_Slider_.m_element__elemental2_dom_HTMLElement(), $Overlay)).getBoundingClientRect().right - clientPos - this.f_diff__org_patternfly_component_slider_Slider_;
  } else {
   newPos = clientPos - this.f_diff__org_patternfly_component_slider_Slider_ - /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_sliderRail__org_patternfly_component_slider_Slider_.m_element__elemental2_dom_HTMLElement(), $Overlay)).getBoundingClientRect().left;
  }
  let end = /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_sliderRail__org_patternfly_component_slider_Slider_.m_element__elemental2_dom_HTMLElement(), $Overlay)).offsetWidth - /**@type {HTMLDivElement}*/ ($Casts.$to(this.f_thumb__org_patternfly_component_slider_Slider_.m_element__elemental2_dom_HTMLElement(), $Overlay)).offsetWidth | 0;
  if (newPos < start) {
   newPos = 0;
  }
  if (newPos > end) {
   newPos = end;
  }
  let localMin = $Equality.$same(this.f_customSteps__org_patternfly_component_slider_Slider_, null) ? this.f_min__org_patternfly_component_slider_Slider_ : this.f_customSteps__org_patternfly_component_slider_Slider_.m_firstValue__double_$pp_org_patternfly_component_slider();
  let localMax = $Equality.$same(this.f_customSteps__org_patternfly_component_slider_Slider_, null) ? this.f_max__org_patternfly_component_slider_Slider_ : this.f_customSteps__org_patternfly_component_slider_Slider_.m_lastValue__double_$pp_org_patternfly_component_slider();
  let percentage = Numbers.m_percentage__double__double__double(newPos, end);
  let percentageMinMax = percentage * (localMax - localMin) / 100 + localMin;
  let newValue = $Primitives.widenLongToDouble(j_l_Math.m_round__double__long(percentageMinMax * 100)) / 100;
  if ($Equality.$same(this.f_customSteps__org_patternfly_component_slider_Slider_, null)) {
   newValue = $Primitives.widenLongToDouble(j_l_Math.m_round__double__long(($Primitives.widenLongToDouble(j_l_Math.m_round__double__long((newValue - localMin) / this.f_step__org_patternfly_component_slider_Slider_)) * this.f_step__org_patternfly_component_slider_Slider_ + localMin) * 100)) / 100;
  } else if (!this.f_continuousCustomSteps__org_patternfly_component_slider_Slider_) {
   newValue = this.f_customSteps__org_patternfly_component_slider_Slider_.m_closestValue__double__double_$pp_org_patternfly_component_slider(localMax != 100 ? percentageMinMax : percentage);
  }
  this.f_value__org_patternfly_component_slider_Slider_.m_set__java_lang_Object__void(newValue);
 }
 /** @nodts */
 m_handleThumbKeys__elemental2_dom_KeyboardEvent__void_$p_org_patternfly_component_slider_Slider(/** KeyboardEvent */ event) {
  if (this.f_disabled__org_patternfly_component_slider_Slider_ || !(Key.f_ArrowLeft__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event) || Key.f_ArrowRight__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event))) {
   return;
  }
  event.preventDefault();
  let newValue = 0;
  let localValue = Double.m_doubleValue__java_lang_Double__double(/**@type {?number}*/ ($Casts.$to(this.f_value__org_patternfly_component_slider_Slider_.m_get__java_lang_Object(), Double)));
  if (!$Equality.$same(this.f_customSteps__org_patternfly_component_slider_Slider_, null) && !this.f_continuousCustomSteps__org_patternfly_component_slider_Slider_) {
   if (Key.f_ArrowLeft__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event)) {
    if (this.f_rtl__org_patternfly_component_slider_Slider_) {
     newValue = this.f_customSteps__org_patternfly_component_slider_Slider_.m_nextValue__double__double_$pp_org_patternfly_component_slider(localValue);
    } else {
     newValue = this.f_customSteps__org_patternfly_component_slider_Slider_.m_previousValue__double__double_$pp_org_patternfly_component_slider(localValue);
    }
   } else if (Key.f_ArrowRight__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event)) {
    if (this.f_rtl__org_patternfly_component_slider_Slider_) {
     newValue = this.f_customSteps__org_patternfly_component_slider_Slider_.m_previousValue__double__double_$pp_org_patternfly_component_slider(localValue);
    } else {
     newValue = this.f_customSteps__org_patternfly_component_slider_Slider_.m_nextValue__double__double_$pp_org_patternfly_component_slider(localValue);
    }
   }
  } else {
   let localMin = $Equality.$same(this.f_customSteps__org_patternfly_component_slider_Slider_, null) ? this.f_min__org_patternfly_component_slider_Slider_ : this.f_customSteps__org_patternfly_component_slider_Slider_.m_firstValue__double_$pp_org_patternfly_component_slider();
   let localMax = $Equality.$same(this.f_customSteps__org_patternfly_component_slider_Slider_, null) ? this.f_max__org_patternfly_component_slider_Slider_ : this.f_customSteps__org_patternfly_component_slider_Slider_.m_lastValue__double_$pp_org_patternfly_component_slider();
   if (Key.f_ArrowLeft__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event)) {
    if (this.f_rtl__org_patternfly_component_slider_Slider_) {
     newValue = Math.min(localValue + this.f_step__org_patternfly_component_slider_Slider_, localMax);
    } else {
     newValue = Math.max(localValue - this.f_step__org_patternfly_component_slider_Slider_, localMin);
    }
   } else if (Key.f_ArrowRight__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event)) {
    if (this.f_rtl__org_patternfly_component_slider_Slider_) {
     newValue = Math.max(localValue - this.f_step__org_patternfly_component_slider_Slider_, localMin);
    } else {
     newValue = Math.min(localValue + this.f_step__org_patternfly_component_slider_Slider_, localMax);
    }
   }
  }
  this.f_value__org_patternfly_component_slider_Slider_.m_set__java_lang_Object__void(newValue);
 }
 /** @nodts */
 m_handleInputKeyUp__elemental2_dom_KeyboardEvent__void_$p_org_patternfly_component_slider_Slider(/** KeyboardEvent */ event) {
  if (this.f_disabled__org_patternfly_component_slider_Slider_) {
   return;
  }
  Slider.f_sliderValueInputWidth__org_patternfly_component_slider_Slider_.m_applyTo__elemental2_dom_HTMLElement__int__void(this.m_element__elemental2_dom_HTMLElement(), j_l_String.m_length__java_lang_String__int(this.f_textInput__org_patternfly_component_slider_Slider_.m_value__java_lang_String()));
  if (Key.f_Enter__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent__boolean(event)) {
   event.preventDefault();
   this.m_handleInputChanged__void_$p_org_patternfly_component_slider_Slider();
  }
 }
 /** @nodts */
 m_handleInputBlur__elemental2_dom_FocusEvent__void_$p_org_patternfly_component_slider_Slider(/** FocusEvent */ e) {
  if (this.f_disabled__org_patternfly_component_slider_Slider_) {
   return;
  }
  this.m_handleInputChanged__void_$p_org_patternfly_component_slider_Slider();
 }
 /** @nodts */
 m_handleInputChanged__void_$p_org_patternfly_component_slider_Slider() {
  let inputValue = Double.m_parseDouble__java_lang_String__double(this.f_textInput__org_patternfly_component_slider_Slider_.m_value__java_lang_String());
  let localMin = $Equality.$same(this.f_customSteps__org_patternfly_component_slider_Slider_, null) ? this.f_min__org_patternfly_component_slider_Slider_ : this.f_customSteps__org_patternfly_component_slider_Slider_.m_firstValue__double_$pp_org_patternfly_component_slider();
  let localMax = $Equality.$same(this.f_customSteps__org_patternfly_component_slider_Slider_, null) ? this.f_max__org_patternfly_component_slider_Slider_ : this.f_customSteps__org_patternfly_component_slider_Slider_.m_lastValue__double_$pp_org_patternfly_component_slider();
  if ($Equality.$same(this.f_customSteps__org_patternfly_component_slider_Slider_, null)) {
   inputValue = Math.max(inputValue, localMin);
   inputValue = Math.min(inputValue, localMax);
  } else {
   inputValue = this.f_customSteps__org_patternfly_component_slider_Slider_.m_closestValue__double__double_$pp_org_patternfly_component_slider(inputValue);
  }
  this.f_value__org_patternfly_component_slider_Slider_.m_set__java_lang_Object__void(inputValue);
 }
 //Bridge method.
 /** @final @override @nodts @return {Slider} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_slider_Slider();
 }
 //Bridge method.
 /** @final @override @nodts @return {Slider} */
 m_disabled__org_jboss_elemento_TypedBuilder() {
  return /**@type {Slider}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), Slider));
 }
 //Bridge method.
 /** @final @override @nodts @return {Slider} */
 m_disabled__boolean__org_jboss_elemento_TypedBuilder(/** boolean */ arg0) {
  return this.m_disabled__boolean__org_patternfly_component_slider_Slider(arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_isDisabled__boolean() {
  return Disabled.m_isDisabled__$default__org_patternfly_style_Modifiers_Disabled__boolean(this);
 }
 //Bridge method.
 /** @final @override @nodts @return {?number} */
 m_value__java_lang_Object() {
  return this.m_value__java_lang_Double();
 }
 //Default method forwarding stub.
 /** @nodts @return {Slider} */
 m_disabled__org_patternfly_component_slider_Slider() {
  return /**@type {Slider}*/ ($Casts.$to(Disabled.m_disabled__$default__org_patternfly_style_Modifiers_Disabled__org_jboss_elemento_TypedBuilder(this), Slider));
 }
 /** @nodts */
 static $clinit() {
  Slider.$clinit = () =>{};
  Slider.$loadModules();
  BaseComponentFlat.$clinit();
  Disabled.$clinit();
  Attachable.$clinit();
  Slider.f_sliderValue__org_patternfly_component_slider_Slider_ = Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_slider__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$init(['value'], j_l_String)));
  Slider.f_sliderValueInputWidth__org_patternfly_component_slider_Slider_ = Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_slider__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_value__org_patternfly_style_Classes], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$init(['c-form-control', 'width-chars'], j_l_String)));
  Slider.f_sliderStepLeft__org_patternfly_component_slider_Slider_ = Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_slider__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_step__org_patternfly_style_Classes], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$init([Variables.f_Left__org_patternfly_style_Variables], j_l_String)));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Slider;
 }
 
 /** @nodts */
 static $loadModules() {
  AddEventListenerOptions_$Overlay = goog.module.get('elemental2.dom.AddEventListenerOptions.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  FocusEvent_$Overlay = goog.module.get('elemental2.dom.FocusEvent.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  KeyboardEvent_$Overlay = goog.module.get('elemental2.dom.KeyboardEvent.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  TouchEvent_$Overlay = goog.module.get('elemental2.dom.TouchEvent.$Overlay$impl');
  Double = goog.module.get('java.lang.Double$impl');
  j_l_Math = goog.module.get('java.lang.Math$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  InputElementBuilder = goog.module.get('org.jboss.elemento.InputElementBuilder$impl');
  Key = goog.module.get('org.jboss.elemento.Key$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  TextInput = goog.module.get('org.patternfly.component.form.TextInput$impl');
  SliderActions = goog.module.get('org.patternfly.component.slider.SliderActions$impl');
  SliderInputPosition = goog.module.get('org.patternfly.component.slider.SliderInputPosition$impl');
  SliderStep = goog.module.get('org.patternfly.component.slider.SliderStep$impl');
  Tooltip = goog.module.get('org.patternfly.component.tooltip.Tooltip$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  LanguageDirection = goog.module.get('org.patternfly.core.LanguageDirection$impl');
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
  Numbers = goog.module.get('org.patternfly.core.Numbers$impl');
  ObservableValue = goog.module.get('org.patternfly.core.ObservableValue$impl');
  Subscriber = goog.module.get('org.patternfly.core.ObservableValue.Subscriber$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Variable = goog.module.get('org.patternfly.style.Variable$impl');
  Variables = goog.module.get('org.patternfly.style.Variables$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@type {Variable} @nodts*/
Slider.f_sliderValue__org_patternfly_component_slider_Slider_;
/**@type {Variable} @nodts*/
Slider.f_sliderValueInputWidth__org_patternfly_component_slider_Slider_;
/**@type {Variable} @nodts*/
Slider.f_sliderStepLeft__org_patternfly_component_slider_Slider_;
Disabled.$markImplementor(Slider);
HasValue.$markImplementor(Slider);
Attachable.$markImplementor(Slider);
$Util.$setClassMetadata(Slider, 'org.patternfly.component.slider.Slider');

exports = Slider;

//# sourceMappingURL=Slider.js.map

goog.module('org.patternfly.component.slider.SliderStep$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SliderSteps = goog.forwardDeclare('org.patternfly.component.slider.SliderSteps$impl');
let Numbers = goog.forwardDeclare('org.patternfly.core.Numbers$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class SliderStep extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {number} @nodts*/
  this.f_value__org_patternfly_component_slider_SliderStep = 0;
  /**@type {?string} @nodts*/
  this.f_label__org_patternfly_component_slider_SliderStep;
  /**@type {boolean} @nodts*/
  this.f_labelHidden__org_patternfly_component_slider_SliderStep = false;
  /**@type {SliderSteps} @nodts*/
  this.f_steps__org_patternfly_component_slider_SliderStep_;
 }
 /** @nodts @return {SliderStep} */
 static m_sliderStep__double__org_patternfly_component_slider_SliderStep(/** number */ value) {
  SliderStep.$clinit();
  return SliderStep.$create__double__java_lang_String__boolean(value, j_l_String.m_valueOf__double__java_lang_String(value), false);
 }
 /** @nodts @return {SliderStep} */
 static m_sliderStep__double__java_lang_String__org_patternfly_component_slider_SliderStep(/** number */ value, /** ?string */ label) {
  SliderStep.$clinit();
  return SliderStep.$create__double__java_lang_String__boolean(value, label, false);
 }
 /** @nodts @return {SliderStep} */
 static m_sliderStep__double__java_lang_String__boolean__org_patternfly_component_slider_SliderStep(/** number */ value, /** ?string */ label, /** boolean */ labelHidden) {
  SliderStep.$clinit();
  return SliderStep.$create__double__java_lang_String__boolean(value, label, labelHidden);
 }
 /** @nodts @return {!SliderStep} */
 static $create__double__java_lang_String__boolean(/** number */ value, /** ?string */ label, /** boolean */ labelHidden) {
  let $instance = new SliderStep();
  $instance.$ctor__org_patternfly_component_slider_SliderStep__double__java_lang_String__boolean__void(value, label, labelHidden);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_slider_SliderStep__double__java_lang_String__boolean__void(/** number */ value, /** ?string */ label, /** boolean */ labelHidden) {
  this.$ctor__java_lang_Object__void();
  this.f_value__org_patternfly_component_slider_SliderStep = value;
  this.f_label__org_patternfly_component_slider_SliderStep = label;
  this.f_labelHidden__org_patternfly_component_slider_SliderStep = labelHidden;
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  if ($Equality.$same(this, o)) {
   return true;
  }
  if ($Equality.$same(o, null) || !$Equality.$same(this.m_getClass__java_lang_Class(), $Objects.m_getClass__java_lang_Object__java_lang_Class(o))) {
   return false;
  }
  let step = /**@type {SliderStep}*/ ($Casts.$to(o, SliderStep));
  return Objects.m_equals__java_lang_Object__java_lang_Object__boolean(this.f_value__org_patternfly_component_slider_SliderStep, step.f_value__org_patternfly_component_slider_SliderStep);
 }
 /** @override @return {number} */
 hashCode() {
  return Objects.m_hashCode__java_lang_Object__int(this.f_value__org_patternfly_component_slider_SliderStep);
 }
 /** @nodts @return {number} */
 m_percentage__double_$pp_org_patternfly_component_slider() {
  let firstValue = $Equality.$same(this.f_steps__org_patternfly_component_slider_SliderStep_, null) ? 0 : this.f_steps__org_patternfly_component_slider_SliderStep_.m_firstValue__double_$pp_org_patternfly_component_slider();
  let lastValue = $Equality.$same(this.f_steps__org_patternfly_component_slider_SliderStep_, null) ? 100 : this.f_steps__org_patternfly_component_slider_SliderStep_.m_lastValue__double_$pp_org_patternfly_component_slider();
  return Numbers.m_percentage__double__double__double__double(this.f_value__org_patternfly_component_slider_SliderStep, firstValue, lastValue);
 }
 /** @nodts */
 m_assignSteps__org_patternfly_component_slider_SliderSteps__void_$pp_org_patternfly_component_slider(/** SliderSteps */ steps) {
  this.f_steps__org_patternfly_component_slider_SliderStep_ = steps;
 }
 /** @nodts */
 static $clinit() {
  SliderStep.$clinit = () =>{};
  SliderStep.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SliderStep;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Numbers = goog.module.get('org.patternfly.core.Numbers$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(SliderStep, 'org.patternfly.component.slider.SliderStep');

exports = SliderStep;

//# sourceMappingURL=SliderStep.js.map

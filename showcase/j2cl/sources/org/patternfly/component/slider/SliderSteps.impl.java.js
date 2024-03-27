goog.module('org.patternfly.component.slider.SliderSteps$impl');

const Iterable = goog.require('java.lang.Iterable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SliderStep = goog.forwardDeclare('org.patternfly.component.slider.SliderStep$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Iterable<SliderStep>}
 */
class SliderSteps extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {List<SliderStep>} @nodts*/
  this.f_steps__org_patternfly_component_slider_SliderSteps_;
 }
 /** @nodts @return {SliderSteps} */
 static m_sliderSteps__org_patternfly_component_slider_SliderStep__arrayOf_org_patternfly_component_slider_SliderStep__org_patternfly_component_slider_SliderSteps(/** SliderStep */ first, /** Array<SliderStep> */ remaining) {
  SliderSteps.$clinit();
  let steps = /**@type {!ArrayList<SliderStep>}*/ (ArrayList.$create__());
  steps.add(first);
  if (!$Equality.$same(remaining, null)) {
   Collections.m_addAll__java_util_Collection__arrayOf_java_lang_Object__boolean(steps, remaining);
  }
  return SliderSteps.$create__java_util_List(steps);
 }
 /** @nodts @return {!SliderSteps} */
 static $create__java_util_List(/** List<SliderStep> */ steps) {
  let $instance = new SliderSteps();
  $instance.$ctor__org_patternfly_component_slider_SliderSteps__java_util_List__void(steps);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_slider_SliderSteps__java_util_List__void(/** List<SliderStep> */ steps) {
  this.$ctor__java_lang_Object__void();
  this.f_steps__org_patternfly_component_slider_SliderSteps_ = steps;
  for (let $iterator = this.f_steps__org_patternfly_component_slider_SliderSteps_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let step = /**@type {SliderStep}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), SliderStep));
   {
    step.m_assignSteps__org_patternfly_component_slider_SliderSteps__void_$pp_org_patternfly_component_slider(this);
   }
  }
 }
 /** @override @nodts @return {Iterator<SliderStep>} */
 m_iterator__java_util_Iterator() {
  return this.f_steps__org_patternfly_component_slider_SliderSteps_.m_iterator__java_util_Iterator();
 }
 /** @nodts @return {number} */
 m_previousValue__double__double_$pp_org_patternfly_component_slider(/** number */ value) {
  if (value < this.m_firstValue__double_$pp_org_patternfly_component_slider()) {
   return this.m_firstValue__double_$pp_org_patternfly_component_slider();
  } else if (value > this.m_lastValue__double_$pp_org_patternfly_component_slider()) {
   return this.m_lastValue__double_$pp_org_patternfly_component_slider();
  } else {
   for (let i = 0; i < this.f_steps__org_patternfly_component_slider_SliderSteps_.size(); i = i + 1 | 0) {
    if (/**@type {SliderStep}*/ ($Casts.$to(this.f_steps__org_patternfly_component_slider_SliderSteps_.getAtIndex(i), SliderStep)).f_value__org_patternfly_component_slider_SliderStep >= value) {
     if ((i - 1 | 0) >= 0) {
      return /**@type {SliderStep}*/ ($Casts.$to(this.f_steps__org_patternfly_component_slider_SliderSteps_.getAtIndex(i - 1 | 0), SliderStep)).f_value__org_patternfly_component_slider_SliderStep;
     } else {
      return this.m_firstValue__double_$pp_org_patternfly_component_slider();
     }
    }
   }
   return - 1 | 0;
  }
 }
 /** @nodts @return {number} */
 m_nextValue__double__double_$pp_org_patternfly_component_slider(/** number */ value) {
  if (value < this.m_firstValue__double_$pp_org_patternfly_component_slider()) {
   return this.m_firstValue__double_$pp_org_patternfly_component_slider();
  } else if (value > this.m_lastValue__double_$pp_org_patternfly_component_slider()) {
   return this.m_lastValue__double_$pp_org_patternfly_component_slider();
  } else {
   for (let index = 0; index < this.f_steps__org_patternfly_component_slider_SliderSteps_.size(); index = index + 1 | 0) {
    if (/**@type {SliderStep}*/ ($Casts.$to(this.f_steps__org_patternfly_component_slider_SliderSteps_.getAtIndex(index), SliderStep)).f_value__org_patternfly_component_slider_SliderStep >= value) {
     if (/**@type {SliderStep}*/ ($Casts.$to(this.f_steps__org_patternfly_component_slider_SliderSteps_.getAtIndex(index), SliderStep)).f_value__org_patternfly_component_slider_SliderStep > value) {
      return /**@type {SliderStep}*/ ($Casts.$to(this.f_steps__org_patternfly_component_slider_SliderSteps_.getAtIndex(index), SliderStep)).f_value__org_patternfly_component_slider_SliderStep;
     } else {
      if ((index + 1 | 0) < this.f_steps__org_patternfly_component_slider_SliderSteps_.size()) {
       return /**@type {SliderStep}*/ ($Casts.$to(this.f_steps__org_patternfly_component_slider_SliderSteps_.getAtIndex(index + 1 | 0), SliderStep)).f_value__org_patternfly_component_slider_SliderStep;
      } else {
       return this.m_lastValue__double_$pp_org_patternfly_component_slider();
      }
     }
    }
   }
   return - 1 | 0;
  }
 }
 /** @nodts @return {number} */
 m_closestValue__double__double_$pp_org_patternfly_component_slider(/** number */ value) {
  return this.m_closestStep__double__org_patternfly_component_slider_SliderStep_$pp_org_patternfly_component_slider(value).f_value__org_patternfly_component_slider_SliderStep;
 }
 /** @nodts @return {SliderStep} */
 m_closestStep__double__org_patternfly_component_slider_SliderStep_$pp_org_patternfly_component_slider(/** number */ value) {
  if (value <= this.m_firstValue__double_$pp_org_patternfly_component_slider()) {
   return /**@type {SliderStep}*/ ($Casts.$to(this.f_steps__org_patternfly_component_slider_SliderSteps_.getAtIndex(0), SliderStep));
  } else if (value >= this.m_lastValue__double_$pp_org_patternfly_component_slider()) {
   return /**@type {SliderStep}*/ ($Casts.$to(this.f_steps__org_patternfly_component_slider_SliderSteps_.getAtIndex(this.f_steps__org_patternfly_component_slider_SliderSteps_.size() - 1 | 0), SliderStep));
  } else {
   let index = 0;
   while (index < this.f_steps__org_patternfly_component_slider_SliderSteps_.size()) {
    let step = /**@type {SliderStep}*/ ($Casts.$to(this.f_steps__org_patternfly_component_slider_SliderSteps_.getAtIndex(index), SliderStep));
    if (step.f_value__org_patternfly_component_slider_SliderStep >= value) {
     break;
    }
    index = index + 1 | 0;
   }
   let midPoint = (/**@type {SliderStep}*/ ($Casts.$to(this.f_steps__org_patternfly_component_slider_SliderSteps_.getAtIndex(index), SliderStep)).f_value__org_patternfly_component_slider_SliderStep + /**@type {SliderStep}*/ ($Casts.$to(this.f_steps__org_patternfly_component_slider_SliderSteps_.getAtIndex(index - 1 | 0), SliderStep)).f_value__org_patternfly_component_slider_SliderStep) / 2;
   if (midPoint >= value) {
    return /**@type {SliderStep}*/ ($Casts.$to(this.f_steps__org_patternfly_component_slider_SliderSteps_.getAtIndex(index - 1 | 0), SliderStep));
   } else {
    return /**@type {SliderStep}*/ ($Casts.$to(this.f_steps__org_patternfly_component_slider_SliderSteps_.getAtIndex(index), SliderStep));
   }
  }
 }
 /** @nodts @return {number} */
 m_firstValue__double_$pp_org_patternfly_component_slider() {
  return /**@type {SliderStep}*/ ($Casts.$to(this.f_steps__org_patternfly_component_slider_SliderSteps_.getAtIndex(0), SliderStep)).f_value__org_patternfly_component_slider_SliderStep;
 }
 /** @nodts @return {number} */
 m_lastValue__double_$pp_org_patternfly_component_slider() {
  return /**@type {SliderStep}*/ ($Casts.$to(this.f_steps__org_patternfly_component_slider_SliderSteps_.getAtIndex(this.f_steps__org_patternfly_component_slider_SliderSteps_.size() - 1 | 0), SliderStep)).f_value__org_patternfly_component_slider_SliderStep;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<SliderStep>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<SliderStep>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 /** @nodts */
 static $clinit() {
  SliderSteps.$clinit = () =>{};
  SliderSteps.$loadModules();
  j_l_Object.$clinit();
  Iterable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SliderSteps;
 }
 
 /** @nodts */
 static $loadModules() {
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SliderStep = goog.module.get('org.patternfly.component.slider.SliderStep$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Iterable.$markImplementor(SliderSteps);
$Util.$setClassMetadata(SliderSteps, 'org.patternfly.component.slider.SliderSteps');

exports = SliderSteps;

//# sourceMappingURL=SliderSteps.js.map

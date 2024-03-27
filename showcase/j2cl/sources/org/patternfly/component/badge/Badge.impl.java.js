goog.module('org.patternfly.component.badge.Badge$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const HasValue = goog.require('org.patternfly.component.HasValue$impl');
const WithObservableValue = goog.require('org.patternfly.component.WithObservableValue$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let ObservableValue = goog.forwardDeclare('org.patternfly.core.ObservableValue$impl');
let Subscriber = goog.forwardDeclare('org.patternfly.core.ObservableValue.Subscriber$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, Badge>}
 * @implements {HasValue<Integer>}
 * @implements {WithObservableValue<HTMLElement, Badge, Integer>}
 */
class Badge extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_valueElement__org_patternfly_component_badge_Badge_;
  /**@type {number} @nodts*/
  this.f_value__org_patternfly_component_badge_Badge_ = 0;
  /**@type {number} @nodts*/
  this.f_limit__org_patternfly_component_badge_Badge_ = 0;
  /**@type {HTMLElement} @nodts*/
  this.f_screenReader__org_patternfly_component_badge_Badge_;
  /**@type {ChangeHandler<Badge, Integer>} @nodts*/
  this.f_changeHandler__org_patternfly_component_badge_Badge_;
  /**@type {j_u_function_Function<Integer, ?string>} @nodts*/
  this.f_display__org_patternfly_component_badge_Badge_;
  /**@type {j_u_function_Function<Integer, ?string>} @nodts*/
  this.f_maxDisplay__org_patternfly_component_badge_Badge_;
  /**@type {ObservableValue<Integer>} @nodts*/
  this.f_ov__org_patternfly_component_badge_Badge_;
 }
 /** @nodts @return {Badge} */
 static m_badge__int__org_patternfly_component_badge_Badge(/** number */ count) {
  Badge.$clinit();
  return Badge.$create__int(count);
 }
 /** @nodts @return {Badge} */
 static m_badge__int__int__org_patternfly_component_badge_Badge(/** number */ count, /** number */ limit) {
  Badge.$clinit();
  return Badge.$create__int__int(count, limit);
 }
 //Factory method corresponding to constructor 'Badge(int)'.
 /** @nodts @return {!Badge} */
 static $create__int(/** number */ count) {
  Badge.$clinit();
  let $instance = new Badge();
  $instance.$ctor__org_patternfly_component_badge_Badge__int__void(count);
  return $instance;
 }
 //Initialization from constructor 'Badge(int)'.
 /** @nodts */
 $ctor__org_patternfly_component_badge_Badge__int__void(/** number */ count) {
  this.$ctor__org_patternfly_component_badge_Badge__int__int__void(count, Integer.f_MAX_VALUE__java_lang_Integer);
 }
 //Factory method corresponding to constructor 'Badge(int, int)'.
 /** @nodts @return {!Badge} */
 static $create__int__int(/** number */ count, /** number */ limit) {
  Badge.$clinit();
  let $instance = new Badge();
  $instance.$ctor__org_patternfly_component_badge_Badge__int__int__void(count, limit);
  return $instance;
 }
 //Initialization from constructor 'Badge(int, int)'.
 /** @nodts */
 $ctor__org_patternfly_component_badge_Badge__int__int__void(/** number */ count, /** number */ limit) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Badge__org_patternfly_component_ComponentType, /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_badge__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  this.f_valueElement__org_patternfly_component_badge_Badge_ = /**@type {Badge}*/ ($Casts.$to(this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder()), Badge)).m_element__elemental2_dom_HTMLElement();
  this.f_limit__org_patternfly_component_badge_Badge_ = limit;
  this.m_count__int__org_patternfly_component_badge_Badge(count);
 }
 /** @nodts @return {Badge} */
 m_read__org_patternfly_component_badge_Badge() {
  this.m_element__elemental2_dom_HTMLElement().classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_unread__org_patternfly_style_Classes));
  this.m_element__elemental2_dom_HTMLElement().classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_read__org_patternfly_style_Classes));
  return this;
 }
 /** @nodts @return {Badge} */
 m_unread__org_patternfly_component_badge_Badge() {
  this.m_element__elemental2_dom_HTMLElement().classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_read__org_patternfly_style_Classes));
  this.m_element__elemental2_dom_HTMLElement().classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_unread__org_patternfly_style_Classes));
  return this;
 }
 /** @nodts @return {Badge} */
 m_count__int__org_patternfly_component_badge_Badge(/** number */ count) {
  return this.m_count__int__boolean__org_patternfly_component_badge_Badge(count, false);
 }
 /** @nodts @return {Badge} */
 m_count__int__boolean__org_patternfly_component_badge_Badge(/** number */ count, /** boolean */ fireEvent) {
  let changed = this.f_value__org_patternfly_component_badge_Badge_ != count;
  this.f_value__org_patternfly_component_badge_Badge_ = count;
  this.m_updateValue__int__void_$p_org_patternfly_component_badge_Badge(this.f_value__org_patternfly_component_badge_Badge_);
  if (fireEvent && changed && !$Equality.$same(this.f_changeHandler__org_patternfly_component_badge_Badge_, null)) {
   this.f_changeHandler__org_patternfly_component_badge_Badge_.m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(new Event(''), this, Integer.m_valueOf__int__java_lang_Integer(this.f_value__org_patternfly_component_badge_Badge_));
  }
  return this;
 }
 /** @nodts @return {Badge} */
 m_display__java_util_function_Function__org_patternfly_component_badge_Badge(/** j_u_function_Function<Integer, ?string> */ display) {
  this.f_display__org_patternfly_component_badge_Badge_ = display;
  this.m_updateValue__int__void_$p_org_patternfly_component_badge_Badge(!$Equality.$same(this.f_ov__org_patternfly_component_badge_Badge_, null) ? /**@type {Integer}*/ ($Casts.$to(this.f_ov__org_patternfly_component_badge_Badge_.m_get__java_lang_Object(), Integer)).m_intValue__int() : this.f_value__org_patternfly_component_badge_Badge_);
  return this;
 }
 /** @nodts @return {Badge} */
 m_maxDisplay__java_util_function_Function__org_patternfly_component_badge_Badge(/** j_u_function_Function<Integer, ?string> */ maxDisplay) {
  this.f_maxDisplay__org_patternfly_component_badge_Badge_ = maxDisplay;
  this.m_updateValue__int__void_$p_org_patternfly_component_badge_Badge(!$Equality.$same(this.f_ov__org_patternfly_component_badge_Badge_, null) ? /**@type {Integer}*/ ($Casts.$to(this.f_ov__org_patternfly_component_badge_Badge_.m_get__java_lang_Object(), Integer)).m_intValue__int() : this.f_value__org_patternfly_component_badge_Badge_);
  return this;
 }
 /** @nodts @return {Badge} */
 m_limit__int__org_patternfly_component_badge_Badge(/** number */ limit) {
  this.f_limit__org_patternfly_component_badge_Badge_ = limit;
  this.m_updateValue__int__void_$p_org_patternfly_component_badge_Badge(!$Equality.$same(this.f_ov__org_patternfly_component_badge_Badge_, null) ? /**@type {Integer}*/ ($Casts.$to(this.f_ov__org_patternfly_component_badge_Badge_.m_get__java_lang_Object(), Integer)).m_intValue__int() : this.f_value__org_patternfly_component_badge_Badge_);
  return this;
 }
 /** @nodts @return {Badge} */
 m_screenReader__java_lang_String__org_patternfly_component_badge_Badge(/** ?string */ text) {
  if ($Equality.$same(this.f_screenReader__org_patternfly_component_badge_Badge_, null)) {
   this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_screenReader__org_patternfly_component_badge_Badge_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_screenReader__org_patternfly_style_Classes], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement());
  }
  this.f_screenReader__org_patternfly_component_badge_Badge_.textContent = text;
  return this;
 }
 /** @nodts @return {Badge} */
 m_bind__org_patternfly_core_ObservableValue__org_patternfly_component_badge_Badge(/** ObservableValue<Integer> */ ov) {
  this.f_ov__org_patternfly_component_badge_Badge_ = ov;
  this.f_ov__org_patternfly_component_badge_Badge_.m_subscribe__org_patternfly_core_ObservableValue_Subscriber__org_patternfly_core_ObservableValue(Subscriber.$adapt((current, previous) =>{
   let current_1 = /**@type {Integer}*/ ($Casts.$to(current, Integer));
   let previous_1 = /**@type {Integer}*/ ($Casts.$to(previous, Integer));
   this.m_updateValue__int__void_$p_org_patternfly_component_badge_Badge(current_1.m_intValue__int());
   if (!Objects.m_equals__java_lang_Object__java_lang_Object__boolean(current_1, previous_1) && !$Equality.$same(this.f_changeHandler__org_patternfly_component_badge_Badge_, null)) {
    this.f_changeHandler__org_patternfly_component_badge_Badge_.m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(new Event(''), this, current_1);
   }
  }));
  this.m_updateValue__int__void_$p_org_patternfly_component_badge_Badge(/**@type {Integer}*/ ($Casts.$to(ov.m_get__java_lang_Object(), Integer)).m_intValue__int());
  return this;
 }
 /** @nodts @return {Badge} */
 m_that__org_patternfly_component_badge_Badge() {
  return this;
 }
 /** @nodts @return {Badge} */
 m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_badge_Badge(/** ChangeHandler<Badge, Integer> */ changeHandler) {
  this.f_changeHandler__org_patternfly_component_badge_Badge_ = changeHandler;
  return this;
 }
 /** @nodts @return {number} */
 m_count__int() {
  return !$Equality.$same(this.f_ov__org_patternfly_component_badge_Badge_, null) ? /**@type {Integer}*/ ($Casts.$to(this.f_ov__org_patternfly_component_badge_Badge_.m_get__java_lang_Object(), Integer)).m_intValue__int() : this.f_value__org_patternfly_component_badge_Badge_;
 }
 /** @nodts @return {Integer} */
 m_value__java_lang_Integer() {
  return Integer.m_valueOf__int__java_lang_Integer(!$Equality.$same(this.f_ov__org_patternfly_component_badge_Badge_, null) ? /**@type {Integer}*/ ($Casts.$to(this.f_ov__org_patternfly_component_badge_Badge_.m_get__java_lang_Object(), Integer)).m_intValue__int() : this.f_value__org_patternfly_component_badge_Badge_);
 }
 /** @nodts */
 m_updateValue__int__void_$p_org_patternfly_component_badge_Badge(/** number */ value) {
  if (value > this.f_limit__org_patternfly_component_badge_Badge_) {
   if (!$Equality.$same(this.f_maxDisplay__org_patternfly_component_badge_Badge_, null)) {
    this.f_valueElement__org_patternfly_component_badge_Badge_.textContent = /**@type {?string}*/ ($Casts.$to(this.f_maxDisplay__org_patternfly_component_badge_Badge_.m_apply__java_lang_Object__java_lang_Object(Integer.m_valueOf__int__java_lang_Integer(value)), j_l_String));
   } else {
    this.f_valueElement__org_patternfly_component_badge_Badge_.textContent = this.f_limit__org_patternfly_component_badge_Badge_ + '+';
   }
  } else {
   if (!$Equality.$same(this.f_display__org_patternfly_component_badge_Badge_, null)) {
    this.f_valueElement__org_patternfly_component_badge_Badge_.textContent = /**@type {?string}*/ ($Casts.$to(this.f_display__org_patternfly_component_badge_Badge_.m_apply__java_lang_Object__java_lang_Object(Integer.m_valueOf__int__java_lang_Integer(value)), j_l_String));
   } else {
    this.f_valueElement__org_patternfly_component_badge_Badge_.textContent = j_l_String.m_valueOf__int__java_lang_String(value);
   }
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {Integer} */
 m_value__java_lang_Object() {
  return this.m_value__java_lang_Integer();
 }
 //Bridge method.
 /** @final @override @nodts @return {Badge} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_badge_Badge();
 }
 //Bridge method.
 /** @final @override @nodts @return {Badge} */
 m_bind__org_patternfly_core_ObservableValue__org_jboss_elemento_TypedBuilder(/** ObservableValue<Integer> */ arg0) {
  return this.m_bind__org_patternfly_core_ObservableValue__org_patternfly_component_badge_Badge(arg0);
 }
 /** @nodts */
 static $clinit() {
  Badge.$clinit = () =>{};
  Badge.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Badge;
 }
 
 /** @nodts */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Subscriber = goog.module.get('org.patternfly.core.ObservableValue.Subscriber$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HasValue.$markImplementor(Badge);
WithObservableValue.$markImplementor(Badge);
$Util.$setClassMetadata(Badge, 'org.patternfly.component.badge.Badge');

exports = Badge;

//# sourceMappingURL=Badge.js.map

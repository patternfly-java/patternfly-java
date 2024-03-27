goog.module('org.patternfly.core.ObservableValue$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Subscriber = goog.forwardDeclare('org.patternfly.core.ObservableValue.Subscriber$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 */
class ObservableValue extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {T} @nodts*/
  this.f_value__org_patternfly_core_ObservableValue_;
  /**@type {T} @nodts*/
  this.f_previousValue__org_patternfly_core_ObservableValue_;
  /**@type {List<Subscriber<T>>} @nodts*/
  this.f_subscribers__org_patternfly_core_ObservableValue_;
 }
 /** @nodts @template T_1 @return {ObservableValue<T_1>} */
 static m_ov__java_lang_Object__org_patternfly_core_ObservableValue(/** T_1 */ initial) {
  ObservableValue.$clinit();
  return /**@type {!ObservableValue<T_1>}*/ (ObservableValue.$create__java_lang_Object(initial));
 }
 /** @nodts @template T @return {!ObservableValue<T>} */
 static $create__java_lang_Object(/** T */ initial) {
  ObservableValue.$clinit();
  let $instance = new ObservableValue();
  $instance.$ctor__org_patternfly_core_ObservableValue__java_lang_Object__void(initial);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_core_ObservableValue__java_lang_Object__void(/** T */ initial) {
  this.$ctor__java_lang_Object__void();
  this.f_value__org_patternfly_core_ObservableValue_ = initial;
  this.f_previousValue__org_patternfly_core_ObservableValue_ = initial;
  this.f_subscribers__org_patternfly_core_ObservableValue_ = /**@type {!ArrayList<Subscriber<T>>}*/ (ArrayList.$create__());
 }
 /** @nodts @return {T} */
 m_get__java_lang_Object() {
  return this.f_value__org_patternfly_core_ObservableValue_;
 }
 /** @nodts */
 m_silent__java_lang_Object__void(/** T */ value) {
  this.m_internalUpdate__java_lang_Object__void_$p_org_patternfly_core_ObservableValue(value);
 }
 /** @nodts */
 m_set__java_lang_Object__void(/** T */ value) {
  let changed = !Objects.m_equals__java_lang_Object__java_lang_Object__boolean(this.f_value__org_patternfly_core_ObservableValue_, value);
  if (changed) {
   this.m_internalUpdate__java_lang_Object__void_$p_org_patternfly_core_ObservableValue(value);
   this.m_publish__void();
  }
 }
 /** @nodts */
 m_change__java_lang_Object__void(/** T */ value) {
  this.m_internalUpdate__java_lang_Object__void_$p_org_patternfly_core_ObservableValue(value);
  this.m_publish__void();
 }
 /** @nodts @return {ObservableValue<T>} */
 m_subscribe__org_patternfly_core_ObservableValue_Subscriber__org_patternfly_core_ObservableValue(/** Subscriber<T> */ fn) {
  this.f_subscribers__org_patternfly_core_ObservableValue_.add(fn);
  return this;
 }
 /** @nodts */
 m_publish__void() {
  for (let $iterator = this.f_subscribers__org_patternfly_core_ObservableValue_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let subscriber = /**@type {Subscriber<T>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Subscriber));
   {
    subscriber.m_changed__java_lang_Object__java_lang_Object__void(this.f_value__org_patternfly_core_ObservableValue_, this.f_previousValue__org_patternfly_core_ObservableValue_);
   }
  }
 }
 /** @nodts */
 m_internalUpdate__java_lang_Object__void_$p_org_patternfly_core_ObservableValue(/** T */ newValue) {
  this.f_previousValue__org_patternfly_core_ObservableValue_ = this.f_value__org_patternfly_core_ObservableValue_;
  this.f_value__org_patternfly_core_ObservableValue_ = newValue;
 }
 /** @nodts */
 static $clinit() {
  ObservableValue.$clinit = () =>{};
  ObservableValue.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ObservableValue;
 }
 
 /** @nodts */
 static $loadModules() {
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  Subscriber = goog.module.get('org.patternfly.core.ObservableValue.Subscriber$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ObservableValue, 'org.patternfly.core.ObservableValue');

exports = ObservableValue;

//# sourceMappingURL=ObservableValue.js.map

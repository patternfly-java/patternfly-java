goog.module('java.util.concurrent.atomic.AtomicInteger$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const Number = goog.require('java.lang.Number$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @implements {Serializable}
 */
class AtomicInteger extends Number {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {number} @nodts*/
  this.f_value__java_util_concurrent_atomic_AtomicInteger_ = 0;
 }
 //Factory method corresponding to constructor 'AtomicInteger(int)'.
 /** @nodts @return {!AtomicInteger} */
 static $create__int(/** number */ initialValue) {
  AtomicInteger.$clinit();
  let $instance = new AtomicInteger();
  $instance.$ctor__java_util_concurrent_atomic_AtomicInteger__int__void(initialValue);
  return $instance;
 }
 //Initialization from constructor 'AtomicInteger(int)'.
 /** @nodts */
 $ctor__java_util_concurrent_atomic_AtomicInteger__int__void(/** number */ initialValue) {
  this.$ctor__java_lang_Number__void();
  this.f_value__java_util_concurrent_atomic_AtomicInteger_ = initialValue;
 }
 //Factory method corresponding to constructor 'AtomicInteger()'.
 /** @nodts @return {!AtomicInteger} */
 static $create__() {
  AtomicInteger.$clinit();
  let $instance = new AtomicInteger();
  $instance.$ctor__java_util_concurrent_atomic_AtomicInteger__void();
  return $instance;
 }
 //Initialization from constructor 'AtomicInteger()'.
 /** @nodts */
 $ctor__java_util_concurrent_atomic_AtomicInteger__void() {
  this.$ctor__java_lang_Number__void();
 }
 /** @final @nodts @return {number} */
 m_get__int() {
  return this.f_value__java_util_concurrent_atomic_AtomicInteger_;
 }
 /** @final @nodts */
 m_set__int__void(/** number */ newValue) {
  this.f_value__java_util_concurrent_atomic_AtomicInteger_ = newValue;
 }
 /** @final @nodts */
 m_lazySet__int__void(/** number */ newValue) {
  this.m_set__int__void(newValue);
 }
 /** @final @nodts @return {number} */
 m_getAndSet__int__int(/** number */ newValue) {
  let current = this.f_value__java_util_concurrent_atomic_AtomicInteger_;
  this.f_value__java_util_concurrent_atomic_AtomicInteger_ = newValue;
  return current;
 }
 /** @final @nodts @return {boolean} */
 m_compareAndSet__int__int__boolean(/** number */ expect, /** number */ update) {
  if (this.f_value__java_util_concurrent_atomic_AtomicInteger_ == expect) {
   this.f_value__java_util_concurrent_atomic_AtomicInteger_ = update;
   return true;
  } else {
   return false;
  }
 }
 /** @final @nodts @return {number} */
 m_getAndIncrement__int() {
  let /** number */ $value;
  return ($value = this.f_value__java_util_concurrent_atomic_AtomicInteger_, this.f_value__java_util_concurrent_atomic_AtomicInteger_ = this.f_value__java_util_concurrent_atomic_AtomicInteger_ + 1 | 0, $value);
 }
 /** @final @nodts @return {number} */
 m_getAndDecrement__int() {
  let /** number */ $value;
  return ($value = this.f_value__java_util_concurrent_atomic_AtomicInteger_, this.f_value__java_util_concurrent_atomic_AtomicInteger_ = this.f_value__java_util_concurrent_atomic_AtomicInteger_ - 1 | 0, $value);
 }
 /** @final @nodts @return {number} */
 m_getAndAdd__int__int(/** number */ delta) {
  let current = this.f_value__java_util_concurrent_atomic_AtomicInteger_;
  this.f_value__java_util_concurrent_atomic_AtomicInteger_ = this.f_value__java_util_concurrent_atomic_AtomicInteger_ + delta | 0;
  return current;
 }
 /** @final @nodts @return {number} */
 m_incrementAndGet__int() {
  return this.f_value__java_util_concurrent_atomic_AtomicInteger_ = this.f_value__java_util_concurrent_atomic_AtomicInteger_ + 1 | 0;
 }
 /** @final @nodts @return {number} */
 m_decrementAndGet__int() {
  return this.f_value__java_util_concurrent_atomic_AtomicInteger_ = this.f_value__java_util_concurrent_atomic_AtomicInteger_ - 1 | 0;
 }
 /** @final @nodts @return {number} */
 m_addAndGet__int__int(/** number */ delta) {
  this.f_value__java_util_concurrent_atomic_AtomicInteger_ = this.f_value__java_util_concurrent_atomic_AtomicInteger_ + delta | 0;
  return this.f_value__java_util_concurrent_atomic_AtomicInteger_;
 }
 /** @override @return {?string} */
 toString() {
  return Integer.m_toString__int__java_lang_String(this.f_value__java_util_concurrent_atomic_AtomicInteger_);
 }
 /** @override @nodts @return {number} */
 m_intValue__int() {
  return this.f_value__java_util_concurrent_atomic_AtomicInteger_;
 }
 /** @override @nodts @return {!$Long} */
 m_longValue__long() {
  return $Primitives.widenIntToLong(this.f_value__java_util_concurrent_atomic_AtomicInteger_);
 }
 /** @override @nodts @return {number} */
 m_floatValue__float() {
  return this.f_value__java_util_concurrent_atomic_AtomicInteger_;
 }
 /** @override @nodts @return {number} */
 m_doubleValue__double() {
  return this.f_value__java_util_concurrent_atomic_AtomicInteger_;
 }
 /** @nodts */
 static $clinit() {
  AtomicInteger.$clinit = () =>{};
  AtomicInteger.$loadModules();
  Number.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AtomicInteger;
 }
 
 /** @nodts */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
Serializable.$markImplementor(AtomicInteger);
$Util.$setClassMetadata(AtomicInteger, 'java.util.concurrent.atomic.AtomicInteger');

exports = AtomicInteger;

//# sourceMappingURL=AtomicInteger.js.map

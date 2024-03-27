goog.module('java.util.concurrent.atomic.AtomicLong$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const Number = goog.require('java.lang.Number$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @implements {Serializable}
 */
class AtomicLong extends Number {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {!$Long} @nodts*/
  this.f_value__java_util_concurrent_atomic_AtomicLong_ = $Long.fromInt(0);
 }
 //Factory method corresponding to constructor 'AtomicLong(long)'.
 /** @nodts @return {!AtomicLong} */
 static $create__long(/** !$Long */ initialValue) {
  AtomicLong.$clinit();
  let $instance = new AtomicLong();
  $instance.$ctor__java_util_concurrent_atomic_AtomicLong__long__void(initialValue);
  return $instance;
 }
 //Initialization from constructor 'AtomicLong(long)'.
 /** @nodts */
 $ctor__java_util_concurrent_atomic_AtomicLong__long__void(/** !$Long */ initialValue) {
  this.$ctor__java_lang_Number__void();
  this.f_value__java_util_concurrent_atomic_AtomicLong_ = initialValue;
 }
 //Factory method corresponding to constructor 'AtomicLong()'.
 /** @nodts @return {!AtomicLong} */
 static $create__() {
  AtomicLong.$clinit();
  let $instance = new AtomicLong();
  $instance.$ctor__java_util_concurrent_atomic_AtomicLong__void();
  return $instance;
 }
 //Initialization from constructor 'AtomicLong()'.
 /** @nodts */
 $ctor__java_util_concurrent_atomic_AtomicLong__void() {
  this.$ctor__java_lang_Number__void();
 }
 /** @final @nodts @return {!$Long} */
 m_get__long() {
  return this.f_value__java_util_concurrent_atomic_AtomicLong_;
 }
 /** @final @nodts */
 m_set__long__void(/** !$Long */ newValue) {
  this.f_value__java_util_concurrent_atomic_AtomicLong_ = newValue;
 }
 /** @final @nodts */
 m_lazySet__long__void(/** !$Long */ newValue) {
  this.m_set__long__void(newValue);
 }
 /** @final @nodts @return {!$Long} */
 m_getAndSet__long__long(/** !$Long */ newValue) {
  let current = this.f_value__java_util_concurrent_atomic_AtomicLong_;
  this.f_value__java_util_concurrent_atomic_AtomicLong_ = newValue;
  return current;
 }
 /** @final @nodts @return {boolean} */
 m_compareAndSet__long__long__boolean(/** !$Long */ expect, /** !$Long */ update) {
  if ($LongUtils.equals(this.f_value__java_util_concurrent_atomic_AtomicLong_, expect)) {
   this.f_value__java_util_concurrent_atomic_AtomicLong_ = update;
   return true;
  } else {
   return false;
  }
 }
 /** @final @nodts @return {!$Long} */
 m_getAndIncrement__long() {
  let /** !$Long */ $value;
  return ($value = this.f_value__java_util_concurrent_atomic_AtomicLong_, this.f_value__java_util_concurrent_atomic_AtomicLong_ = $LongUtils.plus(this.f_value__java_util_concurrent_atomic_AtomicLong_, $Long.fromInt(1)), $value);
 }
 /** @final @nodts @return {!$Long} */
 m_getAndDecrement__long() {
  let /** !$Long */ $value;
  return ($value = this.f_value__java_util_concurrent_atomic_AtomicLong_, this.f_value__java_util_concurrent_atomic_AtomicLong_ = $LongUtils.minus(this.f_value__java_util_concurrent_atomic_AtomicLong_, $Long.fromInt(1)), $value);
 }
 /** @final @nodts @return {!$Long} */
 m_getAndAdd__long__long(/** !$Long */ delta) {
  let current = this.f_value__java_util_concurrent_atomic_AtomicLong_;
  this.f_value__java_util_concurrent_atomic_AtomicLong_ = $LongUtils.plus(this.f_value__java_util_concurrent_atomic_AtomicLong_, delta);
  return current;
 }
 /** @final @nodts @return {!$Long} */
 m_incrementAndGet__long() {
  return this.f_value__java_util_concurrent_atomic_AtomicLong_ = $LongUtils.plus(this.f_value__java_util_concurrent_atomic_AtomicLong_, $Long.fromInt(1));
 }
 /** @final @nodts @return {!$Long} */
 m_decrementAndGet__long() {
  return this.f_value__java_util_concurrent_atomic_AtomicLong_ = $LongUtils.minus(this.f_value__java_util_concurrent_atomic_AtomicLong_, $Long.fromInt(1));
 }
 /** @final @nodts @return {!$Long} */
 m_addAndGet__long__long(/** !$Long */ delta) {
  this.f_value__java_util_concurrent_atomic_AtomicLong_ = $LongUtils.plus(this.f_value__java_util_concurrent_atomic_AtomicLong_, delta);
  return this.f_value__java_util_concurrent_atomic_AtomicLong_;
 }
 /** @override @return {?string} */
 toString() {
  return Long.m_toString__long__java_lang_String(this.f_value__java_util_concurrent_atomic_AtomicLong_);
 }
 /** @override @nodts @return {number} */
 m_intValue__int() {
  return $Primitives.narrowLongToInt(this.f_value__java_util_concurrent_atomic_AtomicLong_);
 }
 /** @override @nodts @return {!$Long} */
 m_longValue__long() {
  return this.f_value__java_util_concurrent_atomic_AtomicLong_;
 }
 /** @override @nodts @return {number} */
 m_floatValue__float() {
  return $Primitives.widenLongToFloat(this.f_value__java_util_concurrent_atomic_AtomicLong_);
 }
 /** @override @nodts @return {number} */
 m_doubleValue__double() {
  return $Primitives.widenLongToDouble(this.f_value__java_util_concurrent_atomic_AtomicLong_);
 }
 /** @nodts */
 static $clinit() {
  AtomicLong.$clinit = () =>{};
  AtomicLong.$loadModules();
  Number.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AtomicLong;
 }
 
 /** @nodts */
 static $loadModules() {
  Long = goog.module.get('java.lang.Long$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
Serializable.$markImplementor(AtomicLong);
$Util.$setClassMetadata(AtomicLong, 'java.util.concurrent.atomic.AtomicLong');

exports = AtomicLong;

//# sourceMappingURL=AtomicLong.js.map

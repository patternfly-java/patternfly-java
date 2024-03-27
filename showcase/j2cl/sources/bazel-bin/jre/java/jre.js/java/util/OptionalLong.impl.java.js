goog.module('java.util.OptionalLong$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');
let LongConsumer = goog.forwardDeclare('java.util.function.LongConsumer$impl');
let LongSupplier = goog.forwardDeclare('java.util.function.LongSupplier$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @final
 */
class OptionalLong extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {!$Long} @nodts*/
  this.f_ref__java_util_OptionalLong_ = $Long.fromInt(0);
  /**@type {boolean} @nodts*/
  this.f_present__java_util_OptionalLong_ = false;
 }
 /** @nodts @return {OptionalLong} */
 static m_empty__java_util_OptionalLong() {
  OptionalLong.$clinit();
  return OptionalLong.f_EMPTY__java_util_OptionalLong_;
 }
 /** @nodts @return {OptionalLong} */
 static m_of__long__java_util_OptionalLong(/** !$Long */ value) {
  OptionalLong.$clinit();
  return OptionalLong.$create__long(value);
 }
 //Factory method corresponding to constructor 'OptionalLong()'.
 /** @nodts @return {!OptionalLong} */
 static $create__() {
  let $instance = new OptionalLong();
  $instance.$ctor__java_util_OptionalLong__void();
  return $instance;
 }
 //Initialization from constructor 'OptionalLong()'.
 /** @nodts */
 $ctor__java_util_OptionalLong__void() {
  this.$ctor__java_lang_Object__void();
  this.f_ref__java_util_OptionalLong_ = $Long.fromInt(0);
  this.f_present__java_util_OptionalLong_ = false;
 }
 //Factory method corresponding to constructor 'OptionalLong(long)'.
 /** @nodts @return {!OptionalLong} */
 static $create__long(/** !$Long */ value) {
  let $instance = new OptionalLong();
  $instance.$ctor__java_util_OptionalLong__long__void(value);
  return $instance;
 }
 //Initialization from constructor 'OptionalLong(long)'.
 /** @nodts */
 $ctor__java_util_OptionalLong__long__void(/** !$Long */ value) {
  this.$ctor__java_lang_Object__void();
  this.f_ref__java_util_OptionalLong_ = value;
  this.f_present__java_util_OptionalLong_ = true;
 }
 /** @nodts @return {boolean} */
 m_isPresent__boolean() {
  return this.f_present__java_util_OptionalLong_;
 }
 /** @nodts @return {!$Long} */
 m_getAsLong__long() {
  InternalPreconditions.m_checkCriticalElement__boolean__void(this.f_present__java_util_OptionalLong_);
  return this.f_ref__java_util_OptionalLong_;
 }
 /** @nodts */
 m_ifPresent__java_util_function_LongConsumer__void(/** LongConsumer */ consumer) {
  if (this.f_present__java_util_OptionalLong_) {
   consumer.m_accept__long__void(this.f_ref__java_util_OptionalLong_);
  }
 }
 /** @nodts @return {!$Long} */
 m_orElse__long__long(/** !$Long */ other) {
  return this.f_present__java_util_OptionalLong_ ? this.f_ref__java_util_OptionalLong_ : other;
 }
 /** @nodts @return {!$Long} */
 m_orElseGet__java_util_function_LongSupplier__long(/** LongSupplier */ other) {
  return this.f_present__java_util_OptionalLong_ ? this.f_ref__java_util_OptionalLong_ : other.m_getAsLong__long();
 }
 /** @nodts @template X @return {!$Long} */
 m_orElseThrow__java_util_function_Supplier__long(/** Supplier<X> */ exceptionSupplier) {
  if (this.f_present__java_util_OptionalLong_) {
   return this.f_ref__java_util_OptionalLong_;
  }
  throw $Exceptions.toJs(/**@type {!Throwable}*/ ($Casts.$to(exceptionSupplier.m_get__java_lang_Object(), Throwable)));
 }
 /** @override @return {boolean} */
 equals(/** * */ obj) {
  if ($Equality.$same(obj, this)) {
   return true;
  }
  if (!OptionalLong.$isInstance(obj)) {
   return false;
  }
  let other = /**@type {OptionalLong}*/ ($Casts.$to(obj, OptionalLong));
  return this.f_present__java_util_OptionalLong_ == other.f_present__java_util_OptionalLong_ && Long.m_compare__long__long__int(this.f_ref__java_util_OptionalLong_, other.f_ref__java_util_OptionalLong_) == 0;
 }
 /** @override @return {number} */
 hashCode() {
  return this.f_present__java_util_OptionalLong_ ? Long.m_hashCode__long__int(this.f_ref__java_util_OptionalLong_) : 0;
 }
 /** @override @return {?string} */
 toString() {
  return this.f_present__java_util_OptionalLong_ ? 'OptionalLong.of(' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Long.m_toString__long__java_lang_String(this.f_ref__java_util_OptionalLong_)) + ')' : 'OptionalLong.empty()';
 }
 /** @nodts */
 static $clinit() {
  OptionalLong.$clinit = () =>{};
  OptionalLong.$loadModules();
  j_l_Object.$clinit();
  OptionalLong.f_EMPTY__java_util_OptionalLong_ = OptionalLong.$create__();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OptionalLong;
 }
 
 /** @nodts */
 static $loadModules() {
  Long = goog.module.get('java.lang.Long$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Throwable = goog.module.get('java.lang.Throwable$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
/**@type {OptionalLong} @nodts*/
OptionalLong.f_EMPTY__java_util_OptionalLong_;
$Util.$setClassMetadata(OptionalLong, 'java.util.OptionalLong');

exports = OptionalLong;

//# sourceMappingURL=OptionalLong.js.map

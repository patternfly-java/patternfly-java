goog.module('java.util.OptionalDouble$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');
let DoubleConsumer = goog.forwardDeclare('java.util.function.DoubleConsumer$impl');
let DoubleSupplier = goog.forwardDeclare('java.util.function.DoubleSupplier$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @final
 */
class OptionalDouble extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {number} @nodts*/
  this.f_ref__java_util_OptionalDouble_ = 0;
  /**@type {boolean} @nodts*/
  this.f_present__java_util_OptionalDouble_ = false;
 }
 /** @nodts @return {OptionalDouble} */
 static m_empty__java_util_OptionalDouble() {
  OptionalDouble.$clinit();
  return OptionalDouble.f_EMPTY__java_util_OptionalDouble_;
 }
 /** @nodts @return {OptionalDouble} */
 static m_of__double__java_util_OptionalDouble(/** number */ value) {
  OptionalDouble.$clinit();
  return OptionalDouble.$create__double(value);
 }
 //Factory method corresponding to constructor 'OptionalDouble()'.
 /** @nodts @return {!OptionalDouble} */
 static $create__() {
  let $instance = new OptionalDouble();
  $instance.$ctor__java_util_OptionalDouble__void();
  return $instance;
 }
 //Initialization from constructor 'OptionalDouble()'.
 /** @nodts */
 $ctor__java_util_OptionalDouble__void() {
  this.$ctor__java_lang_Object__void();
  this.f_ref__java_util_OptionalDouble_ = 0;
  this.f_present__java_util_OptionalDouble_ = false;
 }
 //Factory method corresponding to constructor 'OptionalDouble(double)'.
 /** @nodts @return {!OptionalDouble} */
 static $create__double(/** number */ value) {
  let $instance = new OptionalDouble();
  $instance.$ctor__java_util_OptionalDouble__double__void(value);
  return $instance;
 }
 //Initialization from constructor 'OptionalDouble(double)'.
 /** @nodts */
 $ctor__java_util_OptionalDouble__double__void(/** number */ value) {
  this.$ctor__java_lang_Object__void();
  this.f_ref__java_util_OptionalDouble_ = value;
  this.f_present__java_util_OptionalDouble_ = true;
 }
 /** @nodts @return {boolean} */
 m_isPresent__boolean() {
  return this.f_present__java_util_OptionalDouble_;
 }
 /** @nodts @return {number} */
 m_getAsDouble__double() {
  InternalPreconditions.m_checkCriticalElement__boolean__void(this.f_present__java_util_OptionalDouble_);
  return this.f_ref__java_util_OptionalDouble_;
 }
 /** @nodts */
 m_ifPresent__java_util_function_DoubleConsumer__void(/** DoubleConsumer */ consumer) {
  if (this.f_present__java_util_OptionalDouble_) {
   consumer.m_accept__double__void(this.f_ref__java_util_OptionalDouble_);
  }
 }
 /** @nodts @return {number} */
 m_orElse__double__double(/** number */ other) {
  return this.f_present__java_util_OptionalDouble_ ? this.f_ref__java_util_OptionalDouble_ : other;
 }
 /** @nodts @return {number} */
 m_orElseGet__java_util_function_DoubleSupplier__double(/** DoubleSupplier */ other) {
  return this.f_present__java_util_OptionalDouble_ ? this.f_ref__java_util_OptionalDouble_ : other.m_getAsDouble__double();
 }
 /** @nodts @template X @return {number} */
 m_orElseThrow__java_util_function_Supplier__double(/** Supplier<X> */ exceptionSupplier) {
  if (this.f_present__java_util_OptionalDouble_) {
   return this.f_ref__java_util_OptionalDouble_;
  }
  throw $Exceptions.toJs(/**@type {!Throwable}*/ ($Casts.$to(exceptionSupplier.m_get__java_lang_Object(), Throwable)));
 }
 /** @override @return {boolean} */
 equals(/** * */ obj) {
  if ($Equality.$same(obj, this)) {
   return true;
  }
  if (!OptionalDouble.$isInstance(obj)) {
   return false;
  }
  let other = /**@type {OptionalDouble}*/ ($Casts.$to(obj, OptionalDouble));
  return this.f_present__java_util_OptionalDouble_ == other.f_present__java_util_OptionalDouble_ && Double.m_compare__double__double__int(this.f_ref__java_util_OptionalDouble_, other.f_ref__java_util_OptionalDouble_) == 0;
 }
 /** @override @return {number} */
 hashCode() {
  return this.f_present__java_util_OptionalDouble_ ? Double.m_hashCode__double__int(this.f_ref__java_util_OptionalDouble_) : 0;
 }
 /** @override @return {?string} */
 toString() {
  return this.f_present__java_util_OptionalDouble_ ? 'OptionalDouble.of(' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Double.m_toString__double__java_lang_String(this.f_ref__java_util_OptionalDouble_)) + ')' : 'OptionalDouble.empty()';
 }
 /** @nodts */
 static $clinit() {
  OptionalDouble.$clinit = () =>{};
  OptionalDouble.$loadModules();
  j_l_Object.$clinit();
  OptionalDouble.f_EMPTY__java_util_OptionalDouble_ = OptionalDouble.$create__();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OptionalDouble;
 }
 
 /** @nodts */
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Throwable = goog.module.get('java.lang.Throwable$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
/**@type {OptionalDouble} @nodts*/
OptionalDouble.f_EMPTY__java_util_OptionalDouble_;
$Util.$setClassMetadata(OptionalDouble, 'java.util.OptionalDouble');

exports = OptionalDouble;

//# sourceMappingURL=OptionalDouble.js.map

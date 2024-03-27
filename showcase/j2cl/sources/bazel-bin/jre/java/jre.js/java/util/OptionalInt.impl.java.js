goog.module('java.util.OptionalInt$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');
let IntConsumer = goog.forwardDeclare('java.util.function.IntConsumer$impl');
let IntSupplier = goog.forwardDeclare('java.util.function.IntSupplier$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @final
 */
class OptionalInt extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {number} @nodts*/
  this.f_ref__java_util_OptionalInt_ = 0;
  /**@type {boolean} @nodts*/
  this.f_present__java_util_OptionalInt_ = false;
 }
 /** @nodts @return {OptionalInt} */
 static m_empty__java_util_OptionalInt() {
  OptionalInt.$clinit();
  return OptionalInt.f_EMPTY__java_util_OptionalInt_;
 }
 /** @nodts @return {OptionalInt} */
 static m_of__int__java_util_OptionalInt(/** number */ value) {
  OptionalInt.$clinit();
  return OptionalInt.$create__int(value);
 }
 //Factory method corresponding to constructor 'OptionalInt()'.
 /** @nodts @return {!OptionalInt} */
 static $create__() {
  let $instance = new OptionalInt();
  $instance.$ctor__java_util_OptionalInt__void();
  return $instance;
 }
 //Initialization from constructor 'OptionalInt()'.
 /** @nodts */
 $ctor__java_util_OptionalInt__void() {
  this.$ctor__java_lang_Object__void();
  this.f_ref__java_util_OptionalInt_ = 0;
  this.f_present__java_util_OptionalInt_ = false;
 }
 //Factory method corresponding to constructor 'OptionalInt(int)'.
 /** @nodts @return {!OptionalInt} */
 static $create__int(/** number */ value) {
  let $instance = new OptionalInt();
  $instance.$ctor__java_util_OptionalInt__int__void(value);
  return $instance;
 }
 //Initialization from constructor 'OptionalInt(int)'.
 /** @nodts */
 $ctor__java_util_OptionalInt__int__void(/** number */ value) {
  this.$ctor__java_lang_Object__void();
  this.f_ref__java_util_OptionalInt_ = value;
  this.f_present__java_util_OptionalInt_ = true;
 }
 /** @nodts @return {boolean} */
 m_isPresent__boolean() {
  return this.f_present__java_util_OptionalInt_;
 }
 /** @nodts @return {number} */
 m_getAsInt__int() {
  InternalPreconditions.m_checkCriticalElement__boolean__void(this.f_present__java_util_OptionalInt_);
  return this.f_ref__java_util_OptionalInt_;
 }
 /** @nodts */
 m_ifPresent__java_util_function_IntConsumer__void(/** IntConsumer */ consumer) {
  if (this.f_present__java_util_OptionalInt_) {
   consumer.m_accept__int__void(this.f_ref__java_util_OptionalInt_);
  }
 }
 /** @nodts @return {number} */
 m_orElse__int__int(/** number */ other) {
  return this.f_present__java_util_OptionalInt_ ? this.f_ref__java_util_OptionalInt_ : other;
 }
 /** @nodts @return {number} */
 m_orElseGet__java_util_function_IntSupplier__int(/** IntSupplier */ other) {
  return this.f_present__java_util_OptionalInt_ ? this.f_ref__java_util_OptionalInt_ : other.m_getAsInt__int();
 }
 /** @nodts @template X @return {number} */
 m_orElseThrow__java_util_function_Supplier__int(/** Supplier<X> */ exceptionSupplier) {
  if (this.f_present__java_util_OptionalInt_) {
   return this.f_ref__java_util_OptionalInt_;
  }
  throw $Exceptions.toJs(/**@type {!Throwable}*/ ($Casts.$to(exceptionSupplier.m_get__java_lang_Object(), Throwable)));
 }
 /** @override @return {boolean} */
 equals(/** * */ obj) {
  if ($Equality.$same(obj, this)) {
   return true;
  }
  if (!OptionalInt.$isInstance(obj)) {
   return false;
  }
  let other = /**@type {OptionalInt}*/ ($Casts.$to(obj, OptionalInt));
  return this.f_present__java_util_OptionalInt_ == other.f_present__java_util_OptionalInt_ && Integer.m_compare__int__int__int(this.f_ref__java_util_OptionalInt_, other.f_ref__java_util_OptionalInt_) == 0;
 }
 /** @override @return {number} */
 hashCode() {
  return this.f_present__java_util_OptionalInt_ ? Integer.m_hashCode__int__int(this.f_ref__java_util_OptionalInt_) : 0;
 }
 /** @override @return {?string} */
 toString() {
  return this.f_present__java_util_OptionalInt_ ? 'OptionalInt.of(' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Integer.m_toString__int__java_lang_String(this.f_ref__java_util_OptionalInt_)) + ')' : 'OptionalInt.empty()';
 }
 /** @nodts */
 static $clinit() {
  OptionalInt.$clinit = () =>{};
  OptionalInt.$loadModules();
  j_l_Object.$clinit();
  OptionalInt.f_EMPTY__java_util_OptionalInt_ = OptionalInt.$create__();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OptionalInt;
 }
 
 /** @nodts */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Throwable = goog.module.get('java.lang.Throwable$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
/**@type {OptionalInt} @nodts*/
OptionalInt.f_EMPTY__java_util_OptionalInt_;
$Util.$setClassMetadata(OptionalInt, 'java.util.OptionalInt');

exports = OptionalInt;

//# sourceMappingURL=OptionalInt.js.map

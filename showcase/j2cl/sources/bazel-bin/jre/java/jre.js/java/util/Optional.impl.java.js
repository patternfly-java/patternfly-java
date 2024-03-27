goog.module('java.util.Optional$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @final
 * @template T
 */
class Optional extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {T} @nodts*/
  this.f_ref__java_util_Optional_;
 }
 /** @nodts @template T_1 @return {Optional<T_1>} */
 static m_empty__java_util_Optional() {
  Optional.$clinit();
  return /**@type {Optional<T_1>}*/ (Optional.f_EMPTY__java_util_Optional_);
 }
 /** @nodts @template T_1 @return {Optional<T_1>} */
 static m_of__java_lang_Object__java_util_Optional(/** T_1 */ value) {
  Optional.$clinit();
  return /**@type {!Optional<T_1>}*/ (Optional.$create__java_lang_Object(InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(value)));
 }
 /** @nodts @template T_1 @return {Optional<T_1>} */
 static m_ofNullable__java_lang_Object__java_util_Optional(/** T_1 */ value) {
  Optional.$clinit();
  return $Equality.$same(value, null) ? /**@type {Optional<T_1>}*/ (Optional.m_empty__java_util_Optional()) : /**@type {Optional<T_1>}*/ (Optional.m_of__java_lang_Object__java_util_Optional(value));
 }
 /** @nodts @template T @return {!Optional<T>} */
 static $create__java_lang_Object(/** T */ ref) {
  let $instance = new Optional();
  $instance.$ctor__java_util_Optional__java_lang_Object__void(ref);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Optional__java_lang_Object__void(/** T */ ref) {
  this.$ctor__java_lang_Object__void();
  this.f_ref__java_util_Optional_ = ref;
 }
 /** @nodts @return {boolean} */
 m_isPresent__boolean() {
  return !$Equality.$same(this.f_ref__java_util_Optional_, null);
 }
 /** @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return $Equality.$same(this.f_ref__java_util_Optional_, null);
 }
 /** @nodts @return {T} */
 m_get__java_lang_Object() {
  InternalPreconditions.m_checkCriticalElement__boolean__void(this.m_isPresent__boolean());
  return this.f_ref__java_util_Optional_;
 }
 /** @nodts */
 m_ifPresent__java_util_function_Consumer__void(/** Consumer<?> */ consumer) {
  if (this.m_isPresent__boolean()) {
   consumer.m_accept__java_lang_Object__void(this.f_ref__java_util_Optional_);
  }
 }
 /** @nodts @return {Optional<T>} */
 m_filter__java_util_function_Predicate__java_util_Optional(/** Predicate<?> */ predicate) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(predicate);
  if (!this.m_isPresent__boolean() || predicate.m_test__java_lang_Object__boolean(this.f_ref__java_util_Optional_)) {
   return this;
  }
  return /**@type {Optional<T>}*/ (Optional.m_empty__java_util_Optional());
 }
 /** @nodts @template U @return {Optional<U>} */
 m_map__java_util_function_Function__java_util_Optional(/** j_u_function_Function<?, ?> */ mapper) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(mapper);
  if (this.m_isPresent__boolean()) {
   return /**@type {Optional<U>}*/ (Optional.m_ofNullable__java_lang_Object__java_util_Optional(mapper.m_apply__java_lang_Object__java_lang_Object(this.f_ref__java_util_Optional_)));
  }
  return /**@type {Optional<U>}*/ (Optional.m_empty__java_util_Optional());
 }
 /** @nodts @template U @return {Optional<U>} */
 m_flatMap__java_util_function_Function__java_util_Optional(/** j_u_function_Function<?, Optional<U>> */ mapper) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(mapper);
  if (this.m_isPresent__boolean()) {
   return /**@type {Optional<U>}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Optional<U>}*/ ($Casts.$to(mapper.m_apply__java_lang_Object__java_lang_Object(this.f_ref__java_util_Optional_), Optional))), Optional));
  }
  return /**@type {Optional<U>}*/ (Optional.m_empty__java_util_Optional());
 }
 /** @nodts @return {Optional<T>} */
 m_or__java_util_function_Supplier__java_util_Optional(/** Supplier<?> */ supplier) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(supplier);
  if (this.m_isPresent__boolean()) {
   return this;
  } else {
   let r = /**@type {!Optional<T>}*/ ($Casts.$to(supplier.m_get__java_lang_Object(), Optional));
   return /**@type {Optional<T>}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(r), Optional));
  }
 }
 /** @nodts @return {T} */
 m_orElse__java_lang_Object__java_lang_Object(/** T */ other) {
  return this.m_isPresent__boolean() ? this.f_ref__java_util_Optional_ : other;
 }
 /** @nodts @return {T} */
 m_orElseGet__java_util_function_Supplier__java_lang_Object(/** Supplier<?> */ other) {
  return this.m_isPresent__boolean() ? this.f_ref__java_util_Optional_ : other.m_get__java_lang_Object();
 }
 /** @nodts @template X @return {T} */
 m_orElseThrow__java_util_function_Supplier__java_lang_Object(/** Supplier<?> */ exceptionSupplier) {
  if (this.m_isPresent__boolean()) {
   return this.f_ref__java_util_Optional_;
  }
  throw $Exceptions.toJs(/**@type {!Throwable}*/ ($Casts.$to(exceptionSupplier.m_get__java_lang_Object(), Throwable)));
 }
 /** @override @return {boolean} */
 equals(/** * */ obj) {
  if ($Equality.$same(obj, this)) {
   return true;
  }
  if (!Optional.$isInstance(obj)) {
   return false;
  }
  let other = /**@type {Optional<*>}*/ ($Casts.$to(obj, Optional));
  return Objects.m_equals__java_lang_Object__java_lang_Object__boolean(this.f_ref__java_util_Optional_, other.f_ref__java_util_Optional_);
 }
 /** @override @return {number} */
 hashCode() {
  return Objects.m_hashCode__java_lang_Object__int(this.f_ref__java_util_Optional_);
 }
 /** @override @return {?string} */
 toString() {
  return this.m_isPresent__boolean() ? 'Optional.of(' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_ref__java_util_Optional_)) + ')' : 'Optional.empty()';
 }
 /** @nodts */
 static $clinit() {
  Optional.$clinit = () =>{};
  Optional.$loadModules();
  j_l_Object.$clinit();
  Optional.f_EMPTY__java_util_Optional_ = /**@type {!Optional<*>}*/ (Optional.$create__java_lang_Object(null));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Optional;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Throwable = goog.module.get('java.lang.Throwable$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
/**@type {Optional<?>} @nodts*/
Optional.f_EMPTY__java_util_Optional_;
$Util.$setClassMetadata(Optional, 'java.util.Optional');

exports = Optional;

//# sourceMappingURL=Optional.js.map

goog.module('java.util.Spliterators.BaseArraySpliterator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Spliterator = goog.require('java.util.Spliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Spliterators = goog.forwardDeclare('java.util.Spliterators$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @abstract
 * @template T, S, C
 * @implements {Spliterator<T>}
 */
class BaseArraySpliterator extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {number} @nodts*/
  this.f_index__java_util_Spliterators_BaseArraySpliterator_ = 0;
  /**@type {number} @nodts*/
  this.f_limit__java_util_Spliterators_BaseArraySpliterator_ = 0;
  /**@type {number} @nodts*/
  this.f_characteristics__java_util_Spliterators_BaseArraySpliterator_ = 0;
 }
 /** @nodts */
 $ctor__java_util_Spliterators_BaseArraySpliterator__int__int__int__void(/** number */ from, /** number */ limit, /** number */ characteristics) {
  this.$ctor__java_lang_Object__void();
  this.f_index__java_util_Spliterators_BaseArraySpliterator_ = from;
  this.f_limit__java_util_Spliterators_BaseArraySpliterator_ = limit;
  this.f_characteristics__java_util_Spliterators_BaseArraySpliterator_ = Spliterators.m_sizeKnownSpliteratorCharacteristics__int__int(characteristics);
 }
 /** @override @nodts @return {number} */
 m_characteristics__int() {
  return this.f_characteristics__java_util_Spliterators_BaseArraySpliterator_;
 }
 /** @override @nodts @return {!$Long} */
 m_estimateSize__long() {
  return $Primitives.widenIntToLong(this.f_limit__java_util_Spliterators_BaseArraySpliterator_ - this.f_index__java_util_Spliterators_BaseArraySpliterator_ | 0);
 }
 /** @nodts */
 m_forEachRemaining__java_lang_Object__void(/** C */ consumer) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(consumer);
  while (this.f_index__java_util_Spliterators_BaseArraySpliterator_ < this.f_limit__java_util_Spliterators_BaseArraySpliterator_) {
   let /** number */ $value;
   this.m_consume__java_lang_Object__int__void(consumer, ($value = this.f_index__java_util_Spliterators_BaseArraySpliterator_, this.f_index__java_util_Spliterators_BaseArraySpliterator_ = this.f_index__java_util_Spliterators_BaseArraySpliterator_ + 1 | 0, $value));
  }
 }
 /** @override @nodts @return {Comparator<?>} */
 m_getComparator__java_util_Comparator() {
  Spliterators.m_checkSorted__int__void(this.f_characteristics__java_util_Spliterators_BaseArraySpliterator_);
  return null;
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** C */ consumer) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(consumer);
  if (this.f_index__java_util_Spliterators_BaseArraySpliterator_ < this.f_limit__java_util_Spliterators_BaseArraySpliterator_) {
   let /** number */ $value;
   this.m_consume__java_lang_Object__int__void(consumer, ($value = this.f_index__java_util_Spliterators_BaseArraySpliterator_, this.f_index__java_util_Spliterators_BaseArraySpliterator_ = this.f_index__java_util_Spliterators_BaseArraySpliterator_ + 1 | 0, $value));
   return true;
  }
  return false;
 }
 /** @override @nodts @return {S} */
 m_trySplit__java_util_Spliterator() {
  return null;
 }
 /** @abstract @nodts */
 m_consume__java_lang_Object__int__void(/** C */ consumer, /** number */ index) {}
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Spliterator.m_forEachRemaining__$default__java_util_Spliterator__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {!$Long} */
 m_getExactSizeIfKnown__long() {
  return Spliterator.m_getExactSizeIfKnown__$default__java_util_Spliterator__long(this);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_hasCharacteristics__int__boolean(/** number */ arg0) {
  return Spliterator.m_hasCharacteristics__$default__java_util_Spliterator__int__boolean(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  BaseArraySpliterator.$clinit = () =>{};
  BaseArraySpliterator.$loadModules();
  j_l_Object.$clinit();
  Spliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BaseArraySpliterator;
 }
 /** @abstract @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ arg0) {}
 
 /** @nodts */
 static $loadModules() {
  Spliterators = goog.module.get('java.util.Spliterators$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
Spliterator.$markImplementor(BaseArraySpliterator);
$Util.$setClassMetadata(BaseArraySpliterator, 'java.util.Spliterators$BaseArraySpliterator');

exports = BaseArraySpliterator;

//# sourceMappingURL=Spliterators$BaseArraySpliterator.js.map

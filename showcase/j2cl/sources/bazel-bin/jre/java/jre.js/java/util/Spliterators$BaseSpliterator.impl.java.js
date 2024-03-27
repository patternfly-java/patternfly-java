goog.module('java.util.Spliterators.BaseSpliterator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Spliterator = goog.require('java.util.Spliterator$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');

/**
 * @abstract
 * @template T, S
 * @implements {Spliterator<T>}
 */
class BaseSpliterator extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {number} @nodts*/
  this.f_characteristics__java_util_Spliterators_BaseSpliterator_ = 0;
  /**@type {!$Long} @nodts*/
  this.f_sizeEstimate__java_util_Spliterators_BaseSpliterator_ = $Long.fromInt(0);
 }
 /** @nodts */
 $ctor__java_util_Spliterators_BaseSpliterator__long__int__void(/** !$Long */ size, /** number */ characteristics) {
  this.$ctor__java_lang_Object__void();
  this.f_sizeEstimate__java_util_Spliterators_BaseSpliterator_ = size;
  this.f_characteristics__java_util_Spliterators_BaseSpliterator_ = (characteristics & Spliterator.f_SIZED__java_util_Spliterator) != 0 ? characteristics | Spliterator.f_SUBSIZED__java_util_Spliterator : characteristics;
 }
 /** @override @nodts @return {number} */
 m_characteristics__int() {
  return this.f_characteristics__java_util_Spliterators_BaseSpliterator_;
 }
 /** @override @nodts @return {!$Long} */
 m_estimateSize__long() {
  return this.f_sizeEstimate__java_util_Spliterators_BaseSpliterator_;
 }
 /** @override @nodts @return {S} */
 m_trySplit__java_util_Spliterator() {
  return null;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Spliterator.m_forEachRemaining__$default__java_util_Spliterator__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Comparator<?>} */
 m_getComparator__java_util_Comparator() {
  return Spliterator.m_getComparator__$default__java_util_Spliterator__java_util_Comparator(this);
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
  BaseSpliterator.$clinit = () =>{};
  BaseSpliterator.$loadModules();
  j_l_Object.$clinit();
  Spliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BaseSpliterator;
 }
 /** @abstract @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ arg0) {}
 
 /** @nodts */
 static $loadModules() {}
}
Spliterator.$markImplementor(BaseSpliterator);
$Util.$setClassMetadata(BaseSpliterator, 'java.util.Spliterators$BaseSpliterator');

exports = BaseSpliterator;

//# sourceMappingURL=Spliterators$BaseSpliterator.js.map

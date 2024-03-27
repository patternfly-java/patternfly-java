goog.module('java.util.Spliterator$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');

/**
 * @interface
 * @template T
 */
class Spliterator {
 /** @abstract @nodts @return {number} */
 m_characteristics__int() {}
 /** @abstract @nodts @return {!$Long} */
 m_estimateSize__long() {}
 /** @abstract @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ consumer) {}
 /** @abstract @nodts @return {Comparator<?>} */
 m_getComparator__java_util_Comparator() {}
 /** @abstract @nodts @return {!$Long} */
 m_getExactSizeIfKnown__long() {}
 /** @abstract @nodts @return {boolean} */
 m_hasCharacteristics__int__boolean(/** number */ characteristics) {}
 /** @abstract @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ consumer) {}
 /** @abstract @nodts @return {Spliterator<T>} */
 m_trySplit__java_util_Spliterator() {}
 /** @nodts @template T */
 static m_forEachRemaining__$default__java_util_Spliterator__java_util_function_Consumer__void(/** !Spliterator<T> */ $thisArg, /** Consumer<?> */ consumer) {
  Spliterator.$clinit();
  while ($thisArg.m_tryAdvance__java_util_function_Consumer__boolean(consumer)) {}
 }
 /** @nodts @template T @return {Comparator<?>} */
 static m_getComparator__$default__java_util_Spliterator__java_util_Comparator(/** !Spliterator<T> */ $thisArg) {
  Spliterator.$clinit();
  throw $Exceptions.toJs(IllegalStateException.$create__());
 }
 /** @nodts @template T @return {!$Long} */
 static m_getExactSizeIfKnown__$default__java_util_Spliterator__long(/** !Spliterator<T> */ $thisArg) {
  Spliterator.$clinit();
  return $thisArg.m_hasCharacteristics__int__boolean(Spliterator.f_SIZED__java_util_Spliterator) ? $thisArg.m_estimateSize__long() : $LongUtils.negate($Long.fromInt(1));
 }
 /** @nodts @template T @return {boolean} */
 static m_hasCharacteristics__$default__java_util_Spliterator__int__boolean(/** !Spliterator<T> */ $thisArg, /** number */ characteristics) {
  Spliterator.$clinit();
  return ($thisArg.m_characteristics__int() & characteristics) != 0;
 }
 /** @nodts */
 static $clinit() {
  Spliterator.$clinit = () =>{};
  Spliterator.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_Spliterator = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_Spliterator;
 }
 
 /** @nodts */
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
 }
}
/**@const {number} @nodts*/
Spliterator.f_DISTINCT__java_util_Spliterator = 1;
/**@const {number} @nodts*/
Spliterator.f_ORDERED__java_util_Spliterator = 16;
/**@const {number} @nodts*/
Spliterator.f_NONNULL__java_util_Spliterator = 256;
/**@const {number} @nodts*/
Spliterator.f_CONCURRENT__java_util_Spliterator = 4096;
/**@const {number} @nodts*/
Spliterator.f_SORTED__java_util_Spliterator = 4;
/**@const {number} @nodts*/
Spliterator.f_SIZED__java_util_Spliterator = 64;
/**@const {number} @nodts*/
Spliterator.f_IMMUTABLE__java_util_Spliterator = 1024;
/**@const {number} @nodts*/
Spliterator.f_SUBSIZED__java_util_Spliterator = 16384;
Spliterator.$markImplementor(/**@type {Function}*/ (Spliterator));
$Util.$setClassMetadataForInterface(Spliterator, 'java.util.Spliterator');

exports = Spliterator;

//# sourceMappingURL=Spliterator.js.map

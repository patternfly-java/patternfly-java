goog.module('java.util.Spliterators.LongArraySpliterator$impl');

const OfLong = goog.require('java.util.Spliterator.OfLong$impl');
const BaseArraySpliterator = goog.require('java.util.Spliterators.BaseArraySpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let LongConsumer = goog.forwardDeclare('java.util.function.LongConsumer$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 * @extends {BaseArraySpliterator<Long, OfLong, LongConsumer>}
 * @implements {OfLong}
 */
class LongArraySpliterator extends BaseArraySpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Array<!$Long>} @nodts*/
  this.f_array__java_util_Spliterators_LongArraySpliterator_;
 }
 //Factory method corresponding to constructor 'LongArraySpliterator(long[], int)'.
 /** @nodts @return {!LongArraySpliterator} */
 static $create__arrayOf_long__int(/** Array<!$Long> */ array, /** number */ characteristics) {
  LongArraySpliterator.$clinit();
  let $instance = new LongArraySpliterator();
  $instance.$ctor__java_util_Spliterators_LongArraySpliterator__arrayOf_long__int__void(array, characteristics);
  return $instance;
 }
 //Initialization from constructor 'LongArraySpliterator(long[], int)'.
 /** @nodts */
 $ctor__java_util_Spliterators_LongArraySpliterator__arrayOf_long__int__void(/** Array<!$Long> */ array, /** number */ characteristics) {
  this.$ctor__java_util_Spliterators_LongArraySpliterator__arrayOf_long__int__int__int__void(array, 0, array.length, characteristics);
 }
 //Factory method corresponding to constructor 'LongArraySpliterator(long[], int, int, int)'.
 /** @nodts @return {!LongArraySpliterator} */
 static $create__arrayOf_long__int__int__int(/** Array<!$Long> */ array, /** number */ from, /** number */ limit, /** number */ characteristics) {
  LongArraySpliterator.$clinit();
  let $instance = new LongArraySpliterator();
  $instance.$ctor__java_util_Spliterators_LongArraySpliterator__arrayOf_long__int__int__int__void(array, from, limit, characteristics);
  return $instance;
 }
 //Initialization from constructor 'LongArraySpliterator(long[], int, int, int)'.
 /** @nodts */
 $ctor__java_util_Spliterators_LongArraySpliterator__arrayOf_long__int__int__int__void(/** Array<!$Long> */ array, /** number */ from, /** number */ limit, /** number */ characteristics) {
  this.$ctor__java_util_Spliterators_BaseArraySpliterator__int__int__int__void(from, limit, characteristics);
  this.f_array__java_util_Spliterators_LongArraySpliterator_ = array;
 }
 /** @nodts */
 m_consume__java_util_function_LongConsumer__int__void(/** LongConsumer */ consumer, /** number */ index) {
  consumer.m_accept__long__void(this.f_array__java_util_Spliterators_LongArraySpliterator_[index]);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  OfLong.m_forEachRemaining__$default__java_util_Spliterator_OfLong__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ arg0) {
  return OfLong.m_tryAdvance__$default__java_util_Spliterator_OfLong__java_util_function_Consumer__boolean(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {OfLong} */
 m_trySplit__java_util_Spliterator_OfPrimitive() {
  return /**@type {OfLong}*/ ($Casts.$to(this.m_trySplit__java_util_Spliterator(), OfLong));
 }
 //Bridge method.
 /** @final @override @nodts */
 m_consume__java_lang_Object__int__void(/** LongConsumer */ arg0, /** number */ arg1) {
  this.m_consume__java_util_function_LongConsumer__int__void(/**@type {LongConsumer}*/ ($Casts.$to(arg0, LongConsumer)), arg1);
 }
 /** @nodts */
 static $clinit() {
  LongArraySpliterator.$clinit = () =>{};
  LongArraySpliterator.$loadModules();
  BaseArraySpliterator.$clinit();
  OfLong.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LongArraySpliterator;
 }
 
 /** @nodts */
 static $loadModules() {
  LongConsumer = goog.module.get('java.util.function.LongConsumer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
OfLong.$markImplementor(LongArraySpliterator);
$Util.$setClassMetadata(LongArraySpliterator, 'java.util.Spliterators$LongArraySpliterator');

exports = LongArraySpliterator;

//# sourceMappingURL=Spliterators$LongArraySpliterator.js.map

goog.module('java.util.Spliterators.DoubleArraySpliterator$impl');

const OfDouble = goog.require('java.util.Spliterator.OfDouble$impl');
const BaseArraySpliterator = goog.require('java.util.Spliterators.BaseArraySpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let DoubleConsumer = goog.forwardDeclare('java.util.function.DoubleConsumer$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 * @extends {BaseArraySpliterator<?number, OfDouble, DoubleConsumer>}
 * @implements {OfDouble}
 */
class DoubleArraySpliterator extends BaseArraySpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Array<number>} @nodts*/
  this.f_array__java_util_Spliterators_DoubleArraySpliterator_;
 }
 //Factory method corresponding to constructor 'DoubleArraySpliterator(double[], int)'.
 /** @nodts @return {!DoubleArraySpliterator} */
 static $create__arrayOf_double__int(/** Array<number> */ array, /** number */ characteristics) {
  DoubleArraySpliterator.$clinit();
  let $instance = new DoubleArraySpliterator();
  $instance.$ctor__java_util_Spliterators_DoubleArraySpliterator__arrayOf_double__int__void(array, characteristics);
  return $instance;
 }
 //Initialization from constructor 'DoubleArraySpliterator(double[], int)'.
 /** @nodts */
 $ctor__java_util_Spliterators_DoubleArraySpliterator__arrayOf_double__int__void(/** Array<number> */ array, /** number */ characteristics) {
  this.$ctor__java_util_Spliterators_DoubleArraySpliterator__arrayOf_double__int__int__int__void(array, 0, array.length, characteristics);
 }
 //Factory method corresponding to constructor 'DoubleArraySpliterator(double[], int, int, int)'.
 /** @nodts @return {!DoubleArraySpliterator} */
 static $create__arrayOf_double__int__int__int(/** Array<number> */ array, /** number */ from, /** number */ limit, /** number */ characteristics) {
  DoubleArraySpliterator.$clinit();
  let $instance = new DoubleArraySpliterator();
  $instance.$ctor__java_util_Spliterators_DoubleArraySpliterator__arrayOf_double__int__int__int__void(array, from, limit, characteristics);
  return $instance;
 }
 //Initialization from constructor 'DoubleArraySpliterator(double[], int, int, int)'.
 /** @nodts */
 $ctor__java_util_Spliterators_DoubleArraySpliterator__arrayOf_double__int__int__int__void(/** Array<number> */ array, /** number */ from, /** number */ limit, /** number */ characteristics) {
  this.$ctor__java_util_Spliterators_BaseArraySpliterator__int__int__int__void(from, limit, characteristics);
  this.f_array__java_util_Spliterators_DoubleArraySpliterator_ = array;
 }
 /** @nodts */
 m_consume__java_util_function_DoubleConsumer__int__void(/** DoubleConsumer */ consumer, /** number */ index) {
  consumer.m_accept__double__void(this.f_array__java_util_Spliterators_DoubleArraySpliterator_[index]);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  OfDouble.m_forEachRemaining__$default__java_util_Spliterator_OfDouble__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ arg0) {
  return OfDouble.m_tryAdvance__$default__java_util_Spliterator_OfDouble__java_util_function_Consumer__boolean(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {OfDouble} */
 m_trySplit__java_util_Spliterator_OfPrimitive() {
  return /**@type {OfDouble}*/ ($Casts.$to(this.m_trySplit__java_util_Spliterator(), OfDouble));
 }
 //Bridge method.
 /** @final @override @nodts */
 m_consume__java_lang_Object__int__void(/** DoubleConsumer */ arg0, /** number */ arg1) {
  this.m_consume__java_util_function_DoubleConsumer__int__void(/**@type {DoubleConsumer}*/ ($Casts.$to(arg0, DoubleConsumer)), arg1);
 }
 /** @nodts */
 static $clinit() {
  DoubleArraySpliterator.$clinit = () =>{};
  DoubleArraySpliterator.$loadModules();
  BaseArraySpliterator.$clinit();
  OfDouble.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DoubleArraySpliterator;
 }
 
 /** @nodts */
 static $loadModules() {
  DoubleConsumer = goog.module.get('java.util.function.DoubleConsumer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
OfDouble.$markImplementor(DoubleArraySpliterator);
$Util.$setClassMetadata(DoubleArraySpliterator, 'java.util.Spliterators$DoubleArraySpliterator');

exports = DoubleArraySpliterator;

//# sourceMappingURL=Spliterators$DoubleArraySpliterator.js.map

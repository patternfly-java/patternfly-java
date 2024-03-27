goog.module('java.util.Spliterators.IntArraySpliterator$impl');

const OfInt = goog.require('java.util.Spliterator.OfInt$impl');
const BaseArraySpliterator = goog.require('java.util.Spliterators.BaseArraySpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let IntConsumer = goog.forwardDeclare('java.util.function.IntConsumer$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 * @extends {BaseArraySpliterator<Integer, OfInt, IntConsumer>}
 * @implements {OfInt}
 */
class IntArraySpliterator extends BaseArraySpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Array<number>} @nodts*/
  this.f_array__java_util_Spliterators_IntArraySpliterator_;
 }
 //Factory method corresponding to constructor 'IntArraySpliterator(int[], int)'.
 /** @nodts @return {!IntArraySpliterator} */
 static $create__arrayOf_int__int(/** Array<number> */ array, /** number */ characteristics) {
  IntArraySpliterator.$clinit();
  let $instance = new IntArraySpliterator();
  $instance.$ctor__java_util_Spliterators_IntArraySpliterator__arrayOf_int__int__void(array, characteristics);
  return $instance;
 }
 //Initialization from constructor 'IntArraySpliterator(int[], int)'.
 /** @nodts */
 $ctor__java_util_Spliterators_IntArraySpliterator__arrayOf_int__int__void(/** Array<number> */ array, /** number */ characteristics) {
  this.$ctor__java_util_Spliterators_IntArraySpliterator__arrayOf_int__int__int__int__void(array, 0, array.length, characteristics);
 }
 //Factory method corresponding to constructor 'IntArraySpliterator(int[], int, int, int)'.
 /** @nodts @return {!IntArraySpliterator} */
 static $create__arrayOf_int__int__int__int(/** Array<number> */ array, /** number */ from, /** number */ limit, /** number */ characteristics) {
  IntArraySpliterator.$clinit();
  let $instance = new IntArraySpliterator();
  $instance.$ctor__java_util_Spliterators_IntArraySpliterator__arrayOf_int__int__int__int__void(array, from, limit, characteristics);
  return $instance;
 }
 //Initialization from constructor 'IntArraySpliterator(int[], int, int, int)'.
 /** @nodts */
 $ctor__java_util_Spliterators_IntArraySpliterator__arrayOf_int__int__int__int__void(/** Array<number> */ array, /** number */ from, /** number */ limit, /** number */ characteristics) {
  this.$ctor__java_util_Spliterators_BaseArraySpliterator__int__int__int__void(from, limit, characteristics);
  this.f_array__java_util_Spliterators_IntArraySpliterator_ = array;
 }
 /** @nodts */
 m_consume__java_util_function_IntConsumer__int__void(/** IntConsumer */ consumer, /** number */ index) {
  consumer.m_accept__int__void(this.f_array__java_util_Spliterators_IntArraySpliterator_[index]);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  OfInt.m_forEachRemaining__$default__java_util_Spliterator_OfInt__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ arg0) {
  return OfInt.m_tryAdvance__$default__java_util_Spliterator_OfInt__java_util_function_Consumer__boolean(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {OfInt} */
 m_trySplit__java_util_Spliterator_OfPrimitive() {
  return /**@type {OfInt}*/ ($Casts.$to(this.m_trySplit__java_util_Spliterator(), OfInt));
 }
 //Bridge method.
 /** @final @override @nodts */
 m_consume__java_lang_Object__int__void(/** IntConsumer */ arg0, /** number */ arg1) {
  this.m_consume__java_util_function_IntConsumer__int__void(/**@type {IntConsumer}*/ ($Casts.$to(arg0, IntConsumer)), arg1);
 }
 /** @nodts */
 static $clinit() {
  IntArraySpliterator.$clinit = () =>{};
  IntArraySpliterator.$loadModules();
  BaseArraySpliterator.$clinit();
  OfInt.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IntArraySpliterator;
 }
 
 /** @nodts */
 static $loadModules() {
  IntConsumer = goog.module.get('java.util.function.IntConsumer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
OfInt.$markImplementor(IntArraySpliterator);
$Util.$setClassMetadata(IntArraySpliterator, 'java.util.Spliterators$IntArraySpliterator');

exports = IntArraySpliterator;

//# sourceMappingURL=Spliterators$IntArraySpliterator.js.map

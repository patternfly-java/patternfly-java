goog.module('java.util.Spliterators.ArraySpliterator$impl');

const Spliterator = goog.require('java.util.Spliterator$impl');
const BaseArraySpliterator = goog.require('java.util.Spliterators.BaseArraySpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 * @template T
 * @extends {BaseArraySpliterator<T, Spliterator<T>, Consumer<?>>}
 * @implements {Spliterator<T>}
 */
class ArraySpliterator extends BaseArraySpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Array<*>} @nodts*/
  this.f_array__java_util_Spliterators_ArraySpliterator_;
 }
 //Factory method corresponding to constructor 'ArraySpliterator(Object[], int)'.
 /** @nodts @template T @return {!ArraySpliterator<T>} */
 static $create__arrayOf_java_lang_Object__int(/** Array<*> */ array, /** number */ characteristics) {
  ArraySpliterator.$clinit();
  let $instance = new ArraySpliterator();
  $instance.$ctor__java_util_Spliterators_ArraySpliterator__arrayOf_java_lang_Object__int__void(array, characteristics);
  return $instance;
 }
 //Initialization from constructor 'ArraySpliterator(Object[], int)'.
 /** @nodts */
 $ctor__java_util_Spliterators_ArraySpliterator__arrayOf_java_lang_Object__int__void(/** Array<*> */ array, /** number */ characteristics) {
  this.$ctor__java_util_Spliterators_ArraySpliterator__arrayOf_java_lang_Object__int__int__int__void(array, 0, array.length, characteristics);
 }
 //Factory method corresponding to constructor 'ArraySpliterator(Object[], int, int, int)'.
 /** @nodts @template T @return {!ArraySpliterator<T>} */
 static $create__arrayOf_java_lang_Object__int__int__int(/** Array<*> */ array, /** number */ from, /** number */ limit, /** number */ characteristics) {
  ArraySpliterator.$clinit();
  let $instance = new ArraySpliterator();
  $instance.$ctor__java_util_Spliterators_ArraySpliterator__arrayOf_java_lang_Object__int__int__int__void(array, from, limit, characteristics);
  return $instance;
 }
 //Initialization from constructor 'ArraySpliterator(Object[], int, int, int)'.
 /** @nodts */
 $ctor__java_util_Spliterators_ArraySpliterator__arrayOf_java_lang_Object__int__int__int__void(/** Array<*> */ array, /** number */ from, /** number */ limit, /** number */ characteristics) {
  this.$ctor__java_util_Spliterators_BaseArraySpliterator__int__int__int__void(from, limit, characteristics);
  this.f_array__java_util_Spliterators_ArraySpliterator_ = array;
 }
 /** @nodts */
 m_consume__java_util_function_Consumer__int__void(/** Consumer<?> */ consumer, /** number */ index) {
  consumer.m_accept__java_lang_Object__void(/**@type {T}*/ (this.f_array__java_util_Spliterators_ArraySpliterator_[index]));
 }
 //Specialized bridge method.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  super.m_forEachRemaining__java_lang_Object__void(arg0);
 }
 //Specialized bridge method.
 /** @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ arg0) {
  return super.m_tryAdvance__java_lang_Object__boolean(arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_consume__java_lang_Object__int__void(/** Consumer<?> */ arg0, /** number */ arg1) {
  this.m_consume__java_util_function_Consumer__int__void(/**@type {Consumer<*>}*/ ($Casts.$to(arg0, Consumer)), arg1);
 }
 /** @nodts */
 static $clinit() {
  ArraySpliterator.$clinit = () =>{};
  ArraySpliterator.$loadModules();
  BaseArraySpliterator.$clinit();
  Spliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ArraySpliterator;
 }
 
 /** @nodts */
 static $loadModules() {
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Spliterator.$markImplementor(ArraySpliterator);
$Util.$setClassMetadata(ArraySpliterator, 'java.util.Spliterators$ArraySpliterator');

exports = ArraySpliterator;

//# sourceMappingURL=Spliterators$ArraySpliterator.js.map

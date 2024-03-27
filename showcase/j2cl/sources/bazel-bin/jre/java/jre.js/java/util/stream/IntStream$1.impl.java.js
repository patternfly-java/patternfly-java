goog.module('java.util.stream.IntStream.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Builder = goog.require('java.util.stream.IntStream.Builder$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let IntConsumer = goog.forwardDeclare('java.util.function.IntConsumer$impl');
let IntStream = goog.forwardDeclare('java.util.stream.IntStream$impl');
let ArrayHelper = goog.forwardDeclare('javaemul.internal.ArrayHelper$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $$int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

/**
 * @implements {Builder}
 */
class $1 extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Array<number>} @nodts*/
  this.f_items__java_util_stream_IntStream_1_;
 }
 /** @nodts @return {!$1} */
 static $create__() {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__java_util_stream_IntStream_1__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_IntStream_1__void() {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_stream_IntStream_1();
 }
 /** @override @nodts */
 m_accept__int__void(/** number */ t) {
  InternalPreconditions.m_checkState__boolean__java_lang_Object__void(!$Equality.$same(this.f_items__java_util_stream_IntStream_1_, null), 'Builder already built');
  ArrayHelper.m_push__java_lang_Object__java_lang_Object__void(this.f_items__java_util_stream_IntStream_1_, t);
 }
 /** @override @nodts @return {IntStream} */
 m_build__java_util_stream_IntStream() {
  InternalPreconditions.m_checkState__boolean__java_lang_Object__void(!$Equality.$same(this.f_items__java_util_stream_IntStream_1_, null), 'Builder already built');
  let stream = Arrays.m_stream__arrayOf_int__java_util_stream_IntStream(this.f_items__java_util_stream_IntStream_1_);
  this.f_items__java_util_stream_IntStream_1_ = null;
  return stream;
 }
 //Default method forwarding stub.
 /** @override @nodts @return {IntConsumer} */
 m_andThen__java_util_function_IntConsumer__java_util_function_IntConsumer(/** IntConsumer */ arg0) {
  return IntConsumer.m_andThen__$default__java_util_function_IntConsumer__java_util_function_IntConsumer__java_util_function_IntConsumer(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Builder} */
 m_add__int__java_util_stream_IntStream_Builder(/** number */ arg0) {
  return Builder.m_add__$default__java_util_stream_IntStream_Builder__int__java_util_stream_IntStream_Builder(this, arg0);
 }
 /** @private @nodts */
 $init__void_$p_java_util_stream_IntStream_1() {
  this.f_items__java_util_stream_IntStream_1_ = /**@type {!Array<number>}*/ ($Arrays.$create([0], $$int));
 }
 /** @nodts */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
  Builder.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 /** @nodts */
 static $loadModules() {
  Arrays = goog.module.get('java.util.Arrays$impl');
  IntConsumer = goog.module.get('java.util.function.IntConsumer$impl');
  ArrayHelper = goog.module.get('javaemul.internal.ArrayHelper$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $$int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
Builder.$markImplementor($1);
$Util.$setClassMetadata($1, 'java.util.stream.IntStream$1');

exports = $1;

//# sourceMappingURL=IntStream$1.js.map

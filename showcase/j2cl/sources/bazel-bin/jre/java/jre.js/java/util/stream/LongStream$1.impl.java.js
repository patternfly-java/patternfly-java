goog.module('java.util.stream.LongStream.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Builder = goog.require('java.util.stream.LongStream.Builder$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let LongConsumer = goog.forwardDeclare('java.util.function.LongConsumer$impl');
let LongStream = goog.forwardDeclare('java.util.stream.LongStream$impl');
let ArrayHelper = goog.forwardDeclare('javaemul.internal.ArrayHelper$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $$long = goog.forwardDeclare('vmbootstrap.primitives.$long$impl');

/**
 * @implements {Builder}
 */
class $1 extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Array<!$Long>} @nodts*/
  this.f_items__java_util_stream_LongStream_1_;
 }
 /** @nodts @return {!$1} */
 static $create__() {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__java_util_stream_LongStream_1__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_LongStream_1__void() {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_stream_LongStream_1();
 }
 /** @override @nodts */
 m_accept__long__void(/** !$Long */ t) {
  InternalPreconditions.m_checkState__boolean__java_lang_Object__void(!$Equality.$same(this.f_items__java_util_stream_LongStream_1_, null), 'Builder already built');
  ArrayHelper.m_push__java_lang_Object__java_lang_Object__void(this.f_items__java_util_stream_LongStream_1_, t);
 }
 /** @override @nodts @return {LongStream} */
 m_build__java_util_stream_LongStream() {
  InternalPreconditions.m_checkState__boolean__java_lang_Object__void(!$Equality.$same(this.f_items__java_util_stream_LongStream_1_, null), 'Builder already built');
  let stream = Arrays.m_stream__arrayOf_long__java_util_stream_LongStream(this.f_items__java_util_stream_LongStream_1_);
  this.f_items__java_util_stream_LongStream_1_ = null;
  return stream;
 }
 //Default method forwarding stub.
 /** @override @nodts @return {LongConsumer} */
 m_andThen__java_util_function_LongConsumer__java_util_function_LongConsumer(/** LongConsumer */ arg0) {
  return LongConsumer.m_andThen__$default__java_util_function_LongConsumer__java_util_function_LongConsumer__java_util_function_LongConsumer(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Builder} */
 m_add__long__java_util_stream_LongStream_Builder(/** !$Long */ arg0) {
  return Builder.m_add__$default__java_util_stream_LongStream_Builder__long__java_util_stream_LongStream_Builder(this, arg0);
 }
 /** @private @nodts */
 $init__void_$p_java_util_stream_LongStream_1() {
  this.f_items__java_util_stream_LongStream_1_ = /**@type {!Array<!$Long>}*/ ($Arrays.$create([0], $$long));
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
  LongConsumer = goog.module.get('java.util.function.LongConsumer$impl');
  ArrayHelper = goog.module.get('javaemul.internal.ArrayHelper$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $$long = goog.module.get('vmbootstrap.primitives.$long$impl');
 }
}
Builder.$markImplementor($1);
$Util.$setClassMetadata($1, 'java.util.stream.LongStream$1');

exports = $1;

//# sourceMappingURL=LongStream$1.js.map

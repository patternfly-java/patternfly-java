goog.module('java.util.stream.Stream.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Builder = goog.require('java.util.stream.Stream.Builder$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let ArrayHelper = goog.forwardDeclare('javaemul.internal.ArrayHelper$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/**
 * @template T
 * @implements {Builder<T>}
 */
class $1 extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Array<*>} @nodts*/
  this.f_items__java_util_stream_Stream_1_;
 }
 /** @nodts @template T @return {!$1<T>} */
 static $create__() {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__java_util_stream_Stream_1__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_Stream_1__void() {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_stream_Stream_1();
 }
 /** @override @nodts */
 m_accept__java_lang_Object__void(/** T */ t) {
  InternalPreconditions.m_checkState__boolean__java_lang_Object__void(!$Equality.$same(this.f_items__java_util_stream_Stream_1_, null), 'Builder already built');
  ArrayHelper.m_push__java_lang_Object__java_lang_Object__void(this.f_items__java_util_stream_Stream_1_, t);
 }
 /** @override @nodts @return {Stream<T>} */
 m_build__java_util_stream_Stream() {
  InternalPreconditions.m_checkState__boolean__java_lang_Object__void(!$Equality.$same(this.f_items__java_util_stream_Stream_1_, null), 'Builder already built');
  let stream = /**@type {Stream<T>}*/ (Arrays.m_stream__arrayOf_java_lang_Object__java_util_stream_Stream(this.f_items__java_util_stream_Stream_1_));
  this.f_items__java_util_stream_Stream_1_ = null;
  return stream;
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Consumer<T>} */
 m_andThen__java_util_function_Consumer__java_util_function_Consumer(/** Consumer<?> */ arg0) {
  return /**@type {Consumer<T>}*/ (Consumer.m_andThen__$default__java_util_function_Consumer__java_util_function_Consumer__java_util_function_Consumer(this, arg0));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Builder<T>} */
 m_add__java_lang_Object__java_util_stream_Stream_Builder(/** T */ arg0) {
  return /**@type {Builder<T>}*/ (Builder.m_add__$default__java_util_stream_Stream_Builder__java_lang_Object__java_util_stream_Stream_Builder(this, arg0));
 }
 /** @private @nodts */
 $init__void_$p_java_util_stream_Stream_1() {
  this.f_items__java_util_stream_Stream_1_ = new Array(0);
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
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  ArrayHelper = goog.module.get('javaemul.internal.ArrayHelper$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
Builder.$markImplementor($1);
$Util.$setClassMetadata($1, 'java.util.stream.Stream$1');

exports = $1;

//# sourceMappingURL=Stream$1.js.map

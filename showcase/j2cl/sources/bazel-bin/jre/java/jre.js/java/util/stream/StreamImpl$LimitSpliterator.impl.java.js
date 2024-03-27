goog.module('java.util.stream.StreamImpl.LimitSpliterator$impl');

const AbstractSpliterator = goog.require('java.util.Spliterators.AbstractSpliterator$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let Math = goog.forwardDeclare('java.lang.Math$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @final
 * @template T
 * @extends {AbstractSpliterator<T>}
 */
class LimitSpliterator extends AbstractSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {!$Long} @nodts*/
  this.f_limit__java_util_stream_StreamImpl_LimitSpliterator_ = $Long.fromInt(0);
  /**@type {Spliterator<T>} @nodts*/
  this.f_original__java_util_stream_StreamImpl_LimitSpliterator_;
  /**@type {number} @nodts*/
  this.f_position__java_util_stream_StreamImpl_LimitSpliterator_ = 0;
 }
 /** @nodts @template T @return {!LimitSpliterator<T>} */
 static $create__long__java_util_Spliterator(/** !$Long */ limit, /** Spliterator<T> */ original) {
  LimitSpliterator.$clinit();
  let $instance = new LimitSpliterator();
  $instance.$ctor__java_util_stream_StreamImpl_LimitSpliterator__long__java_util_Spliterator__void(limit, original);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_StreamImpl_LimitSpliterator__long__java_util_Spliterator__void(/** !$Long */ limit, /** Spliterator<T> */ original) {
  this.$ctor__java_util_Spliterators_AbstractSpliterator__long__int__void(original.m_hasCharacteristics__int__boolean(Spliterator.f_SIZED__java_util_Spliterator) ? Math.m_min__long__long__long(original.m_estimateSize__long(), limit) : Long.f_MAX_VALUE__java_lang_Long, original.m_characteristics__int());
  this.$init__void_$p_java_util_stream_StreamImpl_LimitSpliterator();
  this.f_limit__java_util_stream_StreamImpl_LimitSpliterator_ = limit;
  this.f_original__java_util_stream_StreamImpl_LimitSpliterator_ = original;
 }
 /** @override @nodts @return {Comparator<?>} */
 m_getComparator__java_util_Comparator() {
  return this.f_original__java_util_stream_StreamImpl_LimitSpliterator_.m_getComparator__java_util_Comparator();
 }
 /** @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ action) {
  if ($LongUtils.greaterEquals($Primitives.widenIntToLong(this.f_position__java_util_stream_StreamImpl_LimitSpliterator_), this.f_limit__java_util_stream_StreamImpl_LimitSpliterator_)) {
   return false;
  }
  let result = this.f_original__java_util_stream_StreamImpl_LimitSpliterator_.m_tryAdvance__java_util_function_Consumer__boolean(action);
  this.f_position__java_util_stream_StreamImpl_LimitSpliterator_ = this.f_position__java_util_stream_StreamImpl_LimitSpliterator_ + 1 | 0;
  return result;
 }
 /** @private @nodts */
 $init__void_$p_java_util_stream_StreamImpl_LimitSpliterator() {
  this.f_position__java_util_stream_StreamImpl_LimitSpliterator_ = 0;
 }
 /** @nodts */
 static $clinit() {
  LimitSpliterator.$clinit = () =>{};
  LimitSpliterator.$loadModules();
  AbstractSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LimitSpliterator;
 }
 
 /** @nodts */
 static $loadModules() {
  Long = goog.module.get('java.lang.Long$impl');
  Math = goog.module.get('java.lang.Math$impl');
  Spliterator = goog.module.get('java.util.Spliterator$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
$Util.$setClassMetadata(LimitSpliterator, 'java.util.stream.StreamImpl$LimitSpliterator');

exports = LimitSpliterator;

//# sourceMappingURL=StreamImpl$LimitSpliterator.js.map

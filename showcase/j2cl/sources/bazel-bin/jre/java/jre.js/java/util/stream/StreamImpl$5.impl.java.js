goog.module('java.util.stream.StreamImpl.$5$impl');

const AbstractSpliterator = goog.require('java.util.Spliterators.AbstractSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Comparable = goog.forwardDeclare('java.lang.Comparable$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let StreamImpl = goog.forwardDeclare('java.util.stream.StreamImpl$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @template T
 * @extends {AbstractSpliterator<T>}
 */
class $5 extends AbstractSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {StreamImpl<T>} @nodts*/
  this.$outer_this__java_util_stream_StreamImpl_5;
  /**@type {Spliterator<T>} @nodts*/
  this.f_ordered__java_util_stream_StreamImpl_5;
  /**@type {Comparator<?>} @nodts*/
  this.$captured_comparator__java_util_stream_StreamImpl_5;
 }
 /** @nodts @template T @return {!$5<T>} */
 static $create__java_util_stream_StreamImpl__java_util_Comparator__long__int(/** StreamImpl<T> */ $outer_this, /** Comparator<?> */ $captured_comparator, /** !$Long */ $_0, /** number */ $_1) {
  $5.$clinit();
  let $instance = new $5();
  $instance.$ctor__java_util_stream_StreamImpl_5__java_util_stream_StreamImpl__java_util_Comparator__long__int__void($outer_this, $captured_comparator, $_0, $_1);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_stream_StreamImpl_5__java_util_stream_StreamImpl__java_util_Comparator__long__int__void(/** StreamImpl<T> */ $outer_this, /** Comparator<?> */ $captured_comparator, /** !$Long */ $_0, /** number */ $_1) {
  this.$outer_this__java_util_stream_StreamImpl_5 = $outer_this;
  this.$captured_comparator__java_util_stream_StreamImpl_5 = $captured_comparator;
  this.$ctor__java_util_Spliterators_AbstractSpliterator__long__int__void($_0, $_1);
  this.$init__void_$p_java_util_stream_StreamImpl_5();
 }
 /** @override @nodts @return {Comparator<?>} */
 m_getComparator__java_util_Comparator() {
  return $Equality.$same(this.$captured_comparator__java_util_stream_StreamImpl_5, /**@type {Comparator<(Comparable|boolean|number|string)>}*/ (Comparator.m_naturalOrder__java_util_Comparator())) ? null : this.$captured_comparator__java_util_stream_StreamImpl_5;
 }
 /** @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ action) {
  if ($Equality.$same(this.f_ordered__java_util_stream_StreamImpl_5, null)) {
   let list = /**@type {!ArrayList<T>}*/ (ArrayList.$create__());
   this.$outer_this__java_util_stream_StreamImpl_5.f_spliterator__java_util_stream_StreamImpl_.m_forEachRemaining__java_util_function_Consumer__void(Consumer.$adapt((/** ? */ arg0) =>{
    list.add(arg0);
   }));
   Collections.m_sort__java_util_List__java_util_Comparator__void(list, this.$captured_comparator__java_util_stream_StreamImpl_5);
   this.f_ordered__java_util_stream_StreamImpl_5 = list.m_spliterator__java_util_Spliterator();
  }
  return this.f_ordered__java_util_stream_StreamImpl_5.m_tryAdvance__java_util_function_Consumer__boolean(action);
 }
 /** @private @nodts */
 $init__void_$p_java_util_stream_StreamImpl_5() {
  this.f_ordered__java_util_stream_StreamImpl_5 = null;
 }
 /** @nodts */
 static $clinit() {
  $5.$clinit = () =>{};
  $5.$loadModules();
  AbstractSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $5;
 }
 
 /** @nodts */
 static $loadModules() {
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  Comparator = goog.module.get('java.util.Comparator$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
$Util.$setClassMetadata($5, 'java.util.stream.StreamImpl$5');

exports = $5;

//# sourceMappingURL=StreamImpl$5.js.map

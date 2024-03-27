goog.module('java.util.Spliterators.LongConsumerIterator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const PrimitiveIterator_OfLong = goog.require('java.util.PrimitiveIterator.OfLong$impl');
const LongConsumer = goog.require('java.util.function.LongConsumer$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let OfLong = goog.forwardDeclare('java.util.Spliterator.OfLong$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 * @implements {LongConsumer}
 * @implements {PrimitiveIterator_OfLong}
 */
class LongConsumerIterator extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {OfLong} @nodts*/
  this.f_spliterator__java_util_Spliterators_LongConsumerIterator_;
  /**@type {!$Long} @nodts*/
  this.f_nextElement__java_util_Spliterators_LongConsumerIterator_ = $Long.fromInt(0);
  /**@type {boolean} @nodts*/
  this.f_hasElement__java_util_Spliterators_LongConsumerIterator_ = false;
 }
 /** @nodts @return {!LongConsumerIterator} */
 static $create__java_util_Spliterator_OfLong(/** OfLong */ spliterator) {
  LongConsumerIterator.$clinit();
  let $instance = new LongConsumerIterator();
  $instance.$ctor__java_util_Spliterators_LongConsumerIterator__java_util_Spliterator_OfLong__void(spliterator);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Spliterators_LongConsumerIterator__java_util_Spliterator_OfLong__void(/** OfLong */ spliterator) {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_Spliterators_LongConsumerIterator();
  this.f_spliterator__java_util_Spliterators_LongConsumerIterator_ = /**@type {OfLong}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(spliterator), OfLong));
 }
 /** @override @nodts */
 m_accept__long__void(/** !$Long */ l) {
  this.f_nextElement__java_util_Spliterators_LongConsumerIterator_ = l;
 }
 /** @override @nodts @return {boolean} */
 m_hasNext__boolean() {
  if (!this.f_hasElement__java_util_Spliterators_LongConsumerIterator_) {
   this.f_hasElement__java_util_Spliterators_LongConsumerIterator_ = this.f_spliterator__java_util_Spliterators_LongConsumerIterator_.m_tryAdvance__java_lang_Object__boolean(this);
  }
  return this.f_hasElement__java_util_Spliterators_LongConsumerIterator_;
 }
 /** @override @nodts @return {!$Long} */
 m_nextLong__long() {
  InternalPreconditions.m_checkCriticalElement__boolean__void(this.m_hasNext__boolean());
  this.f_hasElement__java_util_Spliterators_LongConsumerIterator_ = false;
  return this.f_nextElement__java_util_Spliterators_LongConsumerIterator_;
 }
 //Default method forwarding stub.
 /** @override @nodts @return {LongConsumer} */
 m_andThen__java_util_function_LongConsumer__java_util_function_LongConsumer(/** LongConsumer */ arg0) {
  return LongConsumer.m_andThen__$default__java_util_function_LongConsumer__java_util_function_LongConsumer__java_util_function_LongConsumer(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  PrimitiveIterator_OfLong.m_forEachRemaining__$default__java_util_PrimitiveIterator_OfLong__java_util_function_Consumer__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Long} */
 m_next__java_lang_Object() {
  return PrimitiveIterator_OfLong.m_next__$default__java_util_PrimitiveIterator_OfLong__java_lang_Long(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_remove__void() {
  Iterator.m_remove__$default__java_util_Iterator__void(this);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_forEachRemaining__java_lang_Object__void(/** LongConsumer */ arg0) {
  PrimitiveIterator_OfLong.m_forEachRemaining__$default__java_util_PrimitiveIterator_OfLong__java_util_function_LongConsumer__void(this, /**@type {LongConsumer}*/ ($Casts.$to(arg0, LongConsumer)));
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_LongConsumer__void(/** LongConsumer */ arg0) {
  PrimitiveIterator_OfLong.m_forEachRemaining__$default__java_util_PrimitiveIterator_OfLong__java_util_function_LongConsumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Long} */
 m_next__java_lang_Long() {
  return PrimitiveIterator_OfLong.m_next__$default__java_util_PrimitiveIterator_OfLong__java_lang_Long(this);
 }
 /** @private @nodts */
 $init__void_$p_java_util_Spliterators_LongConsumerIterator() {
  this.f_hasElement__java_util_Spliterators_LongConsumerIterator_ = false;
 }
 /** @nodts */
 static $clinit() {
  LongConsumerIterator.$clinit = () =>{};
  LongConsumerIterator.$loadModules();
  j_l_Object.$clinit();
  LongConsumer.$clinit();
  PrimitiveIterator_OfLong.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LongConsumerIterator;
 }
 
 /** @nodts */
 static $loadModules() {
  Iterator = goog.module.get('java.util.Iterator$impl');
  OfLong = goog.module.get('java.util.Spliterator.OfLong$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
LongConsumer.$markImplementor(LongConsumerIterator);
PrimitiveIterator_OfLong.$markImplementor(LongConsumerIterator);
$Util.$setClassMetadata(LongConsumerIterator, 'java.util.Spliterators$LongConsumerIterator');

exports = LongConsumerIterator;

//# sourceMappingURL=Spliterators$LongConsumerIterator.js.map

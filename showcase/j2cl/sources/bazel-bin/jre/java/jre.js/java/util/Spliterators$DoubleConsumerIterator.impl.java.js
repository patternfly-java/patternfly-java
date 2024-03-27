goog.module('java.util.Spliterators.DoubleConsumerIterator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const PrimitiveIterator_OfDouble = goog.require('java.util.PrimitiveIterator.OfDouble$impl');
const DoubleConsumer = goog.require('java.util.function.DoubleConsumer$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let OfDouble = goog.forwardDeclare('java.util.Spliterator.OfDouble$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 * @implements {DoubleConsumer}
 * @implements {PrimitiveIterator_OfDouble}
 */
class DoubleConsumerIterator extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {OfDouble} @nodts*/
  this.f_spliterator__java_util_Spliterators_DoubleConsumerIterator_;
  /**@type {number} @nodts*/
  this.f_nextElement__java_util_Spliterators_DoubleConsumerIterator_ = 0;
  /**@type {boolean} @nodts*/
  this.f_hasElement__java_util_Spliterators_DoubleConsumerIterator_ = false;
 }
 /** @nodts @return {!DoubleConsumerIterator} */
 static $create__java_util_Spliterator_OfDouble(/** OfDouble */ spliterator) {
  DoubleConsumerIterator.$clinit();
  let $instance = new DoubleConsumerIterator();
  $instance.$ctor__java_util_Spliterators_DoubleConsumerIterator__java_util_Spliterator_OfDouble__void(spliterator);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Spliterators_DoubleConsumerIterator__java_util_Spliterator_OfDouble__void(/** OfDouble */ spliterator) {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_Spliterators_DoubleConsumerIterator();
  this.f_spliterator__java_util_Spliterators_DoubleConsumerIterator_ = /**@type {OfDouble}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(spliterator), OfDouble));
 }
 /** @override @nodts */
 m_accept__double__void(/** number */ d) {
  this.f_nextElement__java_util_Spliterators_DoubleConsumerIterator_ = d;
 }
 /** @override @nodts @return {boolean} */
 m_hasNext__boolean() {
  if (!this.f_hasElement__java_util_Spliterators_DoubleConsumerIterator_) {
   this.f_hasElement__java_util_Spliterators_DoubleConsumerIterator_ = this.f_spliterator__java_util_Spliterators_DoubleConsumerIterator_.m_tryAdvance__java_lang_Object__boolean(this);
  }
  return this.f_hasElement__java_util_Spliterators_DoubleConsumerIterator_;
 }
 /** @override @nodts @return {number} */
 m_nextDouble__double() {
  InternalPreconditions.m_checkCriticalElement__boolean__void(this.m_hasNext__boolean());
  this.f_hasElement__java_util_Spliterators_DoubleConsumerIterator_ = false;
  return this.f_nextElement__java_util_Spliterators_DoubleConsumerIterator_;
 }
 //Default method forwarding stub.
 /** @override @nodts @return {DoubleConsumer} */
 m_andThen__java_util_function_DoubleConsumer__java_util_function_DoubleConsumer(/** DoubleConsumer */ arg0) {
  return DoubleConsumer.m_andThen__$default__java_util_function_DoubleConsumer__java_util_function_DoubleConsumer__java_util_function_DoubleConsumer(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  PrimitiveIterator_OfDouble.m_forEachRemaining__$default__java_util_PrimitiveIterator_OfDouble__java_util_function_Consumer__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {?number} */
 m_next__java_lang_Object() {
  return PrimitiveIterator_OfDouble.m_next__$default__java_util_PrimitiveIterator_OfDouble__java_lang_Double(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_remove__void() {
  Iterator.m_remove__$default__java_util_Iterator__void(this);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_forEachRemaining__java_lang_Object__void(/** DoubleConsumer */ arg0) {
  PrimitiveIterator_OfDouble.m_forEachRemaining__$default__java_util_PrimitiveIterator_OfDouble__java_util_function_DoubleConsumer__void(this, /**@type {DoubleConsumer}*/ ($Casts.$to(arg0, DoubleConsumer)));
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_DoubleConsumer__void(/** DoubleConsumer */ arg0) {
  PrimitiveIterator_OfDouble.m_forEachRemaining__$default__java_util_PrimitiveIterator_OfDouble__java_util_function_DoubleConsumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?number} */
 m_next__java_lang_Double() {
  return PrimitiveIterator_OfDouble.m_next__$default__java_util_PrimitiveIterator_OfDouble__java_lang_Double(this);
 }
 /** @private @nodts */
 $init__void_$p_java_util_Spliterators_DoubleConsumerIterator() {
  this.f_hasElement__java_util_Spliterators_DoubleConsumerIterator_ = false;
 }
 /** @nodts */
 static $clinit() {
  DoubleConsumerIterator.$clinit = () =>{};
  DoubleConsumerIterator.$loadModules();
  j_l_Object.$clinit();
  DoubleConsumer.$clinit();
  PrimitiveIterator_OfDouble.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DoubleConsumerIterator;
 }
 
 /** @nodts */
 static $loadModules() {
  Iterator = goog.module.get('java.util.Iterator$impl');
  OfDouble = goog.module.get('java.util.Spliterator.OfDouble$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
DoubleConsumer.$markImplementor(DoubleConsumerIterator);
PrimitiveIterator_OfDouble.$markImplementor(DoubleConsumerIterator);
$Util.$setClassMetadata(DoubleConsumerIterator, 'java.util.Spliterators$DoubleConsumerIterator');

exports = DoubleConsumerIterator;

//# sourceMappingURL=Spliterators$DoubleConsumerIterator.js.map

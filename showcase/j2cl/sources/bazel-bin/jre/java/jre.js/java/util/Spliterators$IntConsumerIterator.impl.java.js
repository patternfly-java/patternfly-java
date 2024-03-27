goog.module('java.util.Spliterators.IntConsumerIterator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const PrimitiveIterator_OfInt = goog.require('java.util.PrimitiveIterator.OfInt$impl');
const IntConsumer = goog.require('java.util.function.IntConsumer$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let OfInt = goog.forwardDeclare('java.util.Spliterator.OfInt$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 * @implements {IntConsumer}
 * @implements {PrimitiveIterator_OfInt}
 */
class IntConsumerIterator extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {OfInt} @nodts*/
  this.f_spliterator__java_util_Spliterators_IntConsumerIterator_;
  /**@type {number} @nodts*/
  this.f_nextElement__java_util_Spliterators_IntConsumerIterator_ = 0;
  /**@type {boolean} @nodts*/
  this.f_hasElement__java_util_Spliterators_IntConsumerIterator_ = false;
 }
 /** @nodts @return {!IntConsumerIterator} */
 static $create__java_util_Spliterator_OfInt(/** OfInt */ spliterator) {
  IntConsumerIterator.$clinit();
  let $instance = new IntConsumerIterator();
  $instance.$ctor__java_util_Spliterators_IntConsumerIterator__java_util_Spliterator_OfInt__void(spliterator);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Spliterators_IntConsumerIterator__java_util_Spliterator_OfInt__void(/** OfInt */ spliterator) {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_Spliterators_IntConsumerIterator();
  this.f_spliterator__java_util_Spliterators_IntConsumerIterator_ = /**@type {OfInt}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(spliterator), OfInt));
 }
 /** @override @nodts */
 m_accept__int__void(/** number */ i) {
  this.f_nextElement__java_util_Spliterators_IntConsumerIterator_ = i;
 }
 /** @override @nodts @return {boolean} */
 m_hasNext__boolean() {
  if (!this.f_hasElement__java_util_Spliterators_IntConsumerIterator_) {
   this.f_hasElement__java_util_Spliterators_IntConsumerIterator_ = this.f_spliterator__java_util_Spliterators_IntConsumerIterator_.m_tryAdvance__java_lang_Object__boolean(this);
  }
  return this.f_hasElement__java_util_Spliterators_IntConsumerIterator_;
 }
 /** @override @nodts @return {number} */
 m_nextInt__int() {
  InternalPreconditions.m_checkCriticalElement__boolean__void(this.m_hasNext__boolean());
  this.f_hasElement__java_util_Spliterators_IntConsumerIterator_ = false;
  return this.f_nextElement__java_util_Spliterators_IntConsumerIterator_;
 }
 //Default method forwarding stub.
 /** @override @nodts @return {IntConsumer} */
 m_andThen__java_util_function_IntConsumer__java_util_function_IntConsumer(/** IntConsumer */ arg0) {
  return IntConsumer.m_andThen__$default__java_util_function_IntConsumer__java_util_function_IntConsumer__java_util_function_IntConsumer(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  PrimitiveIterator_OfInt.m_forEachRemaining__$default__java_util_PrimitiveIterator_OfInt__java_util_function_Consumer__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Integer} */
 m_next__java_lang_Object() {
  return PrimitiveIterator_OfInt.m_next__$default__java_util_PrimitiveIterator_OfInt__java_lang_Integer(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_remove__void() {
  Iterator.m_remove__$default__java_util_Iterator__void(this);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_forEachRemaining__java_lang_Object__void(/** IntConsumer */ arg0) {
  PrimitiveIterator_OfInt.m_forEachRemaining__$default__java_util_PrimitiveIterator_OfInt__java_util_function_IntConsumer__void(this, /**@type {IntConsumer}*/ ($Casts.$to(arg0, IntConsumer)));
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_IntConsumer__void(/** IntConsumer */ arg0) {
  PrimitiveIterator_OfInt.m_forEachRemaining__$default__java_util_PrimitiveIterator_OfInt__java_util_function_IntConsumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Integer} */
 m_next__java_lang_Integer() {
  return PrimitiveIterator_OfInt.m_next__$default__java_util_PrimitiveIterator_OfInt__java_lang_Integer(this);
 }
 /** @private @nodts */
 $init__void_$p_java_util_Spliterators_IntConsumerIterator() {
  this.f_hasElement__java_util_Spliterators_IntConsumerIterator_ = false;
 }
 /** @nodts */
 static $clinit() {
  IntConsumerIterator.$clinit = () =>{};
  IntConsumerIterator.$loadModules();
  j_l_Object.$clinit();
  IntConsumer.$clinit();
  PrimitiveIterator_OfInt.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IntConsumerIterator;
 }
 
 /** @nodts */
 static $loadModules() {
  Iterator = goog.module.get('java.util.Iterator$impl');
  OfInt = goog.module.get('java.util.Spliterator.OfInt$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IntConsumer.$markImplementor(IntConsumerIterator);
PrimitiveIterator_OfInt.$markImplementor(IntConsumerIterator);
$Util.$setClassMetadata(IntConsumerIterator, 'java.util.Spliterators$IntConsumerIterator');

exports = IntConsumerIterator;

//# sourceMappingURL=Spliterators$IntConsumerIterator.js.map

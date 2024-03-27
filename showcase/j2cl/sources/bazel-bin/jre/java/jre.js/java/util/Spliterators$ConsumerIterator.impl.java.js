goog.module('java.util.Spliterators.ConsumerIterator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const Consumer = goog.require('java.util.function.Consumer$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 * @template T
 * @implements {Consumer<T>}
 * @implements {Iterator<T>}
 */
class ConsumerIterator extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Spliterator<?>} @nodts*/
  this.f_spliterator__java_util_Spliterators_ConsumerIterator_;
  /**@type {T} @nodts*/
  this.f_nextElement__java_util_Spliterators_ConsumerIterator_;
  /**@type {boolean} @nodts*/
  this.f_hasElement__java_util_Spliterators_ConsumerIterator_ = false;
 }
 /** @nodts @template T @return {!ConsumerIterator<T>} */
 static $create__java_util_Spliterator(/** Spliterator<?> */ spliterator) {
  ConsumerIterator.$clinit();
  let $instance = new ConsumerIterator();
  $instance.$ctor__java_util_Spliterators_ConsumerIterator__java_util_Spliterator__void(spliterator);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Spliterators_ConsumerIterator__java_util_Spliterator__void(/** Spliterator<?> */ spliterator) {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_Spliterators_ConsumerIterator();
  this.f_spliterator__java_util_Spliterators_ConsumerIterator_ = /**@type {Spliterator<*>}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(spliterator), Spliterator));
 }
 /** @override @nodts */
 m_accept__java_lang_Object__void(/** T */ element) {
  this.f_nextElement__java_util_Spliterators_ConsumerIterator_ = element;
 }
 /** @override @nodts @return {boolean} */
 m_hasNext__boolean() {
  if (!this.f_hasElement__java_util_Spliterators_ConsumerIterator_) {
   this.f_hasElement__java_util_Spliterators_ConsumerIterator_ = this.f_spliterator__java_util_Spliterators_ConsumerIterator_.m_tryAdvance__java_util_function_Consumer__boolean(this);
  }
  return this.f_hasElement__java_util_Spliterators_ConsumerIterator_;
 }
 /** @override @nodts @return {T} */
 m_next__java_lang_Object() {
  InternalPreconditions.m_checkCriticalElement__boolean__void(this.m_hasNext__boolean());
  this.f_hasElement__java_util_Spliterators_ConsumerIterator_ = false;
  let element = this.f_nextElement__java_util_Spliterators_ConsumerIterator_;
  this.f_nextElement__java_util_Spliterators_ConsumerIterator_ = null;
  return element;
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Consumer<T>} */
 m_andThen__java_util_function_Consumer__java_util_function_Consumer(/** Consumer<?> */ arg0) {
  return /**@type {Consumer<T>}*/ (Consumer.m_andThen__$default__java_util_function_Consumer__java_util_function_Consumer__java_util_function_Consumer(this, arg0));
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_remove__void() {
  Iterator.m_remove__$default__java_util_Iterator__void(this);
 }
 /** @private @nodts */
 $init__void_$p_java_util_Spliterators_ConsumerIterator() {
  this.f_hasElement__java_util_Spliterators_ConsumerIterator_ = false;
 }
 /** @nodts */
 static $clinit() {
  ConsumerIterator.$clinit = () =>{};
  ConsumerIterator.$loadModules();
  j_l_Object.$clinit();
  Consumer.$clinit();
  Iterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ConsumerIterator;
 }
 
 /** @nodts */
 static $loadModules() {
  Spliterator = goog.module.get('java.util.Spliterator$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Consumer.$markImplementor(ConsumerIterator);
Iterator.$markImplementor(ConsumerIterator);
$Util.$setClassMetadata(ConsumerIterator, 'java.util.Spliterators$ConsumerIterator');

exports = ConsumerIterator;

//# sourceMappingURL=Spliterators$ConsumerIterator.js.map

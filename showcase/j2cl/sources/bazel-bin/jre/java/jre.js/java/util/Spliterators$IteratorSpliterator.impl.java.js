goog.module('java.util.Spliterators.IteratorSpliterator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Spliterator = goog.require('java.util.Spliterator$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Spliterators = goog.forwardDeclare('java.util.Spliterators$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @template T
 * @implements {Spliterator<T>}
 */
class IteratorSpliterator extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Collection<?>} @nodts*/
  this.f_collection__java_util_Spliterators_IteratorSpliterator_;
  /**@type {Iterator<?>} @nodts*/
  this.f_it__java_util_Spliterators_IteratorSpliterator_;
  /**@type {number} @nodts*/
  this.f_characteristics__java_util_Spliterators_IteratorSpliterator_ = 0;
  /**@type {!$Long} @nodts*/
  this.f_estimateSize__java_util_Spliterators_IteratorSpliterator_ = $Long.fromInt(0);
 }
 //Factory method corresponding to constructor 'IteratorSpliterator(Collection, int)'.
 /** @nodts @template T @return {!IteratorSpliterator<T>} */
 static $create__java_util_Collection__int(/** Collection<?> */ collection, /** number */ characteristics) {
  IteratorSpliterator.$clinit();
  let $instance = new IteratorSpliterator();
  $instance.$ctor__java_util_Spliterators_IteratorSpliterator__java_util_Collection__int__void(collection, characteristics);
  return $instance;
 }
 //Initialization from constructor 'IteratorSpliterator(Collection, int)'.
 /** @nodts */
 $ctor__java_util_Spliterators_IteratorSpliterator__java_util_Collection__int__void(/** Collection<?> */ collection, /** number */ characteristics) {
  this.$ctor__java_lang_Object__void();
  this.f_collection__java_util_Spliterators_IteratorSpliterator_ = /**@type {Collection<*>}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(collection), Collection));
  this.f_characteristics__java_util_Spliterators_IteratorSpliterator_ = Spliterators.m_sizeKnownIteratorSpliteratorCharacteristics__int__int(characteristics);
 }
 //Factory method corresponding to constructor 'IteratorSpliterator(Iterator, long, int)'.
 /** @nodts @template T @return {!IteratorSpliterator<T>} */
 static $create__java_util_Iterator__long__int(/** Iterator<?> */ it, /** !$Long */ size, /** number */ characteristics) {
  IteratorSpliterator.$clinit();
  let $instance = new IteratorSpliterator();
  $instance.$ctor__java_util_Spliterators_IteratorSpliterator__java_util_Iterator__long__int__void(it, size, characteristics);
  return $instance;
 }
 //Initialization from constructor 'IteratorSpliterator(Iterator, long, int)'.
 /** @nodts */
 $ctor__java_util_Spliterators_IteratorSpliterator__java_util_Iterator__long__int__void(/** Iterator<?> */ it, /** !$Long */ size, /** number */ characteristics) {
  this.$ctor__java_lang_Object__void();
  this.f_it__java_util_Spliterators_IteratorSpliterator_ = /**@type {Iterator<*>}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(it), Iterator));
  this.f_characteristics__java_util_Spliterators_IteratorSpliterator_ = Spliterators.m_sizeKnownIteratorSpliteratorCharacteristics__int__int(characteristics);
  this.f_estimateSize__java_util_Spliterators_IteratorSpliterator_ = size;
 }
 //Factory method corresponding to constructor 'IteratorSpliterator(Iterator, int)'.
 /** @nodts @template T @return {!IteratorSpliterator<T>} */
 static $create__java_util_Iterator__int(/** Iterator<?> */ it, /** number */ characteristics) {
  IteratorSpliterator.$clinit();
  let $instance = new IteratorSpliterator();
  $instance.$ctor__java_util_Spliterators_IteratorSpliterator__java_util_Iterator__int__void(it, characteristics);
  return $instance;
 }
 //Initialization from constructor 'IteratorSpliterator(Iterator, int)'.
 /** @nodts */
 $ctor__java_util_Spliterators_IteratorSpliterator__java_util_Iterator__int__void(/** Iterator<?> */ it, /** number */ characteristics) {
  this.$ctor__java_lang_Object__void();
  this.f_it__java_util_Spliterators_IteratorSpliterator_ = /**@type {Iterator<*>}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(it), Iterator));
  this.f_characteristics__java_util_Spliterators_IteratorSpliterator_ = Spliterators.m_sizeUnknownSpliteratorCharacteristics__int__int(characteristics);
  this.f_estimateSize__java_util_Spliterators_IteratorSpliterator_ = Long.f_MAX_VALUE__java_lang_Long;
 }
 /** @override @nodts @return {number} */
 m_characteristics__int() {
  return this.f_characteristics__java_util_Spliterators_IteratorSpliterator_;
 }
 /** @override @nodts @return {!$Long} */
 m_estimateSize__long() {
  this.m_initIterator__void_$p_java_util_Spliterators_IteratorSpliterator();
  return this.f_estimateSize__java_util_Spliterators_IteratorSpliterator_;
 }
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ consumer) {
  this.m_initIterator__void_$p_java_util_Spliterators_IteratorSpliterator();
  this.f_it__java_util_Spliterators_IteratorSpliterator_.m_forEachRemaining__java_util_function_Consumer__void(consumer);
 }
 /** @override @nodts @return {Comparator<?>} */
 m_getComparator__java_util_Comparator() {
  Spliterators.m_checkSorted__int__void(this.f_characteristics__java_util_Spliterators_IteratorSpliterator_);
  return null;
 }
 /** @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ consumer) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(consumer);
  this.m_initIterator__void_$p_java_util_Spliterators_IteratorSpliterator();
  if (this.f_it__java_util_Spliterators_IteratorSpliterator_.m_hasNext__boolean()) {
   consumer.m_accept__java_lang_Object__void(this.f_it__java_util_Spliterators_IteratorSpliterator_.m_next__java_lang_Object());
   return true;
  }
  return false;
 }
 /** @override @nodts @return {Spliterator<T>} */
 m_trySplit__java_util_Spliterator() {
  return null;
 }
 /** @nodts */
 m_initIterator__void_$p_java_util_Spliterators_IteratorSpliterator() {
  if ($Equality.$same(this.f_it__java_util_Spliterators_IteratorSpliterator_, null)) {
   this.f_it__java_util_Spliterators_IteratorSpliterator_ = this.f_collection__java_util_Spliterators_IteratorSpliterator_.m_iterator__java_util_Iterator();
   this.f_estimateSize__java_util_Spliterators_IteratorSpliterator_ = $Primitives.widenIntToLong(this.f_collection__java_util_Spliterators_IteratorSpliterator_.size());
  }
 }
 //Default method forwarding stub.
 /** @override @nodts @return {!$Long} */
 m_getExactSizeIfKnown__long() {
  return Spliterator.m_getExactSizeIfKnown__$default__java_util_Spliterator__long(this);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_hasCharacteristics__int__boolean(/** number */ arg0) {
  return Spliterator.m_hasCharacteristics__$default__java_util_Spliterator__int__boolean(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  IteratorSpliterator.$clinit = () =>{};
  IteratorSpliterator.$loadModules();
  j_l_Object.$clinit();
  Spliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IteratorSpliterator;
 }
 
 /** @nodts */
 static $loadModules() {
  Long = goog.module.get('java.lang.Long$impl');
  Collection = goog.module.get('java.util.Collection$impl');
  Iterator = goog.module.get('java.util.Iterator$impl');
  Spliterators = goog.module.get('java.util.Spliterators$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
Spliterator.$markImplementor(IteratorSpliterator);
$Util.$setClassMetadata(IteratorSpliterator, 'java.util.Spliterators$IteratorSpliterator');

exports = IteratorSpliterator;

//# sourceMappingURL=Spliterators$IteratorSpliterator.js.map

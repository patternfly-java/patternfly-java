goog.module('java.util.Spliterators.EmptySpliterator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Spliterator = goog.require('java.util.Spliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let OfDouble = goog.forwardDeclare('java.util.Spliterator.OfDouble$impl');
let OfInt = goog.forwardDeclare('java.util.Spliterator.OfInt$impl');
let OfLong = goog.forwardDeclare('java.util.Spliterator.OfLong$impl');
let EmptySpliterator_OfDouble = goog.forwardDeclare('java.util.Spliterators.EmptySpliterator.OfDouble$impl');
let EmptySpliterator_OfInt = goog.forwardDeclare('java.util.Spliterators.EmptySpliterator.OfInt$impl');
let EmptySpliterator_OfLong = goog.forwardDeclare('java.util.Spliterators.EmptySpliterator.OfLong$impl');
let OfRef = goog.forwardDeclare('java.util.Spliterators.EmptySpliterator.OfRef$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @abstract
 * @template T, S, C
 * @implements {Spliterator<T>}
 */
class EmptySpliterator extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__java_util_Spliterators_EmptySpliterator__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @override @nodts @return {number} */
 m_characteristics__int() {
  return Spliterator.f_SIZED__java_util_Spliterator | Spliterator.f_SUBSIZED__java_util_Spliterator;
 }
 /** @override @nodts @return {!$Long} */
 m_estimateSize__long() {
  return $Long.fromInt(0);
 }
 /** @nodts */
 m_forEachRemaining__java_lang_Object__void(/** C */ consumer) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(consumer);
 }
 /** @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** C */ consumer) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(consumer);
  return false;
 }
 /** @override @nodts @return {S} */
 m_trySplit__java_util_Spliterator() {
  return null;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Spliterator.m_forEachRemaining__$default__java_util_Spliterator__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Comparator<?>} */
 m_getComparator__java_util_Comparator() {
  return Spliterator.m_getComparator__$default__java_util_Spliterator__java_util_Comparator(this);
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
 /** @nodts @return {Spliterator<*>} */
 static get f_OF_REF__java_util_Spliterators_EmptySpliterator() {
  return (EmptySpliterator.$clinit(), EmptySpliterator.$static_OF_REF__java_util_Spliterators_EmptySpliterator);
 }
 /** @nodts @return {OfDouble} */
 static get f_OF_DOUBLE__java_util_Spliterators_EmptySpliterator() {
  return (EmptySpliterator.$clinit(), EmptySpliterator.$static_OF_DOUBLE__java_util_Spliterators_EmptySpliterator);
 }
 /** @nodts @return {OfInt} */
 static get f_OF_INT__java_util_Spliterators_EmptySpliterator() {
  return (EmptySpliterator.$clinit(), EmptySpliterator.$static_OF_INT__java_util_Spliterators_EmptySpliterator);
 }
 /** @nodts @return {OfLong} */
 static get f_OF_LONG__java_util_Spliterators_EmptySpliterator() {
  return (EmptySpliterator.$clinit(), EmptySpliterator.$static_OF_LONG__java_util_Spliterators_EmptySpliterator);
 }
 /** @nodts */
 static $clinit() {
  EmptySpliterator.$clinit = () =>{};
  EmptySpliterator.$loadModules();
  j_l_Object.$clinit();
  Spliterator.$clinit();
  EmptySpliterator.$static_OF_REF__java_util_Spliterators_EmptySpliterator = /**@type {!OfRef<*>}*/ (OfRef.$create__());
  EmptySpliterator.$static_OF_DOUBLE__java_util_Spliterators_EmptySpliterator = EmptySpliterator_OfDouble.$create__();
  EmptySpliterator.$static_OF_INT__java_util_Spliterators_EmptySpliterator = EmptySpliterator_OfInt.$create__();
  EmptySpliterator.$static_OF_LONG__java_util_Spliterators_EmptySpliterator = EmptySpliterator_OfLong.$create__();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EmptySpliterator;
 }
 /** @abstract @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ arg0) {}
 
 /** @nodts */
 static $loadModules() {
  EmptySpliterator_OfDouble = goog.module.get('java.util.Spliterators.EmptySpliterator.OfDouble$impl');
  EmptySpliterator_OfInt = goog.module.get('java.util.Spliterators.EmptySpliterator.OfInt$impl');
  EmptySpliterator_OfLong = goog.module.get('java.util.Spliterators.EmptySpliterator.OfLong$impl');
  OfRef = goog.module.get('java.util.Spliterators.EmptySpliterator.OfRef$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
 }
}
/**@private {Spliterator<*>} @nodts*/
EmptySpliterator.$static_OF_REF__java_util_Spliterators_EmptySpliterator;
/**@private {OfDouble} @nodts*/
EmptySpliterator.$static_OF_DOUBLE__java_util_Spliterators_EmptySpliterator;
/**@private {OfInt} @nodts*/
EmptySpliterator.$static_OF_INT__java_util_Spliterators_EmptySpliterator;
/**@private {OfLong} @nodts*/
EmptySpliterator.$static_OF_LONG__java_util_Spliterators_EmptySpliterator;
Spliterator.$markImplementor(EmptySpliterator);
$Util.$setClassMetadata(EmptySpliterator, 'java.util.Spliterators$EmptySpliterator');

exports = EmptySpliterator;

//# sourceMappingURL=Spliterators$EmptySpliterator.js.map

goog.module('java.lang.CharSequence$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $1 = goog.forwardDeclare('java.lang.CharSequence.$1$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Spliterators = goog.forwardDeclare('java.util.Spliterators$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let IntStream = goog.forwardDeclare('java.util.stream.IntStream$impl');
let StreamSupport = goog.forwardDeclare('java.util.stream.StreamSupport$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $CharSequences = goog.forwardDeclare('vmbootstrap.CharSequences$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @interface
 */
class CharSequence {
 /** @abstract @nodts @return {number} */
 m_charAt__int__char(/** number */ index) {}
 /** @abstract @nodts @return {number} */
 m_length__int() {}
 /** @abstract @nodts @return {(CharSequence|string)} */
 m_subSequence__int__int__java_lang_CharSequence(/** number */ start, /** number */ end) {}
 /** @abstract @return {?string} */
 toString() {}
 /** @abstract @nodts @return {IntStream} */
 m_chars__java_util_stream_IntStream() {}
 /** @return {boolean} */
 static $isInstance(/** * */ instance) {
  CharSequence.$clinit();
  if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(typeof(instance), 'string')) {
   return true;
  }
  return !$Equality.$same(instance, null) && instance.$implements__java_lang_CharSequence == true;
 }
 /** @nodts @return {IntStream} */
 static m_chars__$default__java_lang_CharSequence__java_util_stream_IntStream(/** !(CharSequence|string) */ $thisArg) {
  CharSequence.$clinit();
  return StreamSupport.m_intStream__java_util_function_Supplier__int__boolean__java_util_stream_IntStream(Supplier.$adapt(() =>{
   let it = $1.$create__java_lang_CharSequence($thisArg);
   return Spliterators.m_spliterator__java_util_PrimitiveIterator_OfInt__long__int__java_util_Spliterator_OfInt(it, $Primitives.widenIntToLong($CharSequences.m_length__java_lang_CharSequence__int($thisArg)), Spliterator.f_ORDERED__java_util_Spliterator);
  }), Spliterator.f_SIZED__java_util_Spliterator | Spliterator.f_SUBSIZED__java_util_Spliterator | Spliterator.f_ORDERED__java_util_Spliterator, false);
 }
 /** @nodts */
 static $clinit() {
  CharSequence.$clinit = () =>{};
  CharSequence.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_lang_CharSequence = true;
 }
 
 /** @nodts */
 static $loadModules() {
  $1 = goog.module.get('java.lang.CharSequence.$1$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Spliterator = goog.module.get('java.util.Spliterator$impl');
  Spliterators = goog.module.get('java.util.Spliterators$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  StreamSupport = goog.module.get('java.util.stream.StreamSupport$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $CharSequences = goog.module.get('vmbootstrap.CharSequences$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
CharSequence.$markImplementor(/**@type {Function}*/ (CharSequence));
$Util.$setClassMetadataForInterface(CharSequence, 'java.lang.CharSequence');

exports = CharSequence;

//# sourceMappingURL=CharSequence.js.map

goog.module('java.util.PrimitiveIterator.OfInt$impl');

const PrimitiveIterator = goog.require('java.util.PrimitiveIterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let IntConsumer = goog.forwardDeclare('java.util.function.IntConsumer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @extends {PrimitiveIterator<Integer, IntConsumer>}
 */
class OfInt {
 /** @abstract @nodts @return {number} */
 m_nextInt__int() {}
 /** @abstract @nodts @return {Integer} */
 m_next__java_lang_Integer() {}
 /** @abstract @nodts */
 m_forEachRemaining__java_util_function_IntConsumer__void(/** IntConsumer */ consumer) {}
 /** @abstract @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ consumer) {}
 /** @nodts @return {Integer} */
 static m_next__$default__java_util_PrimitiveIterator_OfInt__java_lang_Integer(/** !OfInt */ $thisArg) {
  OfInt.$clinit();
  return Integer.m_valueOf__int__java_lang_Integer($thisArg.m_nextInt__int());
 }
 /** @nodts */
 static m_forEachRemaining__$default__java_util_PrimitiveIterator_OfInt__java_util_function_IntConsumer__void(/** !OfInt */ $thisArg, /** IntConsumer */ consumer) {
  OfInt.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(consumer);
  while ($thisArg.m_hasNext__boolean()) {
   consumer.m_accept__int__void($thisArg.m_nextInt__int());
  }
 }
 /** @nodts */
 static m_forEachRemaining__$default__java_util_PrimitiveIterator_OfInt__java_util_function_Consumer__void(/** !OfInt */ $thisArg, /** Consumer<?> */ consumer) {
  OfInt.$clinit();
  if (IntConsumer.$isInstance(consumer)) {
   $thisArg.m_forEachRemaining__java_util_function_IntConsumer__void(/**@type {IntConsumer}*/ ($Casts.$to(consumer, IntConsumer)));
  } else {
   $thisArg.m_forEachRemaining__java_util_function_IntConsumer__void(/**@type {IntConsumer}*/ (IntConsumer.$adapt((/** number */ arg0) =>{
    consumer.m_accept__java_lang_Object__void(Integer.m_valueOf__int__java_lang_Integer(arg0));
   })));
  }
 }
 /** @nodts */
 static $clinit() {
  OfInt.$clinit = () =>{};
  OfInt.$loadModules();
  Iterator.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  PrimitiveIterator.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_PrimitiveIterator_OfInt = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_PrimitiveIterator_OfInt;
 }
 
 /** @nodts */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  Iterator = goog.module.get('java.util.Iterator$impl');
  IntConsumer = goog.module.get('java.util.function.IntConsumer$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
OfInt.$markImplementor(/**@type {Function}*/ (OfInt));
$Util.$setClassMetadataForInterface(OfInt, 'java.util.PrimitiveIterator$OfInt');

exports = OfInt;

//# sourceMappingURL=PrimitiveIterator$OfInt.js.map

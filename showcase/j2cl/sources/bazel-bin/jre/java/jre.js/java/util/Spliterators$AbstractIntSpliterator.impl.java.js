goog.module('java.util.Spliterators.AbstractIntSpliterator$impl');

const OfInt = goog.require('java.util.Spliterator.OfInt$impl');
const BaseSpliterator = goog.require('java.util.Spliterators.BaseSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let OfPrimitive = goog.forwardDeclare('java.util.Spliterator.OfPrimitive$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let IntConsumer = goog.forwardDeclare('java.util.function.IntConsumer$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @extends {BaseSpliterator<Integer, OfInt>}
 * @implements {OfInt}
 */
class AbstractIntSpliterator extends BaseSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__java_util_Spliterators_AbstractIntSpliterator__long__int__void(/** !$Long */ size, /** number */ characteristics) {
  this.$ctor__java_util_Spliterators_BaseSpliterator__long__int__void(size, characteristics);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  OfInt.m_forEachRemaining__$default__java_util_Spliterator_OfInt__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ arg0) {
  return OfInt.m_tryAdvance__$default__java_util_Spliterator_OfInt__java_util_function_Consumer__boolean(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_forEachRemaining__java_lang_Object__void(/** IntConsumer */ arg0) {
  OfPrimitive.m_forEachRemaining__$default__java_util_Spliterator_OfPrimitive__java_lang_Object__void(this, /**@type {IntConsumer}*/ ($Casts.$to(arg0, IntConsumer)));
 }
 //Bridge method.
 /** @final @override @nodts @return {OfInt} */
 m_trySplit__java_util_Spliterator_OfPrimitive() {
  return /**@type {OfInt}*/ ($Casts.$to(this.m_trySplit__java_util_Spliterator(), OfInt));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_forEachRemaining__java_util_function_IntConsumer__void(/** IntConsumer */ arg0) {
  OfPrimitive.m_forEachRemaining__$default__java_util_Spliterator_OfPrimitive__java_lang_Object__void(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  AbstractIntSpliterator.$clinit = () =>{};
  AbstractIntSpliterator.$loadModules();
  BaseSpliterator.$clinit();
  OfInt.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractIntSpliterator;
 }
 /** @abstract @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** IntConsumer */ arg0) {}
 
 /** @nodts */
 static $loadModules() {
  OfPrimitive = goog.module.get('java.util.Spliterator.OfPrimitive$impl');
  IntConsumer = goog.module.get('java.util.function.IntConsumer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
OfInt.$markImplementor(AbstractIntSpliterator);
$Util.$setClassMetadata(AbstractIntSpliterator, 'java.util.Spliterators$AbstractIntSpliterator');

exports = AbstractIntSpliterator;

//# sourceMappingURL=Spliterators$AbstractIntSpliterator.js.map

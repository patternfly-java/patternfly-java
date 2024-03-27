goog.module('java.util.Spliterators.AbstractLongSpliterator$impl');

const OfLong = goog.require('java.util.Spliterator.OfLong$impl');
const BaseSpliterator = goog.require('java.util.Spliterators.BaseSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let OfPrimitive = goog.forwardDeclare('java.util.Spliterator.OfPrimitive$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let LongConsumer = goog.forwardDeclare('java.util.function.LongConsumer$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @extends {BaseSpliterator<Long, OfLong>}
 * @implements {OfLong}
 */
class AbstractLongSpliterator extends BaseSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__java_util_Spliterators_AbstractLongSpliterator__long__int__void(/** !$Long */ size, /** number */ characteristics) {
  this.$ctor__java_util_Spliterators_BaseSpliterator__long__int__void(size, characteristics);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  OfLong.m_forEachRemaining__$default__java_util_Spliterator_OfLong__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ arg0) {
  return OfLong.m_tryAdvance__$default__java_util_Spliterator_OfLong__java_util_function_Consumer__boolean(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts */
 m_forEachRemaining__java_lang_Object__void(/** LongConsumer */ arg0) {
  OfPrimitive.m_forEachRemaining__$default__java_util_Spliterator_OfPrimitive__java_lang_Object__void(this, /**@type {LongConsumer}*/ ($Casts.$to(arg0, LongConsumer)));
 }
 //Bridge method.
 /** @final @override @nodts @return {OfLong} */
 m_trySplit__java_util_Spliterator_OfPrimitive() {
  return /**@type {OfLong}*/ ($Casts.$to(this.m_trySplit__java_util_Spliterator(), OfLong));
 }
 //Default method forwarding stub.
 /** @nodts */
 m_forEachRemaining__java_util_function_LongConsumer__void(/** LongConsumer */ arg0) {
  OfPrimitive.m_forEachRemaining__$default__java_util_Spliterator_OfPrimitive__java_lang_Object__void(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  AbstractLongSpliterator.$clinit = () =>{};
  AbstractLongSpliterator.$loadModules();
  BaseSpliterator.$clinit();
  OfLong.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractLongSpliterator;
 }
 /** @abstract @override @nodts @return {boolean} */
 m_tryAdvance__java_lang_Object__boolean(/** LongConsumer */ arg0) {}
 
 /** @nodts */
 static $loadModules() {
  OfPrimitive = goog.module.get('java.util.Spliterator.OfPrimitive$impl');
  LongConsumer = goog.module.get('java.util.function.LongConsumer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
OfLong.$markImplementor(AbstractLongSpliterator);
$Util.$setClassMetadata(AbstractLongSpliterator, 'java.util.Spliterators$AbstractLongSpliterator');

exports = AbstractLongSpliterator;

//# sourceMappingURL=Spliterators$AbstractLongSpliterator.js.map

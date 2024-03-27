goog.module('java.util.Spliterators.EmptySpliterator.OfLong$impl');

const Spliterator_OfLong = goog.require('java.util.Spliterator.OfLong$impl');
const EmptySpliterator = goog.require('java.util.Spliterators.EmptySpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let LongConsumer = goog.forwardDeclare('java.util.function.LongConsumer$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 * @extends {EmptySpliterator<Long, Spliterator_OfLong, LongConsumer>}
 * @implements {Spliterator_OfLong}
 */
class OfLong extends EmptySpliterator {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!OfLong} */
 static $create__() {
  OfLong.$clinit();
  let $instance = new OfLong();
  $instance.$ctor__java_util_Spliterators_EmptySpliterator_OfLong__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Spliterators_EmptySpliterator_OfLong__void() {
  this.$ctor__java_util_Spliterators_EmptySpliterator__void();
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Spliterator_OfLong.m_forEachRemaining__$default__java_util_Spliterator_OfLong__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ arg0) {
  return Spliterator_OfLong.m_tryAdvance__$default__java_util_Spliterator_OfLong__java_util_function_Consumer__boolean(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Spliterator_OfLong} */
 m_trySplit__java_util_Spliterator_OfPrimitive() {
  return /**@type {Spliterator_OfLong}*/ ($Casts.$to(this.m_trySplit__java_util_Spliterator(), Spliterator_OfLong));
 }
 /** @nodts */
 static $clinit() {
  OfLong.$clinit = () =>{};
  OfLong.$loadModules();
  EmptySpliterator.$clinit();
  Spliterator_OfLong.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OfLong;
 }
 
 /** @nodts */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Spliterator_OfLong.$markImplementor(OfLong);
$Util.$setClassMetadata(OfLong, 'java.util.Spliterators$EmptySpliterator$OfLong');

exports = OfLong;

//# sourceMappingURL=Spliterators$EmptySpliterator$OfLong.js.map

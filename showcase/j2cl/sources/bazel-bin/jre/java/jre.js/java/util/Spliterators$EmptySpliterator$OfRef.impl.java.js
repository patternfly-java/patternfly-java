goog.module('java.util.Spliterators.EmptySpliterator.OfRef$impl');

const Spliterator = goog.require('java.util.Spliterator$impl');
const EmptySpliterator = goog.require('java.util.Spliterators.EmptySpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');

/**
 * @final
 * @template T
 * @extends {EmptySpliterator<T, Spliterator<T>, Consumer<?>>}
 * @implements {Spliterator<T>}
 */
class OfRef extends EmptySpliterator {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @template T @return {!OfRef<T>} */
 static $create__() {
  OfRef.$clinit();
  let $instance = new OfRef();
  $instance.$ctor__java_util_Spliterators_EmptySpliterator_OfRef__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Spliterators_EmptySpliterator_OfRef__void() {
  this.$ctor__java_util_Spliterators_EmptySpliterator__void();
 }
 //Specialized bridge method.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  super.m_forEachRemaining__java_lang_Object__void(arg0);
 }
 //Specialized bridge method.
 /** @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ arg0) {
  return super.m_tryAdvance__java_lang_Object__boolean(arg0);
 }
 /** @nodts */
 static $clinit() {
  OfRef.$clinit = () =>{};
  OfRef.$loadModules();
  EmptySpliterator.$clinit();
  Spliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OfRef;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Spliterator.$markImplementor(OfRef);
$Util.$setClassMetadata(OfRef, 'java.util.Spliterators$EmptySpliterator$OfRef');

exports = OfRef;

//# sourceMappingURL=Spliterators$EmptySpliterator$OfRef.js.map

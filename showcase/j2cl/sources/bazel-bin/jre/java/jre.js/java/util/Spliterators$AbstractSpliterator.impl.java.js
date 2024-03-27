goog.module('java.util.Spliterators.AbstractSpliterator$impl');

const Spliterator = goog.require('java.util.Spliterator$impl');
const BaseSpliterator = goog.require('java.util.Spliterators.BaseSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/**
 * @abstract
 * @template T
 * @extends {BaseSpliterator<T, Spliterator<T>>}
 * @implements {Spliterator<T>}
 */
class AbstractSpliterator extends BaseSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__java_util_Spliterators_AbstractSpliterator__long__int__void(/** !$Long */ size, /** number */ characteristics) {
  this.$ctor__java_util_Spliterators_BaseSpliterator__long__int__void(size, characteristics);
 }
 /** @nodts */
 static $clinit() {
  AbstractSpliterator.$clinit = () =>{};
  AbstractSpliterator.$loadModules();
  BaseSpliterator.$clinit();
  Spliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractSpliterator;
 }
 /** @abstract @override @nodts @return {boolean} */
 m_tryAdvance__java_util_function_Consumer__boolean(/** Consumer<?> */ arg0) {}
 
 /** @nodts */
 static $loadModules() {}
}
Spliterator.$markImplementor(AbstractSpliterator);
$Util.$setClassMetadata(AbstractSpliterator, 'java.util.Spliterators$AbstractSpliterator');

exports = AbstractSpliterator;

//# sourceMappingURL=Spliterators$AbstractSpliterator.js.map

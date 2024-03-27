goog.module('java.util.Set$impl');

const Collection = goog.require('java.util.Collection$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Spliterators = goog.forwardDeclare('java.util.Spliterators$impl');

/**
 * @interface
 * @template E
 * @extends {Collection<E>}
 */
class Set {
 /** @abstract @override @nodts @return {Spliterator<E>} */
 m_spliterator__java_util_Spliterator() {}
 /** @nodts @template E @return {Spliterator<E>} */
 static m_spliterator__$default__java_util_Set__java_util_Spliterator(/** !Set<E> */ $thisArg) {
  Set.$clinit();
  return /**@type {Spliterator<E>}*/ (Spliterators.m_spliterator__java_util_Collection__int__java_util_Spliterator($thisArg, Spliterator.f_DISTINCT__java_util_Spliterator));
 }
 /** @nodts */
 static $clinit() {
  Set.$clinit = () =>{};
  Set.$loadModules();
  Collection.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Collection.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_Set = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_Set;
 }
 
 /** @nodts */
 static $loadModules() {
  Spliterator = goog.module.get('java.util.Spliterator$impl');
  Spliterators = goog.module.get('java.util.Spliterators$impl');
 }
}
Set.$markImplementor(/**@type {Function}*/ (Set));
$Util.$setClassMetadataForInterface(Set, 'java.util.Set');

exports = Set;

//# sourceMappingURL=Set.js.map

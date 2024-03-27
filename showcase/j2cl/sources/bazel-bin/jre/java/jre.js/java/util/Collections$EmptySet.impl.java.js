goog.module('java.util.Collections.EmptySet$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const AbstractSet = goog.require('java.util.AbstractSet$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');

/**
 * @final
 * @implements {Serializable}
 */
class EmptySet extends AbstractSet {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!EmptySet} */
 static $create__() {
  EmptySet.$clinit();
  let $instance = new EmptySet();
  $instance.$ctor__java_util_Collections_EmptySet__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Collections_EmptySet__void() {
  this.$ctor__java_util_AbstractSet__void();
 }
 /** @override @return {boolean} */
 contains(/** * */ object) {
  return false;
 }
 /** @override @nodts @return {Iterator} */
 m_iterator__java_util_Iterator() {
  return /**@type {Iterator<*>}*/ (Collections.m_emptyIterator__java_util_Iterator());
 }
 /** @override @return {number} */
 size() {
  return 0;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  EmptySet.$clinit = () =>{};
  EmptySet.$loadModules();
  AbstractSet.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EmptySet;
 }
 
 /** @nodts */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  Collections = goog.module.get('java.util.Collections$impl');
 }
}
Serializable.$markImplementor(EmptySet);
$Util.$setClassMetadata(EmptySet, 'java.util.Collections$EmptySet');

exports = EmptySet;

//# sourceMappingURL=Collections$EmptySet.js.map

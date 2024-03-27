goog.module('java.util.Collections.EmptyList$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const AbstractList = goog.require('java.util.AbstractList$impl');
const RandomAccess = goog.require('java.util.RandomAccess$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let ListIterator = goog.forwardDeclare('java.util.ListIterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

/**
 * @final
 * @implements {RandomAccess}
 * @implements {Serializable}
 */
class EmptyList extends AbstractList {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!EmptyList} */
 static $create__() {
  EmptyList.$clinit();
  let $instance = new EmptyList();
  $instance.$ctor__java_util_Collections_EmptyList__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Collections_EmptyList__void() {
  this.$ctor__java_util_AbstractList__void();
 }
 /** @override @return {boolean} */
 contains(/** * */ object) {
  return false;
 }
 /** @override @return {*} */
 getAtIndex(/** number */ location) {
  InternalPreconditions.m_checkElementIndex__int__int__void(location, 0);
  return null;
 }
 /** @override @nodts @return {Iterator} */
 m_iterator__java_util_Iterator() {
  return /**@type {Iterator<*>}*/ (Collections.m_emptyIterator__java_util_Iterator());
 }
 /** @override @nodts @return {ListIterator} */
 m_listIterator__java_util_ListIterator() {
  return /**@type {ListIterator<*>}*/ (Collections.m_emptyListIterator__java_util_ListIterator());
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
  EmptyList.$clinit = () =>{};
  EmptyList.$loadModules();
  AbstractList.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EmptyList;
 }
 
 /** @nodts */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
RandomAccess.$markImplementor(EmptyList);
Serializable.$markImplementor(EmptyList);
$Util.$setClassMetadata(EmptyList, 'java.util.Collections$EmptyList');

exports = EmptyList;

//# sourceMappingURL=Collections$EmptyList.js.map

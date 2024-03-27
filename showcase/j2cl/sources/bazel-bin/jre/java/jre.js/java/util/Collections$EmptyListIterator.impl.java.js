goog.module('java.util.Collections.EmptyListIterator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const ListIterator = goog.require('java.util.ListIterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let NoSuchElementException = goog.forwardDeclare('java.util.NoSuchElementException$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @final
 * @implements {ListIterator}
 */
class EmptyListIterator extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!EmptyListIterator} */
 static $create__() {
  let $instance = new EmptyListIterator();
  $instance.$ctor__java_util_Collections_EmptyListIterator__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Collections_EmptyListIterator__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @override @nodts */
 m_add__java_lang_Object__void(/** * */ o) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override @nodts @return {boolean} */
 m_hasNext__boolean() {
  return false;
 }
 /** @override @nodts @return {boolean} */
 m_hasPrevious__boolean() {
  return false;
 }
 /** @override @nodts @return {*} */
 m_next__java_lang_Object() {
  throw $Exceptions.toJs(NoSuchElementException.$create__());
 }
 /** @override @nodts @return {number} */
 m_nextIndex__int() {
  return 0;
 }
 /** @override @nodts @return {*} */
 m_previous__java_lang_Object() {
  throw $Exceptions.toJs(NoSuchElementException.$create__());
 }
 /** @override @nodts @return {number} */
 m_previousIndex__int() {
  return - 1 | 0;
 }
 /** @override @nodts */
 m_remove__void() {
  throw $Exceptions.toJs(IllegalStateException.$create__());
 }
 /** @override @nodts */
 m_set__java_lang_Object__void(/** * */ o) {
  throw $Exceptions.toJs(IllegalStateException.$create__());
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer */ arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer__void(this, arg0);
 }
 /** @nodts @return {EmptyListIterator} */
 static get f_INSTANCE__java_util_Collections_EmptyListIterator() {
  return (EmptyListIterator.$clinit(), EmptyListIterator.$static_INSTANCE__java_util_Collections_EmptyListIterator);
 }
 /** @nodts */
 static $clinit() {
  EmptyListIterator.$clinit = () =>{};
  EmptyListIterator.$loadModules();
  j_l_Object.$clinit();
  Iterator.$clinit();
  EmptyListIterator.$static_INSTANCE__java_util_Collections_EmptyListIterator = EmptyListIterator.$create__();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EmptyListIterator;
 }
 
 /** @nodts */
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  Iterator = goog.module.get('java.util.Iterator$impl');
  NoSuchElementException = goog.module.get('java.util.NoSuchElementException$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
/**@private {EmptyListIterator} @nodts*/
EmptyListIterator.$static_INSTANCE__java_util_Collections_EmptyListIterator;
ListIterator.$markImplementor(EmptyListIterator);
$Util.$setClassMetadata(EmptyListIterator, 'java.util.Collections$EmptyListIterator');

exports = EmptyListIterator;

//# sourceMappingURL=Collections$EmptyListIterator.js.map

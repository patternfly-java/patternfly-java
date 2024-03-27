goog.module('java.util.Collections.UnmodifiableCollectionIterator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @template T
 * @implements {Iterator<T>}
 */
class UnmodifiableCollectionIterator extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Iterator<?>} @nodts*/
  this.f_it__java_util_Collections_UnmodifiableCollectionIterator_;
 }
 /** @nodts @template T @return {!UnmodifiableCollectionIterator<T>} */
 static $create__java_util_Iterator(/** Iterator<?> */ it) {
  UnmodifiableCollectionIterator.$clinit();
  let $instance = new UnmodifiableCollectionIterator();
  $instance.$ctor__java_util_Collections_UnmodifiableCollectionIterator__java_util_Iterator__void(it);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Collections_UnmodifiableCollectionIterator__java_util_Iterator__void(/** Iterator<?> */ it) {
  this.$ctor__java_lang_Object__void();
  this.f_it__java_util_Collections_UnmodifiableCollectionIterator_ = it;
 }
 /** @override @nodts @return {boolean} */
 m_hasNext__boolean() {
  return this.f_it__java_util_Collections_UnmodifiableCollectionIterator_.m_hasNext__boolean();
 }
 /** @override @nodts @return {T} */
 m_next__java_lang_Object() {
  return this.f_it__java_util_Collections_UnmodifiableCollectionIterator_.m_next__java_lang_Object();
 }
 /** @override @nodts */
 m_remove__void() {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer__void(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  UnmodifiableCollectionIterator.$clinit = () =>{};
  UnmodifiableCollectionIterator.$loadModules();
  j_l_Object.$clinit();
  Iterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UnmodifiableCollectionIterator;
 }
 
 /** @nodts */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
Iterator.$markImplementor(UnmodifiableCollectionIterator);
$Util.$setClassMetadata(UnmodifiableCollectionIterator, 'java.util.Collections$UnmodifiableCollectionIterator');

exports = UnmodifiableCollectionIterator;

//# sourceMappingURL=Collections$UnmodifiableCollectionIterator.js.map

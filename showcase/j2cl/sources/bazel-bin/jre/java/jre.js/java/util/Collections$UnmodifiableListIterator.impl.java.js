goog.module('java.util.Collections.UnmodifiableListIterator$impl');

const UnmodifiableCollectionIterator = goog.require('java.util.Collections.UnmodifiableCollectionIterator$impl');
const ListIterator = goog.require('java.util.ListIterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @template T
 * @extends {UnmodifiableCollectionIterator<T>}
 * @implements {ListIterator<T>}
 */
class UnmodifiableListIterator extends UnmodifiableCollectionIterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {ListIterator<?>} @nodts*/
  this.f_lit__java_util_Collections_UnmodifiableListIterator_;
 }
 /** @nodts @template T @return {!UnmodifiableListIterator<T>} */
 static $create__java_util_ListIterator(/** ListIterator<?> */ lit) {
  UnmodifiableListIterator.$clinit();
  let $instance = new UnmodifiableListIterator();
  $instance.$ctor__java_util_Collections_UnmodifiableListIterator__java_util_ListIterator__void(lit);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Collections_UnmodifiableListIterator__java_util_ListIterator__void(/** ListIterator<?> */ lit) {
  this.$ctor__java_util_Collections_UnmodifiableCollectionIterator__java_util_Iterator__void(lit);
  this.f_lit__java_util_Collections_UnmodifiableListIterator_ = lit;
 }
 /** @override @nodts */
 m_add__java_lang_Object__void(/** T */ o) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override @nodts @return {boolean} */
 m_hasPrevious__boolean() {
  return this.f_lit__java_util_Collections_UnmodifiableListIterator_.m_hasPrevious__boolean();
 }
 /** @override @nodts @return {number} */
 m_nextIndex__int() {
  return this.f_lit__java_util_Collections_UnmodifiableListIterator_.m_nextIndex__int();
 }
 /** @override @nodts @return {T} */
 m_previous__java_lang_Object() {
  return this.f_lit__java_util_Collections_UnmodifiableListIterator_.m_previous__java_lang_Object();
 }
 /** @override @nodts @return {number} */
 m_previousIndex__int() {
  return this.f_lit__java_util_Collections_UnmodifiableListIterator_.m_previousIndex__int();
 }
 /** @override @nodts */
 m_set__java_lang_Object__void(/** T */ o) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @nodts */
 static $clinit() {
  UnmodifiableListIterator.$clinit = () =>{};
  UnmodifiableListIterator.$loadModules();
  UnmodifiableCollectionIterator.$clinit();
  Iterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UnmodifiableListIterator;
 }
 
 /** @nodts */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  Iterator = goog.module.get('java.util.Iterator$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
ListIterator.$markImplementor(UnmodifiableListIterator);
$Util.$setClassMetadata(UnmodifiableListIterator, 'java.util.Collections$UnmodifiableListIterator');

exports = UnmodifiableListIterator;

//# sourceMappingURL=Collections$UnmodifiableListIterator.js.map

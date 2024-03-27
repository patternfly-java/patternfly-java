goog.module('java.util.AbstractQueue$impl');

const AbstractCollection = goog.require('java.util.AbstractCollection$impl');
const Queue = goog.require('java.util.Queue$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Collection = goog.forwardDeclare('java.util.Collection$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/**
 * @abstract
 * @template E
 * @extends {AbstractCollection<E>}
 * @implements {Queue<E>}
 */
class AbstractQueue extends AbstractCollection {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__java_util_AbstractQueue__void() {
  this.$ctor__java_util_AbstractCollection__void();
 }
 /** @override @return {boolean} */
 add(/** E */ o) {
  InternalPreconditions.m_checkState__boolean__java_lang_Object__void(this.m_offer__java_lang_Object__boolean(o), 'Unable to add element to queue');
  return true;
 }
 /** @override @return {boolean} */
 addAll(/** Collection<?> */ c) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(c);
  InternalPreconditions.m_checkArgument__boolean__java_lang_Object__void(!$Equality.$same(c, this), 'Can\'t add a queue to itself');
  return super.addAll(c);
 }
 /** @override */
 clear() {
  while (!$Equality.$same(this.m_poll__java_lang_Object(), null)) {}
 }
 /** @override @nodts @return {E} */
 m_element__java_lang_Object() {
  let e = this.m_peek__java_lang_Object();
  InternalPreconditions.m_checkElement__boolean__java_lang_Object__void(!$Equality.$same(e, null), 'Queue is empty');
  return e;
 }
 /** @override @nodts @return {E} */
 m_remove__java_lang_Object() {
  let e = this.m_poll__java_lang_Object();
  InternalPreconditions.m_checkElement__boolean__java_lang_Object__void(!$Equality.$same(e, null), 'Queue is empty');
  return e;
 }
 /** @nodts */
 static $clinit() {
  AbstractQueue.$clinit = () =>{};
  AbstractQueue.$loadModules();
  AbstractCollection.$clinit();
  Collection.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractQueue;
 }
 /** @abstract @override @nodts @return {Iterator<E>} */
 m_iterator__java_util_Iterator() {}
 /** @abstract @override @return {number} */
 size() {}
 /** @abstract @override @nodts @return {boolean} */
 m_offer__java_lang_Object__boolean(/** E */ arg0) {}
 /** @abstract @override @nodts @return {E} */
 m_peek__java_lang_Object() {}
 /** @abstract @override @nodts @return {E} */
 m_poll__java_lang_Object() {}
 
 /** @nodts */
 static $loadModules() {
  Collection = goog.module.get('java.util.Collection$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
Queue.$markImplementor(AbstractQueue);
$Util.$setClassMetadata(AbstractQueue, 'java.util.AbstractQueue');

exports = AbstractQueue;

//# sourceMappingURL=AbstractQueue.js.map

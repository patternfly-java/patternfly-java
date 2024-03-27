goog.module('java.util.Collections.UnmodifiableCollection$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Collection = goog.require('java.util.Collection$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let UnmodifiableCollectionIterator = goog.forwardDeclare('java.util.Collections.UnmodifiableCollectionIterator$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template T
 * @implements {Collection<T>}
 */
class UnmodifiableCollection extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Collection<?>} @nodts*/
  this.f_coll__java_util_Collections_UnmodifiableCollection;
 }
 /** @nodts @template T @return {!UnmodifiableCollection<T>} */
 static $create__java_util_Collection(/** Collection<?> */ coll) {
  UnmodifiableCollection.$clinit();
  let $instance = new UnmodifiableCollection();
  $instance.$ctor__java_util_Collections_UnmodifiableCollection__java_util_Collection__void(coll);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Collections_UnmodifiableCollection__java_util_Collection__void(/** Collection<?> */ coll) {
  this.$ctor__java_lang_Object__void();
  this.f_coll__java_util_Collections_UnmodifiableCollection = coll;
 }
 /** @override @return {boolean} */
 add(/** T */ o) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override @return {boolean} */
 addAll(/** Collection<?> */ c) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override */
 clear() {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override @return {boolean} */
 contains(/** * */ o) {
  return this.f_coll__java_util_Collections_UnmodifiableCollection.contains(o);
 }
 /** @override @return {boolean} */
 containsAll(/** Collection<?> */ c) {
  return this.f_coll__java_util_Collections_UnmodifiableCollection.containsAll(c);
 }
 /** @override @return {boolean} */
 isEmpty() {
  return this.f_coll__java_util_Collections_UnmodifiableCollection.isEmpty();
 }
 /** @override @nodts @return {Iterator<T>} */
 m_iterator__java_util_Iterator() {
  return /**@type {!UnmodifiableCollectionIterator<T>}*/ (UnmodifiableCollectionIterator.$create__java_util_Iterator(this.f_coll__java_util_Collections_UnmodifiableCollection.m_iterator__java_util_Iterator()));
 }
 /** @override @return {boolean} */
 remove(/** * */ o) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override @return {boolean} */
 removeAll(/** Collection<?> */ c) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override @return {boolean} */
 retainAll(/** Collection<?> */ c) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override @nodts @return {boolean} */
 m_removeIf__java_util_function_Predicate__boolean(/** Predicate<?> */ p) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override @return {number} */
 size() {
  return this.f_coll__java_util_Collections_UnmodifiableCollection.size();
 }
 /** @override @return {Array<*>} */
 toArray() {
  return this.f_coll__java_util_Collections_UnmodifiableCollection.toArray();
 }
 /** @override @nodts @template E @return {Array<E>} */
 m_toArray__arrayOf_java_lang_Object__arrayOf_java_lang_Object(/** Array<E> */ a) {
  return this.f_coll__java_util_Collections_UnmodifiableCollection.m_toArray__arrayOf_java_lang_Object__arrayOf_java_lang_Object(a);
 }
 /** @override @return {?string} */
 toString() {
  return $Objects.m_toString__java_lang_Object__java_lang_String(this.f_coll__java_util_Collections_UnmodifiableCollection);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<T>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<T>}*/ (Collection.m_spliterator__$default__java_util_Collection__java_util_Spliterator(this));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Stream<T>} */
 m_parallelStream__java_util_stream_Stream() {
  return /**@type {Stream<T>}*/ (Collection.m_parallelStream__$default__java_util_Collection__java_util_stream_Stream(this));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Stream<T>} */
 m_stream__java_util_stream_Stream() {
  return /**@type {Stream<T>}*/ (Collection.m_stream__$default__java_util_Collection__java_util_stream_Stream(this));
 }
 /** @nodts */
 static $clinit() {
  UnmodifiableCollection.$clinit = () =>{};
  UnmodifiableCollection.$loadModules();
  j_l_Object.$clinit();
  Collection.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UnmodifiableCollection;
 }
 
 /** @nodts */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  UnmodifiableCollectionIterator = goog.module.get('java.util.Collections.UnmodifiableCollectionIterator$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
Collection.$markImplementor(UnmodifiableCollection);
$Util.$setClassMetadata(UnmodifiableCollection, 'java.util.Collections$UnmodifiableCollection');

exports = UnmodifiableCollection;

//# sourceMappingURL=Collections$UnmodifiableCollection.js.map

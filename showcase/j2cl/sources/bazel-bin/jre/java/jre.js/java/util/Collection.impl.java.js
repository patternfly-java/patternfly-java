goog.module('java.util.Collection$impl');

const Iterable = goog.require('java.lang.Iterable$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Spliterators = goog.forwardDeclare('java.util.Spliterators$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let StreamSupport = goog.forwardDeclare('java.util.stream.StreamSupport$impl');
let CollectionHelper = goog.forwardDeclare('javaemul.internal.CollectionHelper$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');

/**
 * @interface
 * @template E
 * @extends {Iterable<E>}
 */
class Collection {
 /** @abstract @return {boolean} */
 add(/** E */ o) {}
 /** @abstract @return {boolean} */
 addAll(/** Collection<?> */ c) {}
 /** @abstract */
 clear() {}
 /** @abstract @return {boolean} */
 contains(/** * */ o) {}
 /** @abstract @return {boolean} */
 containsAll(/** Collection<?> */ c) {}
 /** @abstract @return {boolean} */
 isEmpty() {}
 /** @abstract @nodts @return {Stream<E>} */
 m_parallelStream__java_util_stream_Stream() {}
 /** @abstract @return {boolean} */
 remove(/** * */ o) {}
 /** @abstract @return {boolean} */
 removeAll(/** Collection<?> */ c) {}
 /** @abstract @nodts @return {boolean} */
 m_removeIf__java_util_function_Predicate__boolean(/** Predicate<?> */ filter) {}
 /** @abstract @return {boolean} */
 retainAll(/** Collection<?> */ c) {}
 /** @abstract @return {number} */
 size() {}
 /** @abstract @override @nodts @return {Spliterator<E>} */
 m_spliterator__java_util_Spliterator() {}
 /** @abstract @nodts @return {Stream<E>} */
 m_stream__java_util_stream_Stream() {}
 /** @abstract @return {Array<*>} */
 toArray() {}
 /** @abstract @nodts @template T @return {Array<T>} */
 m_toArray__arrayOf_java_lang_Object__arrayOf_java_lang_Object(/** Array<T> */ a) {}
 /** @nodts @template E @return {Stream<E>} */
 static m_parallelStream__$default__java_util_Collection__java_util_stream_Stream(/** !Collection<E> */ $thisArg) {
  Collection.$clinit();
  return $thisArg.m_stream__java_util_stream_Stream();
 }
 /** @nodts @template E @return {boolean} */
 static m_removeIf__$default__java_util_Collection__java_util_function_Predicate__boolean(/** !Collection<E> */ $thisArg, /** Predicate<?> */ filter) {
  Collection.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(filter);
  let removed = false;
  for (let it = $thisArg.m_iterator__java_util_Iterator(); it.m_hasNext__boolean(); ) {
   if (filter.m_test__java_lang_Object__boolean(it.m_next__java_lang_Object())) {
    it.m_remove__void();
    removed = true;
   }
  }
  return removed;
 }
 /** @nodts @template E @return {Spliterator<E>} */
 static m_spliterator__$default__java_util_Collection__java_util_Spliterator(/** !Collection<E> */ $thisArg) {
  Collection.$clinit();
  return /**@type {Spliterator<E>}*/ (Spliterators.m_spliterator__java_util_Collection__int__java_util_Spliterator($thisArg, 0));
 }
 /** @nodts @template E @return {Stream<E>} */
 static m_stream__$default__java_util_Collection__java_util_stream_Stream(/** !Collection<E> */ $thisArg) {
  Collection.$clinit();
  return /**@type {Stream<E>}*/ (StreamSupport.m_stream__java_util_Spliterator__boolean__java_util_stream_Stream($thisArg.m_spliterator__java_util_Spliterator(), false));
 }
 /** @nodts @template E @return {Array<*>} */
 static m_toArray__$default__java_util_Collection__arrayOf_java_lang_Object(/** !Collection<E> */ $thisArg) {
  Collection.$clinit();
  return CollectionHelper.m_toArray__java_util_Collection__arrayOf_java_lang_Object($thisArg);
 }
 /** @nodts @template E, T @return {Array<T>} */
 static m_toArray__$default__java_util_Collection__arrayOf_java_lang_Object__arrayOf_java_lang_Object(/** !Collection<E> */ $thisArg, /** Array<T> */ a) {
  Collection.$clinit();
  return CollectionHelper.m_toArray__java_util_Collection__arrayOf_java_lang_Object__arrayOf_java_lang_Object($thisArg, a);
 }
 /** @nodts */
 static $clinit() {
  Collection.$clinit = () =>{};
  Collection.$loadModules();
  Iterable.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Iterable.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_Collection = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_Collection;
 }
 
 /** @nodts */
 static $loadModules() {
  Spliterators = goog.module.get('java.util.Spliterators$impl');
  StreamSupport = goog.module.get('java.util.stream.StreamSupport$impl');
  CollectionHelper = goog.module.get('javaemul.internal.CollectionHelper$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
 }
}
Collection.$markImplementor(/**@type {Function}*/ (Collection));
$Util.$setClassMetadataForInterface(Collection, 'java.util.Collection');

exports = Collection;

//# sourceMappingURL=Collection.js.map

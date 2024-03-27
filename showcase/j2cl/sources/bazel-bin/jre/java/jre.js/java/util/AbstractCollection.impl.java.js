goog.module('java.util.AbstractCollection$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Collection = goog.require('java.util.Collection$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let StringJoiner = goog.forwardDeclare('java.util.StringJoiner$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
 * @template E
 * @implements {Collection<E>}
 */
class AbstractCollection extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__java_util_AbstractCollection__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @override @return {boolean} */
 add(/** E */ o) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String('Add not supported on this collection'));
 }
 /** @override @return {boolean} */
 addAll(/** Collection<?> */ c) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(c);
  let changed = false;
  for (let $iterator = c.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let e = $iterator.m_next__java_lang_Object();
   {
    changed = !!(+ changed | + this.add(e));
   }
  }
  return changed;
 }
 /** @override */
 clear() {
  for (let iter = this.m_iterator__java_util_Iterator(); iter.m_hasNext__boolean(); ) {
   iter.m_next__java_lang_Object();
   iter.m_remove__void();
  }
 }
 /** @override @return {boolean} */
 contains(/** * */ o) {
  return this.m_advanceToFind__java_lang_Object__boolean__boolean_$p_java_util_AbstractCollection(o, false);
 }
 /** @override @return {boolean} */
 containsAll(/** Collection<?> */ c) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(c);
  for (let $iterator = c.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let e = $iterator.m_next__java_lang_Object();
   {
    if (!this.contains(e)) {
     return false;
    }
   }
  }
  return true;
 }
 /** @override @return {boolean} */
 isEmpty() {
  return this.size() == 0;
 }
 /** @override @return {boolean} */
 remove(/** * */ o) {
  return this.m_advanceToFind__java_lang_Object__boolean__boolean_$p_java_util_AbstractCollection(o, true);
 }
 /** @override @return {boolean} */
 removeAll(/** Collection<?> */ c) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(c);
  let changed = false;
  for (let iter = this.m_iterator__java_util_Iterator(); iter.m_hasNext__boolean(); ) {
   let o = iter.m_next__java_lang_Object();
   if (c.contains(o)) {
    iter.m_remove__void();
    changed = true;
   }
  }
  return changed;
 }
 /** @override @return {boolean} */
 retainAll(/** Collection<?> */ c) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(c);
  let changed = false;
  for (let iter = this.m_iterator__java_util_Iterator(); iter.m_hasNext__boolean(); ) {
   let o = iter.m_next__java_lang_Object();
   if (!c.contains(o)) {
    iter.m_remove__void();
    changed = true;
   }
  }
  return changed;
 }
 /** @override @return {Array<*>} */
 toArray() {
  return Collection.m_toArray__$default__java_util_Collection__arrayOf_java_lang_Object(this);
 }
 /** @override @nodts @template T @return {Array<T>} */
 m_toArray__arrayOf_java_lang_Object__arrayOf_java_lang_Object(/** Array<T> */ a) {
  return Collection.m_toArray__$default__java_util_Collection__arrayOf_java_lang_Object__arrayOf_java_lang_Object(this, a);
 }
 /** @override @return {?string} */
 toString() {
  let joiner = StringJoiner.$create__java_lang_CharSequence__java_lang_CharSequence__java_lang_CharSequence(', ', '[', ']');
  for (let $iterator = this.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let e = $iterator.m_next__java_lang_Object();
   {
    joiner.m_add__java_lang_CharSequence__java_util_StringJoiner($Equality.$same(e, this) ? '(this Collection)' : j_l_String.m_valueOf__java_lang_Object__java_lang_String(e));
   }
  }
  return joiner.toString();
 }
 /** @nodts @return {boolean} */
 m_advanceToFind__java_lang_Object__boolean__boolean_$p_java_util_AbstractCollection(/** * */ o, /** boolean */ remove) {
  for (let iter = this.m_iterator__java_util_Iterator(); iter.m_hasNext__boolean(); ) {
   let e = iter.m_next__java_lang_Object();
   if (Objects.m_equals__java_lang_Object__java_lang_Object__boolean(o, e)) {
    if (remove) {
     iter.m_remove__void();
    }
    return true;
   }
  }
  return false;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<E>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<E>}*/ (Collection.m_spliterator__$default__java_util_Collection__java_util_Spliterator(this));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Stream<E>} */
 m_parallelStream__java_util_stream_Stream() {
  return /**@type {Stream<E>}*/ (Collection.m_parallelStream__$default__java_util_Collection__java_util_stream_Stream(this));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_removeIf__java_util_function_Predicate__boolean(/** Predicate<?> */ arg0) {
  return Collection.m_removeIf__$default__java_util_Collection__java_util_function_Predicate__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Stream<E>} */
 m_stream__java_util_stream_Stream() {
  return /**@type {Stream<E>}*/ (Collection.m_stream__$default__java_util_Collection__java_util_stream_Stream(this));
 }
 /** @nodts */
 static $clinit() {
  AbstractCollection.$clinit = () =>{};
  AbstractCollection.$loadModules();
  j_l_Object.$clinit();
  Collection.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractCollection;
 }
 /** @abstract @override @nodts @return {Iterator<E>} */
 m_iterator__java_util_Iterator() {}
 /** @abstract @override @return {number} */
 size() {}
 
 /** @nodts */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  StringJoiner = goog.module.get('java.util.StringJoiner$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
Collection.$markImplementor(AbstractCollection);
$Util.$setClassMetadata(AbstractCollection, 'java.util.AbstractCollection');

exports = AbstractCollection;

//# sourceMappingURL=AbstractCollection.js.map

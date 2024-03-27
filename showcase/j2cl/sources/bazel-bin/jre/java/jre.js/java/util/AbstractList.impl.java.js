goog.module('java.util.AbstractList$impl');

const AbstractCollection = goog.require('java.util.AbstractCollection$impl');
const List = goog.require('java.util.List$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let IteratorImpl = goog.forwardDeclare('java.util.AbstractList.IteratorImpl$impl');
let ListIteratorImpl = goog.forwardDeclare('java.util.AbstractList.ListIteratorImpl$impl');
let SubList = goog.forwardDeclare('java.util.AbstractList.SubList$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let ListIterator = goog.forwardDeclare('java.util.ListIterator$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let UnaryOperator = goog.forwardDeclare('java.util.function.UnaryOperator$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
 * @template E
 * @extends {AbstractCollection<E>}
 * @implements {List<E>}
 */
class AbstractList extends AbstractCollection {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {number} @nodts*/
  this.f_modCount__java_util_AbstractList = 0;
 }
 /** @nodts */
 $ctor__java_util_AbstractList__void() {
  this.$ctor__java_util_AbstractCollection__void();
 }
 /** @override @return {boolean} */
 add(/** E */ obj) {
  this.addAtIndex(this.size(), obj);
  return true;
 }
 /** @override */
 addAtIndex(/** number */ index, /** E */ element) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String('Add not supported on this list'));
 }
 /** @override @return {boolean} */
 addAllAtIndex(/** number */ index, /** Collection<?> */ c) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(c);
  let changed = false;
  for (let $iterator = c.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let e = $iterator.m_next__java_lang_Object();
   {
    let /** number */ $value;
    this.addAtIndex(($value = index, index = index + 1 | 0, $value), e);
    changed = true;
   }
  }
  return changed;
 }
 /** @override */
 clear() {
  this.m_removeRange__int__int__void(0, this.size());
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  if ($Equality.$same(o, this)) {
   return true;
  }
  if (!List.$isInstance(o)) {
   return false;
  }
  let other = /**@type {List<*>}*/ ($Casts.$to(o, List));
  if (this.size() != other.size()) {
   return false;
  }
  let iterOther = other.m_iterator__java_util_Iterator();
  for (let $iterator = this.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let elem = $iterator.m_next__java_lang_Object();
   {
    let elemOther = iterOther.m_next__java_lang_Object();
    if (!Objects.m_equals__java_lang_Object__java_lang_Object__boolean(elem, elemOther)) {
     return false;
    }
   }
  }
  return true;
 }
 /** @override @return {number} */
 hashCode() {
  return Collections.m_hashCode__java_util_List__int(this);
 }
 /** @override @return {number} */
 indexOf(/** * */ toFind) {
  for (let i = 0, n = this.size(); i < n; i = i + 1 | 0) {
   if (Objects.m_equals__java_lang_Object__java_lang_Object__boolean(toFind, this.getAtIndex(i))) {
    return i;
   }
  }
  return - 1 | 0;
 }
 /** @override @nodts @return {Iterator<E>} */
 m_iterator__java_util_Iterator() {
  return /**@type {!IteratorImpl<E>}*/ (IteratorImpl.$create__java_util_AbstractList(this));
 }
 /** @override @return {number} */
 lastIndexOf(/** * */ toFind) {
  for (let i = this.size() - 1 | 0; i > (- 1 | 0); i = i - 1 | 0) {
   if (Objects.m_equals__java_lang_Object__java_lang_Object__boolean(toFind, this.getAtIndex(i))) {
    return i;
   }
  }
  return - 1 | 0;
 }
 /** @override @nodts @return {ListIterator<E>} */
 m_listIterator__java_util_ListIterator() {
  return this.m_listIterator__int__java_util_ListIterator(0);
 }
 /** @override @nodts @return {ListIterator<E>} */
 m_listIterator__int__java_util_ListIterator(/** number */ from) {
  return /**@type {!ListIteratorImpl<E>}*/ (ListIteratorImpl.$create__java_util_AbstractList__int(this, from));
 }
 /** @override @return {E} */
 removeAtIndex(/** number */ index) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String('Remove not supported on this list'));
 }
 /** @override @return {E} */
 setAtIndex(/** number */ index, /** E */ o) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String('Set not supported on this list'));
 }
 /** @override @return {!List<E>} */
 subList(/** number */ fromIndex, /** number */ toIndex) {
  return /**@type {!SubList<E>}*/ (SubList.$create__java_util_List__int__int(this, fromIndex, toIndex));
 }
 /** @nodts */
 m_removeRange__int__int__void(/** number */ fromIndex, /** number */ endIndex) {
  let iter = this.m_listIterator__int__java_util_ListIterator(fromIndex);
  for (let i = fromIndex; i < endIndex; i = i + 1 | 0) {
   iter.m_next__java_lang_Object();
   iter.m_remove__void();
  }
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<E>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<E>}*/ (List.m_spliterator__$default__java_util_List__java_util_Spliterator(this));
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_replaceAll__java_util_function_UnaryOperator__void(/** UnaryOperator<E> */ arg0) {
  List.m_replaceAll__$default__java_util_List__java_util_function_UnaryOperator__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_sort__java_util_Comparator__void(/** Comparator<?> */ arg0) {
  List.m_sort__$default__java_util_List__java_util_Comparator__void(this, arg0);
 }
 /** @nodts */
 static $clinit() {
  AbstractList.$clinit = () =>{};
  AbstractList.$loadModules();
  AbstractCollection.$clinit();
  List.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractList;
 }
 /** @abstract @override @return {number} */
 size() {}
 /** @abstract @override @return {E} */
 getAtIndex(/** number */ arg0) {}
 
 /** @nodts */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  IteratorImpl = goog.module.get('java.util.AbstractList.IteratorImpl$impl');
  ListIteratorImpl = goog.module.get('java.util.AbstractList.ListIteratorImpl$impl');
  SubList = goog.module.get('java.util.AbstractList.SubList$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
List.$markImplementor(AbstractList);
$Util.$setClassMetadata(AbstractList, 'java.util.AbstractList');

exports = AbstractList;

//# sourceMappingURL=AbstractList.js.map

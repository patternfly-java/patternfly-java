goog.module('java.util.AbstractSequentialList$impl');

const AbstractList = goog.require('java.util.AbstractList$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IndexOutOfBoundsException = goog.forwardDeclare('java.lang.IndexOutOfBoundsException$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let NoSuchElementException = goog.forwardDeclare('java.util.NoSuchElementException$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
 * @template E
 * @extends {AbstractList<E>}
 */
class AbstractSequentialList extends AbstractList {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__java_util_AbstractSequentialList__void() {
  this.$ctor__java_util_AbstractList__void();
 }
 /** @override */
 addAtIndex(/** number */ index, /** E */ element) {
  let iter = this.m_listIterator__int__java_util_ListIterator(index);
  iter.m_add__java_lang_Object__void(element);
 }
 /** @override @return {boolean} */
 addAllAtIndex(/** number */ index, /** Collection<?> */ c) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(c);
  let modified = false;
  let iter = this.m_listIterator__int__java_util_ListIterator(index);
  for (let $iterator = c.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let e = $iterator.m_next__java_lang_Object();
   {
    iter.m_add__java_lang_Object__void(e);
    modified = true;
   }
  }
  return modified;
 }
 /** @override @return {E} */
 getAtIndex(/** number */ index) {
  let iter = this.m_listIterator__int__java_util_ListIterator(index);
  try {
   return iter.m_next__java_lang_Object();
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (NoSuchElementException.$isInstance(__$exc)) {
    let e = /**@type {NoSuchElementException}*/ (__$exc);
    throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String('Can\'t get element ' + index));
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
 }
 /** @override @nodts @return {Iterator<E>} */
 m_iterator__java_util_Iterator() {
  return this.m_listIterator__java_util_ListIterator();
 }
 /** @override @return {E} */
 removeAtIndex(/** number */ index) {
  let iter = this.m_listIterator__int__java_util_ListIterator(index);
  try {
   let old = iter.m_next__java_lang_Object();
   iter.m_remove__void();
   return old;
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (NoSuchElementException.$isInstance(__$exc)) {
    let e = /**@type {NoSuchElementException}*/ (__$exc);
    throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String('Can\'t remove element ' + index));
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
 }
 /** @override @return {E} */
 setAtIndex(/** number */ index, /** E */ element) {
  let iter = this.m_listIterator__int__java_util_ListIterator(index);
  try {
   let old = iter.m_next__java_lang_Object();
   iter.m_set__java_lang_Object__void(element);
   return old;
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (NoSuchElementException.$isInstance(__$exc)) {
    let e = /**@type {NoSuchElementException}*/ (__$exc);
    throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String('Can\'t set element ' + index));
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
 }
 /** @nodts */
 static $clinit() {
  AbstractSequentialList.$clinit = () =>{};
  AbstractSequentialList.$loadModules();
  AbstractList.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractSequentialList;
 }
 /** @abstract @override @return {number} */
 size() {}
 
 /** @nodts */
 static $loadModules() {
  IndexOutOfBoundsException = goog.module.get('java.lang.IndexOutOfBoundsException$impl');
  NoSuchElementException = goog.module.get('java.util.NoSuchElementException$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
$Util.$setClassMetadata(AbstractSequentialList, 'java.util.AbstractSequentialList');

exports = AbstractSequentialList;

//# sourceMappingURL=AbstractSequentialList.js.map

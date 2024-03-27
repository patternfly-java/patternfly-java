goog.module('java.util.AbstractSet$impl');

const AbstractCollection = goog.require('java.util.AbstractCollection$impl');
const Set = goog.require('java.util.Set$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Collection = goog.forwardDeclare('java.util.Collection$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template E
 * @extends {AbstractCollection<E>}
 * @implements {Set<E>}
 */
class AbstractSet extends AbstractCollection {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__java_util_AbstractSet__void() {
  this.$ctor__java_util_AbstractCollection__void();
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  if ($Equality.$same(o, this)) {
   return true;
  }
  if (!Set.$isInstance(o)) {
   return false;
  }
  let other = /**@type {Set<*>}*/ ($Casts.$to(o, Set));
  if (other.size() != this.size()) {
   return false;
  }
  return this.containsAll(other);
 }
 /** @override @return {number} */
 hashCode() {
  return Collections.m_hashCode__java_lang_Iterable__int(this);
 }
 /** @override @return {boolean} */
 removeAll(/** Collection<?> */ c) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(c);
  let size = this.size();
  if (size < c.size()) {
   for (let iter = this.m_iterator__java_util_Iterator(); iter.m_hasNext__boolean(); ) {
    let o = iter.m_next__java_lang_Object();
    if (c.contains(o)) {
     iter.m_remove__void();
    }
   }
  } else {
   for (let $iterator = c.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let o_1 = $iterator.m_next__java_lang_Object();
    {
     this.remove(o_1);
    }
   }
  }
  return size != this.size();
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<E>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<E>}*/ (Set.m_spliterator__$default__java_util_Set__java_util_Spliterator(this));
 }
 /** @nodts */
 static $clinit() {
  AbstractSet.$clinit = () =>{};
  AbstractSet.$loadModules();
  AbstractCollection.$clinit();
  Set.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractSet;
 }
 /** @abstract @override @nodts @return {Iterator<E>} */
 m_iterator__java_util_Iterator() {}
 /** @abstract @override @return {number} */
 size() {}
 
 /** @nodts */
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Set.$markImplementor(AbstractSet);
$Util.$setClassMetadata(AbstractSet, 'java.util.AbstractSet');

exports = AbstractSet;

//# sourceMappingURL=AbstractSet.js.map

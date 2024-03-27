goog.module('java.util.SortedSet.$1$impl');

const IteratorSpliterator = goog.require('java.util.Spliterators.IteratorSpliterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Collection = goog.forwardDeclare('java.util.Collection$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let SortedSet = goog.forwardDeclare('java.util.SortedSet$impl');

/**
 * @template E
 * @extends {IteratorSpliterator<E>}
 */
class $1 extends IteratorSpliterator {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {SortedSet<E>} @nodts*/
  this.$outer_this__java_util_SortedSet_1;
 }
 /** @nodts @template E @return {!$1<E>} */
 static $create__java_util_SortedSet__java_util_Collection__int(/** SortedSet<E> */ $outer_this, /** Collection<?> */ $_0, /** number */ $_1) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__java_util_SortedSet_1__java_util_SortedSet__java_util_Collection__int__void($outer_this, $_0, $_1);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_SortedSet_1__java_util_SortedSet__java_util_Collection__int__void(/** SortedSet<E> */ $outer_this, /** Collection<?> */ $_0, /** number */ $_1) {
  this.$outer_this__java_util_SortedSet_1 = $outer_this;
  this.$ctor__java_util_Spliterators_IteratorSpliterator__java_util_Collection__int__void($_0, $_1);
 }
 /** @override @nodts @return {Comparator<?>} */
 m_getComparator__java_util_Comparator() {
  return this.$outer_this__java_util_SortedSet_1.m_comparator__java_util_Comparator();
 }
 /** @nodts */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  IteratorSpliterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($1, 'java.util.SortedSet$1');

exports = $1;

//# sourceMappingURL=SortedSet$1.js.map

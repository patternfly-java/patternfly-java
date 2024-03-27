goog.module('java.util.Collections.UnmodifiableSortedSet$impl');

const UnmodifiableSet = goog.require('java.util.Collections.UnmodifiableSet$impl');
const SortedSet = goog.require('java.util.SortedSet$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template E
 * @extends {UnmodifiableSet<E>}
 * @implements {SortedSet<E>}
 */
class UnmodifiableSortedSet extends UnmodifiableSet {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {SortedSet<E>} @nodts*/
  this.f_sortedSet__java_util_Collections_UnmodifiableSortedSet_;
 }
 /** @nodts @template E @return {!UnmodifiableSortedSet<E>} */
 static $create__java_util_SortedSet(/** SortedSet<?> */ sortedSet) {
  UnmodifiableSortedSet.$clinit();
  let $instance = new UnmodifiableSortedSet();
  $instance.$ctor__java_util_Collections_UnmodifiableSortedSet__java_util_SortedSet__void(sortedSet);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Collections_UnmodifiableSortedSet__java_util_SortedSet__void(/** SortedSet<?> */ sortedSet) {
  this.$ctor__java_util_Collections_UnmodifiableSet__java_util_Set__void(sortedSet);
  this.f_sortedSet__java_util_Collections_UnmodifiableSortedSet_ = /**@type {SortedSet<E>}*/ (sortedSet);
 }
 /** @override @nodts @return {Comparator<?>} */
 m_comparator__java_util_Comparator() {
  return this.f_sortedSet__java_util_Collections_UnmodifiableSortedSet_.m_comparator__java_util_Comparator();
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  return $Objects.m_equals__java_lang_Object__java_lang_Object__boolean(this.f_sortedSet__java_util_Collections_UnmodifiableSortedSet_, o);
 }
 /** @override @nodts @return {E} */
 m_first__java_lang_Object() {
  return this.f_sortedSet__java_util_Collections_UnmodifiableSortedSet_.m_first__java_lang_Object();
 }
 /** @override @return {number} */
 hashCode() {
  return $Objects.m_hashCode__java_lang_Object__int(this.f_sortedSet__java_util_Collections_UnmodifiableSortedSet_);
 }
 /** @override @nodts @return {SortedSet<E>} */
 m_headSet__java_lang_Object__java_util_SortedSet(/** E */ toElement) {
  return /**@type {!UnmodifiableSortedSet<E>}*/ (UnmodifiableSortedSet.$create__java_util_SortedSet(this.f_sortedSet__java_util_Collections_UnmodifiableSortedSet_.m_headSet__java_lang_Object__java_util_SortedSet(toElement)));
 }
 /** @override @nodts @return {E} */
 m_last__java_lang_Object() {
  return this.f_sortedSet__java_util_Collections_UnmodifiableSortedSet_.m_last__java_lang_Object();
 }
 /** @override @nodts @return {SortedSet<E>} */
 m_subSet__java_lang_Object__java_lang_Object__java_util_SortedSet(/** E */ fromElement, /** E */ toElement) {
  return /**@type {!UnmodifiableSortedSet<E>}*/ (UnmodifiableSortedSet.$create__java_util_SortedSet(this.f_sortedSet__java_util_Collections_UnmodifiableSortedSet_.m_subSet__java_lang_Object__java_lang_Object__java_util_SortedSet(fromElement, toElement)));
 }
 /** @override @nodts @return {SortedSet<E>} */
 m_tailSet__java_lang_Object__java_util_SortedSet(/** E */ fromElement) {
  return /**@type {!UnmodifiableSortedSet<E>}*/ (UnmodifiableSortedSet.$create__java_util_SortedSet(this.f_sortedSet__java_util_Collections_UnmodifiableSortedSet_.m_tailSet__java_lang_Object__java_util_SortedSet(fromElement)));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<E>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<E>}*/ (SortedSet.m_spliterator__$default__java_util_SortedSet__java_util_Spliterator(this));
 }
 /** @nodts */
 static $clinit() {
  UnmodifiableSortedSet.$clinit = () =>{};
  UnmodifiableSortedSet.$loadModules();
  UnmodifiableSet.$clinit();
  SortedSet.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UnmodifiableSortedSet;
 }
 
 /** @nodts */
 static $loadModules() {
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
SortedSet.$markImplementor(UnmodifiableSortedSet);
$Util.$setClassMetadata(UnmodifiableSortedSet, 'java.util.Collections$UnmodifiableSortedSet');

exports = UnmodifiableSortedSet;

//# sourceMappingURL=Collections$UnmodifiableSortedSet.js.map

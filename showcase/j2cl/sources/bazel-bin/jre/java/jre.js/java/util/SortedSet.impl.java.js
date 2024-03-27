goog.module('java.util.SortedSet$impl');

const Set = goog.require('java.util.Set$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let $1 = goog.forwardDeclare('java.util.SortedSet.$1$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');

/**
 * @interface
 * @template E
 * @extends {Set<E>}
 */
class SortedSet {
 /** @abstract @nodts @return {Comparator<?>} */
 m_comparator__java_util_Comparator() {}
 /** @abstract @nodts @return {E} */
 m_first__java_lang_Object() {}
 /** @abstract @nodts @return {SortedSet<E>} */
 m_headSet__java_lang_Object__java_util_SortedSet(/** E */ toElement) {}
 /** @abstract @nodts @return {E} */
 m_last__java_lang_Object() {}
 /** @abstract @nodts @return {SortedSet<E>} */
 m_subSet__java_lang_Object__java_lang_Object__java_util_SortedSet(/** E */ fromElement, /** E */ toElement) {}
 /** @abstract @nodts @return {SortedSet<E>} */
 m_tailSet__java_lang_Object__java_util_SortedSet(/** E */ fromElement) {}
 /** @abstract @override @nodts @return {Spliterator<E>} */
 m_spliterator__java_util_Spliterator() {}
 /** @nodts @template E @return {Spliterator<E>} */
 static m_spliterator__$default__java_util_SortedSet__java_util_Spliterator(/** !SortedSet<E> */ $thisArg) {
  SortedSet.$clinit();
  return /**@type {!$1<E>}*/ ($1.$create__java_util_SortedSet__java_util_Collection__int($thisArg, $thisArg, Spliterator.f_DISTINCT__java_util_Spliterator | Spliterator.f_ORDERED__java_util_Spliterator | Spliterator.f_SORTED__java_util_Spliterator));
 }
 /** @nodts */
 static $clinit() {
  SortedSet.$clinit = () =>{};
  SortedSet.$loadModules();
  Set.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Set.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_SortedSet = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_SortedSet;
 }
 
 /** @nodts */
 static $loadModules() {
  $1 = goog.module.get('java.util.SortedSet.$1$impl');
  Spliterator = goog.module.get('java.util.Spliterator$impl');
 }
}
SortedSet.$markImplementor(/**@type {Function}*/ (SortedSet));
$Util.$setClassMetadataForInterface(SortedSet, 'java.util.SortedSet');

exports = SortedSet;

//# sourceMappingURL=SortedSet.js.map

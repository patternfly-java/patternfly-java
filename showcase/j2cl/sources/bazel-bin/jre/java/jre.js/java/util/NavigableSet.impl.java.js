goog.module('java.util.NavigableSet$impl');

const SortedSet = goog.require('java.util.SortedSet$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Iterator = goog.forwardDeclare('java.util.Iterator$impl');

/**
 * @interface
 * @template E
 * @extends {SortedSet<E>}
 */
class NavigableSet {
 /** @abstract @nodts @return {E} */
 m_ceiling__java_lang_Object__java_lang_Object(/** E */ e) {}
 /** @abstract @nodts @return {Iterator<E>} */
 m_descendingIterator__java_util_Iterator() {}
 /** @abstract @nodts @return {NavigableSet<E>} */
 m_descendingSet__java_util_NavigableSet() {}
 /** @abstract @nodts @return {E} */
 m_floor__java_lang_Object__java_lang_Object(/** E */ e) {}
 /** @abstract @nodts @return {NavigableSet<E>} */
 m_headSet__java_lang_Object__boolean__java_util_NavigableSet(/** E */ toElement, /** boolean */ inclusive) {}
 /** @abstract @nodts @return {E} */
 m_higher__java_lang_Object__java_lang_Object(/** E */ e) {}
 /** @abstract @nodts @return {E} */
 m_lower__java_lang_Object__java_lang_Object(/** E */ e) {}
 /** @abstract @nodts @return {E} */
 m_pollFirst__java_lang_Object() {}
 /** @abstract @nodts @return {E} */
 m_pollLast__java_lang_Object() {}
 /** @abstract @nodts @return {NavigableSet<E>} */
 m_subSet__java_lang_Object__boolean__java_lang_Object__boolean__java_util_NavigableSet(/** E */ fromElement, /** boolean */ fromInclusive, /** E */ toElement, /** boolean */ toInclusive) {}
 /** @abstract @nodts @return {NavigableSet<E>} */
 m_tailSet__java_lang_Object__boolean__java_util_NavigableSet(/** E */ fromElement, /** boolean */ inclusive) {}
 /** @nodts */
 static $clinit() {
  NavigableSet.$clinit = () =>{};
  NavigableSet.$loadModules();
  SortedSet.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  SortedSet.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_NavigableSet = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_NavigableSet;
 }
 
 /** @nodts */
 static $loadModules() {}
}
NavigableSet.$markImplementor(/**@type {Function}*/ (NavigableSet));
$Util.$setClassMetadataForInterface(NavigableSet, 'java.util.NavigableSet');

exports = NavigableSet;

//# sourceMappingURL=NavigableSet.js.map

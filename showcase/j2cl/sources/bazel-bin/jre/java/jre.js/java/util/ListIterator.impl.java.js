goog.module('java.util.ListIterator$impl');

const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @template E
 * @extends {Iterator<E>}
 */
class ListIterator {
 /** @abstract @nodts */
 m_add__java_lang_Object__void(/** E */ o) {}
 /** @abstract @nodts @return {boolean} */
 m_hasPrevious__boolean() {}
 /** @abstract @nodts @return {number} */
 m_nextIndex__int() {}
 /** @abstract @nodts @return {E} */
 m_previous__java_lang_Object() {}
 /** @abstract @nodts @return {number} */
 m_previousIndex__int() {}
 /** @abstract @override @nodts */
 m_remove__void() {}
 /** @abstract @nodts */
 m_set__java_lang_Object__void(/** E */ o) {}
 /** @nodts */
 static $clinit() {
  ListIterator.$clinit = () =>{};
  ListIterator.$loadModules();
  Iterator.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Iterator.$markImplementor(ctor);
  ctor.prototype.$implements__java_util_ListIterator = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_ListIterator;
 }
 
 /** @nodts */
 static $loadModules() {}
}
ListIterator.$markImplementor(/**@type {Function}*/ (ListIterator));
$Util.$setClassMetadataForInterface(ListIterator, 'java.util.ListIterator');

exports = ListIterator;

//# sourceMappingURL=ListIterator.js.map

goog.module('javaemul.internal.CollectionHelper$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Collection = goog.forwardDeclare('java.util.Collection$impl');
let ArrayHelper = goog.forwardDeclare('javaemul.internal.ArrayHelper$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 */
class CollectionHelper extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Array<*>} */
 static m_toArray__java_util_Collection__arrayOf_java_lang_Object(/** Collection<?> */ collection) {
  CollectionHelper.$clinit();
  return CollectionHelper.m_toArray__java_util_Collection__arrayOf_java_lang_Object__arrayOf_java_lang_Object(collection, new Array(collection.size()));
 }
 /** @nodts @template E, T @return {Array<T>} */
 static m_toArray__java_util_Collection__arrayOf_java_lang_Object__arrayOf_java_lang_Object(/** Collection<E> */ collection, /** Array<T> */ a) {
  CollectionHelper.$clinit();
  let size = collection.size();
  if (a.length < size) {
   a = ArrayHelper.m_createFrom__arrayOf_java_lang_Object__int__arrayOf_java_lang_Object(a, size);
  }
  let result = a;
  let it = collection.m_iterator__java_util_Iterator();
  for (let i = 0; i < size; i = i + 1 | 0) {
   $Arrays.$set(result, i, it.m_next__java_lang_Object());
  }
  if (a.length > size) {
   $Arrays.$set(a, size, null);
  }
  return a;
 }
 /** @nodts @return {!CollectionHelper} */
 static $create__() {
  let $instance = new CollectionHelper();
  $instance.$ctor__javaemul_internal_CollectionHelper__void();
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_CollectionHelper__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  CollectionHelper.$clinit = () =>{};
  CollectionHelper.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CollectionHelper;
 }
 
 /** @nodts */
 static $loadModules() {
  ArrayHelper = goog.module.get('javaemul.internal.ArrayHelper$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
$Util.$setClassMetadata(CollectionHelper, 'javaemul.internal.CollectionHelper');

exports = CollectionHelper;

//# sourceMappingURL=CollectionHelper.js.map

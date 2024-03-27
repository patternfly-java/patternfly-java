goog.module('java.util.Collections.UnmodifiableMap.UnmodifiableEntrySet$impl');

const UnmodifiableSet = goog.require('java.util.Collections.UnmodifiableSet$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Collection = goog.forwardDeclare('java.util.Collection$impl');
let $1 = goog.forwardDeclare('java.util.Collections.UnmodifiableMap.UnmodifiableEntrySet.$1$impl');
let UnmodifiableEntry = goog.forwardDeclare('java.util.Collections.UnmodifiableMap.UnmodifiableEntrySet.UnmodifiableEntry$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template K, V
 * @extends {UnmodifiableSet<Entry<K, V>>}
 */
class UnmodifiableEntrySet extends UnmodifiableSet {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @template K, V @return {!UnmodifiableEntrySet<K, V>} */
 static $create__java_util_Set(/** Set<?> */ s) {
  UnmodifiableEntrySet.$clinit();
  let $instance = new UnmodifiableEntrySet();
  $instance.$ctor__java_util_Collections_UnmodifiableMap_UnmodifiableEntrySet__java_util_Set__void(s);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Collections_UnmodifiableMap_UnmodifiableEntrySet__java_util_Set__void(/** Set<?> */ s) {
  this.$ctor__java_util_Collections_UnmodifiableSet__java_util_Set__void(/**@type {Set<Entry>}*/ (s));
 }
 /** @override @return {boolean} */
 contains(/** * */ o) {
  return this.f_coll__java_util_Collections_UnmodifiableCollection.contains(o);
 }
 /** @override @return {boolean} */
 containsAll(/** Collection<?> */ o) {
  return this.f_coll__java_util_Collections_UnmodifiableCollection.containsAll(o);
 }
 /** @override @nodts @return {Iterator<Entry<K, V>>} */
 m_iterator__java_util_Iterator() {
  let it = /**@type {Iterator<Entry<K, V>>}*/ (this.f_coll__java_util_Collections_UnmodifiableCollection.m_iterator__java_util_Iterator());
  return /**@type {!$1<K, V>}*/ ($1.$create__java_util_Collections_UnmodifiableMap_UnmodifiableEntrySet__java_util_Iterator(this, it));
 }
 /** @override @return {Array<*>} */
 toArray() {
  let array = super.toArray();
  this.m_wrap__arrayOf_java_lang_Object__int__void_$p_java_util_Collections_UnmodifiableMap_UnmodifiableEntrySet(array, array.length);
  return array;
 }
 /** @override @nodts @template T @return {Array<T>} */
 m_toArray__arrayOf_java_lang_Object__arrayOf_java_lang_Object(/** Array<T> */ a) {
  let result = super.m_toArray__arrayOf_java_lang_Object__arrayOf_java_lang_Object(a);
  this.m_wrap__arrayOf_java_lang_Object__int__void_$p_java_util_Collections_UnmodifiableMap_UnmodifiableEntrySet(result, this.f_coll__java_util_Collections_UnmodifiableCollection.size());
  return /**@type {Array<T>}*/ (result);
 }
 /** @nodts */
 m_wrap__arrayOf_java_lang_Object__int__void_$p_java_util_Collections_UnmodifiableMap_UnmodifiableEntrySet(/** Array<*> */ array, /** number */ size) {
  for (let i = 0; i < size; i = i + 1 | 0) {
   $Arrays.$set(array, i, /**@type {!UnmodifiableEntry<K, V>}*/ (UnmodifiableEntry.$create__java_util_Map_Entry(/**@type {Entry<K, V>}*/ ($Casts.$to(array[i], Entry)))));
  }
 }
 /** @nodts */
 static $clinit() {
  UnmodifiableEntrySet.$clinit = () =>{};
  UnmodifiableEntrySet.$loadModules();
  UnmodifiableSet.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UnmodifiableEntrySet;
 }
 
 /** @nodts */
 static $loadModules() {
  $1 = goog.module.get('java.util.Collections.UnmodifiableMap.UnmodifiableEntrySet.$1$impl');
  UnmodifiableEntry = goog.module.get('java.util.Collections.UnmodifiableMap.UnmodifiableEntrySet.UnmodifiableEntry$impl');
  Entry = goog.module.get('java.util.Map.Entry$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(UnmodifiableEntrySet, 'java.util.Collections$UnmodifiableMap$UnmodifiableEntrySet');

exports = UnmodifiableEntrySet;

//# sourceMappingURL=Collections$UnmodifiableMap$UnmodifiableEntrySet.js.map

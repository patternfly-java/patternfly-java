goog.module('java.util.Collections.UnmodifiableMap.UnmodifiableEntrySet.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let UnmodifiableEntrySet = goog.forwardDeclare('java.util.Collections.UnmodifiableMap.UnmodifiableEntrySet$impl');
let UnmodifiableEntry = goog.forwardDeclare('java.util.Collections.UnmodifiableMap.UnmodifiableEntrySet.UnmodifiableEntry$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @template K, V
 * @implements {Iterator<Entry<K, V>>}
 */
class $1 extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {UnmodifiableEntrySet<K, V>} @nodts*/
  this.$outer_this__java_util_Collections_UnmodifiableMap_UnmodifiableEntrySet_1;
  /**@type {Iterator<Entry<K, V>>} @nodts*/
  this.$captured_it__java_util_Collections_UnmodifiableMap_UnmodifiableEntrySet_1;
 }
 /** @nodts @template K, V @return {!$1<K, V>} */
 static $create__java_util_Collections_UnmodifiableMap_UnmodifiableEntrySet__java_util_Iterator(/** UnmodifiableEntrySet<K, V> */ $outer_this, /** Iterator<Entry<K, V>> */ $captured_it) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__java_util_Collections_UnmodifiableMap_UnmodifiableEntrySet_1__java_util_Collections_UnmodifiableMap_UnmodifiableEntrySet__java_util_Iterator__void($outer_this, $captured_it);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Collections_UnmodifiableMap_UnmodifiableEntrySet_1__java_util_Collections_UnmodifiableMap_UnmodifiableEntrySet__java_util_Iterator__void(/** UnmodifiableEntrySet<K, V> */ $outer_this, /** Iterator<Entry<K, V>> */ $captured_it) {
  this.$outer_this__java_util_Collections_UnmodifiableMap_UnmodifiableEntrySet_1 = $outer_this;
  this.$captured_it__java_util_Collections_UnmodifiableMap_UnmodifiableEntrySet_1 = $captured_it;
  this.$ctor__java_lang_Object__void();
 }
 /** @override @nodts @return {boolean} */
 m_hasNext__boolean() {
  return this.$captured_it__java_util_Collections_UnmodifiableMap_UnmodifiableEntrySet_1.m_hasNext__boolean();
 }
 /** @nodts @return {Entry<K, V>} */
 m_next__java_util_Map_Entry() {
  return /**@type {!UnmodifiableEntry<K, V>}*/ (UnmodifiableEntry.$create__java_util_Map_Entry(/**@type {Entry<K, V>}*/ ($Casts.$to(this.$captured_it__java_util_Collections_UnmodifiableMap_UnmodifiableEntrySet_1.m_next__java_lang_Object(), Entry))));
 }
 /** @override @nodts */
 m_remove__void() {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEachRemaining__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Entry<K, V>} */
 m_next__java_lang_Object() {
  return this.m_next__java_util_Map_Entry();
 }
 /** @nodts */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
  Iterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 /** @nodts */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  UnmodifiableEntry = goog.module.get('java.util.Collections.UnmodifiableMap.UnmodifiableEntrySet.UnmodifiableEntry$impl');
  Entry = goog.module.get('java.util.Map.Entry$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
Iterator.$markImplementor($1);
$Util.$setClassMetadata($1, 'java.util.Collections$UnmodifiableMap$UnmodifiableEntrySet$1');

exports = $1;

//# sourceMappingURL=Collections$UnmodifiableMap$UnmodifiableEntrySet$1.js.map

goog.module('java.util.InternalStringMap.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IteratorEntry_$Overlay = goog.forwardDeclare('java.util.InternalJsMap.IteratorEntry.$Overlay$impl');
let InternalStringMap = goog.forwardDeclare('java.util.InternalStringMap$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');

/**
 * @template K, V
 * @implements {Iterator<Entry<K, V>>}
 */
class $1 extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {InternalStringMap<K, V>} @nodts*/
  this.$outer_this__java_util_InternalStringMap_1;
  /**@type {IteratorIterable<V>} @nodts*/
  this.f_entries__java_util_InternalStringMap_1;
  /**@type {IIterableResult<V>} @nodts*/
  this.f_current__java_util_InternalStringMap_1;
  /**@type {IIterableResult<V>} @nodts*/
  this.f_last__java_util_InternalStringMap_1;
 }
 /** @nodts @template K, V @return {!$1<K, V>} */
 static $create__java_util_InternalStringMap(/** InternalStringMap<K, V> */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__java_util_InternalStringMap_1__java_util_InternalStringMap__void($outer_this);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_InternalStringMap_1__java_util_InternalStringMap__void(/** InternalStringMap<K, V> */ $outer_this) {
  this.$outer_this__java_util_InternalStringMap_1 = $outer_this;
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_InternalStringMap_1();
 }
 /** @override @nodts @return {boolean} */
 m_hasNext__boolean() {
  return !this.f_current__java_util_InternalStringMap_1.done;
 }
 /** @nodts @return {Entry<K, V>} */
 m_next__java_util_Map_Entry() {
  this.f_last__java_util_InternalStringMap_1 = this.f_current__java_util_InternalStringMap_1;
  this.f_current__java_util_InternalStringMap_1 = this.f_entries__java_util_InternalStringMap_1.next();
  return this.$outer_this__java_util_InternalStringMap_1.m_newMapEntry__java_util_InternalJsMap_IteratorEntry__int__java_util_Map_Entry_$p_java_util_InternalStringMap(this.f_last__java_util_InternalStringMap_1, this.$outer_this__java_util_InternalStringMap_1.f_valueMod__java_util_InternalStringMap_);
 }
 /** @override @nodts */
 m_remove__void() {
  this.$outer_this__java_util_InternalStringMap_1.m_remove__java_lang_String__java_lang_Object(IteratorEntry_$Overlay.m_getKey__$devirt__java_util_InternalJsMap_IteratorEntry__java_lang_String(this.f_last__java_util_InternalStringMap_1));
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
 /** @private @nodts */
 $init__void_$p_java_util_InternalStringMap_1() {
  this.f_entries__java_util_InternalStringMap_1 = this.$outer_this__java_util_InternalStringMap_1.f_backingMap__java_util_InternalStringMap_.entries();
  this.f_current__java_util_InternalStringMap_1 = this.f_entries__java_util_InternalStringMap_1.next();
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
  IteratorEntry_$Overlay = goog.module.get('java.util.InternalJsMap.IteratorEntry.$Overlay$impl');
 }
}
Iterator.$markImplementor($1);
$Util.$setClassMetadata($1, 'java.util.InternalStringMap$1');

exports = $1;

//# sourceMappingURL=InternalStringMap$1.js.map

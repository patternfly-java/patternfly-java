goog.module('java.util.InternalHashCodeMap.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let InternalHashCodeMap = goog.forwardDeclare('java.util.InternalHashCodeMap$impl');
let IteratorEntry_$Overlay = goog.forwardDeclare('java.util.InternalJsMap.IteratorEntry.$Overlay$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let JsUtils = goog.forwardDeclare('javaemul.internal.JsUtils$impl');

/**
 * @template K, V
 * @implements {Iterator<Entry<K, V>>}
 */
class $1 extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {InternalHashCodeMap<K, V>} @nodts*/
  this.$outer_this__java_util_InternalHashCodeMap_1;
  /**@type {IteratorIterable<?>} @nodts*/
  this.f_chains__java_util_InternalHashCodeMap_1;
  /**@type {number} @nodts*/
  this.f_itemIndex__java_util_InternalHashCodeMap_1 = 0;
  /**@type {Array<Entry<K, V>>} @nodts*/
  this.f_chain__java_util_InternalHashCodeMap_1;
  /**@type {Entry<K, V>} @nodts*/
  this.f_lastEntry__java_util_InternalHashCodeMap_1;
 }
 /** @nodts @template K, V @return {!$1<K, V>} */
 static $create__java_util_InternalHashCodeMap(/** InternalHashCodeMap<K, V> */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__java_util_InternalHashCodeMap_1__java_util_InternalHashCodeMap__void($outer_this);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_InternalHashCodeMap_1__java_util_InternalHashCodeMap__void(/** InternalHashCodeMap<K, V> */ $outer_this) {
  this.$outer_this__java_util_InternalHashCodeMap_1 = $outer_this;
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_InternalHashCodeMap_1();
 }
 /** @override @nodts @return {boolean} */
 m_hasNext__boolean() {
  if (this.f_itemIndex__java_util_InternalHashCodeMap_1 < this.f_chain__java_util_InternalHashCodeMap_1.length) {
   return true;
  }
  let current = this.f_chains__java_util_InternalHashCodeMap_1.next();
  if (!current.done) {
   this.f_chain__java_util_InternalHashCodeMap_1 = /**@type {Array<Entry<K, V>>}*/ (JsUtils.uncheckedCast(IteratorEntry_$Overlay.m_getValue__$devirt__java_util_InternalJsMap_IteratorEntry__java_lang_Object(current)));
   this.f_itemIndex__java_util_InternalHashCodeMap_1 = 0;
   return true;
  }
  return false;
 }
 /** @nodts @return {Entry<K, V>} */
 m_next__java_util_Map_Entry() {
  let /** number */ $value;
  this.f_lastEntry__java_util_InternalHashCodeMap_1 = this.f_chain__java_util_InternalHashCodeMap_1[($value = this.f_itemIndex__java_util_InternalHashCodeMap_1, this.f_itemIndex__java_util_InternalHashCodeMap_1 = this.f_itemIndex__java_util_InternalHashCodeMap_1 + 1 | 0, $value)];
  return this.f_lastEntry__java_util_InternalHashCodeMap_1;
 }
 /** @override @nodts */
 m_remove__void() {
  this.$outer_this__java_util_InternalHashCodeMap_1.m_remove__java_lang_Object__java_lang_Object(this.f_lastEntry__java_util_InternalHashCodeMap_1.m_getKey__java_lang_Object());
  if (this.f_itemIndex__java_util_InternalHashCodeMap_1 != 0) {
   this.f_itemIndex__java_util_InternalHashCodeMap_1 = this.f_itemIndex__java_util_InternalHashCodeMap_1 - 1 | 0;
  }
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
 $init__void_$p_java_util_InternalHashCodeMap_1() {
  this.f_chains__java_util_InternalHashCodeMap_1 = this.$outer_this__java_util_InternalHashCodeMap_1.f_backingMap__java_util_InternalHashCodeMap_.entries();
  this.f_itemIndex__java_util_InternalHashCodeMap_1 = 0;
  this.f_chain__java_util_InternalHashCodeMap_1 = this.$outer_this__java_util_InternalHashCodeMap_1.m_newEntryChain__arrayOf_java_util_Map_Entry_$p_java_util_InternalHashCodeMap();
  this.f_lastEntry__java_util_InternalHashCodeMap_1 = null;
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
  JsUtils = goog.module.get('javaemul.internal.JsUtils$impl');
 }
}
Iterator.$markImplementor($1);
$Util.$setClassMetadata($1, 'java.util.InternalHashCodeMap$1');

exports = $1;

//# sourceMappingURL=InternalHashCodeMap$1.js.map

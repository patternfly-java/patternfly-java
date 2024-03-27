goog.module('java.util.InternalHashCodeMap$impl');

const Iterable = goog.require('java.lang.Iterable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let AbstractHashMap = goog.forwardDeclare('java.util.AbstractHashMap$impl');
let SimpleEntry = goog.forwardDeclare('java.util.AbstractMap.SimpleEntry$impl');
let $1 = goog.forwardDeclare('java.util.InternalHashCodeMap.$1$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let ArrayHelper = goog.forwardDeclare('javaemul.internal.ArrayHelper$impl');
let JsUtils = goog.forwardDeclare('javaemul.internal.JsUtils$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @template K, V
 * @implements {Iterable<Entry<K, V>>}
 */
class InternalHashCodeMap extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<*>} @nodts*/
  this.f_backingMap__java_util_InternalHashCodeMap_;
  /**@type {AbstractHashMap<K, V>} @nodts*/
  this.f_host__java_util_InternalHashCodeMap_;
  /**@type {number} @nodts*/
  this.f_size__java_util_InternalHashCodeMap_ = 0;
 }
 /** @nodts @template K, V @return {!InternalHashCodeMap<K, V>} */
 static $create__java_util_AbstractHashMap(/** AbstractHashMap<K, V> */ host) {
  InternalHashCodeMap.$clinit();
  let $instance = new InternalHashCodeMap();
  $instance.$ctor__java_util_InternalHashCodeMap__java_util_AbstractHashMap__void(host);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_InternalHashCodeMap__java_util_AbstractHashMap__void(/** AbstractHashMap<K, V> */ host) {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_InternalHashCodeMap();
  this.f_host__java_util_InternalHashCodeMap_ = host;
 }
 /** @nodts @return {V} */
 m_put__java_lang_Object__java_lang_Object__java_lang_Object(/** K */ key, /** V */ value) {
  let hashCode = this.m_hash__java_lang_Object__int_$p_java_util_InternalHashCodeMap(key);
  let chain = this.m_getChainOrEmpty__int__arrayOf_java_util_Map_Entry_$p_java_util_InternalHashCodeMap(hashCode);
  if (chain.length == 0) {
   this.f_backingMap__java_util_InternalHashCodeMap_.set(hashCode, chain);
  } else {
   let entry = this.m_findEntryInChain__java_lang_Object__arrayOf_java_util_Map_Entry__java_util_Map_Entry_$p_java_util_InternalHashCodeMap(key, chain);
   if (!$Equality.$same(entry, null)) {
    return entry.m_setValue__java_lang_Object__java_lang_Object(value);
   }
  }
  $Arrays.$set(chain, chain.length, /**@type {!SimpleEntry<K, V>}*/ (SimpleEntry.$create__java_lang_Object__java_lang_Object(key, value)));
  this.f_size__java_util_InternalHashCodeMap_ = this.f_size__java_util_InternalHashCodeMap_ + 1 | 0;
  this.f_host__java_util_InternalHashCodeMap_.m_structureChanged__void_$pp_java_util();
  return null;
 }
 /** @nodts @return {V} */
 m_remove__java_lang_Object__java_lang_Object(/** * */ key) {
  let hashCode = this.m_hash__java_lang_Object__int_$p_java_util_InternalHashCodeMap(key);
  let chain = this.m_getChainOrEmpty__int__arrayOf_java_util_Map_Entry_$p_java_util_InternalHashCodeMap(hashCode);
  for (let i = 0; i < chain.length; i = i + 1 | 0) {
   let entry = chain[i];
   if (this.f_host__java_util_InternalHashCodeMap_.m_equals__java_lang_Object__java_lang_Object__boolean_$pp_java_util(key, entry.m_getKey__java_lang_Object())) {
    if (chain.length == 1) {
     ArrayHelper.m_setLength__java_lang_Object__int__void(chain, 0);
     this.f_backingMap__java_util_InternalHashCodeMap_.delete(hashCode);
    } else {
     ArrayHelper.m_removeFrom__arrayOf_java_lang_Object__int__int__void(chain, i, 1);
    }
    this.f_size__java_util_InternalHashCodeMap_ = this.f_size__java_util_InternalHashCodeMap_ - 1 | 0;
    this.f_host__java_util_InternalHashCodeMap_.m_structureChanged__void_$pp_java_util();
    return entry.m_getValue__java_lang_Object();
   }
  }
  return null;
 }
 /** @nodts @return {Entry<K, V>} */
 m_getEntry__java_lang_Object__java_util_Map_Entry(/** * */ key) {
  return this.m_findEntryInChain__java_lang_Object__arrayOf_java_util_Map_Entry__java_util_Map_Entry_$p_java_util_InternalHashCodeMap(key, this.m_getChainOrEmpty__int__arrayOf_java_util_Map_Entry_$p_java_util_InternalHashCodeMap(this.m_hash__java_lang_Object__int_$p_java_util_InternalHashCodeMap(key)));
 }
 /** @nodts @return {Entry<K, V>} */
 m_findEntryInChain__java_lang_Object__arrayOf_java_util_Map_Entry__java_util_Map_Entry_$p_java_util_InternalHashCodeMap(/** * */ key, /** Array<Entry<K, V>> */ chain) {
  for (let $array = chain, $index = 0; $index < $array.length; $index++) {
   let entry = $array[$index];
   {
    if (this.f_host__java_util_InternalHashCodeMap_.m_equals__java_lang_Object__java_lang_Object__boolean_$pp_java_util(key, entry.m_getKey__java_lang_Object())) {
     return entry;
    }
   }
  }
  return null;
 }
 /** @nodts @return {number} */
 m_size__int() {
  return this.f_size__java_util_InternalHashCodeMap_;
 }
 /** @override @nodts @return {Iterator<Entry<K, V>>} */
 m_iterator__java_util_Iterator() {
  return /**@type {!$1<K, V>}*/ ($1.$create__java_util_InternalHashCodeMap(this));
 }
 /** @nodts @return {Array<Entry<K, V>>} */
 m_getChainOrEmpty__int__arrayOf_java_util_Map_Entry_$p_java_util_InternalHashCodeMap(/** number */ hashCode) {
  let chain = /**@type {Array<Entry<K, V>>}*/ (JsUtils.uncheckedCast(this.f_backingMap__java_util_InternalHashCodeMap_.get(hashCode)));
  return $Equality.$same(chain, null) ? this.m_newEntryChain__arrayOf_java_util_Map_Entry_$p_java_util_InternalHashCodeMap() : chain;
 }
 /** @nodts @return {Array<Entry<K, V>>} */
 m_newEntryChain__arrayOf_java_util_Map_Entry_$p_java_util_InternalHashCodeMap() {
  return /**@type {Array<Entry<K, V>>}*/ (JsUtils.uncheckedCast(new Array(0)));
 }
 /** @nodts @return {number} */
 m_hash__java_lang_Object__int_$p_java_util_InternalHashCodeMap(/** * */ key) {
  return this.f_host__java_util_InternalHashCodeMap_.m_getHashCode__java_lang_Object__int_$pp_java_util(key);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<Entry<K, V>>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<Entry<K, V>>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 /** @private @nodts */
 $init__void_$p_java_util_InternalHashCodeMap() {
  this.f_backingMap__java_util_InternalHashCodeMap_ = new Map();
 }
 /** @nodts */
 static $clinit() {
  InternalHashCodeMap.$clinit = () =>{};
  InternalHashCodeMap.$loadModules();
  j_l_Object.$clinit();
  Iterable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InternalHashCodeMap;
 }
 
 /** @nodts */
 static $loadModules() {
  SimpleEntry = goog.module.get('java.util.AbstractMap.SimpleEntry$impl');
  $1 = goog.module.get('java.util.InternalHashCodeMap.$1$impl');
  ArrayHelper = goog.module.get('javaemul.internal.ArrayHelper$impl');
  JsUtils = goog.module.get('javaemul.internal.JsUtils$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
Iterable.$markImplementor(InternalHashCodeMap);
$Util.$setClassMetadata(InternalHashCodeMap, 'java.util.InternalHashCodeMap');

exports = InternalHashCodeMap;

//# sourceMappingURL=InternalHashCodeMap.js.map

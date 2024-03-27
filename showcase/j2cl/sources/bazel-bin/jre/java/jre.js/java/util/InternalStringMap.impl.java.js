goog.module('java.util.InternalStringMap$impl');

const Iterable = goog.require('java.lang.Iterable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let AbstractHashMap = goog.forwardDeclare('java.util.AbstractHashMap$impl');
let $1 = goog.forwardDeclare('java.util.InternalStringMap.$1$impl');
let $2 = goog.forwardDeclare('java.util.InternalStringMap.$2$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let JsUtils = goog.forwardDeclare('javaemul.internal.JsUtils$impl');

/**
 * @template K, V
 * @implements {Iterable<Entry<K, V>>}
 */
class InternalStringMap extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<V>} @nodts*/
  this.f_backingMap__java_util_InternalStringMap_;
  /**@type {AbstractHashMap<K, V>} @nodts*/
  this.f_host__java_util_InternalStringMap_;
  /**@type {number} @nodts*/
  this.f_size__java_util_InternalStringMap_ = 0;
  /**@type {number} @nodts*/
  this.f_valueMod__java_util_InternalStringMap_ = 0;
 }
 /** @nodts @template K, V @return {!InternalStringMap<K, V>} */
 static $create__java_util_AbstractHashMap(/** AbstractHashMap<K, V> */ host) {
  InternalStringMap.$clinit();
  let $instance = new InternalStringMap();
  $instance.$ctor__java_util_InternalStringMap__java_util_AbstractHashMap__void(host);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_InternalStringMap__java_util_AbstractHashMap__void(/** AbstractHashMap<K, V> */ host) {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_InternalStringMap();
  this.f_host__java_util_InternalStringMap_ = host;
 }
 /** @nodts @return {boolean} */
 m_contains__java_lang_String__boolean(/** ?string */ key) {
  return this.f_backingMap__java_util_InternalStringMap_.has(key);
 }
 /** @nodts @return {V} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  return this.f_backingMap__java_util_InternalStringMap_.get(key);
 }
 /** @nodts @return {V} */
 m_put__java_lang_String__java_lang_Object__java_lang_Object(/** ?string */ key, /** V */ value) {
  let oldValue = this.f_backingMap__java_util_InternalStringMap_.get(key);
  this.f_backingMap__java_util_InternalStringMap_.set(key, InternalStringMap.m_toNullIfUndefined__java_lang_Object__java_lang_Object(value));
  if (JsUtils.isUndefined(oldValue)) {
   this.f_size__java_util_InternalStringMap_ = this.f_size__java_util_InternalStringMap_ + 1 | 0;
   this.f_host__java_util_InternalStringMap_.m_structureChanged__void_$pp_java_util();
  } else {
   this.f_valueMod__java_util_InternalStringMap_ = this.f_valueMod__java_util_InternalStringMap_ + 1 | 0;
  }
  return oldValue;
 }
 /** @nodts @return {V} */
 m_remove__java_lang_String__java_lang_Object(/** ?string */ key) {
  let value = this.f_backingMap__java_util_InternalStringMap_.get(key);
  if (!JsUtils.isUndefined(value)) {
   this.f_backingMap__java_util_InternalStringMap_.delete(key);
   this.f_size__java_util_InternalStringMap_ = this.f_size__java_util_InternalStringMap_ - 1 | 0;
   this.f_host__java_util_InternalStringMap_.m_structureChanged__void_$pp_java_util();
  } else {
   this.f_valueMod__java_util_InternalStringMap_ = this.f_valueMod__java_util_InternalStringMap_ + 1 | 0;
  }
  return value;
 }
 /** @nodts @return {number} */
 m_size__int() {
  return this.f_size__java_util_InternalStringMap_;
 }
 /** @override @nodts @return {Iterator<Entry<K, V>>} */
 m_iterator__java_util_Iterator() {
  return /**@type {!$1<K, V>}*/ ($1.$create__java_util_InternalStringMap(this));
 }
 /** @nodts @return {Entry<K, V>} */
 m_newMapEntry__java_util_InternalJsMap_IteratorEntry__int__java_util_Map_Entry_$p_java_util_InternalStringMap(/** IIterableResult<V> */ entry, /** number */ lastValueMod) {
  return /**@type {!$2<K, V>}*/ ($2.$create__java_util_InternalStringMap__java_util_InternalJsMap_IteratorEntry__int(this, entry, lastValueMod));
 }
 /** @nodts @template T @return {T} */
 static m_toNullIfUndefined__java_lang_Object__java_lang_Object(/** T */ value) {
  return JsUtils.isUndefined(value) ? null : value;
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
 $init__void_$p_java_util_InternalStringMap() {
  this.f_backingMap__java_util_InternalStringMap_ = /**@type {!Map<V>}*/ (new Map());
 }
 /** @nodts */
 static $clinit() {
  InternalStringMap.$clinit = () =>{};
  InternalStringMap.$loadModules();
  j_l_Object.$clinit();
  Iterable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InternalStringMap;
 }
 
 /** @nodts */
 static $loadModules() {
  $1 = goog.module.get('java.util.InternalStringMap.$1$impl');
  $2 = goog.module.get('java.util.InternalStringMap.$2$impl');
  JsUtils = goog.module.get('javaemul.internal.JsUtils$impl');
 }
}
Iterable.$markImplementor(InternalStringMap);
$Util.$setClassMetadata(InternalStringMap, 'java.util.InternalStringMap');

exports = InternalStringMap;

//# sourceMappingURL=InternalStringMap.js.map

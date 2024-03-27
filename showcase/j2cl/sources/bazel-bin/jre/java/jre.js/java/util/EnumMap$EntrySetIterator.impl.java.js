goog.module('java.util.EnumMap.EntrySetIterator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Enum = goog.forwardDeclare('java.lang.Enum$impl');
let EnumMap = goog.forwardDeclare('java.util.EnumMap$impl');
let MapEntry = goog.forwardDeclare('java.util.EnumMap.MapEntry$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 * @template K, V
 * @implements {Iterator<Entry<K, V>>}
 */
class EntrySetIterator extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {EnumMap<K, V>} @nodts*/
  this.$outer_this__java_util_EnumMap_EntrySetIterator;
  /**@type {Iterator<K>} @nodts*/
  this.f_it__java_util_EnumMap_EntrySetIterator_;
  /**@type {K} @nodts*/
  this.f_key__java_util_EnumMap_EntrySetIterator_;
 }
 /** @nodts @template K, V @return {!EntrySetIterator<K, V>} */
 static $create__java_util_EnumMap(/** EnumMap<K, V> */ $outer_this) {
  EntrySetIterator.$clinit();
  let $instance = new EntrySetIterator();
  $instance.$ctor__java_util_EnumMap_EntrySetIterator__java_util_EnumMap__void($outer_this);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_EnumMap_EntrySetIterator__java_util_EnumMap__void(/** EnumMap<K, V> */ $outer_this) {
  this.$outer_this__java_util_EnumMap_EntrySetIterator = $outer_this;
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_EnumMap_EntrySetIterator();
 }
 /** @override @nodts @return {boolean} */
 m_hasNext__boolean() {
  return this.f_it__java_util_EnumMap_EntrySetIterator_.m_hasNext__boolean();
 }
 /** @nodts @return {Entry<K, V>} */
 m_next__java_util_Map_Entry() {
  this.f_key__java_util_EnumMap_EntrySetIterator_ = /**@type {K}*/ ($Casts.$to(this.f_it__java_util_EnumMap_EntrySetIterator_.m_next__java_lang_Object(), Enum));
  return /**@type {!MapEntry<K, V>}*/ (MapEntry.$create__java_util_EnumMap__java_lang_Enum(this.$outer_this__java_util_EnumMap_EntrySetIterator, this.f_key__java_util_EnumMap_EntrySetIterator_));
 }
 /** @override @nodts */
 m_remove__void() {
  InternalPreconditions.m_checkState__boolean__void(!$Equality.$same(this.f_key__java_util_EnumMap_EntrySetIterator_, null));
  this.$outer_this__java_util_EnumMap_EntrySetIterator.remove(this.f_key__java_util_EnumMap_EntrySetIterator_);
  this.f_key__java_util_EnumMap_EntrySetIterator_ = null;
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
 $init__void_$p_java_util_EnumMap_EntrySetIterator() {
  this.f_it__java_util_EnumMap_EntrySetIterator_ = this.$outer_this__java_util_EnumMap_EntrySetIterator.f_keySet__java_util_EnumMap_.m_iterator__java_util_Iterator();
 }
 /** @nodts */
 static $clinit() {
  EntrySetIterator.$clinit = () =>{};
  EntrySetIterator.$loadModules();
  j_l_Object.$clinit();
  Iterator.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EntrySetIterator;
 }
 
 /** @nodts */
 static $loadModules() {
  Enum = goog.module.get('java.lang.Enum$impl');
  MapEntry = goog.module.get('java.util.EnumMap.MapEntry$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Iterator.$markImplementor(EntrySetIterator);
$Util.$setClassMetadata(EntrySetIterator, 'java.util.EnumMap$EntrySetIterator');

exports = EntrySetIterator;

//# sourceMappingURL=EnumMap$EntrySetIterator.js.map

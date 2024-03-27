goog.module('java.util.LinkedHashMap.ChainEntry$impl');

const SimpleEntry = goog.require('java.util.AbstractMap.SimpleEntry$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');

/**
 * @template K, V
 * @extends {SimpleEntry<K, V>}
 */
class ChainEntry extends SimpleEntry {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {LinkedHashMap<K, V>} @nodts*/
  this.$outer_this__java_util_LinkedHashMap_ChainEntry;
  /**@type {ChainEntry<K, V>} @nodts*/
  this.f_next__java_util_LinkedHashMap_ChainEntry_;
  /**@type {ChainEntry<K, V>} @nodts*/
  this.f_prev__java_util_LinkedHashMap_ChainEntry_;
 }
 //Factory method corresponding to constructor 'ChainEntry(LinkedHashMap)'.
 /** @nodts @template K, V @return {!ChainEntry<K, V>} */
 static $create__java_util_LinkedHashMap(/** LinkedHashMap<K, V> */ $outer_this) {
  ChainEntry.$clinit();
  let $instance = new ChainEntry();
  $instance.$ctor__java_util_LinkedHashMap_ChainEntry__java_util_LinkedHashMap__void($outer_this);
  return $instance;
 }
 //Initialization from constructor 'ChainEntry(LinkedHashMap)'.
 /** @nodts */
 $ctor__java_util_LinkedHashMap_ChainEntry__java_util_LinkedHashMap__void(/** LinkedHashMap<K, V> */ $outer_this) {
  this.$ctor__java_util_LinkedHashMap_ChainEntry__java_util_LinkedHashMap__java_lang_Object__java_lang_Object__void($outer_this, null, null);
 }
 //Factory method corresponding to constructor 'ChainEntry(LinkedHashMap, Object, Object)'.
 /** @nodts @template K, V @return {!ChainEntry<K, V>} */
 static $create__java_util_LinkedHashMap__java_lang_Object__java_lang_Object(/** LinkedHashMap<K, V> */ $outer_this, /** K */ key, /** V */ value) {
  ChainEntry.$clinit();
  let $instance = new ChainEntry();
  $instance.$ctor__java_util_LinkedHashMap_ChainEntry__java_util_LinkedHashMap__java_lang_Object__java_lang_Object__void($outer_this, key, value);
  return $instance;
 }
 //Initialization from constructor 'ChainEntry(LinkedHashMap, Object, Object)'.
 /** @nodts */
 $ctor__java_util_LinkedHashMap_ChainEntry__java_util_LinkedHashMap__java_lang_Object__java_lang_Object__void(/** LinkedHashMap<K, V> */ $outer_this, /** K */ key, /** V */ value) {
  this.$outer_this__java_util_LinkedHashMap_ChainEntry = $outer_this;
  this.$ctor__java_util_AbstractMap_SimpleEntry__java_lang_Object__java_lang_Object__void(key, value);
 }
 /** @nodts */
 m_addToEnd__void() {
  let tail = this.$outer_this__java_util_LinkedHashMap_ChainEntry.f_head__java_util_LinkedHashMap_.f_prev__java_util_LinkedHashMap_ChainEntry_;
  $Asserts.$assert(!$Equality.$same(this.$outer_this__java_util_LinkedHashMap_ChainEntry.f_head__java_util_LinkedHashMap_, null) && !$Equality.$same(tail, null));
  $Asserts.$assert($Equality.$same(this.f_next__java_util_LinkedHashMap_ChainEntry_, null) && $Equality.$same(this.f_prev__java_util_LinkedHashMap_ChainEntry_, null));
  this.f_prev__java_util_LinkedHashMap_ChainEntry_ = tail;
  this.f_next__java_util_LinkedHashMap_ChainEntry_ = this.$outer_this__java_util_LinkedHashMap_ChainEntry.f_head__java_util_LinkedHashMap_;
  tail.f_next__java_util_LinkedHashMap_ChainEntry_ = this.$outer_this__java_util_LinkedHashMap_ChainEntry.f_head__java_util_LinkedHashMap_.f_prev__java_util_LinkedHashMap_ChainEntry_ = this;
 }
 /** @nodts */
 m_remove__void() {
  this.f_next__java_util_LinkedHashMap_ChainEntry_.f_prev__java_util_LinkedHashMap_ChainEntry_ = this.f_prev__java_util_LinkedHashMap_ChainEntry_;
  this.f_prev__java_util_LinkedHashMap_ChainEntry_.f_next__java_util_LinkedHashMap_ChainEntry_ = this.f_next__java_util_LinkedHashMap_ChainEntry_;
  this.f_next__java_util_LinkedHashMap_ChainEntry_ = this.f_prev__java_util_LinkedHashMap_ChainEntry_ = null;
 }
 /** @nodts */
 static $clinit() {
  ChainEntry.$clinit = () =>{};
  ChainEntry.$loadModules();
  SimpleEntry.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChainEntry;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
 }
}
$Util.$setClassMetadata(ChainEntry, 'java.util.LinkedHashMap$ChainEntry');

exports = ChainEntry;

//# sourceMappingURL=LinkedHashMap$ChainEntry.js.map

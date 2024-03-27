goog.module('java.util.AbstractMap.SimpleImmutableEntry$impl');

const AbstractEntry = goog.require('java.util.AbstractMap.AbstractEntry$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @template K, V
 * @extends {AbstractEntry<K, V>}
 */
class SimpleImmutableEntry extends AbstractEntry {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'SimpleImmutableEntry(Object, Object)'.
 /** @nodts @template K, V @return {!SimpleImmutableEntry<K, V>} */
 static $create__java_lang_Object__java_lang_Object(/** K */ key, /** V */ value) {
  SimpleImmutableEntry.$clinit();
  let $instance = new SimpleImmutableEntry();
  $instance.$ctor__java_util_AbstractMap_SimpleImmutableEntry__java_lang_Object__java_lang_Object__void(key, value);
  return $instance;
 }
 //Initialization from constructor 'SimpleImmutableEntry(Object, Object)'.
 /** @nodts */
 $ctor__java_util_AbstractMap_SimpleImmutableEntry__java_lang_Object__java_lang_Object__void(/** K */ key, /** V */ value) {
  this.$ctor__java_util_AbstractMap_AbstractEntry__java_lang_Object__java_lang_Object__void(key, value);
 }
 //Factory method corresponding to constructor 'SimpleImmutableEntry(Entry)'.
 /** @nodts @template K, V @return {!SimpleImmutableEntry<K, V>} */
 static $create__java_util_Map_Entry(/** Entry<?, ?> */ entry) {
  SimpleImmutableEntry.$clinit();
  let $instance = new SimpleImmutableEntry();
  $instance.$ctor__java_util_AbstractMap_SimpleImmutableEntry__java_util_Map_Entry__void(entry);
  return $instance;
 }
 //Initialization from constructor 'SimpleImmutableEntry(Entry)'.
 /** @nodts */
 $ctor__java_util_AbstractMap_SimpleImmutableEntry__java_util_Map_Entry__void(/** Entry<?, ?> */ entry) {
  this.$ctor__java_util_AbstractMap_AbstractEntry__java_lang_Object__java_lang_Object__void(entry.m_getKey__java_lang_Object(), entry.m_getValue__java_lang_Object());
 }
 /** @override @nodts @return {V} */
 m_setValue__java_lang_Object__java_lang_Object(/** V */ value) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @nodts */
 static $clinit() {
  SimpleImmutableEntry.$clinit = () =>{};
  SimpleImmutableEntry.$loadModules();
  AbstractEntry.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SimpleImmutableEntry;
 }
 
 /** @nodts */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
$Util.$setClassMetadata(SimpleImmutableEntry, 'java.util.AbstractMap$SimpleImmutableEntry');

exports = SimpleImmutableEntry;

//# sourceMappingURL=AbstractMap$SimpleImmutableEntry.js.map

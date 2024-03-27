goog.module('java.util.AbstractMap.SimpleEntry$impl');

const AbstractEntry = goog.require('java.util.AbstractMap.AbstractEntry$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');

/**
 * @template K, V
 * @extends {AbstractEntry<K, V>}
 */
class SimpleEntry extends AbstractEntry {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'SimpleEntry(Object, Object)'.
 /** @nodts @template K, V @return {!SimpleEntry<K, V>} */
 static $create__java_lang_Object__java_lang_Object(/** K */ key, /** V */ value) {
  SimpleEntry.$clinit();
  let $instance = new SimpleEntry();
  $instance.$ctor__java_util_AbstractMap_SimpleEntry__java_lang_Object__java_lang_Object__void(key, value);
  return $instance;
 }
 //Initialization from constructor 'SimpleEntry(Object, Object)'.
 /** @nodts */
 $ctor__java_util_AbstractMap_SimpleEntry__java_lang_Object__java_lang_Object__void(/** K */ key, /** V */ value) {
  this.$ctor__java_util_AbstractMap_AbstractEntry__java_lang_Object__java_lang_Object__void(key, value);
 }
 //Factory method corresponding to constructor 'SimpleEntry(Entry)'.
 /** @nodts @template K, V @return {!SimpleEntry<K, V>} */
 static $create__java_util_Map_Entry(/** Entry<?, ?> */ entry) {
  SimpleEntry.$clinit();
  let $instance = new SimpleEntry();
  $instance.$ctor__java_util_AbstractMap_SimpleEntry__java_util_Map_Entry__void(entry);
  return $instance;
 }
 //Initialization from constructor 'SimpleEntry(Entry)'.
 /** @nodts */
 $ctor__java_util_AbstractMap_SimpleEntry__java_util_Map_Entry__void(/** Entry<?, ?> */ entry) {
  this.$ctor__java_util_AbstractMap_AbstractEntry__java_lang_Object__java_lang_Object__void(entry.m_getKey__java_lang_Object(), entry.m_getValue__java_lang_Object());
 }
 /** @nodts */
 static $clinit() {
  SimpleEntry.$clinit = () =>{};
  SimpleEntry.$loadModules();
  AbstractEntry.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SimpleEntry;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(SimpleEntry, 'java.util.AbstractMap$SimpleEntry');

exports = SimpleEntry;

//# sourceMappingURL=AbstractMap$SimpleEntry.js.map

goog.module('org.patternfly.core.Tuple$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');

/**
 * @template K, V
 */
class Tuple extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {K} @nodts*/
  this.f_key__org_patternfly_core_Tuple;
  /**@type {V} @nodts*/
  this.f_value__org_patternfly_core_Tuple;
 }
 /** @nodts @template K_1, V_1 @return {Tuple<K_1, V_1>} */
 static m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(/** K_1 */ key, /** V_1 */ value) {
  Tuple.$clinit();
  return /**@type {!Tuple<K_1, V_1>}*/ (Tuple.$create__java_lang_Object__java_lang_Object(key, value));
 }
 /** @nodts @template K, V @return {!Tuple<K, V>} */
 static $create__java_lang_Object__java_lang_Object(/** K */ key, /** V */ value) {
  Tuple.$clinit();
  let $instance = new Tuple();
  $instance.$ctor__org_patternfly_core_Tuple__java_lang_Object__java_lang_Object__void(key, value);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_core_Tuple__java_lang_Object__java_lang_Object__void(/** K */ key, /** V */ value) {
  this.$ctor__java_lang_Object__void();
  this.f_key__org_patternfly_core_Tuple = key;
  this.f_value__org_patternfly_core_Tuple = value;
 }
 /** @override @return {?string} */
 toString() {
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_key__org_patternfly_core_Tuple) + ': ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_value__org_patternfly_core_Tuple);
 }
 /** @nodts */
 static $clinit() {
  Tuple.$clinit = () =>{};
  Tuple.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Tuple;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
}
$Util.$setClassMetadata(Tuple, 'org.patternfly.core.Tuple');

exports = Tuple;

//# sourceMappingURL=Tuple.js.map

goog.module('java.lang.Comparable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('java.lang.Comparable.$LambdaAdaptor$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/**
 * @interface
 * @template T
 */
class Comparable {
 /** @abstract @nodts @return {number} */
 m_compareTo__java_lang_Object__int(/** T */ other) {}
 /** @return {boolean} */
 static $isInstance(/** * */ instance) {
  Comparable.$clinit();
  let type = typeof(instance);
  if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(type, 'boolean') || j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(type, 'number') || j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(type, 'string')) {
   return true;
  }
  return !$Equality.$same(instance, null) && instance.$implements__java_lang_Comparable == true;
 }
 /** @nodts @template T @return {(Comparable<T>|boolean|number|string)} */
 static $adapt(/** ?function(T):number */ fn) {
  Comparable.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  Comparable.$clinit = () =>{};
  Comparable.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_lang_Comparable = true;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.lang.Comparable.$LambdaAdaptor$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
Comparable.$markImplementor(/**@type {Function}*/ (Comparable));
$Util.$setClassMetadataForInterface(Comparable, 'java.lang.Comparable');

exports = Comparable;

//# sourceMappingURL=Comparable.js.map

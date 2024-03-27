goog.module('java.util.Enumeration$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @template E
 */
class Enumeration {
 /** @abstract @nodts @return {boolean} */
 m_hasMoreElements__boolean() {}
 /** @abstract @nodts @return {E} */
 m_nextElement__java_lang_Object() {}
 /** @nodts */
 static $clinit() {
  Enumeration.$clinit = () =>{};
  Enumeration.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_util_Enumeration = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_util_Enumeration;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Enumeration.$markImplementor(/**@type {Function}*/ (Enumeration));
$Util.$setClassMetadataForInterface(Enumeration, 'java.util.Enumeration');

exports = Enumeration;

//# sourceMappingURL=Enumeration.js.map

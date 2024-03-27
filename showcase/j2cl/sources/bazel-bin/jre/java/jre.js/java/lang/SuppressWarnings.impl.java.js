goog.module('java.lang.SuppressWarnings$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class SuppressWarnings {
 /** @abstract @nodts @return {Array<?string>} */
 m_value__arrayOf_java_lang_String() {}
 /** @nodts */
 static $clinit() {
  SuppressWarnings.$clinit = () =>{};
  SuppressWarnings.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__java_lang_SuppressWarnings = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_lang_SuppressWarnings;
 }
 
 /** @nodts */
 static $loadModules() {}
}
SuppressWarnings.$markImplementor(/**@type {Function}*/ (SuppressWarnings));
$Util.$setClassMetadataForInterface(SuppressWarnings, 'java.lang.SuppressWarnings');

exports = SuppressWarnings;

//# sourceMappingURL=SuppressWarnings.js.map

goog.module('java.lang.Override$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Override {
 /** @nodts */
 static $clinit() {
  Override.$clinit = () =>{};
  Override.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__java_lang_Override = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_lang_Override;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Override.$markImplementor(/**@type {Function}*/ (Override));
$Util.$setClassMetadataForInterface(Override, 'java.lang.Override');

exports = Override;

//# sourceMappingURL=Override.js.map

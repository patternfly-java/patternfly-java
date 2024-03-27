goog.module('java.lang.FunctionalInterface$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class FunctionalInterface {
 /** @nodts */
 static $clinit() {
  FunctionalInterface.$clinit = () =>{};
  FunctionalInterface.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__java_lang_FunctionalInterface = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_lang_FunctionalInterface;
 }
 
 /** @nodts */
 static $loadModules() {}
}
FunctionalInterface.$markImplementor(/**@type {Function}*/ (FunctionalInterface));
$Util.$setClassMetadataForInterface(FunctionalInterface, 'java.lang.FunctionalInterface');

exports = FunctionalInterface;

//# sourceMappingURL=FunctionalInterface.js.map

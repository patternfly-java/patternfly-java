goog.module('java.lang.SafeVarargs$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class SafeVarargs {
 /** @nodts */
 static $clinit() {
  SafeVarargs.$clinit = () =>{};
  SafeVarargs.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__java_lang_SafeVarargs = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_lang_SafeVarargs;
 }
 
 /** @nodts */
 static $loadModules() {}
}
SafeVarargs.$markImplementor(/**@type {Function}*/ (SafeVarargs));
$Util.$setClassMetadataForInterface(SafeVarargs, 'java.lang.SafeVarargs');

exports = SafeVarargs;

//# sourceMappingURL=SafeVarargs.js.map

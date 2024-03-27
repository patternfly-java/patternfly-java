goog.module('java.lang.Deprecated$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Deprecated {
 /** @nodts */
 static $clinit() {
  Deprecated.$clinit = () =>{};
  Deprecated.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__java_lang_Deprecated = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_lang_Deprecated;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Deprecated.$markImplementor(/**@type {Function}*/ (Deprecated));
$Util.$setClassMetadataForInterface(Deprecated, 'java.lang.Deprecated');

exports = Deprecated;

//# sourceMappingURL=Deprecated.js.map

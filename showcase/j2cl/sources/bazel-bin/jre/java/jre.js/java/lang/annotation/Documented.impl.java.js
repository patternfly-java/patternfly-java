goog.module('java.lang.annotation.Documented$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Documented {
 /** @nodts */
 static $clinit() {
  Documented.$clinit = () =>{};
  Documented.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__java_lang_annotation_Documented = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_lang_annotation_Documented;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Documented.$markImplementor(/**@type {Function}*/ (Documented));
$Util.$setClassMetadataForInterface(Documented, 'java.lang.annotation.Documented');

exports = Documented;

//# sourceMappingURL=Documented.js.map

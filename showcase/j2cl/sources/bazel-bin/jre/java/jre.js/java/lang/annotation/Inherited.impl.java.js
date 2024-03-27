goog.module('java.lang.annotation.Inherited$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Inherited {
 /** @nodts */
 static $clinit() {
  Inherited.$clinit = () =>{};
  Inherited.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__java_lang_annotation_Inherited = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_lang_annotation_Inherited;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Inherited.$markImplementor(/**@type {Function}*/ (Inherited));
$Util.$setClassMetadataForInterface(Inherited, 'java.lang.annotation.Inherited');

exports = Inherited;

//# sourceMappingURL=Inherited.js.map

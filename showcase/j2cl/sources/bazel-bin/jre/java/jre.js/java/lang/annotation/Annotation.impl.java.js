goog.module('java.lang.annotation.Annotation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('java.lang.annotation.Annotation.$LambdaAdaptor$impl');

/**
 * @interface
 */
class Annotation {
 /** @abstract @nodts @return {Class<?>} */
 m_annotationType__java_lang_Class() {}
 /** @abstract @return {boolean} */
 equals(/** * */ obj) {}
 /** @abstract @return {number} */
 hashCode() {}
 /** @abstract @return {?string} */
 toString() {}
 /** @nodts @return {Annotation} */
 static $adapt(/** ?function():Class<?> */ fn) {
  Annotation.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  Annotation.$clinit = () =>{};
  Annotation.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_lang_annotation_Annotation = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_lang_annotation_Annotation;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('java.lang.annotation.Annotation.$LambdaAdaptor$impl');
 }
}
Annotation.$markImplementor(/**@type {Function}*/ (Annotation));
$Util.$setClassMetadataForInterface(Annotation, 'java.lang.annotation.Annotation');

exports = Annotation;

//# sourceMappingURL=Annotation.js.map

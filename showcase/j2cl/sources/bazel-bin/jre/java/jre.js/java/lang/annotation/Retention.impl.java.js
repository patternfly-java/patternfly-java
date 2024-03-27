goog.module('java.lang.annotation.Retention$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let RetentionPolicy = goog.forwardDeclare('java.lang.annotation.RetentionPolicy$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Retention {
 /** @abstract @nodts @return {RetentionPolicy} */
 m_value__java_lang_annotation_RetentionPolicy() {}
 /** @nodts */
 static $clinit() {
  Retention.$clinit = () =>{};
  Retention.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__java_lang_annotation_Retention = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_lang_annotation_Retention;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Retention.$markImplementor(/**@type {Function}*/ (Retention));
$Util.$setClassMetadataForInterface(Retention, 'java.lang.annotation.Retention');

exports = Retention;

//# sourceMappingURL=Retention.js.map

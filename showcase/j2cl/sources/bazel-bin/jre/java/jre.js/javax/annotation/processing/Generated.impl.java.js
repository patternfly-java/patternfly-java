goog.module('javax.annotation.processing.Generated$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Generated {
 /** @abstract @nodts @return {Array<?string>} */
 m_value__arrayOf_java_lang_String() {}
 /** @abstract @nodts @return {?string} */
 m_comments__java_lang_String() {}
 /** @abstract @nodts @return {?string} */
 m_date__java_lang_String() {}
 /** @nodts */
 static $clinit() {
  Generated.$clinit = () =>{};
  Generated.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__javax_annotation_processing_Generated = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__javax_annotation_processing_Generated;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Generated.$markImplementor(/**@type {Function}*/ (Generated));
$Util.$setClassMetadataForInterface(Generated, 'javax.annotation.processing.Generated');

exports = Generated;

//# sourceMappingURL=Generated.js.map

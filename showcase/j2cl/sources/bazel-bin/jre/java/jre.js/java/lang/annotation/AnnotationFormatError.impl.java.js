goog.module('java.lang.annotation.AnnotationFormatError$impl');

const j_l_Error = goog.require('java.lang.Error$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class AnnotationFormatError extends j_l_Error {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!AnnotationFormatError} */
 static $create__() {
  AnnotationFormatError.$clinit();
  let $instance = new AnnotationFormatError();
  $instance.$ctor__java_lang_annotation_AnnotationFormatError__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_annotation_AnnotationFormatError__void() {
  this.$ctor__java_lang_Error__void();
 }
 /** @nodts */
 static $clinit() {
  AnnotationFormatError.$clinit = () =>{};
  AnnotationFormatError.$loadModules();
  j_l_Error.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnnotationFormatError;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(AnnotationFormatError, 'java.lang.annotation.AnnotationFormatError');

exports = AnnotationFormatError;

//# sourceMappingURL=AnnotationFormatError.js.map

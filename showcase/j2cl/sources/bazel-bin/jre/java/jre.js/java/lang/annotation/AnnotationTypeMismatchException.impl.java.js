goog.module('java.lang.annotation.AnnotationTypeMismatchException$impl');

const RuntimeException = goog.require('java.lang.RuntimeException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class AnnotationTypeMismatchException extends RuntimeException {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!AnnotationTypeMismatchException} */
 static $create__() {
  AnnotationTypeMismatchException.$clinit();
  let $instance = new AnnotationTypeMismatchException();
  $instance.$ctor__java_lang_annotation_AnnotationTypeMismatchException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_annotation_AnnotationTypeMismatchException__void() {
  this.$ctor__java_lang_RuntimeException__void();
 }
 /** @nodts */
 static $clinit() {
  AnnotationTypeMismatchException.$clinit = () =>{};
  AnnotationTypeMismatchException.$loadModules();
  RuntimeException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnnotationTypeMismatchException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(AnnotationTypeMismatchException, 'java.lang.annotation.AnnotationTypeMismatchException');

exports = AnnotationTypeMismatchException;

//# sourceMappingURL=AnnotationTypeMismatchException.js.map

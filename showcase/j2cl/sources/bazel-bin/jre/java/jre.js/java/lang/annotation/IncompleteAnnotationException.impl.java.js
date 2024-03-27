goog.module('java.lang.annotation.IncompleteAnnotationException$impl');

const RuntimeException = goog.require('java.lang.RuntimeException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Annotation = goog.forwardDeclare('java.lang.annotation.Annotation$impl');

class IncompleteAnnotationException extends RuntimeException {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Class<?>} @nodts*/
  this.f_annotationType__java_lang_annotation_IncompleteAnnotationException;
  /**@type {?string} @nodts*/
  this.f_elementName__java_lang_annotation_IncompleteAnnotationException;
 }
 /** @nodts @return {!IncompleteAnnotationException} */
 static $create__java_lang_Class__java_lang_String(/** Class<?> */ annotationType, /** ?string */ elementName) {
  IncompleteAnnotationException.$clinit();
  let $instance = new IncompleteAnnotationException();
  $instance.$ctor__java_lang_annotation_IncompleteAnnotationException__java_lang_Class__java_lang_String__void(annotationType, elementName);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_annotation_IncompleteAnnotationException__java_lang_Class__java_lang_String__void(/** Class<?> */ annotationType, /** ?string */ elementName) {
  this.$ctor__java_lang_RuntimeException__java_lang_String__void('Incomplete annotation: trying to access ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(elementName) + ' on ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(annotationType));
  this.f_annotationType__java_lang_annotation_IncompleteAnnotationException = annotationType;
  this.f_elementName__java_lang_annotation_IncompleteAnnotationException = elementName;
 }
 /** @nodts @return {Class<?>} */
 m_annotationType__java_lang_Class() {
  return this.f_annotationType__java_lang_annotation_IncompleteAnnotationException;
 }
 /** @nodts @return {?string} */
 m_elementName__java_lang_String() {
  return this.f_elementName__java_lang_annotation_IncompleteAnnotationException;
 }
 /** @nodts */
 static $clinit() {
  IncompleteAnnotationException.$clinit = () =>{};
  IncompleteAnnotationException.$loadModules();
  RuntimeException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IncompleteAnnotationException;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
}
$Util.$setClassMetadata(IncompleteAnnotationException, 'java.lang.annotation.IncompleteAnnotationException');

exports = IncompleteAnnotationException;

//# sourceMappingURL=IncompleteAnnotationException.js.map

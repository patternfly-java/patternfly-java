goog.module('java.lang.annotation.Annotation.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {Annotation}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():Class<?> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Class<?>} @nodts*/
  this.f_fn__java_lang_annotation_Annotation_$LambdaAdaptor;
  this.$ctor__java_lang_annotation_Annotation_$LambdaAdaptor__java_lang_annotation_Annotation_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_lang_annotation_Annotation_$LambdaAdaptor__java_lang_annotation_Annotation_$JsFunction__void(/** ?function():Class<?> */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_lang_annotation_Annotation_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {Class<?>} */
 m_annotationType__java_lang_Class() {
  let /** ?function():Class<?> */ $function;
  return ($function = this.f_fn__java_lang_annotation_Annotation_$LambdaAdaptor, $function());
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Annotation.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.lang.annotation.Annotation$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=Annotation$$LambdaAdaptor.js.map

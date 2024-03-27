goog.module('java.lang.annotation.Target$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ElementType = goog.forwardDeclare('java.lang.annotation.ElementType$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Target {
 /** @abstract @nodts @return {Array<ElementType>} */
 m_value__arrayOf_java_lang_annotation_ElementType() {}
 /** @nodts */
 static $clinit() {
  Target.$clinit = () =>{};
  Target.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__java_lang_annotation_Target = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_lang_annotation_Target;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Target.$markImplementor(/**@type {Function}*/ (Target));
$Util.$setClassMetadataForInterface(Target, 'java.lang.annotation.Target');

exports = Target;

//# sourceMappingURL=Target.js.map

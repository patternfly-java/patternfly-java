goog.module('java.lang.annotation.Repeatable$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Repeatable {
 /** @abstract @nodts @return {Class<?>} */
 m_value__java_lang_Class() {}
 /** @nodts */
 static $clinit() {
  Repeatable.$clinit = () =>{};
  Repeatable.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__java_lang_annotation_Repeatable = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_lang_annotation_Repeatable;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Repeatable.$markImplementor(/**@type {Function}*/ (Repeatable));
$Util.$setClassMetadataForInterface(Repeatable, 'java.lang.annotation.Repeatable');

exports = Repeatable;

//# sourceMappingURL=Repeatable.js.map

goog.module('org.treblereel.j2cl.processors.annotations.ES6Module$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class ES6Module {
 /** @abstract @nodts @return {?string} */
 m_value__java_lang_String() {}
 /** @nodts */
 static $clinit() {
  ES6Module.$clinit = () =>{};
  ES6Module.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_treblereel_j2cl_processors_annotations_ES6Module = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_treblereel_j2cl_processors_annotations_ES6Module;
 }
 
 /** @nodts */
 static $loadModules() {}
}
ES6Module.$markImplementor(/**@type {Function}*/ (ES6Module));
$Util.$setClassMetadataForInterface(ES6Module, 'org.treblereel.j2cl.processors.annotations.ES6Module');

exports = ES6Module;

//# sourceMappingURL=ES6Module.js.map

goog.module('java.lang.annotation.Native$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Native {
 /** @nodts */
 static $clinit() {
  Native.$clinit = () =>{};
  Native.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__java_lang_annotation_Native = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_lang_annotation_Native;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Native.$markImplementor(/**@type {Function}*/ (Native));
$Util.$setClassMetadataForInterface(Native, 'java.lang.annotation.Native');

exports = Native;

//# sourceMappingURL=Native.js.map

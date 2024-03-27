goog.module('org.treblereel.j2cl.processors.annotations.TranslationBundle$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class TranslationBundle {
 /** @abstract @nodts @return {?string} */
 m_defaultValue__java_lang_String() {}
 /** @nodts */
 static $clinit() {
  TranslationBundle.$clinit = () =>{};
  TranslationBundle.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_treblereel_j2cl_processors_annotations_TranslationBundle = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_treblereel_j2cl_processors_annotations_TranslationBundle;
 }
 
 /** @nodts */
 static $loadModules() {}
}
TranslationBundle.$markImplementor(/**@type {Function}*/ (TranslationBundle));
$Util.$setClassMetadataForInterface(TranslationBundle, 'org.treblereel.j2cl.processors.annotations.TranslationBundle');

exports = TranslationBundle;

//# sourceMappingURL=TranslationBundle.js.map

goog.module('org.treblereel.j2cl.processors.annotations.TranslationKey$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class TranslationKey {
 /** @abstract @nodts @return {?string} */
 m_key__java_lang_String() {}
 /** @abstract @nodts @return {?string} */
 m_defaultValue__java_lang_String() {}
 /** @abstract @nodts @return {boolean} */
 m_html__boolean() {}
 /** @abstract @nodts @return {boolean} */
 m_unescapeHtmlEntities__boolean() {}
 /** @nodts */
 static $clinit() {
  TranslationKey.$clinit = () =>{};
  TranslationKey.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_treblereel_j2cl_processors_annotations_TranslationKey = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_treblereel_j2cl_processors_annotations_TranslationKey;
 }
 
 /** @nodts */
 static $loadModules() {}
}
TranslationKey.$markImplementor(/**@type {Function}*/ (TranslationKey));
$Util.$setClassMetadataForInterface(TranslationKey, 'org.treblereel.j2cl.processors.annotations.TranslationKey');

exports = TranslationKey;

//# sourceMappingURL=TranslationKey.js.map

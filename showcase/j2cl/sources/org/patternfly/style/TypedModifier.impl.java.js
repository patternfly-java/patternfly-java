goog.module('org.patternfly.style.TypedModifier$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class TypedModifier {
 /** @abstract @nodts @return {?string} */
 m_value__java_lang_String() {}
 /** @abstract @nodts @return {?string} */
 m_modifier__java_lang_String() {}
 /** @nodts */
 static $clinit() {
  TypedModifier.$clinit = () =>{};
  TypedModifier.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_style_TypedModifier = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_TypedModifier;
 }
 
 /** @nodts */
 static $loadModules() {}
}
TypedModifier.$markImplementor(/**@type {Function}*/ (TypedModifier));
$Util.$setClassMetadataForInterface(TypedModifier, 'org.patternfly.style.TypedModifier');

exports = TypedModifier;

//# sourceMappingURL=TypedModifier.js.map

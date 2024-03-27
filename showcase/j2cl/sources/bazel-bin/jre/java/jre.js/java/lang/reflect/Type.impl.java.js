goog.module('java.lang.reflect.Type$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class Type {
 /** @nodts */
 static $clinit() {
  Type.$clinit = () =>{};
  Type.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_lang_reflect_Type = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__java_lang_reflect_Type;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Type.$markImplementor(/**@type {Function}*/ (Type));
$Util.$setClassMetadataForInterface(Type, 'java.lang.reflect.Type');

exports = Type;

//# sourceMappingURL=Type.js.map

goog.module('java.lang.Cloneable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/**
 * @interface
 */
class Cloneable {
 /** @return {boolean} */
 static $isInstance(/** * */ instance) {
  Cloneable.$clinit();
  if ($Equality.$same(instance, null)) {
   return false;
  }
  return instance.$implements__java_lang_Cloneable || Array.isArray(instance);
 }
 /** @nodts */
 static $clinit() {
  Cloneable.$clinit = () =>{};
  Cloneable.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__java_lang_Cloneable = true;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
Cloneable.$markImplementor(/**@type {Function}*/ (Cloneable));
$Util.$setClassMetadataForInterface(Cloneable, 'java.lang.Cloneable');

exports = Cloneable;

//# sourceMappingURL=Cloneable.js.map

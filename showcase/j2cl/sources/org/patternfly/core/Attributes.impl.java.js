goog.module('org.patternfly.core.Attributes$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class Attributes {
 /** @nodts */
 static $clinit() {
  Attributes.$clinit = () =>{};
  Attributes.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_core_Attributes = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_core_Attributes;
 }
 
 /** @nodts */
 static $loadModules() {}
}
/**@const {string} @nodts*/
Attributes.f_hidden__org_patternfly_core_Attributes = 'hidden';
/**@const {string} @nodts*/
Attributes.f_tabindex__org_patternfly_core_Attributes = 'tabindex';
/**@const {string} @nodts*/
Attributes.f_role__org_patternfly_core_Attributes = 'role';
/**@const {string} @nodts*/
Attributes.f_required__org_patternfly_core_Attributes = 'required';
Attributes.$markImplementor(/**@type {Function}*/ (Attributes));
$Util.$setClassMetadataForInterface(Attributes, 'org.patternfly.core.Attributes');

exports = Attributes;

//# sourceMappingURL=Attributes.js.map

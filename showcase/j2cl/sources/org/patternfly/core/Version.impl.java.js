goog.module('org.patternfly.core.Version$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class Version {
 /** @nodts */
 static $clinit() {
  Version.$clinit = () =>{};
  Version.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_core_Version = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_core_Version;
 }
 
 /** @nodts */
 static $loadModules() {}
}
/**@const {string} @nodts*/
Version.f_PATTERN_FLY_MAJOR_VERSION__org_patternfly_core_Version = 'v5';
Version.$markImplementor(/**@type {Function}*/ (Version));
$Util.$setClassMetadataForInterface(Version, 'org.patternfly.core.Version');

exports = Version;

//# sourceMappingURL=Version.js.map

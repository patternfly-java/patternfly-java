goog.module('org.patternfly.icon.IconSpecs$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class IconSpecs {
 /** @nodts */
 static $clinit() {
  IconSpecs.$clinit = () =>{};
  IconSpecs.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_icon_IconSpecs = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_icon_IconSpecs;
 }
 
 /** @nodts */
 static $loadModules() {}
}
IconSpecs.$markImplementor(/**@type {Function}*/ (IconSpecs));
$Util.$setClassMetadataForInterface(IconSpecs, 'org.patternfly.icon.IconSpecs');

exports = IconSpecs;

//# sourceMappingURL=IconSpecs.js.map

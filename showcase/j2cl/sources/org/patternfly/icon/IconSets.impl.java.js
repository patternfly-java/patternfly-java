goog.module('org.patternfly.icon.IconSets$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class IconSets {
 /** @nodts */
 static $clinit() {
  IconSets.$clinit = () =>{};
  IconSets.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_icon_IconSets = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_icon_IconSets;
 }
 
 /** @nodts */
 static $loadModules() {}
}
IconSets.$markImplementor(/**@type {Function}*/ (IconSets));
$Util.$setClassMetadataForInterface(IconSets, 'org.patternfly.icon.IconSets');

exports = IconSets;

//# sourceMappingURL=IconSets.js.map

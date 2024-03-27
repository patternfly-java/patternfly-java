goog.module('org.patternfly.component.navigation.NavigationType$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class NavigationType {
 /** @nodts */
 static $clinit() {
  NavigationType.$clinit = () =>{};
  NavigationType.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_navigation_NavigationType = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_navigation_NavigationType;
 }
 
 /** @nodts */
 static $loadModules() {}
}
NavigationType.$markImplementor(/**@type {Function}*/ (NavigationType));
$Util.$setClassMetadataForInterface(NavigationType, 'org.patternfly.component.navigation.NavigationType');

exports = NavigationType;

//# sourceMappingURL=NavigationType.js.map

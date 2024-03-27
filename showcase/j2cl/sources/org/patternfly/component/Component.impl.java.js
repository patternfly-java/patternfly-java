goog.module('org.patternfly.component.Component$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.component.Component.$LambdaAdaptor$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');

/**
 * @interface
 */
class Component {
 /** @abstract @nodts @return {ComponentType} */
 m_componentType__org_patternfly_component_ComponentType() {}
 /** @nodts @return {Component} */
 static $adapt(/** ?function():ComponentType */ fn) {
  Component.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  Component.$clinit = () =>{};
  Component.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_Component = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_Component;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.component.Component.$LambdaAdaptor$impl');
 }
}
Component.$markImplementor(/**@type {Function}*/ (Component));
$Util.$setClassMetadataForInterface(Component, 'org.patternfly.component.Component');

exports = Component;

//# sourceMappingURL=Component.js.map

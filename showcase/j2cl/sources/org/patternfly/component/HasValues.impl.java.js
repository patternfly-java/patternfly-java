goog.module('org.patternfly.component.HasValues$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Set = goog.forwardDeclare('java.util.Set$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.component.HasValues.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class HasValues {
 /** @abstract @nodts @return {Set<T>} */
 m_values__java_util_Set() {}
 /** @nodts @template T @return {HasValues<T>} */
 static $adapt(/** ?function():Set<T> */ fn) {
  HasValues.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  HasValues.$clinit = () =>{};
  HasValues.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_HasValues = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_HasValues;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.component.HasValues.$LambdaAdaptor$impl');
 }
}
HasValues.$markImplementor(/**@type {Function}*/ (HasValues));
$Util.$setClassMetadataForInterface(HasValues, 'org.patternfly.component.HasValues');

exports = HasValues;

//# sourceMappingURL=HasValues.js.map

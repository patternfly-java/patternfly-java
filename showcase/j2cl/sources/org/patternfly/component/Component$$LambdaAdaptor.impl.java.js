goog.module('org.patternfly.component.Component.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Component = goog.require('org.patternfly.component.Component$impl');

let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');

/**
 * @implements {Component}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():ComponentType */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():ComponentType} @nodts*/
  this.f_fn__org_patternfly_component_Component_$LambdaAdaptor;
  this.$ctor__org_patternfly_component_Component_$LambdaAdaptor__org_patternfly_component_Component_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_component_Component_$LambdaAdaptor__org_patternfly_component_Component_$JsFunction__void(/** ?function():ComponentType */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_component_Component_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {ComponentType} */
 m_componentType__org_patternfly_component_ComponentType() {
  let /** ?function():ComponentType */ $function;
  return ($function = this.f_fn__org_patternfly_component_Component_$LambdaAdaptor, $function());
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Component.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.component.Component$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=Component$$LambdaAdaptor.js.map

goog.module('org.patternfly.component.HasValues.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasValues = goog.require('org.patternfly.component.HasValues$impl');

let Set = goog.forwardDeclare('java.util.Set$impl');

/**
 * @template T
 * @implements {HasValues<T>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():Set<T> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Set<T>} @nodts*/
  this.f_fn__org_patternfly_component_HasValues_$LambdaAdaptor;
  this.$ctor__org_patternfly_component_HasValues_$LambdaAdaptor__org_patternfly_component_HasValues_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_component_HasValues_$LambdaAdaptor__org_patternfly_component_HasValues_$JsFunction__void(/** ?function():Set<T> */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_component_HasValues_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {Set<T>} */
 m_values__java_util_Set() {
  let /** ?function():Set<T> */ $function;
  return ($function = this.f_fn__org_patternfly_component_HasValues_$LambdaAdaptor, $function());
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
HasValues.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.component.HasValues$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=HasValues$$LambdaAdaptor.js.map

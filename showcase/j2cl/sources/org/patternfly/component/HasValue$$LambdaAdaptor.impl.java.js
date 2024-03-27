goog.module('org.patternfly.component.HasValue.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasValue = goog.require('org.patternfly.component.HasValue$impl');

/**
 * @template T
 * @implements {HasValue<T>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():T */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():T} @nodts*/
  this.f_fn__org_patternfly_component_HasValue_$LambdaAdaptor;
  this.$ctor__org_patternfly_component_HasValue_$LambdaAdaptor__org_patternfly_component_HasValue_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_component_HasValue_$LambdaAdaptor__org_patternfly_component_HasValue_$JsFunction__void(/** ?function():T */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_component_HasValue_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {T} */
 m_value__java_lang_Object() {
  let /** ?function():T */ $function;
  return ($function = this.f_fn__org_patternfly_component_HasValue_$LambdaAdaptor, $function());
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
HasValue.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.component.HasValue$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=HasValue$$LambdaAdaptor.js.map

goog.module('org.treblereel.j2cl.processors.common.resources.ResourcePrototype.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ResourcePrototype = goog.require('org.treblereel.j2cl.processors.common.resources.ResourcePrototype$impl');

/**
 * @implements {ResourcePrototype}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():?string */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():?string} @nodts*/
  this.f_fn__org_treblereel_j2cl_processors_common_resources_ResourcePrototype_$LambdaAdaptor;
  this.$ctor__org_treblereel_j2cl_processors_common_resources_ResourcePrototype_$LambdaAdaptor__org_treblereel_j2cl_processors_common_resources_ResourcePrototype_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_treblereel_j2cl_processors_common_resources_ResourcePrototype_$LambdaAdaptor__org_treblereel_j2cl_processors_common_resources_ResourcePrototype_$JsFunction__void(/** ?function():?string */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_treblereel_j2cl_processors_common_resources_ResourcePrototype_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {?string} */
 m_getName__java_lang_String() {
  let /** ?function():?string */ $function;
  return ($function = this.f_fn__org_treblereel_j2cl_processors_common_resources_ResourcePrototype_$LambdaAdaptor, $function());
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
ResourcePrototype.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.treblereel.j2cl.processors.common.resources.ResourcePrototype$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=ResourcePrototype$$LambdaAdaptor.js.map

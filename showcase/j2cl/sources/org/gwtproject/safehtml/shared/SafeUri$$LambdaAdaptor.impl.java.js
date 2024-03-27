goog.module('org.gwtproject.safehtml.shared.SafeUri.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SafeUri = goog.require('org.gwtproject.safehtml.shared.SafeUri$impl');

/**
 * @implements {SafeUri}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():?string */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():?string} @nodts*/
  this.f_fn__org_gwtproject_safehtml_shared_SafeUri_$LambdaAdaptor;
  this.$ctor__org_gwtproject_safehtml_shared_SafeUri_$LambdaAdaptor__org_gwtproject_safehtml_shared_SafeUri_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_gwtproject_safehtml_shared_SafeUri_$LambdaAdaptor__org_gwtproject_safehtml_shared_SafeUri_$JsFunction__void(/** ?function():?string */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_gwtproject_safehtml_shared_SafeUri_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {?string} */
 m_asString__java_lang_String() {
  let /** ?function():?string */ $function;
  return ($function = this.f_fn__org_gwtproject_safehtml_shared_SafeUri_$LambdaAdaptor, $function());
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
SafeUri.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.safehtml.shared.SafeUri$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=SafeUri$$LambdaAdaptor.js.map

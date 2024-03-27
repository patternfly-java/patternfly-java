goog.module('org.gwtproject.safehtml.shared.SafeHtml.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtml = goog.require('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @implements {SafeHtml}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():?string */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():?string} @nodts*/
  this.f_fn__org_gwtproject_safehtml_shared_SafeHtml_$LambdaAdaptor;
  this.$ctor__org_gwtproject_safehtml_shared_SafeHtml_$LambdaAdaptor__org_gwtproject_safehtml_shared_SafeHtml_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_gwtproject_safehtml_shared_SafeHtml_$LambdaAdaptor__org_gwtproject_safehtml_shared_SafeHtml_$JsFunction__void(/** ?function():?string */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_gwtproject_safehtml_shared_SafeHtml_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {?string} */
 m_asString__java_lang_String() {
  let /** ?function():?string */ $function;
  return ($function = this.f_fn__org_gwtproject_safehtml_shared_SafeHtml_$LambdaAdaptor, $function());
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
SafeHtml.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.safehtml.shared.SafeHtml$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=SafeHtml$$LambdaAdaptor.js.map

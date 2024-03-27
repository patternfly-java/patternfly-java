goog.module('org.gwtproject.safehtml.shared.HtmlSanitizer.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlSanitizer = goog.require('org.gwtproject.safehtml.shared.HtmlSanitizer$impl');

let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @implements {HtmlSanitizer}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(?string):SafeHtml */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(?string):SafeHtml} @nodts*/
  this.f_fn__org_gwtproject_safehtml_shared_HtmlSanitizer_$LambdaAdaptor;
  this.$ctor__org_gwtproject_safehtml_shared_HtmlSanitizer_$LambdaAdaptor__org_gwtproject_safehtml_shared_HtmlSanitizer_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_gwtproject_safehtml_shared_HtmlSanitizer_$LambdaAdaptor__org_gwtproject_safehtml_shared_HtmlSanitizer_$JsFunction__void(/** ?function(?string):SafeHtml */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_gwtproject_safehtml_shared_HtmlSanitizer_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {SafeHtml} */
 m_sanitize__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(/** ?string */ arg0) {
  let /** ?function(?string):SafeHtml */ $function;
  return ($function = this.f_fn__org_gwtproject_safehtml_shared_HtmlSanitizer_$LambdaAdaptor, $function(arg0));
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
HtmlSanitizer.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.safehtml.shared.HtmlSanitizer$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=HtmlSanitizer$$LambdaAdaptor.js.map

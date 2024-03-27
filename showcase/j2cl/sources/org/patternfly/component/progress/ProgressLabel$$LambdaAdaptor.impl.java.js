goog.module('org.patternfly.component.progress.ProgressLabel.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ProgressLabel = goog.require('org.patternfly.component.progress.ProgressLabel$impl');

/**
 * @implements {ProgressLabel}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(number, number, number, number):?string */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(number, number, number, number):?string} @nodts*/
  this.f_fn__org_patternfly_component_progress_ProgressLabel_$LambdaAdaptor;
  this.$ctor__org_patternfly_component_progress_ProgressLabel_$LambdaAdaptor__org_patternfly_component_progress_ProgressLabel_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_component_progress_ProgressLabel_$LambdaAdaptor__org_patternfly_component_progress_ProgressLabel_$JsFunction__void(/** ?function(number, number, number, number):?string */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_component_progress_ProgressLabel_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {?string} */
 m_label__int__int__int__int__java_lang_String(/** number */ arg0, /** number */ arg1, /** number */ arg2, /** number */ arg3) {
  let /** ?function(number, number, number, number):?string */ $function;
  return ($function = this.f_fn__org_patternfly_component_progress_ProgressLabel_$LambdaAdaptor, $function(arg0, arg1, arg2, arg3));
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
ProgressLabel.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.component.progress.ProgressLabel$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=ProgressLabel$$LambdaAdaptor.js.map

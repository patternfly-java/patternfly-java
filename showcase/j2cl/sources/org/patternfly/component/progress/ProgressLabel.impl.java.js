goog.module('org.patternfly.component.progress.ProgressLabel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.component.progress.ProgressLabel.$LambdaAdaptor$impl');

/**
 * @interface
 */
class ProgressLabel {
 /** @abstract @nodts @return {?string} */
 m_label__int__int__int__int__java_lang_String(/** number */ min, /** number */ max, /** number */ step, /** number */ value) {}
 /** @nodts @return {ProgressLabel} */
 static $adapt(/** ?function(number, number, number, number):?string */ fn) {
  ProgressLabel.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  ProgressLabel.$clinit = () =>{};
  ProgressLabel.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_progress_ProgressLabel = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_progress_ProgressLabel;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.component.progress.ProgressLabel.$LambdaAdaptor$impl');
 }
}
ProgressLabel.$markImplementor(/**@type {Function}*/ (ProgressLabel));
$Util.$setClassMetadataForInterface(ProgressLabel, 'org.patternfly.component.progress.ProgressLabel');

exports = ProgressLabel;

//# sourceMappingURL=ProgressLabel.js.map

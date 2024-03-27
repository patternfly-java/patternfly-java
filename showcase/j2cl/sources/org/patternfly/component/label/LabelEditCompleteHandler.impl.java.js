goog.module('org.patternfly.component.label.LabelEditCompleteHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Label = goog.forwardDeclare('org.patternfly.component.label.Label$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.component.label.LabelEditCompleteHandler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class LabelEditCompleteHandler {
 /** @abstract @nodts */
 m_complete__elemental2_dom_Event__org_patternfly_component_label_Label__java_lang_String__void(/** Event */ event, /** Label */ label, /** ?string */ newText) {}
 /** @nodts @return {LabelEditCompleteHandler} */
 static $adapt(/** ?function(Event, Label, ?string):void */ fn) {
  LabelEditCompleteHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  LabelEditCompleteHandler.$clinit = () =>{};
  LabelEditCompleteHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_label_LabelEditCompleteHandler = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_label_LabelEditCompleteHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.component.label.LabelEditCompleteHandler.$LambdaAdaptor$impl');
 }
}
LabelEditCompleteHandler.$markImplementor(/**@type {Function}*/ (LabelEditCompleteHandler));
$Util.$setClassMetadataForInterface(LabelEditCompleteHandler, 'org.patternfly.component.label.LabelEditCompleteHandler');

exports = LabelEditCompleteHandler;

//# sourceMappingURL=LabelEditCompleteHandler.js.map

goog.module('org.patternfly.component.label.LabelEditCancelHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Label = goog.forwardDeclare('org.patternfly.component.label.Label$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.component.label.LabelEditCancelHandler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class LabelEditCancelHandler {
 /** @abstract @nodts */
 m_cancel__elemental2_dom_Event__org_patternfly_component_label_Label__java_lang_String__void(/** Event */ event, /** Label */ label, /** ?string */ previousText) {}
 /** @nodts @return {LabelEditCancelHandler} */
 static $adapt(/** ?function(Event, Label, ?string):void */ fn) {
  LabelEditCancelHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  LabelEditCancelHandler.$clinit = () =>{};
  LabelEditCancelHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_component_label_LabelEditCancelHandler = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_label_LabelEditCancelHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.component.label.LabelEditCancelHandler.$LambdaAdaptor$impl');
 }
}
LabelEditCancelHandler.$markImplementor(/**@type {Function}*/ (LabelEditCancelHandler));
$Util.$setClassMetadataForInterface(LabelEditCancelHandler, 'org.patternfly.component.label.LabelEditCancelHandler');

exports = LabelEditCancelHandler;

//# sourceMappingURL=LabelEditCancelHandler.js.map

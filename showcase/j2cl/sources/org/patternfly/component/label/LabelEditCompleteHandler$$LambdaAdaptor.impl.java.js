goog.module('org.patternfly.component.label.LabelEditCompleteHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LabelEditCompleteHandler = goog.require('org.patternfly.component.label.LabelEditCompleteHandler$impl');

let Label = goog.forwardDeclare('org.patternfly.component.label.Label$impl');

/**
 * @implements {LabelEditCompleteHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(Event, Label, ?string):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Event, Label, ?string):void} @nodts*/
  this.f_fn__org_patternfly_component_label_LabelEditCompleteHandler_$LambdaAdaptor;
  this.$ctor__org_patternfly_component_label_LabelEditCompleteHandler_$LambdaAdaptor__org_patternfly_component_label_LabelEditCompleteHandler_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_component_label_LabelEditCompleteHandler_$LambdaAdaptor__org_patternfly_component_label_LabelEditCompleteHandler_$JsFunction__void(/** ?function(Event, Label, ?string):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_component_label_LabelEditCompleteHandler_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_complete__elemental2_dom_Event__org_patternfly_component_label_Label__java_lang_String__void(/** Event */ arg0, /** Label */ arg1, /** ?string */ arg2) {
  {
   let $function = this.f_fn__org_patternfly_component_label_LabelEditCompleteHandler_$LambdaAdaptor;
   $function(arg0, arg1, arg2);
  }
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
LabelEditCompleteHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.component.label.LabelEditCompleteHandler$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=LabelEditCompleteHandler$$LambdaAdaptor.js.map

goog.module('org.patternfly.handler.ToggleHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ToggleHandler = goog.require('org.patternfly.handler.ToggleHandler$impl');

/**
 * @template C
 * @implements {ToggleHandler<C>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(Event, C, boolean):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Event, C, boolean):void} @nodts*/
  this.f_fn__org_patternfly_handler_ToggleHandler_$LambdaAdaptor;
  this.$ctor__org_patternfly_handler_ToggleHandler_$LambdaAdaptor__org_patternfly_handler_ToggleHandler_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_handler_ToggleHandler_$LambdaAdaptor__org_patternfly_handler_ToggleHandler_$JsFunction__void(/** ?function(Event, C, boolean):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_handler_ToggleHandler_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(/** Event */ arg0, /** C */ arg1, /** boolean */ arg2) {
  {
   let $function = this.f_fn__org_patternfly_handler_ToggleHandler_$LambdaAdaptor;
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
ToggleHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.handler.ToggleHandler$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=ToggleHandler$$LambdaAdaptor.js.map

goog.module('org.patternfly.handler.ChangeHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ChangeHandler = goog.require('org.patternfly.handler.ChangeHandler$impl');

/**
 * @template C, T
 * @implements {ChangeHandler<C, T>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(Event, C, T):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Event, C, T):void} @nodts*/
  this.f_fn__org_patternfly_handler_ChangeHandler_$LambdaAdaptor;
  this.$ctor__org_patternfly_handler_ChangeHandler_$LambdaAdaptor__org_patternfly_handler_ChangeHandler_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_handler_ChangeHandler_$LambdaAdaptor__org_patternfly_handler_ChangeHandler_$JsFunction__void(/** ?function(Event, C, T):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_handler_ChangeHandler_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(/** Event */ arg0, /** C */ arg1, /** T */ arg2) {
  {
   let $function = this.f_fn__org_patternfly_handler_ChangeHandler_$LambdaAdaptor;
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
ChangeHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.handler.ChangeHandler$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=ChangeHandler$$LambdaAdaptor.js.map

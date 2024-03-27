goog.module('org.patternfly.handler.SelectHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SelectHandler = goog.require('org.patternfly.handler.SelectHandler$impl');

/**
 * @template C
 * @implements {SelectHandler<C>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(Event, C, boolean):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Event, C, boolean):void} @nodts*/
  this.f_fn__org_patternfly_handler_SelectHandler_$LambdaAdaptor;
  this.$ctor__org_patternfly_handler_SelectHandler_$LambdaAdaptor__org_patternfly_handler_SelectHandler_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_handler_SelectHandler_$LambdaAdaptor__org_patternfly_handler_SelectHandler_$JsFunction__void(/** ?function(Event, C, boolean):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_handler_SelectHandler_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_onSelect__elemental2_dom_Event__java_lang_Object__boolean__void(/** Event */ arg0, /** C */ arg1, /** boolean */ arg2) {
  {
   let $function = this.f_fn__org_patternfly_handler_SelectHandler_$LambdaAdaptor;
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
SelectHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.handler.SelectHandler$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=SelectHandler$$LambdaAdaptor.js.map

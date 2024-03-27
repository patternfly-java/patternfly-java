goog.module('org.patternfly.handler.MultiSelectHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const MultiSelectHandler = goog.require('org.patternfly.handler.MultiSelectHandler$impl');

let List = goog.forwardDeclare('java.util.List$impl');

/**
 * @template C, T
 * @implements {MultiSelectHandler<C, T>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(Event, C, List<T>):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Event, C, List<T>):void} @nodts*/
  this.f_fn__org_patternfly_handler_MultiSelectHandler_$LambdaAdaptor;
  this.$ctor__org_patternfly_handler_MultiSelectHandler_$LambdaAdaptor__org_patternfly_handler_MultiSelectHandler_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_handler_MultiSelectHandler_$LambdaAdaptor__org_patternfly_handler_MultiSelectHandler_$JsFunction__void(/** ?function(Event, C, List<T>):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_handler_MultiSelectHandler_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_onSelect__elemental2_dom_Event__java_lang_Object__java_util_List__void(/** Event */ arg0, /** C */ arg1, /** List<T> */ arg2) {
  {
   let $function = this.f_fn__org_patternfly_handler_MultiSelectHandler_$LambdaAdaptor;
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
MultiSelectHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.handler.MultiSelectHandler$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=MultiSelectHandler$$LambdaAdaptor.js.map

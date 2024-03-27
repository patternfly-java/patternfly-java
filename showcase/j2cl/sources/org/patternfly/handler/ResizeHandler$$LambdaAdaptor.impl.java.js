goog.module('org.patternfly.handler.ResizeHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ResizeHandler = goog.require('org.patternfly.handler.ResizeHandler$impl');

/**
 * @template C
 * @implements {ResizeHandler<C>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(C):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(C):void} @nodts*/
  this.f_fn__org_patternfly_handler_ResizeHandler_$LambdaAdaptor;
  this.$ctor__org_patternfly_handler_ResizeHandler_$LambdaAdaptor__org_patternfly_handler_ResizeHandler_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_handler_ResizeHandler_$LambdaAdaptor__org_patternfly_handler_ResizeHandler_$JsFunction__void(/** ?function(C):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_handler_ResizeHandler_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_onResize__java_lang_Object__void(/** C */ arg0) {
  {
   let $function = this.f_fn__org_patternfly_handler_ResizeHandler_$LambdaAdaptor;
   $function(arg0);
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
ResizeHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.handler.ResizeHandler$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=ResizeHandler$$LambdaAdaptor.js.map

goog.module('elemental2.dom.EventListener.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @implements {EventListener}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(Event):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Event):void} @nodts*/
  this.f_fn__elemental2_dom_EventListener_$LambdaAdaptor;
  this.$ctor__elemental2_dom_EventListener_$LambdaAdaptor__elemental2_dom_EventListener_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__elemental2_dom_EventListener_$LambdaAdaptor__elemental2_dom_EventListener_$JsFunction__void(/** ?function(Event):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__elemental2_dom_EventListener_$LambdaAdaptor = fn;
 }
 /** @override */
 handleEvent(/** Event */ arg0) {
  {
   let $function = this.f_fn__elemental2_dom_EventListener_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'elemental2.dom.EventListener$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=EventListener$$LambdaAdaptor.js.map

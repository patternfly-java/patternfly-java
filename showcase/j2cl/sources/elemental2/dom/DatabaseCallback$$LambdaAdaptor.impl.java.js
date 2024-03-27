goog.module('elemental2.dom.DatabaseCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @implements {DatabaseCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(Database):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Database):void} @nodts*/
  this.f_fn__elemental2_dom_DatabaseCallback_$LambdaAdaptor;
  this.$ctor__elemental2_dom_DatabaseCallback_$LambdaAdaptor__elemental2_dom_DatabaseCallback_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__elemental2_dom_DatabaseCallback_$LambdaAdaptor__elemental2_dom_DatabaseCallback_$JsFunction__void(/** ?function(Database):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__elemental2_dom_DatabaseCallback_$LambdaAdaptor = fn;
 }
 /** @override */
 handleEvent(/** Database */ arg0) {
  {
   let $function = this.f_fn__elemental2_dom_DatabaseCallback_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'elemental2.dom.DatabaseCallback$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=DatabaseCallback$$LambdaAdaptor.js.map

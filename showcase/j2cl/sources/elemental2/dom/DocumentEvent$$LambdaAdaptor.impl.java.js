goog.module('elemental2.dom.DocumentEvent.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @implements {DocumentEvent}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(?string):Event */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(?string):Event} @nodts*/
  this.f_fn__elemental2_dom_DocumentEvent_$LambdaAdaptor;
  this.$ctor__elemental2_dom_DocumentEvent_$LambdaAdaptor__elemental2_dom_DocumentEvent_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__elemental2_dom_DocumentEvent_$LambdaAdaptor__elemental2_dom_DocumentEvent_$JsFunction__void(/** ?function(?string):Event */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__elemental2_dom_DocumentEvent_$LambdaAdaptor = fn;
 }
 /** @override @return {Event} */
 createEvent(/** ?string */ arg0) {
  let /** ?function(?string):Event */ $function;
  return ($function = this.f_fn__elemental2_dom_DocumentEvent_$LambdaAdaptor, $function(arg0));
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
$Util.$setClassMetadata($LambdaAdaptor, 'elemental2.dom.DocumentEvent$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=DocumentEvent$$LambdaAdaptor.js.map

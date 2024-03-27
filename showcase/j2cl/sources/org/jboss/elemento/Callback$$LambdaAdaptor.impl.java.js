goog.module('org.jboss.elemento.Callback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Callback = goog.require('org.jboss.elemento.Callback$impl');

/**
 * @implements {Callback}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():void} @nodts*/
  this.f_fn__org_jboss_elemento_Callback_$LambdaAdaptor;
  this.$ctor__org_jboss_elemento_Callback_$LambdaAdaptor__org_jboss_elemento_Callback_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_jboss_elemento_Callback_$LambdaAdaptor__org_jboss_elemento_Callback_$JsFunction__void(/** ?function():void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_jboss_elemento_Callback_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_call__void() {
  {
   let $function = this.f_fn__org_jboss_elemento_Callback_$LambdaAdaptor;
   $function();
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
Callback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.jboss.elemento.Callback$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=Callback$$LambdaAdaptor.js.map

goog.module('org.jboss.elemento.Callback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.jboss.elemento.Callback.$LambdaAdaptor$impl');

/**
 * @interface
 */
class Callback {
 /** @nodts @return {Callback} */
 static m_noop__org_jboss_elemento_Callback() {
  Callback.$clinit();
  return Callback.$adapt(() =>{});
 }
 /** @abstract @nodts */
 m_call__void() {}
 /** @nodts @return {Callback} */
 static $adapt(/** ?function():void */ fn) {
  Callback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @nodts */
 static $clinit() {
  Callback.$clinit = () =>{};
  Callback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_jboss_elemento_Callback = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_Callback;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.jboss.elemento.Callback.$LambdaAdaptor$impl');
 }
}
Callback.$markImplementor(/**@type {Function}*/ (Callback));
$Util.$setClassMetadataForInterface(Callback, 'org.jboss.elemento.Callback');

exports = Callback;

//# sourceMappingURL=Callback.js.map

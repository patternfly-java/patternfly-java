goog.module('org.patternfly.core.ObservableValue.Subscriber$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.core.ObservableValue.Subscriber.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class Subscriber {
 /** @abstract @nodts */
 m_changed__java_lang_Object__java_lang_Object__void(/** T */ current, /** T */ previous) {}
 /** @nodts @template T @return {Subscriber<T>} */
 static $adapt(/** ?function(T, T):void */ fn) {
  Subscriber.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  Subscriber.$clinit = () =>{};
  Subscriber.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_core_ObservableValue_Subscriber = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_core_ObservableValue_Subscriber;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.patternfly.core.ObservableValue.Subscriber.$LambdaAdaptor$impl');
 }
}
Subscriber.$markImplementor(/**@type {Function}*/ (Subscriber));
$Util.$setClassMetadataForInterface(Subscriber, 'org.patternfly.core.ObservableValue$Subscriber');

exports = Subscriber;

//# sourceMappingURL=ObservableValue$Subscriber.js.map

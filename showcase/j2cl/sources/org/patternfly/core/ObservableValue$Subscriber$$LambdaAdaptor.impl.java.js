goog.module('org.patternfly.core.ObservableValue.Subscriber.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Subscriber = goog.require('org.patternfly.core.ObservableValue.Subscriber$impl');

/**
 * @template T
 * @implements {Subscriber<T>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(T, T):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(T, T):void} @nodts*/
  this.f_fn__org_patternfly_core_ObservableValue_Subscriber_$LambdaAdaptor;
  this.$ctor__org_patternfly_core_ObservableValue_Subscriber_$LambdaAdaptor__org_patternfly_core_ObservableValue_Subscriber_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_core_ObservableValue_Subscriber_$LambdaAdaptor__org_patternfly_core_ObservableValue_Subscriber_$JsFunction__void(/** ?function(T, T):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_core_ObservableValue_Subscriber_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_changed__java_lang_Object__java_lang_Object__void(/** T */ arg0, /** T */ arg1) {
  {
   let $function = this.f_fn__org_patternfly_core_ObservableValue_Subscriber_$LambdaAdaptor;
   $function(arg0, arg1);
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
Subscriber.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.core.ObservableValue$Subscriber$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=ObservableValue$Subscriber$$LambdaAdaptor.js.map

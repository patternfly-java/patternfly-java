goog.module('java.lang.Comparable.$LambdaAdaptor$impl');

const Comparable = goog.require('java.lang.Comparable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @template T
 * @implements {Comparable<T>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(T):number */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(T):number} @nodts*/
  this.f_fn__java_lang_Comparable_$LambdaAdaptor;
  this.$ctor__java_lang_Comparable_$LambdaAdaptor__java_lang_Comparable_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__java_lang_Comparable_$LambdaAdaptor__java_lang_Comparable_$JsFunction__void(/** ?function(T):number */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__java_lang_Comparable_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {number} */
 m_compareTo__java_lang_Object__int(/** T */ arg0) {
  let /** ?function(T):number */ $function;
  return ($function = this.f_fn__java_lang_Comparable_$LambdaAdaptor, $function(arg0));
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
Comparable.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'java.lang.Comparable$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=Comparable$$LambdaAdaptor.js.map

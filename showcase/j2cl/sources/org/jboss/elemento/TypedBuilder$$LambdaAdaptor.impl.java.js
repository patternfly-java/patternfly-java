goog.module('org.jboss.elemento.TypedBuilder.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

/**
 * @template T, B
 * @implements {TypedBuilder<T, B>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():B */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():B} @nodts*/
  this.f_fn__org_jboss_elemento_TypedBuilder_$LambdaAdaptor;
  this.$ctor__org_jboss_elemento_TypedBuilder_$LambdaAdaptor__org_jboss_elemento_TypedBuilder_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_jboss_elemento_TypedBuilder_$LambdaAdaptor__org_jboss_elemento_TypedBuilder_$JsFunction__void(/** ?function():B */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_jboss_elemento_TypedBuilder_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {B} */
 m_that__org_jboss_elemento_TypedBuilder() {
  let /** ?function():B */ $function;
  return ($function = this.f_fn__org_jboss_elemento_TypedBuilder_$LambdaAdaptor, $function());
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
TypedBuilder.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.jboss.elemento.TypedBuilder$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=TypedBuilder$$LambdaAdaptor.js.map

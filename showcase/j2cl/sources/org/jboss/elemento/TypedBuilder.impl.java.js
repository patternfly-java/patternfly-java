goog.module('org.jboss.elemento.TypedBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.jboss.elemento.TypedBuilder.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T, B
 */
class TypedBuilder {
 /** @abstract @nodts @return {B} */
 m_that__org_jboss_elemento_TypedBuilder() {}
 /** @nodts @template T, B @return {TypedBuilder<T, B>} */
 static $adapt(/** ?function():B */ fn) {
  TypedBuilder.$clinit();
  return /**@type {!$LambdaAdaptor<T, B>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  TypedBuilder.$clinit = () =>{};
  TypedBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_jboss_elemento_TypedBuilder = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_TypedBuilder;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.jboss.elemento.TypedBuilder.$LambdaAdaptor$impl');
 }
}
TypedBuilder.$markImplementor(/**@type {Function}*/ (TypedBuilder));
$Util.$setClassMetadataForInterface(TypedBuilder, 'org.jboss.elemento.TypedBuilder');

exports = TypedBuilder;

//# sourceMappingURL=TypedBuilder.js.map

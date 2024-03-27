goog.module('org.jboss.elemento.IsElement.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');

/**
 * @template E
 * @implements {IsElement<E>}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function():E */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():E} @nodts*/
  this.f_fn__org_jboss_elemento_IsElement_$LambdaAdaptor;
  this.$ctor__org_jboss_elemento_IsElement_$LambdaAdaptor__org_jboss_elemento_IsElement_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_jboss_elemento_IsElement_$LambdaAdaptor__org_jboss_elemento_IsElement_$JsFunction__void(/** ?function():E */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_jboss_elemento_IsElement_$LambdaAdaptor = fn;
 }
 /** @override @nodts @return {E} */
 m_element__elemental2_dom_Element() {
  let /** ?function():E */ $function;
  return ($function = this.f_fn__org_jboss_elemento_IsElement_$LambdaAdaptor, $function());
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
IsElement.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.jboss.elemento.IsElement$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=IsElement$$LambdaAdaptor.js.map

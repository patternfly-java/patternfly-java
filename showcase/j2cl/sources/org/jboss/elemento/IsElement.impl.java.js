goog.module('org.jboss.elemento.IsElement$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.jboss.elemento.IsElement.$LambdaAdaptor$impl');

/**
 * @interface
 * @template E
 */
class IsElement {
 /** @abstract @nodts @return {E} */
 m_element__elemental2_dom_Element() {}
 /** @nodts @template E @return {IsElement<E>} */
 static $adapt(/** ?function():E */ fn) {
  IsElement.$clinit();
  return /**@type {!$LambdaAdaptor<E>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts */
 static $clinit() {
  IsElement.$clinit = () =>{};
  IsElement.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_jboss_elemento_IsElement = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_IsElement;
 }
 
 /** @nodts */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.jboss.elemento.IsElement.$LambdaAdaptor$impl');
 }
}
IsElement.$markImplementor(/**@type {Function}*/ (IsElement));
$Util.$setClassMetadataForInterface(IsElement, 'org.jboss.elemento.IsElement');

exports = IsElement;

//# sourceMappingURL=IsElement.js.map

goog.module('org.patternfly.component.WithObservableValue$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let ObservableValue = goog.forwardDeclare('org.patternfly.core.ObservableValue$impl');

/**
 * @interface
 * @template E, B, T
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class WithObservableValue {
 /** @abstract @nodts @return {B} */
 m_bind__org_patternfly_core_ObservableValue__org_jboss_elemento_TypedBuilder(/** ObservableValue<T> */ ov) {}
 /** @nodts */
 static $clinit() {
  WithObservableValue.$clinit = () =>{};
  WithObservableValue.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_component_WithObservableValue = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_WithObservableValue;
 }
 
 /** @nodts */
 static $loadModules() {}
}
WithObservableValue.$markImplementor(/**@type {Function}*/ (WithObservableValue));
$Util.$setClassMetadataForInterface(WithObservableValue, 'org.patternfly.component.WithObservableValue');

exports = WithObservableValue;

//# sourceMappingURL=WithObservableValue.js.map

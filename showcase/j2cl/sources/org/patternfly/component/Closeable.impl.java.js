goog.module('org.patternfly.component.Closeable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let CloseHandler = goog.forwardDeclare('org.patternfly.handler.CloseHandler$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 */
class Closeable {
 /** @abstract @nodts @return {B} */
 m_onClose__org_patternfly_handler_CloseHandler__org_jboss_elemento_TypedBuilder(/** CloseHandler<B> */ closeHandler) {}
 /** @abstract @nodts */
 m_close__void() {}
 /** @abstract @nodts */
 m_close__elemental2_dom_Event__void(/** Event */ event) {}
 /** @abstract @nodts */
 m_close__elemental2_dom_Event__boolean__void(/** Event */ event, /** boolean */ fireEvent) {}
 /** @nodts @template E, B */
 static m_close__$default__org_patternfly_component_Closeable__void(/** !Closeable<E, B> */ $thisArg) {
  Closeable.$clinit();
  $thisArg.m_close__elemental2_dom_Event__boolean__void(new Event(''), true);
 }
 /** @nodts @template E, B */
 static m_close__$default__org_patternfly_component_Closeable__elemental2_dom_Event__void(/** !Closeable<E, B> */ $thisArg, /** Event */ event) {
  Closeable.$clinit();
  $thisArg.m_close__elemental2_dom_Event__boolean__void(event, true);
 }
 /** @nodts */
 static $clinit() {
  Closeable.$clinit = () =>{};
  Closeable.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_component_Closeable = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_Closeable;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Closeable.$markImplementor(/**@type {Function}*/ (Closeable));
$Util.$setClassMetadataForInterface(Closeable, 'org.patternfly.component.Closeable');

exports = Closeable;

//# sourceMappingURL=Closeable.js.map

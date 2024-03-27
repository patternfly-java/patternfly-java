goog.module('org.gwtproject.event.shared.HandlerRegistrations.HandlerRegistrationCollection$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HandlerRegistration = goog.require('org.gwtproject.event.shared.HandlerRegistration$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/**
 * @implements {HandlerRegistration}
 */
class HandlerRegistrationCollection extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Array<HandlerRegistration>} @nodts*/
  this.f_handlers__org_gwtproject_event_shared_HandlerRegistrations_HandlerRegistrationCollection_;
 }
 /** @nodts @return {!HandlerRegistrationCollection} */
 static $create__arrayOf_org_gwtproject_event_shared_HandlerRegistration(/** Array<HandlerRegistration> */ handlers) {
  HandlerRegistrationCollection.$clinit();
  let $instance = new HandlerRegistrationCollection();
  $instance.$ctor__org_gwtproject_event_shared_HandlerRegistrations_HandlerRegistrationCollection__arrayOf_org_gwtproject_event_shared_HandlerRegistration__void(handlers);
  return $instance;
 }
 /** @nodts */
 $ctor__org_gwtproject_event_shared_HandlerRegistrations_HandlerRegistrationCollection__arrayOf_org_gwtproject_event_shared_HandlerRegistration__void(/** Array<HandlerRegistration> */ handlers) {
  this.$ctor__java_lang_Object__void();
  this.f_handlers__org_gwtproject_event_shared_HandlerRegistrations_HandlerRegistrationCollection_ = handlers;
 }
 /** @override @nodts */
 m_removeHandler__void() {
  if ($Equality.$same(this.f_handlers__org_gwtproject_event_shared_HandlerRegistrations_HandlerRegistrationCollection_, null)) {
   return;
  }
  for (let $array = this.f_handlers__org_gwtproject_event_shared_HandlerRegistrations_HandlerRegistrationCollection_, $index = 0; $index < $array.length; $index++) {
   let hr = $array[$index];
   {
    hr.m_removeHandler__void();
   }
  }
  this.f_handlers__org_gwtproject_event_shared_HandlerRegistrations_HandlerRegistrationCollection_ = null;
 }
 /** @nodts */
 static $clinit() {
  HandlerRegistrationCollection.$clinit = () =>{};
  HandlerRegistrationCollection.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HandlerRegistrationCollection;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
HandlerRegistration.$markImplementor(HandlerRegistrationCollection);
$Util.$setClassMetadata(HandlerRegistrationCollection, 'org.gwtproject.event.shared.HandlerRegistrations$HandlerRegistrationCollection');

exports = HandlerRegistrationCollection;

//# sourceMappingURL=HandlerRegistrations$HandlerRegistrationCollection.js.map

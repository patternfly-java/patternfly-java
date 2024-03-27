goog.module('org.treblereel.j2cl.processors.common.resources.ClientBundle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class ClientBundle {
 /** @nodts */
 static $clinit() {
  ClientBundle.$clinit = () =>{};
  ClientBundle.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_treblereel_j2cl_processors_common_resources_ClientBundle = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_treblereel_j2cl_processors_common_resources_ClientBundle;
 }
 
 /** @nodts */
 static $loadModules() {}
}
ClientBundle.$markImplementor(/**@type {Function}*/ (ClientBundle));
$Util.$setClassMetadataForInterface(ClientBundle, 'org.treblereel.j2cl.processors.common.resources.ClientBundle');

exports = ClientBundle;

//# sourceMappingURL=ClientBundle.js.map

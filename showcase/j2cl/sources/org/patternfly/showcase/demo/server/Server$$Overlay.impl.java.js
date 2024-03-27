goog.module('org.patternfly.showcase.demo.server.Server.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let Status = goog.forwardDeclare('org.patternfly.showcase.demo.server.Server.Status$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @return {Status} */
 static m_status__$devirt__org_patternfly_showcase_demo_server_Server__org_patternfly_showcase_demo_server_Server_Status(/** !Object */ $thisArg) {
  $Overlay.$clinit();
  try {
   return Status.m_valueOf__java_lang_String__org_patternfly_showcase_demo_server_Server_Status($thisArg.status);
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (IllegalArgumentException.$isInstance(__$exc)) {
    let ignore = /**@type {IllegalArgumentException}*/ (__$exc);
    return Status.f_UNKNOWN__org_patternfly_showcase_demo_server_Server_Status;
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Object;
 }
 
 /** @nodts */
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  Status = goog.module.get('org.patternfly.showcase.demo.server.Server.Status$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'Object');

exports = $Overlay;

//# sourceMappingURL=Server$$Overlay.js.map

goog.module('org.jboss.elemento.DomGlobal.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/** @nodts */
class $Overlay {
 /** @nodts @return {Crypto} */
 static get f_crypto__org_jboss_elemento_DomGlobal_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_crypto__org_jboss_elemento_DomGlobal_$Overlay);
 }
 /** @nodts @return {Navigator} */
 static get f_navigator__org_jboss_elemento_DomGlobal_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_navigator__org_jboss_elemento_DomGlobal_$Overlay);
 }
 /** @nodts @return {Window} */
 static get f_window__org_jboss_elemento_DomGlobal_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_window__org_jboss_elemento_DomGlobal_$Overlay);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_crypto__org_jboss_elemento_DomGlobal_$Overlay = goog.global.crypto;
  $Overlay.$static_navigator__org_jboss_elemento_DomGlobal_$Overlay = goog.global.navigator;
  $Overlay.$static_window__org_jboss_elemento_DomGlobal_$Overlay = goog.global.window;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof goog.global;
 }
 
 /** @nodts */
 static $loadModules() {}
}
/**@private {Crypto} @nodts*/
$Overlay.$static_crypto__org_jboss_elemento_DomGlobal_$Overlay;
/**@private {Navigator} @nodts*/
$Overlay.$static_navigator__org_jboss_elemento_DomGlobal_$Overlay;
/**@private {Window} @nodts*/
$Overlay.$static_window__org_jboss_elemento_DomGlobal_$Overlay;
$Util.$setClassMetadata($Overlay, 'goog.global');

exports = $Overlay;

//# sourceMappingURL=DomGlobal$$Overlay.js.map

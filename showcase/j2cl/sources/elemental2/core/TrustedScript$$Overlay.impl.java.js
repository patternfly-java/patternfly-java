goog.module('elemental2.core.TrustedScript.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/** @nodts */
class $Overlay {
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TrustedScript;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($Overlay, 'TrustedScript');

exports = $Overlay;

//# sourceMappingURL=TrustedScript$$Overlay.js.map

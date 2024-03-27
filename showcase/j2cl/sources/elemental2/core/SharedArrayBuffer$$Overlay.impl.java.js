goog.module('elemental2.core.SharedArrayBuffer.$Overlay$impl');

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
  return instance instanceof SharedArrayBuffer;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($Overlay, 'SharedArrayBuffer');

exports = $Overlay;

//# sourceMappingURL=SharedArrayBuffer$$Overlay.js.map

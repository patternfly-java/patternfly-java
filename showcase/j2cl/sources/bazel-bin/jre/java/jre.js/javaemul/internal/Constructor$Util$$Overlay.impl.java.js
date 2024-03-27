goog.module('javaemul.internal.Constructor.Util.$Overlay$impl');

const $Constructor_Util = goog.require('nativebootstrap.Util');
const $Util = goog.require('nativebootstrap.Util$impl');

let Constructor = goog.forwardDeclare('javaemul.internal.Constructor');

/** @nodts */
class $Overlay {
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $Constructor_Util;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($Overlay, 'nativebootstrap.Util');

exports = $Overlay;

//# sourceMappingURL=Constructor$Util$$Overlay.js.map

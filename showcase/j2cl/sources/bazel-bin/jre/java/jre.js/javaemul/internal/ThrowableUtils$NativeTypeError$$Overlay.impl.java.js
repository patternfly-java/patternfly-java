goog.module('javaemul.internal.ThrowableUtils.NativeTypeError.$Overlay$impl');

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
  return instance instanceof TypeError;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($Overlay, 'TypeError');

exports = $Overlay;

//# sourceMappingURL=ThrowableUtils$NativeTypeError$$Overlay.js.map

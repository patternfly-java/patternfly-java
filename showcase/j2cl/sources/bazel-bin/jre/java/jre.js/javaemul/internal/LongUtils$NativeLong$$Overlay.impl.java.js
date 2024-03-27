goog.module('javaemul.internal.LongUtils.NativeLong.$Overlay$impl');

const $LongUtils_NativeLong = goog.require('nativebootstrap.Long');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

/** @nodts */
class $Overlay {
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LongUtils_NativeLong;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($Overlay, 'nativebootstrap.Long');

exports = $Overlay;

//# sourceMappingURL=LongUtils$NativeLong$$Overlay.js.map

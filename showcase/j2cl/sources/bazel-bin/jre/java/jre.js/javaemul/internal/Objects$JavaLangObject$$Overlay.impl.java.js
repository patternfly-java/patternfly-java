goog.module('javaemul.internal.Objects.JavaLangObject.$Overlay$impl');

const JavaLangObject = goog.require('java.lang.Object$impl');
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
  return instance instanceof JavaLangObject;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($Overlay, 'java.lang.Object$impl');

exports = $Overlay;

//# sourceMappingURL=Objects$JavaLangObject$$Overlay.js.map

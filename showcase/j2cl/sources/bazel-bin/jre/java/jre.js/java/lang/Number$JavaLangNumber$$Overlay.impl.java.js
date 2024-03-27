goog.module('java.lang.Number.JavaLangNumber.$Overlay$impl');

const JavaLangNumber = goog.require('java.lang.Number$impl');
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
  return instance instanceof JavaLangNumber;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($Overlay, 'java.lang.Number$impl');

exports = $Overlay;

//# sourceMappingURL=Number$JavaLangNumber$$Overlay.js.map

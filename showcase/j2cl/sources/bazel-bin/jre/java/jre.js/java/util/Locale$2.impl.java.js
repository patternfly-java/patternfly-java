goog.module('java.util.Locale.$2$impl');

const Locale = goog.require('java.util.Locale$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class $2 extends Locale {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!$2} */
 static $create__() {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__java_util_Locale_2__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Locale_2__void() {
  this.$ctor__java_util_Locale__void();
 }
 /** @override @return {?string} */
 toString() {
  return 'en';
 }
 /** @nodts */
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  Locale.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($2, 'java.util.Locale$2');

exports = $2;

//# sourceMappingURL=Locale$2.js.map

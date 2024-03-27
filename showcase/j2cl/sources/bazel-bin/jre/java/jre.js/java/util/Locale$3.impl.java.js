goog.module('java.util.Locale.$3$impl');

const Locale = goog.require('java.util.Locale$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class $3 extends Locale {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!$3} */
 static $create__() {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__java_util_Locale_3__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Locale_3__void() {
  this.$ctor__java_util_Locale__void();
 }
 /** @override @return {?string} */
 toString() {
  return 'en_US';
 }
 /** @nodts */
 static $clinit() {
  $3.$clinit = () =>{};
  $3.$loadModules();
  Locale.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $3;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($3, 'java.util.Locale$3');

exports = $3;

//# sourceMappingURL=Locale$3.js.map

goog.module('java.util.Locale.$4$impl');

const Locale = goog.require('java.util.Locale$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class $4 extends Locale {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!$4} */
 static $create__() {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__java_util_Locale_4__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Locale_4__void() {
  this.$ctor__java_util_Locale__void();
 }
 /** @override @return {?string} */
 toString() {
  return 'unknown';
 }
 /** @nodts */
 static $clinit() {
  $4.$clinit = () =>{};
  $4.$loadModules();
  Locale.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $4;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($4, 'java.util.Locale$4');

exports = $4;

//# sourceMappingURL=Locale$4.js.map

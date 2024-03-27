goog.module('java.util.Locale.$1$impl');

const Locale = goog.require('java.util.Locale$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class $1 extends Locale {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!$1} */
 static $create__() {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__java_util_Locale_1__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Locale_1__void() {
  this.$ctor__java_util_Locale__void();
 }
 /** @override @return {?string} */
 toString() {
  return '';
 }
 /** @nodts */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  Locale.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($1, 'java.util.Locale$1');

exports = $1;

//# sourceMappingURL=Locale$1.js.map

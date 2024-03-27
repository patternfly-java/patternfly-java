goog.module('vmbootstrap.Asserts$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let AssertionError = goog.forwardDeclare('java.lang.AssertionError$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class $Asserts extends j_l_Object {
 
 constructor() {
  $Asserts.$clinit();
  super();
  this.$ctor__javaemul_internal_Asserts__void();
 }
 /** @nodts */
 $ctor__javaemul_internal_Asserts__void() {
  this.$ctor__java_lang_Object__void();
 }
 
 static $assert(/** boolean */ condition) {
  $Asserts.$clinit();
  if (!condition) {
   throw $Exceptions.toJs(AssertionError.$create__());
  }
 }
 
 static $assertWithMessage(/** boolean */ condition, /** * */ message) {
  $Asserts.$clinit();
  if (!condition) {
   throw $Exceptions.toJs(AssertionError.$create__java_lang_Object(message));
  }
 }
 /** @nodts */
 static $clinit() {
  $Asserts.$clinit = () =>{};
  $Asserts.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $Asserts;
 }
 
 /** @nodts */
 static $loadModules() {
  AssertionError = goog.module.get('java.lang.AssertionError$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
$Util.$setClassMetadata($Asserts, 'javaemul.internal.Asserts');

exports = $Asserts;

//# sourceMappingURL=Asserts.js.map

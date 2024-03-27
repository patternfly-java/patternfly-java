goog.module('java.lang.Object$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Overlay = goog.forwardDeclare('javaemul.internal.Constructor.$Overlay$impl');
let HashCodes = goog.forwardDeclare('javaemul.internal.HashCodes$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

class j_l_Object {
 /** @protected @nodts */
 constructor() {
  $Util.$assertClinit(this);
 }
 /** @nodts @return {!*} */
 static $create__() {
  j_l_Object.$clinit();
  let $instance = new j_l_Object();
  $instance.$ctor__java_lang_Object__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_Object__void() {}
 /** @return {boolean} */
 equals(/** * */ that) {
  j_l_Object.$clinit();
  return $Equality.$same(this, that);
 }
 /** @return {number} */
 hashCode() {
  j_l_Object.$clinit();
  return HashCodes.getObjectIdentityHashCode(this);
 }
 /** @return {?string} */
 toString() {
  j_l_Object.$clinit();
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.m_getClass__java_lang_Class().m_getName__java_lang_String()) + '@' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Integer.m_toHexString__int__java_lang_String(this.hashCode()));
 }
 /** @final @nodts @return {Class<?>} */
 m_getClass__java_lang_Class() {
  j_l_Object.$clinit();
  return Class.$get($Overlay.m_of__java_lang_Object__javaemul_internal_Constructor(this));
 }
 /** @return {boolean} */
 static $isInstance(/** * */ instance) {
  j_l_Object.$clinit();
  return !$Equality.$same(instance, null);
 }
 /** @nodts */
 static $clinit() {
  j_l_Object.$clinit = () =>{};
  j_l_Object.$loadModules();
 }
 
 /** @nodts */
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Overlay = goog.module.get('javaemul.internal.Constructor.$Overlay$impl');
  HashCodes = goog.module.get('javaemul.internal.HashCodes$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
$Util.$setClassMetadata(j_l_Object, 'java.lang.Object');

exports = j_l_Object;

//# sourceMappingURL=Object.js.map

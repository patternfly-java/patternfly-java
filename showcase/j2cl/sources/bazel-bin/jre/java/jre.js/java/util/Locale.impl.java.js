goog.module('java.util.Locale$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $1 = goog.forwardDeclare('java.util.Locale.$1$impl');
let $2 = goog.forwardDeclare('java.util.Locale.$2$impl');
let $3 = goog.forwardDeclare('java.util.Locale.$3$impl');
let $4 = goog.forwardDeclare('java.util.Locale.$4$impl');

class Locale extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Locale} */
 static m_getDefault__java_util_Locale() {
  Locale.$clinit();
  return Locale.f_defaultLocale__java_util_Locale_;
 }
 /** @nodts @return {!Locale} */
 static $create__() {
  let $instance = new Locale();
  $instance.$ctor__java_util_Locale__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Locale__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {Locale} */
 static get f_ROOT__java_util_Locale() {
  return (Locale.$clinit(), Locale.$static_ROOT__java_util_Locale);
 }
 /** @nodts @return {Locale} */
 static get f_ENGLISH__java_util_Locale() {
  return (Locale.$clinit(), Locale.$static_ENGLISH__java_util_Locale);
 }
 /** @nodts @return {Locale} */
 static get f_US__java_util_Locale() {
  return (Locale.$clinit(), Locale.$static_US__java_util_Locale);
 }
 /** @nodts */
 static $clinit() {
  Locale.$clinit = () =>{};
  Locale.$loadModules();
  j_l_Object.$clinit();
  Locale.$static_ROOT__java_util_Locale = $1.$create__();
  Locale.$static_ENGLISH__java_util_Locale = $2.$create__();
  Locale.$static_US__java_util_Locale = $3.$create__();
  Locale.f_defaultLocale__java_util_Locale_ = $4.$create__();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Locale;
 }
 
 /** @nodts */
 static $loadModules() {
  $1 = goog.module.get('java.util.Locale.$1$impl');
  $2 = goog.module.get('java.util.Locale.$2$impl');
  $3 = goog.module.get('java.util.Locale.$3$impl');
  $4 = goog.module.get('java.util.Locale.$4$impl');
 }
}
/**@private {Locale} @nodts*/
Locale.$static_ROOT__java_util_Locale;
/**@private {Locale} @nodts*/
Locale.$static_ENGLISH__java_util_Locale;
/**@private {Locale} @nodts*/
Locale.$static_US__java_util_Locale;
/**@type {Locale} @nodts*/
Locale.f_defaultLocale__java_util_Locale_;
$Util.$setClassMetadata(Locale, 'java.util.Locale');

exports = Locale;

//# sourceMappingURL=Locale.js.map

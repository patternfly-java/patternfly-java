goog.module('java.lang.Error$impl');

const Throwable = goog.require('java.lang.Throwable$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class j_l_Error extends Throwable {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'Error()'.
 /** @nodts @return {!j_l_Error} */
 static $create__() {
  j_l_Error.$clinit();
  let $instance = new j_l_Error();
  $instance.$ctor__java_lang_Error__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'Error()'.
 /** @nodts */
 $ctor__java_lang_Error__void() {
  this.$ctor__java_lang_Throwable__void();
 }
 //Factory method corresponding to constructor 'Error(String, Throwable)'.
 /** @nodts @return {!j_l_Error} */
 static $create__java_lang_String__java_lang_Throwable(/** ?string */ message, /** Throwable */ cause) {
  j_l_Error.$clinit();
  let $instance = new j_l_Error();
  $instance.$ctor__java_lang_Error__java_lang_String__java_lang_Throwable__void(message, cause);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'Error(String, Throwable)'.
 /** @nodts */
 $ctor__java_lang_Error__java_lang_String__java_lang_Throwable__void(/** ?string */ message, /** Throwable */ cause) {
  this.$ctor__java_lang_Throwable__java_lang_String__java_lang_Throwable__void(message, cause);
 }
 //Factory method corresponding to constructor 'Error(String)'.
 /** @nodts @return {!j_l_Error} */
 static $create__java_lang_String(/** ?string */ message) {
  j_l_Error.$clinit();
  let $instance = new j_l_Error();
  $instance.$ctor__java_lang_Error__java_lang_String__void(message);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'Error(String)'.
 /** @nodts */
 $ctor__java_lang_Error__java_lang_String__void(/** ?string */ message) {
  this.$ctor__java_lang_Throwable__java_lang_String__void(message);
 }
 //Factory method corresponding to constructor 'Error(Throwable)'.
 /** @nodts @return {!j_l_Error} */
 static $create__java_lang_Throwable(/** Throwable */ cause) {
  j_l_Error.$clinit();
  let $instance = new j_l_Error();
  $instance.$ctor__java_lang_Error__java_lang_Throwable__void(cause);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'Error(Throwable)'.
 /** @nodts */
 $ctor__java_lang_Error__java_lang_Throwable__void(/** Throwable */ cause) {
  this.$ctor__java_lang_Throwable__java_lang_Throwable__void(cause);
 }
 /** @nodts */
 static $clinit() {
  j_l_Error.$clinit = () =>{};
  j_l_Error.$loadModules();
  Throwable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof j_l_Error;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(j_l_Error, 'java.lang.Error');

exports = j_l_Error;

//# sourceMappingURL=Error.js.map

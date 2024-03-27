goog.module('java.lang.AssertionError$impl');

const j_l_Error = goog.require('java.lang.Error$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class AssertionError extends j_l_Error {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'AssertionError()'.
 /** @nodts @return {!AssertionError} */
 static $create__() {
  AssertionError.$clinit();
  let $instance = new AssertionError();
  $instance.$ctor__java_lang_AssertionError__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'AssertionError()'.
 /** @nodts */
 $ctor__java_lang_AssertionError__void() {
  this.$ctor__java_lang_Error__void();
 }
 //Factory method corresponding to constructor 'AssertionError(boolean)'.
 /** @nodts @return {!AssertionError} */
 static $create__boolean(/** boolean */ message) {
  AssertionError.$clinit();
  let $instance = new AssertionError();
  $instance.$ctor__java_lang_AssertionError__boolean__void(message);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'AssertionError(boolean)'.
 /** @nodts */
 $ctor__java_lang_AssertionError__boolean__void(/** boolean */ message) {
  this.$ctor__java_lang_AssertionError__java_lang_String__void(j_l_String.m_valueOf__boolean__java_lang_String(message));
 }
 //Factory method corresponding to constructor 'AssertionError(char)'.
 /** @nodts @return {!AssertionError} */
 static $create__char(/** number */ message) {
  AssertionError.$clinit();
  let $instance = new AssertionError();
  $instance.$ctor__java_lang_AssertionError__char__void(message);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'AssertionError(char)'.
 /** @nodts */
 $ctor__java_lang_AssertionError__char__void(/** number */ message) {
  this.$ctor__java_lang_AssertionError__java_lang_String__void(j_l_String.m_valueOf__char__java_lang_String(message));
 }
 //Factory method corresponding to constructor 'AssertionError(double)'.
 /** @nodts @return {!AssertionError} */
 static $create__double(/** number */ message) {
  AssertionError.$clinit();
  let $instance = new AssertionError();
  $instance.$ctor__java_lang_AssertionError__double__void(message);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'AssertionError(double)'.
 /** @nodts */
 $ctor__java_lang_AssertionError__double__void(/** number */ message) {
  this.$ctor__java_lang_AssertionError__java_lang_String__void(j_l_String.m_valueOf__double__java_lang_String(message));
 }
 //Factory method corresponding to constructor 'AssertionError(float)'.
 /** @nodts @return {!AssertionError} */
 static $create__float(/** number */ message) {
  AssertionError.$clinit();
  let $instance = new AssertionError();
  $instance.$ctor__java_lang_AssertionError__float__void(message);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'AssertionError(float)'.
 /** @nodts */
 $ctor__java_lang_AssertionError__float__void(/** number */ message) {
  this.$ctor__java_lang_AssertionError__java_lang_String__void(j_l_String.m_valueOf__float__java_lang_String(message));
 }
 //Factory method corresponding to constructor 'AssertionError(int)'.
 /** @nodts @return {!AssertionError} */
 static $create__int(/** number */ message) {
  AssertionError.$clinit();
  let $instance = new AssertionError();
  $instance.$ctor__java_lang_AssertionError__int__void(message);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'AssertionError(int)'.
 /** @nodts */
 $ctor__java_lang_AssertionError__int__void(/** number */ message) {
  this.$ctor__java_lang_AssertionError__java_lang_String__void(j_l_String.m_valueOf__int__java_lang_String(message));
 }
 //Factory method corresponding to constructor 'AssertionError(long)'.
 /** @nodts @return {!AssertionError} */
 static $create__long(/** !$Long */ message) {
  AssertionError.$clinit();
  let $instance = new AssertionError();
  $instance.$ctor__java_lang_AssertionError__long__void(message);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'AssertionError(long)'.
 /** @nodts */
 $ctor__java_lang_AssertionError__long__void(/** !$Long */ message) {
  this.$ctor__java_lang_AssertionError__java_lang_String__void(j_l_String.m_valueOf__long__java_lang_String(message));
 }
 //Factory method corresponding to constructor 'AssertionError(Object)'.
 /** @nodts @return {!AssertionError} */
 static $create__java_lang_Object(/** * */ message) {
  AssertionError.$clinit();
  let $instance = new AssertionError();
  $instance.$ctor__java_lang_AssertionError__java_lang_Object__void(message);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'AssertionError(Object)'.
 /** @nodts */
 $ctor__java_lang_AssertionError__java_lang_Object__void(/** * */ message) {
  this.$ctor__java_lang_Error__java_lang_String__java_lang_Throwable__void(j_l_String.m_valueOf__java_lang_Object__java_lang_String(message), Throwable.$isInstance(message) ? /**@type {Throwable}*/ ($Casts.$to(message, Throwable)) : null);
 }
 //Factory method corresponding to constructor 'AssertionError(String, Throwable)'.
 /** @nodts @return {!AssertionError} */
 static $create__java_lang_String__java_lang_Throwable(/** ?string */ message, /** Throwable */ cause) {
  AssertionError.$clinit();
  let $instance = new AssertionError();
  $instance.$ctor__java_lang_AssertionError__java_lang_String__java_lang_Throwable__void(message, cause);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'AssertionError(String, Throwable)'.
 /** @nodts */
 $ctor__java_lang_AssertionError__java_lang_String__java_lang_Throwable__void(/** ?string */ message, /** Throwable */ cause) {
  this.$ctor__java_lang_Error__java_lang_String__java_lang_Throwable__void(message, cause);
 }
 //Factory method corresponding to constructor 'AssertionError(String)'.
 /** @nodts @return {!AssertionError} */
 static $create__java_lang_String(/** ?string */ message) {
  let $instance = new AssertionError();
  $instance.$ctor__java_lang_AssertionError__java_lang_String__void(message);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'AssertionError(String)'.
 /** @nodts */
 $ctor__java_lang_AssertionError__java_lang_String__void(/** ?string */ message) {
  this.$ctor__java_lang_Error__java_lang_String__void(message);
 }
 /** @nodts */
 static $clinit() {
  AssertionError.$clinit = () =>{};
  AssertionError.$loadModules();
  j_l_Error.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AssertionError;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Throwable = goog.module.get('java.lang.Throwable$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(AssertionError, 'java.lang.AssertionError');

exports = AssertionError;

//# sourceMappingURL=AssertionError.js.map

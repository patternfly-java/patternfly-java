goog.module('java.io.IOException$impl');

const Exception = goog.require('java.lang.Exception$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');

class IOException extends Exception {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'IOException()'.
 /** @nodts @return {!IOException} */
 static $create__() {
  IOException.$clinit();
  let $instance = new IOException();
  $instance.$ctor__java_io_IOException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'IOException()'.
 /** @nodts */
 $ctor__java_io_IOException__void() {
  this.$ctor__java_lang_Exception__void();
 }
 //Factory method corresponding to constructor 'IOException(String)'.
 /** @nodts @return {!IOException} */
 static $create__java_lang_String(/** ?string */ message) {
  IOException.$clinit();
  let $instance = new IOException();
  $instance.$ctor__java_io_IOException__java_lang_String__void(message);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'IOException(String)'.
 /** @nodts */
 $ctor__java_io_IOException__java_lang_String__void(/** ?string */ message) {
  this.$ctor__java_lang_Exception__java_lang_String__void(message);
 }
 //Factory method corresponding to constructor 'IOException(String, Throwable)'.
 /** @nodts @return {!IOException} */
 static $create__java_lang_String__java_lang_Throwable(/** ?string */ message, /** Throwable */ throwable) {
  IOException.$clinit();
  let $instance = new IOException();
  $instance.$ctor__java_io_IOException__java_lang_String__java_lang_Throwable__void(message, throwable);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'IOException(String, Throwable)'.
 /** @nodts */
 $ctor__java_io_IOException__java_lang_String__java_lang_Throwable__void(/** ?string */ message, /** Throwable */ throwable) {
  this.$ctor__java_lang_Exception__java_lang_String__java_lang_Throwable__void(message, throwable);
 }
 //Factory method corresponding to constructor 'IOException(Throwable)'.
 /** @nodts @return {!IOException} */
 static $create__java_lang_Throwable(/** Throwable */ throwable) {
  IOException.$clinit();
  let $instance = new IOException();
  $instance.$ctor__java_io_IOException__java_lang_Throwable__void(throwable);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'IOException(Throwable)'.
 /** @nodts */
 $ctor__java_io_IOException__java_lang_Throwable__void(/** Throwable */ throwable) {
  this.$ctor__java_lang_Exception__java_lang_Throwable__void(throwable);
 }
 /** @nodts */
 static $clinit() {
  IOException.$clinit = () =>{};
  IOException.$loadModules();
  Exception.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IOException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(IOException, 'java.io.IOException');

exports = IOException;

//# sourceMappingURL=IOException.js.map

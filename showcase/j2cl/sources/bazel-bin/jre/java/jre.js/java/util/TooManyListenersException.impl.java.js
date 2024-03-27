goog.module('java.util.TooManyListenersException$impl');

const Exception = goog.require('java.lang.Exception$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class TooManyListenersException extends Exception {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'TooManyListenersException()'.
 /** @nodts @return {!TooManyListenersException} */
 static $create__() {
  TooManyListenersException.$clinit();
  let $instance = new TooManyListenersException();
  $instance.$ctor__java_util_TooManyListenersException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'TooManyListenersException()'.
 /** @nodts */
 $ctor__java_util_TooManyListenersException__void() {
  this.$ctor__java_lang_Exception__void();
 }
 //Factory method corresponding to constructor 'TooManyListenersException(String)'.
 /** @nodts @return {!TooManyListenersException} */
 static $create__java_lang_String(/** ?string */ message) {
  TooManyListenersException.$clinit();
  let $instance = new TooManyListenersException();
  $instance.$ctor__java_util_TooManyListenersException__java_lang_String__void(message);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'TooManyListenersException(String)'.
 /** @nodts */
 $ctor__java_util_TooManyListenersException__java_lang_String__void(/** ?string */ message) {
  this.$ctor__java_lang_Exception__java_lang_String__void(message);
 }
 /** @nodts */
 static $clinit() {
  TooManyListenersException.$clinit = () =>{};
  TooManyListenersException.$loadModules();
  Exception.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TooManyListenersException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(TooManyListenersException, 'java.util.TooManyListenersException');

exports = TooManyListenersException;

//# sourceMappingURL=TooManyListenersException.js.map

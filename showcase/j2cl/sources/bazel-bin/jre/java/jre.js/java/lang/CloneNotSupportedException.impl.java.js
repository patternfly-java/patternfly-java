goog.module('java.lang.CloneNotSupportedException$impl');

const Exception = goog.require('java.lang.Exception$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class CloneNotSupportedException extends Exception {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'CloneNotSupportedException()'.
 /** @nodts @return {!CloneNotSupportedException} */
 static $create__() {
  CloneNotSupportedException.$clinit();
  let $instance = new CloneNotSupportedException();
  $instance.$ctor__java_lang_CloneNotSupportedException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'CloneNotSupportedException()'.
 /** @nodts */
 $ctor__java_lang_CloneNotSupportedException__void() {
  this.$ctor__java_lang_Exception__void();
 }
 //Factory method corresponding to constructor 'CloneNotSupportedException(String)'.
 /** @nodts @return {!CloneNotSupportedException} */
 static $create__java_lang_String(/** ?string */ msg) {
  CloneNotSupportedException.$clinit();
  let $instance = new CloneNotSupportedException();
  $instance.$ctor__java_lang_CloneNotSupportedException__java_lang_String__void(msg);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'CloneNotSupportedException(String)'.
 /** @nodts */
 $ctor__java_lang_CloneNotSupportedException__java_lang_String__void(/** ?string */ msg) {
  this.$ctor__java_lang_Exception__java_lang_String__void(msg);
 }
 /** @nodts */
 static $clinit() {
  CloneNotSupportedException.$clinit = () =>{};
  CloneNotSupportedException.$loadModules();
  Exception.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CloneNotSupportedException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(CloneNotSupportedException, 'java.lang.CloneNotSupportedException');

exports = CloneNotSupportedException;

//# sourceMappingURL=CloneNotSupportedException.js.map

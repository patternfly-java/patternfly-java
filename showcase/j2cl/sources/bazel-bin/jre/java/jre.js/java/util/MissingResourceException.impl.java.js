goog.module('java.util.MissingResourceException$impl');

const RuntimeException = goog.require('java.lang.RuntimeException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class MissingResourceException extends RuntimeException {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_className__java_util_MissingResourceException_;
  /**@type {?string} @nodts*/
  this.f_key__java_util_MissingResourceException_;
 }
 /** @nodts @return {!MissingResourceException} */
 static $create__java_lang_String__java_lang_String__java_lang_String(/** ?string */ s, /** ?string */ className, /** ?string */ key) {
  MissingResourceException.$clinit();
  let $instance = new MissingResourceException();
  $instance.$ctor__java_util_MissingResourceException__java_lang_String__java_lang_String__java_lang_String__void(s, className, key);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_MissingResourceException__java_lang_String__java_lang_String__java_lang_String__void(/** ?string */ s, /** ?string */ className, /** ?string */ key) {
  this.$ctor__java_lang_RuntimeException__java_lang_String__void(s);
  this.f_key__java_util_MissingResourceException_ = key;
  this.f_className__java_util_MissingResourceException_ = className;
 }
 /** @nodts @return {?string} */
 m_getClassName__java_lang_String() {
  return this.f_className__java_util_MissingResourceException_;
 }
 /** @nodts @return {?string} */
 m_getKey__java_lang_String() {
  return this.f_key__java_util_MissingResourceException_;
 }
 /** @nodts */
 static $clinit() {
  MissingResourceException.$clinit = () =>{};
  MissingResourceException.$loadModules();
  RuntimeException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MissingResourceException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(MissingResourceException, 'java.util.MissingResourceException');

exports = MissingResourceException;

//# sourceMappingURL=MissingResourceException.js.map

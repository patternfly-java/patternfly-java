goog.module('java.lang.NoSuchFieldError$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class NoSuchFieldError extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!NoSuchFieldError} */
 static $create__() {
  NoSuchFieldError.$clinit();
  let $instance = new NoSuchFieldError();
  $instance.$ctor__java_lang_NoSuchFieldError__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_NoSuchFieldError__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  NoSuchFieldError.$clinit = () =>{};
  NoSuchFieldError.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NoSuchFieldError;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(NoSuchFieldError, 'java.lang.NoSuchFieldError');

exports = NoSuchFieldError;

//# sourceMappingURL=NoSuchFieldError.js.map

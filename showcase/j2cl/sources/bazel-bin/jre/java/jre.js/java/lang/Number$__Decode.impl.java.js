goog.module('java.lang.Number.__Decode$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class ____Decode extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_payload__java_lang_Number___Decode;
  /**@type {number} @nodts*/
  this.f_radix__java_lang_Number___Decode = 0;
 }
 /** @nodts @return {!____Decode} */
 static $create__int__java_lang_String(/** number */ radix, /** ?string */ payload) {
  ____Decode.$clinit();
  let $instance = new ____Decode();
  $instance.$ctor__java_lang_Number___Decode__int__java_lang_String__void(radix, payload);
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_Number___Decode__int__java_lang_String__void(/** number */ radix, /** ?string */ payload) {
  this.$ctor__java_lang_Object__void();
  this.f_radix__java_lang_Number___Decode = radix;
  this.f_payload__java_lang_Number___Decode = payload;
 }
 /** @nodts */
 static $clinit() {
  ____Decode.$clinit = () =>{};
  ____Decode.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ____Decode;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(____Decode, 'java.lang.Number$__Decode');

exports = ____Decode;

//# sourceMappingURL=Number$__Decode.js.map

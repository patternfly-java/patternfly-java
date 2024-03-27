goog.module('java.lang.RealToString$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @final
 */
class RealToString extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {?string} */
 static m_floatToString__float__java_lang_String(/** number */ f) {
  RealToString.$clinit();
  return '' + f;
 }
 /** @nodts @return {?string} */
 static m_doubleToString__double__java_lang_String(/** number */ d) {
  RealToString.$clinit();
  return '' + d;
 }
 /** @nodts @return {!RealToString} */
 static $create__() {
  let $instance = new RealToString();
  $instance.$ctor__java_lang_RealToString__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_RealToString__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  RealToString.$clinit = () =>{};
  RealToString.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RealToString;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(RealToString, 'java.lang.RealToString');

exports = RealToString;

//# sourceMappingURL=RealToString.js.map

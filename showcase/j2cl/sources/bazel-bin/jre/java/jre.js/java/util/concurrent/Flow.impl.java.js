goog.module('java.util.concurrent.Flow$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @final
 */
class Flow extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Flow} */
 static $create__() {
  let $instance = new Flow();
  $instance.$ctor__java_util_concurrent_Flow__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_concurrent_Flow__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {number} */
 static m_defaultBufferSize__int() {
  Flow.$clinit();
  return Flow.f_DEFAULT_BUFFER_SIZE__java_util_concurrent_Flow_;
 }
 /** @nodts */
 static $clinit() {
  Flow.$clinit = () =>{};
  Flow.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Flow;
 }
 
 /** @nodts */
 static $loadModules() {}
}
/**@const {number} @nodts*/
Flow.f_DEFAULT_BUFFER_SIZE__java_util_concurrent_Flow_ = 256;
$Util.$setClassMetadata(Flow, 'java.util.concurrent.Flow');

exports = Flow;

//# sourceMappingURL=Flow.js.map

goog.module('java.util.concurrent.TimeUnit.$1$impl');

const TimeUnit = goog.require('java.util.concurrent.TimeUnit$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');

class $1 extends TimeUnit {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!$1} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__java_util_concurrent_TimeUnit_1__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_concurrent_TimeUnit_1__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__java_util_concurrent_TimeUnit__java_lang_String__int__void($name, $ordinal);
 }
 /** @override @nodts @return {!$Long} */
 m_toNanos__long__long(/** !$Long */ d) {
  return d;
 }
 /** @override @nodts @return {!$Long} */
 m_toMicros__long__long(/** !$Long */ d) {
  return $LongUtils.divide(d, TimeUnit.f_C1_C0__java_util_concurrent_TimeUnit_);
 }
 /** @override @nodts @return {!$Long} */
 m_toMillis__long__long(/** !$Long */ d) {
  return $LongUtils.divide(d, TimeUnit.f_C2_C0__java_util_concurrent_TimeUnit_);
 }
 /** @override @nodts @return {!$Long} */
 m_toSeconds__long__long(/** !$Long */ d) {
  return $LongUtils.divide(d, TimeUnit.f_C3_C0__java_util_concurrent_TimeUnit_);
 }
 /** @override @nodts @return {!$Long} */
 m_toMinutes__long__long(/** !$Long */ d) {
  return $LongUtils.divide(d, TimeUnit.f_C4_C0__java_util_concurrent_TimeUnit_);
 }
 /** @override @nodts @return {!$Long} */
 m_toHours__long__long(/** !$Long */ d) {
  return $LongUtils.divide(d, TimeUnit.f_C5_C0__java_util_concurrent_TimeUnit_);
 }
 /** @override @nodts @return {!$Long} */
 m_toDays__long__long(/** !$Long */ d) {
  return $LongUtils.divide(d, TimeUnit.f_C6_C0__java_util_concurrent_TimeUnit_);
 }
 /** @override @nodts @return {!$Long} */
 m_convert__long__java_util_concurrent_TimeUnit__long(/** !$Long */ d, /** TimeUnit */ u) {
  return u.m_toNanos__long__long(d);
 }
 /** @nodts */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  TimeUnit.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 /** @nodts */
 static $loadModules() {
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
 }
}
$Util.$setClassMetadata($1, 'java.util.concurrent.TimeUnit$1');

exports = $1;

//# sourceMappingURL=TimeUnit$1.js.map

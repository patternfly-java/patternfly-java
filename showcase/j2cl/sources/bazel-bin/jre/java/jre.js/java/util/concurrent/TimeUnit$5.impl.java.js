goog.module('java.util.concurrent.TimeUnit.$5$impl');

const TimeUnit = goog.require('java.util.concurrent.TimeUnit$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');

class $5 extends TimeUnit {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!$5} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $5.$clinit();
  let $instance = new $5();
  $instance.$ctor__java_util_concurrent_TimeUnit_5__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_concurrent_TimeUnit_5__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__java_util_concurrent_TimeUnit__java_lang_String__int__void($name, $ordinal);
 }
 /** @override @nodts @return {!$Long} */
 m_toNanos__long__long(/** !$Long */ d) {
  return TimeUnit.m_x__long__long__long__long(d, TimeUnit.f_C4_C0__java_util_concurrent_TimeUnit_, TimeUnit.f_MAX_C4_C0__java_util_concurrent_TimeUnit_);
 }
 /** @override @nodts @return {!$Long} */
 m_toMicros__long__long(/** !$Long */ d) {
  return TimeUnit.m_x__long__long__long__long(d, TimeUnit.f_C4_C1__java_util_concurrent_TimeUnit_, TimeUnit.f_MAX_C4_C1__java_util_concurrent_TimeUnit_);
 }
 /** @override @nodts @return {!$Long} */
 m_toMillis__long__long(/** !$Long */ d) {
  return TimeUnit.m_x__long__long__long__long(d, TimeUnit.f_C4_C2__java_util_concurrent_TimeUnit_, TimeUnit.f_MAX_C4_C2__java_util_concurrent_TimeUnit_);
 }
 /** @override @nodts @return {!$Long} */
 m_toSeconds__long__long(/** !$Long */ d) {
  return TimeUnit.m_x__long__long__long__long(d, TimeUnit.f_C4_C3__java_util_concurrent_TimeUnit_, TimeUnit.f_MAX_C4_C3__java_util_concurrent_TimeUnit_);
 }
 /** @override @nodts @return {!$Long} */
 m_toMinutes__long__long(/** !$Long */ d) {
  return d;
 }
 /** @override @nodts @return {!$Long} */
 m_toHours__long__long(/** !$Long */ d) {
  return $LongUtils.divide(d, TimeUnit.f_C5_C4__java_util_concurrent_TimeUnit_);
 }
 /** @override @nodts @return {!$Long} */
 m_toDays__long__long(/** !$Long */ d) {
  return $LongUtils.divide(d, TimeUnit.f_C6_C4__java_util_concurrent_TimeUnit_);
 }
 /** @override @nodts @return {!$Long} */
 m_convert__long__java_util_concurrent_TimeUnit__long(/** !$Long */ d, /** TimeUnit */ u) {
  return u.m_toMinutes__long__long(d);
 }
 /** @nodts */
 static $clinit() {
  $5.$clinit = () =>{};
  $5.$loadModules();
  TimeUnit.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $5;
 }
 
 /** @nodts */
 static $loadModules() {
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
 }
}
$Util.$setClassMetadata($5, 'java.util.concurrent.TimeUnit$5');

exports = $5;

//# sourceMappingURL=TimeUnit$5.js.map

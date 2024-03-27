goog.module('java.util.concurrent.TimeUnit.$7$impl');

const TimeUnit = goog.require('java.util.concurrent.TimeUnit$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

class $7 extends TimeUnit {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!$7} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $7.$clinit();
  let $instance = new $7();
  $instance.$ctor__java_util_concurrent_TimeUnit_7__java_lang_String__int__void($name, $ordinal);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_concurrent_TimeUnit_7__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__java_util_concurrent_TimeUnit__java_lang_String__int__void($name, $ordinal);
 }
 /** @override @nodts @return {!$Long} */
 m_toNanos__long__long(/** !$Long */ d) {
  return TimeUnit.m_x__long__long__long__long(d, TimeUnit.f_C6_C0__java_util_concurrent_TimeUnit_, TimeUnit.f_MAX_C6_C0__java_util_concurrent_TimeUnit_);
 }
 /** @override @nodts @return {!$Long} */
 m_toMicros__long__long(/** !$Long */ d) {
  return TimeUnit.m_x__long__long__long__long(d, TimeUnit.f_C6_C1__java_util_concurrent_TimeUnit_, TimeUnit.f_MAX_C6_C1__java_util_concurrent_TimeUnit_);
 }
 /** @override @nodts @return {!$Long} */
 m_toMillis__long__long(/** !$Long */ d) {
  return TimeUnit.m_x__long__long__long__long(d, TimeUnit.f_C6_C2__java_util_concurrent_TimeUnit_, TimeUnit.f_MAX_C6_C2__java_util_concurrent_TimeUnit_);
 }
 /** @override @nodts @return {!$Long} */
 m_toSeconds__long__long(/** !$Long */ d) {
  return TimeUnit.m_x__long__long__long__long(d, TimeUnit.f_C6_C3__java_util_concurrent_TimeUnit_, TimeUnit.f_MAX_C6_C3__java_util_concurrent_TimeUnit_);
 }
 /** @override @nodts @return {!$Long} */
 m_toMinutes__long__long(/** !$Long */ d) {
  return TimeUnit.m_x__long__long__long__long(d, TimeUnit.f_C6_C4__java_util_concurrent_TimeUnit_, TimeUnit.f_MAX_C6_C4__java_util_concurrent_TimeUnit_);
 }
 /** @override @nodts @return {!$Long} */
 m_toHours__long__long(/** !$Long */ d) {
  return TimeUnit.m_x__long__long__long__long(d, TimeUnit.f_C6_C5__java_util_concurrent_TimeUnit_, TimeUnit.f_MAX_C6_C5__java_util_concurrent_TimeUnit_);
 }
 /** @override @nodts @return {!$Long} */
 m_toDays__long__long(/** !$Long */ d) {
  return d;
 }
 /** @override @nodts @return {!$Long} */
 m_convert__long__java_util_concurrent_TimeUnit__long(/** !$Long */ d, /** TimeUnit */ u) {
  return u.m_toDays__long__long(d);
 }
 /** @nodts */
 static $clinit() {
  $7.$clinit = () =>{};
  $7.$loadModules();
  TimeUnit.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $7;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata($7, 'java.util.concurrent.TimeUnit$7');

exports = $7;

//# sourceMappingURL=TimeUnit$7.js.map

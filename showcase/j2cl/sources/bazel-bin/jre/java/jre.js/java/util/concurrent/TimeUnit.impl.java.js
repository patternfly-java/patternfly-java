goog.module('java.util.concurrent.TimeUnit$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let $1 = goog.forwardDeclare('java.util.concurrent.TimeUnit.$1$impl');
let $2 = goog.forwardDeclare('java.util.concurrent.TimeUnit.$2$impl');
let $3 = goog.forwardDeclare('java.util.concurrent.TimeUnit.$3$impl');
let $4 = goog.forwardDeclare('java.util.concurrent.TimeUnit.$4$impl');
let $5 = goog.forwardDeclare('java.util.concurrent.TimeUnit.$5$impl');
let $6 = goog.forwardDeclare('java.util.concurrent.TimeUnit.$6$impl');
let $7 = goog.forwardDeclare('java.util.concurrent.TimeUnit.$7$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');

/**
 * @abstract
 * @extends {Enum<TimeUnit>}
 */
class TimeUnit extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__java_util_concurrent_TimeUnit__java_lang_String__int__void(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
 }
 /** @nodts @return {!$Long} */
 static m_x__long__long__long__long(/** !$Long */ d, /** !$Long */ m, /** !$Long */ over) {
  TimeUnit.$clinit();
  if ($LongUtils.greater(d, over)) {
   return Long.f_MAX_VALUE__java_lang_Long;
  }
  if ($LongUtils.less(d, $LongUtils.negate(over))) {
   return Long.f_MIN_VALUE__java_lang_Long;
  }
  return $LongUtils.times(d, m);
 }
 /** @abstract @nodts @return {!$Long} */
 m_convert__long__java_util_concurrent_TimeUnit__long(/** !$Long */ sourceDuration, /** TimeUnit */ sourceUnit) {}
 /** @abstract @nodts @return {!$Long} */
 m_toNanos__long__long(/** !$Long */ duration) {}
 /** @abstract @nodts @return {!$Long} */
 m_toMicros__long__long(/** !$Long */ duration) {}
 /** @abstract @nodts @return {!$Long} */
 m_toMillis__long__long(/** !$Long */ duration) {}
 /** @abstract @nodts @return {!$Long} */
 m_toSeconds__long__long(/** !$Long */ duration) {}
 /** @abstract @nodts @return {!$Long} */
 m_toMinutes__long__long(/** !$Long */ duration) {}
 /** @abstract @nodts @return {!$Long} */
 m_toHours__long__long(/** !$Long */ duration) {}
 /** @abstract @nodts @return {!$Long} */
 m_toDays__long__long(/** !$Long */ duration) {}
 /** @nodts @return {!TimeUnit} */
 static m_valueOf__java_lang_String__java_util_concurrent_TimeUnit(/** string */ name) {
  TimeUnit.$clinit();
  if ($Equality.$same(TimeUnit.f_namesToValuesMap__java_util_concurrent_TimeUnit_, null)) {
   TimeUnit.f_namesToValuesMap__java_util_concurrent_TimeUnit_ = /**@type {Map<?string, !TimeUnit>}*/ ($Enums.createMapFromValues(TimeUnit.m_values__arrayOf_java_util_concurrent_TimeUnit()));
  }
  return /**@type {TimeUnit}*/ ($Enums.getValueFromNameAndMap(name, TimeUnit.f_namesToValuesMap__java_util_concurrent_TimeUnit_));
 }
 /** @nodts @return {!Array<!TimeUnit>} */
 static m_values__arrayOf_java_util_concurrent_TimeUnit() {
  TimeUnit.$clinit();
  return /**@type {!Array<TimeUnit>}*/ ($Arrays.$init([TimeUnit.$static_NANOSECONDS__java_util_concurrent_TimeUnit, TimeUnit.$static_MICROSECONDS__java_util_concurrent_TimeUnit, TimeUnit.$static_MILLISECONDS__java_util_concurrent_TimeUnit, TimeUnit.$static_SECONDS__java_util_concurrent_TimeUnit, TimeUnit.$static_MINUTES__java_util_concurrent_TimeUnit, TimeUnit.$static_HOURS__java_util_concurrent_TimeUnit, TimeUnit.$static_DAYS__java_util_concurrent_TimeUnit], TimeUnit));
 }
 /** @nodts @return {!TimeUnit} */
 static get f_NANOSECONDS__java_util_concurrent_TimeUnit() {
  return (TimeUnit.$clinit(), TimeUnit.$static_NANOSECONDS__java_util_concurrent_TimeUnit);
 }
 /** @nodts @return {!TimeUnit} */
 static get f_MICROSECONDS__java_util_concurrent_TimeUnit() {
  return (TimeUnit.$clinit(), TimeUnit.$static_MICROSECONDS__java_util_concurrent_TimeUnit);
 }
 /** @nodts @return {!TimeUnit} */
 static get f_MILLISECONDS__java_util_concurrent_TimeUnit() {
  return (TimeUnit.$clinit(), TimeUnit.$static_MILLISECONDS__java_util_concurrent_TimeUnit);
 }
 /** @nodts @return {!TimeUnit} */
 static get f_SECONDS__java_util_concurrent_TimeUnit() {
  return (TimeUnit.$clinit(), TimeUnit.$static_SECONDS__java_util_concurrent_TimeUnit);
 }
 /** @nodts @return {!TimeUnit} */
 static get f_MINUTES__java_util_concurrent_TimeUnit() {
  return (TimeUnit.$clinit(), TimeUnit.$static_MINUTES__java_util_concurrent_TimeUnit);
 }
 /** @nodts @return {!TimeUnit} */
 static get f_HOURS__java_util_concurrent_TimeUnit() {
  return (TimeUnit.$clinit(), TimeUnit.$static_HOURS__java_util_concurrent_TimeUnit);
 }
 /** @nodts @return {!TimeUnit} */
 static get f_DAYS__java_util_concurrent_TimeUnit() {
  return (TimeUnit.$clinit(), TimeUnit.$static_DAYS__java_util_concurrent_TimeUnit);
 }
 /** @nodts */
 static $clinit() {
  TimeUnit.$clinit = () =>{};
  TimeUnit.$loadModules();
  Enum.$clinit();
  TimeUnit.$static_NANOSECONDS__java_util_concurrent_TimeUnit = $1.$create__java_lang_String__int($Util.$makeEnumName('NANOSECONDS'), TimeUnit.$ordinal_NANOSECONDS__java_util_concurrent_TimeUnit);
  TimeUnit.$static_MICROSECONDS__java_util_concurrent_TimeUnit = $2.$create__java_lang_String__int($Util.$makeEnumName('MICROSECONDS'), TimeUnit.$ordinal_MICROSECONDS__java_util_concurrent_TimeUnit);
  TimeUnit.$static_MILLISECONDS__java_util_concurrent_TimeUnit = $3.$create__java_lang_String__int($Util.$makeEnumName('MILLISECONDS'), TimeUnit.$ordinal_MILLISECONDS__java_util_concurrent_TimeUnit);
  TimeUnit.$static_SECONDS__java_util_concurrent_TimeUnit = $4.$create__java_lang_String__int($Util.$makeEnumName('SECONDS'), TimeUnit.$ordinal_SECONDS__java_util_concurrent_TimeUnit);
  TimeUnit.$static_MINUTES__java_util_concurrent_TimeUnit = $5.$create__java_lang_String__int($Util.$makeEnumName('MINUTES'), TimeUnit.$ordinal_MINUTES__java_util_concurrent_TimeUnit);
  TimeUnit.$static_HOURS__java_util_concurrent_TimeUnit = $6.$create__java_lang_String__int($Util.$makeEnumName('HOURS'), TimeUnit.$ordinal_HOURS__java_util_concurrent_TimeUnit);
  TimeUnit.$static_DAYS__java_util_concurrent_TimeUnit = $7.$create__java_lang_String__int($Util.$makeEnumName('DAYS'), TimeUnit.$ordinal_DAYS__java_util_concurrent_TimeUnit);
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TimeUnit;
 }
 
 /** @nodts */
 static $loadModules() {
  Long = goog.module.get('java.lang.Long$impl');
  $1 = goog.module.get('java.util.concurrent.TimeUnit.$1$impl');
  $2 = goog.module.get('java.util.concurrent.TimeUnit.$2$impl');
  $3 = goog.module.get('java.util.concurrent.TimeUnit.$3$impl');
  $4 = goog.module.get('java.util.concurrent.TimeUnit.$4$impl');
  $5 = goog.module.get('java.util.concurrent.TimeUnit.$5$impl');
  $6 = goog.module.get('java.util.concurrent.TimeUnit.$6$impl');
  $7 = goog.module.get('java.util.concurrent.TimeUnit.$7$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
 }
}
/**@const {number} @nodts*/
TimeUnit.$ordinal_NANOSECONDS__java_util_concurrent_TimeUnit = 0;
/**@const {number} @nodts*/
TimeUnit.$ordinal_MICROSECONDS__java_util_concurrent_TimeUnit = 1;
/**@const {number} @nodts*/
TimeUnit.$ordinal_MILLISECONDS__java_util_concurrent_TimeUnit = 2;
/**@const {number} @nodts*/
TimeUnit.$ordinal_SECONDS__java_util_concurrent_TimeUnit = 3;
/**@const {number} @nodts*/
TimeUnit.$ordinal_MINUTES__java_util_concurrent_TimeUnit = 4;
/**@const {number} @nodts*/
TimeUnit.$ordinal_HOURS__java_util_concurrent_TimeUnit = 5;
/**@const {number} @nodts*/
TimeUnit.$ordinal_DAYS__java_util_concurrent_TimeUnit = 6;
/**@private {!TimeUnit} @nodts*/
TimeUnit.$static_NANOSECONDS__java_util_concurrent_TimeUnit;
/**@private {!TimeUnit} @nodts*/
TimeUnit.$static_MICROSECONDS__java_util_concurrent_TimeUnit;
/**@private {!TimeUnit} @nodts*/
TimeUnit.$static_MILLISECONDS__java_util_concurrent_TimeUnit;
/**@private {!TimeUnit} @nodts*/
TimeUnit.$static_SECONDS__java_util_concurrent_TimeUnit;
/**@private {!TimeUnit} @nodts*/
TimeUnit.$static_MINUTES__java_util_concurrent_TimeUnit;
/**@private {!TimeUnit} @nodts*/
TimeUnit.$static_HOURS__java_util_concurrent_TimeUnit;
/**@private {!TimeUnit} @nodts*/
TimeUnit.$static_DAYS__java_util_concurrent_TimeUnit;
/**@const {!$Long} @nodts*/
TimeUnit.f_C0__java_util_concurrent_TimeUnit_ = $Long.fromInt(1);
/**@const {!$Long} @nodts*/
TimeUnit.f_C1__java_util_concurrent_TimeUnit_ = $Long.fromInt(1000);
/**@const {!$Long} @nodts*/
TimeUnit.f_C2__java_util_concurrent_TimeUnit_ = $Long.fromInt(1000000);
/**@const {!$Long} @nodts*/
TimeUnit.f_C3__java_util_concurrent_TimeUnit_ = $Long.fromInt(1000000000);
/**@const {!$Long} @nodts*/
TimeUnit.f_C4__java_util_concurrent_TimeUnit_ = $Long.fromBits(-129542144, 13) /* 60000000000 */;
/**@const {!$Long} @nodts*/
TimeUnit.f_C5__java_util_concurrent_TimeUnit_ = $Long.fromBits(817405952, 838) /* 3600000000000 */;
/**@const {!$Long} @nodts*/
TimeUnit.f_C6__java_util_concurrent_TimeUnit_ = $Long.fromBits(-1857093632, 20116) /* 86400000000000 */;
/**@const {!$Long} @nodts*/
TimeUnit.f_MAX__java_util_concurrent_TimeUnit_ = $Long.fromBits(-1, 2147483647) /* 9223372036854775807 */;
/**@const {!$Long} @nodts*/
TimeUnit.f_C6_C0__java_util_concurrent_TimeUnit_ = $Long.fromBits(-1857093632, 20116) /* 86400000000000 */;
/**@const {!$Long} @nodts*/
TimeUnit.f_C6_C1__java_util_concurrent_TimeUnit_ = $Long.fromBits(500654080, 20) /* 86400000000 */;
/**@const {!$Long} @nodts*/
TimeUnit.f_C6_C2__java_util_concurrent_TimeUnit_ = $Long.fromInt(86400000);
/**@const {!$Long} @nodts*/
TimeUnit.f_C6_C3__java_util_concurrent_TimeUnit_ = $Long.fromInt(86400);
/**@const {!$Long} @nodts*/
TimeUnit.f_C6_C4__java_util_concurrent_TimeUnit_ = $Long.fromInt(1440);
/**@const {!$Long} @nodts*/
TimeUnit.f_C6_C5__java_util_concurrent_TimeUnit_ = $Long.fromInt(24);
/**@const {!$Long} @nodts*/
TimeUnit.f_C5_C0__java_util_concurrent_TimeUnit_ = $Long.fromBits(817405952, 838) /* 3600000000000 */;
/**@const {!$Long} @nodts*/
TimeUnit.f_C5_C1__java_util_concurrent_TimeUnit_ = $Long.fromBits(-694967296, 0) /* 3600000000 */;
/**@const {!$Long} @nodts*/
TimeUnit.f_C5_C2__java_util_concurrent_TimeUnit_ = $Long.fromInt(3600000);
/**@const {!$Long} @nodts*/
TimeUnit.f_C5_C3__java_util_concurrent_TimeUnit_ = $Long.fromInt(3600);
/**@const {!$Long} @nodts*/
TimeUnit.f_C5_C4__java_util_concurrent_TimeUnit_ = $Long.fromInt(60);
/**@const {!$Long} @nodts*/
TimeUnit.f_C4_C0__java_util_concurrent_TimeUnit_ = $Long.fromBits(-129542144, 13) /* 60000000000 */;
/**@const {!$Long} @nodts*/
TimeUnit.f_C4_C1__java_util_concurrent_TimeUnit_ = $Long.fromInt(60000000);
/**@const {!$Long} @nodts*/
TimeUnit.f_C4_C2__java_util_concurrent_TimeUnit_ = $Long.fromInt(60000);
/**@const {!$Long} @nodts*/
TimeUnit.f_C4_C3__java_util_concurrent_TimeUnit_ = $Long.fromInt(60);
/**@const {!$Long} @nodts*/
TimeUnit.f_C3_C0__java_util_concurrent_TimeUnit_ = $Long.fromInt(1000000000);
/**@const {!$Long} @nodts*/
TimeUnit.f_C3_C1__java_util_concurrent_TimeUnit_ = $Long.fromInt(1000000);
/**@const {!$Long} @nodts*/
TimeUnit.f_C3_C2__java_util_concurrent_TimeUnit_ = $Long.fromInt(1000);
/**@const {!$Long} @nodts*/
TimeUnit.f_C2_C0__java_util_concurrent_TimeUnit_ = $Long.fromInt(1000000);
/**@const {!$Long} @nodts*/
TimeUnit.f_C2_C1__java_util_concurrent_TimeUnit_ = $Long.fromInt(1000);
/**@const {!$Long} @nodts*/
TimeUnit.f_C1_C0__java_util_concurrent_TimeUnit_ = $Long.fromInt(1000);
/**@const {!$Long} @nodts*/
TimeUnit.f_MAX_C6_C0__java_util_concurrent_TimeUnit_ = $Long.fromInt(106751);
/**@const {!$Long} @nodts*/
TimeUnit.f_MAX_C6_C1__java_util_concurrent_TimeUnit_ = $Long.fromInt(106751991);
/**@const {!$Long} @nodts*/
TimeUnit.f_MAX_C6_C2__java_util_concurrent_TimeUnit_ = $Long.fromBits(-622191233, 24) /* 106751991167 */;
/**@const {!$Long} @nodts*/
TimeUnit.f_MAX_C6_C3__java_util_concurrent_TimeUnit_ = $Long.fromBits(579025220, 24855) /* 106751991167300 */;
/**@const {!$Long} @nodts*/
TimeUnit.f_MAX_C6_C4__java_util_concurrent_TimeUnit_ = $Long.fromBits(381774870, 1491308) /* 6405119470038038 */;
/**@const {!$Long} @nodts*/
TimeUnit.f_MAX_C6_C5__java_util_concurrent_TimeUnit_ = $Long.fromBits(1431655765, 89478485) /* 384307168202282325 */;
/**@const {!$Long} @nodts*/
TimeUnit.f_MAX_C5_C0__java_util_concurrent_TimeUnit_ = $Long.fromInt(2562047);
/**@const {!$Long} @nodts*/
TimeUnit.f_MAX_C5_C1__java_util_concurrent_TimeUnit_ = $Long.fromBits(-1732919508, 0) /* 2562047788 */;
/**@const {!$Long} @nodts*/
TimeUnit.f_MAX_C5_C2__java_util_concurrent_TimeUnit_ = $Long.fromBits(-2047687697, 596) /* 2562047788015 */;
/**@const {!$Long} @nodts*/
TimeUnit.f_MAX_C5_C3__java_util_concurrent_TimeUnit_ = $Long.fromBits(1011703407, 596523) /* 2562047788015215 */;
/**@const {!$Long} @nodts*/
TimeUnit.f_MAX_C5_C4__java_util_concurrent_TimeUnit_ = $Long.fromBits(572662306, 35791394) /* 153722867280912930 */;
/**@const {!$Long} @nodts*/
TimeUnit.f_MAX_C4_C0__java_util_concurrent_TimeUnit_ = $Long.fromInt(153722867);
/**@const {!$Long} @nodts*/
TimeUnit.f_MAX_C4_C1__java_util_concurrent_TimeUnit_ = $Long.fromBits(-895955376, 35) /* 153722867280 */;
/**@const {!$Long} @nodts*/
TimeUnit.f_MAX_C4_C2__java_util_concurrent_TimeUnit_ = $Long.fromBits(1692789776, 35791) /* 153722867280912 */;
/**@const {!$Long} @nodts*/
TimeUnit.f_MAX_C4_C3__java_util_concurrent_TimeUnit_ = $Long.fromBits(572662306, 35791394) /* 153722867280912930 */;
/**@const {!$Long} @nodts*/
TimeUnit.f_MAX_C3_C0__java_util_concurrent_TimeUnit_ = $Long.fromBits(633437444, 2) /* 9223372036 */;
/**@const {!$Long} @nodts*/
TimeUnit.f_MAX_C3_C1__java_util_concurrent_TimeUnit_ = $Long.fromBits(2077252342, 2147) /* 9223372036854 */;
/**@const {!$Long} @nodts*/
TimeUnit.f_MAX_C3_C2__java_util_concurrent_TimeUnit_ = $Long.fromBits(-1511828489, 2147483) /* 9223372036854775 */;
/**@const {!$Long} @nodts*/
TimeUnit.f_MAX_C2_C0__java_util_concurrent_TimeUnit_ = $Long.fromBits(2077252342, 2147) /* 9223372036854 */;
/**@const {!$Long} @nodts*/
TimeUnit.f_MAX_C2_C1__java_util_concurrent_TimeUnit_ = $Long.fromBits(-1511828489, 2147483) /* 9223372036854775 */;
/**@const {!$Long} @nodts*/
TimeUnit.f_MAX_C1_C0__java_util_concurrent_TimeUnit_ = $Long.fromBits(-1511828489, 2147483) /* 9223372036854775 */;
/**@type {Map<?string, !TimeUnit>} @nodts*/
TimeUnit.f_namesToValuesMap__java_util_concurrent_TimeUnit_;
$Util.$setClassMetadataForEnum(TimeUnit, 'java.util.concurrent.TimeUnit');

exports = TimeUnit;

//# sourceMappingURL=TimeUnit.js.map

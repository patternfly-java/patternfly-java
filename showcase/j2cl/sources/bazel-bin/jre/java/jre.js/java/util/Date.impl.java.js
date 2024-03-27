goog.module('java.util.Date$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const Cloneable = goog.require('java.lang.Cloneable$impl');
const Comparable = goog.require('java.lang.Comparable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let Long = goog.forwardDeclare('java.lang.Long$impl');
let j_l_Math = goog.forwardDeclare('java.lang.Math$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringData = goog.forwardDeclare('java.util.Date.StringData$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @implements {Cloneable}
 * @implements {Comparable<j_u_Date>}
 * @implements {Serializable}
 */
class j_u_Date extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Date} @nodts*/
  this.f_jsdate__java_util_Date_;
 }
 /** @nodts @return {!$Long} */
 static m_parse__java_lang_String__long(/** ?string */ s) {
  j_u_Date.$clinit();
  let parsed = Date.parse(s);
  if (Double.m_isNaN__double__boolean(parsed)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__());
  }
  return $Primitives.narrowDoubleToLong(parsed);
 }
 /** @nodts @return {!$Long} */
 static m_UTC__int__int__int__int__int__int__long(/** number */ year, /** number */ month, /** number */ date, /** number */ hrs, /** number */ min, /** number */ sec) {
  j_u_Date.$clinit();
  return $Primitives.narrowDoubleToLong(Date.UTC(year + 1900 | 0, month, date, hrs, min, sec, 0));
 }
 /** @nodts @return {?string} */
 static m_padTwo__int__java_lang_String(/** number */ number_1) {
  j_u_Date.$clinit();
  if (number_1 < 10) {
   return '0' + number_1;
  } else {
   return j_l_String.m_valueOf__int__java_lang_String(number_1);
  }
 }
 //Factory method corresponding to constructor 'Date()'.
 /** @nodts @return {!j_u_Date} */
 static $create__() {
  j_u_Date.$clinit();
  let $instance = new j_u_Date();
  $instance.$ctor__java_util_Date__void();
  return $instance;
 }
 //Initialization from constructor 'Date()'.
 /** @nodts */
 $ctor__java_util_Date__void() {
  this.$ctor__java_lang_Object__void();
  this.f_jsdate__java_util_Date_ = new Date();
 }
 //Factory method corresponding to constructor 'Date(int, int, int)'.
 /** @nodts @return {!j_u_Date} */
 static $create__int__int__int(/** number */ year, /** number */ month, /** number */ date) {
  j_u_Date.$clinit();
  let $instance = new j_u_Date();
  $instance.$ctor__java_util_Date__int__int__int__void(year, month, date);
  return $instance;
 }
 //Initialization from constructor 'Date(int, int, int)'.
 /** @nodts */
 $ctor__java_util_Date__int__int__int__void(/** number */ year, /** number */ month, /** number */ date) {
  this.$ctor__java_util_Date__int__int__int__int__int__int__void(year, month, date, 0, 0, 0);
 }
 //Factory method corresponding to constructor 'Date(int, int, int, int, int)'.
 /** @nodts @return {!j_u_Date} */
 static $create__int__int__int__int__int(/** number */ year, /** number */ month, /** number */ date, /** number */ hrs, /** number */ min) {
  j_u_Date.$clinit();
  let $instance = new j_u_Date();
  $instance.$ctor__java_util_Date__int__int__int__int__int__void(year, month, date, hrs, min);
  return $instance;
 }
 //Initialization from constructor 'Date(int, int, int, int, int)'.
 /** @nodts */
 $ctor__java_util_Date__int__int__int__int__int__void(/** number */ year, /** number */ month, /** number */ date, /** number */ hrs, /** number */ min) {
  this.$ctor__java_util_Date__int__int__int__int__int__int__void(year, month, date, hrs, min, 0);
 }
 //Factory method corresponding to constructor 'Date(int, int, int, int, int, int)'.
 /** @nodts @return {!j_u_Date} */
 static $create__int__int__int__int__int__int(/** number */ year, /** number */ month, /** number */ date, /** number */ hrs, /** number */ min, /** number */ sec) {
  j_u_Date.$clinit();
  let $instance = new j_u_Date();
  $instance.$ctor__java_util_Date__int__int__int__int__int__int__void(year, month, date, hrs, min, sec);
  return $instance;
 }
 //Initialization from constructor 'Date(int, int, int, int, int, int)'.
 /** @nodts */
 $ctor__java_util_Date__int__int__int__int__int__int__void(/** number */ year, /** number */ month, /** number */ date, /** number */ hrs, /** number */ min, /** number */ sec) {
  this.$ctor__java_lang_Object__void();
  this.f_jsdate__java_util_Date_ = new Date();
  this.f_jsdate__java_util_Date_.setFullYear(year + 1900 | 0, month, date);
  this.f_jsdate__java_util_Date_.setHours(hrs, min, sec, 0);
  this.m_fixDaylightSavings__int__void_$p_java_util_Date(hrs);
 }
 //Factory method corresponding to constructor 'Date(long)'.
 /** @nodts @return {!j_u_Date} */
 static $create__long(/** !$Long */ date) {
  j_u_Date.$clinit();
  let $instance = new j_u_Date();
  $instance.$ctor__java_util_Date__long__void(date);
  return $instance;
 }
 //Initialization from constructor 'Date(long)'.
 /** @nodts */
 $ctor__java_util_Date__long__void(/** !$Long */ date) {
  this.$ctor__java_lang_Object__void();
  this.f_jsdate__java_util_Date_ = new Date($Primitives.widenLongToDouble(date));
 }
 //Factory method corresponding to constructor 'Date(String)'.
 /** @nodts @return {!j_u_Date} */
 static $create__java_lang_String(/** ?string */ date) {
  j_u_Date.$clinit();
  let $instance = new j_u_Date();
  $instance.$ctor__java_util_Date__java_lang_String__void(date);
  return $instance;
 }
 //Initialization from constructor 'Date(String)'.
 /** @nodts */
 $ctor__java_util_Date__java_lang_String__void(/** ?string */ date) {
  this.$ctor__java_util_Date__long__void(j_u_Date.m_parse__java_lang_String__long(date));
 }
 /** @nodts @return {boolean} */
 m_after__java_util_Date__boolean(/** j_u_Date */ when) {
  return $LongUtils.greater(this.m_getTime__long(), when.m_getTime__long());
 }
 /** @nodts @return {boolean} */
 m_before__java_util_Date__boolean(/** j_u_Date */ when) {
  return $LongUtils.less(this.m_getTime__long(), when.m_getTime__long());
 }
 /** @nodts @return {*} */
 m_clone__java_lang_Object() {
  return j_u_Date.$create__long(this.m_getTime__long());
 }
 /** @nodts @return {number} */
 m_compareTo__java_util_Date__int(/** j_u_Date */ other) {
  return Long.m_compare__long__long__int(this.m_getTime__long(), other.m_getTime__long());
 }
 /** @override @return {boolean} */
 equals(/** * */ obj) {
  return j_u_Date.$isInstance(obj) && $LongUtils.equals(this.m_getTime__long(), /**@type {j_u_Date}*/ ($Casts.$to(obj, j_u_Date)).m_getTime__long());
 }
 /** @nodts @return {number} */
 m_getDate__int() {
  return this.f_jsdate__java_util_Date_.getDate();
 }
 /** @nodts @return {number} */
 m_getDay__int() {
  return this.f_jsdate__java_util_Date_.getDay();
 }
 /** @nodts @return {number} */
 m_getHours__int() {
  return this.f_jsdate__java_util_Date_.getHours();
 }
 /** @nodts @return {number} */
 m_getMinutes__int() {
  return this.f_jsdate__java_util_Date_.getMinutes();
 }
 /** @nodts @return {number} */
 m_getMonth__int() {
  return this.f_jsdate__java_util_Date_.getMonth();
 }
 /** @nodts @return {number} */
 m_getSeconds__int() {
  return this.f_jsdate__java_util_Date_.getSeconds();
 }
 /** @nodts @return {!$Long} */
 m_getTime__long() {
  return $Primitives.narrowDoubleToLong(this.f_jsdate__java_util_Date_.getTime());
 }
 /** @nodts @return {number} */
 m_getTimezoneOffset__int() {
  return this.f_jsdate__java_util_Date_.getTimezoneOffset();
 }
 /** @nodts @return {number} */
 m_getYear__int() {
  return this.f_jsdate__java_util_Date_.getFullYear() - 1900 | 0;
 }
 /** @override @return {number} */
 hashCode() {
  let time = this.m_getTime__long();
  return $Primitives.narrowLongToInt($LongUtils.bitXor(time, $LongUtils.rightShiftUnsigned(time, 32)));
 }
 /** @nodts */
 m_setDate__int__void(/** number */ date) {
  let hours = this.f_jsdate__java_util_Date_.getHours();
  this.f_jsdate__java_util_Date_.setDate(date);
  this.m_fixDaylightSavings__int__void_$p_java_util_Date(hours);
 }
 /** @nodts */
 m_setHours__int__void(/** number */ hours) {
  this.f_jsdate__java_util_Date_.setHours(hours);
  this.m_fixDaylightSavings__int__void_$p_java_util_Date(hours);
 }
 /** @nodts */
 m_setMinutes__int__void(/** number */ minutes) {
  let hours = this.m_getHours__int() + $Primitives.coerceDivision(minutes / 60) | 0;
  this.f_jsdate__java_util_Date_.setMinutes(minutes);
  this.m_fixDaylightSavings__int__void_$p_java_util_Date(hours);
 }
 /** @nodts */
 m_setMonth__int__void(/** number */ month) {
  let hours = this.f_jsdate__java_util_Date_.getHours();
  this.f_jsdate__java_util_Date_.setMonth(month);
  this.m_fixDaylightSavings__int__void_$p_java_util_Date(hours);
 }
 /** @nodts */
 m_setSeconds__int__void(/** number */ seconds) {
  let hours = this.m_getHours__int() + $Primitives.coerceDivision(seconds / Math.imul(60, 60)) | 0;
  this.f_jsdate__java_util_Date_.setSeconds(seconds);
  this.m_fixDaylightSavings__int__void_$p_java_util_Date(hours);
 }
 /** @nodts */
 m_setTime__long__void(/** !$Long */ time) {
  this.f_jsdate__java_util_Date_.setTime($Primitives.widenLongToDouble(time));
 }
 /** @nodts */
 m_setYear__int__void(/** number */ year) {
  let hours = this.f_jsdate__java_util_Date_.getHours();
  this.f_jsdate__java_util_Date_.setFullYear(year + 1900 | 0);
  this.m_fixDaylightSavings__int__void_$p_java_util_Date(hours);
 }
 /** @nodts @return {?string} */
 m_toGMTString__java_lang_String() {
  return this.f_jsdate__java_util_Date_.getUTCDate() + ' ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(StringData.f_MONTHS__java_util_Date_StringData[this.f_jsdate__java_util_Date_.getUTCMonth()]) + ' ' + this.f_jsdate__java_util_Date_.getUTCFullYear() + ' ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_u_Date.m_padTwo__int__java_lang_String(this.f_jsdate__java_util_Date_.getUTCHours())) + ':' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_u_Date.m_padTwo__int__java_lang_String(this.f_jsdate__java_util_Date_.getUTCMinutes())) + ':' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_u_Date.m_padTwo__int__java_lang_String(this.f_jsdate__java_util_Date_.getUTCSeconds())) + ' GMT';
 }
 /** @nodts @return {?string} */
 m_toLocaleString__java_lang_String() {
  return this.f_jsdate__java_util_Date_.toLocaleString();
 }
 /** @override @return {?string} */
 toString() {
  let offset = - this.f_jsdate__java_util_Date_.getTimezoneOffset() | 0;
  let hourOffset = j_l_String.m_valueOf__java_lang_Object__java_lang_String(offset >= 0 ? '+' : '') + $Primitives.coerceDivision(offset / 60);
  let minuteOffset = j_u_Date.m_padTwo__int__java_lang_String($Primitives.coerceDivision(j_l_Math.m_abs__int__int(offset) % 60));
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(StringData.f_DAYS__java_util_Date_StringData[this.f_jsdate__java_util_Date_.getDay()]) + ' ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(StringData.f_MONTHS__java_util_Date_StringData[this.f_jsdate__java_util_Date_.getMonth()]) + ' ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_u_Date.m_padTwo__int__java_lang_String(this.f_jsdate__java_util_Date_.getDate())) + ' ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_u_Date.m_padTwo__int__java_lang_String(this.f_jsdate__java_util_Date_.getHours())) + ':' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_u_Date.m_padTwo__int__java_lang_String(this.f_jsdate__java_util_Date_.getMinutes())) + ':' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_u_Date.m_padTwo__int__java_lang_String(this.f_jsdate__java_util_Date_.getSeconds())) + ' GMT' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(hourOffset) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(minuteOffset) + ' ' + this.f_jsdate__java_util_Date_.getFullYear();
 }
 /** @nodts */
 m_fixDaylightSavings__int__void_$p_java_util_Date(/** number */ requestedHours) {
  requestedHours = $Primitives.coerceDivision(requestedHours % 24);
  if (this.f_jsdate__java_util_Date_.getHours() != requestedHours) {
   let copy = new Date(this.f_jsdate__java_util_Date_.getTime());
   copy.setDate(copy.getDate() + 1 | 0);
   let timeDiff = this.f_jsdate__java_util_Date_.getTimezoneOffset() - copy.getTimezoneOffset() | 0;
   if (timeDiff > 0) {
    let timeDiffHours = $Primitives.coerceDivision(timeDiff / 60);
    let timeDiffMinutes = $Primitives.coerceDivision(timeDiff % 60);
    let day = this.f_jsdate__java_util_Date_.getDate();
    let badHours = this.f_jsdate__java_util_Date_.getHours();
    if ((badHours + timeDiffHours | 0) >= 24) {
     day = day + 1 | 0;
    }
    let newTime = new Date(this.f_jsdate__java_util_Date_.getFullYear(), this.f_jsdate__java_util_Date_.getMonth(), day, requestedHours + timeDiffHours | 0, this.f_jsdate__java_util_Date_.getMinutes() + timeDiffMinutes | 0, this.f_jsdate__java_util_Date_.getSeconds(), this.f_jsdate__java_util_Date_.getMilliseconds());
    this.f_jsdate__java_util_Date_.setTime(newTime.getTime());
   }
  }
  let originalTimeInMillis = this.f_jsdate__java_util_Date_.getTime();
  this.f_jsdate__java_util_Date_.setTime(originalTimeInMillis + $Primitives.widenLongToDouble(j_u_Date.f_ONE_HOUR_IN_MILLISECONDS__java_util_Date_));
  if (this.f_jsdate__java_util_Date_.getHours() != requestedHours) {
   this.f_jsdate__java_util_Date_.setTime(originalTimeInMillis);
  }
 }
 //Bridge method.
 /** @final @override @nodts @return {number} */
 m_compareTo__java_lang_Object__int(/** j_u_Date */ arg0) {
  return this.m_compareTo__java_util_Date__int(/**@type {j_u_Date}*/ ($Casts.$to(arg0, j_u_Date)));
 }
 /** @nodts */
 static $clinit() {
  j_u_Date.$clinit = () =>{};
  j_u_Date.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof j_u_Date;
 }
 
 /** @nodts */
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  Long = goog.module.get('java.lang.Long$impl');
  j_l_Math = goog.module.get('java.lang.Math$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  StringData = goog.module.get('java.util.Date.StringData$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@const {!$Long} @nodts*/
j_u_Date.f_ONE_HOUR_IN_MILLISECONDS__java_util_Date_ = $Long.fromInt(3600000);
Cloneable.$markImplementor(j_u_Date);
Comparable.$markImplementor(j_u_Date);
Serializable.$markImplementor(j_u_Date);
$Util.$setClassMetadata(j_u_Date, 'java.util.Date');

exports = j_u_Date;

//# sourceMappingURL=Date.js.map

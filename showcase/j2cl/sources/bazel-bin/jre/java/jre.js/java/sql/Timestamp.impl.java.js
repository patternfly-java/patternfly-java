goog.module('java.sql.Timestamp$impl');

const j_u_Date = goog.require('java.util.Date$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Long = goog.forwardDeclare('java.lang.Long$impl');
let NumberFormatException = goog.forwardDeclare('java.lang.NumberFormatException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let Date = goog.forwardDeclare('java.sql.Date$impl');
let Time = goog.forwardDeclare('java.sql.Time$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class Timestamp extends j_u_Date {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {number} @nodts*/
  this.f_nanos__java_sql_Timestamp_ = 0;
 }
 /** @nodts @return {Timestamp} */
 static m_valueOf__java_lang_String__java_sql_Timestamp(/** ?string */ s) {
  Timestamp.$clinit();
  let components = j_l_String.m_split__java_lang_String__java_lang_String__arrayOf_java_lang_String(s, ' ');
  if (components.length != 2) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String('Invalid escape format: ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(s)));
  }
  let timeComponents = j_l_String.m_split__java_lang_String__java_lang_String__arrayOf_java_lang_String(components[1], '\\.');
  let hasNanos = true;
  let nanos = 0;
  if (timeComponents.length == 1) {
   hasNanos = false;
  } else if (timeComponents.length != 2) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String('Invalid escape format: ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(s)));
  }
  let d = Date.m_valueOf__java_lang_String__java_sql_Date(components[0]);
  let t = Time.m_valueOf__java_lang_String__java_sql_Time(timeComponents[0]);
  if (hasNanos) {
   let nanosString = timeComponents[1];
   let len = j_l_String.m_length__java_lang_String__int(nanosString);
   $Asserts.$assert(len > 0);
   if (len > 9) {
    throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String('Invalid escape format: ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(s)));
   }
   if (len < 9) {
    nanosString = j_l_String.m_valueOf__java_lang_Object__java_lang_String(nanosString) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_substring__java_lang_String__int__java_lang_String('00000000', len - 1 | 0));
   }
   try {
    nanos = Integer.m_valueOf__java_lang_String__java_lang_Integer(nanosString).m_intValue__int();
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (NumberFormatException.$isInstance(__$exc)) {
     let e = /**@type {NumberFormatException}*/ (__$exc);
     throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String('Invalid escape format: ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(s)));
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
  return Timestamp.$create__int__int__int__int__int__int__int(d.m_getYear__int(), d.m_getMonth__int(), d.m_getDate__int(), t.m_getHours__int(), t.m_getMinutes__int(), t.m_getSeconds__int(), nanos);
 }
 /** @nodts @return {?string} */
 static m_padNine__int__java_lang_String(/** number */ value) {
  let toReturn = StringBuilder.$create__java_lang_String('000000000');
  $Asserts.$assert(toReturn.m_length__int() == 9);
  let asString = j_l_String.m_valueOf__int__java_lang_String(value);
  toReturn = toReturn.m_replace__int__int__java_lang_String__java_lang_StringBuilder(9 - j_l_String.m_length__java_lang_String__int(asString) | 0, 9, asString);
  $Asserts.$assert(toReturn.m_length__int() == 9);
  return toReturn.toString();
 }
 //Factory method corresponding to constructor 'Timestamp(int, int, int, int, int, int, int)'.
 /** @nodts @return {!Timestamp} @deprecated */
 static $create__int__int__int__int__int__int__int(/** number */ year, /** number */ month, /** number */ date, /** number */ hour, /** number */ minute, /** number */ second, /** number */ nano) {
  Timestamp.$clinit();
  let $instance = new Timestamp();
  $instance.$ctor__java_sql_Timestamp__int__int__int__int__int__int__int__void(year, month, date, hour, minute, second, nano);
  return $instance;
 }
 //Initialization from constructor 'Timestamp(int, int, int, int, int, int, int)'.
 /** @nodts @deprecated */
 $ctor__java_sql_Timestamp__int__int__int__int__int__int__int__void(/** number */ year, /** number */ month, /** number */ date, /** number */ hour, /** number */ minute, /** number */ second, /** number */ nano) {
  this.$ctor__java_util_Date__int__int__int__int__int__int__void(year, month, date, hour, minute, second);
  this.m_setNanos__int__void(nano);
 }
 //Factory method corresponding to constructor 'Timestamp(long)'.
 /** @nodts @return {!Timestamp} */
 static $create__long(/** !$Long */ time) {
  Timestamp.$clinit();
  let $instance = new Timestamp();
  $instance.$ctor__java_sql_Timestamp__long__void(time);
  return $instance;
 }
 //Initialization from constructor 'Timestamp(long)'.
 /** @nodts */
 $ctor__java_sql_Timestamp__long__void(/** !$Long */ time) {
  this.$ctor__java_util_Date__long__void(time);
  this.f_nanos__java_sql_Timestamp_ = Math.imul($Primitives.narrowLongToInt($LongUtils.remainder(time, $Long.fromInt(1000))), 1000000);
 }
 /** @nodts @return {boolean} */
 m_after__java_sql_Timestamp__boolean(/** Timestamp */ ts) {
  return $LongUtils.greater(this.m_getTime__long(), ts.m_getTime__long()) || $LongUtils.equals(this.m_getTime__long(), ts.m_getTime__long()) && this.m_getNanos__int() > ts.m_getNanos__int();
 }
 /** @nodts @return {boolean} */
 m_before__java_sql_Timestamp__boolean(/** Timestamp */ ts) {
  return $LongUtils.less(this.m_getTime__long(), ts.m_getTime__long()) || $LongUtils.equals(this.m_getTime__long(), ts.m_getTime__long()) && this.m_getNanos__int() < ts.m_getNanos__int();
 }
 /** @override @nodts @return {number} */
 m_compareTo__java_util_Date__int(/** j_u_Date */ o) {
  if (Timestamp.$isInstance(o)) {
   return this.m_compareTo__java_sql_Timestamp__int(/**@type {Timestamp}*/ ($Casts.$to(o, Timestamp)));
  } else {
   return this.m_compareTo__java_sql_Timestamp__int(Timestamp.$create__long(o.m_getTime__long()));
  }
 }
 /** @nodts @return {number} */
 m_compareTo__java_sql_Timestamp__int(/** Timestamp */ o) {
  let cmp = Long.m_compare__long__long__int(this.m_getTime__long(), o.m_getTime__long());
  return cmp == 0 ? Integer.m_compare__int__int__int(this.m_getNanos__int(), o.m_getNanos__int()) : cmp;
 }
 /** @override @return {boolean} */
 equals(/** * */ ts) {
  return Timestamp.$isInstance(ts) && this.m_equals__java_sql_Timestamp__boolean(/**@type {Timestamp}*/ ($Casts.$to(ts, Timestamp)));
 }
 /** @nodts @return {boolean} */
 m_equals__java_sql_Timestamp__boolean(/** Timestamp */ ts) {
  return !$Equality.$same(ts, null) && $LongUtils.equals(this.m_getTime__long(), ts.m_getTime__long()) && this.m_getNanos__int() == ts.m_getNanos__int();
 }
 /** @nodts @return {number} */
 m_getNanos__int() {
  return this.f_nanos__java_sql_Timestamp_;
 }
 /** @override @nodts @return {!$Long} */
 m_getTime__long() {
  return super.m_getTime__long();
 }
 /** @override @return {number} */
 hashCode() {
  return super.hashCode();
 }
 /** @nodts */
 m_setNanos__int__void(/** number */ n) {
  if (n < 0 || n > 999999999) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String('nanos out of range ' + n));
  }
  this.f_nanos__java_sql_Timestamp_ = n;
  super.m_setTime__long__void($LongUtils.plus($LongUtils.times($LongUtils.divide(this.m_getTime__long(), $Long.fromInt(1000)), $Long.fromInt(1000)), $Primitives.widenIntToLong($Primitives.coerceDivision(this.f_nanos__java_sql_Timestamp_ / 1000000))));
 }
 /** @override @nodts */
 m_setTime__long__void(/** !$Long */ time) {
  super.m_setTime__long__void(time);
  this.f_nanos__java_sql_Timestamp_ = Math.imul($Primitives.narrowLongToInt($LongUtils.remainder(time, $Long.fromInt(1000))), 1000000);
 }
 /** @override @return {?string} */
 toString() {
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_valueOf__int__java_lang_String(1900 + this.m_getYear__int() | 0)) + '-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_u_Date.m_padTwo__int__java_lang_String(1 + this.m_getMonth__int() | 0)) + '-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_u_Date.m_padTwo__int__java_lang_String(this.m_getDate__int())) + ' ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_u_Date.m_padTwo__int__java_lang_String(this.m_getHours__int())) + ':' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_u_Date.m_padTwo__int__java_lang_String(this.m_getMinutes__int())) + ':' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_u_Date.m_padTwo__int__java_lang_String(this.m_getSeconds__int())) + '.' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Timestamp.m_padNine__int__java_lang_String(this.m_getNanos__int()));
 }
 /** @nodts */
 static $clinit() {
  Timestamp.$clinit = () =>{};
  Timestamp.$loadModules();
  j_u_Date.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Timestamp;
 }
 
 /** @nodts */
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  Long = goog.module.get('java.lang.Long$impl');
  NumberFormatException = goog.module.get('java.lang.NumberFormatException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  Date = goog.module.get('java.sql.Date$impl');
  Time = goog.module.get('java.sql.Time$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
$Util.$setClassMetadata(Timestamp, 'java.sql.Timestamp');

exports = Timestamp;

//# sourceMappingURL=Timestamp.js.map

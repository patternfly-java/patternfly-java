goog.module('java.sql.Time$impl');

const Date = goog.require('java.util.Date$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let NumberFormatException = goog.forwardDeclare('java.lang.NumberFormatException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class Time extends Date {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Time} */
 static m_valueOf__java_lang_String__java_sql_Time(/** ?string */ s) {
  Time.$clinit();
  let split = j_l_String.m_split__java_lang_String__java_lang_String__arrayOf_java_lang_String(s, ':');
  if (split.length != 3) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String('Invalid escape format: ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(s)));
  }
  try {
   let hh = Integer.m_parseInt__java_lang_String__int(split[0]);
   let mm = Integer.m_parseInt__java_lang_String__int(split[1]);
   let ss = Integer.m_parseInt__java_lang_String__int(split[2]);
   return Time.$create__int__int__int(hh, mm, ss);
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
 //Factory method corresponding to constructor 'Time(int, int, int)'.
 /** @nodts @return {!Time} @deprecated */
 static $create__int__int__int(/** number */ hour, /** number */ minute, /** number */ second) {
  Time.$clinit();
  let $instance = new Time();
  $instance.$ctor__java_sql_Time__int__int__int__void(hour, minute, second);
  return $instance;
 }
 //Initialization from constructor 'Time(int, int, int)'.
 /** @nodts @deprecated */
 $ctor__java_sql_Time__int__int__int__void(/** number */ hour, /** number */ minute, /** number */ second) {
  this.$ctor__java_util_Date__int__int__int__int__int__int__void(70, 0, 1, hour, minute, second);
 }
 //Factory method corresponding to constructor 'Time(long)'.
 /** @nodts @return {!Time} */
 static $create__long(/** !$Long */ time) {
  Time.$clinit();
  let $instance = new Time();
  $instance.$ctor__java_sql_Time__long__void(time);
  return $instance;
 }
 //Initialization from constructor 'Time(long)'.
 /** @nodts */
 $ctor__java_sql_Time__long__void(/** !$Long */ time) {
  this.$ctor__java_util_Date__long__void(time);
 }
 /** @override @nodts @return {number} @deprecated */
 m_getDate__int() {
  throw $Exceptions.toJs(IllegalArgumentException.$create__());
 }
 /** @override @nodts @return {number} @deprecated */
 m_getDay__int() {
  throw $Exceptions.toJs(IllegalArgumentException.$create__());
 }
 /** @override @nodts @return {number} @deprecated */
 m_getMonth__int() {
  throw $Exceptions.toJs(IllegalArgumentException.$create__());
 }
 /** @override @nodts @return {number} @deprecated */
 m_getYear__int() {
  throw $Exceptions.toJs(IllegalArgumentException.$create__());
 }
 /** @override @nodts @deprecated */
 m_setDate__int__void(/** number */ i) {
  throw $Exceptions.toJs(IllegalArgumentException.$create__());
 }
 /** @override @nodts @deprecated */
 m_setMonth__int__void(/** number */ i) {
  throw $Exceptions.toJs(IllegalArgumentException.$create__());
 }
 /** @override @nodts @deprecated */
 m_setYear__int__void(/** number */ i) {
  throw $Exceptions.toJs(IllegalArgumentException.$create__());
 }
 /** @override @return {?string} */
 toString() {
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(Date.m_padTwo__int__java_lang_String(this.m_getHours__int())) + ':' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Date.m_padTwo__int__java_lang_String(this.m_getMinutes__int())) + ':' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Date.m_padTwo__int__java_lang_String(this.m_getSeconds__int()));
 }
 /** @nodts */
 static $clinit() {
  Time.$clinit = () =>{};
  Time.$loadModules();
  Date.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Time;
 }
 
 /** @nodts */
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  NumberFormatException = goog.module.get('java.lang.NumberFormatException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
$Util.$setClassMetadata(Time, 'java.sql.Time');

exports = Time;

//# sourceMappingURL=Time.js.map

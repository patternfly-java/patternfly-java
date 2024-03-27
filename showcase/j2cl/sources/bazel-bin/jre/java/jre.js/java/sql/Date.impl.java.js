goog.module('java.sql.Date$impl');

const j_u_Date = goog.require('java.util.Date$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let NumberFormatException = goog.forwardDeclare('java.lang.NumberFormatException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class Date extends j_u_Date {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Date} */
 static m_valueOf__java_lang_String__java_sql_Date(/** ?string */ s) {
  Date.$clinit();
  let split = j_l_String.m_split__java_lang_String__java_lang_String__arrayOf_java_lang_String(s, '-');
  if (split.length != 3) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String('Invalid escape format: ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(s)));
  }
  try {
   let y = Integer.m_parseInt__java_lang_String__int(split[0]) - 1900 | 0;
   let m = Integer.m_parseInt__java_lang_String__int(split[1]) - 1 | 0;
   let d = Integer.m_parseInt__java_lang_String__int(split[2]);
   return Date.$create__int__int__int(y, m, d);
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
 //Factory method corresponding to constructor 'Date(int, int, int)'.
 /** @nodts @return {!Date} @deprecated */
 static $create__int__int__int(/** number */ year, /** number */ month, /** number */ day) {
  Date.$clinit();
  let $instance = new Date();
  $instance.$ctor__java_sql_Date__int__int__int__void(year, month, day);
  return $instance;
 }
 //Initialization from constructor 'Date(int, int, int)'.
 /** @nodts @deprecated */
 $ctor__java_sql_Date__int__int__int__void(/** number */ year, /** number */ month, /** number */ day) {
  this.$ctor__java_util_Date__int__int__int__void(year, month, day);
 }
 //Factory method corresponding to constructor 'Date(long)'.
 /** @nodts @return {!Date} @deprecated */
 static $create__long(/** !$Long */ date) {
  Date.$clinit();
  let $instance = new Date();
  $instance.$ctor__java_sql_Date__long__void(date);
  return $instance;
 }
 //Initialization from constructor 'Date(long)'.
 /** @nodts @deprecated */
 $ctor__java_sql_Date__long__void(/** !$Long */ date) {
  this.$ctor__java_util_Date__long__void(date);
 }
 /** @override @nodts @return {number} @deprecated */
 m_getHours__int() {
  throw $Exceptions.toJs(IllegalArgumentException.$create__());
 }
 /** @override @nodts @return {number} @deprecated */
 m_getMinutes__int() {
  throw $Exceptions.toJs(IllegalArgumentException.$create__());
 }
 /** @override @nodts @return {number} @deprecated */
 m_getSeconds__int() {
  throw $Exceptions.toJs(IllegalArgumentException.$create__());
 }
 /** @override @nodts @deprecated */
 m_setHours__int__void(/** number */ i) {
  throw $Exceptions.toJs(IllegalArgumentException.$create__());
 }
 /** @override @nodts @deprecated */
 m_setMinutes__int__void(/** number */ i) {
  throw $Exceptions.toJs(IllegalArgumentException.$create__());
 }
 /** @override @nodts @deprecated */
 m_setSeconds__int__void(/** number */ i) {
  throw $Exceptions.toJs(IllegalArgumentException.$create__());
 }
 /** @override @return {?string} @deprecated */
 toString() {
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_valueOf__int__java_lang_String(1900 + this.m_getYear__int() | 0)) + '-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_u_Date.m_padTwo__int__java_lang_String(this.m_getMonth__int() + 1 | 0)) + '-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_u_Date.m_padTwo__int__java_lang_String(this.m_getDate__int()));
 }
 /** @nodts */
 static $clinit() {
  Date.$clinit = () =>{};
  Date.$loadModules();
  j_u_Date.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Date;
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
$Util.$setClassMetadata(Date, 'java.sql.Date');

exports = Date;

//# sourceMappingURL=Date.js.map

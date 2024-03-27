goog.module('java.io.PrintStream$impl');

const FilterOutputStream = goog.require('java.io.FilterOutputStream$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IOException = goog.forwardDeclare('java.io.IOException$impl');
let IOUtils = goog.forwardDeclare('java.io.IOUtils$impl');
let OutputStream = goog.forwardDeclare('java.io.OutputStream$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class PrintStream extends FilterOutputStream {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {boolean} @nodts*/
  this.f_ioError__java_io_PrintStream_ = false;
 }
 /** @nodts @return {!PrintStream} */
 static $create__java_io_OutputStream(/** OutputStream */ out) {
  PrintStream.$clinit();
  let $instance = new PrintStream();
  $instance.$ctor__java_io_PrintStream__java_io_OutputStream__void(out);
  return $instance;
 }
 /** @nodts */
 $ctor__java_io_PrintStream__java_io_OutputStream__void(/** OutputStream */ out) {
  this.$ctor__java_io_FilterOutputStream__java_io_OutputStream__void(out);
  this.$init__void_$p_java_io_PrintStream();
 }
 /** @nodts */
 m_print__boolean__void(/** boolean */ x) {
  this.m_print__java_lang_String__void(j_l_String.m_valueOf__boolean__java_lang_String(x));
 }
 /** @nodts */
 m_print__char__void(/** number */ x) {
  this.m_print__java_lang_String__void(j_l_String.m_valueOf__char__java_lang_String(x));
 }
 /** @nodts */
 m_print__arrayOf_char__void(/** Array<number> */ x) {
  this.m_print__java_lang_String__void(j_l_String.$create__arrayOf_char__int__int(x, 0, x.length));
 }
 /** @nodts */
 m_print__double__void(/** number */ x) {
  this.m_print__java_lang_String__void(j_l_String.m_valueOf__double__java_lang_String(x));
 }
 /** @nodts */
 m_print__float__void(/** number */ x) {
  this.m_print__java_lang_String__void(j_l_String.m_valueOf__float__java_lang_String(x));
 }
 /** @nodts */
 m_print__int__void(/** number */ x) {
  this.m_print__java_lang_String__void(j_l_String.m_valueOf__int__java_lang_String(x));
 }
 /** @nodts */
 m_print__long__void(/** !$Long */ x) {
  this.m_print__java_lang_String__void(j_l_String.m_valueOf__long__java_lang_String(x));
 }
 /** @nodts */
 m_print__java_lang_Object__void(/** * */ x) {
  this.m_print__java_lang_String__void(j_l_String.m_valueOf__java_lang_Object__java_lang_String(x));
 }
 /** @nodts */
 m_print__java_lang_String__void(/** ?string */ s) {
  if ($Equality.$same(this.f_out__java_io_FilterOutputStream, null)) {
   this.m_setError__void();
   return;
  }
  if ($Equality.$same(s, null)) {
   this.m_print__java_lang_String__void('null');
   return;
  }
  try {
   this.m_write__arrayOf_byte__void(j_l_String.m_getBytes__java_lang_String__arrayOf_byte(s));
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (IOException.$isInstance(__$exc)) {
    let e = /**@type {IOException}*/ (__$exc);
    this.m_setError__void();
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
 }
 /** @nodts */
 m_println__void() {
  this.m_newline__void_$p_java_io_PrintStream();
 }
 /** @nodts */
 m_println__boolean__void(/** boolean */ x) {
  this.m_println__java_lang_String__void(j_l_String.m_valueOf__boolean__java_lang_String(x));
 }
 /** @nodts */
 m_println__char__void(/** number */ x) {
  this.m_println__java_lang_String__void(j_l_String.m_valueOf__char__java_lang_String(x));
 }
 /** @nodts */
 m_println__arrayOf_char__void(/** Array<number> */ x) {
  this.m_println__java_lang_String__void(j_l_String.$create__arrayOf_char__int__int(x, 0, x.length));
 }
 /** @nodts */
 m_println__double__void(/** number */ x) {
  this.m_println__java_lang_String__void(j_l_String.m_valueOf__double__java_lang_String(x));
 }
 /** @nodts */
 m_println__float__void(/** number */ x) {
  this.m_println__java_lang_String__void(j_l_String.m_valueOf__float__java_lang_String(x));
 }
 /** @nodts */
 m_println__int__void(/** number */ x) {
  this.m_println__java_lang_String__void(j_l_String.m_valueOf__int__java_lang_String(x));
 }
 /** @nodts */
 m_println__long__void(/** !$Long */ x) {
  this.m_println__java_lang_String__void(j_l_String.m_valueOf__long__java_lang_String(x));
 }
 /** @nodts */
 m_println__java_lang_Object__void(/** * */ x) {
  this.m_println__java_lang_String__void(j_l_String.m_valueOf__java_lang_Object__java_lang_String(x));
 }
 /** @nodts */
 m_println__java_lang_String__void(/** ?string */ s) {
  this.m_print__java_lang_String__void(s);
  this.m_newline__void_$p_java_io_PrintStream();
 }
 /** @override @nodts */
 m_flush__void() {
  if (!$Equality.$same(this.f_out__java_io_FilterOutputStream, null)) {
   try {
    this.f_out__java_io_FilterOutputStream.m_flush__void();
    return;
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (IOException.$isInstance(__$exc)) {} else {
     throw $Exceptions.toJs(__$exc);
    }
   }
  }
  this.m_setError__void();
 }
 /** @override @nodts */
 m_close__void() {
  this.m_flush__void();
  if (!$Equality.$same(this.f_out__java_io_FilterOutputStream, null)) {
   try {
    this.f_out__java_io_FilterOutputStream.m_close__void();
   } catch (__$exc) {
    __$exc = $Exceptions.toJava(__$exc);
    if (IOException.$isInstance(__$exc)) {
     let e = /**@type {IOException}*/ (__$exc);
     this.m_setError__void();
    } else {
     throw $Exceptions.toJs(__$exc);
    }
   } finally {
    this.f_out__java_io_FilterOutputStream = null;
   }
  }
 }
 /** @override @nodts */
 m_write__arrayOf_byte__int__int__void(/** Array<number> */ buffer, /** number */ offset, /** number */ length) {
  IOUtils.m_checkOffsetAndCount__arrayOf_byte__int__int__void(buffer, offset, length);
  if ($Equality.$same(this.f_out__java_io_FilterOutputStream, null)) {
   this.m_setError__void();
   return;
  }
  try {
   this.f_out__java_io_FilterOutputStream.m_write__arrayOf_byte__int__int__void(buffer, offset, length);
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (IOException.$isInstance(__$exc)) {
    let e = /**@type {IOException}*/ (__$exc);
    this.m_setError__void();
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
 }
 /** @override @nodts */
 m_write__int__void(/** number */ oneByte) {
  if ($Equality.$same(this.f_out__java_io_FilterOutputStream, null)) {
   this.m_setError__void();
   return;
  }
  try {
   this.f_out__java_io_FilterOutputStream.m_write__int__void(oneByte);
   let b = oneByte & 255;
   let isNewline = b == 10 || b == 21;
   if (isNewline) {
    this.m_flush__void();
   }
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (IOException.$isInstance(__$exc)) {
    let e = /**@type {IOException}*/ (__$exc);
    this.m_setError__void();
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
 }
 /** @nodts @return {boolean} */
 m_checkError__boolean() {
  this.m_flush__void();
  return this.f_ioError__java_io_PrintStream_;
 }
 /** @nodts */
 m_setError__void() {
  this.f_ioError__java_io_PrintStream_ = true;
 }
 /** @nodts */
 m_clearError__void() {
  this.f_ioError__java_io_PrintStream_ = false;
 }
 /** @nodts */
 m_newline__void_$p_java_io_PrintStream() {
  this.m_print__char__void(10 /* '\n' */);
 }
 /** @private @nodts */
 $init__void_$p_java_io_PrintStream() {
  this.f_ioError__java_io_PrintStream_ = false;
 }
 /** @nodts */
 static $clinit() {
  PrintStream.$clinit = () =>{};
  PrintStream.$loadModules();
  FilterOutputStream.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PrintStream;
 }
 
 /** @nodts */
 static $loadModules() {
  IOException = goog.module.get('java.io.IOException$impl');
  IOUtils = goog.module.get('java.io.IOUtils$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
$Util.$setClassMetadata(PrintStream, 'java.io.PrintStream');

exports = PrintStream;

//# sourceMappingURL=PrintStream.js.map

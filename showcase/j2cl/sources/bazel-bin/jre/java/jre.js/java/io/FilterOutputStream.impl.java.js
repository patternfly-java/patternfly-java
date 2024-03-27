goog.module('java.io.FilterOutputStream$impl');

const OutputStream = goog.require('java.io.OutputStream$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IOException = goog.forwardDeclare('java.io.IOException$impl');
let IOUtils = goog.forwardDeclare('java.io.IOUtils$impl');
let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class FilterOutputStream extends OutputStream {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {OutputStream} @nodts*/
  this.f_out__java_io_FilterOutputStream;
 }
 /** @nodts @return {!FilterOutputStream} */
 static $create__java_io_OutputStream(/** OutputStream */ out) {
  FilterOutputStream.$clinit();
  let $instance = new FilterOutputStream();
  $instance.$ctor__java_io_FilterOutputStream__java_io_OutputStream__void(out);
  return $instance;
 }
 /** @nodts */
 $ctor__java_io_FilterOutputStream__java_io_OutputStream__void(/** OutputStream */ out) {
  this.$ctor__java_io_OutputStream__void();
  this.f_out__java_io_FilterOutputStream = out;
 }
 /** @override @nodts */
 m_close__void() {
  let thrown = null;
  try {
   this.m_flush__void();
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   {
    let e = /**@type {Throwable}*/ (__$exc);
    thrown = e;
   }
  }
  try {
   this.f_out__java_io_FilterOutputStream.m_close__void();
  } catch (__$exc_1) {
   __$exc_1 = $Exceptions.toJava(__$exc_1);
   {
    let e_1 = /**@type {Throwable}*/ (__$exc_1);
    if ($Equality.$same(thrown, null)) {
     thrown = e_1;
    }
   }
  }
  if (!$Equality.$same(thrown, null)) {
   throw $Exceptions.toJs(IOException.$create__java_lang_Throwable(thrown));
  }
 }
 /** @override @nodts */
 m_flush__void() {
  this.f_out__java_io_FilterOutputStream.m_flush__void();
 }
 /** @override @nodts */
 m_write__arrayOf_byte__int__int__void(/** Array<number> */ buffer, /** number */ offset, /** number */ length) {
  IOUtils.m_checkOffsetAndCount__arrayOf_byte__int__int__void(buffer, offset, length);
  for (let i = 0; i < length; i = i + 1 | 0) {
   this.m_write__int__void(buffer[offset + i | 0]);
  }
 }
 /** @override @nodts */
 m_write__int__void(/** number */ oneByte) {
  this.f_out__java_io_FilterOutputStream.m_write__int__void(oneByte);
 }
 /** @nodts */
 static $clinit() {
  FilterOutputStream.$clinit = () =>{};
  FilterOutputStream.$loadModules();
  OutputStream.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FilterOutputStream;
 }
 
 /** @nodts */
 static $loadModules() {
  IOException = goog.module.get('java.io.IOException$impl');
  IOUtils = goog.module.get('java.io.IOUtils$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
$Util.$setClassMetadata(FilterOutputStream, 'java.io.FilterOutputStream');

exports = FilterOutputStream;

//# sourceMappingURL=FilterOutputStream.js.map

goog.module('java.io.FilterInputStream$impl');

const InputStream = goog.require('java.io.InputStream$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

class FilterInputStream extends InputStream {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {InputStream} @nodts*/
  this.f_in__java_io_FilterInputStream;
 }
 /** @nodts @return {!FilterInputStream} */
 static $create__java_io_InputStream(/** InputStream */ in_1) {
  FilterInputStream.$clinit();
  let $instance = new FilterInputStream();
  $instance.$ctor__java_io_FilterInputStream__java_io_InputStream__void(in_1);
  return $instance;
 }
 /** @nodts */
 $ctor__java_io_FilterInputStream__java_io_InputStream__void(/** InputStream */ in_1) {
  this.$ctor__java_io_InputStream__void();
  this.f_in__java_io_FilterInputStream = in_1;
 }
 /** @override @nodts @return {number} */
 m_available__int() {
  return this.f_in__java_io_FilterInputStream.m_available__int();
 }
 /** @override @nodts */
 m_close__void() {
  this.f_in__java_io_FilterInputStream.m_close__void();
 }
 /** @override @nodts */
 m_mark__int__void(/** number */ readlimit) {
  this.f_in__java_io_FilterInputStream.m_mark__int__void(readlimit);
 }
 /** @override @nodts @return {boolean} */
 m_markSupported__boolean() {
  return this.f_in__java_io_FilterInputStream.m_markSupported__boolean();
 }
 /** @override @nodts @return {number} */
 m_read__int() {
  return this.f_in__java_io_FilterInputStream.m_read__int();
 }
 /** @override @nodts @return {number} */
 m_read__arrayOf_byte__int__int__int(/** Array<number> */ buffer, /** number */ byteOffset, /** number */ byteCount) {
  return this.f_in__java_io_FilterInputStream.m_read__arrayOf_byte__int__int__int(buffer, byteOffset, byteCount);
 }
 /** @override @nodts */
 m_reset__void() {
  this.f_in__java_io_FilterInputStream.m_reset__void();
 }
 /** @override @nodts @return {!$Long} */
 m_skip__long__long(/** !$Long */ byteCount) {
  return this.f_in__java_io_FilterInputStream.m_skip__long__long(byteCount);
 }
 /** @nodts */
 static $clinit() {
  FilterInputStream.$clinit = () =>{};
  FilterInputStream.$loadModules();
  InputStream.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FilterInputStream;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(FilterInputStream, 'java.io.FilterInputStream');

exports = FilterInputStream;

//# sourceMappingURL=FilterInputStream.js.map

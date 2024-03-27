goog.module('java.io.UncheckedIOException$impl');

const RuntimeException = goog.require('java.lang.RuntimeException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IOException = goog.forwardDeclare('java.io.IOException$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class UncheckedIOException extends RuntimeException {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'UncheckedIOException(String, IOException)'.
 /** @nodts @return {!UncheckedIOException} */
 static $create__java_lang_String__java_io_IOException(/** ?string */ message, /** IOException */ cause) {
  UncheckedIOException.$clinit();
  let $instance = new UncheckedIOException();
  $instance.$ctor__java_io_UncheckedIOException__java_lang_String__java_io_IOException__void(message, cause);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'UncheckedIOException(String, IOException)'.
 /** @nodts */
 $ctor__java_io_UncheckedIOException__java_lang_String__java_io_IOException__void(/** ?string */ message, /** IOException */ cause) {
  this.$ctor__java_lang_RuntimeException__java_lang_String__java_lang_Throwable__void(message, /**@type {IOException}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(cause), IOException)));
 }
 //Factory method corresponding to constructor 'UncheckedIOException(IOException)'.
 /** @nodts @return {!UncheckedIOException} */
 static $create__java_io_IOException(/** IOException */ cause) {
  UncheckedIOException.$clinit();
  let $instance = new UncheckedIOException();
  $instance.$ctor__java_io_UncheckedIOException__java_io_IOException__void(cause);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'UncheckedIOException(IOException)'.
 /** @nodts */
 $ctor__java_io_UncheckedIOException__java_io_IOException__void(/** IOException */ cause) {
  this.$ctor__java_lang_RuntimeException__java_lang_Throwable__void(/**@type {IOException}*/ ($Casts.$to(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(cause), IOException)));
 }
 /** @override @return {IOException} */
 getCause() {
  return /**@type {IOException}*/ ($Casts.$to(super.getCause(), IOException));
 }
 /** @nodts */
 static $clinit() {
  UncheckedIOException.$clinit = () =>{};
  UncheckedIOException.$loadModules();
  RuntimeException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UncheckedIOException;
 }
 
 /** @nodts */
 static $loadModules() {
  IOException = goog.module.get('java.io.IOException$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(UncheckedIOException, 'java.io.UncheckedIOException');

exports = UncheckedIOException;

//# sourceMappingURL=UncheckedIOException.js.map

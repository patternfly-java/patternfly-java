goog.module('java.io.Writer$impl');

const Closeable = goog.require('java.io.Closeable$impl');
const Flushable = goog.require('java.io.Flushable$impl');
const Appendable = goog.require('java.lang.Appendable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let CharSequence = goog.forwardDeclare('java.lang.CharSequence$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $CharSequences = goog.forwardDeclare('vmbootstrap.CharSequences$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $$char = goog.forwardDeclare('vmbootstrap.primitives.$char$impl');

/**
 * @abstract
 * @implements {Appendable}
 * @implements {Closeable}
 * @implements {Flushable}
 */
class Writer extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Initialization from constructor 'Writer()'.
 /** @nodts */
 $ctor__java_io_Writer__void() {
  this.$ctor__java_lang_Object__void();
 }
 //Initialization from constructor 'Writer(Object)'.
 /** @nodts */
 $ctor__java_io_Writer__java_lang_Object__void(/** * */ lock) {
  this.$ctor__java_lang_Object__void();
 }
 /** @abstract @override @nodts */
 m_close__void() {}
 /** @abstract @override @nodts */
 m_flush__void() {}
 /** @nodts */
 m_write__arrayOf_char__void(/** Array<number> */ buf) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(buf);
  this.m_write__arrayOf_char__int__int__void(buf, 0, buf.length);
 }
 /** @abstract @nodts */
 m_write__arrayOf_char__int__int__void(/** Array<number> */ buf, /** number */ offset, /** number */ count) {}
 /** @nodts */
 m_write__int__void(/** number */ oneChar) {
  let oneCharArray = /**@type {!Array<number>}*/ ($Arrays.$create([1], $$char));
  $Arrays.$set(oneCharArray, 0, $Primitives.narrowIntToChar(oneChar));
  this.m_write__arrayOf_char__void(oneCharArray);
 }
 /** @nodts */
 m_write__java_lang_String__void(/** ?string */ str) {
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(str);
  this.m_write__java_lang_String__int__int__void(str, 0, j_l_String.m_length__java_lang_String__int(str));
 }
 /** @nodts */
 m_write__java_lang_String__int__int__void(/** ?string */ str, /** number */ offset, /** number */ count) {
  let buf = /**@type {!Array<number>}*/ ($Arrays.$create([count], $$char));
  j_l_String.m_getChars__java_lang_String__int__int__arrayOf_char__int__void(str, offset, offset + count | 0, buf, 0);
  this.m_write__arrayOf_char__int__int__void(buf, 0, buf.length);
 }
 /** @nodts @return {Writer} */
 m_append__char__java_io_Writer(/** number */ c) {
  this.m_write__int__void(c);
  return this;
 }
 /** @nodts @return {Writer} */
 m_append__java_lang_CharSequence__java_io_Writer(/** (CharSequence|string) */ csq) {
  this.m_write__java_lang_String__void(Objects.m_toString__java_lang_Object__java_lang_String(csq));
  return this;
 }
 /** @nodts @return {Writer} */
 m_append__java_lang_CharSequence__int__int__java_io_Writer(/** (CharSequence|string) */ csq, /** number */ start, /** number */ end) {
  if ($Equality.$same(csq, null)) {
   csq = 'null';
  }
  this.m_write__java_lang_String__void($CharSequences.m_toString__java_lang_CharSequence__java_lang_String($CharSequences.m_subSequence__java_lang_CharSequence__int__int__java_lang_CharSequence(csq, start, end)));
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Writer} */
 m_append__char__java_lang_Appendable(/** number */ arg0) {
  return this.m_append__char__java_io_Writer(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Writer} */
 m_append__java_lang_CharSequence__java_lang_Appendable(/** (CharSequence|string) */ arg0) {
  return this.m_append__java_lang_CharSequence__java_io_Writer(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {Writer} */
 m_append__java_lang_CharSequence__int__int__java_lang_Appendable(/** (CharSequence|string) */ arg0, /** number */ arg1, /** number */ arg2) {
  return this.m_append__java_lang_CharSequence__int__int__java_io_Writer(arg0, arg1, arg2);
 }
 /** @nodts */
 static $clinit() {
  Writer.$clinit = () =>{};
  Writer.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Writer;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $CharSequences = goog.module.get('vmbootstrap.CharSequences$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $$char = goog.module.get('vmbootstrap.primitives.$char$impl');
 }
}
Appendable.$markImplementor(Writer);
Closeable.$markImplementor(Writer);
Flushable.$markImplementor(Writer);
$Util.$setClassMetadata(Writer, 'java.io.Writer');

exports = Writer;

//# sourceMappingURL=Writer.js.map

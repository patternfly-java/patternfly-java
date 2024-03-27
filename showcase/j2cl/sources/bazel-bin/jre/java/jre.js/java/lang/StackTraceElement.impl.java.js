goog.module('java.lang.StackTraceElement$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');

/**
 * @final
 * @implements {Serializable}
 */
class StackTraceElement extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_className__java_lang_StackTraceElement_;
  /**@type {?string} @nodts*/
  this.f_fileName__java_lang_StackTraceElement_;
  /**@type {number} @nodts*/
  this.f_lineNumber__java_lang_StackTraceElement_ = 0;
  /**@type {?string} @nodts*/
  this.f_methodName__java_lang_StackTraceElement_;
 }
 //Factory method corresponding to constructor 'StackTraceElement()'.
 /** @nodts @return {!StackTraceElement} */
 static $create__() {
  StackTraceElement.$clinit();
  let $instance = new StackTraceElement();
  $instance.$ctor__java_lang_StackTraceElement__void();
  return $instance;
 }
 //Initialization from constructor 'StackTraceElement()'.
 /** @nodts */
 $ctor__java_lang_StackTraceElement__void() {
  this.$ctor__java_lang_Object__void();
 }
 //Factory method corresponding to constructor 'StackTraceElement(String, String, String, int)'.
 /** @nodts @return {!StackTraceElement} */
 static $create__java_lang_String__java_lang_String__java_lang_String__int(/** ?string */ className, /** ?string */ methodName, /** ?string */ fileName, /** number */ lineNumber) {
  StackTraceElement.$clinit();
  let $instance = new StackTraceElement();
  $instance.$ctor__java_lang_StackTraceElement__java_lang_String__java_lang_String__java_lang_String__int__void(className, methodName, fileName, lineNumber);
  return $instance;
 }
 //Initialization from constructor 'StackTraceElement(String, String, String, int)'.
 /** @nodts */
 $ctor__java_lang_StackTraceElement__java_lang_String__java_lang_String__java_lang_String__int__void(/** ?string */ className, /** ?string */ methodName, /** ?string */ fileName, /** number */ lineNumber) {
  this.$ctor__java_lang_Object__void();
  $Asserts.$assert(!$Equality.$same(className, null));
  $Asserts.$assert(!$Equality.$same(methodName, null));
  this.f_className__java_lang_StackTraceElement_ = className;
  this.f_methodName__java_lang_StackTraceElement_ = methodName;
  this.f_fileName__java_lang_StackTraceElement_ = fileName;
  this.f_lineNumber__java_lang_StackTraceElement_ = lineNumber;
 }
 /** @nodts @return {?string} */
 m_getClassName__java_lang_String() {
  return this.f_className__java_lang_StackTraceElement_;
 }
 /** @nodts @return {?string} */
 m_getFileName__java_lang_String() {
  return this.f_fileName__java_lang_StackTraceElement_;
 }
 /** @nodts @return {number} */
 m_getLineNumber__int() {
  return this.f_lineNumber__java_lang_StackTraceElement_;
 }
 /** @nodts @return {?string} */
 m_getMethodName__java_lang_String() {
  return this.f_methodName__java_lang_StackTraceElement_;
 }
 /** @override @return {boolean} */
 equals(/** * */ other) {
  if (StackTraceElement.$isInstance(other)) {
   let st = /**@type {StackTraceElement}*/ (other);
   return this.f_lineNumber__java_lang_StackTraceElement_ == st.f_lineNumber__java_lang_StackTraceElement_ && Objects.m_equals__java_lang_String__java_lang_String__boolean(this.f_methodName__java_lang_StackTraceElement_, st.f_methodName__java_lang_StackTraceElement_) && Objects.m_equals__java_lang_String__java_lang_String__boolean(this.f_className__java_lang_StackTraceElement_, st.f_className__java_lang_StackTraceElement_) && Objects.m_equals__java_lang_String__java_lang_String__boolean(this.f_fileName__java_lang_StackTraceElement_, st.f_fileName__java_lang_StackTraceElement_);
  }
  return false;
 }
 /** @override @return {number} */
 hashCode() {
  return Objects.m_hash__arrayOf_java_lang_Object__int([Integer.m_valueOf__int__java_lang_Integer(this.f_lineNumber__java_lang_StackTraceElement_), this.f_className__java_lang_StackTraceElement_, this.f_methodName__java_lang_StackTraceElement_, this.f_fileName__java_lang_StackTraceElement_]);
 }
 /** @override @return {?string} */
 toString() {
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_className__java_lang_StackTraceElement_) + '.' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_methodName__java_lang_StackTraceElement_) + '(' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(!$Equality.$same(this.f_fileName__java_lang_StackTraceElement_, null) ? this.f_fileName__java_lang_StackTraceElement_ : 'Unknown Source') + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_lineNumber__java_lang_StackTraceElement_ >= 0 ? ':' + this.f_lineNumber__java_lang_StackTraceElement_ : '') + ')';
 }
 /** @nodts */
 static $clinit() {
  StackTraceElement.$clinit = () =>{};
  StackTraceElement.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StackTraceElement;
 }
 
 /** @nodts */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
 }
}
Serializable.$markImplementor(StackTraceElement);
$Util.$setClassMetadata(StackTraceElement, 'java.lang.StackTraceElement');

exports = StackTraceElement;

//# sourceMappingURL=StackTraceElement.js.map

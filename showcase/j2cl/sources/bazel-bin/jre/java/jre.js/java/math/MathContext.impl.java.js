goog.module('java.math.MathContext$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let RuntimeException = goog.forwardDeclare('java.lang.RuntimeException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let RoundingMode = goog.forwardDeclare('java.math.RoundingMode$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Overlay = goog.forwardDeclare('javaemul.internal.NativeRegExp.Match.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @final
 * @implements {Serializable}
 */
class MathContext extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {number} @nodts*/
  this.f_precision__java_math_MathContext_ = 0;
  /**@type {RoundingMode} @nodts*/
  this.f_roundingMode__java_math_MathContext_;
 }
 //Factory method corresponding to constructor 'MathContext(int)'.
 /** @nodts @return {!MathContext} */
 static $create__int(/** number */ precision) {
  MathContext.$clinit();
  let $instance = new MathContext();
  $instance.$ctor__java_math_MathContext__int__void(precision);
  return $instance;
 }
 //Initialization from constructor 'MathContext(int)'.
 /** @nodts */
 $ctor__java_math_MathContext__int__void(/** number */ precision) {
  this.$ctor__java_math_MathContext__int__java_math_RoundingMode__void(precision, RoundingMode.f_HALF_UP__java_math_RoundingMode);
 }
 //Factory method corresponding to constructor 'MathContext(int, RoundingMode)'.
 /** @nodts @return {!MathContext} */
 static $create__int__java_math_RoundingMode(/** number */ precision, /** RoundingMode */ roundingMode) {
  MathContext.$clinit();
  let $instance = new MathContext();
  $instance.$ctor__java_math_MathContext__int__java_math_RoundingMode__void(precision, roundingMode);
  return $instance;
 }
 //Initialization from constructor 'MathContext(int, RoundingMode)'.
 /** @nodts */
 $ctor__java_math_MathContext__int__java_math_RoundingMode__void(/** number */ precision, /** RoundingMode */ roundingMode) {
  this.$ctor__java_lang_Object__void();
  InternalPreconditions.m_checkCriticalArgument__boolean__java_lang_Object__void(precision >= 0, 'Digits < 0');
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object__void(roundingMode, 'null RoundingMode');
  this.f_precision__java_math_MathContext_ = precision;
  this.f_roundingMode__java_math_MathContext_ = roundingMode;
 }
 //Factory method corresponding to constructor 'MathContext(String)'.
 /** @nodts @return {!MathContext} */
 static $create__java_lang_String(/** ?string */ val) {
  MathContext.$clinit();
  let $instance = new MathContext();
  $instance.$ctor__java_math_MathContext__java_lang_String__void(val);
  return $instance;
 }
 //Initialization from constructor 'MathContext(String)'.
 /** @nodts */
 $ctor__java_math_MathContext__java_lang_String__void(/** ?string */ val) {
  this.$ctor__java_lang_Object__void();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object__void(val, 'null string');
  let match = new RegExp('^precision=(\\d+)\\ roundingMode=(\\w+)$').exec(val);
  if ($Equality.$same(match, null) || match.length != 3) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String('bad string format'));
  }
  try {
   this.f_precision__java_math_MathContext_ = Integer.m_parseInt__java_lang_String__int($Overlay.m_getAt__$devirt__javaemul_internal_NativeRegExp_Match__int__java_lang_String(match, 1));
   this.f_roundingMode__java_math_MathContext_ = RoundingMode.m_valueOf__java_lang_String__java_math_RoundingMode($Overlay.m_getAt__$devirt__javaemul_internal_NativeRegExp_Match__int__java_lang_String(match, 2));
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (RuntimeException.$isInstance(__$exc)) {
    let re = /**@type {RuntimeException}*/ (__$exc);
    throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String('bad string format'));
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
  InternalPreconditions.m_checkCriticalArgument__boolean__java_lang_Object__void(this.f_precision__java_math_MathContext_ >= 0, 'Digits < 0');
 }
 /** @override @return {boolean} */
 equals(/** * */ x) {
  return MathContext.$isInstance(x) && /**@type {MathContext}*/ ($Casts.$to(x, MathContext)).m_getPrecision__int() == this.f_precision__java_math_MathContext_ && $Equality.$same(/**@type {MathContext}*/ ($Casts.$to(x, MathContext)).m_getRoundingMode__java_math_RoundingMode(), this.f_roundingMode__java_math_MathContext_);
 }
 /** @nodts @return {number} */
 m_getPrecision__int() {
  return this.f_precision__java_math_MathContext_;
 }
 /** @nodts @return {RoundingMode} */
 m_getRoundingMode__java_math_RoundingMode() {
  return this.f_roundingMode__java_math_MathContext_;
 }
 /** @override @return {number} */
 hashCode() {
  return this.f_precision__java_math_MathContext_ << 3 | this.f_roundingMode__java_math_MathContext_.ordinal();
 }
 /** @override @return {?string} */
 toString() {
  return 'precision=' + this.f_precision__java_math_MathContext_ + ' roundingMode=' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_roundingMode__java_math_MathContext_);
 }
 /** @nodts @return {MathContext} */
 static get f_DECIMAL128__java_math_MathContext() {
  return (MathContext.$clinit(), MathContext.$static_DECIMAL128__java_math_MathContext);
 }
 /** @nodts @return {MathContext} */
 static get f_DECIMAL32__java_math_MathContext() {
  return (MathContext.$clinit(), MathContext.$static_DECIMAL32__java_math_MathContext);
 }
 /** @nodts @return {MathContext} */
 static get f_DECIMAL64__java_math_MathContext() {
  return (MathContext.$clinit(), MathContext.$static_DECIMAL64__java_math_MathContext);
 }
 /** @nodts @return {MathContext} */
 static get f_UNLIMITED__java_math_MathContext() {
  return (MathContext.$clinit(), MathContext.$static_UNLIMITED__java_math_MathContext);
 }
 /** @nodts */
 static $clinit() {
  MathContext.$clinit = () =>{};
  MathContext.$loadModules();
  j_l_Object.$clinit();
  MathContext.$static_DECIMAL128__java_math_MathContext = MathContext.$create__int__java_math_RoundingMode(34, RoundingMode.f_HALF_EVEN__java_math_RoundingMode);
  MathContext.$static_DECIMAL32__java_math_MathContext = MathContext.$create__int__java_math_RoundingMode(7, RoundingMode.f_HALF_EVEN__java_math_RoundingMode);
  MathContext.$static_DECIMAL64__java_math_MathContext = MathContext.$create__int__java_math_RoundingMode(16, RoundingMode.f_HALF_EVEN__java_math_RoundingMode);
  MathContext.$static_UNLIMITED__java_math_MathContext = MathContext.$create__int__java_math_RoundingMode(0, RoundingMode.f_HALF_UP__java_math_RoundingMode);
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MathContext;
 }
 
 /** @nodts */
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  RuntimeException = goog.module.get('java.lang.RuntimeException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  RoundingMode = goog.module.get('java.math.RoundingMode$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Overlay = goog.module.get('javaemul.internal.NativeRegExp.Match.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
/**@private {MathContext} @nodts*/
MathContext.$static_DECIMAL128__java_math_MathContext;
/**@private {MathContext} @nodts*/
MathContext.$static_DECIMAL32__java_math_MathContext;
/**@private {MathContext} @nodts*/
MathContext.$static_DECIMAL64__java_math_MathContext;
/**@private {MathContext} @nodts*/
MathContext.$static_UNLIMITED__java_math_MathContext;
/**@const {!$Long} @nodts*/
MathContext.f_serialVersionUID__java_math_MathContext_ = $Long.fromBits(527827455, 1299129800) /* 5579720004786848255 */;
Serializable.$markImplementor(MathContext);
$Util.$setClassMetadata(MathContext, 'java.math.MathContext');

exports = MathContext;

//# sourceMappingURL=MathContext.js.map

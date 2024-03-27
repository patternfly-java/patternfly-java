goog.module('java.lang.System$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let PrintStream = goog.forwardDeclare('java.io.PrintStream$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let IndexOutOfBoundsException = goog.forwardDeclare('java.lang.IndexOutOfBoundsException$impl');
let ArrayHelper = goog.forwardDeclare('javaemul.internal.ArrayHelper$impl');
let HashCodes = goog.forwardDeclare('javaemul.internal.HashCodes$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @final
 */
class System extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!System} */
 static $create__() {
  System.$clinit();
  let $instance = new System();
  $instance.$ctor__java_lang_System__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_System__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static m_arraycopy__java_lang_Object__int__java_lang_Object__int__int__void(/** * */ src, /** number */ srcOfs, /** * */ dest, /** number */ destOfs, /** number */ len) {
  System.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object__void(src, 'src');
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object__void(dest, 'dest');
  if (!InternalPreconditions.m_isTypeChecked__boolean()) {
   System.m_checkArrayCopyIndicies__java_lang_Object__int__java_lang_Object__int__int__void(src, srcOfs, dest, destOfs, len);
   ArrayHelper.m_copy__java_lang_Object__int__java_lang_Object__int__int__void(src, srcOfs, dest, destOfs, len);
   return;
  }
  let srcType = $Objects.m_getClass__java_lang_Object__java_lang_Class(src);
  let destType = $Objects.m_getClass__java_lang_Object__java_lang_Class(dest);
  InternalPreconditions.m_checkArrayType__boolean__java_lang_Object__void(srcType.m_isArray__boolean(), 'srcType is not an array');
  InternalPreconditions.m_checkArrayType__boolean__java_lang_Object__void(destType.m_isArray__boolean(), 'destType is not an array');
  let srcComp = srcType.m_getComponentType__java_lang_Class();
  let destComp = destType.m_getComponentType__java_lang_Class();
  InternalPreconditions.m_checkArrayType__boolean__java_lang_Object__void(System.m_arrayTypeMatch__java_lang_Class__java_lang_Class__boolean(srcComp, destComp), 'Array types don\'t match');
  System.m_checkArrayCopyIndicies__java_lang_Object__int__java_lang_Object__int__int__void(src, srcOfs, dest, destOfs, len);
  if (!srcComp.m_isPrimitive__boolean() && !$Objects.m_equals__java_lang_Object__java_lang_Object__boolean(srcType, destType)) {
   let srcArray = /**@type {Array<*>}*/ ($Arrays.$castTo(src, j_l_Object, 1));
   let destArray = /**@type {Array<*>}*/ ($Arrays.$castTo(dest, j_l_Object, 1));
   if ($Equality.$same(src, dest) && srcOfs < destOfs) {
    let /** number */ $value;
    srcOfs = srcOfs + len | 0;
    for (let destEnd = destOfs + len | 0; ($value = destEnd, destEnd = destEnd - 1 | 0, $value) > destOfs; ) {
     $Arrays.$set(destArray, destEnd, srcArray[srcOfs = srcOfs - 1 | 0]);
    }
   } else {
    for (let destEnd_1 = destOfs + len | 0; destOfs < destEnd_1; ) {
     let /** number */ $value_1, /** number */ $value_2;
     $Arrays.$set(destArray, ($value_1 = destOfs, destOfs = destOfs + 1 | 0, $value_1), srcArray[($value_2 = srcOfs, srcOfs = srcOfs + 1 | 0, $value_2)]);
    }
   }
  } else {
   ArrayHelper.m_copy__java_lang_Object__int__java_lang_Object__int__int__void(src, srcOfs, dest, destOfs, len);
  }
 }
 /** @nodts */
 static m_checkArrayCopyIndicies__java_lang_Object__int__java_lang_Object__int__int__void(/** * */ src, /** number */ srcOfs, /** * */ dest, /** number */ destOfs, /** number */ len) {
  let srclen = ArrayHelper.m_getLength__java_lang_Object__int(src);
  let destlen = ArrayHelper.m_getLength__java_lang_Object__int(dest);
  if (srcOfs < 0 || destOfs < 0 || len < 0 || (srcOfs + len | 0) > srclen || (destOfs + len | 0) > destlen) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__());
  }
 }
 /** @nodts @return {!$Long} */
 static m_currentTimeMillis__long() {
  System.$clinit();
  return $Primitives.narrowDoubleToLong(Date.now());
 }
 /** @nodts @return {!$Long} */
 static m_nanoTime__long() {
  System.$clinit();
  return $Primitives.narrowDoubleToLong(System.m_nanoTimeAsDouble__double());
 }
 /** @nodts @return {number} */
 static m_nanoTimeAsDouble__double() {
  System.$clinit();
  return performance.now() * System.f_MILLIS_TO_NANOS__java_lang_System_;
 }
 /** @nodts */
 static m_gc__void() {
  System.$clinit();
 }
 /** @nodts @return {number} */
 static m_identityHashCode__java_lang_Object__int(/** * */ o) {
  System.$clinit();
  return HashCodes.getIdentityHashCode(o);
 }
 /** @nodts */
 static m_setErr__java_io_PrintStream__void(/** PrintStream */ err) {
  System.$clinit();
  System.$static_err__java_lang_System = err;
 }
 /** @nodts */
 static m_setOut__java_io_PrintStream__void(/** PrintStream */ out) {
  System.$clinit();
  System.$static_out__java_lang_System = out;
 }
 /** @nodts @return {boolean} */
 static m_arrayTypeMatch__java_lang_Class__java_lang_Class__boolean(/** Class<?> */ srcComp, /** Class<?> */ destComp) {
  if (srcComp.m_isPrimitive__boolean()) {
   return $Objects.m_equals__java_lang_Object__java_lang_Object__boolean(srcComp, destComp);
  } else {
   return !destComp.m_isPrimitive__boolean();
  }
 }
 /** @nodts @return {PrintStream} */
 static get f_err__java_lang_System() {
  return (System.$clinit(), System.$static_err__java_lang_System);
 }
 /** @nodts */
 static set f_err__java_lang_System(/** PrintStream */ value) {
  (System.$clinit(), System.$static_err__java_lang_System = value);
 }
 /** @nodts @return {PrintStream} */
 static get f_out__java_lang_System() {
  return (System.$clinit(), System.$static_out__java_lang_System);
 }
 /** @nodts */
 static set f_out__java_lang_System(/** PrintStream */ value) {
  (System.$clinit(), System.$static_out__java_lang_System = value);
 }
 /** @nodts */
 static $clinit() {
  System.$clinit = () =>{};
  System.$loadModules();
  j_l_Object.$clinit();
  System.$static_err__java_lang_System = PrintStream.$create__java_io_OutputStream(null);
  System.$static_out__java_lang_System = PrintStream.$create__java_io_OutputStream(null);
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof System;
 }
 
 /** @nodts */
 static $loadModules() {
  PrintStream = goog.module.get('java.io.PrintStream$impl');
  IndexOutOfBoundsException = goog.module.get('java.lang.IndexOutOfBoundsException$impl');
  ArrayHelper = goog.module.get('javaemul.internal.ArrayHelper$impl');
  HashCodes = goog.module.get('javaemul.internal.HashCodes$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@const {number} @nodts*/
System.f_MILLIS_TO_NANOS__java_lang_System_ = 1000000;
/**@private {PrintStream} @nodts*/
System.$static_err__java_lang_System;
/**@private {PrintStream} @nodts*/
System.$static_out__java_lang_System;
$Util.$setClassMetadata(System, 'java.lang.System');

exports = System;

//# sourceMappingURL=System.js.map

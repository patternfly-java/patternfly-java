goog.module('vmbootstrap.Exceptions$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let AutoCloseable = goog.forwardDeclare('java.lang.AutoCloseable$impl');
let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

class $Exceptions extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!$Exceptions} */
 static $create__() {
  $Exceptions.$clinit();
  let $instance = new $Exceptions();
  $instance.$ctor__javaemul_internal_Exceptions__void();
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_Exceptions__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @return {Throwable} */
 static safeClose(/** AutoCloseable */ resource, /** Throwable */ currentException) {
  $Exceptions.$clinit();
  if ($Equality.$same(resource, null)) {
   return currentException;
  }
  try {
   resource.m_close__void();
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   {
    let t = /**@type {Throwable}*/ (__$exc);
    if ($Equality.$same(currentException, null)) {
     return t;
    }
    currentException.m_addSuppressed__java_lang_Throwable__void(t);
   }
  }
  return currentException;
 }
 /** @return {Throwable} */
 static toJava(/** * */ e) {
  $Exceptions.$clinit();
  return Throwable.of(e);
 }
 /** @return {*} */
 static toJs(/** Throwable */ t) {
  $Exceptions.$clinit();
  return t.m_getBackingJsObject__java_lang_Object();
 }
 /** @nodts */
 static $clinit() {
  $Exceptions.$clinit = () =>{};
  $Exceptions.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $Exceptions;
 }
 
 /** @nodts */
 static $loadModules() {
  Throwable = goog.module.get('java.lang.Throwable$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
$Util.$setClassMetadata($Exceptions, 'javaemul.internal.Exceptions');

exports = $Exceptions;

//# sourceMappingURL=Exceptions.js.map

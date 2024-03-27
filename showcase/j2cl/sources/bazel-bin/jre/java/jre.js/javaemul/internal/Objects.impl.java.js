goog.module('vmbootstrap.Objects$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let JavaLangObject = goog.forwardDeclare('java.lang.Object$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashCodes = goog.forwardDeclare('javaemul.internal.HashCodes$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let JavaLangObject_$Overlay = goog.forwardDeclare('javaemul.internal.Objects.JavaLangObject.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $JavaScriptFunction = goog.forwardDeclare('vmbootstrap.JavaScriptFunction$impl');
let $JavaScriptObject = goog.forwardDeclare('vmbootstrap.JavaScriptObject$impl');

class $Objects extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!$Objects} */
 static $create__() {
  $Objects.$clinit();
  let $instance = new $Objects();
  $instance.$ctor__javaemul_internal_Objects__void();
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_Objects__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {boolean} */
 static m_equals__java_lang_Object__java_lang_Object__boolean(/** * */ obj, /** * */ other) {
  $Objects.$clinit();
  if (/**@type {*}*/ (obj).equals) {
   return obj.equals(other);
  }
  $Objects.assertEqualsAndHashCodePresentIfExpected(obj);
  return Object.is(obj, other);
 }
 /** @nodts @return {number} */
 static m_hashCode__java_lang_Object__int(/** * */ obj) {
  $Objects.$clinit();
  if (/**@type {*}*/ (obj).hashCode) {
   return obj.hashCode();
  }
  $Objects.assertEqualsAndHashCodePresentIfExpected(obj);
  return HashCodes.getIdentityHashCode(obj);
 }
 /** @nodts @return {?string} */
 static m_toString__java_lang_Object__java_lang_String(/** * */ obj) {
  $Objects.$clinit();
  return obj.toString();
 }
 /** @nodts @return {Class<?>} */
 static m_getClass__java_lang_Object__java_lang_Class(/** * */ obj) {
  $Objects.$clinit();
  switch (InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(typeof(obj))) {
   case 'number': 
    return Class.$get(Double);
   case 'boolean': 
    return Class.$get(Boolean);
   case 'string': 
    return Class.$get(j_l_String);
   case 'function': 
    return Class.$get($JavaScriptFunction);
  }
  if (JavaLangObject_$Overlay.$isInstance(obj)) {
   let jlObject = /**@type {JavaLangObject}*/ (obj);
   return jlObject.m_getClass__java_lang_Class();
  } else if ($Arrays.$instanceIsOfNative(obj)) {
   let array = /**@type {Array<Object>}*/ (obj);
   return $Arrays.$getClass(array);
  } else if (!$Equality.$same(obj, null)) {
   return Class.$get($JavaScriptObject);
  }
  return $Objects.throwTypeError();
 }
 // /** @return {Class<?>} */
 // native static throwTypeError() 
 // 
 // native static assertEqualsAndHashCodePresentIfExpected(/** * */ value) 
 /** @nodts */
 static $clinit() {
  $Objects.$clinit = () =>{};
  $Objects.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $Objects;
 }
 
 /** @nodts */
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Double = goog.module.get('java.lang.Double$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashCodes = goog.module.get('javaemul.internal.HashCodes$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  JavaLangObject_$Overlay = goog.module.get('javaemul.internal.Objects.JavaLangObject.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $JavaScriptFunction = goog.module.get('vmbootstrap.JavaScriptFunction$impl');
  $JavaScriptObject = goog.module.get('vmbootstrap.JavaScriptObject$impl');
 }
}
$Util.$setClassMetadata($Objects, 'javaemul.internal.Objects');

/* NATIVE.JS EPILOG */

const javaemul_internal_Objects = $Objects;

/** @return {!Class} */
$Objects.throwTypeError = function() {
  throw new TypeError('null.getClass()');
};

/**
 * Fails in goog.DEBUG if we saw `equalsAndHashCodeShouldBeAvailable` but did
 * not find either `equals` or `hashCode`.
 * @param {*} instance
 */
$Objects.assertEqualsAndHashCodePresentIfExpected = function(instance) {
  if (goog.DEBUG && instance.equalsAndHashCodeShouldBeAvailable) {
    // copybara:begin_strip(not available in oss)
    // This error occurs when `equals` is called on an Apps JSPB proto message
    // but the monkey-patch which provides `equals` was not loaded. This
    // typically means that you were passing a `jspb.Message` into J2CL as
    // an `Object` and should instead use an ImmutableJS message.
    //
    // TODO(b/264934765): update this once j2cl proto types are heterogeneous.
    // copybara:end_strip
    throw new Error('equals and hashcode expected but not defined.');
  }
};


exports = $Objects;

//# sourceMappingURL=Objects.js.map

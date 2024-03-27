goog.module('java.lang.Class$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const Type = goog.require('java.lang.reflect.Type$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let Constructor = goog.forwardDeclare('javaemul.internal.Constructor');
let $Overlay = goog.forwardDeclare('javaemul.internal.Constructor.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @final
 * @template T
 * @implements {Type}
 * @implements {Serializable}
 */
class Class extends j_l_Object {
 
 constructor(/** Constructor */ ctor, /** number */ dimensionCount) {
  Class.$clinit();
  super();
  /**@type {Constructor} @nodts*/
  this.f_ctor__java_lang_Class_;
  /**@type {number} @nodts*/
  this.f_dimensionCount__java_lang_Class_ = 0;
  this.$ctor__java_lang_Class__javaemul_internal_Constructor__int__void(ctor, dimensionCount);
 }
 // /** @return {Class<?>} */
 // native static $get(/** Constructor */ ctor, /** number */ dimensionCount) 
 // /** @return {Class<?>} */
 // native static $get(/** Constructor */ ctor) 
 /** @nodts */
 $ctor__java_lang_Class__javaemul_internal_Constructor__int__void(/** Constructor */ ctor, /** number */ dimensionCount) {
  this.$ctor__java_lang_Object__void();
  this.f_ctor__java_lang_Class_ = ctor;
  this.f_dimensionCount__java_lang_Class_ = dimensionCount;
 }
 /** @nodts @return {?string} */
 m_getName__java_lang_String() {
  if (this.m_isArray__boolean()) {
   let className = $Overlay.m_isPrimitive__$devirt__javaemul_internal_Constructor__boolean(this.f_ctor__java_lang_Class_) ? $Overlay.m_getPrimitiveShortName__$devirt__javaemul_internal_Constructor__java_lang_String(this.f_ctor__java_lang_Class_) : 'L' + j_l_String.m_valueOf__java_lang_Object__java_lang_String($Overlay.m_getClassName__$devirt__javaemul_internal_Constructor__java_lang_String(this.f_ctor__java_lang_Class_)) + ';';
   return j_l_String.m_valueOf__java_lang_Object__java_lang_String(Class.m_repeatString__java_lang_String__int__java_lang_String('[', this.f_dimensionCount__java_lang_Class_)) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(className);
  }
  return $Overlay.m_getClassName__$devirt__javaemul_internal_Constructor__java_lang_String(this.f_ctor__java_lang_Class_);
 }
 /** @nodts @return {?string} */
 m_getCanonicalName__java_lang_String() {
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String($Overlay.m_getClassName__$devirt__javaemul_internal_Constructor__java_lang_String(this.f_ctor__java_lang_Class_)) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Class.m_repeatString__java_lang_String__int__java_lang_String('[]', this.f_dimensionCount__java_lang_Class_));
 }
 /** @nodts @return {?string} */
 m_getSimpleName__java_lang_String() {
  return Class.m_stripToLastOccurrenceOf__java_lang_String__java_lang_String__java_lang_String(Class.m_stripToLastOccurrenceOf__java_lang_String__java_lang_String__java_lang_String(this.m_getCanonicalName__java_lang_String(), '.'), '$');
 }
 /** @nodts @return {?string} */
 static m_stripToLastOccurrenceOf__java_lang_String__java_lang_String__java_lang_String(/** ?string */ str, /** ?string */ token) {
  return j_l_String.m_substring__java_lang_String__int__java_lang_String(str, j_l_String.m_lastIndexOf__java_lang_String__java_lang_String__int(str, token) + 1 | 0);
 }
 /** @nodts @return {Class<?>} */
 m_getComponentType__java_lang_Class() {
  return this.m_isArray__boolean() ? Class.$get(this.f_ctor__java_lang_Class_, this.f_dimensionCount__java_lang_Class_ - 1 | 0) : null;
 }
 /** @nodts @return {boolean} */
 m_isArray__boolean() {
  return this.f_dimensionCount__java_lang_Class_ != 0;
 }
 /** @nodts @return {boolean} */
 m_isEnum__boolean() {
  return !this.m_isArray__boolean() && $Overlay.m_isEnum__$devirt__javaemul_internal_Constructor__boolean(this.f_ctor__java_lang_Class_);
 }
 /** @nodts @return {boolean} */
 m_isInterface__boolean() {
  return !this.m_isArray__boolean() && $Overlay.m_isInterface__$devirt__javaemul_internal_Constructor__boolean(this.f_ctor__java_lang_Class_);
 }
 /** @nodts @return {boolean} */
 m_isPrimitive__boolean() {
  return !this.m_isArray__boolean() && $Overlay.m_isPrimitive__$devirt__javaemul_internal_Constructor__boolean(this.f_ctor__java_lang_Class_);
 }
 /** @nodts @return {Array<T>} */
 m_getEnumConstants__arrayOf_java_lang_Object() {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @nodts @return {Class<?>} */
 m_getSuperclass__java_lang_Class() {
  let superCtor = $Overlay.m_getSuperConstructor__$devirt__javaemul_internal_Constructor__javaemul_internal_Constructor(this.f_ctor__java_lang_Class_);
  return $Equality.$same(superCtor, null) ? null : /**@type {Class<*>}*/ (Class.$get(superCtor, 0));
 }
 /** @nodts @return {boolean} */
 m_desiredAssertionStatus__boolean() {
  return false;
 }
 /** @override @return {?string} */
 toString() {
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.m_isInterface__boolean() ? 'interface ' : this.m_isPrimitive__boolean() ? '' : 'class ') + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.m_getName__java_lang_String());
 }
 /** @nodts @return {?string} */
 static m_repeatString__java_lang_String__int__java_lang_String(/** ?string */ str, /** number */ count) {
  let rv = '';
  for (let i = 0; i < count; i = i + 1 | 0) {
   rv = j_l_String.m_valueOf__java_lang_Object__java_lang_String(rv) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(str);
  }
  return rv;
 }
 /** @nodts @return {Class<?>} */
 $getBoxedClass__java_lang_Class() {
  return this.m_isPrimitive__boolean() ? Class.$get($Overlay.m_getBoxedConstructor__$devirt__javaemul_internal_Constructor__javaemul_internal_Constructor(this.f_ctor__java_lang_Class_)) : this;
 }
 /** @nodts @return {Class<?>} */
 $getPrimitiveClass__java_lang_Class() {
  if (this.m_isArray__boolean()) {
   return null;
  }
  if (this.m_isPrimitive__boolean()) {
   return this;
  }
  let primitiveCtor = $Overlay.m_getPrimitiveConstructor__$devirt__javaemul_internal_Constructor__javaemul_internal_Constructor(this.f_ctor__java_lang_Class_);
  if ($Equality.$same(primitiveCtor, null)) {
   return null;
  }
  return Class.$get(primitiveCtor);
 }
 /** @nodts */
 static $clinit() {
  Class.$clinit = () =>{};
  Class.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Class;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Overlay = goog.module.get('javaemul.internal.Constructor.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
Type.$markImplementor(Class);
Serializable.$markImplementor(Class);
$Util.$setClassMetadata(Class, 'java.lang.Class');

/* NATIVE.JS EPILOG */

const java_lang_Class = Class;

// Copyright 2017 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const Reflect = goog.require('goog.reflect');

/**
 * // TODO(b/79389970): change classConstructor to Function.
 * @param {Object} classConstructor
 * @param {number=} opt_dimensionCount
 * @return {Class}
 * @public
 */
Class.$get = function(classConstructor, opt_dimensionCount) {
  let dimensionCount = opt_dimensionCount || 0;
  return Reflect.cache(
      classConstructor.prototype, '$$class/' + dimensionCount, function() {
        return new Class(
            /** @type {Constructor} */ (classConstructor), dimensionCount);
      });
};


exports = Class;

//# sourceMappingURL=Class.js.map

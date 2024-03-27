goog.module('javaemul.internal.ThrowableUtils$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');

/**
 * @final
 */
class ThrowableUtils extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Throwable} */
 static m_getJavaThrowable__java_lang_Object__java_lang_Throwable(/** * */ e) {
  ThrowableUtils.$clinit();
  return /**@type {?}*/ (e).__java$exception;
 }
 // 
 // native static setJavaThrowable(/** * */ error, /** Throwable */ javaThrowable) 
 /** @nodts @return {!ThrowableUtils} */
 static $create__() {
  let $instance = new ThrowableUtils();
  $instance.$ctor__javaemul_internal_ThrowableUtils__void();
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_ThrowableUtils__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  ThrowableUtils.$clinit = () =>{};
  ThrowableUtils.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ThrowableUtils;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(ThrowableUtils, 'javaemul.internal.ThrowableUtils');

/* NATIVE.JS EPILOG */

const javaemul_internal_ThrowableUtils = ThrowableUtils;

// Copyright 2022 Google Inc.
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


/**
 * @param {*} error
 * @param {!Throwable} throwable
 * @public
 */
ThrowableUtils.setJavaThrowable = function(error, throwable) {
  if (error instanceof Object) {
    try {
      // This may throw exception (e.g. frozen object) in strict mode.
      error.__java$exception = throwable;
      // TODO(b/142882366): Pass get fn as JsFunction from Java instead.
      Object.defineProperties(error, {
        cause: {
          get: () => throwable.getCause() && throwable.getCause().backingJsObject
        },
        suppressed: {
          get: () => throwable.getSuppressed().map(t => t.backingJsObject)
        }
      });
    } catch (ignored) {}
  }
};


exports = ThrowableUtils;

//# sourceMappingURL=ThrowableUtils.js.map

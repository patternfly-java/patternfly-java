goog.module('javaemul.internal.ConsoleLogger$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');
let JsUtils = goog.forwardDeclare('javaemul.internal.JsUtils$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

class ConsoleLogger extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!ConsoleLogger} */
 static $create__() {
  ConsoleLogger.$clinit();
  let $instance = new ConsoleLogger();
  $instance.$ctor__javaemul_internal_ConsoleLogger__void();
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_ConsoleLogger__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {ConsoleLogger} */
 static m_createIfSupported__javaemul_internal_ConsoleLogger() {
  ConsoleLogger.$clinit();
  return j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(typeof(console), 'undefined') ? null : ConsoleLogger.$create__();
 }
 /** @nodts */
 m_log__java_lang_String__java_lang_String__void(/** ?string */ level, /** ?string */ message) {
  let logFn = /**@type {Function}*/ (JsUtils.getProperty(console, level));
  logFn.call(console, message);
 }
 /** @nodts */
 m_log__java_lang_String__java_lang_Throwable__void(/** ?string */ level, /** Throwable */ t) {
  this.m_log__java_lang_String__java_lang_Throwable__java_lang_String__boolean__void_$p_javaemul_internal_ConsoleLogger(level, t, 'Exception: ', true);
 }
 /** @nodts */
 m_log__java_lang_String__java_lang_Throwable__java_lang_String__boolean__void_$p_javaemul_internal_ConsoleLogger(/** ?string */ level, /** Throwable */ t, /** ?string */ label, /** boolean */ expanded) {
  this.m_groupStart__java_lang_String__boolean__void_$p_javaemul_internal_ConsoleLogger(j_l_String.m_valueOf__java_lang_Object__java_lang_String(label) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(t.toString()), expanded);
  this.m_log__java_lang_String__java_lang_String__void(level, ConsoleLogger.getBackingErrorStack(t));
  let cause = t.getCause();
  if (!$Equality.$same(cause, null)) {
   this.m_log__java_lang_String__java_lang_Throwable__java_lang_String__boolean__void_$p_javaemul_internal_ConsoleLogger(level, cause, 'Caused by: ', false);
  }
  for (let $array = t.getSuppressed(), $index = 0; $index < $array.length; $index++) {
   let suppressed = $array[$index];
   {
    this.m_log__java_lang_String__java_lang_Throwable__java_lang_String__boolean__void_$p_javaemul_internal_ConsoleLogger(level, suppressed, 'Suppressed: ', false);
   }
  }
  this.m_groupEnd__void_$p_javaemul_internal_ConsoleLogger();
 }
 /** @nodts */
 m_groupStart__java_lang_String__boolean__void_$p_javaemul_internal_ConsoleLogger(/** ?string */ msg, /** boolean */ expanded) {
  this.m_getGroupStartFn__boolean__javaemul_internal_ConsoleLogger_LogFn_$p_javaemul_internal_ConsoleLogger(expanded).call(console, msg);
 }
 /** @nodts @return {Function} */
 m_getGroupStartFn__boolean__javaemul_internal_ConsoleLogger_LogFn_$p_javaemul_internal_ConsoleLogger(/** boolean */ expanded) {
  if (!expanded && !$Equality.$same(console.groupCollapsed, null)) {
   return console.groupCollapsed;
  } else if (!$Equality.$same(console.group, null)) {
   return console.group;
  } else {
   return console.log;
  }
 }
 /** @nodts */
 m_groupEnd__void_$p_javaemul_internal_ConsoleLogger() {
  if (!$Equality.$same(console.groupEnd, null)) {
   console.groupEnd.call(console);
  }
 }
 // /** @return {?string} */
 // native static getBackingErrorStack(/** Throwable */ t) 
 /** @nodts */
 static $clinit() {
  ConsoleLogger.$clinit = () =>{};
  ConsoleLogger.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ConsoleLogger;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  JsUtils = goog.module.get('javaemul.internal.JsUtils$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
$Util.$setClassMetadata(ConsoleLogger, 'javaemul.internal.ConsoleLogger');

/* NATIVE.JS EPILOG */

const javaemul_internal_ConsoleLogger = ConsoleLogger;

/*
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

/**
 * @param {Throwable} t
 * @return {string}
 */
ConsoleLogger.getBackingErrorStack = function(t) {
  let backingError = /** @type {Error} */ (t.backingJsObject);
  return (backingError && backingError.stack) || "";
};


exports = ConsoleLogger;

//# sourceMappingURL=ConsoleLogger.js.map

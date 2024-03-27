goog.module('org.patternfly.showcase.Environment$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class Environment extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Environment} */
 static m_env__org_patternfly_showcase_Environment() {
  Environment.$clinit();
  return Environment.f_instance__org_patternfly_showcase_Environment_;
 }
 /** @nodts @return {!Environment} */
 static $create__() {
  let $instance = new Environment();
  $instance.$ctor__org_patternfly_showcase_Environment__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_Environment__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {?string} */
 m_base__java_lang_String() {
  return $Util.$getDefine('settings.base', '/');
 }
 /** @nodts */
 static $clinit() {
  Environment.$clinit = () =>{};
  Environment.$loadModules();
  j_l_Object.$clinit();
  Environment.f_instance__org_patternfly_showcase_Environment_ = Environment.$create__();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Environment;
 }
 
 /** @nodts */
 static $loadModules() {}
}
/**@type {Environment} @nodts*/
Environment.f_instance__org_patternfly_showcase_Environment_;
$Util.$setClassMetadata(Environment, 'org.patternfly.showcase.Environment');

/* NATIVE.JS EPILOG */

const org_patternfly_showcase_Environment = Environment;

/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
const settings = goog.require('settings');


exports = Environment;

//# sourceMappingURL=Environment.js.map

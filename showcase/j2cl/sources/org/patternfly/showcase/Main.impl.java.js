goog.module('org.patternfly.showcase.Main$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Environment = goog.forwardDeclare('org.patternfly.showcase.Environment$impl');
let Showcase = goog.forwardDeclare('org.patternfly.showcase.Showcase$impl');

class Main extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Main} */
 static $create__() {
  Main.$clinit();
  let $instance = new Main();
  $instance.$ctor__org_patternfly_showcase_Main__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_Main__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 m_onModuleLoad__void() {
  Showcase.m_init__java_lang_String__void(Environment.m_env__org_patternfly_showcase_Environment().m_base__java_lang_String());
  Showcase.m_start__void();
 }
 /** @nodts */
 static $clinit() {
  Main.$clinit = () =>{};
  Main.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Main;
 }
 
 /** @nodts */
 static $loadModules() {
  Environment = goog.module.get('org.patternfly.showcase.Environment$impl');
  Showcase = goog.module.get('org.patternfly.showcase.Showcase$impl');
 }
}
$Util.$setClassMetadata(Main, 'org.patternfly.showcase.Main');

/* NATIVE.JS EPILOG */

const org_patternfly_showcase_Main = Main;

setTimeout(function(){
var ep = Main.$create__();
    ep.m_onModuleLoad__void()
}, 0);


exports = Main;

//# sourceMappingURL=Main.js.map

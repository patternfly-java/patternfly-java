goog.module('org.jboss.elemento.Scheduler$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Callback = goog.forwardDeclare('org.jboss.elemento.Callback$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $$double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');

/**
 * @final
 */
class Scheduler extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Scheduler} */
 static $create__() {
  Scheduler.$clinit();
  let $instance = new Scheduler();
  $instance.$ctor__org_jboss_elemento_Scheduler__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_Scheduler__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {Callback} */
 static m_debounce__int__org_jboss_elemento_Callback__org_jboss_elemento_Callback(/** number */ timeout, /** Callback */ callback) {
  Scheduler.$clinit();
  let handle = /**@type {!Array<number>}*/ ($Arrays.$create([1], $$double));
  return Callback.$adapt(() =>{
   goog.global.clearTimeout(handle[0]);
   $Arrays.$set(handle, 0, $Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ __) =>{
    callback.m_call__void();
   }, timeout, []));
  });
 }
 /** @nodts */
 static $clinit() {
  Scheduler.$clinit = () =>{};
  Scheduler.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Scheduler;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Callback = goog.module.get('org.jboss.elemento.Callback$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $$double = goog.module.get('vmbootstrap.primitives.$double$impl');
 }
}
$Util.$setClassMetadata(Scheduler, 'org.jboss.elemento.Scheduler');

exports = Scheduler;

//# sourceMappingURL=Scheduler.js.map

goog.module('org.gwtproject.event.shared.testing.CountingEventBus.KeyedCounter$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template K
 */
class KeyedCounter extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<K, Integer>} @nodts*/
  this.f_counts__org_gwtproject_event_shared_testing_CountingEventBus_KeyedCounter_;
 }
 /** @nodts @template K @return {!KeyedCounter<K>} */
 static $create__() {
  KeyedCounter.$clinit();
  let $instance = new KeyedCounter();
  $instance.$ctor__org_gwtproject_event_shared_testing_CountingEventBus_KeyedCounter__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_gwtproject_event_shared_testing_CountingEventBus_KeyedCounter__void() {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_org_gwtproject_event_shared_testing_CountingEventBus_KeyedCounter();
 }
 /** @nodts @return {number} */
 m_getCount__java_lang_Object__int_$pp_org_gwtproject_event_shared_testing(/** K */ key) {
  let count = /**@type {Integer}*/ ($Casts.$to(this.f_counts__org_gwtproject_event_shared_testing_CountingEventBus_KeyedCounter_.get(key), Integer));
  return $Equality.$same(count, null) ? 0 : count.m_intValue__int();
 }
 /** @nodts */
 m_decrement__java_lang_Object__void_$pp_org_gwtproject_event_shared_testing(/** K */ key) {
  this.f_counts__org_gwtproject_event_shared_testing_CountingEventBus_KeyedCounter_.put(key, Integer.m_valueOf__int__java_lang_Integer(this.m_getCount__java_lang_Object__int_$pp_org_gwtproject_event_shared_testing(key) - 1 | 0));
 }
 /** @nodts */
 m_increment__java_lang_Object__void_$pp_org_gwtproject_event_shared_testing(/** K */ key) {
  this.f_counts__org_gwtproject_event_shared_testing_CountingEventBus_KeyedCounter_.put(key, Integer.m_valueOf__int__java_lang_Integer(this.m_getCount__java_lang_Object__int_$pp_org_gwtproject_event_shared_testing(key) + 1 | 0));
 }
 /** @private @nodts */
 $init__void_$p_org_gwtproject_event_shared_testing_CountingEventBus_KeyedCounter() {
  this.f_counts__org_gwtproject_event_shared_testing_CountingEventBus_KeyedCounter_ = /**@type {!HashMap<K, Integer>}*/ (HashMap.$create__());
 }
 /** @nodts */
 static $clinit() {
  KeyedCounter.$clinit = () =>{};
  KeyedCounter.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof KeyedCounter;
 }
 
 /** @nodts */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(KeyedCounter, 'org.gwtproject.event.shared.testing.CountingEventBus$KeyedCounter');

exports = KeyedCounter;

//# sourceMappingURL=CountingEventBus$KeyedCounter.js.map

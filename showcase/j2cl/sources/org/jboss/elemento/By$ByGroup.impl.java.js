goog.module('org.jboss.elemento.By.ByGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const By = goog.require('org.jboss.elemento.By$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ByGroup extends By {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Array<By>} @nodts*/
  this.f_selectors__org_jboss_elemento_By_ByGroup_;
 }
 /** @nodts @return {!ByGroup} */
 static $create__arrayOf_org_jboss_elemento_By(/** Array<By> */ selectors) {
  ByGroup.$clinit();
  let $instance = new ByGroup();
  $instance.$ctor__org_jboss_elemento_By_ByGroup__arrayOf_org_jboss_elemento_By__void(selectors);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_By_ByGroup__arrayOf_org_jboss_elemento_By__void(/** Array<By> */ selectors) {
  this.$ctor__org_jboss_elemento_By__void();
  this.f_selectors__org_jboss_elemento_By_ByGroup_ = selectors;
 }
 /** @override @nodts @return {?string} */
 m_selector__java_lang_String_$pp_org_jboss_elemento() {
  return /**@type {?string}*/ ($Casts.$to(/**@type {Stream<?string>}*/ (/**@type {Stream<By>}*/ (Arrays.m_stream__arrayOf_java_lang_Object__java_util_stream_Stream(this.f_selectors__org_jboss_elemento_By_ByGroup_)).m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt((arg0) =>{
   let arg0_1 = /**@type {By}*/ ($Casts.$to(arg0, By));
   return arg0_1.m_selector__java_lang_String_$pp_org_jboss_elemento();
  }))).m_collect__java_util_stream_Collector__java_lang_Object(Collectors.m_joining__java_lang_CharSequence__java_util_stream_Collector(', ')), j_l_String));
 }
 /** @nodts */
 static $clinit() {
  ByGroup.$clinit = () =>{};
  ByGroup.$loadModules();
  By.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ByGroup;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ByGroup, 'org.jboss.elemento.By$ByGroup');

exports = ByGroup;

//# sourceMappingURL=By$ByGroup.js.map

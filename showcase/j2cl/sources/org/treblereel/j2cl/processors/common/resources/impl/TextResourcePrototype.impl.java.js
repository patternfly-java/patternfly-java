goog.module('org.treblereel.j2cl.processors.common.resources.impl.TextResourcePrototype$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TextResource = goog.require('org.treblereel.j2cl.processors.common.resources.TextResource$impl');

let ScriptInjector = goog.forwardDeclare('org.treblereel.j2cl.processors.common.injectors.ScriptInjector$impl');
let StyleInjector = goog.forwardDeclare('org.treblereel.j2cl.processors.common.injectors.StyleInjector$impl');

/**
 * @abstract
 * @implements {TextResource}
 */
class TextResourcePrototype extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {boolean} @nodts*/
  this.f_isInjected__org_treblereel_j2cl_processors_common_resources_impl_TextResourcePrototype = false;
 }
 /** @nodts */
 $ctor__org_treblereel_j2cl_processors_common_resources_impl_TextResourcePrototype__void() {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_org_treblereel_j2cl_processors_common_resources_impl_TextResourcePrototype();
 }
 /** @override @nodts */
 m_insureInjectedAsScript__void() {
  if (!this.f_isInjected__org_treblereel_j2cl_processors_common_resources_impl_TextResourcePrototype) {
   this.f_isInjected__org_treblereel_j2cl_processors_common_resources_impl_TextResourcePrototype = true;
   ScriptInjector.m_fromString__java_lang_String__org_treblereel_j2cl_processors_common_injectors_ScriptInjector(this.m_getText__java_lang_String()).m_inject__void();
  }
 }
 /** @override @nodts */
 m_insureInjectedAsStyle__void() {
  if (!this.f_isInjected__org_treblereel_j2cl_processors_common_resources_impl_TextResourcePrototype) {
   this.f_isInjected__org_treblereel_j2cl_processors_common_resources_impl_TextResourcePrototype = true;
   StyleInjector.m_fromString__java_lang_String__org_treblereel_j2cl_processors_common_injectors_StyleInjector(this.m_getText__java_lang_String()).m_inject__void();
  }
 }
 /** @private @nodts */
 $init__void_$p_org_treblereel_j2cl_processors_common_resources_impl_TextResourcePrototype() {
  this.f_isInjected__org_treblereel_j2cl_processors_common_resources_impl_TextResourcePrototype = false;
 }
 /** @nodts */
 static $clinit() {
  TextResourcePrototype.$clinit = () =>{};
  TextResourcePrototype.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextResourcePrototype;
 }
 /** @abstract @override @nodts @return {?string} */
 m_getName__java_lang_String() {}
 /** @abstract @override @nodts @return {?string} */
 m_getText__java_lang_String() {}
 
 /** @nodts */
 static $loadModules() {
  ScriptInjector = goog.module.get('org.treblereel.j2cl.processors.common.injectors.ScriptInjector$impl');
  StyleInjector = goog.module.get('org.treblereel.j2cl.processors.common.injectors.StyleInjector$impl');
 }
}
TextResource.$markImplementor(TextResourcePrototype);
$Util.$setClassMetadata(TextResourcePrototype, 'org.treblereel.j2cl.processors.common.resources.impl.TextResourcePrototype');

exports = TextResourcePrototype;

//# sourceMappingURL=TextResourcePrototype.js.map

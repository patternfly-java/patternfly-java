goog.module('org.jboss.elemento.router.Base$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/**
 * @final
 */
class Base extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_base__org_jboss_elemento_router_Base;
  /**@type {?string} @nodts*/
  this.f_slashBase__org_jboss_elemento_router_Base_;
  /**@type {boolean} @nodts*/
  this.f_empty__org_jboss_elemento_router_Base_ = false;
 }
 /** @nodts @return {!Base} */
 static $create__java_lang_String(/** ?string */ base) {
  Base.$clinit();
  let $instance = new Base();
  $instance.$ctor__org_jboss_elemento_router_Base__java_lang_String__void(base);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_router_Base__java_lang_String__void(/** ?string */ base) {
  this.$ctor__java_lang_Object__void();
  this.f_base__org_jboss_elemento_router_Base = $Equality.$same(base, null) || j_l_String.m_isEmpty__java_lang_String__boolean(base) ? '' : j_l_String.m_startsWith__java_lang_String__java_lang_String__boolean(base, '/') ? j_l_String.m_substring__java_lang_String__int__java_lang_String(base, 1) : base;
  this.f_slashBase__org_jboss_elemento_router_Base_ = '/' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_base__org_jboss_elemento_router_Base);
  this.f_empty__org_jboss_elemento_router_Base_ = j_l_String.m_isEmpty__java_lang_String__boolean(this.f_base__org_jboss_elemento_router_Base);
 }
 /** @nodts @return {?string} */
 m_relative__java_lang_String__java_lang_String_$pp_org_jboss_elemento_router(/** ?string */ path) {
  if (!this.f_empty__org_jboss_elemento_router_Base_ && !$Equality.$same(path, null) && j_l_String.m_startsWith__java_lang_String__java_lang_String__boolean(path, this.f_slashBase__org_jboss_elemento_router_Base_)) {
   let relative = j_l_String.m_substring__java_lang_String__int__java_lang_String(path, j_l_String.m_length__java_lang_String__int(this.f_slashBase__org_jboss_elemento_router_Base_));
   return j_l_String.m_isEmpty__java_lang_String__boolean(relative) ? '/' : relative;
  }
  return path;
 }
 /** @nodts @return {?string} */
 m_absolute__java_lang_String__java_lang_String_$pp_org_jboss_elemento_router(/** ?string */ path) {
  if (!this.f_empty__org_jboss_elemento_router_Base_ && !$Equality.$same(path, null)) {
   let safePath = j_l_String.m_startsWith__java_lang_String__java_lang_String__boolean(path, '/') ? path : '/' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(path);
   return j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_slashBase__org_jboss_elemento_router_Base_) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(safePath);
  }
  return path;
 }
 /** @nodts */
 static $clinit() {
  Base.$clinit = () =>{};
  Base.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Base;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
$Util.$setClassMetadata(Base, 'org.jboss.elemento.router.Base');

exports = Base;

//# sourceMappingURL=Base.js.map

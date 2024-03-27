goog.module('org.patternfly.popper.PopperImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const org_patternfly_popper_Popper = goog.require('org.patternfly.popper.Popper$impl');

let OpacityUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.OpacityUnionType.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Callback = goog.forwardDeclare('org.jboss.elemento.Callback$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let Modifier_$Overlay = goog.forwardDeclare('org.patternfly.popper.Modifier.$Overlay$impl');
let State_$Overlay = goog.forwardDeclare('org.patternfly.popper.State.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {org_patternfly_popper_Popper}
 */
class PopperImpl extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Popper} @nodts*/
  this.f_popper__org_patternfly_popper_PopperImpl_;
  /**@type {List<HandlerRegistration>} @nodts*/
  this.f_handlerRegistrations__org_patternfly_popper_PopperImpl_;
  /**@type {number} @nodts*/
  this.f_animationDuration__org_patternfly_popper_PopperImpl_ = 0;
  /**@type {number} @nodts*/
  this.f_entryDelay__org_patternfly_popper_PopperImpl_ = 0;
  /**@type {number} @nodts*/
  this.f_exitDelay__org_patternfly_popper_PopperImpl_ = 0;
  /**@type {number} @nodts*/
  this.f_transitionTimer__org_patternfly_popper_PopperImpl_ = 0;
  /**@type {number} @nodts*/
  this.f_exitTimer__org_patternfly_popper_PopperImpl_ = 0;
  /**@type {number} @nodts*/
  this.f_entryTimer__org_patternfly_popper_PopperImpl_ = 0;
 }
 /** @nodts @return {!PopperImpl} */
 static $create__org_patternfly_popper_PopperJs__java_util_List__int__int__int(/** Popper */ popper, /** List<HandlerRegistration> */ handlerRegistrations, /** number */ animationDuration, /** number */ entryDelay, /** number */ exitDelay) {
  PopperImpl.$clinit();
  let $instance = new PopperImpl();
  $instance.$ctor__org_patternfly_popper_PopperImpl__org_patternfly_popper_PopperJs__java_util_List__int__int__int__void(popper, handlerRegistrations, animationDuration, entryDelay, exitDelay);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_popper_PopperImpl__org_patternfly_popper_PopperJs__java_util_List__int__int__int__void(/** Popper */ popper, /** List<HandlerRegistration> */ handlerRegistrations, /** number */ animationDuration, /** number */ entryDelay, /** number */ exitDelay) {
  this.$ctor__java_lang_Object__void();
  this.f_popper__org_patternfly_popper_PopperImpl_ = popper;
  this.f_handlerRegistrations__org_patternfly_popper_PopperImpl_ = handlerRegistrations;
  this.f_animationDuration__org_patternfly_popper_PopperImpl_ = animationDuration;
  this.f_entryDelay__org_patternfly_popper_PopperImpl_ = entryDelay;
  this.f_exitDelay__org_patternfly_popper_PopperImpl_ = exitDelay;
 }
 /** @override @nodts @return {Promise<Object>} */
 m_update__elemental2_promise_Promise() {
  return this.f_popper__org_patternfly_popper_PopperImpl_.update();
 }
 /** @override @nodts */
 m_show__org_jboss_elemento_Callback__void(/** Callback */ visible) {
  if (this.f_animationDuration__org_patternfly_popper_PopperImpl_ != org_patternfly_popper_Popper.f_UNDEFINED__org_patternfly_popper_Popper) {
   goog.global.clearTimeout(this.f_transitionTimer__org_patternfly_popper_PopperImpl_);
  }
  if (this.f_exitDelay__org_patternfly_popper_PopperImpl_ != org_patternfly_popper_Popper.f_UNDEFINED__org_patternfly_popper_Popper) {
   goog.global.clearTimeout(this.f_exitTimer__org_patternfly_popper_PopperImpl_);
  }
  if (this.f_entryDelay__org_patternfly_popper_PopperImpl_ == org_patternfly_popper_Popper.f_UNDEFINED__org_patternfly_popper_Popper) {
   this.m_internalShow__org_jboss_elemento_Callback__void_$p_org_patternfly_popper_PopperImpl(visible);
  } else {
   this.f_entryTimer__org_patternfly_popper_PopperImpl_ = DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ __) =>{
    this.m_internalShow__org_jboss_elemento_Callback__void_$p_org_patternfly_popper_PopperImpl(visible);
   }, this.f_entryDelay__org_patternfly_popper_PopperImpl_, []);
  }
 }
 /** @override @nodts */
 m_hide__org_jboss_elemento_Callback__void(/** Callback */ hidden) {
  if (this.f_entryDelay__org_patternfly_popper_PopperImpl_ != org_patternfly_popper_Popper.f_UNDEFINED__org_patternfly_popper_Popper) {
   goog.global.clearTimeout(this.f_entryTimer__org_patternfly_popper_PopperImpl_);
  }
  if (this.f_exitDelay__org_patternfly_popper_PopperImpl_ == org_patternfly_popper_Popper.f_UNDEFINED__org_patternfly_popper_Popper) {
   if (this.f_animationDuration__org_patternfly_popper_PopperImpl_ == org_patternfly_popper_Popper.f_UNDEFINED__org_patternfly_popper_Popper) {
    this.m_internalHide__org_jboss_elemento_Callback__void_$p_org_patternfly_popper_PopperImpl(hidden);
   } else {
    this.f_popper__org_patternfly_popper_PopperImpl_.state.elements.popper.style.opacity = OpacityUnionType_$Overlay.m_of__java_lang_Object__elemental2_dom_CSSProperties_OpacityUnionType(Integer.m_valueOf__int__java_lang_Integer(0));
    this.f_transitionTimer__org_patternfly_popper_PopperImpl_ = DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ __) =>{
     this.m_internalHide__org_jboss_elemento_Callback__void_$p_org_patternfly_popper_PopperImpl(hidden);
    }, this.f_animationDuration__org_patternfly_popper_PopperImpl_, []);
   }
  } else {
   this.f_exitTimer__org_patternfly_popper_PopperImpl_ = DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ t0) =>{
    if (this.f_animationDuration__org_patternfly_popper_PopperImpl_ == org_patternfly_popper_Popper.f_UNDEFINED__org_patternfly_popper_Popper) {
     this.m_internalHide__org_jboss_elemento_Callback__void_$p_org_patternfly_popper_PopperImpl(hidden);
    } else {
     this.f_transitionTimer__org_patternfly_popper_PopperImpl_ = DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ t1) =>{
      this.m_internalHide__org_jboss_elemento_Callback__void_$p_org_patternfly_popper_PopperImpl(hidden);
     }, this.f_animationDuration__org_patternfly_popper_PopperImpl_, []);
    }
   }, this.f_exitDelay__org_patternfly_popper_PopperImpl_, []);
  }
 }
 /** @override @nodts */
 m_cleanup__void() {
  for (let $iterator = this.f_handlerRegistrations__org_patternfly_popper_PopperImpl_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let handlerRegistration = /**@type {HandlerRegistration}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), HandlerRegistration));
   {
    handlerRegistration.m_removeHandler__void();
   }
  }
  this.f_popper__org_patternfly_popper_PopperImpl_.destroy();
 }
 /** @nodts */
 m_internalShow__org_jboss_elemento_Callback__void_$p_org_patternfly_popper_PopperImpl(/** Callback */ visible) {
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.f_popper__org_patternfly_popper_PopperImpl_.state.elements.popper, true);
  this.m_toggleEvenListeners__boolean__void_$p_org_patternfly_popper_PopperImpl(true);
  this.f_popper__org_patternfly_popper_PopperImpl_.update().then((__) =>{
   let ___1 = /**@type {Object}*/ ($Casts.$to(__, State_$Overlay));
   if (this.f_animationDuration__org_patternfly_popper_PopperImpl_ != org_patternfly_popper_Popper.f_UNDEFINED__org_patternfly_popper_Popper) {
    this.f_popper__org_patternfly_popper_PopperImpl_.state.elements.popper.style.opacity = OpacityUnionType_$Overlay.m_of__java_lang_Object__elemental2_dom_CSSProperties_OpacityUnionType(Integer.m_valueOf__int__java_lang_Integer(1));
   }
   if (!$Equality.$same(visible, null)) {
    visible.m_call__void();
   }
   return null;
  });
 }
 /** @nodts */
 m_internalHide__org_jboss_elemento_Callback__void_$p_org_patternfly_popper_PopperImpl(/** Callback */ hidden) {
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.f_popper__org_patternfly_popper_PopperImpl_.state.elements.popper, false);
  this.m_toggleEvenListeners__boolean__void_$p_org_patternfly_popper_PopperImpl(false);
  if (!$Equality.$same(hidden, null)) {
   hidden.m_call__void();
  }
 }
 /** @nodts */
 m_toggleEvenListeners__boolean__void_$p_org_patternfly_popper_PopperImpl(/** boolean */ onOff) {
  this.f_popper__org_patternfly_popper_PopperImpl_.setOptions((/** Object */ existingOptions) =>{
   let updatedModifiers = /**@type {!Array<Object>}*/ (new Array());
   for (let i = 0; i < existingOptions.modifiers.length; i = i + 1 | 0) {
    let modifier = /**@type {Object}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int__java_lang_Object(existingOptions.modifiers, i), Modifier_$Overlay));
    if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(modifier.name, 'eventListeners')) {
     modifier.enabled = onOff;
    }
    updatedModifiers.push(modifier);
   }
   let updateOptions = new Object();
   updateOptions.placement = existingOptions.placement;
   updateOptions.strategy = existingOptions.strategy;
   updateOptions.onFirstUpdate = existingOptions.onFirstUpdate;
   updateOptions.modifiers = updatedModifiers;
   return updateOptions;
  });
 }
 /** @nodts */
 static $clinit() {
  PopperImpl.$clinit = () =>{};
  PopperImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PopperImpl;
 }
 
 /** @nodts */
 static $loadModules() {
  OpacityUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.OpacityUnionType.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  JsArrayLike_$Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  HandlerRegistration = goog.module.get('org.gwtproject.event.shared.HandlerRegistration$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  Modifier_$Overlay = goog.module.get('org.patternfly.popper.Modifier.$Overlay$impl');
  State_$Overlay = goog.module.get('org.patternfly.popper.State.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
org_patternfly_popper_Popper.$markImplementor(PopperImpl);
$Util.$setClassMetadata(PopperImpl, 'org.patternfly.popper.PopperImpl');

exports = PopperImpl;

//# sourceMappingURL=PopperImpl.js.map

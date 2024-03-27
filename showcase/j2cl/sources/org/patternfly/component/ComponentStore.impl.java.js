goog.module('org.patternfly.component.ComponentStore$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ClassCastException = goog.forwardDeclare('java.lang.ClassCastException$impl');
let Exception = goog.forwardDeclare('java.lang.Exception$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ObserverCallback = goog.forwardDeclare('org.jboss.elemento.ObserverCallback$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let BaseComponent = goog.forwardDeclare('org.patternfly.component.BaseComponent$impl');
let BaseComponentFlat = goog.forwardDeclare('org.patternfly.component.BaseComponentFlat$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let SubComponent = goog.forwardDeclare('org.patternfly.component.SubComponent$impl');
let Logger = goog.forwardDeclare('org.patternfly.core.Logger$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @final
 */
class ComponentStore extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!ComponentStore} */
 static $create__() {
  ComponentStore.$clinit();
  let $instance = new ComponentStore();
  $instance.$ctor__org_patternfly_component_ComponentStore__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_ComponentStore__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @template E, B */
 static m_storeComponent__org_patternfly_component_BaseComponent__void(/** BaseComponent<E, B> */ component) {
  ComponentStore.$clinit();
  let uuid = Id.m_uuid__java_lang_String();
  ComponentStore.f_components__org_patternfly_component_ComponentStore_.put(uuid, component);
  $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(/**@type {!HTMLElement}*/ (component.m_element__elemental2_dom_HTMLElement()).dataset, ComponentStore.m_key__org_patternfly_component_ComponentType__java_lang_String(component.m_componentType__org_patternfly_component_ComponentType()), uuid);
  Elements.m_onDetach__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback__void(/**@type {HTMLElement}*/ (component.m_element__elemental2_dom_HTMLElement()), ObserverCallback.$adapt((/** MutationRecord */ __) =>{
   ComponentStore.m_remove__java_lang_String__void(uuid);
  }));
  Logger.m_debug__java_lang_String__java_lang_String__void(ComponentStore.f_CATEGORY__org_patternfly_component_ComponentStore_, 'Store component ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(component.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType) + ' as ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(uuid) + ' on ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Elements.m_toString__elemental2_dom_Element__java_lang_String(/**@type {Element}*/ (component.m_element__elemental2_dom_HTMLElement()))) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(ComponentStore.m_count__java_lang_String()));
 }
 /** @nodts @template E, B */
 static m_storeFlatComponent__org_patternfly_component_BaseComponentFlat__void(/** BaseComponentFlat<E, B> */ component) {
  ComponentStore.$clinit();
  let uuid = Id.m_uuid__java_lang_String();
  ComponentStore.f_flatComponents__org_patternfly_component_ComponentStore_.put(uuid, component);
  $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(/**@type {!HTMLElement}*/ (component.m_element__elemental2_dom_HTMLElement()).dataset, ComponentStore.m_key__org_patternfly_component_ComponentType__java_lang_String(component.m_componentType__org_patternfly_component_ComponentType()), uuid);
  Elements.m_onDetach__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback__void(/**@type {HTMLElement}*/ (component.m_element__elemental2_dom_HTMLElement()), ObserverCallback.$adapt((/** MutationRecord */ __) =>{
   ComponentStore.m_remove__java_lang_String__void(uuid);
  }));
  Logger.m_debug__java_lang_String__java_lang_String__void(ComponentStore.f_CATEGORY__org_patternfly_component_ComponentStore_, 'Store flat component ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(component.m_componentType__org_patternfly_component_ComponentType().f_componentName__org_patternfly_component_ComponentType) + ' as ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(uuid) + ' on ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Elements.m_toString__elemental2_dom_Element__java_lang_String(/**@type {Element}*/ (component.m_element__elemental2_dom_HTMLElement()))) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(ComponentStore.m_count__java_lang_String()));
 }
 /** @nodts @template E, B */
 static m_storeSubComponent__org_patternfly_component_SubComponent__void(/** SubComponent<E, B> */ subComponent) {
  ComponentStore.$clinit();
  let uuid = Id.m_uuid__java_lang_String();
  ComponentStore.f_subComponents__org_patternfly_component_ComponentStore_.put(uuid, subComponent);
  $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(/**@type {!HTMLElement}*/ (subComponent.m_element__elemental2_dom_HTMLElement()).dataset, ComponentStore.m_key__org_patternfly_component_ComponentType__java_lang_String__java_lang_String(subComponent.f_componentType__org_patternfly_component_SubComponent, subComponent.f_name__org_patternfly_component_SubComponent), uuid);
  Elements.m_onDetach__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback__void(/**@type {HTMLElement}*/ (subComponent.m_element__elemental2_dom_HTMLElement()), ObserverCallback.$adapt((/** MutationRecord */ mr) =>{
   ComponentStore.m_remove__java_lang_String__void(uuid);
  }));
  Logger.m_debug__java_lang_String__java_lang_String__void(ComponentStore.f_CATEGORY__org_patternfly_component_ComponentStore_, 'Store subcomponent ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(subComponent.f_componentType__org_patternfly_component_SubComponent.f_componentName__org_patternfly_component_ComponentType) + '/' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(subComponent.f_name__org_patternfly_component_SubComponent) + ' as ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(uuid) + ' on ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Elements.m_toString__elemental2_dom_Element__java_lang_String(/**@type {Element}*/ (subComponent.m_element__elemental2_dom_HTMLElement()))) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(ComponentStore.m_count__java_lang_String()));
 }
 /** @nodts @template C, E, B @return {C} */
 static m_lookupComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__boolean__org_patternfly_component_BaseComponent(/** ComponentType */ componentType, /** HTMLElement */ element, /** boolean */ lenient) {
  ComponentStore.$clinit();
  let component = null;
  let key = ComponentStore.m_key__org_patternfly_component_ComponentType__java_lang_String(componentType);
  let selector = By.m_data__java_lang_String__org_jboss_elemento_By(key);
  let closest = Elements.m_closest__elemental2_dom_Element__org_jboss_elemento_By__elemental2_dom_HTMLElement(element, selector);
  if (!$Equality.$same(closest, null)) {
   let uuid = /**@type {?string}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(closest.dataset, key), j_l_String));
   if (!$Equality.$same(uuid, null)) {
    try {
     component = /**@type {C}*/ ($Casts.$to(ComponentStore.f_components__org_patternfly_component_ComponentStore_.get(uuid), BaseComponent));
    } catch (__$exc) {
     __$exc = $Exceptions.toJava(__$exc);
     if (ClassCastException.$isInstance(__$exc)) {
      let e = /**@type {ClassCastException}*/ (__$exc);
      if (!lenient) {
       Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(ComponentStore.f_CATEGORY__org_patternfly_component_ComponentStore_, closest, 'Cannot cast component to ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(componentType.f_componentName__org_patternfly_component_ComponentType));
      }
     } else {
      throw $Exceptions.toJs(__$exc);
     }
    }
   } else {
    if (!lenient) {
     Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(ComponentStore.f_CATEGORY__org_patternfly_component_ComponentStore_, closest, 'No UUID found on component element');
    }
   }
  } else {
   if (!lenient) {
    Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(ComponentStore.f_CATEGORY__org_patternfly_component_ComponentStore_, element, 'Unable to find element of component using ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(selector));
   }
  }
  return component;
 }
 /** @nodts @template C, E, B @return {C} */
 static m_lookupFlatComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__boolean__org_patternfly_component_BaseComponentFlat(/** ComponentType */ componentType, /** HTMLElement */ element, /** boolean */ lenient) {
  ComponentStore.$clinit();
  let component = null;
  let key = ComponentStore.m_key__org_patternfly_component_ComponentType__java_lang_String(componentType);
  let selector = By.m_data__java_lang_String__org_jboss_elemento_By(key);
  let closest = Elements.m_closest__elemental2_dom_Element__org_jboss_elemento_By__elemental2_dom_HTMLElement(element, selector);
  if (!$Equality.$same(closest, null)) {
   let uuid = /**@type {?string}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(closest.dataset, key), j_l_String));
   if (!$Equality.$same(uuid, null)) {
    try {
     component = /**@type {C}*/ ($Casts.$to(ComponentStore.f_flatComponents__org_patternfly_component_ComponentStore_.get(uuid), BaseComponentFlat));
    } catch (__$exc) {
     __$exc = $Exceptions.toJava(__$exc);
     if (ClassCastException.$isInstance(__$exc)) {
      let e = /**@type {ClassCastException}*/ (__$exc);
      if (!lenient) {
       Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(ComponentStore.f_CATEGORY__org_patternfly_component_ComponentStore_, closest, 'Cannot cast component to ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(componentType.f_componentName__org_patternfly_component_ComponentType));
      }
     } else {
      throw $Exceptions.toJs(__$exc);
     }
    }
   } else {
    if (!lenient) {
     Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(ComponentStore.f_CATEGORY__org_patternfly_component_ComponentStore_, closest, 'No UUID found on component element');
    }
   }
  } else {
   if (!lenient) {
    Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(ComponentStore.f_CATEGORY__org_patternfly_component_ComponentStore_, element, 'Unable to find element of component using ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(selector));
   }
  }
  return component;
 }
 /** @nodts @template S, E, B @return {S} */
 static m_lookupSubComponent__org_patternfly_component_ComponentType__java_lang_String__elemental2_dom_HTMLElement__boolean__org_patternfly_component_SubComponent(/** ComponentType */ componentType, /** ?string */ name, /** HTMLElement */ element, /** boolean */ lenient) {
  ComponentStore.$clinit();
  let subComponent = null;
  let key = ComponentStore.m_key__org_patternfly_component_ComponentType__java_lang_String__java_lang_String(componentType, name);
  let selector = By.m_data__java_lang_String__org_jboss_elemento_By(key);
  let closest = Elements.m_closest__elemental2_dom_Element__org_jboss_elemento_By__elemental2_dom_HTMLElement(element, selector);
  if (!$Equality.$same(closest, null)) {
   let uuid = /**@type {?string}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(closest.dataset, key), j_l_String));
   if (!$Equality.$same(uuid, null)) {
    try {
     subComponent = /**@type {S}*/ ($Casts.$to(ComponentStore.f_subComponents__org_patternfly_component_ComponentStore_.get(uuid), SubComponent));
    } catch (__$exc) {
     __$exc = $Exceptions.toJava(__$exc);
     if (Exception.$isInstance(__$exc)) {
      let e = /**@type {Exception}*/ (__$exc);
      if (!lenient) {
       Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(ComponentStore.f_CATEGORY__org_patternfly_component_ComponentStore_, closest, 'Cannot cast subcomponent to ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(componentType.f_componentName__org_patternfly_component_ComponentType) + '/' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(name));
      }
     } else {
      throw $Exceptions.toJs(__$exc);
     }
    }
   } else {
    if (!lenient) {
     Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(ComponentStore.f_CATEGORY__org_patternfly_component_ComponentStore_, closest, 'No UUID found on subcomponent element');
    }
   }
  } else {
   if (!lenient) {
    Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(ComponentStore.f_CATEGORY__org_patternfly_component_ComponentStore_, element, 'Unable to find element of subcomponent using ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(selector));
   }
  }
  return subComponent;
 }
 /** @nodts @return {?string} */
 static m_key__org_patternfly_component_ComponentType__java_lang_String(/** ComponentType */ componentType) {
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(ComponentStore.f_KEY_PREFIX__org_patternfly_component_ComponentStore_) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(componentType.f_id__org_patternfly_component_ComponentType);
 }
 /** @nodts @return {?string} */
 static m_key__org_patternfly_component_ComponentType__java_lang_String__java_lang_String(/** ComponentType */ componentType, /** ?string */ name) {
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(ComponentStore.f_KEY_PREFIX__org_patternfly_component_ComponentStore_) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(componentType.f_id__org_patternfly_component_ComponentType) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(name);
 }
 /** @nodts */
 static m_remove__java_lang_String__void(/** ?string */ uuid) {
  let c = /**@type {BaseComponent<HTMLElement, TypedBuilder>}*/ ($Casts.$to(ComponentStore.f_components__org_patternfly_component_ComponentStore_.remove(uuid), BaseComponent));
  let cf = /**@type {BaseComponentFlat<HTMLElement, TypedBuilder>}*/ ($Casts.$to(ComponentStore.f_flatComponents__org_patternfly_component_ComponentStore_.remove(uuid), BaseComponentFlat));
  let s = /**@type {SubComponent<HTMLElement, TypedBuilder>}*/ ($Casts.$to(ComponentStore.f_subComponents__org_patternfly_component_ComponentStore_.remove(uuid), SubComponent));
  if (!$Equality.$same(c, null) || !$Equality.$same(cf, null)) {
   Logger.m_debug__java_lang_String__java_lang_String__void(ComponentStore.f_CATEGORY__org_patternfly_component_ComponentStore_, 'Remove component for ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(uuid) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(ComponentStore.m_count__java_lang_String()));
  } else if (!$Equality.$same(s, null)) {
   Logger.m_debug__java_lang_String__java_lang_String__void(ComponentStore.f_CATEGORY__org_patternfly_component_ComponentStore_, 'Remove subcomponent for ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(uuid) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(ComponentStore.m_count__java_lang_String()));
  } else {
   Logger.m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(ComponentStore.f_CATEGORY__org_patternfly_component_ComponentStore_, null, 'Unable to remove (sub)component for ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(uuid));
  }
 }
 /** @nodts @return {?string} */
 static m_count__java_lang_String() {
  return ' (' + ComponentStore.f_components__org_patternfly_component_ComponentStore_.size() + '/' + ComponentStore.f_flatComponents__org_patternfly_component_ComponentStore_.size() + '/' + ComponentStore.f_subComponents__org_patternfly_component_ComponentStore_.size() + ')';
 }
 /** @nodts */
 static $clinit() {
  ComponentStore.$clinit = () =>{};
  ComponentStore.$loadModules();
  j_l_Object.$clinit();
  ComponentStore.f_components__org_patternfly_component_ComponentStore_ = /**@type {!HashMap<?string, BaseComponent<?, ?>>}*/ (HashMap.$create__());
  ComponentStore.f_flatComponents__org_patternfly_component_ComponentStore_ = /**@type {!HashMap<?string, BaseComponentFlat<?, ?>>}*/ (HashMap.$create__());
  ComponentStore.f_subComponents__org_patternfly_component_ComponentStore_ = /**@type {!HashMap<?string, SubComponent<?, ?>>}*/ (HashMap.$create__());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ComponentStore;
 }
 
 /** @nodts */
 static $loadModules() {
  ClassCastException = goog.module.get('java.lang.ClassCastException$impl');
  Exception = goog.module.get('java.lang.Exception$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ObserverCallback = goog.module.get('org.jboss.elemento.ObserverCallback$impl');
  BaseComponent = goog.module.get('org.patternfly.component.BaseComponent$impl');
  BaseComponentFlat = goog.module.get('org.patternfly.component.BaseComponentFlat$impl');
  SubComponent = goog.module.get('org.patternfly.component.SubComponent$impl');
  Logger = goog.module.get('org.patternfly.core.Logger$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
/**@const {string} @nodts*/
ComponentStore.f_KEY_PREFIX__org_patternfly_component_ComponentStore_ = 'pfcs';
/**@const {string} @nodts*/
ComponentStore.f_CATEGORY__org_patternfly_component_ComponentStore_ = 'ComponentStore';
/**@type {Map<?string, BaseComponent<?, ?>>} @nodts*/
ComponentStore.f_components__org_patternfly_component_ComponentStore_;
/**@type {Map<?string, BaseComponentFlat<?, ?>>} @nodts*/
ComponentStore.f_flatComponents__org_patternfly_component_ComponentStore_;
/**@type {Map<?string, SubComponent<?, ?>>} @nodts*/
ComponentStore.f_subComponents__org_patternfly_component_ComponentStore_;
$Util.$setClassMetadata(ComponentStore, 'org.patternfly.component.ComponentStore');

exports = ComponentStore;

//# sourceMappingURL=ComponentStore.js.map

goog.module('org.patternfly.dataprovider.ItemDisplay$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template E, T
 */
class ItemDisplay extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {j_u_function_Function<T, ?string>} @nodts*/
  this.f_identifier__org_patternfly_dataprovider_ItemDisplay;
  /**@type {j_u_function_Function<T, ?string>} @nodts*/
  this.f_asString__org_patternfly_dataprovider_ItemDisplay;
  /**@type {BiConsumer<HTMLContainerBuilder<E>, T>} @nodts*/
  this.f_display__org_patternfly_dataprovider_ItemDisplay;
 }
 //Factory method corresponding to constructor 'ItemDisplay()'.
 /** @nodts @template E, T @return {!ItemDisplay<E, T>} */
 static $create__() {
  ItemDisplay.$clinit();
  let $instance = new ItemDisplay();
  $instance.$ctor__org_patternfly_dataprovider_ItemDisplay__void();
  return $instance;
 }
 //Initialization from constructor 'ItemDisplay()'.
 /** @nodts */
 $ctor__org_patternfly_dataprovider_ItemDisplay__void() {
  this.$ctor__java_lang_Object__void();
  this.f_identifier__org_patternfly_dataprovider_ItemDisplay = j_u_function_Function.$adapt((/** T */ item) =>{
   return Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(j_l_String.m_valueOf__java_lang_Object__java_lang_String(item), /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)));
  });
  this.f_asString__org_patternfly_dataprovider_ItemDisplay = j_u_function_Function.$adapt((/** T */ arg0) =>{
   return j_l_String.m_valueOf__java_lang_Object__java_lang_String(arg0);
  });
  this.f_display__org_patternfly_dataprovider_ItemDisplay = BiConsumer.$adapt((element, /** T */ item_1) =>{
   let element_1 = /**@type {HTMLContainerBuilder}*/ ($Casts.$to(element, HTMLContainerBuilder));
   element_1.m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {?string}*/ ($Casts.$to(this.f_asString__org_patternfly_dataprovider_ItemDisplay.m_apply__java_lang_Object__java_lang_Object(item_1), j_l_String)));
  });
 }
 //Factory method corresponding to constructor 'ItemDisplay(Function, Function, BiConsumer)'.
 /** @nodts @template E, T @return {!ItemDisplay<E, T>} */
 static $create__java_util_function_Function__java_util_function_Function__java_util_function_BiConsumer(/** j_u_function_Function<T, ?string> */ identifier, /** j_u_function_Function<T, ?string> */ asString, /** BiConsumer<HTMLContainerBuilder<E>, T> */ display) {
  ItemDisplay.$clinit();
  let $instance = new ItemDisplay();
  $instance.$ctor__org_patternfly_dataprovider_ItemDisplay__java_util_function_Function__java_util_function_Function__java_util_function_BiConsumer__void(identifier, asString, display);
  return $instance;
 }
 //Initialization from constructor 'ItemDisplay(Function, Function, BiConsumer)'.
 /** @nodts */
 $ctor__org_patternfly_dataprovider_ItemDisplay__java_util_function_Function__java_util_function_Function__java_util_function_BiConsumer__void(/** j_u_function_Function<T, ?string> */ identifier, /** j_u_function_Function<T, ?string> */ asString, /** BiConsumer<HTMLContainerBuilder<E>, T> */ display) {
  this.$ctor__java_lang_Object__void();
  this.f_identifier__org_patternfly_dataprovider_ItemDisplay = identifier;
  this.f_asString__org_patternfly_dataprovider_ItemDisplay = asString;
  this.f_display__org_patternfly_dataprovider_ItemDisplay = display;
 }
 /** @nodts @return {?string} */
 m_itemId__java_lang_Object__java_lang_String(/** T */ item) {
  return Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(/**@type {?string}*/ ($Casts.$to(this.f_identifier__org_patternfly_dataprovider_ItemDisplay.m_apply__java_lang_Object__java_lang_Object(item), j_l_String)), /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)));
 }
 /** @nodts */
 static $clinit() {
  ItemDisplay.$clinit = () =>{};
  ItemDisplay.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ItemDisplay;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ItemDisplay, 'org.patternfly.dataprovider.ItemDisplay');

exports = ItemDisplay;

//# sourceMappingURL=ItemDisplay.js.map

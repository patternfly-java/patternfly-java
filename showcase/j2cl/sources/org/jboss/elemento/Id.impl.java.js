goog.module('org.jboss.elemento.Id$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Long = goog.forwardDeclare('java.lang.Long$impl');
let j_l_Math = goog.forwardDeclare('java.lang.Math$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('org.jboss.elemento.DomGlobal.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @final
 */
class Id extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {?string} */
 static m_uuid__java_lang_String() {
  Id.$clinit();
  if ($Overlay.f_isSecureContext__elemental2_dom_DomGlobal_$Overlay) {
   return DomGlobal_$Overlay.f_crypto__org_jboss_elemento_DomGlobal_$Overlay.randomUUID();
  } else {
   let msb = j_l_Math.m_abs__long__long($Primitives.narrowDoubleToLong(Math.random() * $Primitives.widenLongToDouble(Long.f_MAX_VALUE__java_lang_Long)));
   let lsb = j_l_Math.m_abs__long__long($Primitives.narrowDoubleToLong(Math.random() * $Primitives.widenLongToDouble(Long.f_MAX_VALUE__java_lang_Long)));
   let msbHex = Long.m_toHexString__long__java_lang_String(msb);
   msbHex = j_l_String.m_substring__java_lang_String__int__java_lang_String('0000000000000000' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(msbHex), j_l_String.m_length__java_lang_String__int(msbHex));
   let lsbHex = Long.m_toHexString__long__java_lang_String(lsb);
   lsbHex = j_l_String.m_substring__java_lang_String__int__java_lang_String('0000000000000000' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(lsbHex), j_l_String.m_length__java_lang_String__int(lsbHex));
   return j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_substring__java_lang_String__int__int__java_lang_String(msbHex, 0, 8)) + '-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_substring__java_lang_String__int__int__java_lang_String(msbHex, 8, 12)) + '-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_substring__java_lang_String__int__int__java_lang_String(lsbHex, 0, 4)) + '-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_substring__java_lang_String__int__int__java_lang_String(lsbHex, 4, 8)) + '-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_substring__java_lang_String__int__int__java_lang_String(lsbHex, 8, 16));
  }
 }
 /** @nodts @return {?string} */
 static m_unique__java_lang_String() {
  Id.$clinit();
  let /** ?string */ id;
  do {
   id = j_l_String.m_valueOf__java_lang_Object__java_lang_String(Id.f_UNIQUE_ID__org_jboss_elemento_Id_) + Id.f_counter__org_jboss_elemento_Id_;
   if (Id.f_counter__org_jboss_elemento_Id_ == Integer.f_MAX_VALUE__java_lang_Integer) {
    Id.f_counter__org_jboss_elemento_Id_ = 0;
   }
   Id.f_counter__org_jboss_elemento_Id_ = Id.f_counter__org_jboss_elemento_Id_ + 1 | 0;
  } while (!$Equality.$same($Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.getElementById(id), null));
  return id;
 }
 /** @nodts @return {?string} */
 static m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(/** ?string */ id, /** Array<?string> */ additionalIds) {
  Id.$clinit();
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(id, additionalIds)) + '-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Id.m_unique__java_lang_String());
 }
 /** @nodts @return {?string} */
 static m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(/** ?string */ id, /** Array<?string> */ additionalIds) {
  Id.$clinit();
  return Id.m_build__java_lang_String__char__arrayOf_java_lang_String__java_lang_String(id, 45 /* '-' */, additionalIds);
 }
 /** @nodts @return {?string} */
 static m_build__java_lang_String__char__arrayOf_java_lang_String__java_lang_String(/** ?string */ id, /** number */ separator, /** Array<?string> */ additionalIds) {
  Id.$clinit();
  if ($Equality.$same(id, null) || j_l_String.m_length__java_lang_String__int(j_l_String.m_trim__java_lang_String__java_lang_String(id)) == 0) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String('ID must not be null or empty.'));
  }
  let ids = /**@type {!ArrayList<?string>}*/ (ArrayList.$create__());
  ids.add(id);
  if (!$Equality.$same(additionalIds, null)) {
   for (let $array = additionalIds, $index = 0; $index < $array.length; $index++) {
    let additionalId = $array[$index];
    {
     if (!$Equality.$same(additionalId, null) && j_l_String.m_length__java_lang_String__int(j_l_String.m_trim__java_lang_String__java_lang_String(additionalId)) != 0) {
      ids.add(additionalId);
     }
    }
   }
  }
  return /**@type {?string}*/ ($Casts.$to(/**@type {Stream<?string>}*/ (ids.m_stream__java_util_stream_Stream().m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt((arg0) =>{
   let arg0_1 = /**@type {?string}*/ ($Casts.$to(arg0, j_l_String));
   return Id.m_asId__java_lang_String__java_lang_String(arg0_1);
  }))).m_filter__java_util_function_Predicate__java_util_stream_Stream(Predicate.$adapt((arg0_2) =>{
   let arg0_3 = /**@type {?string}*/ ($Casts.$to(arg0_2, j_l_String));
   return Objects.m_nonNull__java_lang_Object__boolean(arg0_3);
  })).m_collect__java_util_stream_Collector__java_lang_Object(Collectors.m_joining__java_lang_CharSequence__java_util_stream_Collector(j_l_String.m_valueOf__char__java_lang_String(separator))), j_l_String));
 }
 /** @nodts @return {?string} */
 static m_asId__java_lang_String__java_lang_String(/** ?string */ text) {
  Id.$clinit();
  let parts = j_l_String.m_split__java_lang_String__java_lang_String__arrayOf_java_lang_String(text, '[-\\s]');
  let sanitized = /**@type {!ArrayList<?string>}*/ (ArrayList.$create__());
  for (let $array = parts, $index = 0; $index < $array.length; $index++) {
   let part = $array[$index];
   {
    if (!$Equality.$same(part, null)) {
     let s = j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String__java_lang_String(part, '\\s+', '');
     s = j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String__java_lang_String(s, '[^a-zA-Z0-9-_]', '');
     s = j_l_String.m_replace__java_lang_String__char__char__java_lang_String(s, 95 /* '_' */, 45 /* '-' */);
     if (j_l_String.m_length__java_lang_String__int(s) != 0) {
      sanitized.add(s);
     }
    }
   }
  }
  if (sanitized.isEmpty()) {
   return null;
  } else {
   return /**@type {?string}*/ ($Casts.$to(/**@type {Stream<?string>}*/ (sanitized.m_stream__java_util_stream_Stream().m_filter__java_util_function_Predicate__java_util_stream_Stream(Predicate.$adapt((s_1) =>{
    let s_2 = /**@type {?string}*/ ($Casts.$to(s_1, j_l_String));
    return !$Equality.$same(s_2, null) && j_l_String.m_length__java_lang_String__int(j_l_String.m_trim__java_lang_String__java_lang_String(s_2)) != 0;
   })).m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt((arg0) =>{
    let arg0_1 = /**@type {?string}*/ ($Casts.$to(arg0, j_l_String));
    return j_l_String.m_toLowerCase__java_lang_String__java_lang_String(arg0_1);
   }))).m_collect__java_util_stream_Collector__java_lang_Object(Collectors.m_joining__java_lang_CharSequence__java_util_stream_Collector('-')), j_l_String));
  }
 }
 /** @nodts @return {!Id} */
 static $create__() {
  let $instance = new Id();
  $instance.$ctor__org_jboss_elemento_Id__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_Id__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  Id.$clinit = () =>{};
  Id.$loadModules();
  j_l_Object.$clinit();
  Id.f_counter__org_jboss_elemento_Id_ = 0;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Id;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  Long = goog.module.get('java.lang.Long$impl');
  j_l_Math = goog.module.get('java.lang.Math$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DomGlobal_$Overlay = goog.module.get('org.jboss.elemento.DomGlobal.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@const {string} @nodts*/
Id.f_UNIQUE_ID__org_jboss_elemento_Id_ = 'id-';
/**@type {number} @nodts*/
Id.f_counter__org_jboss_elemento_Id_ = 0;
$Util.$setClassMetadata(Id, 'org.jboss.elemento.Id');

exports = Id;

//# sourceMappingURL=Id.js.map

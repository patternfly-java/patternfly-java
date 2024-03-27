goog.module('org.treblereel.j2cl.processors.common.resources.impl.DataResourcePrototype$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DataResource = goog.require('org.treblereel.j2cl.processors.common.resources.DataResource$impl');

/**
 * @implements {DataResource}
 */
class DataResourcePrototype extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_name__org_treblereel_j2cl_processors_common_resources_impl_DataResourcePrototype_;
  /**@type {?string} @nodts*/
  this.f_uri__org_treblereel_j2cl_processors_common_resources_impl_DataResourcePrototype_;
 }
 /** @nodts @return {!DataResourcePrototype} */
 static $create__java_lang_String__java_lang_String(/** ?string */ name, /** ?string */ uri) {
  DataResourcePrototype.$clinit();
  let $instance = new DataResourcePrototype();
  $instance.$ctor__org_treblereel_j2cl_processors_common_resources_impl_DataResourcePrototype__java_lang_String__java_lang_String__void(name, uri);
  return $instance;
 }
 /** @nodts */
 $ctor__org_treblereel_j2cl_processors_common_resources_impl_DataResourcePrototype__java_lang_String__java_lang_String__void(/** ?string */ name, /** ?string */ uri) {
  this.$ctor__java_lang_Object__void();
  this.f_name__org_treblereel_j2cl_processors_common_resources_impl_DataResourcePrototype_ = name;
  this.f_uri__org_treblereel_j2cl_processors_common_resources_impl_DataResourcePrototype_ = uri;
 }
 /** @override @nodts @return {?string} */
 m_getName__java_lang_String() {
  return this.f_name__org_treblereel_j2cl_processors_common_resources_impl_DataResourcePrototype_;
 }
 /** @override @nodts @return {?string} */
 m_asString__java_lang_String() {
  return this.f_uri__org_treblereel_j2cl_processors_common_resources_impl_DataResourcePrototype_;
 }
 /** @nodts */
 static $clinit() {
  DataResourcePrototype.$clinit = () =>{};
  DataResourcePrototype.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataResourcePrototype;
 }
 
 /** @nodts */
 static $loadModules() {}
}
DataResource.$markImplementor(DataResourcePrototype);
$Util.$setClassMetadata(DataResourcePrototype, 'org.treblereel.j2cl.processors.common.resources.impl.DataResourcePrototype');

exports = DataResourcePrototype;

//# sourceMappingURL=DataResourcePrototype.js.map

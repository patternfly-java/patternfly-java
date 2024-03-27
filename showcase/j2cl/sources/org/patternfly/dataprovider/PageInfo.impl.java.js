goog.module('org.patternfly.dataprovider.PageInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class PageInfo extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {number} @nodts*/
  this.f_pageSize__org_patternfly_dataprovider_PageInfo_ = 0;
  /**@type {number} @nodts*/
  this.f_page__org_patternfly_dataprovider_PageInfo_ = 0;
  /**@type {number} @nodts*/
  this.f_visible__org_patternfly_dataprovider_PageInfo_ = 0;
  /**@type {number} @nodts*/
  this.f_total__org_patternfly_dataprovider_PageInfo_ = 0;
 }
 //Factory method corresponding to constructor 'PageInfo(int)'.
 /** @nodts @return {!PageInfo} */
 static $create__int(/** number */ pageSize) {
  PageInfo.$clinit();
  let $instance = new PageInfo();
  $instance.$ctor__org_patternfly_dataprovider_PageInfo__int__void(pageSize);
  return $instance;
 }
 //Initialization from constructor 'PageInfo(int)'.
 /** @nodts */
 $ctor__org_patternfly_dataprovider_PageInfo__int__void(/** number */ pageSize) {
  this.$ctor__java_lang_Object__void();
  this.f_pageSize__org_patternfly_dataprovider_PageInfo_ = pageSize;
  this.m_reset__void_$pp_org_patternfly_dataprovider();
 }
 //Factory method corresponding to constructor 'PageInfo(int, int, int, int)'.
 /** @nodts @return {!PageInfo} */
 static $create__int__int__int__int(/** number */ pageSize, /** number */ page, /** number */ visible, /** number */ total) {
  PageInfo.$clinit();
  let $instance = new PageInfo();
  $instance.$ctor__org_patternfly_dataprovider_PageInfo__int__int__int__int__void(pageSize, page, visible, total);
  return $instance;
 }
 //Initialization from constructor 'PageInfo(int, int, int, int)'.
 /** @nodts */
 $ctor__org_patternfly_dataprovider_PageInfo__int__int__int__int__void(/** number */ pageSize, /** number */ page, /** number */ visible, /** number */ total) {
  this.$ctor__java_lang_Object__void();
  this.f_pageSize__org_patternfly_dataprovider_PageInfo_ = pageSize;
  this.f_page__org_patternfly_dataprovider_PageInfo_ = page;
  this.f_visible__org_patternfly_dataprovider_PageInfo_ = visible;
  this.f_total__org_patternfly_dataprovider_PageInfo_ = total;
 }
 /** @nodts */
 m_reset__void_$pp_org_patternfly_dataprovider() {
  this.f_page__org_patternfly_dataprovider_PageInfo_ = 0;
  this.f_visible__org_patternfly_dataprovider_PageInfo_ = 0;
  this.f_total__org_patternfly_dataprovider_PageInfo_ = 0;
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  if ($Equality.$same(this, o)) {
   return true;
  }
  if (!PageInfo.$isInstance(o)) {
   return false;
  }
  let pageInfo = /**@type {PageInfo}*/ ($Casts.$to(o, PageInfo));
  if (this.f_page__org_patternfly_dataprovider_PageInfo_ != pageInfo.f_page__org_patternfly_dataprovider_PageInfo_) {
   return false;
  }
  if (this.f_pageSize__org_patternfly_dataprovider_PageInfo_ != pageInfo.f_pageSize__org_patternfly_dataprovider_PageInfo_) {
   return false;
  }
  if (this.f_visible__org_patternfly_dataprovider_PageInfo_ != pageInfo.f_visible__org_patternfly_dataprovider_PageInfo_) {
   return false;
  }
  return this.f_total__org_patternfly_dataprovider_PageInfo_ == pageInfo.f_total__org_patternfly_dataprovider_PageInfo_;
 }
 /** @override @return {number} */
 hashCode() {
  let result = this.f_page__org_patternfly_dataprovider_PageInfo_;
  result = Math.imul(31, result) + this.f_pageSize__org_patternfly_dataprovider_PageInfo_ | 0;
  result = Math.imul(31, result) + this.f_visible__org_patternfly_dataprovider_PageInfo_ | 0;
  result = Math.imul(31, result) + this.f_total__org_patternfly_dataprovider_PageInfo_ | 0;
  return result;
 }
 /** @override @return {?string} */
 toString() {
  return 'PageInfo(pageSize=' + this.f_pageSize__org_patternfly_dataprovider_PageInfo_ + ', page=' + this.f_page__org_patternfly_dataprovider_PageInfo_ + ', visible=' + this.f_visible__org_patternfly_dataprovider_PageInfo_ + ', total=' + this.f_total__org_patternfly_dataprovider_PageInfo_ + j_l_String.m_valueOf__char__java_lang_String(41 /* ')' */);
 }
 /** @nodts @return {number} */
 m_getFrom__int() {
  return this.f_total__org_patternfly_dataprovider_PageInfo_ == 0 ? 0 : Math.imul(this.m_getPage__int(), this.m_getPageSize__int()) + 1 | 0;
 }
 /** @nodts @return {number} */
 m_getTo__int() {
  return Math.min(this.f_total__org_patternfly_dataprovider_PageInfo_, this.m_getFrom__int() + this.m_getPageSize__int() - 1 | 0);
 }
 /** @nodts @return {number} */
 m_getPage__int() {
  return this.f_page__org_patternfly_dataprovider_PageInfo_;
 }
 /** @nodts */
 m_setPage__int__void_$pp_org_patternfly_dataprovider(/** number */ page) {
  let safePage = Math.max(0, page);
  this.f_page__org_patternfly_dataprovider_PageInfo_ = Math.min(safePage, this.m_getPages__int() - 1 | 0);
 }
 /** @nodts @return {number} */
 m_getPages__int() {
  let pages = $Primitives.coerceDivision(this.f_total__org_patternfly_dataprovider_PageInfo_ / this.f_pageSize__org_patternfly_dataprovider_PageInfo_);
  if ($Primitives.coerceDivision(this.f_total__org_patternfly_dataprovider_PageInfo_ % this.f_pageSize__org_patternfly_dataprovider_PageInfo_) != 0) {
   pages = pages + 1 | 0;
  }
  return Math.max(1, pages);
 }
 /** @nodts @return {number} */
 m_getPageSize__int() {
  return this.f_pageSize__org_patternfly_dataprovider_PageInfo_;
 }
 /** @nodts */
 m_setPageSize__int__void_$pp_org_patternfly_dataprovider(/** number */ pageSize) {
  this.f_pageSize__org_patternfly_dataprovider_PageInfo_ = Math.max(1, pageSize);
 }
 /** @nodts @return {number} */
 m_getVisible__int() {
  return this.f_visible__org_patternfly_dataprovider_PageInfo_;
 }
 /** @nodts */
 m_setVisible__int__void_$pp_org_patternfly_dataprovider(/** number */ visible) {
  this.f_visible__org_patternfly_dataprovider_PageInfo_ = Math.min(this.f_total__org_patternfly_dataprovider_PageInfo_, visible);
 }
 /** @nodts @return {number} */
 m_getTotal__int() {
  return this.f_total__org_patternfly_dataprovider_PageInfo_;
 }
 /** @nodts */
 m_setTotal__int__void_$pp_org_patternfly_dataprovider(/** number */ total) {
  this.f_total__org_patternfly_dataprovider_PageInfo_ = total;
  this.f_page__org_patternfly_dataprovider_PageInfo_ = Math.min(this.f_page__org_patternfly_dataprovider_PageInfo_, this.m_getPages__int() - 1 | 0);
 }
 /** @nodts */
 static $clinit() {
  PageInfo.$clinit = () =>{};
  PageInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PageInfo;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@const {number} @nodts*/
PageInfo.f_DEFAULT_PAGE_SIZE__org_patternfly_dataprovider_PageInfo = 20;
$Util.$setClassMetadata(PageInfo, 'org.patternfly.dataprovider.PageInfo');

exports = PageInfo;

//# sourceMappingURL=PageInfo.js.map

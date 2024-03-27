goog.module('elemental2.dom.DomGlobal.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** Blob */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions, sy, sw, sh, options);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double__elemental2_promise_Promise(/** Blob */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions, sy, sw, sh);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__elemental2_promise_Promise(/** Blob */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions, sy, sw);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__elemental2_promise_Promise(/** Blob */ image, /** ? */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions, sy);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__elemental2_promise_Promise(/** Blob */ image, /** ? */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** Blob */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_promise_Promise(/** Blob */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_ImageBitmapOptions__double__double__elemental2_promise_Promise(/** Blob */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_ImageBitmapOptions__double__elemental2_promise_Promise(/** Blob */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** Blob */ image, /** ImageBitmapOptions */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)));
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__double__double__double__double__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** Blob */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__double__double__double__double__elemental2_promise_Promise(/** Blob */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__double__double__double__elemental2_promise_Promise(/** Blob */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__double__double__elemental2_promise_Promise(/** Blob */ image, /** number */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__double__elemental2_promise_Promise(/** Blob */ image, /** number */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)));
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_promise_Promise(/** Blob */ image) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)));
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** ? */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_promise_Promise(/** ? */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__elemental2_dom_ImageBitmapOptions__double__double__elemental2_promise_Promise(/** ? */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__elemental2_dom_ImageBitmapOptions__double__elemental2_promise_Promise(/** ? */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** ? */ image, /** ImageBitmapOptions */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)));
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__double__double__double__double__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** ? */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__double__double__double__double__elemental2_promise_Promise(/** ? */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__double__double__double__elemental2_promise_Promise(/** ? */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__double__double__elemental2_promise_Promise(/** ? */ image, /** number */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__double__elemental2_promise_Promise(/** ? */ image, /** number */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)));
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** HTMLCanvasElement */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions, sy, sw, sh, options);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double__elemental2_promise_Promise(/** HTMLCanvasElement */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions, sy, sw, sh);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__elemental2_promise_Promise(/** HTMLCanvasElement */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions, sy, sw);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__elemental2_promise_Promise(/** HTMLCanvasElement */ image, /** ? */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions, sy);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__elemental2_promise_Promise(/** HTMLCanvasElement */ image, /** ? */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** HTMLCanvasElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_promise_Promise(/** HTMLCanvasElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_ImageBitmapOptions__double__double__elemental2_promise_Promise(/** HTMLCanvasElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_ImageBitmapOptions__double__elemental2_promise_Promise(/** HTMLCanvasElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** HTMLCanvasElement */ image, /** ImageBitmapOptions */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)));
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__double__double__double__double__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** HTMLCanvasElement */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__double__double__double__double__elemental2_promise_Promise(/** HTMLCanvasElement */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__double__double__double__elemental2_promise_Promise(/** HTMLCanvasElement */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__double__double__elemental2_promise_Promise(/** HTMLCanvasElement */ image, /** number */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__double__elemental2_promise_Promise(/** HTMLCanvasElement */ image, /** number */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)));
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_promise_Promise(/** HTMLCanvasElement */ image) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)));
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** HTMLImageElement */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions, sy, sw, sh, options);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double__elemental2_promise_Promise(/** HTMLImageElement */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions, sy, sw, sh);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__elemental2_promise_Promise(/** HTMLImageElement */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions, sy, sw);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__elemental2_promise_Promise(/** HTMLImageElement */ image, /** ? */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions, sy);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__elemental2_promise_Promise(/** HTMLImageElement */ image, /** ? */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** HTMLImageElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_promise_Promise(/** HTMLImageElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_ImageBitmapOptions__double__double__elemental2_promise_Promise(/** HTMLImageElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_ImageBitmapOptions__double__elemental2_promise_Promise(/** HTMLImageElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** HTMLImageElement */ image, /** ImageBitmapOptions */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)));
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__double__double__double__double__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** HTMLImageElement */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__double__double__double__double__elemental2_promise_Promise(/** HTMLImageElement */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__double__double__double__elemental2_promise_Promise(/** HTMLImageElement */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__double__double__elemental2_promise_Promise(/** HTMLImageElement */ image, /** number */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__double__elemental2_promise_Promise(/** HTMLImageElement */ image, /** number */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)));
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_promise_Promise(/** HTMLImageElement */ image) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)));
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** HTMLVideoElement */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions, sy, sw, sh, options);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double__elemental2_promise_Promise(/** HTMLVideoElement */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions, sy, sw, sh);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__elemental2_promise_Promise(/** HTMLVideoElement */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions, sy, sw);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__elemental2_promise_Promise(/** HTMLVideoElement */ image, /** ? */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions, sy);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__elemental2_promise_Promise(/** HTMLVideoElement */ image, /** ? */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** HTMLVideoElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_promise_Promise(/** HTMLVideoElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_ImageBitmapOptions__double__double__elemental2_promise_Promise(/** HTMLVideoElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_ImageBitmapOptions__double__elemental2_promise_Promise(/** HTMLVideoElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** HTMLVideoElement */ image, /** ImageBitmapOptions */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)));
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__double__double__double__double__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** HTMLVideoElement */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__double__double__double__double__elemental2_promise_Promise(/** HTMLVideoElement */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__double__double__double__elemental2_promise_Promise(/** HTMLVideoElement */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__double__double__elemental2_promise_Promise(/** HTMLVideoElement */ image, /** number */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__double__elemental2_promise_Promise(/** HTMLVideoElement */ image, /** number */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)));
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_promise_Promise(/** HTMLVideoElement */ image) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)));
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** ImageBitmap */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions, sy, sw, sh, options);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double__elemental2_promise_Promise(/** ImageBitmap */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions, sy, sw, sh);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__elemental2_promise_Promise(/** ImageBitmap */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions, sy, sw);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__elemental2_promise_Promise(/** ImageBitmap */ image, /** ? */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions, sy);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__elemental2_promise_Promise(/** ImageBitmap */ image, /** ? */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** ImageBitmap */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_promise_Promise(/** ImageBitmap */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_ImageBitmapOptions__double__double__elemental2_promise_Promise(/** ImageBitmap */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_ImageBitmapOptions__double__elemental2_promise_Promise(/** ImageBitmap */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** ImageBitmap */ image, /** ImageBitmapOptions */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)));
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__double__double__double__double__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** ImageBitmap */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__double__double__double__double__elemental2_promise_Promise(/** ImageBitmap */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__double__double__double__elemental2_promise_Promise(/** ImageBitmap */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__double__double__elemental2_promise_Promise(/** ImageBitmap */ image, /** number */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__double__elemental2_promise_Promise(/** ImageBitmap */ image, /** number */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)));
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_promise_Promise(/** ImageBitmap */ image) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)));
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** ImageData */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions, sy, sw, sh, options);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double__elemental2_promise_Promise(/** ImageData */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions, sy, sw, sh);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__elemental2_promise_Promise(/** ImageData */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions, sy, sw);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__elemental2_promise_Promise(/** ImageData */ image, /** ? */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions, sy);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__elemental2_promise_Promise(/** ImageData */ image, /** ? */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** ImageData */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_promise_Promise(/** ImageData */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_ImageBitmapOptions__double__double__elemental2_promise_Promise(/** ImageData */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_ImageBitmapOptions__double__elemental2_promise_Promise(/** ImageData */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** ImageData */ image, /** ImageBitmapOptions */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)));
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__double__double__double__double__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** ImageData */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__double__double__double__double__elemental2_promise_Promise(/** ImageData */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__double__double__double__elemental2_promise_Promise(/** ImageData */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__double__double__elemental2_promise_Promise(/** ImageData */ image, /** number */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__double__elemental2_promise_Promise(/** ImageData */ image, /** number */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)));
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_promise_Promise(/** ImageData */ image) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)));
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_OffscreenCanvas__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** OffscreenCanvas */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions, sy, sw, sh, options);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_OffscreenCanvas__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double__elemental2_promise_Promise(/** OffscreenCanvas */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions, sy, sw, sh);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_OffscreenCanvas__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__elemental2_promise_Promise(/** OffscreenCanvas */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions, sy, sw);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_OffscreenCanvas__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__elemental2_promise_Promise(/** OffscreenCanvas */ image, /** ? */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions, sy);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_OffscreenCanvas__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__elemental2_promise_Promise(/** OffscreenCanvas */ image, /** ? */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), sxOrOptions);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_OffscreenCanvas__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** OffscreenCanvas */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_OffscreenCanvas__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_promise_Promise(/** OffscreenCanvas */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_OffscreenCanvas__elemental2_dom_ImageBitmapOptions__double__double__elemental2_promise_Promise(/** OffscreenCanvas */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_OffscreenCanvas__elemental2_dom_ImageBitmapOptions__double__elemental2_promise_Promise(/** OffscreenCanvas */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_OffscreenCanvas__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** OffscreenCanvas */ image, /** ImageBitmapOptions */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)));
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_OffscreenCanvas__double__double__double__double__elemental2_dom_ImageBitmapOptions__elemental2_promise_Promise(/** OffscreenCanvas */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_OffscreenCanvas__double__double__double__double__elemental2_promise_Promise(/** OffscreenCanvas */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_OffscreenCanvas__double__double__double__elemental2_promise_Promise(/** OffscreenCanvas */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_OffscreenCanvas__double__double__elemental2_promise_Promise(/** OffscreenCanvas */ image, /** number */ sxOrOptions, /** number */ sy) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)), sy);
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_OffscreenCanvas__double__elemental2_promise_Promise(/** OffscreenCanvas */ image, /** number */ sxOrOptions) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(sxOrOptions)));
 }
 /** @final @nodts @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_OffscreenCanvas__elemental2_promise_Promise(/** OffscreenCanvas */ image) {
  $Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(image)));
 }
 /** @final @nodts @return {Promise<Response>} */
 static m_fetch__elemental2_dom_Request__elemental2_dom_RequestInit__elemental2_promise_Promise(/** Request */ input, /** RequestInit */ init) {
  $Overlay.$clinit();
  return goog.global.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(input)), init);
 }
 /** @final @nodts @return {Promise<Response>} */
 static m_fetch__elemental2_dom_Request__elemental2_promise_Promise(/** Request */ input) {
  $Overlay.$clinit();
  return goog.global.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(input)));
 }
 /** @final @nodts @return {Promise<Response>} */
 static m_fetch__java_lang_String__elemental2_dom_RequestInit__elemental2_promise_Promise(/** ?string */ input, /** RequestInit */ init) {
  $Overlay.$clinit();
  return goog.global.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(input)), init);
 }
 /** @final @nodts @return {Promise<Response>} */
 static m_fetch__java_lang_String__elemental2_promise_Promise(/** ?string */ input) {
  $Overlay.$clinit();
  return goog.global.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(input)));
 }
 /** @final @nodts @return {Promise<Response>} */
 static m_fetch__elemental2_dom_URL__elemental2_dom_RequestInit__elemental2_promise_Promise(/** URL */ input, /** RequestInit */ init) {
  $Overlay.$clinit();
  return goog.global.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(input)), init);
 }
 /** @final @nodts @return {Promise<Response>} */
 static m_fetch__elemental2_dom_URL__elemental2_promise_Promise(/** URL */ input) {
  $Overlay.$clinit();
  return goog.global.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(input)));
 }
 /** @final @nodts */
 static m_importScripts__arrayOf_java_lang_String__void(/** Array<?string> */ urls) {
  $Overlay.$clinit();
  goog.global.importScripts(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(urls))));
 }
 /** @final @nodts */
 static m_importScripts__arrayOf_elemental2_dom_TrustedScriptURL__void(/** Array<TrustedScriptURL> */ urls) {
  $Overlay.$clinit();
  goog.global.importScripts(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(urls))));
 }
 /** @final @nodts */
 static m_importScripts__arrayOf_elemental2_dom_URL__void(/** Array<URL> */ urls) {
  $Overlay.$clinit();
  goog.global.importScripts(...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(urls))));
 }
 /** @final @nodts @return {Database} */
 static m_openDatabase__java_lang_String__java_lang_String__java_lang_String__int__elemental2_dom_DatabaseCallback__elemental2_dom_Database(/** ?string */ name, /** ?string */ version, /** ?string */ description, /** number */ size, /** DatabaseCallback */ callback) {
  $Overlay.$clinit();
  return goog.global.openDatabase(name, version, description, size, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(callback)));
 }
 /** @final @nodts @return {Database} */
 static m_openDatabase__java_lang_String__java_lang_String__java_lang_String__int__elemental2_dom_DomGlobal_OpenDatabaseCallbackFn__elemental2_dom_Database(/** ?string */ name, /** ?string */ version, /** ?string */ description, /** number */ size, /** ?function(Database):* */ callback) {
  $Overlay.$clinit();
  return goog.global.openDatabase(name, version, description, size, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(callback)));
 }
 /** @final @nodts */
 static m_postMessage__java_lang_Object__elemental2_core_JsArray__elemental2_core_JsArray__void(/** * */ message, /** Array<Transferable> */ targetOriginOrOptionsOrTransfer, /** Array<*> */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  goog.global.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrOptionsOrTransfer)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 /** @final @nodts */
 static m_postMessage__java_lang_Object__elemental2_core_JsArray__elemental2_dom_DomGlobal_PostMessageTargetOriginOrPortsOrTransferUnionType__void(/** * */ message, /** Array<Transferable> */ targetOriginOrOptionsOrTransfer, /** ? */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  goog.global.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrOptionsOrTransfer)), targetOriginOrPortsOrTransfer);
 }
 /** @final @nodts */
 static m_postMessage__java_lang_Object__elemental2_core_JsArray__java_lang_String__void(/** * */ message, /** Array<Transferable> */ targetOriginOrOptionsOrTransfer, /** ?string */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  goog.global.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrOptionsOrTransfer)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 /** @final @nodts */
 static m_postMessage__java_lang_Object__elemental2_core_JsArray__void(/** * */ message, /** Array<Transferable> */ targetOriginOrOptionsOrTransfer) {
  $Overlay.$clinit();
  goog.global.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrOptionsOrTransfer)));
 }
 /** @final @nodts */
 static m_postMessage__java_lang_Object__elemental2_dom_DomGlobal_PostMessageTargetOriginOrOptionsOrTransferUnionType__elemental2_core_JsArray__void(/** * */ message, /** ? */ targetOriginOrOptionsOrTransfer, /** Array<*> */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  goog.global.postMessage(message, targetOriginOrOptionsOrTransfer, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 /** @final @nodts */
 static m_postMessage__java_lang_Object__elemental2_dom_DomGlobal_PostMessageTargetOriginOrOptionsOrTransferUnionType__arrayOf_java_lang_Object__void(/** * */ message, /** ? */ targetOriginOrOptionsOrTransfer, /** Array<*> */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  $Overlay.m_postMessage__java_lang_Object__elemental2_dom_DomGlobal_PostMessageTargetOriginOrOptionsOrTransferUnionType__elemental2_core_JsArray__void(message, targetOriginOrOptionsOrTransfer, /**@type {Array<*>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 /** @final @nodts */
 static m_postMessage__java_lang_Object__elemental2_dom_DomGlobal_PostMessageTargetOriginOrOptionsOrTransferUnionType__java_lang_String__void(/** * */ message, /** ? */ targetOriginOrOptionsOrTransfer, /** ?string */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  goog.global.postMessage(message, targetOriginOrOptionsOrTransfer, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 /** @final @nodts */
 static m_postMessage__java_lang_Object__java_lang_String__elemental2_core_JsArray__void(/** * */ message, /** ?string */ targetOriginOrOptionsOrTransfer, /** Array<*> */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  goog.global.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrOptionsOrTransfer)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 /** @final @nodts */
 static m_postMessage__java_lang_Object__java_lang_String__arrayOf_java_lang_Object__void(/** * */ message, /** ?string */ targetOriginOrOptionsOrTransfer, /** Array<*> */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  $Overlay.m_postMessage__java_lang_Object__java_lang_String__elemental2_core_JsArray__void(message, targetOriginOrOptionsOrTransfer, /**@type {Array<*>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 /** @final @nodts */
 static m_postMessage__java_lang_Object__java_lang_String__elemental2_dom_DomGlobal_PostMessageTargetOriginOrPortsOrTransferUnionType__void(/** * */ message, /** ?string */ targetOriginOrOptionsOrTransfer, /** ? */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  goog.global.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrOptionsOrTransfer)), targetOriginOrPortsOrTransfer);
 }
 /** @final @nodts */
 static m_postMessage__java_lang_Object__java_lang_String__java_lang_String__void(/** * */ message, /** ?string */ targetOriginOrOptionsOrTransfer, /** ?string */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  goog.global.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrOptionsOrTransfer)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 /** @final @nodts */
 static m_postMessage__java_lang_Object__java_lang_String__void(/** * */ message, /** ?string */ targetOriginOrOptionsOrTransfer) {
  $Overlay.$clinit();
  goog.global.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrOptionsOrTransfer)));
 }
 /** @final @nodts */
 static m_postMessage__java_lang_Object__elemental2_dom_StructuredSerializeOptions__elemental2_core_JsArray__void(/** * */ message, /** StructuredSerializeOptions */ targetOriginOrOptionsOrTransfer, /** Array<*> */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  goog.global.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrOptionsOrTransfer)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 /** @final @nodts */
 static m_postMessage__java_lang_Object__elemental2_dom_StructuredSerializeOptions__arrayOf_java_lang_Object__void(/** * */ message, /** StructuredSerializeOptions */ targetOriginOrOptionsOrTransfer, /** Array<*> */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  $Overlay.m_postMessage__java_lang_Object__elemental2_dom_StructuredSerializeOptions__elemental2_core_JsArray__void(message, targetOriginOrOptionsOrTransfer, /**@type {Array<*>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 /** @final @nodts */
 static m_postMessage__java_lang_Object__elemental2_dom_StructuredSerializeOptions__elemental2_dom_DomGlobal_PostMessageTargetOriginOrPortsOrTransferUnionType__void(/** * */ message, /** StructuredSerializeOptions */ targetOriginOrOptionsOrTransfer, /** ? */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  goog.global.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrOptionsOrTransfer)), targetOriginOrPortsOrTransfer);
 }
 /** @final @nodts */
 static m_postMessage__java_lang_Object__elemental2_dom_StructuredSerializeOptions__java_lang_String__void(/** * */ message, /** StructuredSerializeOptions */ targetOriginOrOptionsOrTransfer, /** ?string */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  goog.global.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrOptionsOrTransfer)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 /** @final @nodts */
 static m_postMessage__java_lang_Object__elemental2_dom_StructuredSerializeOptions__void(/** * */ message, /** StructuredSerializeOptions */ targetOriginOrOptionsOrTransfer) {
  $Overlay.$clinit();
  goog.global.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrOptionsOrTransfer)));
 }
 /** @final @nodts */
 static m_postMessage__java_lang_Object__arrayOf_elemental2_core_Transferable__arrayOf_java_lang_Object__void(/** * */ message, /** Array<Transferable> */ targetOriginOrOptionsOrTransfer, /** Array<*> */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  $Overlay.m_postMessage__java_lang_Object__elemental2_core_JsArray__elemental2_core_JsArray__void(message, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrOptionsOrTransfer)), /**@type {Array<*>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 /** @final @nodts */
 static m_postMessage__java_lang_Object__arrayOf_elemental2_core_Transferable__elemental2_dom_DomGlobal_PostMessageTargetOriginOrPortsOrTransferUnionType__void(/** * */ message, /** Array<Transferable> */ targetOriginOrOptionsOrTransfer, /** ? */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  $Overlay.m_postMessage__java_lang_Object__elemental2_core_JsArray__elemental2_dom_DomGlobal_PostMessageTargetOriginOrPortsOrTransferUnionType__void(message, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrOptionsOrTransfer)), targetOriginOrPortsOrTransfer);
 }
 /** @final @nodts */
 static m_postMessage__java_lang_Object__arrayOf_elemental2_core_Transferable__java_lang_String__void(/** * */ message, /** Array<Transferable> */ targetOriginOrOptionsOrTransfer, /** ?string */ targetOriginOrPortsOrTransfer) {
  $Overlay.$clinit();
  $Overlay.m_postMessage__java_lang_Object__elemental2_core_JsArray__java_lang_String__void(message, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrOptionsOrTransfer)), targetOriginOrPortsOrTransfer);
 }
 /** @final @nodts */
 static m_postMessage__java_lang_Object__arrayOf_elemental2_core_Transferable__void(/** * */ message, /** Array<Transferable> */ targetOriginOrOptionsOrTransfer) {
  $Overlay.$clinit();
  $Overlay.m_postMessage__java_lang_Object__elemental2_core_JsArray__void(message, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(targetOriginOrOptionsOrTransfer)));
 }
 /** @final @nodts @return {number} */
 static m_requestIdleCallback__elemental2_dom_DomGlobal_RequestIdleCallbackCallbackFn__elemental2_dom_IdleCallbackOptions__int(/** ?function(IdleDeadline):void */ callback, /** IdleCallbackOptions */ options) {
  $Overlay.$clinit();
  return goog.global.requestIdleCallback(callback, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(options)));
 }
 /** @final @nodts @return {number} */
 static m_requestIdleCallback__elemental2_dom_DomGlobal_RequestIdleCallbackCallbackFn__int__int(/** ?function(IdleDeadline):void */ callback, /** number */ options) {
  $Overlay.$clinit();
  return goog.global.requestIdleCallback(callback, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(options)));
 }
 /** @final @nodts @return {number} */
 static m_setInterval__elemental2_dom_DomGlobal_SetIntervalCallbackFn__double__arrayOf_java_lang_Object__double(/** ?function(...*):void */ callback, /** number */ delay, /** Array<*> */ callbackParams) {
  $Overlay.$clinit();
  return goog.global.setInterval(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(callback)), delay, ...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(callbackParams));
 }
 /** @final @nodts @return {number} */
 static m_setInterval__elemental2_dom_DomGlobal_SetIntervalCallbackFn__double(/** ?function(...*):void */ callback) {
  $Overlay.$clinit();
  return goog.global.setInterval(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(callback)));
 }
 /** @final @nodts @return {number} */
 static m_setInterval__java_lang_String__double__arrayOf_java_lang_Object__double(/** ?string */ callback, /** number */ delay, /** Array<*> */ callbackParams) {
  $Overlay.$clinit();
  return goog.global.setInterval(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(callback)), delay, ...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(callbackParams));
 }
 /** @final @nodts @return {number} */
 static m_setInterval__java_lang_String__double(/** ?string */ callback) {
  $Overlay.$clinit();
  return goog.global.setInterval(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(callback)));
 }
 /** @final @nodts @return {number} */
 static m_setInterval__elemental2_core_TrustedScript__double__arrayOf_java_lang_Object__double(/** TrustedScript */ callback, /** number */ delay, /** Array<*> */ callbackParams) {
  $Overlay.$clinit();
  return goog.global.setInterval(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(callback)), delay, ...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(callbackParams));
 }
 /** @final @nodts @return {number} */
 static m_setInterval__elemental2_core_TrustedScript__double(/** TrustedScript */ callback) {
  $Overlay.$clinit();
  return goog.global.setInterval(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(callback)));
 }
 /** @final @nodts @return {number} */
 static m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double(/** ?function(...*):void */ callback, /** number */ delay, /** Array<*> */ callbackParams) {
  $Overlay.$clinit();
  return goog.global.setTimeout(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(callback)), delay, ...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(callbackParams));
 }
 /** @final @nodts @return {number} */
 static m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double(/** ?function(...*):void */ callback) {
  $Overlay.$clinit();
  return goog.global.setTimeout(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(callback)));
 }
 /** @final @nodts @return {number} */
 static m_setTimeout__java_lang_String__double__arrayOf_java_lang_Object__double(/** ?string */ callback, /** number */ delay, /** Array<*> */ callbackParams) {
  $Overlay.$clinit();
  return goog.global.setTimeout(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(callback)), delay, ...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(callbackParams));
 }
 /** @final @nodts @return {number} */
 static m_setTimeout__java_lang_String__double(/** ?string */ callback) {
  $Overlay.$clinit();
  return goog.global.setTimeout(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(callback)));
 }
 /** @final @nodts @return {number} */
 static m_setTimeout__elemental2_core_TrustedScript__double__arrayOf_java_lang_Object__double(/** TrustedScript */ callback, /** number */ delay, /** Array<*> */ callbackParams) {
  $Overlay.$clinit();
  return goog.global.setTimeout(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(callback)), delay, ...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(callbackParams));
 }
 /** @final @nodts @return {number} */
 static m_setTimeout__elemental2_core_TrustedScript__double(/** TrustedScript */ callback) {
  $Overlay.$clinit();
  return goog.global.setTimeout(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(callback)));
 }
 /** @nodts @return {HTMLDocument} */
 static get f_document__elemental2_dom_DomGlobal_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_document__elemental2_dom_DomGlobal_$Overlay);
 }
 /** @nodts @return {boolean} */
 static get f_isSecureContext__elemental2_dom_DomGlobal_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_isSecureContext__elemental2_dom_DomGlobal_$Overlay);
 }
 /** @nodts @return {Location} */
 static get f_location__elemental2_dom_DomGlobal_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_location__elemental2_dom_DomGlobal_$Overlay);
 }
 /** @nodts @return {Navigator} */
 static get f_navigator__elemental2_dom_DomGlobal_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_navigator__elemental2_dom_DomGlobal_$Overlay);
 }
 /** @nodts @return {Screen} */
 static get f_screen__elemental2_dom_DomGlobal_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_screen__elemental2_dom_DomGlobal_$Overlay);
 }
 /** @nodts @return {Window} */
 static get f_self__elemental2_dom_DomGlobal_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_self__elemental2_dom_DomGlobal_$Overlay);
 }
 /** @nodts @return {Window} */
 static get f_top__elemental2_dom_DomGlobal_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_top__elemental2_dom_DomGlobal_$Overlay);
 }
 /** @nodts @return {VisualViewport} */
 static get f_visualViewport__elemental2_dom_DomGlobal_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_visualViewport__elemental2_dom_DomGlobal_$Overlay);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_document__elemental2_dom_DomGlobal_$Overlay = goog.global.document;
  $Overlay.$static_isSecureContext__elemental2_dom_DomGlobal_$Overlay = goog.global.isSecureContext;
  $Overlay.$static_location__elemental2_dom_DomGlobal_$Overlay = goog.global.location;
  $Overlay.$static_navigator__elemental2_dom_DomGlobal_$Overlay = goog.global.navigator;
  $Overlay.$static_screen__elemental2_dom_DomGlobal_$Overlay = goog.global.screen;
  $Overlay.$static_self__elemental2_dom_DomGlobal_$Overlay = goog.global.self;
  $Overlay.$static_top__elemental2_dom_DomGlobal_$Overlay = goog.global.top;
  $Overlay.$static_visualViewport__elemental2_dom_DomGlobal_$Overlay = goog.global.visualViewport;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof goog.global;
 }
 
 /** @nodts */
 static $loadModules() {
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
/**@private {HTMLDocument} @nodts*/
$Overlay.$static_document__elemental2_dom_DomGlobal_$Overlay;
/**@private {boolean} @nodts*/
$Overlay.$static_isSecureContext__elemental2_dom_DomGlobal_$Overlay = false;
/**@private {Location} @nodts*/
$Overlay.$static_location__elemental2_dom_DomGlobal_$Overlay;
/**@private {Navigator} @nodts*/
$Overlay.$static_navigator__elemental2_dom_DomGlobal_$Overlay;
/**@private {Screen} @nodts*/
$Overlay.$static_screen__elemental2_dom_DomGlobal_$Overlay;
/**@private {Window} @nodts*/
$Overlay.$static_self__elemental2_dom_DomGlobal_$Overlay;
/**@private {Window} @nodts*/
$Overlay.$static_top__elemental2_dom_DomGlobal_$Overlay;
/**@private {VisualViewport} @nodts*/
$Overlay.$static_visualViewport__elemental2_dom_DomGlobal_$Overlay;
$Util.$setClassMetadata($Overlay, 'goog.global');

exports = $Overlay;

//# sourceMappingURL=DomGlobal$$Overlay.js.map

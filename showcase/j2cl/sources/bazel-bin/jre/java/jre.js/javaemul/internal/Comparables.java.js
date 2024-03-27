goog.module('vmbootstrap.Comparables');

goog.require('java.lang.Boolean');
goog.require('java.lang.Comparable');
goog.require('java.lang.Double');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('javaemul.internal.JsUtils');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const $Comparables = goog.require('vmbootstrap.Comparables$impl');
exports = $Comparables;

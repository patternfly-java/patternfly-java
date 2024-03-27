goog.module('java.lang.System');

goog.require('java.io.PrintStream');
goog.require('java.lang.Class');
goog.require('java.lang.IndexOutOfBoundsException');
goog.require('java.lang.Object');
goog.require('javaemul.internal.ArrayHelper');
goog.require('javaemul.internal.HashCodes');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Objects');
goog.require('vmbootstrap.Primitives');

const System = goog.require('java.lang.System$impl');
exports = System;

goog.module('java.lang.Throwable');

goog.require('java.io.PrintStream');
goog.require('java.io.Serializable');
goog.require('java.lang.JsException');
goog.require('java.lang.NullPointerException');
goog.require('java.lang.Object');
goog.require('java.lang.StackTraceElement');
goog.require('java.lang.String');
goog.require('java.lang.System');
goog.require('java.util.ArrayList');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('javaemul.internal.ThrowableUtils');
goog.require('javaemul.internal.ThrowableUtils.NativeError.$Overlay');
goog.require('javaemul.internal.ThrowableUtils.NativeTypeError.$Overlay');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Throwable = goog.require('java.lang.Throwable$impl');
exports = Throwable;

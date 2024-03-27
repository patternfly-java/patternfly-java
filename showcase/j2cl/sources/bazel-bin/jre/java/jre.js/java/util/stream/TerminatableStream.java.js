goog.module('java.util.stream.TerminatableStream');

goog.require('java.lang.Error');
goog.require('java.lang.IllegalStateException');
goog.require('java.lang.Object');
goog.require('java.lang.Runnable');
goog.require('java.lang.RuntimeException');
goog.require('java.lang.String');
goog.require('java.lang.Throwable');
goog.require('java.util.ArrayList');
goog.require('java.util.List');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Asserts');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const TerminatableStream = goog.require('java.util.stream.TerminatableStream$impl');
exports = TerminatableStream;

goog.module('javaemul.internal.InternalPreconditions');

goog.require('java.lang.ArithmeticException');
goog.require('java.lang.ArrayIndexOutOfBoundsException');
goog.require('java.lang.ArrayStoreException');
goog.require('java.lang.AssertionError');
goog.require('java.lang.ClassCastException');
goog.require('java.lang.Exception');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.IllegalStateException');
goog.require('java.lang.IndexOutOfBoundsException');
goog.require('java.lang.NegativeArraySizeException');
goog.require('java.lang.NullPointerException');
goog.require('java.lang.Object');
goog.require('java.lang.RuntimeException');
goog.require('java.lang.String');
goog.require('java.lang.StringIndexOutOfBoundsException');
goog.require('java.util.ConcurrentModificationException');
goog.require('java.util.NoSuchElementException');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Exceptions');

const InternalPreconditions = goog.require('javaemul.internal.InternalPreconditions$impl');
exports = InternalPreconditions;

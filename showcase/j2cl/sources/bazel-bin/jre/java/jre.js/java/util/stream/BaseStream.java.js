goog.module('java.util.stream.BaseStream');

goog.require('java.lang.AutoCloseable');
goog.require('java.lang.Runnable');
goog.require('java.util.Iterator');
goog.require('java.util.Spliterator');
goog.require('nativebootstrap.Util');

const BaseStream = goog.require('java.util.stream.BaseStream$impl');
exports = BaseStream;

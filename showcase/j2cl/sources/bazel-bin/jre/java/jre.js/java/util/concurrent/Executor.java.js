goog.module('java.util.concurrent.Executor');

goog.require('java.lang.Runnable');
goog.require('java.util.concurrent.Executor.$LambdaAdaptor');
goog.require('nativebootstrap.Util');

const Executor = goog.require('java.util.concurrent.Executor$impl');
exports = Executor;

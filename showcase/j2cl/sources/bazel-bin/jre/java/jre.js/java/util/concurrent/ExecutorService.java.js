goog.module('java.util.concurrent.ExecutorService');

goog.require('java.lang.Runnable');
goog.require('java.util.Collection');
goog.require('java.util.List');
goog.require('java.util.concurrent.Callable');
goog.require('java.util.concurrent.Executor');
goog.require('java.util.concurrent.Future');
goog.require('java.util.concurrent.TimeUnit');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');

const ExecutorService = goog.require('java.util.concurrent.ExecutorService$impl');
exports = ExecutorService;

goog.module('java.util.concurrent.ScheduledExecutorService');

goog.require('java.lang.Runnable');
goog.require('java.util.concurrent.Callable');
goog.require('java.util.concurrent.ExecutorService');
goog.require('java.util.concurrent.ScheduledFuture');
goog.require('java.util.concurrent.TimeUnit');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');

const ScheduledExecutorService = goog.require('java.util.concurrent.ScheduledExecutorService$impl');
exports = ScheduledExecutorService;

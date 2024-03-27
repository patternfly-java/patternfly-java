goog.module('java.lang.invoke.LambdaMetafactory');

goog.require('java.lang.Object');
goog.require('java.lang.invoke.CallSite');
goog.require('java.lang.invoke.MethodHandle');
goog.require('java.lang.invoke.MethodHandles.Lookup');
goog.require('java.lang.invoke.MethodType');
goog.require('nativebootstrap.Util');

const LambdaMetafactory = goog.require('java.lang.invoke.LambdaMetafactory$impl');
exports = LambdaMetafactory;

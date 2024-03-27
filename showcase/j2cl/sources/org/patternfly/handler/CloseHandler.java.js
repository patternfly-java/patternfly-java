goog.module('org.patternfly.handler.CloseHandler');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.patternfly.handler.CloseHandler.$LambdaAdaptor');

const CloseHandler = goog.require('org.patternfly.handler.CloseHandler$impl');
exports = CloseHandler;

goog.module('org.patternfly.layout.stack.Stack');

goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.layout.BaseLayout');
goog.require('org.patternfly.layout.stack.StackItem');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Modifiers.Gutter');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Stack = goog.require('org.patternfly.layout.stack.Stack$impl');
exports = Stack;

goog.module('org.patternfly.component.jumplinks.JumpLinksList');

goog.require('elemental2.dom.HTMLLIElement.$Overlay');
goog.require('java.lang.Iterable');
goog.require('java.lang.String');
goog.require('java.util.HashMap');
goog.require('java.util.Map');
goog.require('java.util.function.Function');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.jumplinks.JumpLinksItem');
goog.require('org.patternfly.component.jumplinks.JumpLinksSubComponent');
goog.require('org.patternfly.core.Attributes');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const JumpLinksList = goog.require('org.patternfly.component.jumplinks.JumpLinksList$impl');
exports = JumpLinksList;

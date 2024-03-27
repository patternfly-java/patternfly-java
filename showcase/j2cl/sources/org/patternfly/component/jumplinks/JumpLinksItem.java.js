goog.module('org.patternfly.component.jumplinks.JumpLinksItem');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.EventListener.$Overlay');
goog.require('elemental2.dom.HTMLAnchorElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.HTMLLIElement.$Overlay');
goog.require('elemental2.dom.MouseEvent.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.WithText');
goog.require('org.patternfly.component.jumplinks.JumpLinks');
goog.require('org.patternfly.component.jumplinks.JumpLinksList');
goog.require('org.patternfly.component.jumplinks.JumpLinksSubComponent');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.handler.ComponentHandler');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const JumpLinksItem = goog.require('org.patternfly.component.jumplinks.JumpLinksItem$impl');
exports = JumpLinksItem;
